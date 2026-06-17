'use client';

import Link from 'next/link';
import { Button } from '@/components/ui/button';
import {
  Accordion,
  AccordionContent,
  AccordionItem,
  AccordionTrigger,
} from '@/components/ui/accordion';
import { ArrowRight } from 'lucide-react';

const faqs = [
  {
    question: 'How quickly can you clean my Newton-le-Willows driveway?',
    answer: 'Most residential driveways take 1-2 hours depending on size and condition. We typically complete jobs within 5-7 working days of booking. For commercial properties or larger areas, we schedule at a time that suits your business. Let us know your urgency on the quote form and we\'ll do our best to accommodate.',
  },
  {
    question: 'Why choose soft washing for roofs over pressure washing?',
    answer: 'Roofs, render, and delicate surfaces are easily damaged by high-pressure water. Our soft washing method uses specialist cleaning solutions and controlled pressure, preventing tile erosion and mortar damage—common problems with standard pressure washing. It\'s safer, longer-lasting, and actually more effective for stubborn moss and algae.',
  },
  {
    question: 'Do you serve areas outside Newton-le-Willows like Golborne and Wigan?',
    answer: 'Yes! We regularly work across Golborne, Lowton, Haydock, Warrington, St Helens, and Wigan. If you\'re in WA12, WA11 or WA3 postcodes, we likely cover you. Contact us with your postcode and we\'ll confirm. We typically charge a mileage fee for areas beyond Newton-le-Willows.',
  },
  {
    question: 'How is your pricing structured for driveways and patios?',
    answer: 'We provide free, no-obligation quotes based on size, surface condition, and access. Pricing typically ranges from £150-£400 for residential driveways depending on square footage and cleaning intensity. Block paving, patios, and roof cleaning are quoted individually. Request a quote online or call us for an informal chat about your property.',
  },
];

export function FAQPreview() {
  return (
    <section className="section-padding bg-secondary/30" aria-labelledby="faq-preview-heading">
      <div className="container-custom">
        <div className="grid gap-12 lg:grid-cols-2 lg:gap-16">

          {/* Header */}
          <div>
            <span className="inline-block text-sm font-semibold text-accent uppercase tracking-wider mb-3">
              Common Questions
            </span>
            <h2 id="faq-preview-heading" className="font-display text-3xl md:text-4xl font-bold text-foreground mb-6">
              Frequently Asked Questions
            </h2>
            <p className="text-muted-foreground text-lg mb-6 leading-relaxed">
              We understand you may have questions about our exterior cleaning services.
              Here are answers to some of the most common queries we receive from customers.
            </p>
            <Button variant="outline" asChild>
              <Link href="/faq">
                View All FAQs
                <ArrowRight className="ml-2 h-4 w-4" aria-hidden="true" />
              </Link>
            </Button>
          </div>

          {/* FAQ Accordion */}
          <div>
            <Accordion type="single" collapsible className="w-full">
              {faqs.map((faq, index) => (
                <AccordionItem
                  key={index}
                  value={`item-${index}`}
                  className="border-border/50 transition-colors duration-200 hover:border-accent/30"
                >
                  <AccordionTrigger className="text-left font-display font-semibold text-foreground hover:text-accent transition-colors duration-200 py-4">
                    {faq.question}
                  </AccordionTrigger>
                  <AccordionContent className="text-muted-foreground leading-relaxed pb-4">
                    {faq.answer}
                  </AccordionContent>
                </AccordionItem>
              ))}
            </Accordion>
          </div>

        </div>
      </div>
    </section>
  );
}
