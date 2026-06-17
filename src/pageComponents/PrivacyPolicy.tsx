'use client';
import { useEffect } from 'react';

import Link from 'next/link';
import { Layout } from '@/components/layout/Layout';
import { ContactInfo } from '@/components/ContactInfo';
import { ChevronRight } from 'lucide-react';

export function PrivacyPolicy() {
  useEffect(() => {
    // Add WebPage schema
    const schema = {
      '@context': 'https://schema.org',
      '@type': 'WebPage',
      name: 'Privacy Policy',
      description: 'Learn how R.R.M External Cleaning Specialist collects, uses, and protects your personal data. Your privacy is important to us.',
      url: 'https://rrmexternalcleaning.co.uk/privacy-policy',
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
    document.title = 'Privacy Policy | R.R.M External Cleaning Specialist';
    const metaDescription = document.querySelector('meta[name="description"]');
    if (metaDescription) {
      metaDescription.setAttribute('content', 'Learn how R.R.M External Cleaning Specialist collects, uses, and protects your personal data. Your privacy is important to us.');
    } else {
      const meta = document.createElement('meta');
      meta.name = 'description';
      meta.content = 'Learn how R.R.M External Cleaning Specialist collects, uses, and protects your personal data. Your privacy is important to us.';
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
              Privacy Policy
            </li>
          </ol>
        </div>
      </nav>

      {/* Header */}
      <article className="border-b border-secondary">
        <div className="container-custom section-padding">
          <h1 className="font-display text-4xl md:text-5xl font-bold text-foreground mb-4">
            Privacy Policy
          </h1>
          <p className="text-lg text-muted-foreground">
            At R.R.M External Cleaning Specialist, we are committed to protecting your <strong>personal data</strong> and respecting your <strong>privacy rights</strong>. This policy explains how we collect, use, and safeguard your information.
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
              R.R.M External Cleaning Specialist ("we", "us", or "our") operates the website and provides professional <strong>pressure washing</strong> and <strong>exterior cleaning services</strong> across Newton-le-Willows and the North West. This Privacy Policy outlines how we handle <strong>user data</strong> and <strong>personal information</strong> in compliance with UK <strong>data protection laws</strong>, including the Data Protection Act 2018 and UK GDPR.
            </p>
            <p className="text-muted-foreground leading-relaxed">
              Your privacy is fundamental to our business. We are transparent about what information we collect, why we collect it, and how we use it.
            </p>
          </section>

          {/* Information We Collect */}
          <section className="mb-12">
            <h2 className="text-2xl font-bold text-foreground mb-4">2. Information We Collect</h2>
            
            <h3 className="text-xl font-semibold text-foreground mb-3">Contact Information</h3>
            <p className="text-muted-foreground leading-relaxed mb-4">
              When you request a quote, contact us for services, or subscribe to our newsletter, we collect:
            </p>
            <ul className="list-disc list-inside text-muted-foreground mb-6 space-y-2">
              <li>Full name</li>
              <li>Email address</li>
              <li>Phone number</li>
              <li>Residential or business address</li>
              <li>Service location details</li>
              <li>Type of <strong>cleaning service</strong> required</li>
            </ul>

            <h3 className="text-xl font-semibold text-foreground mb-3">Website Usage Data</h3>
            <p className="text-muted-foreground leading-relaxed mb-4">
              We automatically collect information about how you interact with our website:
            </p>
            <ul className="list-disc list-inside text-muted-foreground mb-6 space-y-2">
              <li>IP address and device type</li>
              <li>Browser type and operating system</li>
              <li>Pages visited and time spent</li>
              <li>Referring website or search query</li>
              <li>Click-through patterns</li>
              <li>Location data (if permitted)</li>
            </ul>

            <h3 className="text-xl font-semibold text-foreground mb-3">Payment Information</h3>
            <p className="text-muted-foreground leading-relaxed">
              Payment details are processed securely through third-party payment processors. We do not store full credit card information on our servers.
            </p>
          </section>

          {/* How We Use Your Information */}
          <section className="mb-12">
            <h2 className="text-2xl font-bold text-foreground mb-4">3. How We Use Your Information</h2>
            <p className="text-muted-foreground leading-relaxed mb-4">
              We use your information to:
            </p>
            <ul className="list-disc list-inside text-muted-foreground space-y-2 mb-6">
              <li>Provide, maintain, and improve our <strong>exterior cleaning services</strong></li>
              <li>Process quotes and service requests</li>
              <li>Send service confirmations and updates</li>
              <li>Respond to customer inquiries and provide support</li>
              <li>Send marketing communications (with your consent)</li>
              <li>Analyze website performance and <strong>user experience</strong></li>
              <li>Prevent fraud and ensure security</li>
              <li>Comply with legal obligations</li>
            </ul>
            <p className="text-muted-foreground leading-relaxed">
              We never sell your <strong>personal data</strong> to third parties without explicit consent. We process information based on legitimate business interests, contract fulfillment, legal obligations, and your consent.
            </p>
          </section>

          {/* Cookies and Tracking */}
          <section className="mb-12">
            <h2 className="text-2xl font-bold text-foreground mb-4">4. Cookies and Tracking</h2>
            <p className="text-muted-foreground leading-relaxed mb-4">
              Our website uses cookies and similar tracking technologies to enhance <strong>user experience</strong>:
            </p>
            <ul className="list-disc list-inside text-muted-foreground space-y-2 mb-6">
              <li><strong>Essential Cookies:</strong> Required for website functionality</li>
              <li><strong>Performance Cookies:</strong> Track usage patterns and site performance</li>
              <li><strong>Marketing Cookies:</strong> Enable targeted advertising (with consent)</li>
              <li><strong>Analytics:</strong> Google Analytics tracks visitor behavior</li>
            </ul>
            <p className="text-muted-foreground leading-relaxed">
              You can manage cookie preferences through your browser settings. Disabling cookies may affect website functionality.
            </p>
          </section>

          {/* Third-Party Services */}
          <section className="mb-12">
            <h2 className="text-2xl font-bold text-foreground mb-4">5. Third-Party Services</h2>
            <p className="text-muted-foreground leading-relaxed mb-4">
              We use trusted third-party services that may process your information:
            </p>
            <ul className="list-disc list-inside text-muted-foreground space-y-2 mb-6">
              <li><strong>Analytics:</strong> Google Analytics</li>
              <li><strong>Email Marketing:</strong> Email service providers</li>
              <li><strong>Payment Processing:</strong> Secure payment gateways</li>
              <li><strong>Social Media:</strong> YouTube, Facebook, Instagram integration</li>
              <li><strong>Review Platforms:</strong> Checkatrade, Yell, Trust Pilot</li>
            </ul>
            <p className="text-muted-foreground leading-relaxed">
              These third parties have their own privacy policies. We are not responsible for their data practices, though we ensure they meet appropriate <strong>data protection standards</strong>.
            </p>
          </section>

          {/* Data Security */}
          <section className="mb-12">
            <h2 className="text-2xl font-bold text-foreground mb-4">6. Data Security</h2>
            <p className="text-muted-foreground leading-relaxed mb-4">
              We implement comprehensive security measures to protect your <strong>personal information</strong>:
            </p>
            <ul className="list-disc list-inside text-muted-foreground space-y-2 mb-6">
              <li>SSL encryption for all website data transmission</li>
              <li>Secure password storage with hashing algorithms</li>
              <li>Regular security audits and updates</li>
              <li>Restricted access to <strong>user data</strong></li>
              <li>Compliance with UK GDPR requirements</li>
            </ul>
            <p className="text-muted-foreground leading-relaxed">
              While we strive to protect your information, no system is completely secure. We cannot guarantee absolute security but maintain industry-standard <strong>data protection</strong> practices.
            </p>
          </section>

          {/* User Rights */}
          <section className="mb-12">
            <h2 className="text-2xl font-bold text-foreground mb-4">7. Your Privacy Rights</h2>
            <p className="text-muted-foreground leading-relaxed mb-4">
              Under UK GDPR, you have the following rights regarding your <strong>personal data</strong>:
            </p>
            <ul className="list-disc list-inside text-muted-foreground space-y-2 mb-6">
              <li><strong>Right to Access:</strong> Request a copy of your data</li>
              <li><strong>Right to Correction:</strong> Update inaccurate information</li>
              <li><strong>Right to Erasure:</strong> Request deletion of your data</li>
              <li><strong>Right to Restrict Processing:</strong> Limit how we use your data</li>
              <li><strong>Right to Data Portability:</strong> Receive your data in portable format</li>
              <li><strong>Right to Object:</strong> Opt-out of marketing communications</li>
              <li><strong>Right to Lodge a Complaint:</strong> Contact the ICO if concerned</li>
            </ul>
            <p className="text-muted-foreground leading-relaxed">
              To exercise these rights, contact us at the details provided in Section 8 below. We will respond within 30 days.
            </p>
          </section>

          {/* Retention */}
          <section className="mb-12">
            <h2 className="text-2xl font-bold text-foreground mb-4">8. Data Retention</h2>
            <p className="text-muted-foreground leading-relaxed">
              We retain your <strong>personal information</strong> only as long as necessary:
            </p>
            <ul className="list-disc list-inside text-muted-foreground space-y-2 mt-4 mb-6">
              <li>Customer service records: 6 years (for tax/legal purposes)</li>
              <li>Marketing lists: Until you unsubscribe</li>
              <li>Website analytics: Typically 26 months</li>
              <li>Payment records: As required by law</li>
            </ul>
          </section>

          {/* Contact Information */}
          <section className="mb-12">
            <h2 className="text-2xl font-bold text-foreground mb-4">9. Contact Us</h2>
            <p className="text-muted-foreground leading-relaxed mb-6">
              For privacy concerns, <strong>data requests</strong>, or to exercise your rights, contact our <strong>Data Protection Officer</strong>:
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
            <p className="text-muted-foreground leading-relaxed mt-6">
              We will respond to all <strong>privacy requests</strong> within 30 days in accordance with UK <strong>data protection regulations</strong>.
            </p>
          </section>

          {/* Updates */}
          <section>
            <h2 className="text-2xl font-bold text-foreground mb-4">10. Policy Updates</h2>
            <p className="text-muted-foreground leading-relaxed">
              We may update this Privacy Policy to reflect changes in our practices, technology, or legal requirements. We will notify you of significant changes via email or website notice. Continued use of our website indicates acceptance of updated terms.
            </p>
          </section>

        </div>
      </div>

      {/* Contact Information */}
      <section className="section-padding bg-secondary/10">
        <div className="container-custom">
          <h2 className="font-display text-3xl md:text-4xl font-bold text-foreground text-center mb-2">
            Have Privacy Questions?
          </h2>
          <p className="text-center text-muted-foreground mb-12 max-w-2xl mx-auto">
            Contact us if you have any questions about how we handle your data.
          </p>
          <ContactInfo variant="default" />
        </div>
      </section>
      </main>
    </Layout>
  );
}
