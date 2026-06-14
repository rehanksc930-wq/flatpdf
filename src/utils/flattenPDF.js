import { PDFDocument } from 'pdf-lib';

export async function flattenPDFFile(file, onProgress) {
  try {
    onProgress(10);
    const arrayBuffer = await file.arrayBuffer();
    onProgress(30);
    const pdfDoc = await PDFDocument.load(arrayBuffer, {
      ignoreEncryption: true,
      updateMetadata: false
    });
    onProgress(60);
    try {
      const form = pdfDoc.getForm();
      form.flatten();
    } catch (e) {
      // PDF has no form fields — still process and return it
    }
    onProgress(85);
    const pdfBytes = await pdfDoc.save();
    onProgress(100);
    return { success: true, bytes: pdfBytes };
  } catch (error) {
    return { success: false, error: 'This PDF could not be flattened. It may be corrupted or heavily encrypted.' };
  }
}

export function downloadPDF(bytes, originalName) {
  const blob = new Blob([bytes], { type: 'application/pdf' });
  const url = URL.createObjectURL(blob);
  const a = document.createElement('a');
  a.href = url;
  a.download = 'flattened_' + originalName;
  document.body.appendChild(a);
  a.click();
  document.body.removeChild(a);
  setTimeout(() => URL.revokeObjectURL(url), 2000);
}

export function formatBytes(bytes) {
  if (bytes === 0) return '0 B';
  if (bytes < 1024) return bytes + ' B';
  if (bytes < 1048576) return (bytes / 1024).toFixed(1) + ' KB';
  return (bytes / 1048576).toFixed(2) + ' MB';
}
