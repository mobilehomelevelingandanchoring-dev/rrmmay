'use client';

import { useState } from 'react';

interface FaqItem {
  question: string;
  answer: string;
}

// Mirrors the faqSchema in app/page.tsx — keep both in sync
const faqs: FaqItem[] = [
  {
    question: 'How often should I have my driveway cleaned?',
    answer:
      'Most driveways benefit from a professional clean every 12–18 months, depending on tree coverage, foot traffic, and surface type. Block paving and concrete surfaces tend to accumulate moss and algae faster and may need attention more regularly.',
  },
  {
    question: 'Will pressure washing damage my render?',
    answer:
      'High-pressure washing can damage softer renders such as K-Rend or monocouche coatings. We always use low-pressure soft washing combined with specialist biocidal treatments for render surfaces — this removes algae and moss safely without risking surface damage.',
  },
  {
    question: 'Do you work on commercial properties?',
    answer:
      'Yes — we serve both domestic and commercial clients across the North West, including car parks, industrial units, retail premises, and multi-storey facilities. We can work outside business hours to minimise disruption.',
  },
  {
    question: 'How long does a roof clean take?',
    answer:
      'Most residential roofs are completed within a single day. Larger or heavily soiled roofs may require a follow-up bio wash treatment visit to ensure all biological growth has been fully neutralised.',
  },
  {
    question: 'What areas do you cover for exterior cleaning?',
    answer:
      'We cover a wide area across the North West including Newton-le-Willows, Warrington, St Helens, Widnes, Leigh, Golborne, Skelmersdale, Ormskirk, Huyton, Haydock, Lymm, Ashton-in-Makerfield, Manchester, Irlam, Wavertree, Halewood, Uppermill, and surrounding areas.',
  },
  {
    question: 'Do you offer driveway sealing after cleaning?',
    answer:
      'Yes — we offer driveway sealing and patio sealing services. Applying a professional-grade sealer after cleaning helps protect the surface from future staining, moss regrowth, and weathering, extending the time between future cleans significantly.',
  },
  {
    question: 'How much does gutter cleaning cost?',
    answer:
      'Gutter cleaning prices vary depending on the size of the property, the number of linear metres of guttering, and the level of blockage. We offer free, no-obligation quotes — contact us for an accurate price for your property.',
  },
];

export function FaqAccordion() {
  const [openIndex, setOpenIndex] = useState<number | null>(null);

  return (
    <div className="space-y-3">
      {faqs.map((faq, index) => {
        const isOpen = openIndex === index;
        const panelId = `faq-panel-${index}`;
        const triggerId = `faq-trigger-${index}`;

        return (
          <div
            key={index}
            className="bg-white rounded-xl border border-slate-200 overflow-hidden"
          >
            <button
              id={triggerId}
              aria-expanded={isOpen}
              aria-controls={panelId}
              onClick={() => setOpenIndex(isOpen ? null : index)}
              className="w-full flex items-center justify-between gap-4 px-6 py-4 text-left font-heading font-semibold text-slate-800 hover:text-amber-600 transition-colors focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-inset focus-visible:ring-amber-500"
            >
              <span>{faq.question}</span>
              <svg
                aria-hidden="true"
                className={`h-5 w-5 shrink-0 text-slate-400 transition-transform duration-200 ${
                  isOpen ? 'rotate-180' : ''
                }`}
                fill="none"
                stroke="currentColor"
                viewBox="0 0 24 24"
                strokeWidth={2}
              >
                <path strokeLinecap="round" strokeLinejoin="round" d="M19 9l-7 7-7-7" />
              </svg>
            </button>
            <div
              id={panelId}
              role="region"
              aria-labelledby={triggerId}
              className={`overflow-hidden transition-all duration-300 ease-in-out ${
                isOpen ? 'max-h-96' : 'max-h-0'
              }`}
            >
              <p className="px-6 pb-5 font-body text-base text-slate-600 leading-relaxed">
                {faq.answer}
              </p>
            </div>
          </div>
        );
      })}
    </div>
  );
}
