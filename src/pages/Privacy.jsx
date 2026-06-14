import { Link } from 'react-router-dom';

export default function Privacy() {
  return (
    <div className="min-h-screen bg-white">
      {/* Navbar */}
      <nav className="sticky top-0 z-40 bg-white border-b border-border h-16 px-6 flex items-center justify-between">
        <Link to="/" className="font-bold text-xl text-primary">
          🔒 FlatPDF
        </Link>
        <Link
          to="/"
          className="text-gray hover:text-dark transition-colors"
        >
          Back to tool
        </Link>
      </nav>

      {/* Content */}
      <main className="py-16 px-6">
        <div className="max-w-3xl mx-auto">
          <h1 className="text-4xl font-bold text-dark mb-4">
            Privacy Policy
          </h1>
          <p className="text-gray mb-12">
            Last updated: June 2025
          </p>

          {/* Section 1 */}
          <section className="mb-12">
            <h2 className="text-xl font-semibold text-dark mb-4">
              The Short Version
            </h2>
            <p className="text-gray leading-relaxed">
              FlatPDF processes all files entirely in your browser. We never receive, store, or transmit your PDF files. This is not a legal technicality — it is how the software is built.
            </p>
          </section>

          {/* Section 2 */}
          <section className="mb-12">
            <h2 className="text-xl font-semibold text-dark mb-4">
              What We Collect
            </h2>
            <p className="text-gray leading-relaxed">
              We collect no personal data, no files, no form content. We use Google Analytics to count anonymous page visits (no personal identifiers). We do not use cookies for tracking.
            </p>
          </section>

          {/* Section 3 */}
          <section className="mb-12">
            <h2 className="text-xl font-semibold text-dark mb-4">
              Your Files
            </h2>
            <p className="text-gray leading-relaxed">
              Your PDF file is loaded into your browser's memory using the JavaScript File API. It is processed by the pdf-lib library running locally. The output file is generated in your browser and downloaded directly to your device. At no point does any file data travel over the internet to our systems.
            </p>
          </section>

          {/* Section 4 */}
          <section className="mb-12">
            <h2 className="text-xl font-semibold text-dark mb-4">
              Payments
            </h2>
            <p className="text-gray leading-relaxed">
              If you purchase FlatPDF Pro, payment is processed by Lemon Squeezy. We receive confirmation that a payment was made and a license key is generated. We do not store your payment card details.
            </p>
          </section>

          {/* Section 5 */}
          <section className="mb-12">
            <h2 className="text-xl font-semibold text-dark mb-4">
              Contact
            </h2>
            <p className="text-gray leading-relaxed">
              <a href="mailto:hello@flatpdf.app" className="text-primary hover:underline">
                hello@flatpdf.app
              </a>
            </p>
          </section>
        </div>
      </main>

      {/* Footer */}
      <footer className="bg-dark py-12 px-6 text-center">
        <div className="max-w-4xl mx-auto">
          <div className="font-bold text-xl text-white mb-2">
            🔒 FlatPDF
          </div>
          <p className="text-gray-400 mb-6">
            Your files never leave your browser. Ever.
          </p>

          <div className="flex justify-center gap-6 text-sm text-gray-400 mb-6">
            <Link to="/privacy" className="hover:text-white transition-colors">Privacy Policy</Link>
            <span>·</span>
            <Link to="/#how-it-works" className="hover:text-white transition-colors">FAQ</Link>
            <span>·</span>
            <a href="mailto:hello@flatpdf.app" className="hover:text-white transition-colors">Contact</a>
          </div>

          <p className="text-gray-500 text-sm">
            © 2025 FlatPDF · Built for people who just need their PDF fixed
          </p>
        </div>
      </footer>
    </div>
  );
}
