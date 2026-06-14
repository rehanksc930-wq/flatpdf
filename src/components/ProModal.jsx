import { X, Check } from 'lucide-react';

export default function ProModal({ isOpen, onClose }) {
  if (!isOpen) return null;

  const handleCTAClick = (e) => {
    e.preventDefault();
    // Placeholder: Real checkout URL will be added later
  };

  return (
    <div className="fixed inset-0 z-50 flex items-center justify-center p-4">
      {/* Overlay */}
      <div
        className="absolute inset-0 bg-black/50"
        onClick={onClose}
      ></div>

      {/* Modal Card */}
      <div className="relative bg-white rounded-2xl shadow-2xl max-w-lg w-full p-8 z-10">
        {/* Close Button */}
        <button
          onClick={onClose}
          className="absolute top-4 right-4 text-gray hover:text-dark transition-colors"
        >
          <X className="w-6 h-6" />
        </button>

        {/* Badge */}
        <div className="inline-block bg-indigo-100 text-primary text-sm font-semibold px-4 py-1 rounded-full mb-4">
          ⚡ FlatPDF Pro
        </div>

        {/* Headline */}
        <h2 className="text-2xl font-bold text-dark mb-2">
          Need to flatten multiple PDFs?
        </h2>

        {/* Subheadline */}
        <p className="text-gray mb-6">
          $5 one-time payment — no subscription, ever
        </p>

        {/* Divider */}
        <div className="border-t border-border mb-6"></div>

        {/* Features */}
        <ul className="space-y-3 mb-6">
          <li className="flex items-start gap-3">
            <Check className="w-5 h-5 text-success mt-0.5 flex-shrink-0" />
            <span className="text-dark">Batch flatten up to 20 PDFs at once</span>
          </li>
          <li className="flex items-start gap-3">
            <Check className="w-5 h-5 text-success mt-0.5 flex-shrink-0" />
            <span className="text-dark">Download all files as a single ZIP</span>
          </li>
          <li className="flex items-start gap-3">
            <Check className="w-5 h-5 text-success mt-0.5 flex-shrink-0" />
            <span className="text-dark">Reduce output file size automatically</span>
          </li>
          <li className="flex items-start gap-3">
            <Check className="w-5 h-5 text-success mt-0.5 flex-shrink-0" />
            <span className="text-dark">Password protect your flattened PDFs</span>
          </li>
          <li className="flex items-start gap-3">
            <Check className="w-5 h-5 text-success mt-0.5 flex-shrink-0" />
            <span className="text-dark">Priority email support</span>
          </li>
        </ul>

        {/* CTA Button */}
        <a
          href="#"
          onClick={handleCTAClick}
          className="block w-full bg-primary hover:bg-primary-hover text-white font-semibold py-3 px-6 rounded-lg text-center transition-colors duration-200 mb-4"
        >
          Get Pro for $5 →
        </a>

        {/* Footer Text */}
        <p className="text-center text-sm text-gray">
          One-time · No subscription · Works forever
        </p>

        {/* Dismiss Link */}
        <button
          onClick={onClose}
          className="w-full text-center text-sm text-gray hover:text-dark transition-colors duration-200 mt-3"
        >
          No thanks, I only needed one PDF
        </button>
      </div>
    </div>
  );
}
