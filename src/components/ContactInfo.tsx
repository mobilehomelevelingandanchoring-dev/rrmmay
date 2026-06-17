'use client';

import { MapPin, Phone, Mail, Clock } from 'lucide-react';

interface ContactInfoProps {
  variant?: 'default' | 'compact';
}

export function ContactInfo({ variant = 'default' }: ContactInfoProps) {
  const contactDetails = [
    {
      icon: MapPin,
      label: 'Address',
      value: '9 Noon Ct, Newton-le-Willows WA12 8QY, United Kingdom',
      href: 'https://maps.google.com/?q=9+Noon+Ct+Newton-le-Willows+WA12+8QY',
      isLink: true,
      ariaLabel: 'View on map: 9 Noon Court, Newton-le-Willows',
    },
    {
      icon: Phone,
      label: 'Phone',
      value: '+44 7845 463877',
      href: 'tel:+447845463877',
      isLink: true,
      ariaLabel: 'Call us on +44 7845 463877',
    },
    {
      icon: Mail,
      label: 'Email',
      value: 'rrmexternalcleaning@gmail.com',
      href: 'mailto:rrmexternalcleaning@gmail.com',
      isLink: true,
      ariaLabel: 'Email us at rrmexternalcleaning@gmail.com',
    },
    {
      icon: Clock,
      label: 'Hours',
      value: 'Open 24 hours',
      href: null,
      isLink: false,
      ariaLabel: 'Available 24 hours a day',
    },
  ];

  return (
    <article className="contact-information">
      <div
        className={`grid gap-6 ${
          variant === 'compact'
            ? 'md:grid-cols-2 lg:grid-cols-4'
            : 'md:grid-cols-2'
        }`}
      >
        {contactDetails.map((detail) => {
          const Icon = detail.icon;
          const isPhone = detail.label === 'Phone';
          const isEmail = detail.label === 'Email';
          const isAddress = detail.label === 'Address';

          const content = (
            <div className="flex items-start gap-4 p-6 rounded-lg bg-secondary/30 hover:bg-secondary/50 transition-colors border border-secondary group">
              <div className="flex-shrink-0 mt-1">
                <div className="flex h-12 w-12 items-center justify-center rounded-lg bg-accent/10 text-accent group-hover:bg-accent/20 transition-all">
                  <Icon
                    className="h-6 w-6"
                    aria-hidden="true"
                  />
                </div>
              </div>
              <div className="flex-grow min-w-0">
                <h3 className="font-display font-semibold text-foreground text-sm uppercase tracking-wide mb-1">
                  {detail.label}
                </h3>
                <p className="text-muted-foreground break-words">
                  {detail.value}
                </p>
              </div>
            </div>
          );

          if (detail.isLink) {
            return (
              <a
                key={detail.label}
                href={detail.href!}
                aria-label={detail.ariaLabel}
                title={detail.ariaLabel}
                className="focus:outline-none focus:ring-2 focus:ring-accent focus:ring-offset-2 rounded-lg"
                {...(isPhone && { rel: 'noopener noreferrer' })}
                {...(isAddress && { target: '_blank', rel: 'noopener noreferrer' })}
              >
                {content}
              </a>
            );
          }

          return (
            <div
              key={detail.label}
              role="status"
              aria-label={detail.ariaLabel}
              className="focus:outline-none focus:ring-2 focus:ring-accent focus:ring-offset-2 rounded-lg"
            >
              {content}
            </div>
          );
        })}
      </div>

    </article>
  );
}

export default ContactInfo;
