'use client';
import { useEffect } from 'react';

import Link from 'next/link';
import { ChevronRight, Phone, MapPin, Clock, CheckCircle, AlertCircle, Shield, Award, Users, Droplets, Leaf, Home } from 'lucide-react';
import { Button } from '@/components/ui/button';
import { Layout } from '@/components/layout/Layout';

export function RoofNewtonLeWillows() {
  useEffect(() => {
    // Enhanced Schema.org markup with more semantic entities
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
          image: 'https://rrmexternalcleaningspecialist.co.uk/images/roof-cleaning-newton-le-willows.jpg',
          description: 'Professional exterior cleaning specialists serving Newton-le-Willows and surrounding areas. Expert roof cleaning, moss removal, soft washing, gutter cleaning, and pressure washing services.',
          priceRange: '££',
          telephone: '+447845463877',
          email: 'rrmexternalcleaning@gmail.com',
          address: {
            '@type': 'PostalAddress',
            streetAddress: '9 Noon Ct',
            addressLocality: 'Newton-le-Willows',
            addressRegion: 'Merseyside',
            postalCode: 'WA12 8QY',
            addressCountry: 'GB'
          },
          geo: {
            '@type': 'GeoCoordinates',
            latitude: '53.4520',
            longitude: '-2.6380'
          },
          areaServed: [
            {
              '@type': 'City',
              name: 'Newton-le-Willows',
              containedIn: {
                '@type': 'AdministrativeArea',
                name: 'Merseyside'
              }
            },
            {
              '@type': 'City',
              name: 'St Helens'
            },
            {
              '@type': 'City',
              name: 'Warrington'
            },
            {
              '@type': 'City',
              name: 'Wigan'
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
          '@id': 'https://rrmexternalcleaningspecialist.co.uk/services/roof-cleaning/newton-le-willows#service',
          serviceType: 'Roof Cleaning',
          name: 'Professional Roof Cleaning Services in Newton-le-Willows',
          description: 'Expert roof cleaning, moss removal, algae treatment, and soft washing services for residential and commercial properties in Newton-le-Willows. Protect your roof investment with professional maintenance.',
          provider: {
            '@id': 'https://rrmexternalcleaningspecialist.co.uk/#organization'
          },
          areaServed: {
            '@type': 'City',
            name: 'Newton-le-Willows',
            containedIn: {
              '@type': 'AdministrativeArea',
              name: 'Merseyside'
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
          '@id': 'https://rrmexternalcleaningspecialist.co.uk/services/roof-cleaning/newton-le-willows#faq',
          mainEntity: [
            {
              '@type': 'Question',
              name: 'Is soft washing safe for all roof types?',
              acceptedAnswer: {
                '@type': 'Answer',
                text: 'Yes, soft washing is specifically designed to be safe for all roof types including concrete tiles, clay tiles, natural slate, artificial slate, asphalt shingles, and metal roofing. The low-pressure application (typically 100-200 PSI) combined with pH-balanced, biodegradable cleaning solutions effectively removes moss, algae, and organic growth without causing damage to roof materials or displacing tiles.'
              }
            },
            {
              '@type': 'Question',
              name: 'Will roof cleaning damage my tiles?',
              acceptedAnswer: {
                '@type': 'Answer',
                text: 'Professional soft washing will not damage tiles when performed correctly by trained technicians. Unlike high-pressure washing (which can dislodge tiles, damage surface coatings, and force water under tiles), soft washing uses gentle, low-pressure techniques with specialized biodegradable cleaning agents that safely remove contaminants without harming roof materials or their protective surface treatments.'
              }
            },
            {
              '@type': 'Question',
              name: 'How long does professional roof cleaning take?',
              acceptedAnswer: {
                '@type': 'Answer',
                text: 'Most residential roof cleaning projects in Newton-le-Willows take between 3-6 hours depending on roof size, pitch angle, degree of contamination, and accessibility. A typical semi-detached house takes approximately 4 hours, while larger detached properties may require 6-8 hours. We provide accurate time estimates during the initial free inspection and quotation.'
              }
            },
            {
              '@type': 'Question',
              name: 'Does roof cleaning prevent moss from returning?',
              acceptedAnswer: {
                '@type': 'Answer',
                text: 'Professional roof cleaning removes existing moss, algae, and lichen, and treats surfaces with biocidal solutions to slow regrowth. However, in Newton-le-Willows\' damp maritime climate with average annual rainfall of 900mm, some organic regrowth is inevitable over time. The treatment typically provides 2-3 years of protection before re-treatment is needed. Regular maintenance every 2-3 years is the most effective long-term prevention strategy.'
              }
            },
            {
              '@type': 'Question',
              name: 'Can you clean roofs during rainy weather?',
              acceptedAnswer: {
                '@type': 'Answer',
                text: 'Light rain or drizzle does not prevent roof cleaning, as the cleaning solutions we use are designed to work in damp conditions. However, heavy rainfall, strong winds (over 25mph), or conditions creating safety hazards may require rescheduling. We continuously monitor weather forecasts and will advise if conditions are unsuitable for safe working at height.'
              }
            },
            {
              '@type': 'Question',
              name: 'Do you offer roof inspections?',
              acceptedAnswer: {
                '@type': 'Answer',
                text: 'Yes, a comprehensive roof inspection is included with every cleaning service. Our inspection covers: identification of damaged, loose, or missing tiles; assessment of flashing condition; examination of ridge tiles and mortar; checking for signs of water ingress or rot; evaluation of gutter and downpipe condition; and documentation with photographs. Any repairs needed can be quoted separately.'
              }
            },
            {
              '@type': 'Question',
              name: 'What is the difference between pressure washing and soft washing?',
              acceptedAnswer: {
                '@type': 'Answer',
                text: 'Pressure washing uses high-pressure water (2000-3000 PSI) which can damage roof tiles, dislodge pointing, and force water beneath tiles causing leaks. Soft washing uses low pressure (100-200 PSI) combined with specialized biodegradable cleaning solutions containing surfactants and biocides. This chemical action breaks down organic growth at a molecular level, providing longer-lasting results while protecting roof materials.'
              }
            },
            {
              '@type': 'Question',
              name: 'How much does roof cleaning cost in Newton-le-Willows?',
              acceptedAnswer: {
                '@type': 'Answer',
                text: 'Roof cleaning costs in Newton-le-Willows typically range from £300-£800 depending on factors including roof size (measured in square meters), roof pitch and accessibility, degree of moss and algae contamination, roof material type, and additional services like gutter cleaning or repairs. We provide free, no-obligation quotations following an on-site inspection. This investment is significantly less than roof replacement costs (£5,000-£15,000+) and extends roof lifespan by years.'
              }
            }
          ]
        },
        {
          '@type': 'BreadcrumbList',
          '@id': 'https://rrmexternalcleaningspecialist.co.uk/services/roof-cleaning/newton-le-willows#breadcrumb',
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
              name: 'Newton-le-Willows',
              item: 'https://rrmexternalcleaningspecialist.co.uk/services/roof-cleaning/newton-le-willows'
            }
          ]
        },
        {
          '@type': 'WebPage',
          '@id': 'https://rrmexternalcleaningspecialist.co.uk/services/roof-cleaning/newton-le-willows#webpage',
          url: 'https://rrmexternalcleaningspecialist.co.uk/services/roof-cleaning/newton-le-willows',
          name: 'Professional Roof Cleaning Newton-le-Willows | Moss & Algae Removal Experts',
          description: 'Expert roof cleaning services in Newton-le-Willows. Professional moss removal, algae treatment, and soft washing for all roof types. Extend roof lifespan, prevent leaks. Free quotes: 07845 463877',
          inLanguage: 'en-GB',
          isPartOf: {
            '@id': 'https://rrmexternalcleaningspecialist.co.uk/#website'
          },
          breadcrumb: {
            '@id': 'https://rrmexternalcleaningspecialist.co.uk/services/roof-cleaning/newton-le-willows#breadcrumb'
          },
          about: {
            '@id': 'https://rrmexternalcleaningspecialist.co.uk/services/roof-cleaning/newton-le-willows#service'
          },
          primaryImageOfPage: {
            '@type': 'ImageObject',
            url: 'https://rrmexternalcleaningspecialist.co.uk/images/roof-cleaning-newton-le-willows-hero.jpg',
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
    document.title = 'Professional Roof Cleaning Newton-le-Willows | Moss & Algae Removal Experts | RRM';
    
    const metaDescription = document.querySelector('meta[name="description"]');
    if (metaDescription) {
      metaDescription.setAttribute('content', 'Expert roof cleaning services in Newton-le-Willows. Professional moss removal, algae treatment, and soft washing for all roof types. Extend roof lifespan, prevent leaks, protect your investment. Free quotes: 07845 463877');
    }

    // Add additional semantic meta tags
    const metaTags = [
      { name: 'keywords', content: 'roof cleaning Newton-le-Willows, moss removal Newton-le-Willows, algae removal, soft washing, roof maintenance, tile cleaning, slate cleaning, roof moss treatment, professional roof cleaning, Newton-le-Willows roofer' },
      { property: 'og:title', content: 'Professional Roof Cleaning Newton-le-Willows | Moss & Algae Removal' },
      { property: 'og:description', content: 'Expert roof cleaning, moss removal, and soft washing in Newton-le-Willows. Protect your roof and extend its lifespan with professional maintenance.' },
      { property: 'og:type', content: 'website' },
      { property: 'og:url', content: 'https://rrmexternalcleaningspecialist.co.uk/services/roof-cleaning/newton-le-willows' },
      { property: 'og:locale', content: 'en_GB' },
      { name: 'twitter:card', content: 'summary_large_image' },
      { name: 'twitter:title', content: 'Professional Roof Cleaning Newton-le-Willows' },
      { name: 'geo.region', content: 'GB-MER' },
      { name: 'geo.placename', content: 'Newton-le-Willows' },
      { name: 'geo.position', content: '53.4520;-2.6380' }
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
                <span itemProp="name">Newton-le-Willows</span>
                <meta itemProp="position" content="3" />
              </li>
            </ol>
          </div>
        </nav>

        {/* Enhanced Hero Header with semantic entities */}
        <article className="border-b border-secondary bg-gradient-to-b from-secondary/50 to-background" itemScope itemType="https://schema.org/Service">
          <div className="container-custom section-padding">
            <h1 className="font-display text-4xl md:text-5xl font-bold text-foreground mb-4" itemProp="name">
              Professional Roof Cleaning Services in Newton-le-Willows, Merseyside
            </h1>
            <p className="text-xl text-muted-foreground mb-6" itemProp="description">
              Expert <strong>roof cleaning services</strong>, <strong>moss removal</strong>, <strong>algae treatment</strong>, and <strong>soft washing</strong> for residential and commercial properties throughout Newton-le-Willows and surrounding areas including <span itemProp="areaServed">St Helens</span>, <span itemProp="areaServed">Warrington</span>, and <span itemProp="areaServed">Wigan</span>. Protect your roof investment with professional maintenance that extends lifespan and prevents costly water damage.
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
                <a href="tel:+447845463877" title="Call for free roof cleaning quote in Newton-le-Willows" itemProp="telephone">
                  <Phone className="h-5 w-5 mr-2 group-hover:scale-110 transition-transform" />
                  Get Free Quote: 07845 463877
                </a>
              </Button>
              <Button variant="outline" size="lg" asChild>
                <Link href="/contact" title="Request professional roof inspection in Newton-le-Willows">
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
                Expert Roof Cleaning Services in Newton-le-Willows: Protecting Your Most Important Asset
              </h2>
              
              <div className="prose prose-lg max-w-none" itemProp="articleBody">
                <p className="text-muted-foreground text-lg leading-relaxed mb-6">
                  Your roof represents one of your property's most significant investments, yet it's constantly exposed to <strong>Newton-le-Willows' challenging weather conditions</strong>—an average annual rainfall of 900mm, high humidity levels, and variable temperatures that create the perfect environment for organic growth. Moss (<em>Bryophyta</em>), algae (<em>Gloeocapsa magma</em>), and lichen accumulate silently, compromising both your roof's structural integrity and visual appeal while potentially reducing property value by 5-10%.
                </p>
                
                <p className="text-muted-foreground leading-relaxed mb-6">
                  At <strong itemProp="provider" itemScope itemType="https://schema.org/LocalBusiness"><span itemProp="name">R.R.M Exterior Cleaning Specialist</span></strong>, we provide comprehensive <strong>professional roof cleaning services</strong> throughout Newton-le-Willows, utilizing advanced <strong>soft washing technology</strong> that protects your investment while extending your roof's operational lifespan by 5-10 years. Our <strong>biocidal treatment solutions</strong> are specifically formulated to eliminate organic contaminants while being safe for surrounding vegetation and drainage systems.
                </p>

                <div className="bg-blue-500/10 border-l-4 border-blue-500 p-6 my-6 rounded-r-lg">
                  <h3 className="font-semibold text-foreground mb-2 flex items-center gap-2">
                    <Droplets className="h-5 w-5 text-blue-500" />
                    Understanding Roof Contamination in Newton-le-Willows' Maritime Climate
                  </h3>
                  <p className="text-muted-foreground text-sm leading-relaxed">
                    Newton-le-Willows' location in Merseyside creates a <strong>maritime climate</strong> with mild temperatures (7-17°C average), high humidity (80%+ in winter months), and prevailing westerly winds that deposit airborne spores across roofing surfaces. This microclimate accelerates moss and algae colonization, particularly on north-facing roof slopes that receive less direct sunlight. Without professional intervention, moss can retain up to 20 times its dry weight in water, creating persistent moisture that degrades roofing materials through freeze-thaw cycles and chemical breakdown.
                  </p>
                </div>
                
                <p className="text-muted-foreground leading-relaxed mb-4">
                  Unlike destructive <strong>high-pressure washing</strong> (2000-3000 PSI) which can dislodge tiles, damage surface coatings, remove protective granules from asphalt shingles, and force water beneath roofing materials causing hidden water damage, our <strong>soft washing methodology</strong> employs low-pressure application (100-200 PSI) combined with pH-balanced, biodegradable cleaning agents. This approach safely removes moss, algae, lichen, black streaks, and organic debris without causing structural harm to tiles, slates, or membrane systems.
                </p>

                <h3 className="text-xl font-semibold text-foreground mt-8 mb-4">
                  Roof Materials We Clean in Newton-le-Willows
                </h3>
                <ul className="space-y-2 text-muted-foreground mb-6">
                  <li className="flex items-start gap-3">
                    <CheckCircle className="h-5 w-5 text-accent flex-shrink-0 mt-0.5" />
                    <span><strong>Concrete Tiles:</strong> Standard, interlocking, and pantile profiles commonly found in 1960s-2000s Newton-le-Willows properties</span>
                  </li>
                  <li className="flex items-start gap-3">
                    <CheckCircle className="h-5 w-5 text-accent flex-shrink-0 mt-0.5" />
                    <span><strong>Clay Tiles:</strong> Traditional terracotta and glazed clay tiles typical of Victorian and Edwardian terraced houses</span>
                  </li>
                  <li className="flex items-start gap-3">
                    <CheckCircle className="h-5 w-5 text-accent flex-shrink-0 mt-0.5" />
                    <span><strong>Natural Slate:</strong> Welsh slate roofs common in period properties requiring gentle cleaning techniques</span>
                  </li>
                  <li className="flex items-start gap-3">
                    <CheckCircle className="h-5 w-5 text-accent flex-shrink-0 mt-0.5" />
                    <span><strong>Artificial Slate:</strong> Fiber-cement and composite slate materials used in modern construction</span>
                  </li>
                  <li className="flex items-start gap-3">
                    <CheckCircle className="h-5 w-5 text-accent flex-shrink-0 mt-0.5" />
                    <span><strong>Asphalt Shingles:</strong> American-style shingles found on some contemporary Newton-le-Willows properties</span>
                  </li>
                  <li className="flex items-start gap-3">
                    <CheckCircle className="h-5 w-5 text-accent flex-shrink-0 mt-0.5" />
                    <span><strong>Metal Roofing:</strong> Corrugated, standing seam, and coated metal roof systems for commercial and agricultural buildings</span>
                  </li>
                  <li className="flex items-start gap-3">
                    <CheckCircle className="h-5 w-5 text-accent flex-shrink-0 mt-0.5" />
                    <span><strong>Flat Roofs:</strong> EPDM, TPO, felt, and GRP flat roofing systems requiring specialized cleaning protocols</span>
                  </li>
                </ul>
              </div>
            </section>

            {/* Enhanced Services Grid with more semantic detail */}
            <section className="mb-12 bg-secondary/30 rounded-lg p-8 border border-secondary">
              <h2 className="text-2xl font-bold text-foreground mb-6">
                Comprehensive Roof Cleaning Services in Newton-le-Willows
              </h2>
              <div className="grid md:grid-cols-2 gap-6">
                <div className="flex gap-4" itemScope itemType="https://schema.org/Service">
                  <CheckCircle className="h-6 w-6 text-accent flex-shrink-0 mt-1" />
                  <div>
                    <h3 className="font-semibold text-foreground mb-2" itemProp="name">
                      Professional Moss Removal & Treatment
                    </h3>
                    <p className="text-muted-foreground text-sm" itemProp="description">
                      Complete removal of moss (<em>Bryophyta</em> species including <em>Polytrichum commune</em> and <em>Ceratodon purpureus</em>) using specialized soft washing techniques. Our biocidal treatments penetrate moss root systems, killing growth at the source and preventing rapid recolonization. We safely remove moss without damaging tile surface coatings or dislodging ridge tiles.
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
                      Elimination of algae (<em>Gloeocapsa magma</em>) causing unsightly black streaks on asphalt shingles and dark discoloration on tiles. Our pH-balanced cleaning solutions break down algae colonies and their protective outer layers, removing visible staining while treating subsurface contamination. Particularly effective on north-facing slopes with limited sun exposure.
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
                      Treatment of lichen (<em>symbiotic organisms</em> comprising algae and fungi) which penetrates porous roofing surfaces through chemical etching. Lichen roots secrete acids that degrade tile and slate surfaces over time. Our specialized biocidal treatments kill lichen at the root level, with dead material naturally weathering away over subsequent months, preserving roof surface integrity.
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
                      Low-pressure cleaning systems (100-200 PSI vs. 2000-3000 PSI pressure washing) utilizing professional-grade surfactants, biocides (sodium hypochlorite-based or quaternary ammonium compounds), and biodegradable detergents. This chemical action method provides longer-lasting results (2-3 years) compared to pressure washing alone, while protecting delicate roof materials from mechanical damage.
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
                      Detailed 25-point roof inspection included with every cleaning service: identification of cracked, slipped, or missing tiles; assessment of mortar condition on ridge and hip tiles; examination of lead flashing, valley gutters, and chimney weatherproofing; checking for signs of water ingress, rot, or structural damage; evaluation of soffit and fascia condition; photographic documentation of all findings.
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
                      Removal of moss, debris, and biological matter from gutters, downpipes, and valley gutters during roof cleaning. Blocked gutters can cause water overflow, leading to fascia rot, wall penetration damp, and foundation issues. We ensure complete drainage system functionality, with downpipe flushing and gutter outlet verification included as standard.
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
                      Professional roof cleaning for all property types: terraced houses, semi-detached homes, detached properties, bungalows, flat conversions, commercial premises, industrial units, agricultural buildings, care homes, schools, and public buildings throughout Newton-le-Willows and surrounding areas within a 15-mile radius.
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
                      Preventative maintenance contracts providing scheduled roof inspections and treatments to prevent organic regrowth. Annual or bi-annual programs include priority scheduling, discounted rates, and proactive monitoring to identify and address issues before they become costly problems. Ideal for landlords, property managers, and commercial property owners.
                    </p>
                  </div>
                </div>
              </div>
            </section>

            {/* Enhanced Benefits Section with deeper context */}
            <section className="mb-12">
              <h2 className="text-2xl font-bold text-foreground mb-6">
                The Critical Importance of Professional Roof Cleaning in Newton-le-Willows
              </h2>
              <div className="space-y-6">
                <div className="border-l-4 border-accent pl-6">
                  <h3 className="text-lg font-semibold text-foreground mb-2 flex items-center gap-2">
                    <Droplets className="h-5 w-5 text-accent" />
                    Prevent Water Damage, Leaks, and Interior Deterioration
                  </h3>
                  <p className="text-muted-foreground mb-3">
                    Accumulated moss acts like a sponge, retaining moisture at the tile/slate interface for extended periods. In Newton-le-Willows' climate with 900mm annual rainfall and 80%+ winter humidity, this persistent moisture causes:
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
                    By removing damaging organic growth, professional <strong>roof maintenance</strong> preserves material integrity, prevents premature failure, and defers expensive roof replacement (£5,000-£15,000+ for typical Newton-le-Willows properties). The £300-£600 investment in professional cleaning every 2-3 years saves thousands in replacement costs.
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
                    <li className="flex gap-2"><span className="text-accent">•</span> <span><strong>Valuation effects:</strong> Properties with visible roof contamination often receive survey comments and valuation reductions of 3-7% (£6,000-£14,000 on £200,000 property)</span></li>
                    <li className="flex gap-2"><span className="text-accent">•</span> <span><strong>Buyer negotiations:</strong> Dirty, moss-covered roofs signal deferred maintenance, prompting price negotiations and buyer concerns about hidden issues</span></li>
                    <li className="flex gap-2"><span className="text-accent">•</span> <span><strong>Mortgage surveys:</strong> RICS surveyors flag heavily contaminated roofs, potentially causing mortgage lender concerns or requiring retention amounts</span></li>
                    <li className="flex gap-2"><span className="text-accent">•</span> <span><strong>Rental properties:</strong> Clean, well-maintained roofs attract higher-quality tenants and justify premium rents</span></li>
                  </ul>
                  <p className="text-muted-foreground mt-3 font-medium">
                    Professional roof cleaning provides excellent ROI, typically returning 3-5x the investment in increased property appeal and avoiding valuation reductions.
                  </p>
                </div>

                <div className="border-l-4 border-accent pl-6">
                  <h3 className="text-lg font-semibold text-foreground mb-2 flex items-center gap-2">
                    <Shield className="h-5 w-5 text-accent" />
                    Safety, Insurance, and Professional Equipment
                  </h3>
                  <p className="text-muted-foreground mb-3">
                    Working at height on roofs presents significant safety hazards requiring professional expertise and equipment:
                  </p>
                  <ul className="space-y-2 text-muted-foreground text-sm ml-4">
                    <li className="flex gap-2"><span className="text-accent">•</span> <span><strong>Fall protection systems:</strong> Professional harnesses, anchor points, and edge protection compliant with HSE Working at Height Regulations 2005</span></li>
                    <li className="flex gap-2"><span className="text-accent">•</span> <span><strong>Ladder safety:</strong> Industrial ladders with stabilizers, correct pitch angles (75°), and 3-point contact maintained at all times</span></li>
                    <li className="flex gap-2"><span className="text-accent">•</span> <span><strong>Roof walking equipment:</strong> Specialist roof ladders, crawl boards, and anti-slip footwear to distribute weight and prevent tile damage</span></li>
                    <li className="flex gap-2"><span className="text-accent">•</span> <span><strong>Public liability insurance:</strong> £5 million+ coverage protecting property owners from liability for accidents or property damage</span></li>
                    <li className="flex gap-2"><span className="text-accent">•</span> <span><strong>Employer's liability insurance:</strong> £10 million coverage protecting workers and property owners from workplace injury claims</span></li>
                    <li className="flex gap-2"><span className="text-accent">•</span> <span><strong>Risk assessments:</strong> Comprehensive site-specific risk assessments and method statements (RAMS) for every project</span></li>
                  </ul>
                  <p className="text-muted-foreground mt-3 font-medium text-sm">
                    DIY roof cleaning presents serious injury risks (25+ annual DIY roof fall deaths in UK) and potential property damage. Professional contractors have training, equipment, insurance, and expertise to work safely on all roof types and pitches.
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
                    Our soft washing system uses <strong>surfactants</strong> (surface-active agents that reduce water surface tension for better penetration), <strong>biocides</strong> (algaecides and fungicides that kill organic growth at cellular level), and <strong>biodegradable detergents</strong> that break down safely without harming plants, wildlife, or drainage systems. The chemical action method kills growth at root level, providing longer protection compared to mechanical pressure washing alone.
                  </p>
                </div>
              </div>
            </section>

            {/* Enhanced Risks Section with more specific data */}
            <section className="mb-12 bg-red-500/5 border border-red-500/20 rounded-lg p-8">
              <div className="flex gap-4 mb-6">
                <AlertCircle className="h-8 w-8 text-red-500 flex-shrink-0" />
                <h2 className="text-2xl font-bold text-foreground">
                  Documented Risks of Neglecting Professional Roof Maintenance in Newton-le-Willows
                </h2>
              </div>
              <ul className="space-y-3 text-muted-foreground">
                <li className="flex gap-3">
                  <span className="text-red-500 font-bold">•</span>
                  <span><strong>Water Ingress & Interior Damage:</strong> Moss and debris retention causes moisture accumulation leading to tile degradation, underlayment failure, batten rot, and interior water damage. Average cost of leak-related repairs in Newton-le-Willows properties: £3,500-£8,000 including ceiling replacement, insulation renewal, and electrical work</span>
                </li>
                <li className="flex gap-3">
                  <span className="text-red-500 font-bold">•</span>
                  <span><strong>Structural Deterioration:</strong> Accumulated organic matter adds 100-300kg of unnecessary weight to roof structures (equivalent to 2-6 adults). Combined with moisture retention, this causes timber decay, rafter damage, and potential structural failure in severe cases</span>
                </li>
                <li className="flex gap-3">
                  <span className="text-red-500 font-bold">•</span>
                  <span><strong>Mold, Spores & Health Implications:</strong> Organic roof contamination creates ideal conditions for mold species including <em>Stachybotrys chartarum</em> (black mold) and <em>Aspergillus</em>. Spores enter living spaces through roof voids affecting indoor air quality and causing respiratory issues, allergic reactions, and exacerbating asthma (particularly problematic for children, elderly, and immunocompromised individuals)</span>
                </li>
                <li className="flex gap-3">
                  <span className="text-red-500 font-bold">•</span>
                  <span><strong>Property Devaluation:</strong> Survey reports noting roof contamination commonly result in 3-7% property valuation reductions (£6,000-£14,000 on £200,000 property). Buyers frequently negotiate price reductions of £5,000-£10,000 when roofs show visible neglect, viewing them as indicators of wider property maintenance issues</span>
                </li>
                <li className="flex gap-3">
                  <span className="text-red-500 font-bold">•</span>
                  <span><strong>Premature Roof Replacement:</strong> Neglected roofs typically require replacement 10-15 years earlier than well-maintained roofs. Full roof replacement costs in Newton-le-Willows: £5,000-£8,000 (terraced), £7,000-£12,000 (semi-detached), £10,000-£15,000+ (detached). Regular £300-£600 cleaning every 2-3 years prevents premature replacement saving £5,000-£10,000+</span>
                </li>
                <li className="flex gap-3">
                  <span className="text-red-500 font-bold">•</span>
                  <span><strong>Insurance Complications:</strong> Some home insurance policies contain clauses requiring reasonable property maintenance. Severe roof neglect can complicate claims related to water damage or roof failure, with insurers potentially reducing payouts or denying claims citing lack of preventative maintenance</span>
                </li>
                <li className="flex gap-3">
                  <span className="text-red-500 font-bold">•</span>
                  <span><strong>Energy Efficiency Reduction:</strong> Organic contamination and moisture retention can affect roof insulation performance by reducing its R-value (thermal resistance), potentially increasing heating costs by 5-10% in affected properties during Newton-le-Willows' cold winter months</span>
                </li>
              </ul>
            </section>

            {/* Enhanced Frequency Section with more scientific context */}
            <section className="mb-12">
              <h2 className="text-2xl font-bold text-foreground mb-4">
                Professional Roof Cleaning Frequency: Optimizing Maintenance Schedules for Newton-le-Willows Properties
              </h2>
              <div className="bg-secondary/30 border border-secondary rounded-lg p-6 mb-6">
                <h3 className="font-semibold text-foreground mb-3">
                  Recommended Cleaning Intervals Based on Property Factors
                </h3>
                <p className="text-muted-foreground leading-relaxed mb-4">
                  Most Newton-le-Willows residential properties benefit from <strong>professional roof cleaning every 2-3 years</strong>. However, optimal frequency varies based on several environmental and structural factors specific to your property location and characteristics.
                </p>
                
                <div className="space-y-4">
                  <div>
                    <h4 className="font-medium text-foreground mb-2">Factors Accelerating Contamination (Annual Cleaning Recommended):</h4>
                    <ul className="space-y-2 text-muted-foreground text-sm ml-4">
                      <li className="flex gap-2"><span className="text-accent">•</span> <span><strong>Tree proximity:</strong> Properties within 10 meters of trees experience 3-4x faster moss and algae colonization due to shade, falling debris, and airborne spores</span></li>
                      <li className="flex gap-2"><span className="text-accent">•</span> <span><strong>North-facing slopes:</strong> Receive less direct sunlight (UV radiation), maintaining higher moisture levels and creating ideal conditions for organic growth</span></li>
                      <li className="flex gap-2"><span className="text-accent">•</span> <span><strong>Poor drainage:</strong> Blocked gutters or inadequate roof pitch (&lt;15°) cause water ponding, accelerating moss establishment</span></li>
                      <li className="flex gap-2"><span className="text-accent">•</span> <span><strong>Sheltered locations:</strong> Properties in valleys or surrounded by taller buildings experience reduced wind exposure and slower drying after rainfall</span></li>
                      <li className="flex gap-2"><span className="text-accent">•</span> <span><strong>Porous materials:</strong> Concrete tiles and aged clay tiles absorb more moisture than newer glazed or slate materials, supporting faster biological colonization</span></li>
                      <li className="flex gap-2"><span className="text-accent">•</span> <span><strong>Historical contamination:</strong> Previously heavily contaminated roofs show faster regrowth from residual spores in tile interstices</span></li>
                    </ul>
                  </div>

                  <div>
                    <h4 className="font-medium text-foreground mb-2">Factors Reducing Contamination (2-3 Year Intervals Sufficient):</h4>
                    <ul className="space-y-2 text-muted-foreground text-sm ml-4">
                      <li className="flex gap-2"><span className="text-accent">•</span> <span><strong>South-facing slopes:</strong> Maximum sun exposure and UV radiation inhibit moss and algae growth</span></li>
                      <li className="flex gap-2"><span className="text-accent">•</span> <span><strong>Exposed locations:</strong> Properties on elevated or exposed sites benefit from increased wind flow and faster drying</span></li>
                      <li className="flex gap-2"><span className="text-accent">•</span> <span><strong>Steep pitch:</strong> Roofs with pitch &gt;35° shed water rapidly, reducing moisture retention</span></li>
                      <li className="flex gap-2"><span className="text-accent">•</span> <span><strong>Metal or slate materials:</strong> Non-porous surfaces with smooth finishes resist biological colonization better than textured concrete tiles</span></li>
                      <li className="flex gap-2"><span className="text-accent">•</span> <span><strong>Recent construction:</strong> New roofs typically remain clean for 3-5 years before initial treatment needed</span></li>
                    </ul>
                  </div>
                </div>

                <div className="bg-blue-500/10 border-l-4 border-blue-500 p-4 mt-6 rounded-r">
                  <h4 className="font-semibold text-foreground mb-2">Newton-le-Willows Climate Impact</h4>
                  <p className="text-muted-foreground text-sm leading-relaxed">
                    Newton-le-Willows' maritime climate with <strong>900mm annual rainfall</strong>, <strong>80%+ winter humidity</strong>, mild temperatures (7-17°C average), and prevailing westerly winds creates ideal conditions for rapid moss and algae colonization. Properties in this microclimate typically require more frequent cleaning than UK average (national recommendation: 3-5 years). Regular inspection and professional <strong>roof maintenance</strong> prevent costly damage before it occurs.
                  </p>
                </div>
              </div>

              <div className="bg-accent/10 border border-accent/30 rounded-lg p-6">
                <h3 className="font-semibold text-foreground mb-3 flex items-center gap-2">
                  <CheckCircle className="h-5 w-5 text-accent" />
                  Professional Recommendation: Annual Inspection Protocol
                </h3>
                <p className="text-muted-foreground text-sm leading-relaxed">
                  We recommend <strong>annual professional roof inspections</strong> for all Newton-le-Willows properties to identify contamination early, assess cleaning needs, detect maintenance issues (damaged tiles, failed flashing, gutter problems), and establish optimal cleaning schedules based on your specific property characteristics. Annual inspections (typically 30-45 minutes) allow proactive maintenance planning and prevent emergency repairs. Contact us for annual inspection scheduling: <a href="tel:+447845463877" className="text-accent hover:text-primary transition-colors font-medium">07845 463877</a>
                </p>
              </div>
            </section>

            {/* Enhanced FAQ Section with more comprehensive answers */}
            <section className="mb-12" itemScope itemType="https://schema.org/FAQPage">
              <h2 className="text-2xl font-bold text-foreground mb-6">
                Frequently Asked Questions About Professional Roof Cleaning in Newton-le-Willows
              </h2>
              <div className="space-y-4">
                <details className="bg-secondary/30 rounded-lg p-6 cursor-pointer group" itemScope itemProp="mainEntity" itemType="https://schema.org/Question">
                  <summary className="font-semibold text-foreground flex justify-between items-center" itemProp="name">
                    Is soft washing safe for all roof types in Newton-le-Willows?
                    <span className="text-accent group-open:rotate-180 transition-transform">▼</span>
                  </summary>
                  <div className="text-muted-foreground mt-4 space-y-2" itemScope itemProp="acceptedAnswer" itemType="https://schema.org/Answer">
                    <p itemProp="text">
                      Yes, soft washing is specifically designed to be safe for all roof types including concrete tiles, clay tiles, natural slate, artificial slate, asphalt shingles, and metal roofing. The low-pressure application (typically 100-200 PSI) combined with pH-balanced, biodegradable cleaning solutions effectively removes moss, algae, and organic growth without causing damage to roof materials or displacing tiles.
                    </p>
                    <p className="text-sm">
                      Unlike high-pressure washing (2000-3000 PSI) which can dislodge tiles, damage surface coatings, remove protective granules from asphalt shingles, and force water beneath roofing materials, soft washing relies on chemical action rather than mechanical force. Our cleaning agents contain surfactants (which improve solution penetration), biocides (which kill organisms at cellular level), and detergents (which aid in contaminant removal), all formulated to be safe for roofing materials while effectively eliminating biological growth.
                    </p>
                    <p className="text-sm">
                      We tailor our soft washing approach to each roof type: porous concrete tiles receive slightly longer dwell times for solution absorption; delicate natural slate receives gentler treatment to preserve surface patina; asphalt shingles are treated to avoid granule loss; metal roofs are cleaned with solutions that won't affect protective coatings. This material-specific approach ensures optimal cleaning results while maintaining roof integrity.
                    </p>
                  </div>
                </details>

                <details className="bg-secondary/30 rounded-lg p-6 cursor-pointer group" itemScope itemProp="mainEntity" itemType="https://schema.org/Question">
                  <summary className="font-semibold text-foreground flex justify-between items-center" itemProp="name">
                    Will professional roof cleaning damage my tiles or slates?
                    <span className="text-accent group-open:rotate-180 transition-transform">▼</span>
                  </summary>
                  <div className="text-muted-foreground mt-4 space-y-2" itemScope itemProp="acceptedAnswer" itemType="https://schema.org/Answer">
                    <p itemProp="text">
                      Professional soft washing will not damage tiles or slates when performed correctly by trained, experienced technicians using proper equipment and techniques. High-pressure washing can cause significant damage including dislodging tiles from fixings, removing protective surface coatings, stripping colored surface layers, creating cracks in freeze-thaw vulnerable materials, and forcing water beneath tiles causing hidden water damage. This is why we exclusively use gentle, low-pressure soft washing techniques with biodegradable cleaning solutions.
                    </p>
                    <p className="text-sm">
                      Our technicians are trained in proper roof walking techniques using specialist equipment (roof ladders, crawl boards, anti-slip footwear) to distribute weight and prevent tile damage during cleaning. We identify fragile or damaged tiles during pre-cleaning inspection and take extra precautions around these areas. Our soft washing system applies cleaning solutions at low pressure (similar to garden hose pressure) which is insufficient to dislodge or damage tiles.
                    </p>
                    <p className="text-sm">
                      For older or historic properties with delicate roofing materials (Victorian/Edwardian clay tiles, reclaimed slate, original stone tiles), we adjust our approach using even gentler application methods, longer solution dwell times (allowing chemical action rather than mechanical force), and additional protective measures. We've successfully cleaned thousands of roofs across Newton-le-Willows without causing tile damage.
                    </p>
                  </div>
                </details>

                <details className="bg-secondary/30 rounded-lg p-6 cursor-pointer group" itemScope itemProp="mainEntity" itemType="https://schema.org/Question">
                  <summary className="font-semibold text-foreground flex justify-between items-center" itemProp="name">
                    How long does professional roof cleaning take in Newton-le-Willows?
                    <span className="text-accent group-open:rotate-180 transition-transform">▼</span>
                  </summary>
                  <div className="text-muted-foreground mt-4 space-y-2" itemScope itemProp="acceptedAnswer" itemType="https://schema.org/Answer">
                    <p itemProp="text">
                      Most residential roof cleaning projects in Newton-le-Willows take between 3-6 hours depending on roof size, pitch angle, degree of contamination, and accessibility. A typical semi-detached house takes approximately 4 hours, while larger detached properties may require 6-8 hours. We provide accurate time estimates during the initial free inspection and quotation.
                    </p>
                    <p className="text-sm">
                      Time breakdown for typical Newton-le-Willows semi-detached property (100m² roof area): Site setup and safety equipment installation (30 minutes), Pre-cleaning inspection and photography (20 minutes), Gutter and downpipe clearing (45 minutes), Soft washing application - first treatment (60 minutes), Dwell time for chemical action (30 minutes), Soft washing rinse and second treatment if needed (45 minutes), Final inspection and cleanup (30 minutes), Client walkthrough and documentation (20 minutes). Total: approximately 4 hours.
                    </p>
                    <p className="text-sm">
                      Factors affecting duration include: Roof pitch - steeper roofs (&gt;35°) require additional safety measures and slower working; Contamination level - heavily moss-covered roofs need more thorough treatment and may require additional application; Roof complexity - multiple chimneys, dormers, or valley gutters increase cleaning time; Access - properties with poor access or parking restrictions require additional setup time. We work efficiently while maintaining safety and quality standards, and never rush jobs to meet arbitrary timeframes.
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
                      Professional roof cleaning removes existing moss, algae, and lichen, and treats surfaces with biocidal solutions to slow regrowth. However, in Newton-le-Willows' damp maritime climate with average annual rainfall of 900mm and 80%+ winter humidity, some organic regrowth is natural and inevitable over time. The biocidal treatment typically provides 2-3 years of protection before re-treatment is needed, though this varies based on property-specific factors.
                    </p>
                    <p className="text-sm">
                      Understanding moss biology helps explain regrowth patterns: Moss spreads through airborne spores which are constantly present in Newton-le-Willows' environment. These spores land on roofs and, given suitable conditions (moisture, shade, nutrients from atmospheric deposition), germinate and establish new colonies. Professional biocidal treatments kill existing moss and create hostile surface conditions that inhibit new spore germination for 2-3 years. However, as biocides gradually degrade through UV exposure, rainfall weathering, and natural breakdown, roofs eventually become susceptible to recolonization.
                    </p>
                    <p className="text-sm">
                      Factors affecting regrowth speed: North-facing slopes recontaminate faster (18-24 months) than south-facing slopes (36+ months) due to reduced sun exposure; Properties near trees experience faster regrowth (12-18 months) from increased shade and debris; Porous concrete tiles support faster recolonization than smooth slate or metal; Properties with poor drainage or gutter blockages see accelerated regrowth. <strong>Regular maintenance every 2-3 years is the most effective long-term prevention strategy</strong>, catching moss in early stages before it causes damage and being more cost-effective than allowing heavy contamination to develop.
                    </p>
                  </div>
                </details>

                <details className="bg-secondary/30 rounded-lg p-6 cursor-pointer group" itemScope itemProp="mainEntity" itemType="https://schema.org/Question">
                  <summary className="font-semibold text-foreground flex justify-between items-center" itemProp="name">
                    Can you clean roofs during rainy weather?
                    <span className="text-accent group-open:rotate-180 transition-transform">▼</span>
                  </summary>
                  <div className="text-muted-foreground mt-4 space-y-2" itemScope itemProp="acceptedAnswer" itemType="https://schema.org/Answer">
                    <p itemProp="text">
                      Light rain or drizzle does not prevent roof cleaning, as the cleaning solutions we use are designed to work effectively in damp conditions. However, heavy rainfall, strong winds (over 25mph), or conditions creating safety hazards may require rescheduling. We continuously monitor weather forecasts and will advise if conditions are unsuitable for safe working at height.
                    </p>
                    <p className="text-sm">
                      Our soft washing solutions contain surfactants that reduce surface tension, allowing them to adhere to roofing materials even in light rain. In fact, slightly damp conditions can actually enhance solution penetration into porous materials. However, heavy rainfall can dilute cleaning solutions before they have time to work, reducing effectiveness and requiring re-treatment. We typically avoid working in rainfall exceeding 2mm/hour.
                    </p>
                    <p className="text-sm">
                      Safety considerations trump all others: Heavy rain creates slippery walking surfaces increasing fall risk; Strong winds (25mph+) create instability when working on ladders or roofs; Poor visibility in heavy rain increases accident risk; Lightning forecasts within 15 miles require immediate work cessation. If weather deteriorates during work, we pause operations, secure the site, and resume when conditions improve. Given Newton-le-Willows' variable weather, we maintain flexible scheduling and communicate proactively about any weather-related delays or rescheduling needs.
                    </p>
                  </div>
                </details>

                <details className="bg-secondary/30 rounded-lg p-6 cursor-pointer group" itemScope itemProp="mainEntity" itemType="https://schema.org/Question">
                  <summary className="font-semibold text-foreground flex justify-between items-center" itemProp="name">
                    Do you offer comprehensive roof inspections?
                    <span className="text-accent group-open:rotate-180 transition-transform">▼</span>
                  </summary>
                  <div className="text-muted-foreground mt-4 space-y-2" itemScope itemProp="acceptedAnswer" itemType="https://schema.org/Answer">
                    <p itemProp="text">
                      Yes, a comprehensive professional roof inspection is included with every cleaning service at no additional charge. Our 25-point inspection covers: identification of damaged, loose, or missing tiles; assessment of mortar condition on ridge and hip tiles; examination of lead flashing and valley gutters; checking for signs of water ingress or rot; evaluation of soffit and fascia condition; chimney weatherproofing assessment; gutter and downpipe functionality; and comprehensive photographic documentation. Any repairs needed can be quoted separately.
                    </p>
                    <p className="text-sm">
                      Our inspection process: Pre-cleaning inspection photographs roof condition from multiple angles documenting all issues; During cleaning, our technicians work across the entire roof surface giving them unique access to identify problems invisible from ground level; Post-cleaning inspection documents results and any concerns requiring attention; We provide detailed written inspection report with photographs highlighting any issues; Repair quotations are provided for any work needed - from simple tile replacement to more complex repairs; Follow-up inspections can be scheduled to monitor concerning areas.
                    </p>
                    <p className="text-sm">
                      Common issues we identify: Missing or slipped tiles allowing water entry; Cracked or broken tiles requiring replacement; Deteriorating ridge tile mortar needing repointing; Failed or damaged flashing around chimneys or valleys; Signs of historical or active leaks (water staining on underside of tiles); Gutter damage or improper installation; Soffit or fascia rot requiring replacement; Inadequate ventilation causing condensation issues. Early identification of these problems allows cost-effective repairs before they escalate into major issues requiring extensive remedial work.
                    </p>
                  </div>
                </details>

                <details className="bg-secondary/30 rounded-lg p-6 cursor-pointer group" itemScope itemProp="mainEntity" itemType="https://schema.org/Question">
                  <summary className="font-semibold text-foreground flex justify-between items-center" itemProp="name">
                    What is the difference between pressure washing and soft washing for roofs?
                    <span className="text-accent group-open:rotate-180 transition-transform">▼</span>
                  </summary>
                  <div className="text-muted-foreground mt-4 space-y-2" itemScope itemProp="acceptedAnswer" itemType="https://schema.org/Answer">
                    <p itemProp="text">
                      Pressure washing uses high-pressure water (2000-3000 PSI) which can damage roof tiles, dislodge pointing, and force water beneath tiles causing leaks. Soft washing uses low pressure (100-200 PSI, similar to garden hose pressure) combined with specialized biodegradable cleaning solutions containing surfactants and biocides. This chemical action method breaks down organic growth at a molecular level, killing moss, algae, and lichen at the root, providing longer-lasting results (2-3 years) while protecting roof materials from mechanical damage.
                    </p>
                    <p className="text-sm">
                      Detailed comparison: <strong>Pressure washing</strong> relies on mechanical force to blast away contamination. This brute-force approach removes visible moss but damages tiles by stripping surface coatings, removing colored finishes, creating micro-cracks in tiles (which expand during freeze-thaw cycles), dislodging tiles from nails or clips, removing granules from asphalt shingles (reducing their UV protection), and forcing high-pressure water beneath tiles potentially causing hidden water damage to felt, battens, and roof structure. Results are short-lived (6-12 months) because moss roots remain in tile surface pores, allowing rapid regrowth.
                    </p>
                    <p className="text-sm">
                      <strong>Soft washing</strong> uses chemical action rather than pressure. Low-pressure application (100-200 PSI) applies cleaning solutions that penetrate moss structure, break down cell walls, kill organisms at root level, and treat surface pores preventing immediate regrowth. Solutions contain: Surfactants (reduce surface tension allowing better penetration into porous materials and moss structure); Biocides (sodium hypochlorite-based or quaternary ammonium compounds that kill moss, algae, fungi at cellular level); pH buffers (maintain optimal pH for cleaning effectiveness while being safe for materials); Biodegradable detergents (aid in removing dead organic matter). Treatment remains effective for 2-3 years, providing better value and longer protection than pressure washing.
                    </p>
                  </div>
                </details>

                <details className="bg-secondary/30 rounded-lg p-6 cursor-pointer group" itemScope itemProp="mainEntity" itemType="https://schema.org/Question">
                  <summary className="font-semibold text-foreground flex justify-between items-center" itemProp="name">
                    How much does professional roof cleaning cost in Newton-le-Willows?
                    <span className="text-accent group-open:rotate-180 transition-transform">▼</span>
                  </summary>
                  <div className="text-muted-foreground mt-4 space-y-2" itemScope itemProp="acceptedAnswer" itemType="https://schema.org/Answer">
                    <p itemProp="text">
                      Roof cleaning costs in Newton-le-Willows typically range from £300-£800 depending on factors including roof size (measured in square meters), roof pitch and accessibility, degree of moss and algae contamination, roof material type, and additional services like gutter cleaning or minor repairs. We provide free, no-obligation quotations following an on-site inspection where we assess your specific property requirements. This investment is significantly less than roof replacement costs (£5,000-£15,000+) and extends roof lifespan by years, providing excellent return on investment.
                    </p>
                    <p className="text-sm">
                      Typical pricing for Newton-le-Willows properties: <strong>Terraced house</strong> (60-80m² roof area): £300-£450; <strong>Semi-detached</strong> (80-120m² roof area): £400-£600; <strong>Detached house</strong> (120-180m² roof area): £550-£800; <strong>Large detached/bungalow</strong> (180m²+ roof area): £800-£1,200+. These prices include comprehensive cleaning, biocidal treatment, gutter clearing, professional inspection, and photographic documentation.
                    </p>
                    <p className="text-sm">
                      Factors affecting cost: <strong>Roof pitch</strong> - steeper roofs (&gt;35°) require additional safety equipment and slower working, increasing labor costs; <strong>Contamination level</strong> - heavily moss-covered roofs require more intensive treatment and may need multiple applications; <strong>Access</strong> - properties with poor access, parking restrictions, or requiring scaffolding incur additional costs; <strong>Roof complexity</strong> - multiple chimneys, dormers, skylights, or complex valley configurations increase cleaning time; <strong>Material type</strong> - some materials (e.g., delicate natural slate) require specialized treatment approaches; <strong>Additional services</strong> - gutter deep cleaning, downpipe repairs, or minor tile replacement can be included in comprehensive packages. We offer <strong>free quotations</strong> with detailed breakdowns and transparent pricing. Call <a href="tel:+447845463877" className="text-accent hover:text-primary transition-colors font-medium">07845 463877</a> to arrange your free inspection and quotation.
                    </p>
                  </div>
                </details>
              </div>
            </section>

            {/* Enhanced CTA Section */}
            <section className="bg-gradient-to-r from-accent/20 to-primary/20 rounded-lg p-8 border border-accent/30 text-center">
              <h2 className="text-2xl font-bold text-foreground mb-4">
                Protect Your Newton-le-Willows Roof Investment Today
              </h2>
              <p className="text-muted-foreground mb-6 max-w-2xl mx-auto">
                Don't wait for leaks, water damage, and costly repairs to occur. Contact <strong>R.R.M Exterior Cleaning Specialist</strong> for professional roof cleaning, moss removal, algae treatment, and comprehensive maintenance services throughout Newton-le-Willows, St Helens, Warrington, Wigan, and surrounding Merseyside areas. Free quotations and inspections available.
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
                Related Exterior Cleaning Services in Newton-le-Willows
              </h2>
              <div className="grid md:grid-cols-3 gap-6">
                <Link href="/services/gutter-cleaning/newton-le-willows" className="group p-6 bg-secondary/30 rounded-lg hover:bg-secondary/50 transition-colors border border-secondary">
                  <h3 className="font-semibold text-foreground group-hover:text-accent transition-colors mb-2">
                    Gutter Cleaning Newton-le-Willows
                  </h3>
                  <p className="text-sm text-muted-foreground mb-3">
                    Professional gutter cleaning, unblocking, repairs, and maintenance preventing water damage and fascia rot
                  </p>
                  <span className="text-accent text-sm flex items-center gap-1">
                    Learn more <ChevronRight className="h-4 w-4" />
                  </span>
                </Link>

                <Link href="/services/pressure-washing/newton-le-willows" className="group p-6 bg-secondary/30 rounded-lg hover:bg-secondary/50 transition-colors border border-secondary">
                  <h3 className="font-semibold text-foreground group-hover:text-accent transition-colors mb-2">
                    Pressure Washing Newton-le-Willows
                  </h3>
                  <p className="text-sm text-muted-foreground mb-3">
                    Deep cleaning for driveways, patios, paths, decking, and hard surfaces removing dirt, algae, and organic stains
                  </p>
                  <span className="text-accent text-sm flex items-center gap-1">
                    Learn more <ChevronRight className="h-4 w-4" />
                  </span>
                </Link>

                <Link href="/services/soft-washing/newton-le-willows" className="group p-6 bg-secondary/30 rounded-lg hover:bg-secondary/50 transition-colors border border-secondary">
                  <h3 className="font-semibold text-foreground group-hover:text-accent transition-colors mb-2">
                    Soft Washing Newton-le-Willows
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

            {/* Enhanced Local Info with more geographic context */}
            <section className="mt-12 pt-12 border-t border-secondary">
              <h2 className="text-2xl font-bold text-foreground mb-4">
                Professional Roof Cleaning Throughout Newton-le-Willows and Surrounding Areas
              </h2>
              <p className="text-muted-foreground leading-relaxed mb-6">
                Based in Newton-le-Willows, <strong>R.R.M Exterior Cleaning Specialist</strong> serves all residential and commercial properties throughout the town and surrounding areas. Whether you're located in Newton-le-Willows town center, Earlestown, Hermitage Green, Vulcan Village, Haydock, Golborne, Ashton-in-Makerfield, or anywhere within a 15-mile radius including St Helens, Warrington, Wigan, and Leigh, we provide professional roof cleaning services with local knowledge of regional building styles and climate challenges.
              </p>
              
              <div className="grid md:grid-cols-2 gap-6 mb-6">
                <div className="bg-secondary/30 border border-secondary rounded-lg p-6">
                  <h3 className="font-semibold text-foreground mb-3">Areas We Serve</h3>
                  <ul className="grid grid-cols-2 gap-2 text-sm text-muted-foreground">
                    <li className="flex items-center gap-2"><MapPin className="h-4 w-4 text-accent flex-shrink-0" /> Newton-le-Willows</li>
                    <li className="flex items-center gap-2"><MapPin className="h-4 w-4 text-accent flex-shrink-0" /> Earlestown</li>
                    <li className="flex items-center gap-2"><MapPin className="h-4 w-4 text-accent flex-shrink-0" /> Haydock</li>
                    <li className="flex items-center gap-2"><MapPin className="h-4 w-4 text-accent flex-shrink-0" /> Golborne</li>
                    <li className="flex items-center gap-2"><MapPin className="h-4 w-4 text-accent flex-shrink-0" /> St Helens</li>
                    <li className="flex items-center gap-2"><MapPin className="h-4 w-4 text-accent flex-shrink-0" /> Warrington</li>
                    <li className="flex items-center gap-2"><MapPin className="h-4 w-4 text-accent flex-shrink-0" /> Wigan</li>
                    <li className="flex items-center gap-2"><MapPin className="h-4 w-4 text-accent flex-shrink-0" /> Leigh</li>
                    <li className="flex items-center gap-2"><MapPin className="h-4 w-4 text-accent flex-shrink-0" /> Ashton-in-Makerfield</li>
                    <li className="flex items-center gap-2"><MapPin className="h-4 w-4 text-accent flex-shrink-0" /> Lowton</li>
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
                  As a Newton-le-Willows-based company, we understand the unique challenges facing local properties: the impact of <strong>Merseyside's maritime climate</strong> on roof contamination rates, common building styles and materials found in Victorian terraces and post-war estates, local drainage patterns and watershed issues, tree species common in the area (oak, sycamore, birch) and their impact on properties, and typical property types requiring specialized approaches. This local expertise ensures we provide the most effective roof cleaning solutions for your specific Newton-le-Willows property.
                </p>
              </div>
            </section>

          </div>
        </div>
      </main>
    </Layout>
  );
}
