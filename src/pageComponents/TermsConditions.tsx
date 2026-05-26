'use client';
import { useEffect } from 'react';

import Link from 'next/link';
import { Layout } from '@/components/layout/Layout';
import { ContactInfo } from '@/components/ContactInfo';
import { ChevronRight } from 'lucide-react';

export function TermsConditions() {
  useEffect(() => {
    // Add WebPage schema
    const schema = {
      '@context': 'https://schema.org',
      '@type': 'WebPage',
      name: 'Terms & Conditions',
      description: 'Read the terms and conditions for using R.R.M External Cleaning Specialist website and services. Understand your rights and obligations.',
      url: 'https://rrmexternalcleaning.co.uk/terms-conditions',
      publisher: {
        '@type': 'Organization',
        name: 'R.R.M External Cleaning Specialist'
      }
    };

    const script = document.createElement('script');
    script.type = 'application/ld+json';
    script.innerHTML = JSON.stringify(schema);
    document.head.appendChild(script);

    // Update page title and meta description
    document.title = 'Terms & Conditions | R.R.M External Cleaning Specialist';
    const metaDescription = document.querySelector('meta[name="description"]');
    if (metaDescription) {
      metaDescription.setAttribute('content', 'Read the terms and conditions for using R.R.M External Cleaning Specialist website and services. Understand your rights and obligations.');
    } else {
      const meta = document.createElement('meta');
      meta.name = 'description';
      meta.content = 'Read the terms and conditions for using R.R.M External Cleaning Specialist website and services. Understand your rights and obligations.';
      document.head.appendChild(meta);
    }

    return () => {
      if (script.parentNode) {
        document.head.removeChild(script);
      }
    };
  }, []);

  return (
    <Layout>
      <main className="min-h-screen bg-background">
      {/* Breadcrumb Navigation */}
      <nav className="bg-secondary/50" aria-label="Breadcrumb">
        <div className="container-custom py-4">
          <ol className="flex items-center gap-2 text-sm">
            <li>
              <Link href="/" className="text-primary hover:text-accent transition-colors">
                Home
              </Link>
            </li>
            <li className="text-primary-foreground/50">
              <ChevronRight className="h-4 w-4" aria-hidden="true" />
            </li>
            <li className="text-primary-foreground/70" aria-current="page">
              Terms & Conditions
            </li>
          </ol>
        </div>
      </nav>

      {/* Header */}
      <article className="border-b border-secondary">
        <div className="container-custom section-padding">
          <h1 className="font-display text-4xl md:text-5xl font-bold text-foreground mb-4">
            Terms & Conditions
          </h1>
          <p className="text-lg text-muted-foreground">
            These <strong>legal terms</strong> govern your use of our website and <strong>exterior cleaning services</strong>. By accessing our site, you agree to be bound by these <strong>terms of service</strong> and conditions.
          </p>
          <p className="text-sm text-muted-foreground mt-4">
            Last updated: January 2026
          </p>
        </div>
      </article>

      {/* Content */}
      <div className="container-custom section-padding">
        <div className="max-w-3xl mx-auto prose prose-invert">
          
          {/* Introduction */}
          <section className="mb-12">
            <h2 className="text-2xl font-bold text-foreground mb-4">1. Introduction</h2>
            <p className="text-muted-foreground leading-relaxed mb-4">
              Welcome to R.R.M External Cleaning Specialist ("Company", "we", "us", "our"). These <strong>terms and conditions</strong> ("Terms") establish a binding legal agreement between you and R.R.M External Cleaning Specialist regarding the use of our website, mobile applications, and <strong>professional cleaning services</strong>.
            </p>
            <p className="text-muted-foreground leading-relaxed">
              By accessing our website or requesting our services (including <strong>pressure washing</strong>, <strong>driveway cleaning</strong>, and <strong>roof soft washing</strong>), you agree to comply with these terms. If you disagree with any provision, you must cease using our services immediately.
            </p>
          </section>

          {/* Use of Website */}
          <section className="mb-12">
            <h2 className="text-2xl font-bold text-foreground mb-4">2. Use of Website</h2>
            
            <h3 className="text-xl font-semibold text-foreground mb-3">2.1 Acceptable Use</h3>
            <p className="text-muted-foreground leading-relaxed mb-4">
              You agree to use our website only for lawful purposes and in a way that does not infringe upon the rights of others or restrict their use and enjoyment. Prohibited behavior includes:
            </p>
            <ul className="list-disc list-inside text-muted-foreground mb-6 space-y-2">
              <li>Harassing or causing distress or inconvenience to any person</li>
              <li>Obscene or offensive content transmission</li>
              <li>Disrupting normal flow of dialogue within our website</li>
              <li>Attempting to gain unauthorized access to systems</li>
              <li>Transmitting obscene or offensive content</li>
              <li>Disrupting the normal operation of the website</li>
            </ul>

            <h3 className="text-xl font-semibold text-foreground mb-3">2.2 Website Access</h3>
            <p className="text-muted-foreground leading-relaxed">
              We reserve the right to restrict access to our website at any time without notice or liability. This includes the right to deny service to anyone who violates these <strong>website usage policies</strong>.
            </p>
          </section>

          {/* Services and Guarantees */}
          <section className="mb-12">
            <h2 className="text-2xl font-bold text-foreground mb-4">3. Services and Guarantees</h2>
            
            <h3 className="text-xl font-semibold text-foreground mb-3">3.1 Service Description</h3>
            <p className="text-muted-foreground leading-relaxed mb-4">
              We provide professional <strong>exterior cleaning services</strong> including:
            </p>
            <ul className="list-disc list-inside text-muted-foreground mb-6 space-y-2">
              <li>Pressure washing and high-pressure cleaning</li>
              <li>Driveway and patio cleaning</li>
              <li>Roof cleaning and soft washing</li>
              <li>Gutter and downpipe cleaning</li>
              <li>Window and facade cleaning</li>
              <li>Render and masonry cleaning</li>
              <li>Moss and algae removal</li>
            </ul>

            <h3 className="text-xl font-semibold text-foreground mb-3">3.2 Service Quality</h3>
            <p className="text-muted-foreground leading-relaxed mb-4">
              We commit to providing high-quality <strong>professional cleaning services</strong> using industry-standard equipment and techniques. We maintain public liability insurance and comply with relevant health and safety regulations.
            </p>

            <h3 className="text-xl font-semibold text-foreground mb-3">3.3 Satisfaction Guarantee</h3>
            <p className="text-muted-foreground leading-relaxed">
              If you are not satisfied with our work, please contact us within 7 days of service completion. We will assess your concerns and either re-clean the affected area or provide a full refund, at our discretion.
            </p>
          </section>

          {/* User Responsibilities */}
          <section className="mb-12">
            <h2 className="text-2xl font-bold text-foreground mb-4">4. User Responsibilities</h2>
            <p className="text-muted-foreground leading-relaxed mb-4">
              As a customer, you agree to:
            </p>
            <ul className="list-disc list-inside text-muted-foreground space-y-2 mb-6">
              <li>Provide accurate contact and property information</li>
              <li>Ensure safe access to your property for our staff</li>
              <li>Notify us of any hazards or safety concerns</li>
              <li>Secure pets before our arrival</li>
              <li>Ensure all relevant permissions are obtained (e.g., tenant agreements)</li>
              <li>Pay agreed fees within the specified timeframe</li>
              <li>Not misuse or abuse our staff or equipment</li>
            </ul>
            <p className="text-muted-foreground leading-relaxed">
              Failure to comply may result in service cancellation and forfeiture of any advance payments.
            </p>
          </section>

          {/* Liability Limitations */}
          <section className="mb-12">
            <h2 className="text-2xl font-bold text-foreground mb-4">5. Limitation of Liability</h2>
            
            <h3 className="text-xl font-semibold text-foreground mb-3">5.1 Warranty Disclaimer</h3>
            <p className="text-muted-foreground leading-relaxed mb-4">
              Our services are provided "as is" without warranties of any kind, express or implied. We do not guarantee:
            </p>
            <ul className="list-disc list-inside text-muted-foreground mb-6 space-y-2">
              <li>Complete removal of all stains or marks</li>
              <li>Prevention of future damage or regrowth</li>
              <li>Uninterrupted or error-free website operation</li>
              <li>Fitness for specific purposes</li>
            </ul>

            <h3 className="text-xl font-semibold text-foreground mb-3">5.2 Damage Liability</h3>
            <p className="text-muted-foreground leading-relaxed mb-4">
              While we exercise utmost care, we cannot be held liable for:
            </p>
            <ul className="list-disc list-inside text-muted-foreground mb-6 space-y-2">
              <li>Damage to property existing before service</li>
              <li>Surface damage resulting from poor condition</li>
              <li>Environmental damage not caused by our equipment</li>
              <li>Consequential or indirect losses</li>
            </ul>
            <p className="text-muted-foreground leading-relaxed">
              Our liability is limited to the cost of the service provided. We maintain comprehensive public liability insurance.
            </p>

            <h3 className="text-xl font-semibold text-foreground mb-3">5.3 Website Liability</h3>
            <p className="text-muted-foreground leading-relaxed">
              We are not liable for any direct or indirect losses from website unavailability, data loss, or technical errors.
            </p>
          </section>

          {/* Intellectual Property */}
          <section className="mb-12">
            <h2 className="text-2xl font-bold text-foreground mb-4">6. Intellectual Property Rights</h2>
            
            <h3 className="text-xl font-semibold text-foreground mb-3">6.1 Website Content</h3>
            <p className="text-muted-foreground leading-relaxed mb-4">
              All content on our website—including text, images, videos, logos, and graphics—is the exclusive property of R.R.M External Cleaning Specialist or licensed from third parties. You may not:
            </p>
            <ul className="list-disc list-inside text-muted-foreground mb-6 space-y-2">
              <li>Reproduce or republish content without permission</li>
              <li>Use content for commercial purposes</li>
              <li>Modify or derive works from our content</li>
              <li>Remove copyright or proprietary notices</li>
            </ul>

            <h3 className="text-xl font-semibold text-foreground mb-3">6.2 Your License</h3>
            <p className="text-muted-foreground leading-relaxed">
              We grant you a limited, non-exclusive license to view and use content for personal, non-commercial purposes only.
            </p>
          </section>

          {/* Payment and Cancellation */}
          <section className="mb-12">
            <h2 className="text-2xl font-bold text-foreground mb-4">7. Payment and Cancellation</h2>
            
            <h3 className="text-xl font-semibold text-foreground mb-3">7.1 Payment Terms</h3>
            <p className="text-muted-foreground leading-relaxed mb-4">
              Prices for our <strong>cleaning services</strong> are quoted individually based on property size and service complexity. Payment terms will be specified at quote stage.
            </p>

            <h3 className="text-xl font-semibold text-foreground mb-3">7.2 Cancellation Policy</h3>
            <p className="text-muted-foreground leading-relaxed mb-4">
              Customers may cancel services up to 48 hours before the scheduled appointment with full refund. Cancellations within 48 hours may incur a cancellation fee.
            </p>

            <h3 className="text-xl font-semibold text-foreground mb-3">7.3 Rescheduling</h3>
            <p className="text-muted-foreground leading-relaxed">
              Rescheduling requests must be made at least 48 hours in advance. Subject to availability, we will accommodate reasonable rescheduling requests at no additional charge.
            </p>
          </section>

          {/* Governing Law */}
          <section className="mb-12">
            <h2 className="text-2xl font-bold text-foreground mb-4">8. Governing Law and Jurisdiction</h2>
            <p className="text-muted-foreground leading-relaxed mb-4">
              These <strong>terms and conditions</strong> are governed by and construed in accordance with the laws of England and Wales, without regard to conflicts of law principles.
            </p>
            <p className="text-muted-foreground leading-relaxed mb-6">
              You agree that any legal action or proceeding relating to these terms shall be brought exclusively in the courts of England and Wales, and you consent to the jurisdiction and venue of such courts.
            </p>

            <h3 className="text-xl font-semibold text-foreground mb-3">8.1 Dispute Resolution</h3>
            <p className="text-muted-foreground leading-relaxed">
              Before pursuing legal action, we encourage you to contact us to resolve disputes amicably. We will attempt to resolve any issues within 30 days.
            </p>
          </section>

          {/* Indemnification */}
          <section className="mb-12">
            <h2 className="text-2xl font-bold text-foreground mb-4">9. Indemnification</h2>
            <p className="text-muted-foreground leading-relaxed">
              You agree to indemnify and hold harmless R.R.M External Cleaning Specialist, its officers, employees, and agents from any claims, damages, losses, or expenses (including legal fees) arising from your violation of these terms, your use of our services, or your violation of any laws or third-party rights.
            </p>
          </section>

          {/* Contact Information */}
          <section className="mb-12">
            <h2 className="text-2xl font-bold text-foreground mb-4">10. Contact Information</h2>
            <p className="text-muted-foreground leading-relaxed mb-6">
              For questions about these <strong>terms of service</strong> or to report violations, contact:
            </p>
            <div className="bg-secondary/30 border border-secondary p-6 rounded-lg">
              <p className="font-semibold text-foreground mb-2">R.R.M External Cleaning Specialist</p>
              <p className="text-muted-foreground mb-1">9 Noon Ct</p>
              <p className="text-muted-foreground mb-1">Newton-le-Willows, WA12 8QY</p>
              <p className="text-muted-foreground mb-1">United Kingdom</p>
              <p className="text-muted-foreground mb-1">
                <a href="tel:+447845463877" className="text-accent hover:text-primary transition-colors">
                  +44 7845 463877
                </a>
              </p>
              <p className="text-muted-foreground">
                <a href="mailto:rrmexternalcleaning@gmail.com" className="text-accent hover:text-primary transition-colors">
                  rrmexternalcleaning@gmail.com
                </a>
              </p>
            </div>
          </section>

          {/* Modifications */}
          <section>
            <h2 className="text-2xl font-bold text-foreground mb-4">11. Modifications to Terms</h2>
            <p className="text-muted-foreground leading-relaxed">
              We reserve the right to modify these <strong>terms and conditions</strong> at any time. Changes will be effective immediately upon posting. Your continued use of our website and services constitutes acceptance of modified terms. We recommend reviewing these terms periodically.
            </p>
          </section>

        </div>
      </div>

      {/* Contact Information */}
      <section className="section-padding bg-secondary/10">
        <div className="container-custom">
          <h2 className="font-display text-3xl md:text-4xl font-bold text-foreground text-center mb-2">
            Questions About Our Terms?
          </h2>
          <p className="text-center text-muted-foreground mb-12 max-w-2xl mx-auto">
            Contact us if you need clarification on any of our terms and conditions.
          </p>
          <ContactInfo variant="default" />
        </div>
      </section>
      </main>
    </Layout>
  );
}
