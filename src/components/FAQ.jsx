import { useState } from 'react';
import { ChevronDown } from 'lucide-react';

const faqData = [
  {
    q: "What does flattening a PDF actually do?",
    a: "Flattening merges all fillable form fields into the PDF page as permanent, static text. The interactive fields disappear and your typed content becomes a fixed part of the document. This prevents anyone from changing the text and is required by many HR portals, government systems, and court filing systems."
  },
  {
    q: "Is my document actually private?",
    a: "Yes, 100%. Your PDF is processed entirely in your browser's memory using a JavaScript library called pdf-lib. It is never sent to our servers — we don't even have a server that receives files. You can verify this by turning off your internet connection and the tool still works."
  },
  {
    q: "Why did the portal say 'please submit a flat PDF'?",
    a: "Many submission systems — HR platforms, government portals, court filing systems, insurance portals — cannot process interactive PDF form fields. They require a 'flat' version where the filled data is locked into the document as static content. FlatPDF solves this in seconds."
  },
  {
    q: "Does it work on encrypted or password-protected PDFs?",
    a: "FlatPDF can process most standard PDFs including many protected ones. If your PDF has a strong ownership password that blocks modification, you may need to remove the password first using your original PDF creator software."
  },
  {
    q: "What is the difference between free and Pro?",
    a: "The free version lets you flatten one PDF at a time, unlimited times, forever — no account needed. FlatPDF Pro ($5 one-time) adds batch processing (flatten up to 20 PDFs at once and download as a ZIP), automatic file compression, and password protection for your flattened files."
  }
];

export default function FAQ() {
  const [openIndex, setOpenIndex] = useState(null);

  const toggleItem = (index) => {
    setOpenIndex(openIndex === index ? null : index);
  };

  return (
    <div className="space-y-3">
      {faqData.map((item, index) => (
        <div
          key={index}
          className="border border-border rounded-lg overflow-hidden"
        >
          <button
            onClick={() => toggleItem(index)}
            className="w-full flex items-center justify-between p-4 text-left hover:bg-card transition-colors duration-200"
          >
            <span className="font-semibold text-dark pr-4">{item.q}</span>
            <ChevronDown
              className={`w-5 h-5 text-gray flex-shrink-0 transition-transform duration-300 ${
                openIndex === index ? 'rotate-180' : ''
              }`}
            />
          </button>

          <div
            className={`overflow-hidden transition-all duration-300 ${
              openIndex === index ? 'max-h-96' : 'max-h-0'
            }`}
          >
            <div className="p-4 pt-0 text-gray leading-relaxed">
              {item.a}
            </div>
          </div>
        </div>
      ))}
    </div>
  );
}
