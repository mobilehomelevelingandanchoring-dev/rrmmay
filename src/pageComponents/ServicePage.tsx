'use client';

import Link from 'next/link';
import { useParams } from 'next/navigation';
import { Fragment, type ComponentType, useEffect, useMemo } from 'react';
import { Layout } from '@/components/layout/Layout';
import { Button } from '@/components/ui/button';
import { ContactInfo } from '@/components/ContactInfo';
import VideoEmbed from '@/components/VideoEmbed';
import { 
  Droplets, Home, Layers, Wind, Sparkles, Square,
  CheckCircle, ArrowRight, Phone, Clock, Shield
} from 'lucide-react';
import { serviceSchema, faqSchema, breadcrumbSchema } from '@/lib/schema';

const servicesData: Record<string, {
  title: string;
  icon: ComponentType<React.SVGProps<SVGSVGElement>>;
  description: string;
  longDescription: string;
  whatIs: string;
  whyNeeded: string;
  howDone: string;
  whenNeeded: string;
  surfaces: string[];
  faqs: { q: string; a: string }[];
  relatedServices?: string[];
}> = {
  'pressure-washing': {
    title: 'Pressure Washing',
    icon: Droplets,
    description: 'Professional high-pressure cleaning for hard surfaces',
    longDescription: 'Our pressure washing service uses powerful, controlled water jets to remove stubborn dirt, grime, moss, algae, and stains from hard surfaces. This method is ideal for driveways, patios, pathways, and other durable outdoor areas that can withstand high-pressure cleaning.',
    whatIs: 'Pressure washing is a cleaning method that uses high-pressure water spray to remove loose paint, mould, grime, dust, mud, and dirt from surfaces. The pressure is measured in PSI (pounds per square inch), and professional equipment can deliver water at pressures far exceeding a standard garden hose.',
    whyNeeded: 'Over time, outdoor surfaces accumulate organic matter, dirt, and stains that regular cleaning cannot remove. This buildup not only looks unsightly but can also make surfaces slippery and hazardous. Moss and algae can cause long-term damage if left untreated. Regular pressure washing maintains your property\'s appearance and safety.',
    howDone: 'We begin by assessing the surface to determine the appropriate pressure level. Our technicians use professional-grade pressure washing equipment with adjustable settings. We systematically clean the entire area, paying extra attention to heavily soiled spots. For surfaces that require it, we apply pre-treatment solutions to break down stubborn stains.',
    whenNeeded: 'Most hard surfaces benefit from pressure washing every 12-18 months, depending on environmental factors. Properties with heavy tree coverage or in shaded areas may need more frequent cleaning due to faster moss and algae growth.',
    surfaces: ['Block paving', 'Concrete driveways', 'Natural stone', 'Brick paths', 'Tarmac areas', 'Garden patios'],
    faqs: [
      { q: 'Will pressure washing damage my paving?', a: 'When performed correctly by professionals, pressure washing is safe for most hard surfaces. We adjust the pressure based on the surface type to prevent damage.' },
      { q: 'How long does pressure washing take?', a: 'A typical driveway takes 2-4 hours depending on size and condition. We can provide a time estimate during your free quote.' },
      { q: 'Do you re-sand block paving after cleaning?', a: 'Yes, we offer kiln-dried sand re-sanding as part of our driveway cleaning service to keep your block paving stable and looking great.' },
    ],
    relatedServices: ['driveway-cleaning', 'soft-washing', 'moss-removal'],
  },
  'driveway-cleaning': {
    title: 'Driveway Cleaning',
    icon: Home,
    description: 'Restore your driveway to its original condition',
    longDescription: 'Your driveway is one of the first things visitors see. Our driveway cleaning service removes years of built-up dirt, oil stains, moss, and weeds, restoring your driveway to its original appearance. We work with all driveway types including block paving, concrete, tarmac, and natural stone.',
    whatIs: 'Driveway cleaning is a comprehensive exterior cleaning service that combines pressure washing, surface treatment, and finishing work to completely rejuvenate your driveway. Unlike a quick jet wash, professional driveway cleaning addresses stains, moss, weeds, and general deterioration.',
    whyNeeded: 'A dirty driveway affects your property\'s curb appeal and value. Moss and algae make surfaces dangerously slippery, especially in wet conditions. Oil stains and tyre marks become harder to remove the longer they\'re left. Professional cleaning extends the life of your driveway by removing damaging organic growth.',
    howDone: 'We start with a thorough inspection to identify stains, damage, and growth. Weeds are treated or removed. We apply appropriate pre-treatment solutions for oil stains and organic matter. The entire surface is then pressure washed using commercial equipment. For block paving, we finish with kiln-dried sand to stabilise the blocks.',
    whenNeeded: 'Annual or bi-annual cleaning is recommended for most driveways. Properties with heavy vehicle use, tree coverage, or north-facing aspects may benefit from more frequent cleaning.',
    surfaces: ['Block paving', 'Imprinted concrete', 'Natural flagstones', 'Concrete', 'Tarmac', 'Resin-bound surfaces'],
    faqs: [
      { q: 'Can you remove oil stains from my driveway?', a: 'Yes, we use specialist degreasing agents that effectively remove most oil and petroleum stains. Very old or deep stains may lighten significantly rather than disappear completely.' },
      { q: 'Will cleaning my driveway disturb my plants?', a: 'We take care to protect adjacent plants and garden areas. We can use barriers and adjust our techniques near flower beds.' },
      { q: 'How soon can I use my driveway after cleaning?', a: 'You can walk on the driveway immediately. We recommend waiting 24 hours before parking vehicles, especially if re-sanding has been done.' },
    ],
    relatedServices: ['pressure-washing', 'block-paving-cleaning', 'moss-removal'],
  },
  'roof-cleaning': {
    title: 'Roof Cleaning',
    icon: Layers,
    description: 'Safe moss and algae removal for all roof types',
    longDescription: 'Roof cleaning removes unsightly moss, lichen, and algae that can damage your roof tiles over time. We use safe, low-pressure soft washing techniques combined with biocidal treatments to clean your roof without causing damage to tiles or disturbing the roof structure.',
    whatIs: 'Roof cleaning is a specialist service that removes organic growth from roof tiles using low-pressure methods and biocidal treatments. Unlike aggressive pressure washing (which can damage tiles), soft washing gently cleans while killing moss and algae at the root to prevent quick regrowth.',
    whyNeeded: 'Moss and lichen retain moisture, which can lead to frost damage in winter. The roots penetrate between tiles, potentially lifting them and causing leaks. A moss-covered roof is also less energy-efficient as it affects water drainage and ventilation. Regular cleaning protects your roof investment.',
    howDone: 'We begin with a physical scrape to remove thick moss deposits. A low-pressure wash then cleans the tiles without forcing water under them. Finally, we apply a professional biocide treatment that continues working for months, preventing regrowth and keeping your roof clean longer.',
    whenNeeded: 'Most roofs benefit from cleaning every 3-5 years, depending on location and exposure. Properties under or near trees, or in damp, shaded areas, may need more frequent attention.',
    surfaces: ['Concrete tiles', 'Clay tiles', 'Slate roofs', 'Flat roofs', 'UPVC fascias', 'Conservatory roofs'],
    faqs: [
      { q: 'Is roof cleaning safe?', a: 'Yes, when done professionally. We use low-pressure techniques and take all necessary safety precautions. We never high-pressure wash roof tiles.' },
      { q: 'Will you need to access my loft?', a: 'Usually not. We work from the outside using appropriate access equipment. We\'ll discuss any specific requirements during the quote.' },
      { q: 'How long does the biocide treatment last?', a: 'Our biocide treatment continues working for 12-18 months, significantly slowing any regrowth and keeping your roof cleaner for longer.' },
    ],
    relatedServices: ['soft-washing', 'moss-removal', 'gutter-cleaning'],
  },
  'gutter-cleaning': {
    title: 'Gutter Cleaning',
    icon: Wind,
    description: 'Prevent water damage with professional gutter maintenance',
    longDescription: 'Blocked gutters can cause serious water damage to your property, including damp walls, foundation problems, and fascia damage. Our gutter cleaning service removes leaves, moss, and debris to ensure your gutters drain properly and protect your home.',
    whatIs: 'Gutter cleaning involves the removal of accumulated debris—leaves, moss, sediment, and other materials—from your guttering system. This includes the gutters themselves, downpipes, and outlets. Clean gutters ensure rainwater flows away from your property as designed.',
    whyNeeded: 'Blocked gutters overflow, sending water down your walls instead of through the drainage system. This causes damp, staining, and can damage brickwork and foundations. In winter, blocked gutters can freeze, potentially cracking the gutter itself. Regular cleaning prevents costly repairs.',
    howDone: 'We use professional gutter vacuum systems that safely remove debris from ground level or stable ladders where needed. All debris is collected and removed from your property. We check downpipes are flowing freely and can flush the system if blockages are found.',
    whenNeeded: 'Gutters should be cleaned at least once per year, ideally in late autumn after leaves have fallen. Properties with overhanging trees may need cleaning twice yearly—autumn and spring.',
    surfaces: ['UPVC gutters', 'Cast iron gutters', 'Aluminium gutters', 'Plastic downpipes', 'Box gutters', 'Valley gutters'],
    faqs: [
      { q: 'How do you access high gutters?', a: 'We use professional vacuum systems with carbon fibre poles that reach up to 12 metres, allowing safe cleaning from the ground. For complex access, we use appropriate ladder or access equipment.' },
      { q: 'What do you do with the debris?', a: 'All debris is collected and removed from your property. We leave your grounds clean and tidy.' },
      { q: 'Can you repair damaged gutters?', a: 'We can advise on gutter condition and recommend repairs if needed. Minor adjustments can often be made during the cleaning visit.' },
    ],
    relatedServices: ['roof-cleaning', 'pressure-washing', 'render-cleaning'],
  },
  'window-cleaning': {
    title: 'Window Cleaning',
    icon: Sparkles,
    description: 'Crystal-clear windows for homes and businesses',
    longDescription: 'Our window cleaning service delivers spotless, streak-free results using pure water technology. We clean windows, frames, and sills, leaving your property looking bright and well-maintained. Available for residential and commercial properties of all sizes.',
    whatIs: 'Modern window cleaning uses pure water technology—water that has been purified to remove all minerals and impurities. When applied through special water-fed poles, pure water attracts and removes dirt, then evaporates leaving no residue or streaks.',
    whyNeeded: 'Clean windows improve your property\'s appearance and allow more natural light inside. Dirty windows accumulate more dirt over time, and mineral deposits from rainwater can etch glass if left too long. Regular cleaning maintains your windows in good condition.',
    howDone: 'We use water-fed pole systems that deliver purified water to your windows from ground level. The soft brush head gently agitates dirt while pure water rinses it away. Frames and sills are cleaned at the same time. The pure water dries naturally without leaving marks.',
    whenNeeded: 'Residential windows typically benefit from monthly or bi-monthly cleaning. Commercial properties often need more frequent service. We offer regular cleaning schedules to suit your needs.',
    surfaces: ['House windows', 'Conservatory glass', 'Skylights', 'Commercial glazing', 'Shop fronts', 'UPVC frames'],
    faqs: [
      { q: 'Why does the water dry without marks?', a: 'Pure water contains no dissolved minerals, so when it evaporates there\'s nothing left behind to cause spots or streaks. It\'s the most effective method for achieving a spotless finish.' },
      { q: 'Can you clean conservatory roofs?', a: 'Yes, our water-fed pole system is ideal for conservatory roof cleaning. We can clean the glass panels, frames, and internal guttering.' },
      { q: 'Do you clean windows in the rain?', a: 'Light rain doesn\'t affect the quality of pure water cleaning. Heavy rain may require rescheduling. We\'ll always aim to deliver the best possible result.' },
    ],
    relatedServices: ['pressure-washing', 'render-cleaning', 'gutter-cleaning'],
  },
  'render-cleaning': {
    title: 'Render Cleaning',
    icon: Square,
    description: 'Specialist cleaning for rendered walls and facades',
    longDescription: 'Rendered walls attract algae, pollution stains, and organic growth that dull their appearance. Our specialist render cleaning service safely removes these contaminants using soft washing techniques, restoring your walls to their original colour without damage.',
    whatIs: 'Render cleaning is a specialist soft washing service for external rendered walls. Unlike painted surfaces, render is porous and requires gentle cleaning with appropriate chemicals that break down biological growth and pollution staining without damaging the render finish.',
    whyNeeded: 'Algae and biological growth thrive on render, especially on north-facing or shaded walls. Red and green algae staining is unsightly and suggests dampness. Pollution deposits from traffic and industry also accumulate over time. Professional cleaning restores your property\'s appearance.',
    howDone: 'We apply a gentle, render-safe cleaning solution that kills algae and loosens pollution deposits. After allowing the solution to work, we use low-pressure washing to rinse the surface clean. A biocide treatment can be applied to slow regrowth.',
    whenNeeded: 'Render typically needs cleaning every 2-4 years depending on location and exposure. Early treatment when staining first appears prevents deep penetration and makes future cleaning easier.',
    surfaces: ['K-rend', 'Monocouche render', 'Sand and cement render', 'Coloured render', 'Textured coatings', 'Pebbledash'],
    faqs: [
      { q: 'Will cleaning damage my render?', a: 'No, we use low-pressure soft washing specifically designed for render. High-pressure washing is never used on rendered surfaces as it can cause damage.' },
      { q: 'Why is only part of my render dirty?', a: 'Algae growth depends on moisture, shade, and orientation. North-facing walls and areas near plants or trees typically show more growth. We can clean the affected areas or the entire property.' },
      { q: 'Can you clean painted render?', a: 'Yes, we can clean painted render surfaces. We\'ll assess the paint condition first to ensure our cleaning method is appropriate.' },
    ],
    relatedServices: ['soft-washing', 'roof-cleaning', 'pressure-washing'],
  },
  'soft-washing': {
    title: 'Soft Washing',
    icon: Wind,
    description: 'Low-pressure chemical cleaning for delicate surfaces',
    longDescription: 'Soft washing is a specialist cleaning method using low-pressure water combined with biodegradable cleaning solutions. It\'s the safe, professional way to clean delicate surfaces like roofs, render, and brickwork where high-pressure jets would cause damage.',
    whatIs: 'Soft washing is a cleaning method that uses low-pressure water (typically below 100 PSI) combined with environmentally-friendly cleaning chemicals. This approach allows professional cleaners to safely treat delicate surfaces and kill organic growth at the source, preventing quick regrowth.',
    whyNeeded: 'Many exterior surfaces—particularly roofs, render, and older brickwork—cannot safely withstand high-pressure washing. Soft washing provides deep cleaning power without the risk of damage. The chemical approach also kills moss, algae, and lichen at the root, keeping surfaces cleaner for longer.',
    howDone: 'We carefully apply our approved soft washing solution to the affected surface, allowing it to work for the appropriate time. The low-pressure rinse then removes dirt and dead growth. The biocidal treatment continues to protect your surface for months, slowing regrowth significantly.',
    whenNeeded: 'Soft washing is ideal for annual or bi-annual maintenance depending on your property\'s exposure. Properties with significant shade or moisture may need more frequent treatment to prevent moss and algae establishment.',
    surfaces: ['Roof tiles', 'Rendered walls', 'Brick facades', 'Stone surfaces', 'Fascias and soffits', 'Delicate coatings'],
    faqs: [
      { q: 'How is soft washing different from pressure washing?', a: 'Soft washing uses low pressure (under 100 PSI) combined with cleaning solutions, while pressure washing relies on high-pressure jets (3000+ PSI). Soft washing is safer for delicate surfaces and more effective at killing organic growth.' },
      { q: 'Is soft washing environmentally friendly?', a: 'Yes, we use biodegradable, environmentally-approved cleaning solutions. These break down safely and don\'t harm plants, pets, or waterways.' },
      { q: 'How long do the results last?', a: 'The biocidal treatment continues working for 12-18 months, significantly slowing regrowth. Most properties stay cleaner for 2-3 years after soft washing.' },
      { q: 'Can soft washing be used on all surfaces?', a: 'Soft washing is safe for most surfaces, but we always assess each property individually. Some modern hard surfaces might benefit from pressure washing instead, and we\'ll recommend the best approach.' },
    ],
    relatedServices: ['roof-cleaning', 'render-cleaning', 'moss-removal'],
  },
  'moss-removal': {
    title: 'Moss Removal',
    icon: Layers,
    description: 'Professional moss and algae removal from roofs and surfaces',
    longDescription: 'Moss growth on roofs is a common problem in the UK, particularly in damp areas and under tree shade. Our specialist moss removal service safely eliminates moss from roof tiles, keeping them protected and looking good. We use methods that prevent quick regrowth.',
    whatIs: 'Moss removal is a specialist service focused on eliminating moss from roof tiles, render, and other outdoor surfaces. Professional moss removal combines mechanical cleaning with biocidal treatment to kill moss at its root and prevent it returning quickly.',
    whyNeeded: 'Moss retains moisture against roof tiles, leading to frost damage and tile deterioration. The root structure can lift and disturb tiles, potentially causing leaks. Moss buildup also looks unsightly and reduces your property\'s curb appeal. Regular removal protects your roof investment.',
    howDone: 'We begin by carefully scraping away thick moss deposits by hand, being gentle to avoid disturbing tiles. A soft wash application then kills remaining moss spores and roots. Finally, we apply a biocidal treatment that prevents moss returning for months.',
    whenNeeded: 'In the UK climate, roofs often need moss attention every 2-3 years. Properties under trees, in shaded areas, or in damp locations may need annual treatment. Early intervention prevents deep penetration and spread.',
    surfaces: ['Roof tiles', 'Felt roofs', 'Flat roofs', 'Fascias', 'Rendered walls', 'Stone surfaces'],
    faqs: [
      { q: 'Is moss on my roof dangerous?', a: 'While isolated moss isn\'t immediately dangerous, it can lead to problems over time. Moisture retention can cause frost damage in winter, and moss roots can disturb tiles. Regular removal prevents these issues.' },
      { q: 'Will you need to get on my roof?', a: 'Not always. We can clean many roofs safely from the ground using soft washing techniques and extended poles. For roofs requiring hand scraping, we use appropriate safety equipment.' },
      { q: 'Can moss come back after removal?', a: 'Moss can regrow, but our biocidal treatment significantly slows this. Most roofs stay moss-free for 12-18 months after our service, and we can establish maintenance schedules for long-term protection.' },
      { q: 'Does moss damage affect my roof tiles?', a: 'If moss has been present for years, the tiles may have some surface damage. In most cases, this is only cosmetic. We\'ll assess your roof condition during the free quote.' },
    ],
    relatedServices: ['roof-cleaning', 'soft-washing', 'render-cleaning'],
  },
  'block-paving-cleaning': {
    title: 'Block Paving Cleaning',
    icon: Home,
    description: 'Specialist cleaning and restoration for block paving driveways',
    longDescription: 'Block paving driveways accumulate dirt, stains, and organic growth that dull their appearance. Our specialist block paving cleaning service restores your driveway to look almost new, including weed removal, pressure washing, and re-sanding to stabilise the blocks.',
    whatIs: 'Block paving cleaning is a comprehensive service that cleans block driveways and patios, removes weeds, and restores them to excellent condition. Unlike simple jet washing, professional block paving cleaning includes assessment, pre-treatment, washing, and finishing work to make blocks look and perform like new.',
    whyNeeded: 'Block paving is an investment that needs proper maintenance. Algae and organic growth cause slipping hazards. Weeds damage the structure and look terrible. Oil and traffic stains accumulate over years. Professional cleaning restores safety and appearance, extending your driveway\'s life by many years.',
    howDone: 'We inspect the driveway and treat weeds. Oil stains receive pre-treatment with degreaser. The entire surface is pressure washed at the appropriate setting for your block type. Finally, we apply kiln-dried sand between blocks to stabilise them and prevent weed regrowth.',
    whenNeeded: 'Block paving benefits from annual or bi-annual cleaning. High-traffic driveways or those under tree shade may need more frequent attention. Regular cleaning is cheaper than dealing with damage and weed growth.',
    surfaces: ['Concrete block paving', 'Natural stone blocks', 'Imprinted blocks', 'Retaining walls', 'Patios and paths', 'Block-paved parking areas'],
    faqs: [
      { q: 'Why is re-sanding important?', a: 'Sand between blocks keeps them stable and prevents movement. It also prevents weeds growing up from below. Fresh kiln-dried sand locks the blocks in place and looks great.' },
      { q: 'Can you remove oil stains from block paving?', a: 'Yes, we can remove most oil stains using specialist degreasing agents. Fresh stains come out completely; older, deeper stains may lighten significantly. We\'ll assess your driveway during the quote.' },
      { q: 'How soon can I use my driveway after cleaning?', a: 'You can walk on it immediately. We recommend waiting 24 hours before parking vehicles to allow the sand and drying process to complete properly.' },
      { q: 'Will cleaning disturb my plants?', a: 'We\'re careful around plants and gardens. We can use barriers if needed and adjust techniques to protect nearby beds and shrubs.' },
    ],
    relatedServices: ['pressure-washing', 'driveway-cleaning', 'moss-removal'],
  },
};

