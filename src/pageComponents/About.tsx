'use client';

import Link from 'next/link';
import { Layout } from '@/components/layout/Layout';
import { Button } from '@/components/ui/button';
import { Card, CardContent } from '@/components/ui/card';
import { ContactInfo } from '@/components/ContactInfo';

import { Clock, Shield, Award, Users, CheckCircle, ArrowRight } from 'lucide-react';

const statCards = [
  {
    icon: Clock,
    title: 'Since 2016',
    description: 'Years of local experience',
  },
  {
    icon: Shield,
    title: 'Fully Insured',
    description: 'Complete peace of mind',
  },
  {
    icon: Award,
    title: 'Professional',
    description: 'Industry-standard equipment',
  },
  {
    icon: Users,
    title: 'Local Team',
    description: 'Serving our community',
  },
];

const safetyItems = [
  {
    title: 'Surface Assessment',
    description: 'Every surface is assessed before cleaning to determine the safest, most effective method.',
  },
  {
    title: 'Appropriate Methods',
    description: 'We match our cleaning method to the surface type\u2014high pressure for tough surfaces, soft washing for delicate ones.',
  },
  {
    title: 'Fully Insured',
    description: 'Comprehensive public liability insurance for complete peace of mind on every job.',
  },
  {
    title: 'Property Protection',
    description: 'We protect plants, furniture, and adjacent surfaces during cleaning.',
  },
];

