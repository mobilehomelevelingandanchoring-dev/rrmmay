'use client';
import { useEffect, Fragment } from 'react';
import Link from 'next/link';
import { ChevronRight, Phone, CheckCircle } from 'lucide-react';
import { Button } from '@/components/ui/button';
import { Layout } from '@/components/layout/Layout';
import { LiteYouTube } from '@/components/LiteYouTube';

export function ExteriorCleaningWigan() {
  useEffect(() => {
    const schema = {
      '@context': 'https://schema.org',
      '@type': 'LocalBusiness',
      name: 'Exterior Cleaning Services in Wigan | R.R.M Exterior Cleaning Specialist',
      description: 'Professional exterior cleaning in Wigan. Pressure washing, soft washing, driveway, roof, and gutter cleaning. Serving Wigan and surrounding areas.',
      address: { '@type': 'PostalAddress', addressLocality: 'Wigan', addressCountry: 'GB' },
      telephone: '+447845463877',
      areaServed: 'Wigan',
      url: 'https://rrmexternalcleaningspecialist.co.uk/services/exterior-cleaning/wigan'
    };
    const script = document.createElement('script');
    script.type = 'application/ld+json';
    script.innerHTML = JSON.stringify(schema);
    document.head.appendChild(script);
    document.title = 'Exterior Cleaning Services in Wigan | Professional Property Maintenance';
    const meta = document.querySelector('meta[name="description"]');
    if (meta) meta.setAttribute('content', 'Professional exterior cleaning in Wigan. Pressure washing, soft washing, driveway, roof & gutter cleaning. Free quote: 07845 463877');
    return () => { if (script.parentNode) document.head.removeChild(script); };
  }, []);

  const breadcrumbs = [
    { name: 'Home', url: '/' },
    { name: 'Services', url: '/services' },
    { name: 'Exterior Cleaning', url: '/services/exterior-cleaning' },
    { name: 'Wigan', url: '/services/exterior-cleaning/wigan' }
  ];

  const services = [
    { title: 'Driveway Cleaning', desc: 'Restore concrete, block paving, and tarmac to pristine condition' },
    { title: 'Patio Cleaning', desc: 'Remove moss and algae from patios and decking safely' },
    { title: 'Roof Cleaning', desc: 'Safe soft washing for all roof types, removing moss and lichen' },
    { title: 'Gutter Cleaning', desc: 'Professional gutter clearing with debris removal' },
    { title: 'Render & Brick Cleaning', desc: 'Restore render and exposed brick to original condition' },
    { title: 'Pressure Washing', desc: 'High-pressure cleaning for hardy surfaces and stubborn stains' },
    { title: 'Soft Washing', desc: 'Low-pressure chemical cleaning for delicate surfaces' }
  ];

  const faqs = [
    {
      q: 'Is pressure washing safe for my property?',
      a: 'Pressure washing is safe when used correctly on appropriate surfaces. Concrete and stone handle it well. Delicate or older properties benefit from soft washing instead. We assess every surface and recommend the right method.'
    },
    {
      q: 'How often should I have my exterior cleaned?',
      a: 'Most properties benefit from annual cleaning. Properties with heavy moss growth, shaded areas, or tree coverage might need twice yearly. We recommend assessment based on your property\'s specific conditions.'
    },
    {
      q: 'Do you use chemicals? Are they safe?',
      a: 'We use biodegradable, professional-grade detergents and biocides where necessary. They\'re safe when applied correctly, harmless to plants and architecture, and degrade naturally without environmental harm.'
    },
    {
      q: 'How long do results last?',
      a: 'Pressure washing results typically last 6–12 months. Soft washing results last longer—12–18 months—because the biocide prevents regrowth. Results depend on weather and surface type.'
    }
  ];

  return (
    <Layout>
      <main className="min-h-screen bg-background">
        {/* Breadcrumb */}
        <nav className="bg-secondary/50" aria-label="Breadcrumb">
          <div className="container-custom py-4">
            <ol className="flex items-center gap-2 text-sm flex-wrap">
              {breadcrumbs.map((crumb, index) => (
                <Fragment key={crumb.url}>
                  {index > 0 && <li className="text-primary-foreground/50"><ChevronRight className="h-4 w-4" /></li>}
                  <li>
                    {index === breadcrumbs.length - 1 ? (
                      <span className="text-primary-foreground/70" aria-current="page">{crumb.name}</span>
                    ) : (
                      <Link href={crumb.url} className="text-primary hover:text-accent transition-colors">{crumb.name}</Link>
                    )}
                  </li>
                </Fragment>
              ))}
            </ol>
          </div>
        </nav>

        {/* Hero Section */}
        <article className="border-b border-secondary bg-gradient-to-b from-secondary/50 to-background">
          <div className="container-custom section-padding">
            <h1 className="font-display text-4xl md:text-5xl font-bold text-foreground mb-4">Exterior Cleaning Services in Wigan</h1>
            <p className="text-xl text-muted-foreground mb-6">Professional exterior cleaning that removes dirt, algae, moss, and lichen from all exterior surfaces. Pressure washing, soft washing, driveway, roof, and gutter cleaning for residential and commercial properties.</p>
            <div className="flex gap-3 flex-wrap">
              <Button size="lg" asChild><a href="tel:+447845463877"><Phone className="h-5 w-5 mr-2" />Get Free Quote</a></Button>
              <Button size="lg" variant="outline" asChild><a href="#contact">Book Your Service</a></Button>
            </div>
          </div>
        </article>

        {/* Video Section - Educational Content */}
        <div className="container-custom section-padding bg-blue-50 dark:bg-blue-950/30 border-b border-blue-200 dark:border-blue-800">
          <div className="max-w-4xl">
            <section className="mb-6">
              <h2 className="text-2xl font-bold text-foreground mb-4">See Professional Exterior Cleaning in Action</h2>
              <p className="text-muted-foreground mb-6">Watch how our expert team transforms exterior surfaces using advanced pressure washing and soft washing techniques. This video demonstrates the methods we use to safely restore your property's appearance while protecting delicate surfaces.</p>
              <div className="mb-4 max-w-2xl mx-auto">
                <LiteYouTube videoId="g9pXmWrxHfg" title="Professional Exterior Cleaning Video" className="rounded-lg shadow-md" />
              </div>
              <p className="text-sm text-muted-foreground max-w-2xl mx-auto">Our video shows real exterior cleaning results: powerful pressure washing removing years of buildup, gentle soft washing protecting delicate surfaces, and the complete transformation that professional cleaning delivers to Wigan properties.</p>
            </section>
          </div>
        </div>

        {/* Content Sections */}
        <div className="container-custom section-padding">
          <div className="max-w-4xl">
            {/* What Is Exterior Cleaning */}
            <section className="mb-12">
              <h2 className="text-3xl font-bold text-foreground mb-4">What Is Exterior Cleaning?</h2>
              <p className="text-muted-foreground mb-4">Exterior cleaning is a professional service that removes dirt, algae, moss, lichen, and other contaminants from the outside surfaces of properties. This includes everything from driveways and patios to roofs, gutters, brick walls, and render finishes.</p>
              <p className="text-muted-foreground mb-4">The purpose is twofold: to restore the aesthetic appeal of your property and, more importantly, to protect it from long-term damage. When organic growth like moss and algae takes hold, it traps moisture against masonry, accelerating deterioration. Regular professional cleaning prevents this, extending the lifespan of surfaces and maintaining your property's value.</p>
            </section>

            {/* Services We Offer */}
            <section className="mb-12">
              <h2 className="text-3xl font-bold text-foreground mb-6">Professional Exterior Cleaning Services We Offer in Wigan</h2>
              <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-6 mb-8">
                {services.map((service, idx) => (
                  <div key={idx} className="bg-gradient-to-br from-blue-50 to-slate-50 dark:from-blue-950/30 dark:to-slate-950/30 rounded-lg p-6 border border-blue-100 dark:border-blue-900 hover:border-blue-400 dark:hover:border-blue-600 transition-colors shadow-sm hover:shadow-md">
                    <h3 className="text-xl font-bold text-foreground mb-2">{service.title}</h3>
                    <p className="text-muted-foreground">{service.desc}</p>
                  </div>
                ))}
              </div>
              <div className="bg-blue-50 dark:bg-blue-950/20 rounded-lg p-6 border border-blue-200 dark:border-blue-900 text-center">
                <p className="text-foreground font-bold mb-4 text-lg">🎯 Expert Service Assessment</p>
                <p className="text-muted-foreground mb-4">Unsure which cleaning method suits your property? Our free assessment identifies the best approach for your specific surfaces and budget.</p>
                <Button size="lg" className="w-full sm:w-auto" asChild><a href="tel:+447845463877"><Phone className="h-5 w-5 mr-2" />Get a Free Assessment</a></Button>
              </div>
            </section>

            {/* Why It's Essential */}
            <section className="mb-12">
              <h2 className="text-3xl font-bold text-foreground mb-4">Why Exterior Cleaning Is Essential for Properties in Wigan</h2>
              <p className="text-muted-foreground mb-6">Wigan's climate creates perfect conditions for organic growth. Damp, overcast weather means moss, algae, and lichen thrive on exterior surfaces. Left unchecked, this growth causes real damage. The Northwest's high rainfall and humid conditions accelerate the deterioration of exterior surfaces, making regular professional cleaning not a luxury—but essential property maintenance.</p>
              <div className="space-y-4 mb-8">
                <div className="bg-accent/10 rounded-lg p-4 border-l-4 border-accent">
                  <h4 className="font-bold text-foreground mb-1">Moisture Retention and Structural Deterioration</h4>
                  <p className="text-muted-foreground">Algae and moss act like sponges, trapping water against masonry, render, and wood. This accelerates decay, causing cracks, spalling, and eventual structural compromise. In Wigan's wet climate, this process happens faster than in drier regions.</p>
                </div>
                <div className="bg-accent/10 rounded-lg p-4 border-l-4 border-accent">
                  <h4 className="font-bold text-foreground mb-1">Long-Term Cost Savings</h4>
                  <p className="text-muted-foreground">A £300–500 professional cleaning today prevents £2000–5000+ repair bills down the line. Regular maintenance is always cheaper than addressing damage after the fact. Prevention through regular exterior cleaning is smart property investment.</p>
                </div>
                <div className="bg-accent/10 rounded-lg p-4 border-l-4 border-accent">
                  <h4 className="font-bold text-foreground mb-1">Property Value and Curb Appeal</h4>
                  <p className="text-muted-foreground">First impressions matter. A clean exterior suggests a well-maintained, cared-for property. An algae-covered roof or filthy driveway signals neglect—whether or not it reflects reality. This impacts both buyer perception and property valuation, particularly important in competitive Wigan property market.</p>
                </div>
                <div className="bg-accent/10 rounded-lg p-4 border-l-4 border-accent">
                  <h4 className="font-bold text-foreground mb-1">Health and Safety</h4>
                  <p className="text-muted-foreground">Moss on driveways, patios, and paths creates slip hazards, especially in wet weather—a significant risk during Wigan's rainy seasons. Debris-choked gutters can become harbouring grounds for pests and cause water damage. Professional cleaning eliminates these risks.</p>
                </div>
              </div>
              <div className="bg-gradient-to-r from-blue-50 to-blue-100 dark:from-blue-950/30 dark:to-blue-950/40 rounded-lg p-6 border-l-4 border-blue-500 shadow-sm">
                <h4 className="font-bold text-foreground mb-3 text-lg">🛡️ Protect Your Property Now</h4>
                <p className="text-muted-foreground mb-4">Don't wait until algae and moss damage your property. Contact us for a free assessment and quote.</p>
                <Button size="lg" className="w-full sm:w-auto bg-blue-600 hover:bg-blue-700 text-white" asChild><a href="tel:+447845463877"><Phone className="h-5 w-5 mr-2" />Book Your Free Assessment Today</a></Button>
              </div>
            </section>

            {/* Our Process */}
            <section className="mb-12">
              <h2 className="text-3xl font-bold text-foreground mb-6">Our Exterior Cleaning Process</h2>
              <div className="space-y-4">
                {[
                  { step: '1. Initial Inspection', desc: 'We assess the property, identify surface types, evaluate condition, and look for any existing damage. This tells us exactly what we\'re dealing with and which cleaning methods are appropriate.' },
                  { step: '2. Method Selection', desc: 'Based on surfaces, condition, and your priorities, we recommend soft washing, pressure washing, or a combination. We explain our reasoning so you understand why each surface is being treated a particular way.' },
                  { step: '3. Safe Application', desc: 'Our team uses modern, well-maintained equipment and follows best practices for water usage, run-off management, and safety. We protect plants, windows, and adjacent areas as needed.' },
                  { step: '4. Final Rinse & Quality Check', desc: 'We rinse thoroughly, inspect for missed areas, and ensure everything meets our standards before we finish. We\'ll walk you through the results and explain any follow-up care.' }
                ].map((item, idx) => (
                  <div key={idx} className="flex gap-4 md:gap-6">
                    <div className="flex-shrink-0 w-12 h-12 md:w-14 md:h-14 bg-gradient-to-br from-blue-500 to-blue-600 text-white rounded-full flex items-center justify-center font-bold text-lg shadow-md flex-none">
                      {item.step.charAt(0)}
                    </div>
                    <div className="flex-grow bg-gradient-to-r from-blue-50 to-slate-50 dark:from-blue-950/30 dark:to-slate-950/30 rounded-lg p-4 border border-blue-100 dark:border-blue-900">
                      <h4 className="font-bold text-foreground mb-2 text-sm md:text-base">{item.step}</h4>
                      <p className="text-muted-foreground text-sm">{item.desc}</p>
                    </div>
                  </div>
                ))}
              </div>
            </section>

            {/* Soft Washing vs Pressure Washing */}
            <section className="mb-12">
              <h2 className="text-3xl font-bold text-foreground mb-6">Soft Washing vs Pressure Washing – Which Is Right?</h2>
              <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
                <div className="bg-gradient-to-br from-blue-50 to-slate-50 dark:from-blue-950/30 dark:to-slate-950/30 rounded-lg p-6 border border-blue-100 dark:border-blue-900 hover:border-blue-400 dark:hover:border-blue-600 transition-colors shadow-sm">
                  <h3 className="text-xl font-bold text-foreground mb-4">💪 Pressure Washing</h3>
                  <ul className="space-y-3">
                    <li><strong>Best for:</strong> Concrete driveways, industrial surfaces, stone patios</li>
                    <li><strong>Advantage:</strong> Very effective for stubborn, ingrained dirt and stains</li>
                    <li><strong>Disadvantage:</strong> Can damage delicate surfaces, disrupt mortar, strip paint</li>
                    <li><strong>Mechanism:</strong> Uses high pressure (2000–4000 PSI) to physically remove contaminants</li>
                  </ul>
                </div>
                <div className="bg-gradient-to-br from-blue-50 to-slate-50 dark:from-blue-950/30 dark:to-slate-950/30 rounded-lg p-6 border border-blue-100 dark:border-blue-900 hover:border-blue-400 dark:hover:border-blue-600 transition-colors shadow-sm">
                  <h3 className="text-xl font-bold text-foreground mb-4">🫧 Soft Washing</h3>
                  <ul className="space-y-3">
                    <li><strong>Best for:</strong> Roofs, render, masonry, timber, delicate finishes</li>
                    <li><strong>Advantage:</strong> Kills growth at root, longer-lasting results, ecosystem-friendly</li>
                    <li><strong>Disadvantage:</strong> Slightly longer drying time</li>
                    <li><strong>Mechanism:</strong> Low pressure (under 500 PSI) with biodegradable solutions</li>
                  </ul>
                </div>
              </div>
              <p className="text-muted-foreground mt-6 bg-blue-100/30 dark:bg-blue-950/20 rounded-lg p-4 border-l-4 border-blue-500">Our approach: We assess every surface individually. Modern concrete driveways respond well to pressure washing. Period rendered properties need soft washing. Algae-covered roofs definitely need soft washing. Your gutters might combine both for efficiency.</p>
            </section>

            {/* Residential Cleaning */}
            <section className="mb-12">
              <h2 className="text-3xl font-bold text-foreground mb-4">Residential Exterior Cleaning in Wigan</h2>
              <p className="text-muted-foreground mb-6">Whether you live in a Victorian terrace, a modern suburban home, or a period cottage, your property's exterior is constantly exposed to the elements and organic growth. Our residential exterior cleaning service is tailored to your home's specific material type, age, and condition.</p>
              <div className="bg-secondary/50 rounded-lg p-6 border border-secondary mb-8">
                <p className="font-bold text-foreground mb-3">Common residential services we provide:</p>
                <ul className="space-y-2 text-muted-foreground">
                  <li className="flex gap-2"><CheckCircle className="h-5 w-5 text-accent flex-shrink-0" /> <span><strong>Driveway cleaning:</strong> Restoring concrete, block paving, or tarmac to pristine condition</span></li>
                  <li className="flex gap-2"><CheckCircle className="h-5 w-5 text-accent flex-shrink-0" /> <span><strong>Roof and gutter cleaning:</strong> Protecting your home's most vulnerable systems</span></li>
                  <li className="flex gap-2"><CheckCircle className="h-5 w-5 text-accent flex-shrink-0" /> <span><strong>Patio and decking cleaning:</strong> Creating outdoor spaces you actually want to use</span></li>
                  <li className="flex gap-2"><CheckCircle className="h-5 w-5 text-accent flex-shrink-0" /> <span><strong>Render and brick cleaning:</strong> Restoring the character of your home's facade</span></li>
                  <li className="flex gap-2"><CheckCircle className="h-5 w-5 text-accent flex-shrink-0" /> <span><strong>Fascia and soffit cleaning:</strong> Often neglected but important for water management</span></li>
                  <li className="flex gap-2"><CheckCircle className="h-5 w-5 text-accent flex-shrink-0" /> <span><strong>Garden wall cleaning:</strong> Rendering those boundary walls and feature walls fresh and attractive</span></li>
                </ul>
              </div>
              <p className="text-muted-foreground mb-8">Residential properties deserve a personal touch. We understand that your home is your investment and your sanctuary. We treat it accordingly, explaining every step and delivering results you're genuinely proud of.</p>
              
              <div className="bg-blue-50 dark:bg-blue-950/20 rounded-lg p-6 border border-blue-200 dark:border-blue-900 mt-6">
                <h3 className="font-bold text-foreground mb-3">🏠 Transform Your Wigan Home's Exterior</h3>
                <p className="text-muted-foreground mb-4">See what professional exterior cleaning can do for your residential property. Limited-time offer: mention this page for a free pressure wash inspection.</p>
                <Button size="lg" className="w-full sm:w-auto" asChild><a href="tel:+447845463877"><Phone className="h-5 w-5 mr-2" />Book Residential Cleaning Now</a></Button>
              </div>
            </section>

            {/* Commercial Cleaning */}
            <section className="mb-12">
              <h2 className="text-3xl font-bold text-foreground mb-4">Commercial Exterior Cleaning in Wigan</h2>
              <p className="text-muted-foreground mb-6">Commercial properties face different challenges: higher visibility, greater foot traffic, compliance standards, and the need for professional presentation. A clean, well-maintained commercial exterior directly impacts customer perception and business success.</p>
              <div className="bg-gradient-to-br from-blue-50 to-slate-50 dark:from-blue-950/30 dark:to-slate-950/30 rounded-lg p-6 border border-blue-100 dark:border-blue-900 mb-8">
                <p className="font-bold text-foreground mb-3">Commercial exterior cleaning covers:</p>
                <ul className="space-y-2 text-muted-foreground">
                  <li className="flex gap-2"><CheckCircle className="h-5 w-5 text-blue-600 dark:text-blue-400 flex-shrink-0" /> <span><strong>Office buildings and corporate headquarters:</strong> Regular cleaning ensures a professional image that impresses clients and partners</span></li>
                  <li className="flex gap-2"><CheckCircle className="h-5 w-5 text-blue-600 dark:text-blue-400 flex-shrink-0" /> <span><strong>Retail units and shops:</strong> Clean shopfronts attract customers; dirty ones repel them and hurt your bottom line</span></li>
                  <li className="flex gap-2"><CheckCircle className="h-5 w-5 text-blue-600 dark:text-blue-400 flex-shrink-0" /> <span><strong>Industrial units and warehouses:</strong> Removing grease, grime, and weathering from large surfaces efficiently</span></li>
                  <li className="flex gap-2"><CheckCircle className="h-5 w-5 text-blue-600 dark:text-blue-400 flex-shrink-0" /> <span><strong>Landlord properties:</strong> Maintaining portfolios of multiple properties reliably with scheduled service</span></li>
                  <li className="flex gap-2"><CheckCircle className="h-5 w-5 text-blue-600 dark:text-blue-400 flex-shrink-0" /> <span><strong>Car parks and forecourts:</strong> Creating safe, clean environments that project professionalism and reduce liability</span></li>
                </ul>
              </div>
              <p className="text-muted-foreground mb-8">Commercial properties often benefit from scheduled cleaning contracts. Regular maintenance is less disruptive than large-scale reactive cleaning and maintains consistent, professional appearance year-round.</p>

              <div className="bg-blue-50 dark:bg-blue-950/20 rounded-lg p-6 border border-blue-200 dark:border-blue-900 mt-8">
                <h3 className="font-bold text-foreground mb-3">💼 Boost Your Business Image</h3>
                <p className="text-muted-foreground mb-4">Professional commercial exterior cleaning increases customer confidence and improves property perception. Ask us about our bespoke maintenance contracts for businesses.</p>
                <Button size="lg" className="w-full sm:w-auto" asChild><a href="tel:+447845463877"><Phone className="h-5 w-5 mr-2" />Request Commercial Cleaning Quote</a></Button>
              </div>
            </section>

            {/* Areas We Cover */}
            <section className="mb-12">
              <h2 className="text-3xl font-bold text-foreground mb-4">Areas We Cover Around Wigan</h2>
              <p className="text-muted-foreground mb-6">We provide professional exterior cleaning across Wigan and the surrounding region, including:</p>
              <p className="text-muted-foreground mb-6"><strong>Central Wigan, Standish, Ashton-in-Makerfield, Ince-in-Makerfield, Hindley, Hindley Green, Orrell, Upholland, Aspull, Haigh, Pemberton, Skelmersdale,</strong> and other areas within travelling distance.</p>
              
              {/* Google Map Embed */}
              <div className="mb-8 rounded-lg overflow-hidden border border-secondary shadow-md aspect-video w-full max-w-2xl">
                <iframe 
                  width="100%" 
                  height="100%"
                  style={{ border: 0 }}
                  src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d75038.58657181373!2d-2.628784!3d53.54639999999999!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x487b1b1b8b8b8b8d%3A0x8b8b8b8b8b8b8b8b!2sWigan!5e0!3m2!1sen!2suk!4v1234567890123"
                  title="Map of Wigan and surrounding areas we service"
                  allowFullScreen=""
                  loading="lazy"
                  referrerPolicy="no-referrer-when-downgrade"
                ></iframe>
              </div>

              <p className="text-muted-foreground">We're a local business—Wigan is our home, and we know the area, its properties, its climate challenges, and its communities. Whether you're in the town centre or the surrounding villages, we're familiar with the local property types and the specific exterior challenges they face.</p>
              
              <div className="mt-6 bg-gradient-to-r from-blue-100 to-blue-50 dark:from-blue-900/40 dark:to-blue-950/30 rounded-lg p-6 border border-blue-300 dark:border-blue-700 shadow-sm">
                <p className="text-foreground font-bold mb-3 text-lg">📞 Ready to schedule cleaning in your area?</p>
                <Button size="lg" className="w-full sm:w-auto bg-blue-600 hover:bg-blue-700 text-white" asChild><a href="tel:+447845463877"><Phone className="h-5 w-5 mr-2" />Call Our Wigan Team Today</a></Button>
              </div>
            </section>

            {/* Why Choose Us */}
            <section className="mb-12">
              <h2 className="text-3xl font-bold text-foreground mb-6">Why Choose Us for Exterior Cleaning in Wigan</h2>
              <div className="space-y-4 mb-8">
                {[
                  { title: 'Deep Local Knowledge', desc: 'We understand Wigan\'s climate and how it affects properties. We know the difference between a Victorian terrace and a modern family home, and we adjust our approach accordingly. Our experience with local properties is unmatched.' },
                  { title: 'Professional, Safe Approach', desc: 'We\'re fully insured, use proper health and safety procedures, and maintain modern equipment. Your property and our team are always protected. Every job meets industry standards and local regulations.' },
                  { title: 'Eco-Conscious Methods', desc: 'Where possible, we use biodegradable detergents and soft washing techniques that protect the environment while delivering results. We care about Wigan\'s future as much as your property\'s present.' },
                  { title: 'Transparent Communication', desc: 'We assess your property, recommend the methods that make sense, and explain why. No upselling, no pressure. You\'ll understand what we\'re doing and why every step of the way.' },
                  { title: 'Consistent Quality', desc: 'We don\'t rush jobs. We take pride in finishing to a standard we\'d be happy with on our own home. Your satisfaction is our success measure.' },
                  { title: 'Competitive, Fair Pricing', desc: 'Quality work at rates that reflect the value we provide, not inflated fees. We provide quotes before work begins—no surprises. Pay only for the work you need.' }
                ].map((item, idx) => (
                  <div key={idx} className="bg-gradient-to-r from-blue-50 to-slate-50 dark:from-blue-950/20 dark:to-slate-950/20 rounded-lg p-4 border border-blue-200 dark:border-blue-800 hover:border-blue-400 dark:hover:border-blue-600 transition-colors shadow-sm">
                    <h4 className="font-bold text-foreground mb-1">{item.title}</h4>
                    <p className="text-muted-foreground text-sm">{item.desc}</p>
                  </div>
                ))}
              </div>
              <div className="bg-gradient-to-r from-blue-600 to-blue-500 dark:from-blue-700 dark:to-blue-600 rounded-lg p-6 border border-blue-400 text-white text-center shadow-md">
                <h3 className="font-bold mb-3 text-xl">⭐ Join Hundreds of Satisfied Wigan Customers</h3>
                <p className="mb-4 opacity-95">See why local properties trust us for their exterior cleaning needs. Free quote, professional service, guaranteed results.</p>
                <Button size="lg" className="w-full sm:w-auto bg-white text-blue-600 hover:bg-blue-50 font-bold" asChild><a href="tel:+447845463877"><Phone className="h-5 w-5 mr-2" />Get Started Today</a></Button>
              </div>
            </section>

            {/* FAQs */}
            <section className="mb-12">
              <h2 className="text-3xl font-bold text-foreground mb-6">Frequently Asked Questions</h2>
              <div className="space-y-4">
                {faqs.map((faq, idx) => (
                  <details key={idx} className="group bg-secondary/50 rounded-lg border border-secondary">
                    <summary className="flex cursor-pointer justify-between items-center p-4 font-bold text-foreground hover:bg-secondary transition-colors">
                      {faq.q}
                      <span className="transition-transform group-open:rotate-180">▼</span>
                    </summary>
                    <div className="px-4 pb-4 text-muted-foreground border-t border-secondary pt-4">
                      {faq.a}
                    </div>
                  </details>
                ))}
              </div>
            </section>

            {/* CTA Section */}
            <section id="contact" className="bg-gradient-to-br from-blue-600 via-blue-500 to-blue-600 dark:from-blue-800 dark:via-blue-700 dark:to-blue-800 rounded-lg p-8 md:p-12 border border-blue-400 dark:border-blue-600 text-white shadow-lg">
              <div className="text-center">
                <h2 className="text-3xl md:text-4xl font-bold mb-2">Ready to Restore Your Property's Exterior?</h2>
                <h3 className="text-xl md:text-2xl opacity-95 mb-6">Get a Free Exterior Cleaning Quote in Wigan</h3>
                <p className="mb-4 opacity-90 max-w-2xl mx-auto text-base md:text-lg">Don't let dirt, moss, and algae damage your property. Contact us for a free, no-obligation quote.</p>
                <p className="mb-8 opacity-90 max-w-2xl mx-auto text-base md:text-lg">We'll inspect your property, recommend the best cleaning approach for your specific surfaces and needs, and provide a clear, competitive price. No hidden costs, no pressure—just professional advice and a fair quote from local Wigan experts.</p>
                <div className="flex flex-col sm:flex-row gap-3 justify-center items-center">
                  <Button size="lg" className="w-full sm:w-auto bg-white text-blue-600 hover:bg-blue-50 font-bold text-base" asChild><a href="tel:+447845463877"><Phone className="h-5 w-5 mr-2" />Call Now: 07845 463877</a></Button>
                  <Button size="lg" className="w-full sm:w-auto bg-blue-100 text-blue-900 hover:bg-blue-200 font-bold text-base" asChild><a href="mailto:info@rrmexternalcleaningspecialist.co.uk">Email for Free Quote</a></Button>
                </div>
                <p className="text-xs opacity-75 mt-8">✓ Available 7 days a week  •  ✓ Fast response times  •  ✓ Fully insured service  •  ✓ 100% satisfaction guaranteed</p>
              </div>
            </section>
          </div>
        </div>
      </main>
    </Layout>
  );
}