export default function ServicePage(props?: { params?: { serviceSlug: string; locationSlug?: string } }) {
  const routerParams = useParams<{ serviceSlug: string }>();
  const propsParams = props?.params;
  
  const { serviceSlug } = propsParams || routerParams || {};
  const service = serviceSlug ? servicesData[serviceSlug as string] : null;

  useEffect(() => {
    // Handle schema injections for Next.js (client-side)
    if (service) {
      const schema = serviceSchema(service.title, service.description);
      const faqData = faqSchema(service.faqs.map(f => ({ question: f.q, answer: f.a })));
      const breadcrumbs = breadcrumbSchema([
        { name: 'Home', url: 'https://rrmexternalcleaningspecialist.co.uk' },
        { name: 'Services', url: 'https://rrmexternalcleaningspecialist.co.uk/services' },
        { name: service.title, url: `https://rrmexternalcleaningspecialist.co.uk/services/${serviceSlug}` }
      ]);

      const doc = document;
      const schemaScript = doc.createElement('script');
      schemaScript.type = 'application/ld+json';
      schemaScript.innerHTML = JSON.stringify(schema);

      const faqScript = doc.createElement('script');
      faqScript.type = 'application/ld+json';
      faqScript.innerHTML = JSON.stringify(faqData);

      const breadScript = doc.createElement('script');
      breadScript.type = 'application/ld+json';
      breadScript.innerHTML = JSON.stringify(breadcrumbs);

      doc.head.appendChild(schemaScript);
      doc.head.appendChild(faqScript);
      doc.head.appendChild(breadScript);

      return () => {
        doc.head.removeChild(schemaScript);
        doc.head.removeChild(faqScript);
        doc.head.removeChild(breadScript);
      };
    }
  }, [service, serviceSlug]);

  if (!service) {
    return (
      <Layout>
        <div className="container-custom section-padding text-center">
          <h1 className="font-display text-3xl font-bold text-foreground mb-4">Service Not Found</h1>
          <p className="text-muted-foreground mb-6">The service you're looking for doesn't exist.</p>
          <Button asChild>
            <Link href="/services">View All Services</Link>
          </Button>
        </div>
      </Layout>
    );
  }

  const Icon = service.icon;

  const breadcrumbs = [
    { name: 'Home', url: '/' },
    { name: 'Services', url: '/services' },
    { name: service.title, url: `/services/${serviceSlug}` }
  ];

  return (
    <Layout>
      {/* Hero Section */}
      <section className="hero-bg py-16 md:py-24">
        <div className="container-custom">
          <div className="flex items-center gap-6 mb-6">
            <div className="flex h-16 w-16 items-center justify-center rounded-2xl bg-accent/20 text-accent">
              <Icon className="h-8 w-8" />
            </div>
            <div>
              <h1 className="font-display text-4xl md:text-5xl font-bold text-primary-foreground">
                {service.title}
              </h1>
              <p className="text-primary-foreground/80 mt-2">Professional exterior cleaning — 47 five-star reviews across North West England. Est. 2016.</p>
            </div>
          </div>
        </div>
      </section>

      {/* Overview Section */}
      <section className="section-padding bg-background">
        <div className="container-custom">
          <div className="grid md:grid-cols-2 gap-12 items-center">
            <div>
              <h2 className="font-display text-3xl font-bold text-foreground mb-6">
                What is {service.title}?
              </h2>
              <p className="text-muted-foreground leading-relaxed mb-6">
                {service.longDescription}
              </p>
              <div className="space-y-4">
                <div className="flex gap-3">
                  <CheckCircle className="h-6 w-6 text-success flex-shrink-0 mt-0.5" />
                  <div>
                    <h3 className="font-semibold text-foreground mb-1">Professional Results</h3>
                    <p className="text-muted-foreground text-sm">{service.whatIs}</p>
                  </div>
                </div>
                <div className="flex gap-3">
                  <CheckCircle className="h-6 w-6 text-success flex-shrink-0 mt-0.5" />
                  <div>
                    <h3 className="font-semibold text-foreground mb-1">Why {service.title}?</h3>
                    <p className="text-muted-foreground text-sm">{service.whyNeeded}</p>
                  </div>
                </div>
              </div>
              <div className="mt-8">
                <Button size="lg" variant="default" asChild>
                  <Link href="/contact">
                    Book Now
                    <ArrowRight className="ml-2 h-4 w-4" />
                  </Link>
                </Button>
              </div>
            </div>
            <div className="bg-gradient-to-br from-accent/20 to-accent/5 rounded-2xl p-8 border border-accent/20">
              <div className="space-y-6">
                <div className="flex items-start gap-4">
                  <Clock className="h-6 w-6 text-accent flex-shrink-0 mt-1" />
                  <div>
                    <h3 className="font-semibold text-foreground mb-1">How Long Does It Take?</h3>
                    <p className="text-muted-foreground text-sm">Duration varies by property size and condition. We'll provide a time estimate during your free quote.</p>
                  </div>
                </div>
                <div className="flex items-start gap-4">
                  <Shield className="h-6 w-6 text-accent flex-shrink-0 mt-1" />
                  <div>
                    <h3 className="font-semibold text-foreground mb-1">Fully Insured & Licensed</h3>
                    <p className="text-muted-foreground text-sm">We're fully insured and adhere to all health and safety regulations.</p>
                  </div>
                </div>
                <div className="flex items-start gap-4">
                  <Phone className="h-6 w-6 text-accent flex-shrink-0 mt-1" />
                  <div>
                    <h3 className="font-semibold text-foreground mb-1">Free Quote</h3>
                    <p className="text-muted-foreground text-sm">Get a free, no-obligation quote by calling <strong>07845 463877</strong></p>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Hero */}
      <section className="hero-bg py-16 md:py-24">
        <div className="container-custom">
          {/* Visual Breadcrumbs for Internal Linking */}
          <nav aria-label="Breadcrumb" className="mb-6 text-sm text-primary-foreground/80">
            <ol className="flex items-center space-x-2">
              {breadcrumbs.map((crumb, index) => (
                <Fragment key={crumb.url}>
                  {index > 0 && <li>/</li>}
                  <li>
                    {index === breadcrumbs.length - 1 ? (
                      <span className="text-white font-medium" aria-current="page">{crumb.name}</span>
                    ) : (
                      <Link href={crumb.url} className="hover:text-white transition-colors">{crumb.name}</Link>
                    )}
                  </li>
                </Fragment>
              ))}
            </ol>
          </nav>

          <div className="max-w-3xl">
            <div className="flex items-center gap-3 mb-6">
              <div className="flex h-14 w-14 items-center justify-center rounded-xl bg-accent text-accent-foreground">
                <Icon className="h-7 w-7" />
              </div>
            </div>
            <h1 className="font-display text-4xl md:text-5xl font-bold text-primary-foreground mb-6">
              {service.title} in the North West — R.R.M Specialist
            </h1>
            <p className="text-lg md:text-xl text-primary-foreground/85 mb-8 leading-relaxed">
              {service.longDescription}
            </p>
            <div className="flex flex-col sm:flex-row gap-4">
              <Button variant="hero" size="lg" asChild>
                <Link href="/contact">Get a Free Quote</Link>
              </Button>
              <Button variant="heroOutline" size="lg" asChild>
                <a href="tel:+447845463877">
                  <Phone className="mr-2 h-4 w-4" />
                  Call Us
                </a>
              </Button>
            </div>
          </div>
        </div>
      </section>

      {/* What Is */}
      <section className="section-padding bg-background">
        <div className="container-custom">
          <div className="grid gap-12 lg:grid-cols-2 lg:gap-16">
            <div>
              <h2 className="font-display text-3xl font-bold text-foreground mb-6">
                What is {service.title}?
              </h2>
              <p className="text-muted-foreground leading-relaxed mb-6">
                {service.whatIs}
              </p>
              <h3 className="font-display text-xl font-semibold text-foreground mb-4">
                Why is {service.title} Needed?
              </h3>
              <p className="text-muted-foreground leading-relaxed">
                {service.whyNeeded}
              </p>
            </div>
            <div>
              <h3 className="font-display text-xl font-semibold text-foreground mb-4">
                How We Perform {service.title}
              </h3>
              <p className="text-muted-foreground leading-relaxed mb-6">
                {service.howDone}
              </p>
              <h3 className="font-display text-xl font-semibold text-foreground mb-4">
                When Should You Get {service.title}?
              </h3>
              <p className="text-muted-foreground leading-relaxed">
                {service.whenNeeded}
              </p>
            </div>
          </div>
        </div>
      </section>

      {/* Surfaces */}
      <section className="section-padding bg-secondary/50">
        <div className="container-custom">
          <h2 className="font-display text-2xl font-bold text-foreground mb-8 text-center">
            Surfaces We Clean
          </h2>
          <div className="flex flex-wrap justify-center gap-3">
            {service.surfaces.map((surface) => (
              <span
                key={surface}
                className="inline-flex items-center gap-2 px-4 py-2 rounded-full bg-card border border-border text-sm font-medium text-foreground"
              >
                <CheckCircle className="h-4 w-4 text-success" />
                {surface}
              </span>
            ))}
          </div>
        </div>
      </section>

      {/* Video Section */}
      <section className="section-padding bg-background">
        <div className="container-custom">
          <VideoEmbed
            title="R.R.M External Cleaning – Professional Services in Action"
            description={`See our expert ${service.title.toLowerCase()} technique in action. Watch us deliver professional exterior cleaning results across Greater Manchester. This video demonstrates the care, expertise, and quality standards we apply to every ${service.title.toLowerCase()} project.`}
            relatedPageUrl={`/services/${serviceSlug}`}
            relatedPageLabel={`Learn more about our ${service.title} service`}
            service={service.title}
          />
        </div>
      </section>

      {/* Why Choose Us */}
      <section className="section-padding bg-background">
        <div className="container-custom">
          <div className="max-w-3xl mx-auto text-center mb-12">
            <h2 className="font-display text-3xl font-bold text-foreground mb-4">
              Why North West Homeowners Choose R.R.M for {service.title}
            </h2>
          </div>
          <div className="grid gap-6 sm:grid-cols-3">
            <div className="text-center p-6">
              <div className="flex h-12 w-12 items-center justify-center rounded-lg bg-accent/10 text-accent mx-auto mb-4">
                <Clock className="h-6 w-6" />
              </div>
              <h3 className="font-display font-semibold text-foreground mb-2">Since 2016</h3>
              <p className="text-sm text-muted-foreground">Years of experience delivering quality results</p>
            </div>
            <div className="text-center p-6">
              <div className="flex h-12 w-12 items-center justify-center rounded-lg bg-accent/10 text-accent mx-auto mb-4">
                <Shield className="h-6 w-6" />
              </div>
              <h3 className="font-display font-semibold text-foreground mb-2">Fully Insured</h3>
              <p className="text-sm text-muted-foreground">Complete peace of mind on every job</p>
            </div>
            <div className="text-center p-6">
              <div className="flex h-12 w-12 items-center justify-center rounded-lg bg-accent/10 text-accent mx-auto mb-4">
                <CheckCircle className="h-6 w-6" />
              </div>
              <h3 className="font-display font-semibold text-foreground mb-2">Satisfaction Guaranteed</h3>
              <p className="text-sm text-muted-foreground">We're not done until you're happy</p>
            </div>
          </div>
        </div>
      </section>

      {/* FAQs — native details/summary with FAQPage microdata for LLM/AI parsing */}
      <section
        className="section-padding bg-secondary/30"
        itemScope
        itemType="https://schema.org/FAQPage"
      >
        <div className="container-custom">
          <h2 className="font-display text-2xl font-bold text-foreground mb-3 text-center">
            Common Questions About {service.title}
          </h2>
          <p className="text-center text-muted-foreground mb-8 max-w-xl mx-auto">
            Straightforward answers to what homeowners ask most before booking {service.title.toLowerCase()}.
          </p>
          <div className="max-w-3xl mx-auto space-y-3">
            {service.faqs.map((faq, index) => (
              <details
                key={index}
                className="group rounded-xl border border-border/50 bg-card overflow-hidden"
                itemScope
                itemProp="mainEntity"
                itemType="https://schema.org/Question"
              >
                <summary
                  className="cursor-pointer flex items-center justify-between gap-4 px-6 py-4 font-display font-semibold text-foreground hover:text-accent transition-colors list-none [&::-webkit-details-marker]:hidden"
                  itemProp="name"
                >
                  <span>{faq.q}</span>
                  <svg
                    aria-hidden="true"
                    className="h-5 w-5 shrink-0 text-muted-foreground transition-transform duration-200 group-open:rotate-180"
                    fill="none"
                    stroke="currentColor"
                    viewBox="0 0 24 24"
                    strokeWidth={2}
                  >
                    <path strokeLinecap="round" strokeLinejoin="round" d="M19 9l-7 7-7-7" />
                  </svg>
                </summary>
                <div
                  itemScope
                  itemProp="acceptedAnswer"
                  itemType="https://schema.org/Answer"
                >
                  <p
                    className="px-6 pb-5 text-muted-foreground leading-relaxed"
                    itemProp="text"
                  >
                    {faq.a}
                  </p>
                </div>
              </details>
            ))}
          </div>
        </div>
      </section>

      {/* Related Services */}
      {service.relatedServices && service.relatedServices.length > 0 && (
        <section className="section-padding bg-background">
          <div className="container-custom">
            <h2 className="font-display text-2xl font-bold text-foreground mb-8 text-center">
              Related Services You Might Need
            </h2>
            <div className="grid gap-6 md:grid-cols-3">
              {service.relatedServices.map((slug) => {
                const relatedService = servicesData[slug];
                if (!relatedService) return null;
                const RelatedIcon = relatedService.icon;
                return (
                  <Link
                    key={slug}
                    href={`/services/${slug}`}
                    className="group card-elevated p-6 flex flex-col hover:shadow-lg transition-all"
                  >
                    <div className="flex h-12 w-12 items-center justify-center rounded-lg bg-accent/10 text-accent group-hover:bg-accent group-hover:text-accent-foreground transition-colors mb-4">
                      <RelatedIcon className="h-6 w-6" />
                    </div>
                    <h3 className="font-display text-lg font-semibold text-foreground group-hover:text-accent transition-colors mb-2">
                      {relatedService.title}
                    </h3>
                    <p className="text-muted-foreground text-sm leading-relaxed flex-1">
                      {relatedService.description}
                    </p>
                    <div className="mt-4 flex items-center text-sm font-medium text-accent">
                      <span>Explore service</span>
                      <ArrowRight className="ml-2 h-4 w-4 transition-transform group-hover:translate-x-1" />
                    </div>
                  </Link>
                );
              })}
            </div>
          </div>
        </section>
      )}

      {/* CTA */}
      <section className="py-16 hero-bg">
        <div className="container-custom text-center">
          <h2 className="font-display text-3xl font-bold text-primary-foreground mb-4">
            Get Your Free {service.title} Quote Today
          </h2>
          <p className="text-primary-foreground/85 mb-3 max-w-xl mx-auto">
            Tell us about your property and we&apos;ll give you a clear, honest price — no pressure,
            no upselling. Most North West properties get a same-week appointment.
          </p>
          <p className="text-primary-foreground/70 mb-8 max-w-xl mx-auto text-sm">
            Serving Newton-le-Willows, Warrington, St Helens, Manchester &amp; across the North West.
            47 five-star reviews. Fully insured. Est. 2016.
          </p>
          <Button variant="hero" size="lg" asChild>
            <Link href="/contact">
              Get Your Free Quote
              <ArrowRight className="ml-2 h-4 w-4" />
            </Link>
          </Button>
        </div>
      </section>

      {/* Contact Information */}
      <section className="section-padding bg-secondary/10">
        <div className="container-custom">
          <h2 className="font-display text-3xl md:text-4xl font-bold text-foreground text-center mb-2">
            Book {service.title} — Free Quote, Same-Week Availability
          </h2>
          <p className="text-center text-muted-foreground mb-12 max-w-2xl mx-auto">
            Call 07845 463877 or send us an email — we respond the same day and carry full public
            liability insurance on every {service.title.toLowerCase()} job.
          </p>
          <ContactInfo variant="default" />
        </div>
      </section>
    </Layout>
  );
}
