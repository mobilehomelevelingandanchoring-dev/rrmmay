'use client';
import { useEffect } from 'react';

import Link from 'next/link';
import { ChevronRight, Phone, MapPin, Clock, CheckCircle, AlertCircle, Shield, Award, Users, Droplets, Leaf, Home } from 'lucide-react';
import { Button } from '@/components/ui/button';
import { Layout } from '@/components/layout/Layout';

export function RoofGolborne() {
  useEffect(() => {
    // Enhanced Schema.org markup with comprehensive semantic entities
    const schema = {
      '@context': 'https://schema.org',
      '@graph': [
        {
          '@type': 'LocalBusiness',
          '@id': 'https://rrmexternalcleaningspecialist.co.uk/#organization',
          name: 'R.R.M Exterior Cleaning Specialist',
          alternateName: 'RRM External Cleaning',
          url: 'https://rrmexternalcleaningspecialist.co.uk',
          logo: 'https://rrmexternalcleaningspecialist.co.uk/logo.png',
          image: 'https://rrmexternalcleaningspecialist.co.uk/images/roof-cleaning-golborne.jpg',
          description: 'Professional exterior cleaning specialists serving Golborne and surrounding areas. Expert roof cleaning, moss removal, soft washing, gutter cleaning, and pressure washing services.',
          priceRange: '££',
          telephone: '+447845463877',
          email: 'rrmexternalcleaning@gmail.com',
          address: {
            '@type': 'PostalAddress',
            streetAddress: '9 Noon Ct',
            addressLocality: 'Newton-le-Willows',
            addressRegion: 'Greater Manchester',
            postalCode: 'WA12 8QY',
            addressCountry: 'GB'
          },
          geo: {
            '@type': 'GeoCoordinates',
            latitude: '53.4669',
            longitude: '-2.5963'
          },
          areaServed: [
            {
              '@type': 'City',
              name: 'Golborne',
              containedIn: {
                '@type': 'AdministrativeArea',
                name: 'Greater Manchester'
              }
            },
            {
              '@type': 'City',
              name: 'Lowton'
            },
            {
              '@type': 'City',
              name: 'Leigh'
            },
            {
              '@type': 'City',
              name: 'Warrington'
            }
          ],
          hasOfferCatalog: {
            '@type': 'OfferCatalog',
            name: 'Exterior Cleaning Services',
            itemListElement: [
              {
                '@type': 'Offer',
                itemOffered: {
                  '@type': 'Service',
                  name: 'Roof Cleaning',
                  description: 'Professional roof cleaning and moss removal services'
                }
              },
              {
                '@type': 'Offer',
                itemOffered: {
                  '@type': 'Service',
                  name: 'Soft Washing',
                  description: 'Gentle low-pressure cleaning for delicate surfaces'
                }
              },
              {
                '@type': 'Offer',
                itemOffered: {
                  '@type': 'Service',
                  name: 'Gutter Cleaning',
                  description: 'Professional gutter and downpipe maintenance'
                }
              }
            ]
          },
          openingHoursSpecification: {
            '@type': 'OpeningHoursSpecification',
            dayOfWeek: ['Monday', 'Tuesday', 'Wednesday', 'Thursday', 'Friday', 'Saturday', 'Sunday'],
            opens: '00:00',
            closes: '23:59'
          },
          aggregateRating: {
            '@type': 'AggregateRating',
            ratingValue: '4.9',
            reviewCount: '127'
          }
        },
        {
          '@type': 'Service',
          '@id': 'https://rrmexternalcleaningspecialist.co.uk/services/roof-cleaning/golborne#service',
          serviceType: 'Roof Cleaning',
          name: 'Professional Roof Cleaning Services in Golborne',
          description: 'Expert roof cleaning, moss removal, algae treatment, and soft washing services for residential and commercial properties in Golborne. Protect your roof investment with professional maintenance.',
          provider: {
            '@id': 'https://rrmexternalcleaningspecialist.co.uk/#organization'
          },
          areaServed: {
            '@type': 'City',
            name: 'Golborne',
            containedIn: {
              '@type': 'AdministrativeArea',
              name: 'Greater Manchester'
            }
          },
          hasOfferCatalog: {
            '@type': 'OfferCatalog',
            name: 'Roof Cleaning Services',
            itemListElement: [
              {
                '@type': 'Offer',
                itemOffered: {
                  '@type': 'Service',
                  name: 'Moss Removal',
                  description: 'Professional moss removal from roof tiles and slates using soft washing techniques'
                }
              },
              {
                '@type': 'Offer',
                itemOffered: {
                  '@type': 'Service',
                  name: 'Algae Removal',
                  description: 'Treatment and removal of algae, lichen, and biological growth from roofing materials'
                }
              },
              {
                '@type': 'Offer',
                itemOffered: {
                  '@type': 'Service',
                  name: 'Roof Soft Washing',
                  description: 'Low-pressure soft washing with biodegradable solutions for safe roof cleaning'
                }
              },
              {
                '@type': 'Offer',
                itemOffered: {
                  '@type': 'Service',
                  name: 'Roof Inspection',
                  description: 'Professional roof inspection to identify damage, wear, and maintenance needs'
                }
              }
            ]
          }
        },
        {
          '@type': 'FAQPage',
          '@id': 'https://rrmexternalcleaningspecialist.co.uk/services/roof-cleaning/golborne#faq',
          mainEntity: [
            {
              '@type': 'Question',
              name: 'How much does roof cleaning cost in Golborne?',
              acceptedAnswer: {
                '@type': 'Answer',
                text: 'Roof cleaning costs in Golborne typically range from £300-£800 depending on roof size, pitch, contamination level, and complexity. Terraced houses: £300-£450; Semi-detached: £400-£600; Detached: £550-£800. We provide free, no-obligation quotations following an on-site inspection.'
              }
            },
            {
              '@type': 'Question',
              name: 'Is soft washing safe for all roof types?',
              acceptedAnswer: {
                '@type': 'Answer',
                text: 'Yes, soft washing is safe for all roof types including concrete tiles, clay tiles, natural slate, artificial slate, asphalt shingles, and metal roofing. The low-pressure application (100-200 PSI) combined with biodegradable cleaning solutions effectively removes contaminants without damaging roof materials.'
              }
            },
            {
              '@type': 'Question',
              name: 'How often should I have my roof cleaned in Golborne?',
              acceptedAnswer: {
                '@type': 'Answer',
                text: 'Most Golborne properties benefit from professional roof cleaning every 2-3 years. However, properties near trees, with north-facing slopes, or in sheltered locations may require annual cleaning due to accelerated moss and algae growth in the local climate.'
              }
            }
          ]
        },
        {
          '@type': 'BreadcrumbList',
          '@id': 'https://rrmexternalcleaningspecialist.co.uk/services/roof-cleaning/golborne#breadcrumb',
          itemListElement: [
            {
              '@type': 'ListItem',
              position: 1,
              name: 'Home',
              item: 'https://rrmexternalcleaningspecialist.co.uk'
            },
            {
              '@type': 'ListItem',
              position: 2,
              name: 'Roof Cleaning Services',
              item: 'https://rrmexternalcleaningspecialist.co.uk/services/roof-cleaning'
            },
            {
              '@type': 'ListItem',
              position: 3,
              name: 'Golborne',
              item: 'https://rrmexternalcleaningspecialist.co.uk/services/roof-cleaning/golborne'
            }
          ]
        },
        {
          '@type': 'WebPage',
          '@id': 'https://rrmexternalcleaningspecialist.co.uk/services/roof-cleaning/golborne#webpage',
          url: 'https://rrmexternalcleaningspecialist.co.uk/services/roof-cleaning/golborne',
          name: 'Professional Roof Cleaning Golborne | Moss & Algae Removal Experts',
          description: 'Expert roof cleaning services in Golborne. Professional moss removal, algae treatment, and soft washing for all roof types. Extend roof lifespan, prevent leaks. Free quotes: 07845 463877',
          inLanguage: 'en-GB',
          isPartOf: {
            '@id': 'https://rrmexternalcleaningspecialist.co.uk/#website'
          },
          breadcrumb: {
            '@id': 'https://rrmexternalcleaningspecialist.co.uk/services/roof-cleaning/golborne#breadcrumb'
          },
          about: {
            '@id': 'https://rrmexternalcleaningspecialist.co.uk/services/roof-cleaning/golborne#service'
          },
          primaryImageOfPage: {
            '@type': 'ImageObject',
            url: 'https://rrmexternalcleaningspecialist.co.uk/images/roof-cleaning-golborne-hero.jpg',
            width: 1200,
            height: 630
          },
          datePublished: '2024-01-15',
          dateModified: '2026-01-23'
        }
      ]
    };

    const script = document.createElement('script');
    script.type = 'application/ld+json';
    script.innerHTML = JSON.stringify(schema);
    document.head.appendChild(script);

    // Enhanced meta tags for semantic SEO
    document.title = 'Professional Roof Cleaning Golborne | Moss & Algae Removal Experts | RRM';

    const metaDescription = document.querySelector('meta[name="description"]');
    if (metaDescription) {
      metaDescription.setAttribute('content', 'Expert roof cleaning services in Golborne. Professional moss removal, algae treatment, and soft washing for all roof types. Extend roof lifespan, prevent leaks, protect your investment. Free quotes: 07845 463877');
    }

    // Add additional semantic meta tags
    const metaTags = [
      { name: 'keywords', content: 'roof cleaning Golborne, moss removal Golborne, algae removal, soft washing, roof maintenance, tile cleaning, slate cleaning, roof moss treatment, professional roof cleaning, Golborne roofer' },
      { property: 'og:title', content: 'Professional Roof Cleaning Golborne | Moss & Algae Removal' },
      { property: 'og:description', content: 'Expert roof cleaning, moss removal, and soft washing in Golborne. Protect your roof and extend its lifespan with professional maintenance.' },
      { property: 'og:type', content: 'website' },
      { property: 'og:url', content: 'https://rrmexternalcleaningspecialist.co.uk/services/roof-cleaning/golborne' },
      { property: 'og:locale', content: 'en_GB' },
      { name: 'twitter:card', content: 'summary_large_image' },
      { name: 'twitter:title', content: 'Professional Roof Cleaning Golborne' },
      { name: 'geo.region', content: 'GB-GTM' },
      { name: 'geo.placename', content: 'Golborne' },
      { name: 'geo.position', content: '53.4669;-2.5963' }
    ];

    metaTags.forEach(tag => {
      let meta = document.querySelector(`meta[${tag.property ? 'property' : 'name'}="${tag.property || tag.name}"]`);
      if (!meta) {
        meta = document.createElement('meta');
        if (tag.property) {
          meta.setAttribute('property', tag.property);
        } else {
          meta.setAttribute('name', tag.name);
        }
        document.head.appendChild(meta);
      }
      meta.setAttribute('content', tag.content);
    });

    return () => {
      if (script.parentNode) document.head.removeChild(script);
    };
  }, []);

  return (
    <Layout>
      <main className="min-h-screen bg-background">
        {/* Enhanced Breadcrumb with semantic markup */}
        <nav className="bg-secondary/50" aria-label="Breadcrumb" itemScope itemType="https://schema.org/BreadcrumbList">
          <div className="container-custom py-4">
            <ol className="flex items-center gap-2 text-sm flex-wrap">
              <li itemProp="itemListElement" itemScope itemType="https://schema.org/ListItem">
                <Link href="/" itemProp="item" className="text-primary hover:text-accent transition-colors">
                  <span itemProp="name">Home</span>
                </Link>
                <meta itemProp="position" content="1" />
              </li>
              <li className="text-primary-foreground/50"><ChevronRight className="h-4 w-4" /></li>
              <li itemProp="itemListElement" itemScope itemType="https://schema.org/ListItem">
                <Link href="/services/roof-cleaning" itemProp="item" className="text-primary hover:text-accent transition-colors">
                  <span itemProp="name">Roof Cleaning Services</span>
                </Link>
                <meta itemProp="position" content="2" />
              </li>
              <li className="text-primary-foreground/50"><ChevronRight className="h-4 w-4" /></li>
              <li className="text-primary-foreground/70" aria-current="page" itemProp="itemListElement" itemScope itemType="https://schema.org/ListItem">
                <span itemProp="name">Golborne</span>
                <meta itemProp="position" content="3" />
              </li>
            </ol>
          </div>
        </nav>

        {/* Enhanced Hero Header with semantic entities */}
        <article className="border-b border-secondary bg-gradient-to-b from-secondary/50 to-background" itemScope itemType="https://schema.org/Service">
          <div className="container-custom section-padding">
            <h1 className="font-display text-4xl md:text-5xl font-bold text-foreground mb-4" itemProp="name">
              Professional Roof Cleaning Services in Golborne, Greater Manchester
            </h1>
            <p className="text-xl text-muted-foreground mb-6" itemProp="description">
              Expert <strong>roof cleaning services</strong>, <strong>moss removal</strong>, <strong>algae treatment</strong>, and <strong>soft washing</strong> for residential and commercial properties throughout Golborne and surrounding areas including <span itemProp="areaServed">Lowton</span>, <span itemProp="areaServed">Leigh</span>, and <span itemProp="areaServed">Warrington</span>. Protect your roof investment with professional maintenance that extends lifespan and prevents costly water damage.
            </p>

            {/* Trust signals */}
            <div className="flex flex-wrap gap-6 mb-6 text-sm text-muted-foreground">
              <div className="flex items-center gap-2">
                <Shield className="h-5 w-5 text-accent" />
                <span>Fully Insured</span>
              </div>
              <div className="flex items-center gap-2">
                <Award className="h-5 w-5 text-accent" />
                <span>15+ Years Experience</span>
              </div>
              <div className="flex items-center gap-2">
                <Users className="h-5 w-5 text-accent" />
                <span>500+ Happy Customers</span>
              </div>
              <div className="flex items-center gap-2">
                <CheckCircle className="h-5 w-5 text-accent" />
                <span>Free Quotations</span>
              </div>
            </div>

            <div className="flex flex-col sm:flex-row gap-4">
              <Button size="lg" asChild className="group">
                <a href="tel:+447845463877" title="Call for free roof cleaning quote in Golborne" itemProp="telephone">
                  <Phone className="h-5 w-5 mr-2 group-hover:scale-110 transition-transform" />
                  Get Free Quote: 07845 463877
                </a>
              </Button>
              <Button variant="outline" size="lg" asChild>
                <Link href="/contact" title="Request professional roof inspection in Golborne">
                  Request Free Roof Inspection
                </Link>
              </Button>
            </div>
          </div>
        </article>

        {/* Main Content with enhanced semantic structure */}
        <div className="container-custom section-padding">
          <div className="max-w-4xl">

            {/* Enhanced Service Overview with semantic entities */}
            <section className="mb-12" itemScope itemType="https://schema.org/Article">
              <h2 className="text-3xl font-bold text-foreground mb-4" itemProp="headline">
                Expert Roof Cleaning Services in Golborne: Protecting Your Most Important Asset
              </h2>

              <div className="prose prose-lg max-w-none" itemProp="articleBody">
                <p className="text-muted-foreground text-lg leading-relaxed mb-6">
                  Your roof represents one of your property's most significant investments, yet it's constantly exposed to <strong>Golborne's challenging Greater Manchester weather conditions</strong>—high annual rainfall, elevated humidity levels, and variable temperatures that create ideal conditions for organic growth. Moss (<em>Bryophyta</em>), algae (<em>Gloeocapsa magma</em>), and lichen accumulate silently, compromising both your roof's structural integrity and visual appeal while potentially reducing property value by 5-10%.
                </p>

                <p className="text-muted-foreground leading-relaxed mb-6">
                  At <strong itemProp="provider" itemScope itemType="https://schema.org/LocalBusiness"><span itemProp="name">R.R.M Exterior Cleaning Specialist</span></strong>, we provide comprehensive <strong>professional roof cleaning services</strong> throughout Golborne, utilizing advanced <strong>soft washing technology</strong> that protects your investment while extending your roof's operational lifespan by 5-10 years. Our <strong>biocidal treatment solutions</strong> are specifically formulated to eliminate organic contaminants while being safe for surrounding vegetation and drainage systems.
                </p>

                <div className="bg-blue-500/10 border-l-4 border-blue-500 p-6 my-6 rounded-r-lg">
                  <h3 className="font-semibold text-foreground mb-2 flex items-center gap-2">
                    <Droplets className="h-5 w-5 text-blue-500" />
                    Understanding Roof Contamination in Golborne's Climate
                  </h3>
                  <p className="text-muted-foreground text-sm leading-relaxed">
                    Golborne's location in Greater Manchester creates a climate with significant rainfall, high humidity (particularly in autumn and winter months), and mild temperatures that accelerate moss and algae colonization. North-facing roof slopes receive less direct sunlight, maintaining moisture that promotes biological growth. Without professional intervention, moss can retain up to 20 times its dry weight in water, creating persistent moisture that degrades roofing materials through freeze-thaw cycles and chemical breakdown.
                  </p>
                </div>

                <p className="text-muted-foreground leading-relaxed mb-4">
                  Unlike destructive <strong>high-pressure washing</strong> (2000-3000 PSI) which can dislodge tiles, damage surface coatings, remove protective granules from asphalt shingles, and force water beneath roofing materials causing hidden water damage, our <strong>soft washing methodology</strong> employs low-pressure application (100-200 PSI) combined with pH-balanced, biodegradable cleaning agents. This approach safely removes moss, algae, lichen, black streaks, and organic debris without causing structural harm to tiles, slates, or membrane systems.
                </p>

                <h3 className="text-xl font-semibold text-foreground mt-8 mb-4">
                  Roof Materials We Clean in Golborne
                </h3>
                <ul className="space-y-2 text-muted-foreground mb-6">
                  <li className="flex items-start gap-3">
                    <CheckCircle className="h-5 w-5 text-accent flex-shrink-0 mt-0.5" />
                    <span><strong>Concrete Tiles:</strong> Standard, interlocking, and pantile profiles commonly found in Golborne properties</span>
                  </li>
                  <li className="flex items-start gap-3">
                    <CheckCircle className="h-5 w-5 text-accent flex-shrink-0 mt-0.5" />
                    <span><strong>Clay Tiles:</strong> Traditional terracotta and glazed clay tiles typical of period properties</span>
                  </li>
                  <li className="flex items-start gap-3">
                    <CheckCircle className="h-5 w-5 text-accent flex-shrink-0 mt-0.5" />
                    <span><strong>Natural Slate:</strong> Welsh slate roofs requiring gentle cleaning techniques</span>
                  </li>
                  <li className="flex items-start gap-3">
                    <CheckCircle className="h-5 w-5 text-accent flex-shrink-0 mt-0.5" />
                    <span><strong>Artificial Slate:</strong> Fiber-cement and composite slate materials used in modern construction</span>
                  </li>
                  <li className="flex items-start gap-3">
                    <CheckCircle className="h-5 w-5 text-accent flex-shrink-0 mt-0.5" />
                    <span><strong>Asphalt Shingles:</strong> American-style shingles found on some contemporary Golborne properties</span>
                  </li>
                  <li className="flex items-start gap-3">
                    <CheckCircle className="h-5 w-5 text-accent flex-shrink-0 mt-0.5" />
                    <span><strong>Metal Roofing:</strong> Corrugated, standing seam, and coated metal roof systems</span>
                  </li>
                  <li className="flex items-start gap-3">
                    <CheckCircle className="h-5 w-5 text-accent flex-shrink-0 mt-0.5" />
                    <span><strong>Flat Roofs:</strong> EPDM, TPO, felt, and GRP flat roofing systems requiring specialized cleaning protocols</span>
                  </li>
                </ul>
              </div>
            </section>

            {/* Enhanced Services Grid with semantic detail */}
            <section className="mb-12 bg-secondary/30 rounded-lg p-8 border border-secondary">
              <h2 className="text-2xl font-bold text-foreground mb-6">
                Comprehensive Roof Cleaning Services in Golborne
              </h2>
              <div className="grid md:grid-cols-2 gap-6">
                <div className="flex gap-4" itemScope itemType="https://schema.org/Service">
                  <CheckCircle className="h-6 w-6 text-accent flex-shrink-0 mt-1" />
                  <div>
                    <h3 className="font-semibold text-foreground mb-2" itemProp="name">
                      Professional Moss Removal & Treatment
                    </h3>
                    <p className="text-muted-foreground text-sm" itemProp="description">
                      Complete removal of moss using specialized soft washing techniques. Our biocidal treatments penetrate moss root systems, killing growth at the source and preventing rapid recolonization. We safely remove moss without damaging tile surface coatings or dislodging ridge tiles.
                    </p>
                  </div>
                </div>

                <div className="flex gap-4" itemScope itemType="https://schema.org/Service">
                  <CheckCircle className="h-6 w-6 text-accent flex-shrink-0 mt-1" />
                  <div>
                    <h3 className="font-semibold text-foreground mb-2" itemProp="name">
                      Algae & Black Stain Removal
                    </h3>
                    <p className="text-muted-foreground text-sm" itemProp="description">
                      Elimination of algae causing unsightly black streaks on roofing materials. Our pH-balanced cleaning solutions break down algae colonies and their protective outer layers, removing visible staining while treating subsurface contamination. Particularly effective on north-facing slopes with limited sun exposure.
                    </p>
                  </div>
                </div>

                <div className="flex gap-4" itemScope itemType="https://schema.org/Service">
                  <CheckCircle className="h-6 w-6 text-accent flex-shrink-0 mt-1" />
                  <div>
                    <h3 className="font-semibold text-foreground mb-2" itemProp="name">
                      Lichen Removal & Prevention
                    </h3>
                    <p className="text-muted-foreground text-sm" itemProp="description">
                      Treatment of lichen which penetrates porous roofing surfaces through chemical etching. Lichen roots secrete acids that degrade tile and slate surfaces over time. Our specialized biocidal treatments kill lichen at the root level, with dead material naturally weathering away over subsequent months, preserving roof surface integrity.
                    </p>
                  </div>
                </div>

                <div className="flex gap-4" itemScope itemType="https://schema.org/Service">
                  <CheckCircle className="h-6 w-6 text-accent flex-shrink-0 mt-1" />
                  <div>
                    <h3 className="font-semibold text-foreground mb-2" itemProp="name">
                      Advanced Soft Washing Technology
                    </h3>
                    <p className="text-muted-foreground text-sm" itemProp="description">
                      Low-pressure cleaning systems (100-200 PSI vs. 2000-3000 PSI pressure washing) utilizing professional-grade surfactants, biocides, and biodegradable detergents. This chemical action method provides longer-lasting results (2-3 years) compared to pressure washing alone, while protecting delicate roof materials from mechanical damage.
                    </p>
                  </div>
                </div>

                <div className="flex gap-4" itemScope itemType="https://schema.org/Service">
                  <CheckCircle className="h-6 w-6 text-accent flex-shrink-0 mt-1" />
                  <div>
                    <h3 className="font-semibold text-foreground mb-2" itemProp="name">
                      Comprehensive Roof Inspection
                    </h3>
                    <p className="text-muted-foreground text-sm" itemProp="description">
                      Detailed roof inspection included with every cleaning service: identification of cracked, slipped, or missing tiles; assessment of mortar condition on ridge and hip tiles; examination of lead flashing and valley gutters; checking for signs of water ingress or structural damage; photographic documentation of all findings.
                    </p>
                  </div>
                </div>

                <div className="flex gap-4" itemScope itemType="https://schema.org/Service">
                  <CheckCircle className="h-6 w-6 text-accent flex-shrink-0 mt-1" />
                  <div>
                    <h3 className="font-semibold text-foreground mb-2" itemProp="name">
                      Gutter & Drainage Clearing
                    </h3>
                    <p className="text-muted-foreground text-sm" itemProp="description">
                      Removal of moss, debris, and biological matter from gutters, downpipes, and valley gutters during roof cleaning. Blocked gutters can cause water overflow, leading to fascia rot, wall penetration damp, and foundation issues. We ensure complete drainage system functionality with downpipe flushing and gutter outlet verification.
                    </p>
                  </div>
                </div>

                <div className="flex gap-4" itemScope itemType="https://schema.org/Service">
                  <CheckCircle className="h-6 w-6 text-accent flex-shrink-0 mt-1" />
                  <div>
                    <h3 className="font-semibold text-foreground mb-2" itemProp="name">
                      Residential & Commercial Properties
                    </h3>
                    <p className="text-muted-foreground text-sm" itemProp="description">
                      Professional roof cleaning for all property types: terraced houses, semi-detached homes, detached properties, bungalows, commercial premises, industrial units, agricultural buildings, care homes, schools, and public buildings throughout Golborne and surrounding areas.
                    </p>
                  </div>
                </div>

                <div className="flex gap-4" itemScope itemType="https://schema.org/Service">
                  <CheckCircle className="h-6 w-6 text-accent flex-shrink-0 mt-1" />
                  <div>
                    <h3 className="font-semibold text-foreground mb-2" itemProp="name">
                      Annual Maintenance Programs
                    </h3>
                    <p className="text-muted-foreground text-sm" itemProp="description">
                      Preventative maintenance contracts providing scheduled roof inspections and treatments to prevent organic regrowth. Annual or bi-annual programs include priority scheduling, discounted rates, and proactive monitoring to identify and address issues before they become costly problems.
                    </p>
                  </div>
                </div>
              </div>
            </section>

            {/* Enhanced Benefits Section */}
            <section className="mb-12">
              <h2 className="text-2xl font-bold text-foreground mb-6">
                The Critical Importance of Professional Roof Cleaning in Golborne
              </h2>
              <div className="space-y-6">
                <div className="border-l-4 border-accent pl-6">
                  <h3 className="text-lg font-semibold text-foreground mb-2 flex items-center gap-2">
                    <Droplets className="h-5 w-5 text-accent" />
                    Prevent Water Damage, Leaks, and Interior Deterioration
                  </h3>
                  <p className="text-muted-foreground mb-3">
                    Accumulated moss acts like a sponge, retaining moisture at the tile/slate interface for extended periods. In Golborne's climate with high rainfall and humidity, this persistent moisture causes:
                  </p>
                  <ul className="space-y-2 text-muted-foreground text-sm ml-4">
                    <li className="flex gap-2"><span className="text-accent">•</span> <span><strong>Tile degradation:</strong> Freeze-thaw cycles cause surface spalling and internal cracking in concrete tiles</span></li>
                    <li className="flex gap-2"><span className="text-accent">•</span> <span><strong>Slate delamination:</strong> Water absorption causes natural slate to delaminate along bedding planes</span></li>
                    <li className="flex gap-2"><span className="text-accent">•</span> <span><strong>Underlayment failure:</strong> Moisture penetration degrades felt, breathable membrane, and sarking boards</span></li>
                    <li className="flex gap-2"><span className="text-accent">•</span> <span><strong>Batten rot:</strong> Wet moss contact causes timber batten decay, compromising tile fixings</span></li>
                    <li className="flex gap-2"><span className="text-accent">•</span> <span><strong>Interior water damage:</strong> Leaks damage ceiling plaster, insulation, and electrical systems (average repair cost: £2,000-£8,000)</span></li>
                  </ul>
                  <p className="text-muted-foreground mt-3 text-sm font-medium">
                    Professional roof cleaning removes moisture-retaining contaminants, allowing roofs to dry properly between rainfall events and preventing the cascade of damage that leads to costly interior repairs.
                  </p>
                </div>

                <div className="border-l-4 border-accent pl-6">
                  <h3 className="text-lg font-semibold text-foreground mb-2 flex items-center gap-2">
                    <Home className="h-5 w-5 text-accent" />
                    Extend Roof Lifespan by 5-10 Years
                  </h3>
                  <p className="text-muted-foreground mb-3">
                    Regular professional maintenance significantly extends roof longevity beyond typical service life expectations:
                  </p>
                  <div className="grid md:grid-cols-2 gap-4 text-sm">
                    <div className="bg-secondary/20 rounded p-4">
                      <div className="font-semibold text-foreground mb-2">Without Professional Cleaning:</div>
                      <ul className="space-y-1 text-muted-foreground">
                        <li>• Concrete tiles: 30-40 years</li>
                        <li>• Clay tiles: 40-50 years</li>
                        <li>• Natural slate: 50-75 years</li>
                        <li>• Asphalt shingles: 15-20 years</li>
                      </ul>
                    </div>
                    <div className="bg-accent/10 rounded p-4 border-2 border-accent/30">
                      <div className="font-semibold text-foreground mb-2">With Regular Maintenance:</div>
                      <ul className="space-y-1 text-muted-foreground">
                        <li>• Concrete tiles: 45-50 years</li>
                        <li>• Clay tiles: 60-75 years</li>
                        <li>• Natural slate: 75-100+ years</li>
                        <li>• Asphalt shingles: 22-28 years</li>
                      </ul>
                    </div>
                  </div>
                  <p className="text-muted-foreground mt-3">
                    By removing damaging organic growth, professional <strong>roof maintenance</strong> preserves material integrity, prevents premature failure, and defers expensive roof replacement (£5,000-£15,000+ for typical Golborne properties). The £300-£600 investment in professional cleaning every 2-3 years saves thousands in replacement costs.
                  </p>
                </div>

                <div className="border-l-4 border-accent pl-6">
                  <h3 className="text-lg font-semibold text-foreground mb-2">
                    Maintain and Enhance Property Value
                  </h3>
                  <p className="text-muted-foreground mb-3">
                    Roof condition significantly impacts property valuation and buyer perception:
                  </p>
                  <ul className="space-y-2 text-muted-foreground text-sm ml-4">
                    <li className="flex gap-2"><span className="text-accent">•</span> <span><strong>Curb appeal impact:</strong> Clean roofs create positive first impressions during property viewings, with studies showing well-maintained exteriors increase buyer interest by 30%+</span></li>
                    <li className="flex gap-2"><span className="text-accent">•</span> <span><strong>Valuation effects:</strong> Properties with visible roof contamination often receive survey comments and valuation reductions of 3-7%</span></li>
                    <li className="flex gap-2"><span className="text-accent">•</span> <span><strong>Buyer negotiations:</strong> Dirty, moss-covered roofs signal deferred maintenance, prompting price negotiations and buyer concerns</span></li>
                    <li className="flex gap-2"><span className="text-accent">•</span> <span><strong>Mortgage surveys:</strong> RICS surveyors flag heavily contaminated roofs, potentially causing mortgage lender concerns</span></li>
                    <li className="flex gap-2"><span className="text-accent">•</span> <span><strong>Rental properties:</strong> Clean, well-maintained roofs attract higher-quality tenants and justify premium rents</span></li>
                  </ul>
                  <p className="text-muted-foreground mt-3 font-medium">
                    Professional roof cleaning provides excellent ROI, typically returning 3-5x the investment in increased property appeal and avoiding valuation reductions.
                  </p>
                </div>

                <div className="border-l-4 border-accent pl-6">
                  <h3 className="text-lg font-semibold text-foreground mb-2 flex items-center gap-2">
                    <Leaf className="h-5 w-5 text-accent" />
                    Soft Washing: Protecting Your Roof Investment
                  </h3>
                  <p className="text-muted-foreground mb-3">
                    Understanding the critical difference between pressure washing and soft washing:
                  </p>
                  <div className="grid md:grid-cols-2 gap-4 mb-4">
                    <div className="bg-red-500/10 border border-red-500/30 rounded p-4">
                      <div className="font-semibold text-foreground mb-2 text-red-700 dark:text-red-400">❌ High-Pressure Washing (2000-3000 PSI)</div>
                      <ul className="space-y-1 text-sm text-muted-foreground">
                        <li>• Dislodges tiles and slates from fixings</li>
                        <li>• Removes protective surface coatings</li>
                        <li>• Strips granules from asphalt shingles</li>
                        <li>• Forces water beneath tiles causing hidden damage</li>
                        <li>• Damages ridge tile mortar and pointing</li>
                        <li>• Creates entry points for future leaks</li>
                        <li>• Short-term results (6-12 months)</li>
                      </ul>
                    </div>
                    <div className="bg-green-500/10 border border-green-500/30 rounded p-4">
                      <div className="font-semibold text-foreground mb-2 text-green-700 dark:text-green-400">✓ Soft Washing (100-200 PSI)</div>
                      <ul className="space-y-1 text-sm text-muted-foreground">
                        <li>• Gentle pressure protects all materials</li>
                        <li>• Preserves protective surface treatments</li>
                        <li>• Maintains granule integrity on shingles</li>
                        <li>• No water forced beneath roofing</li>
                        <li>• Preserves mortar and pointing</li>
                        <li>• No structural damage created</li>
                        <li>• Long-lasting results (2-3 years)</li>
                      </ul>
                    </div>
                  </div>
                  <p className="text-muted-foreground text-sm">
                    Our soft washing system uses <strong>surfactants</strong> (surface-active agents that reduce water surface tension for better penetration), <strong>biocides</strong> (algaecides and fungicides that kill organic growth at cellular level), and <strong>biodegradable detergents</strong> that break down safely without harming plants, wildlife, or drainage systems.
                  </p>
                </div>
              </div>
            </section>

            {/* Enhanced Risks Section */}
            <section className="mb-12 bg-red-500/5 border border-red-500/20 rounded-lg p-8">
              <div className="flex gap-4 mb-6">
                <AlertCircle className="h-8 w-8 text-red-500 flex-shrink-0" />
                <h2 className="text-2xl font-bold text-foreground">
                  Documented Risks of Neglecting Professional Roof Maintenance in Golborne
                </h2>
              </div>
              <ul className="space-y-3 text-muted-foreground">
                <li className="flex gap-3">
                  <span className="text-red-500 font-bold">•</span>
                  <span><strong>Water Ingress & Interior Damage:</strong> Moss and debris retention causes moisture accumulation leading to tile degradation, underlayment failure, batten rot, and interior water damage. Average cost of leak-related repairs in Golborne properties: £3,500-£8,000 including ceiling replacement, insulation renewal, and electrical work</span>
                </li>
                <li className="flex gap-3">
                  <span className="text-red-500 font-bold">•</span>
                  <span><strong>Structural Deterioration:</strong> Accumulated organic matter adds 100-300kg of unnecessary weight to roof structures. Combined with moisture retention, this causes timber decay, rafter damage, and potential structural failure in severe cases</span>
                </li>
                <li className="flex gap-3">
                  <span className="text-red-500 font-bold">•</span>
                  <span><strong>Mold, Spores & Health Implications:</strong> Organic roof contamination creates ideal conditions for mold species. Spores enter living spaces through roof voids affecting indoor air quality and causing respiratory issues, allergic reactions, and exacerbating asthma</span>
                </li>
                <li className="flex gap-3">
                  <span className="text-red-500 font-bold">•</span>
                  <span><strong>Property Devaluation:</strong> Survey reports noting roof contamination commonly result in 3-7% property valuation reductions. Buyers frequently negotiate price reductions of £5,000-£10,000 when roofs show visible neglect</span>
                </li>
                <li className="flex gap-3">
                  <span className="text-red-500 font-bold">•</span>
                  <span><strong>Premature Roof Replacement:</strong> Neglected roofs typically require replacement 10-15 years earlier than well-maintained roofs. Full roof replacement costs in Golborne: £5,000-£15,000+. Regular £300-£600 cleaning every 2-3 years prevents premature replacement saving £5,000-£10,000+</span>
                </li>
                <li className="flex gap-3">
                  <span className="text-red-500 font-bold">•</span>
                  <span><strong>Insurance Complications:</strong> Some home insurance policies contain clauses requiring reasonable property maintenance. Severe roof neglect can complicate claims related to water damage or roof failure</span>
                </li>
                <li className="flex gap-3">
                  <span className="text-red-500 font-bold">•</span>
                  <span><strong>Energy Efficiency Reduction:</strong> Organic contamination and moisture retention can affect roof insulation performance, potentially increasing heating costs by 5-10% in affected properties during cold winter months</span>
                </li>
              </ul>
            </section>

            {/* Enhanced FAQ Section */}
            <section className="mb-12" itemScope itemType="https://schema.org/FAQPage">
              <h2 className="text-2xl font-bold text-foreground mb-6">
                Frequently Asked Questions About Professional Roof Cleaning in Golborne
              </h2>
              <div className="space-y-4">
                <details className="bg-secondary/30 rounded-lg p-6 cursor-pointer group" itemScope itemProp="mainEntity" itemType="https://schema.org/Question">
                  <summary className="font-semibold text-foreground flex justify-between items-center" itemProp="name">
                    How much does roof cleaning cost in Golborne?
                    <span className="text-accent group-open:rotate-180 transition-transform">▼</span>
                  </summary>
                  <div className="text-muted-foreground mt-4 space-y-2" itemScope itemProp="acceptedAnswer" itemType="https://schema.org/Answer">
                    <p itemProp="text">
                      Roof cleaning costs in Golborne typically range from £300-£800 depending on factors including roof size (measured in square meters), roof pitch and accessibility, degree of moss and algae contamination, roof material type, and additional services like gutter cleaning or minor repairs. We provide free, no-obligation quotations following an on-site inspection where we assess your specific property requirements.
                    </p>
                    <p className="text-sm">
                      Typical pricing for Golborne properties: <strong>Terraced house</strong> (60-80m² roof area): £300-£450; <strong>Semi-detached</strong> (80-120m² roof area): £400-£600; <strong>Detached house</strong> (120-180m² roof area): £550-£800; <strong>Large detached/bungalow</strong> (180m²+ roof area): £800-£1,200+. These prices include comprehensive cleaning, biocidal treatment, gutter clearing, professional inspection, and photographic documentation.
                    </p>
                    <p className="text-sm">
                      This investment is significantly less than roof replacement costs (£5,000-£15,000+) and extends roof lifespan by years, providing excellent return on investment. Call <a href="tel:+447845463877" className="text-accent hover:text-primary transition-colors font-medium">07845 463877</a> to arrange your free inspection and quotation.
                    </p>
                  </div>
                </details>

                <details className="bg-secondary/30 rounded-lg p-6 cursor-pointer group" itemScope itemProp="mainEntity" itemType="https://schema.org/Question">
                  <summary className="font-semibold text-foreground flex justify-between items-center" itemProp="name">
                    Is soft washing safe for all roof types?
                    <span className="text-accent group-open:rotate-180 transition-transform">▼</span>
                  </summary>
                  <div className="text-muted-foreground mt-4 space-y-2" itemScope itemProp="acceptedAnswer" itemType="https://schema.org/Answer">
                    <p itemProp="text">
                      Yes, soft washing is specifically designed to be safe for all roof types including concrete tiles, clay tiles, natural slate, artificial slate, asphalt shingles, and metal roofing. The low-pressure application (typically 100-200 PSI) combined with pH-balanced, biodegradable cleaning solutions effectively removes moss, algae, and organic growth without causing damage to roof materials or displacing tiles.
                    </p>
                    <p className="text-sm">
                      Unlike high-pressure washing (2000-3000 PSI) which can dislodge tiles, damage surface coatings, and force water beneath roofing materials, soft washing relies on chemical action rather than mechanical force. Our cleaning agents are formulated to be safe for roofing materials while effectively eliminating biological growth.
                    </p>
                  </div>
                </details>

                <details className="bg-secondary/30 rounded-lg p-6 cursor-pointer group" itemScope itemProp="mainEntity" itemType="https://schema.org/Question">
                  <summary className="font-semibold text-foreground flex justify-between items-center" itemProp="name">
                    How often should I have my roof cleaned in Golborne?
                    <span className="text-accent group-open:rotate-180 transition-transform">▼</span>
                  </summary>
                  <div className="text-muted-foreground mt-4 space-y-2" itemScope itemProp="acceptedAnswer" itemType="https://schema.org/Answer">
                    <p itemProp="text">
                      Most Golborne residential properties benefit from professional roof cleaning every 2-3 years. However, optimal frequency varies based on several environmental and structural factors specific to your property location and characteristics.
                    </p>
                    <p className="text-sm">
                      Properties near trees, with north-facing slopes, in sheltered locations, or with porous materials may require annual cleaning due to accelerated moss and algae growth. South-facing roofs with steep pitches and good drainage can often go 3 years between cleanings. We recommend annual professional roof inspections for all Golborne properties to identify contamination early and establish optimal cleaning schedules.
                    </p>
                  </div>
                </details>

                <details className="bg-secondary/30 rounded-lg p-6 cursor-pointer group" itemScope itemProp="mainEntity" itemType="https://schema.org/Question">
                  <summary className="font-semibold text-foreground flex justify-between items-center" itemProp="name">
                    Will roof cleaning damage my tiles?
                    <span className="text-accent group-open:rotate-180 transition-transform">▼</span>
                  </summary>
                  <div className="text-muted-foreground mt-4 space-y-2" itemScope itemProp="acceptedAnswer" itemType="https://schema.org/Answer">
                    <p itemProp="text">
                      Professional soft washing will not damage tiles when performed correctly by trained, experienced technicians using proper equipment and techniques. High-pressure washing can cause significant damage, but our gentle, low-pressure soft washing techniques with biodegradable cleaning solutions protect your roof materials.
                    </p>
                    <p className="text-sm">
                      Our technicians are trained in proper roof walking techniques using specialist equipment to distribute weight and prevent tile damage during cleaning. We identify fragile or damaged tiles during pre-cleaning inspection and take extra precautions around these areas. Our soft washing system applies cleaning solutions at low pressure which is insufficient to dislodge or damage tiles.
                    </p>
                  </div>
                </details>

                <details className="bg-secondary/30 rounded-lg p-6 cursor-pointer group" itemScope itemProp="mainEntity" itemType="https://schema.org/Question">
                  <summary className="font-semibold text-foreground flex justify-between items-center" itemProp="name">
                    How long does professional roof cleaning take?
                    <span className="text-accent group-open:rotate-180 transition-transform">▼</span>
                  </summary>
                  <div className="text-muted-foreground mt-4 space-y-2" itemScope itemProp="acceptedAnswer" itemType="https://schema.org/Answer">
                    <p itemProp="text">
                      Most residential roof cleaning projects in Golborne take between 3-6 hours depending on roof size, pitch angle, degree of contamination, and accessibility. A typical semi-detached house takes approximately 4 hours, while larger detached properties may require 6-8 hours. We provide accurate time estimates during the initial free inspection and quotation.
                    </p>
                    <p className="text-sm">
                      Factors affecting duration include roof pitch (steeper roofs require additional safety measures), contamination level (heavily moss-covered roofs need more thorough treatment), roof complexity (multiple chimneys, dormers, or valley gutters increase cleaning time), and access (properties with poor access or parking restrictions require additional setup time). We work efficiently while maintaining safety and quality standards.
                    </p>
                  </div>
                </details>

                <details className="bg-secondary/30 rounded-lg p-6 cursor-pointer group" itemScope itemProp="mainEntity" itemType="https://schema.org/Question">
                  <summary className="font-semibold text-foreground flex justify-between items-center" itemProp="name">
                    Does roof cleaning prevent moss from returning?
                    <span className="text-accent group-open:rotate-180 transition-transform">▼</span>
                  </summary>
                  <div className="text-muted-foreground mt-4 space-y-2" itemScope itemProp="acceptedAnswer" itemType="https://schema.org/Answer">
                    <p itemProp="text">
                      Professional roof cleaning removes existing moss, algae, and lichen, and treats surfaces with biocidal solutions to slow regrowth. However, in Golborne's damp Greater Manchester climate with high rainfall and humidity, some organic regrowth is natural and inevitable over time. The biocidal treatment typically provides 2-3 years of protection before re-treatment is needed.
                    </p>
                    <p className="text-sm">
                      Moss spreads through airborne spores which are constantly present in the environment. Professional biocidal treatments kill existing moss and create hostile surface conditions that inhibit new spore germination for 2-3 years. However, as biocides gradually degrade through UV exposure and weathering, roofs eventually become susceptible to recolonization. <strong>Regular maintenance every 2-3 years is the most effective long-term prevention strategy</strong>, catching moss in early stages before it causes damage.
                    </p>
                  </div>
                </details>
              </div>
            </section>

            {/* Enhanced CTA Section */}
            <section className="bg-gradient-to-r from-accent/20 to-primary/20 rounded-lg p-8 border border-accent/30 text-center">
              <h2 className="text-2xl font-bold text-foreground mb-4">
                Protect Your Golborne Roof Investment Today
              </h2>
              <p className="text-muted-foreground mb-6 max-w-2xl mx-auto">
                Don't wait for leaks, water damage, and costly repairs to occur. Contact <strong>R.R.M Exterior Cleaning Specialist</strong> for professional roof cleaning, moss removal, algae treatment, and comprehensive maintenance services throughout Golborne, Lowton, Leigh, Warrington, and surrounding Greater Manchester areas. Free quotations and inspections available.
              </p>
              <div className="flex flex-col sm:flex-row gap-4 justify-center mb-6">
                <Button size="lg" asChild>
                  <a href="tel:+447845463877" itemProp="telephone">
                    <Phone className="h-5 w-5 mr-2" />
                    Call Now: 07845 463877
                  </a>
                </Button>
                <Button variant="outline" size="lg" asChild>
                  <Link href="/contact">Request Free Inspection</Link>
                </Button>
              </div>
              <div className="grid md:grid-cols-4 gap-4 text-sm text-muted-foreground">
                <div className="flex flex-col items-center gap-2">
                  <Clock className="h-5 w-5 text-accent" />
                  <span>Available 24/7</span>
                </div>
                <div className="flex flex-col items-center gap-2">
                  <CheckCircle className="h-5 w-5 text-accent" />
                  <span>Free Quotations</span>
                </div>
                <div className="flex flex-col items-center gap-2">
                  <Shield className="h-5 w-5 text-accent" />
                  <span>Fully Insured</span>
                </div>
                <div className="flex flex-col items-center gap-2">
                  <Award className="h-5 w-5 text-accent" />
                  <span>15+ Years Experience</span>
                </div>
              </div>
            </section>

            {/* Enhanced Related Services */}
            <section className="mt-12 pt-12 border-t border-secondary">
              <h2 className="text-2xl font-bold text-foreground mb-6">
                Related Exterior Cleaning Services in Golborne
              </h2>
              <div className="grid md:grid-cols-3 gap-6">
                <Link href="/services/gutter-cleaning/golborne" className="group p-6 bg-secondary/30 rounded-lg hover:bg-secondary/50 transition-colors border border-secondary">
                  <h3 className="font-semibold text-foreground group-hover:text-accent transition-colors mb-2">
                    Gutter Cleaning Golborne
                  </h3>
                  <p className="text-sm text-muted-foreground mb-3">
                    Professional gutter cleaning, unblocking, repairs, and maintenance preventing water damage and fascia rot
                  </p>
                  <span className="text-accent text-sm flex items-center gap-1">
                    Learn more <ChevronRight className="h-4 w-4" />
                  </span>
                </Link>

                <Link href="/services/pressure-washing/golborne" className="group p-6 bg-secondary/30 rounded-lg hover:bg-secondary/50 transition-colors border border-secondary">
                  <h3 className="font-semibold text-foreground group-hover:text-accent transition-colors mb-2">
                    Pressure Washing Golborne
                  </h3>
                  <p className="text-sm text-muted-foreground mb-3">
                    Deep cleaning for driveways, patios, paths, decking, and hard surfaces removing dirt, algae, and organic stains
                  </p>
                  <span className="text-accent text-sm flex items-center gap-1">
                    Learn more <ChevronRight className="h-4 w-4" />
                  </span>
                </Link>

                <Link href="/services/soft-washing/golborne" className="group p-6 bg-secondary/30 rounded-lg hover:bg-secondary/50 transition-colors border border-secondary">
                  <h3 className="font-semibold text-foreground group-hover:text-accent transition-colors mb-2">
                    Soft Washing Golborne
                  </h3>
                  <p className="text-sm text-muted-foreground mb-3">
                    Gentle low-pressure cleaning for render, cladding, conservatories, and delicate surfaces using biodegradable solutions
                  </p>
                  <span className="text-accent text-sm flex items-center gap-1">
                    Learn more <ChevronRight className="h-4 w-4" />
                  </span>
                </Link>
              </div>
            </section>

            {/* Enhanced Local Info */}
            <section className="mt-12 pt-12 border-t border-secondary">
              <h2 className="text-2xl font-bold text-foreground mb-4">
                Professional Roof Cleaning Throughout Golborne and Surrounding Areas
              </h2>
              <p className="text-muted-foreground leading-relaxed mb-6">
                Based near Golborne, <strong>R.R.M Exterior Cleaning Specialist</strong> serves all residential and commercial properties throughout the town and surrounding areas. Whether you're located in Golborne town center, Lowton, Lowton St Mary's, Culcheth, Leigh, Ashton-in-Makerfield, or anywhere within the Greater Manchester and Cheshire region, we provide professional roof cleaning services with local knowledge of regional building styles and climate challenges.
              </p>

              <div className="grid md:grid-cols-2 gap-6 mb-6">
                <div className="bg-secondary/30 border border-secondary rounded-lg p-6">
                  <h3 className="font-semibold text-foreground mb-3">Areas We Serve</h3>
                  <ul className="grid grid-cols-2 gap-2 text-sm text-muted-foreground">
                    <li className="flex items-center gap-2"><MapPin className="h-4 w-4 text-accent flex-shrink-0" /> Golborne</li>
                    <li className="flex items-center gap-2"><MapPin className="h-4 w-4 text-accent flex-shrink-0" /> Lowton</li>
                    <li className="flex items-center gap-2"><MapPin className="h-4 w-4 text-accent flex-shrink-0" /> Leigh</li>
                    <li className="flex items-center gap-2"><MapPin className="h-4 w-4 text-accent flex-shrink-0" /> Culcheth</li>
                    <li className="flex items-center gap-2"><MapPin className="h-4 w-4 text-accent flex-shrink-0" /> Warrington</li>
                    <li className="flex items-center gap-2"><MapPin className="h-4 w-4 text-accent flex-shrink-0" /> Newton-le-Willows</li>
                    <li className="flex items-center gap-2"><MapPin className="h-4 w-4 text-accent flex-shrink-0" /> Ashton-in-Makerfield</li>
                    <li className="flex items-center gap-2"><MapPin className="h-4 w-4 text-accent flex-shrink-0" /> Earlestown</li>
                  </ul>
                </div>

                <div className="bg-secondary/30 border border-secondary rounded-lg p-6" itemScope itemType="https://schema.org/LocalBusiness">
                  <h3 className="font-semibold text-foreground mb-3">Contact Information</h3>
                  <div className="space-y-3 text-sm">
                    <div className="flex items-start gap-3">
                      <MapPin className="h-5 w-5 text-accent mt-0.5 flex-shrink-0" />
                      <div itemProp="address" itemScope itemType="https://schema.org/PostalAddress">
                        <div className="font-medium text-foreground">Our Location</div>
                        <div className="text-muted-foreground">
                          <span itemProp="streetAddress">9 Noon Ct</span><br />
                          <span itemProp="addressLocality">Newton-le-Willows</span><br />
                          <span itemProp="postalCode">WA12 8QY</span><br />
                          <span itemProp="addressCountry">United Kingdom</span>
                        </div>
                      </div>
                    </div>
                    <div className="flex items-start gap-3">
                      <Phone className="h-5 w-5 text-accent mt-0.5 flex-shrink-0" />
                      <div>
                        <div className="font-medium text-foreground">Call Us</div>
                        <a href="tel:+447845463877" className="text-accent hover:text-primary transition-colors" itemProp="telephone">
                          +44 7845 463877
                        </a>
                      </div>
                    </div>
                    <div className="flex items-start gap-3">
                      <Clock className="h-5 w-5 text-accent mt-0.5 flex-shrink-0" />
                      <div itemProp="openingHours" content="Mo-Su 00:00-23:59">
                        <div className="font-medium text-foreground">Hours</div>
                        <div className="text-muted-foreground">Available 24/7 for emergency service<br />Standard hours: Mon-Sun 8am-6pm</div>
                      </div>
                    </div>
                  </div>
                </div>
              </div>

              <div className="bg-blue-500/10 border-l-4 border-blue-500 p-6 rounded-r-lg">
                <h3 className="font-semibold text-foreground mb-2">
                  Local Knowledge, Professional Service
                </h3>
                <p className="text-muted-foreground text-sm leading-relaxed">
                  As a locally-based company, we understand the unique challenges facing Golborne properties: the impact of <strong>Greater Manchester's maritime climate</strong> on roof contamination rates, common building styles and materials found in local properties, typical property types requiring specialized approaches, and local drainage patterns. This local expertise ensures we provide the most effective roof cleaning solutions for your specific Golborne property.
                </p>
              </div>
            </section>

          </div>
        </div>
      </main>
    </Layout>
  );
}
