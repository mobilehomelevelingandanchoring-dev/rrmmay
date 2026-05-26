'use client';

import { useParams } from 'next/navigation';
import Link from 'next/link';
import { useEffect } from 'react';
import { Layout } from '@/components/layout/Layout';
import { Button } from '@/components/ui/button';
import { ContactInfo } from '@/components/ContactInfo';
import { MapPin, CheckCircle, ArrowRight, Phone } from 'lucide-react';
import { generateAreaSchema, generateBreadcrumbSchema } from '@/lib/schemas';

const areasData: Record<string, {
  name: string;
  description: string;
  intro: string;
  climate: string;
  services: string[];
  landmarks: string;
}> = {
  'newton-le-willows': {
    name: 'Newton-le-Willows',
    description: 'Our home base for professional exterior cleaning services',
    intro: 'As a Newton-le-Willows based business, we\'re proud to serve our local community with professional exterior cleaning services. We understand the specific needs of properties in this area—from Victorian terraces in the town centre to modern estates in the surrounding neighbourhoods.',
    climate: 'Newton-le-Willows experiences typical North West England weather, with regular rainfall and humidity that encourages moss and algae growth on outdoor surfaces. Properties here benefit from regular exterior cleaning to combat these conditions and maintain their appearance.',
    services: ['Pressure Washing', 'Driveway Cleaning', 'Roof Cleaning', 'Gutter Cleaning', 'Window Cleaning', 'Render Cleaning'],
    landmarks: 'We serve all areas of Newton-le-Willows, from the town centre near the train station to residential areas around the parks and local schools. Our local knowledge means quick response times and convenient scheduling.',
  },
  'golborne': {
    name: 'Golborne',
    description: 'Regular exterior cleaning services for Golborne residents',
    intro: 'Golborne is just a short distance from our base, making it one of our primary service areas. We regularly work with homeowners and businesses throughout Golborne, delivering the same professional standards we\'re known for.',
    climate: 'Like neighbouring areas, Golborne properties face challenges from North West weather conditions. Shaded areas and properties near green spaces tend to accumulate more organic growth, making professional cleaning an important part of property maintenance.',
    services: ['Pressure Washing', 'Driveway Cleaning', 'Roof Cleaning', 'Gutter Cleaning', 'Window Cleaning', 'Render Cleaning'],
    landmarks: 'We cover all of Golborne, including residential streets near the High Street, newer developments, and surrounding rural properties. Our local presence means we can often accommodate short-notice requests.',
  },
  'lowton': {
    name: 'Lowton',
    description: 'Professional pressure washing and driveway cleaning for Lowton residents',
    intro: 'Lowton is a close neighbouring area and key service location for R.R.M Exterior Cleaning. We\'ve been trusted by Lowton homeowners and businesses for over a decade, delivering professional pressure washing and exterior cleaning tailored to local properties. Whether it\'s a Victorian terrace, modern detached home, or commercial premises, our experienced team delivers results.',
    climate: 'Lowton properties experience typical North West England weather patterns, with frequent rainfall and humidity that encourages moss and algae growth on driveways, patios, roofs, and rendered walls. Properties near woodland and green spaces in the Lowton area are especially prone to organic growth, making regular professional cleaning essential for maintaining appearance and preventing long-term surface damage.',
    services: ['Pressure Washing', 'Driveway Cleaning', 'Roof Cleaning', 'Gutter Cleaning', 'Window Cleaning', 'Render Cleaning'],
    landmarks: 'We serve all areas of Lowton, including Lowton East, Lowton West, and surrounding residential areas. Our proximity means we typically offer same-week scheduling and competitive pricing for local customers.',
  },
  'haydock': {
    name: 'Haydock',
    description: 'Expert pressure washing and exterior cleaning services in Haydock',
    intro: 'Haydock is a thriving business and residential area in the Wigan borough, and a key service location for R.R.M Exterior Cleaning. We work with homes and businesses throughout Haydock, from town centre properties to modern residential developments. Our team brings professional expertise and local knowledge to every cleaning project.',
    climate: 'Haydock properties are exposed to the same North West weather challenges as surrounding areas: regular rainfall, high humidity, and moist conditions that accelerate moss, algae, and lichen growth. Industrial and commercial areas around Haydock can also accumulate additional grime and pollution on exterior surfaces, making periodic professional cleaning important for both residential aesthetics and commercial property maintenance.',
    services: ['Pressure Washing', 'Driveway Cleaning', 'Roof Cleaning', 'Gutter Cleaning', 'Window Cleaning', 'Render Cleaning'],
    landmarks: 'We cover all parts of Haydock, from the busy commercial areas near the rail station to residential neighborhoods and surrounding developments. Our local expertise means efficient scheduling and quality service for Haydock customers.',
  },
  'earlestown': {
    name: 'Earlestown',
    description: 'Professional pressure washing and driveway cleaning in Earlestown',
    intro: 'Earlestown is just minutes from our Newton-le-Willows base, making it one of our most convenient service areas. We\'ve worked with dozens of Earlestown homeowners and businesses, building a reputation for quick response times and meticulous work. Whether you need driveway cleaning before selling, or regular maintenance for your property, we\'re your local choice.',
    climate: 'Like all North West England properties, Earlestown homes and businesses face regular exposure to rainfall and humidity that encourages moss, algae, and lichen growth. Properties near the canal and surrounding green spaces often accumulate organic growth more quickly, making professional cleaning an important part of maintenance schedules.',
    services: ['Pressure Washing', 'Driveway Cleaning', 'Roof Cleaning', 'Gutter Cleaning', 'Window Cleaning', 'Render Cleaning'],
    landmarks: 'We cover all areas of Earlestown, from the town centre near the railway station to residential estates and surrounding neighborhoods. Our proximity to the area means we can often schedule the same week and offer competitive local pricing.',
  },
  'burtonwood': {
    name: 'Burtonwood',
    description: 'Expert exterior cleaning and pressure washing services for Burtonwood',
    intro: 'Burtonwood is in our primary service radius, and we\'re proud to serve this community with professional exterior cleaning. From family homes to period properties, we tailor our approach to suit each customer\'s needs. Our experience with Burtonwood properties means we understand local challenges and deliver solutions that work.',
    climate: 'Burtonwood properties experience North West England weather patterns, with frequent rain and moisture that promotes moss, algae, and grime buildup on exterior surfaces. The semi-rural nature of Burtonwood means many properties are surrounded by greenery, which can accelerate organic growth—making professional cleaning particularly valuable for maintaining property appearance.',
    services: ['Pressure Washing', 'Driveway Cleaning', 'Roof Cleaning', 'Gutter Cleaning', 'Window Cleaning', 'Render Cleaning'],
    landmarks: 'We serve all of Burtonwood, including properties near the motorway services, town centre area, and surrounding residential estates. Our local knowledge and convenient location mean flexibility and value for Burtonwood customers.',
  },
  'ashton-in-makerfield': {
    name: 'Ashton-in-Makerfield',
    description: 'Professional pressure washing and exterior cleaning in Ashton-in-Makerfield',
    intro: 'Ashton-in-Makerfield is within our regular service area, and we work with residential and commercial clients throughout the town. We understand the needs of Ashton properties—from traditional working-class homes to newer residential developments—and deliver professional cleaning that respects your property.',
    climate: 'Ashton-in-Makerfield properties, like others in the North West, are regularly exposed to rain and high humidity that accelerate the growth of moss, algae, and lichen on roofs, driveways, and external walls. The industrial heritage of the area means some properties may also benefit from periodic cleaning to remove accumulated grime and pollution from exterior surfaces.',
    services: ['Pressure Washing', 'Driveway Cleaning', 'Roof Cleaning', 'Gutter Cleaning', 'Window Cleaning', 'Render Cleaning'],
    landmarks: 'We cover all areas of Ashton-in-Makerfield, from the town centre to residential suburbs and surrounding neighborhoods. Our local presence and professional expertise mean reliable service and fair pricing for Ashton customers.',
  },
  'huyton': {
    name: 'Huyton',
    description: 'Professional exterior cleaning services in Huyton',
    intro: 'Our exterior cleaning services extend to Huyton and the surrounding areas of Knowsley. Whether you\'re in the town centre, near the retail parks, or in residential areas, we deliver professional results you can rely on.',
    climate: 'Huyton properties experience the same North West climate challenges—regular rainfall leading to moss, algae, and grime buildup on external surfaces. Our cleaning services help maintain property appearance and prevent long-term surface damage.',
    services: ['Pressure Washing', 'Driveway Cleaning', 'Roof Cleaning', 'Gutter Cleaning', 'Window Cleaning', 'Render Cleaning'],
    landmarks: 'We provide services throughout Huyton, from the Huyton town centre area to residential estates and surrounding neighbourhoods. Our experienced team knows the area well.',
  },
  'warrington': {
    name: 'Warrington',
    description: 'Comprehensive exterior cleaning across Warrington',
    intro: 'Warrington is a key service area for R.R.M External Cleaning Specialist. We work with residential and commercial clients across the town, from the historic centre to modern business parks and housing developments.',
    climate: 'Warrington\'s mix of older and newer properties presents various exterior cleaning needs. Victorian and Edwardian homes often require careful cleaning techniques, while modern renders and surfaces have their own specific requirements.',
    services: ['Pressure Washing', 'Driveway Cleaning', 'Roof Cleaning', 'Gutter Cleaning', 'Window Cleaning', 'Render Cleaning'],
    landmarks: 'Our Warrington coverage includes the town centre, Stockton Heath, Grappenhall, Great Sankey, and surrounding areas. We serve both residential properties and commercial premises throughout the borough.',
  },
  'lymm': {
    name: 'Lymm',
    description: 'Expert exterior cleaning services in Lymm village',
    intro: 'Lymm is known for its attractive properties and well-maintained village appearance. We\'re proud to help local residents keep their homes looking their best with our professional exterior cleaning services.',
    climate: 'Lymm\'s semi-rural setting, with its proximity to the canal and woodland areas, means properties here often experience significant organic growth on external surfaces. Regular professional cleaning helps maintain the high standards expected in this desirable area.',
    services: ['Pressure Washing', 'Driveway Cleaning', 'Roof Cleaning', 'Gutter Cleaning', 'Window Cleaning', 'Render Cleaning'],
    landmarks: 'We serve all of Lymm village and surrounding areas, including properties near Lymm Dam, the canal, and the various residential estates throughout this popular Cheshire village.',
  },
  'wigan': {
    name: 'Wigan',
    description: 'Professional exterior cleaning services for homes and businesses in Wigan',
    intro: 'Wigan is one of our key service areas, easily accessible from our Newton-le-Willows base. We regularly work with homeowners and commercial clients across the Wigan borough, from the town centre to outlying villages. Whether you have a traditional terraced property or a modern build, our experienced team delivers thorough, reliable exterior cleaning tailored to your property.',
    climate: 'Wigan\'s North West location means properties are regularly exposed to rain, humidity, and damp conditions that encourage moss, algae, and lichen growth on roofs, driveways, and rendered walls. Shaded areas and properties near Wigan\'s many green spaces are particularly prone to organic buildup, making professional exterior cleaning essential for maintaining kerb appeal and preventing long-term surface damage.',
    services: ['Pressure Washing', 'Driveway Cleaning', 'Roof Cleaning', 'Gutter Cleaning', 'Window Cleaning', 'Render Cleaning'],
    landmarks: 'We cover all areas of Wigan borough, including the town centre, Standish, Aspull, Hindley, Ince, Pemberton, Shevington, and surrounding villages. Our proximity to Wigan means fast response times and flexible scheduling for both one-off cleans and regular maintenance.',
  },
  'greater-manchester': {
    name: 'Greater Manchester',
    description: 'Exterior cleaning services across the Greater Manchester region',
    intro: 'While based in Newton-le-Willows, our services extend throughout the Greater Manchester region. We work with clients across this diverse area, bringing consistent professional standards wherever we go.',
    climate: 'Greater Manchester\'s varied urban and suburban landscape presents many different exterior cleaning challenges. From city properties affected by pollution to suburban homes with extensive outdoor areas, we adapt our approach to each location.',
    services: ['Pressure Washing', 'Driveway Cleaning', 'Roof Cleaning', 'Gutter Cleaning', 'Window Cleaning', 'Render Cleaning'],
    landmarks: 'Our Greater Manchester coverage includes areas within reasonable travel distance of our Newton-le-Willows base. Contact us to confirm we cover your specific location—we\'re often able to accommodate areas not listed individually.',
  },
};

