import { useState } from 'react';
import DropZone from '../components/DropZone';
import ProModal from '../components/ProModal';
import FAQ from '../components/FAQ';

export default function Home() {
  const [proModalOpen, setProModalOpen] = useState(false);

  const handleShowProModal = () => {
    setProModalOpen(true);
  };

  const handleCloseProModal = () => {
    setProModalOpen(false);
  };

  const scrollToHowItWorks = (e) => {
    e.preventDefault();
    const element = document.getElementById('how-it-works');
    if (element) {
      element.scrollIntoView({ behavior: 'smooth' });
    }
  };

  return (
    <div className="min-h-screen bg-white">
      {/* Navbar */}
      <nav className="sticky top-0 z-40 bg-white border-b border-border h-16 px-6 flex items-center justify-between">
        <div className="font-bold text-xl text-primary">
          🔒 FlatPDF
        </div>
        <a
          href="#how-it-works"
          onClick={scrollToHowItWorks}
          className="text-gray hover:text-dark transition-colors"
        >
          How it works
        </a>
      </nav>

      {/* Hero Section */}
      <section className="pt-20 pb-12 px-6 text-center">
        <h1 className="text-4xl md:text-5xl font-bold text-dark mb-4 max-w-4xl mx-auto leading-tight">
          Flatten Fillable PDF Forms — Instantly & Privately
        </h1>
        <p className="text-lg text-gray max-w-xl mx-auto mb-6">
          Convert your fillable PDF form fields to permanent static text, right in your browser. No upload. No account. No Adobe.
        </p>

        {/* Badges */}
        <div className="flex flex-wrap justify-center gap-3">
          <span className="bg-card text-dark text-sm px-4 py-2 rounded-full border border-border">
            🔒 Zero Upload
          </span>
          <span className="bg-card text-dark text-sm px-4 py-2 rounded-full border border-border">
            ⚡ Instant Results
          </span>
          <span className="bg-card text-dark text-sm px-4 py-2 rounded-full border border-border">
            🆓 Free Forever
          </span>
          <span className="bg-card text-dark text-sm px-4 py-2 rounded-full border border-border">
            📱 Any Device
          </span>
        </div>
      </section>

      {/* Tool Section */}
      <section className="pb-16 px-6">
        <div className="max-w-xl mx-auto bg-white rounded-2xl shadow-lg border border-border p-8">
          <DropZone onShowProModal={handleShowProModal} />
        </div>
      </section>

      {/* How It Works Section */}
      <section id="how-it-works" className="bg-card py-16 px-6">
        <div className="max-w-5xl mx-auto">
          <h2 className="text-3xl font-bold text-dark text-center mb-2">
            How It Works
          </h2>
          <p className="text-gray text-center mb-12">
            Three steps. No surprises.
          </p>

          <div className="grid md:grid-cols-3 gap-8">
            {/* Step 1 */}
            <div className="text-center">
              <div className="w-14 h-14 rounded-full bg-primary text-white font-bold text-xl flex items-center justify-center mx-auto mb-4">
                1
              </div>
              <h3 className="text-lg font-semibold text-dark mb-2">Drop Your PDF</h3>
              <p className="text-gray text-sm">
                Drag your PDF form onto the tool above or click to browse your files.
              </p>
            </div>

            {/* Step 2 */}
            <div className="text-center">
              <div className="w-14 h-14 rounded-full bg-primary text-white font-bold text-xl flex items-center justify-center mx-auto mb-4">
                2
              </div>
              <h3 className="text-lg font-semibold text-dark mb-2">Instant Browser Processing</h3>
              <p className="text-gray text-sm">
                pdf-lib processes your PDF locally in your browser memory. Nothing leaves your device.
              </p>
            </div>

            {/* Step 3 */}
            <div className="text-center">
              <div className="w-14 h-14 rounded-full bg-primary text-white font-bold text-xl flex items-center justify-center mx-auto mb-4">
                3
              </div>
              <h3 className="text-lg font-semibold text-dark mb-2">Download Your Flat PDF</h3>
              <p className="text-gray text-sm">
                Your flattened PDF downloads automatically. Form fields are now permanent, uneditable text.
              </p>
            </div>
          </div>
        </div>
      </section>

      {/* Trust Features Section */}
      <section className="py-16 px-6">
        <div className="max-w-5xl mx-auto">
          <h2 className="text-3xl font-bold text-dark text-center mb-12">
            Why People Trust FlatPDF
          </h2>

          <div className="grid sm:grid-cols-2 md:grid-cols-4 gap-6">
            {/* Feature 1 */}
            <div className="text-center p-6">
              <div className="text-4xl mb-3">🔒</div>
              <h3 className="font-semibold text-dark mb-2">100% Private</h3>
              <p className="text-gray text-sm">
                Processed in your browser. We have zero access to your files.
              </p>
            </div>

            {/* Feature 2 */}
            <div className="text-center p-6">
              <div className="text-4xl mb-3">⚡</div>
              <h3 className="font-semibold text-dark mb-2">No Wait Time</h3>
              <p className="text-gray text-sm">
                No upload means no waiting. Your PDF is processed at full local CPU speed.
              </p>
            </div>

            {/* Feature 3 */}
            <div className="text-center p-6">
              <div className="text-4xl mb-3">🆓</div>
              <h3 className="font-semibold text-dark mb-2">Free Single Files</h3>
              <p className="text-gray text-sm">
                Flatten one PDF at a time, unlimited times. No account, no credit card.
              </p>
            </div>

            {/* Feature 4 */}
            <div className="text-center p-6">
              <div className="text-4xl mb-3">📱</div>
              <h3 className="font-semibold text-dark mb-2">Works Everywhere</h3>
              <p className="text-gray text-sm">
                Chrome, Firefox, Safari, Edge. Windows, Mac, Linux, iOS, Android.
              </p>
            </div>
          </div>
        </div>
      </section>

      {/* FAQ Section */}
      <section className="bg-card py-16 px-6">
        <div className="max-w-3xl mx-auto">
          <h2 className="text-3xl font-bold text-dark text-center mb-12">
            Frequently Asked Questions
          </h2>
          <FAQ />
        </div>
      </section>

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
            <a href="#" className="hover:text-white transition-colors">Privacy Policy</a>
            <span>·</span>
            <a href="#" className="hover:text-white transition-colors">FAQ</a>
            <span>·</span>
            <a href="mailto:hello@flatpdf.app" className="hover:text-white transition-colors">Contact</a>
          </div>

          <p className="text-gray-500 text-sm">
            © 2025 FlatPDF · Built for people who just need their PDF fixed
          </p>
        </div>
      </footer>

      {/* Pro Modal */}
      <ProModal isOpen={proModalOpen} onClose={handleCloseProModal} />
    </div>
  );
}