export default function About() {
  return (
    <Layout>
      {/* Hero */}
      <section className="hero-bg py-16 md:py-24">
        <div className="container-custom">
          <div className="max-w-3xl">
            <h1 className="font-display text-4xl md:text-5xl font-bold text-primary-foreground mb-6">
              About R.R.M External Cleaning Specialist
            </h1>
            <p className="text-lg md:text-xl text-primary-foreground/85 leading-relaxed">
              A trusted local business providing professional exterior cleaning services
              since 2016. We help homeowners and businesses keep their properties clean,
              safe, and well maintained.
            </p>
          </div>
        </div>
      </section>

      {/* Story */}
      <section className="section-padding bg-background">
        <div className="container-custom">
          <div className="grid gap-12 lg:grid-cols-2 lg:gap-16 items-center">
            <div>
              <span className="inline-block text-sm font-semibold text-accent uppercase tracking-wider mb-3">
                Our Story
              </span>
              <h2 className="font-display text-3xl font-bold text-foreground mb-6">
                Established in 2016
              </h2>
              <p className="text-muted-foreground leading-relaxed mb-4">
                R.R.M External Cleaning Specialist was founded with a simple mission: to provide
                honest, professional exterior cleaning services that homeowners and businesses
                can rely on. Based in Newton-le-Willows, we've built our reputation through
                quality workmanship and genuine customer care.
              </p>
              <p className="text-muted-foreground leading-relaxed mb-4">
                Over the years, we've expanded our services and service area while maintaining
                the personal, local approach that our customers value. Every job receives the
                same attention to detail, whether it's a small patio or a large commercial premises.
              </p>
              <p className="text-muted-foreground leading-relaxed">
                Today, we serve customers across Newton-le-Willows, Warrington, Greater Manchester
                and surrounding areas, but we remain committed to the values we started with:
                professionalism, reliability, and results you can see.
              </p>
            </div>

            <div className="grid gap-4 sm:grid-cols-2">
              {statCards.map((stat) => (
                <Card
                  key={stat.title}
                  className="group border-border/50 bg-secondary/50 hover:bg-card hover:shadow-md hover:border-accent/30 hover:-translate-y-0.5 transition-all duration-200"
                >
                  <CardContent className="p-6">
                    <stat.icon className="h-8 w-8 text-accent mb-3 group-hover:scale-110 transition-transform duration-200" aria-hidden="true" />
                    <h3 className="font-display font-semibold text-foreground mb-1">{stat.title}</h3>
                    <p className="text-sm text-muted-foreground">{stat.description}</p>
                  </CardContent>
                </Card>
              ))}
            </div>
          </div>
        </div>
      </section>

      {/* Experience & Expertise */}
      <section className="section-padding bg-secondary/30">
        <div className="container-custom">
          <div className="max-w-3xl mx-auto">
            <h2 className="font-display text-3xl font-bold text-foreground mb-6 text-center">
              Our Experience & Expertise
            </h2>
            <div className="prose prose-lg max-w-none text-muted-foreground">
              <p className="leading-relaxed mb-6">
                Having cleaned hundreds of properties over the years, we've developed expertise
                across all types of exterior surfaces. We understand that different materials
                require different approaches, and we take the time to assess each job properly
                before starting work.
              </p>
              <p className="leading-relaxed mb-6">
                Our team stays current with industry best practices and invests in quality
                equipment. From high-pressure washers for tough surfaces to gentle soft washing
                systems for delicate materials, we use the right tools for every situation.
              </p>
              <p className="leading-relaxed">
                This experience means we can advise you honestly about what your property needs.
                We'll never recommend unnecessary work, and we'll always explain our methods so
                you understand exactly what we're doing and why.
              </p>
            </div>
          </div>
        </div>
      </section>

      {/* Safety Practices */}
      <section className="section-padding bg-background">
        <div className="container-custom">
          <div className="grid gap-12 lg:grid-cols-2 lg:gap-16">
            <div>
              <h2 className="font-display text-3xl font-bold text-foreground mb-6">
                Safety First Approach
              </h2>
              <p className="text-muted-foreground leading-relaxed mb-6">
                Safety is fundamental to how we work. This means protecting your property from
                damage, ensuring our team works safely, and making sure the finished result is
                safe for you and your family.
              </p>
              <p className="text-muted-foreground leading-relaxed">
                We're fully insured with public liability coverage, giving you complete peace
                of mind. Our team follows established safety procedures, and we use appropriate
                personal protective equipment on every job.
              </p>
            </div>
            <div className="space-y-4">
              {safetyItems.map((item) => (
                <Card key={item.title} className="border-border/50 bg-secondary/30">
                  <CardContent className="flex items-start gap-4 p-4">
                    <CheckCircle className="h-6 w-6 text-success shrink-0 mt-0.5" aria-hidden="true" />
                    <div>
                      <h3 className="font-display font-semibold text-foreground mb-1">{item.title}</h3>
                      <p className="text-sm text-muted-foreground">{item.description}</p>
                    </div>
                  </CardContent>
                </Card>
              ))}
            </div>
          </div>
        </div>
      </section>

      {/* Customer Commitment */}
      <section className="section-padding bg-secondary/50">
        <div className="container-custom">
          <div className="max-w-3xl mx-auto text-center">
            <h2 className="font-display text-3xl font-bold text-foreground mb-6">
              Our Commitment to You
            </h2>
            <p className="text-muted-foreground text-lg leading-relaxed mb-8">
              We believe in straightforward, honest service. When you contact us, you'll receive
              a clear quote with no hidden costs. We turn up when we say we will, we do the job
              properly, and we don't consider it finished until you're happy with the result.
            </p>
            <div className="grid gap-6 sm:grid-cols-3 text-left">
              <div>
                <h3 className="font-display font-semibold text-foreground mb-2">Free Quotes</h3>
                <p className="text-sm text-muted-foreground">Honest pricing with no obligation</p>
              </div>
              <div>
                <h3 className="font-display font-semibold text-foreground mb-2">Reliable Service</h3>
                <p className="text-sm text-muted-foreground">We arrive when we say we will</p>
              </div>
              <div>
                <h3 className="font-display font-semibold text-foreground mb-2">Satisfaction Guaranteed</h3>
                <p className="text-sm text-muted-foreground">Not happy? We'll make it right</p>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* CTA */}
      <section className="py-16 hero-bg">
        <div className="container-custom text-center">
          <h2 className="font-display text-3xl font-bold text-primary-foreground mb-4">
            Ready to Work With Us?
          </h2>
          <p className="text-primary-foreground/85 mb-8 max-w-xl mx-auto">
            Get in touch for a free, no-obligation quote. We look forward to helping you
            keep your property looking its best.
          </p>
          <Button variant="hero" size="lg" asChild>
            <Link href="/contact">
              Get a Free Quote
              <ArrowRight className="ml-2 h-4 w-4" aria-hidden="true" />
            </Link>
          </Button>
        </div>
      </section>

      {/* Contact Information */}
      <section className="section-padding bg-secondary/10">
        <div className="container-custom">
          <h2 className="font-display text-3xl md:text-4xl font-bold text-foreground text-center mb-2">
            Get in Touch
          </h2>
          <p className="text-center text-muted-foreground mb-12 max-w-2xl mx-auto">
            Have questions? We're here to help and provide free quotes on all our services.
          </p>
          <ContactInfo variant="default" />
        </div>
      </section>
    </Layout>
  );
}