export default function AreaPage() {
  const { areaSlug } = useParams<{ areaSlug: string }>();
  const area = areaSlug ? areasData[areaSlug] : null;

  // Inject schema markup
  useEffect(() => {
    if (area && areaSlug) {
      // Remove existing schemas
      const existingSchemas = document.querySelectorAll('script[data-area-schema], script[data-breadcrumb-schema]');
      existingSchemas.forEach(el => el.remove());

      // Add area schema
      const areaScript = document.createElement('script');
      areaScript.type = 'application/ld+json';
      areaScript.setAttribute('data-area-schema', 'true');
      areaScript.textContent = JSON.stringify(generateAreaSchema(area.name, areaSlug));
      document.head.appendChild(areaScript);

      // Add breadcrumb schema
      const breadcrumbScript = document.createElement('script');
      breadcrumbScript.type = 'application/ld+json';
      breadcrumbScript.setAttribute('data-breadcrumb-schema', 'true');
      breadcrumbScript.textContent = JSON.stringify(
        generateBreadcrumbSchema([
          { name: 'Home', url: 'https://rrmexternalcleaningspecialist.co.uk' },
          { name: 'Service Areas', url: 'https://rrmexternalcleaningspecialist.co.uk/areas' },
          { name: area.name, url: `https://rrmexternalcleaningspecialist.co.uk/areas/${areaSlug}` },
        ])
      );
      document.head.appendChild(breadcrumbScript);

      return () => {
        areaScript.remove();
        breadcrumbScript.remove();
      };
    }
  }, [area, areaSlug]);

  if (!area) {
    return (
      <Layout>
        <div className="container-custom section-padding text-center">
          <h1 className="font-display text-3xl font-bold text-foreground mb-4">Area Not Found</h1>
          <p className="text-muted-foreground mb-6">The area you're looking for isn't in our service directory.</p>
          <Button asChild>
            <Link href="/areas">View All Areas</Link>
          </Button>
        </div>
      </Layout>
    );
  }

  return (
    <Layout>
      {/* Hero */}
      <section className="hero-bg py-16 md:py-24">
        <div className="container-custom">
          <div className="max-w-3xl">
            {/* Breadcrumbs */}
            <div className="flex items-center gap-2 text-sm text-accent mb-6 flex-wrap">
              <Link href="/" className="hover:text-accent-foreground transition-colors">Home</Link>
              <span className="text-accent/60">/</span>
              <Link href="/areas" className="hover:text-accent-foreground transition-colors">Service Areas</Link>
              <span className="text-accent/60">/</span>
              <span className="text-primary-foreground font-medium">{area.name}</span>
            </div>
            
            <div className="flex items-center gap-2 text-accent mb-4">
              <MapPin className="h-5 w-5" />
              <span className="font-medium">Service Area</span>
            </div>
            <h1 className="font-display text-4xl md:text-5xl font-bold text-primary-foreground mb-6">
              Exterior Cleaning in {area.name}
            </h1>
            <p className="text-lg md:text-xl text-primary-foreground/85 mb-8 leading-relaxed">
              {area.description}. Professional pressure washing, driveway cleaning, roof cleaning, 
              and more from R.R.M External Cleaning Specialist.
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

      {/* About Area */}
      <section className="section-padding bg-background">
        <div className="container-custom">
          <div className="grid gap-12 lg:grid-cols-2 lg:gap-16">
            <div>
              <h2 className="font-display text-3xl font-bold text-foreground mb-6">
                Exterior Cleaning Services in {area.name}
              </h2>
              <p className="text-muted-foreground leading-relaxed mb-6">
                {area.intro}
              </p>
              <p className="text-muted-foreground leading-relaxed">
                {area.climate}
              </p>
            </div>
            <div>
              <h3 className="font-display text-xl font-semibold text-foreground mb-4">
                Services Available in {area.name}
              </h3>
              <div className="space-y-3 mb-6">
                {area.services.map((service) => (
                  <div key={service} className="flex items-center gap-3">
                    <CheckCircle className="h-5 w-5 text-success shrink-0" />
                    <span className="text-foreground">{service}</span>
                  </div>
                ))}
              </div>
              <p className="text-muted-foreground text-sm leading-relaxed">
                {area.landmarks}
              </p>
            </div>
          </div>
        </div>
      </section>

      {/* Service Links */}
      <section className="section-padding bg-secondary/50">
        <div className="container-custom">
          <h2 className="font-display text-2xl font-bold text-foreground mb-8 text-center">
            Explore Our Services in {area.name}
          </h2>
          <div className="grid gap-4 sm:grid-cols-2 lg:grid-cols-3">
            <Link href="/services/pressure-washing" className="group p-5 rounded-xl bg-card border border-border/50 hover:border-accent/30 hover:shadow-md transition-all">
              <h3 className="font-display font-semibold text-foreground group-hover:text-accent mb-2">
                Pressure Washing in {area.name}
              </h3>
              <p className="text-sm text-muted-foreground">Professional high-pressure cleaning for driveways, patios, and paths.</p>
            </Link>
            <Link href="/services/driveway-cleaning" className="group p-5 rounded-xl bg-card border border-border/50 hover:border-accent/30 hover:shadow-md transition-all">
              <h3 className="font-display font-semibold text-foreground group-hover:text-accent mb-2">
                Driveway Cleaning in {area.name}
              </h3>
              <p className="text-sm text-muted-foreground">Restore your driveway with complete cleaning and re-sanding.</p>
            </Link>
            <Link href="/services/roof-cleaning" className="group p-5 rounded-xl bg-card border border-border/50 hover:border-accent/30 hover:shadow-md transition-all">
              <h3 className="font-display font-semibold text-foreground group-hover:text-accent mb-2">
                Roof Cleaning in {area.name}
              </h3>
              <p className="text-sm text-muted-foreground">Safe moss and algae removal using soft wash techniques.</p>
            </Link>
            <Link href="/services/gutter-cleaning" className="group p-5 rounded-xl bg-card border border-border/50 hover:border-accent/30 hover:shadow-md transition-all">
              <h3 className="font-display font-semibold text-foreground group-hover:text-accent mb-2">
                Gutter Cleaning in {area.name}
              </h3>
              <p className="text-sm text-muted-foreground">Prevent water damage with professional gutter clearing.</p>
            </Link>
            <Link href="/services/window-cleaning" className="group p-5 rounded-xl bg-card border border-border/50 hover:border-accent/30 hover:shadow-md transition-all">
              <h3 className="font-display font-semibold text-foreground group-hover:text-accent mb-2">
                Window Cleaning in {area.name}
              </h3>
              <p className="text-sm text-muted-foreground">Crystal-clear results with pure water technology.</p>
            </Link>
            <Link href="/services/render-cleaning" className="group p-5 rounded-xl bg-card border border-border/50 hover:border-accent/30 hover:shadow-md transition-all">
              <h3 className="font-display font-semibold text-foreground group-hover:text-accent mb-2">
                Render Cleaning in {area.name}
              </h3>
              <p className="text-sm text-muted-foreground">Specialist soft washing for rendered walls and facades.</p>
            </Link>
          </div>
        </div>
      </section>

      {/* CTA */}
      <section className="py-16 hero-bg">
        <div className="container-custom text-center">
          <h2 className="font-display text-3xl font-bold text-primary-foreground mb-4">
            Get a Free Quote in {area.name}
          </h2>
          <p className="text-primary-foreground/85 mb-8 max-w-xl mx-auto">
            Contact us today for a no-obligation quote. We provide professional exterior cleaning 
            services throughout {area.name} and surrounding areas.
          </p>
          <Button variant="hero" size="lg" asChild>
            <Link href="/contact">
              Request Your Quote
              <ArrowRight className="ml-2 h-4 w-4" />
            </Link>
          </Button>
        </div>
      </section>

      {/* Contact Information */}
      <section className="section-padding bg-secondary/10">
        <div className="container-custom">
          <h2 className="font-display text-3xl md:text-4xl font-bold text-foreground text-center mb-2">
            Serving the {area.name} Area
          </h2>
          <p className="text-center text-muted-foreground mb-12 max-w-2xl mx-auto">
            Get professional exterior cleaning services for your {area.name} property.
          </p>
          <ContactInfo variant="default" />
        </div>
      </section>
    </Layout>
  );
}
