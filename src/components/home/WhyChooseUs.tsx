import { Shield, Clock, Award, ThumbsUp, Leaf, Users, CheckCircle } from 'lucide-react';
import { Card, CardHeader, CardContent } from '@/components/ui/card';
import { cn } from '@/lib/utils';

const reasons = [
  {
    icon: Clock,
    title: 'Established Since 2016',
    description: 'Years of experience delivering quality exterior cleaning services to homes and businesses.',
  },
  {
    icon: Shield,
    title: 'Fully Insured',
    description: 'Complete public liability insurance for your peace of mind on every job we undertake.',
  },
  {
    icon: Award,
    title: 'Professional Standards',
    description: 'We use industry-leading equipment and techniques for superior, lasting results.',
  },
  {
    icon: ThumbsUp,
    title: 'Satisfaction Guaranteed',
    description: 'We don\'t consider a job done until you\'re completely happy with the outcome.',
  },
  {
    icon: Leaf,
    title: 'Surface-Safe Methods',
    description: 'Appropriate cleaning methods for each surface type, preventing damage while maximising cleanliness.',
  },
  {
    icon: Users,
    title: 'Local & Trusted',
    description: 'A local business built on recommendations and repeat customers across the region.',
  },
];

const checkItems = [
  {
    text: (
      <>
        <strong>Free, no-obligation quotes</strong> – We assess your needs and provide honest pricing.
      </>
    ),
  },
  {
    text: (
      <>
        <strong>Flexible scheduling</strong> – We work around your availability.
      </>
    ),
  },
  {
    text: (
      <>
        <strong>Residential & commercial</strong> – From home driveways to business premises.
      </>
    ),
  },
];

export function WhyChooseUs() {
  return (
    <section className="section-padding bg-background" aria-labelledby="why-us-heading">
      <div className="container-custom">
        <div className="grid gap-12 lg:grid-cols-2 lg:gap-16 items-center">

          {/* Content */}
          <div>
            <span className="inline-block text-sm font-semibold text-accent uppercase tracking-wider mb-3">
              Why Choose Us
            </span>
            <h2 id="why-us-heading" className="font-display text-3xl md:text-4xl font-bold text-foreground mb-6">
              Your Trusted Exterior Cleaning Specialist Across the North West
            </h2>
            <p className="text-muted-foreground text-lg mb-4 leading-relaxed">
              R.R.M has been looking after properties across Merseyside and Greater Manchester since
              2016. Your driveway, roof, render, and gutters are in the hands of a team that uses
              the right method for each surface — not just the fastest one.
            </p>
            <p className="text-muted-foreground text-base mb-8 leading-relaxed">
              What does that mean in practice? It means we soft wash your K-Rend instead of blasting
              it. We treat moss at the root instead of scraping the surface. And we tell you upfront
              if your surface doesn&apos;t need anything — because repeat customers matter more than
              a single job.
            </p>
            <div className="space-y-4">
              {checkItems.map((item, i) => (
                <div key={i} className="flex items-start gap-3">
                  <div className="h-6 w-6 rounded-full bg-success/10 flex items-center justify-center shrink-0 mt-0.5">
                    <CheckCircle className="h-4 w-4 text-success" aria-hidden="true" />
                  </div>
                  <p className="text-foreground leading-relaxed">{item.text}</p>
                </div>
              ))}
            </div>
          </div>

          {/* Features Grid */}
          <div className="grid gap-4 sm:grid-cols-2">
            {reasons.map((reason) => (
              <Card
                key={reason.title}
                className={cn(
                  'group border-border/50 bg-secondary/30',
                  'hover:bg-card hover:shadow-md hover:border-accent/30 hover:-translate-y-0.5',
                  'transition-all duration-200'
                )}
              >
                <CardHeader className="pb-3 pt-5 px-5">
                  <div className="flex items-center gap-3 mb-1">
                    <div className="flex h-10 w-10 items-center justify-center rounded-lg bg-accent/10 text-accent group-hover:bg-accent group-hover:text-accent-foreground transition-colors duration-200 shrink-0">
                      <reason.icon className="h-5 w-5" aria-hidden="true" />
                    </div>
                    <h3 className="font-display font-semibold text-foreground text-sm leading-snug">
                      {reason.title}
                    </h3>
                  </div>
                </CardHeader>
                <CardContent className="px-5 pb-5 pt-0">
                  <p className="text-sm text-muted-foreground leading-relaxed">
                    {reason.description}
                  </p>
                </CardContent>
              </Card>
            ))}
          </div>

        </div>
      </div>
    </section>
  );
}
