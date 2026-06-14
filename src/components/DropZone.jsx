import { useState, useCallback, useEffect } from 'react';
import { useDropzone } from 'react-dropzone';
import { FileText, CheckCircle, XCircle, X } from 'lucide-react';
import { flattenPDFFile, downloadPDF, formatBytes } from '../utils/flattenPDF';

export default function DropZone({ onShowProModal }) {
  const [state, setState] = useState('idle');
  const [file, setFile] = useState(null);
  const [progress, setProgress] = useState(0);
  const [error, setError] = useState('');
  const [originalSize, setOriginalSize] = useState(0);
  const [flattenedSize, setFlattenedSize] = useState(0);
  const [flattenedBytes, setFlattenedBytes] = useState(null);

  const MAX_FILE_SIZE = 50 * 1024 * 1024; // 50MB

  const onDrop = useCallback((acceptedFiles, rejectedFiles) => {
    if (rejectedFiles.length > 0) {
      const rejection = rejectedFiles[0];
      if (rejection.errors[0]?.code === 'file-too-large') {
        setError('File is too large. Maximum size is 50MB.');
        setState('error');
      } else if (rejection.errors[0]?.code === 'file-invalid-type') {
        setError('Please upload a PDF file.');
        setState('error');
      } else {
        setError('Invalid file. Please upload a PDF file.');
        setState('error');
      }
      return;
    }

    if (acceptedFiles.length > 0) {
      setFile(acceptedFiles[0]);
      setOriginalSize(acceptedFiles[0].size);
      setState('ready');
      setProgress(0);
      setError('');
    }
  }, []);

  const { getRootProps, getInputProps, isDragActive } = useDropzone({
    onDrop,
    accept: { 'application/pdf': ['.pdf'] },
    maxSize: MAX_FILE_SIZE,
    multiple: false,
    noClick: state !== 'idle',
    noDrag: state !== 'idle'
  });

  const handleFlatten = async () => {
    if (!file) return;

    setState('processing');
    setProgress(0);

    const result = await flattenPDFFile(file, setProgress);

    if (result.success) {
      setFlattenedBytes(result.bytes);
      setFlattenedSize(result.bytes.length);
      setState('success');
      downloadPDF(result.bytes, file.name);

      // Trigger ProModal after 2.5 seconds
      setTimeout(() => {
        if (onShowProModal) {
          onShowProModal();
        }
      }, 2500);
    } else {
      setError(result.error);
      setState('error');
    }
  };

  const handleReset = () => {
    setState('idle');
    setFile(null);
    setProgress(0);
    setError('');
    setOriginalSize(0);
    setFlattenedSize(0);
    setFlattenedBytes(null);
  };

  const handleDownloadAgain = () => {
    if (flattenedBytes && file) {
      downloadPDF(flattenedBytes, file.name);
    }
  };

  return (
    <div className="w-full">
      {state === 'idle' && (
        <div
          {...getRootProps()}
          className={`border-2 ${isDragActive ? 'border-primary bg-indigo-50 border-solid' : 'border-border border-dashed'} rounded-xl p-12 text-center cursor-pointer transition-all duration-200`}
        >
          <input {...getInputProps()} />
          <FileText className="w-12 h-12 mx-auto text-primary mb-4" strokeWidth={1.5} />
          <p className="text-lg font-semibold text-dark mb-1">Drop your PDF here</p>
          <p className="text-gray text-sm">or click to browse</p>
        </div>
      )}

      {state === 'idle' && (
        <p className="text-center text-gray text-sm mt-4">
          🔒 Your file stays in your browser — never uploaded
        </p>
      )}

      {state === 'ready' && file && (
        <div className="border border-border rounded-xl p-6">
          <div className="flex items-center gap-3 mb-4">
            <FileText className="w-10 h-10 text-primary" strokeWidth={1.5} />
            <div>
              <p className="font-semibold text-dark">{file.name}</p>
              <p className="text-sm text-gray">{formatBytes(originalSize)}</p>
            </div>
          </div>

          <button
            onClick={handleFlatten}
            className="w-full bg-primary hover:bg-primary-hover text-white font-semibold py-3 px-6 rounded-lg transition-colors duration-200"
          >
            ⚡ Flatten PDF Now
          </button>

          <p className="text-center text-gray text-sm mt-3">
            Processing happens locally in your browser
          </p>

          <button
            onClick={handleReset}
            className="w-full text-gray text-sm mt-3 hover:text-dark transition-colors duration-200"
          >
            ✕ Remove file
          </button>
        </div>
      )}

      {state === 'processing' && (
        <div className="border border-border rounded-xl p-8 text-center">
          <div className="relative w-16 h-16 mx-auto mb-4">
            <div className="absolute inset-0 border-4 border-gray-200 rounded-full"></div>
            <div className="absolute inset-0 border-4 border-primary rounded-full animate-spin border-t-transparent"></div>
          </div>
          <p className="text-lg font-semibold text-dark mb-4">Flattening your PDF...</p>

          <div className="w-full bg-gray-200 rounded-full h-3 mb-2 overflow-hidden">
            <div
              className="h-full bg-primary transition-all duration-300 ease-out rounded-full"
              style={{ width: `${progress}%` }}
            ></div>
          </div>
          <p className="text-sm text-gray">{progress}%</p>

          <p className="text-sm text-gray mt-4">
            Processing in your browser — your file is never uploaded
          </p>
        </div>
      )}

      {state === 'success' && (
        <div className="border border-border rounded-xl p-8 text-center">
          <CheckCircle className="w-16 h-16 mx-auto text-success mb-4" strokeWidth={1.5} />
          <p className="text-xl font-semibold text-dark mb-2">Done! Your PDF is flattened.</p>
          <p className="text-sm text-gray mb-6">
            Original: {formatBytes(originalSize)} → Flattened: {formatBytes(flattenedSize)}
          </p>

          <div className="flex flex-col sm:flex-row gap-3">
            <button
              onClick={handleDownloadAgain}
              className="flex-1 border-2 border-primary text-primary hover:bg-indigo-50 font-semibold py-3 px-6 rounded-lg transition-colors duration-200"
            >
              Download Again
            </button>
            <button
              onClick={handleReset}
              className="flex-1 bg-primary hover:bg-primary-hover text-white font-semibold py-3 px-6 rounded-lg transition-colors duration-200"
            >
              Flatten Another PDF
            </button>
          </div>
        </div>
      )}

      {state === 'error' && (
        <div className="border border-border rounded-xl p-8 text-center">
          <XCircle className="w-16 h-16 mx-auto text-error mb-4" strokeWidth={1.5} />
          <p className="text-lg font-semibold text-dark mb-2">Something went wrong</p>
          <p className="text-sm text-gray mb-6">{error}</p>

          <button
            onClick={handleReset}
            className="bg-primary hover:bg-primary-hover text-white font-semibold py-3 px-6 rounded-lg transition-colors duration-200"
          >
            Try Another PDF
          </button>
        </div>
      )}
    </div>
  );
}
