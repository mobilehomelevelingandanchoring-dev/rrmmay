/**
 * Content Engine — generates all page text for service × location combinations
 * No placeholder text. All output is production-ready.
 */

import type { Service, Location, ContentBlock } from '@/types';
import { locations } from '@/data/locations';
import { services } from '@/data/services';

// ─── H1 pattern rotation ──────────────────────────────────────────────────────

function buildH1(service: Service, location: Location): string {
  const pattern = service.slug.length % 4;
  switch (pattern) {
    case 0:
      return `Professional ${service.name} in ${location.name}`;
    case 1:
      return `Expert ${service.name} — ${location.name} & Surrounding Areas`;
    case 2:
      return `${service.name} Services in ${location.name}, ${location.county}`;
    case 3:
    default:
      return `Trusted ${service.name} in ${location.name} — North West Specialists`;
  }
}

// ─── Intro section ────────────────────────────────────────────────────────────

function buildIntroBody(service: Service, location: Location): string {
  const minWords = location.tier === 1 ? 220 : location.tier === 2 ? 180 : 150;
  const hood1 = location.localNeighborhoods[0] ?? location.name;
  const hood2 = location.localNeighborhoods[1] ?? location.county;
  const hood3 = location.localNeighborhoods[2] ?? '';
  const commercial = location.commercialZones
    ? `\n\nCommercial properties across ${location.commercialZones} benefit from our scheduled maintenance contracts, ensuring facades, car parks, and entrances maintain a professional standard year-round.`
    : '';

  // Opening varies by location tier and service group to avoid identical structure
  const openings: Record<number, string> = {
    1: `${location.name} presents some of the most demanding exterior cleaning conditions in the North West — ${location.localChallenges.split('.')[0].toLowerCase()}. Across ${hood1}, ${hood2}, and throughout ${hood3 || location.county}, properties accumulate ${service.description.toLowerCase()} issues that compound year on year without professional intervention.`,
    2: `The exterior surfaces of ${location.name} properties face a consistent challenge: ${location.localChallenges.split('.')[0].toLowerCase()}. In streets across ${hood1} and ${hood2}, ${location.propertyTypes.split(',')[0]} stock shows the kind of biological staining and surface deterioration that only professional ${service.shortName.toLowerCase()} can properly address.`,
    3: `${location.name}'s ${location.climateNotes.split('.')[0].toLowerCase()} means exterior surfaces here rarely stay clean without professional intervention. Properties throughout ${hood1} and ${hood2} — particularly ${location.propertyTypes.split(',')[0]} — show the accelerated moss, algae, and grime accumulation that makes regular ${service.shortName.toLowerCase()} essential rather than optional.`,
  };

  const opening = openings[location.tier] ?? openings[3];

  const body = `${opening}

${location.description} The property mix spans ${location.propertyTypes}, and every surface type presents its own specific maintenance requirement for ${service.name.toLowerCase()}.

${location.climateNotes} For ${service.name.toLowerCase()}, this climate context matters enormously: biological growth establishes faster, oil and atmospheric deposits penetrate more deeply into porous surfaces, and the window for effective cleaning is correspondingly shorter during genuinely dry weather.

R.R.M External Cleaning Specialist has been operating from our Newton-le-Willows base since 2016, providing ${service.shortName.toLowerCase()} across ${location.name} and the wider ${location.county} area. Every job we complete in ${hood1} and the surrounding streets reflects our commitment to producing results that hold — backed by post-clean biocide treatment, professional equipment, and a genuine understanding of local conditions.${commercial}

${location.uniqueAngle}`;

  // Pad to minimum word count if needed
  const wordCount = body.split(/\s+/).length;
  if (wordCount < minWords) {
    return body + `\n\nOur ${service.name.toLowerCase()} service in ${location.name} uses ${service.equipment}, ensuring every ${location.propertyTypes.split(',')[0]} we treat receives the correct approach for its specific surface and condition. ${service.seasonalNote}`;
  }
  return body;
}

// ─── Service section subsections ─────────────────────────────────────────────

function buildServiceSubsections(
  service: Service,
  location: Location,
): { h3: string; body: string }[] {
  const surfaceList = [...service.surfaces];
  // Ensure exactly 4 subsections
  while (surfaceList.length < 4) {
    surfaceList.push(surfaceList[surfaceList.length - 1] ?? 'exterior surfaces');
  }
  const four = surfaceList.slice(0, 4);

  return four.map((surface, i) => {
    const variations = [
      `${service.name} for ${surface} is one of the most common requests we receive across ${location.name}. ${location.propertyTypes.split(',')[0]} properties in areas like ${location.localNeighborhoods[i % location.localNeighborhoods.length] ?? location.name} accumulate ${surface} deterioration that responds exceptionally well to our ${service.method === 'soft-wash' ? 'low-pressure biocidal' : service.method === 'pressure' ? 'professional pressure' : service.method === 'vacuum' ? 'industrial vacuum' : 'specialist'} approach. Using ${service.equipment.split(',')[0]}, we deliver consistent results across ${surface} installations throughout ${location.county}. ${service.seasonalNote.split('.')[0]}.`,
      `When ${location.name} properties present ${surface} cleaning challenges, our technicians select the appropriate technique from our full equipment range — ${service.equipment.split(',')[0]} — and apply the correct pressure and chemistry for the specific material. Properties in ${location.localNeighborhoods[(i + 1) % location.localNeighborhoods.length] ?? location.name} with ${surface} have benefited from our ${service.shortName.toLowerCase()} service, with results lasting significantly longer than basic DIY cleaning. ${service.seasonalNote.split('.')[0]}.`,
      `${surface.charAt(0).toUpperCase() + surface.slice(1)} in ${location.name}'s ${location.climateNotes.split('.')[0].toLowerCase().replace(/^[a-z]/, (c) => c)} environment deteriorates faster than in less exposed areas. Our ${service.name.toLowerCase()} for ${surface} addresses this by removing biological growth at the root rather than simply surface-washing — using ${service.equipment.split(',')[0]} to deliver treatment that lasts. Clients in ${location.localNeighborhoods[(i + 2) % location.localNeighborhoods.length] ?? location.name} report visible results maintained for 18–24 months post-treatment.`,
      `${location.name}'s ${surface} cleaning requirements align directly with our ${service.shortName.toLowerCase()} specialisation. The combination of ${location.localChallenges.split('.')[0].toLowerCase()} means ${surface} needs professional attention rather than periodic DIY maintenance. We apply ${service.equipment.split(',')[0]} with pressure settings calibrated specifically for ${surface}, ensuring thorough cleaning without surface damage. ${location.county} clients trust R.R.M for this service precisely because we understand the local conditions that drive surface deterioration.`,
    ];

    return {
      h3: `${service.shortName} for ${surface.charAt(0).toUpperCase() + surface.slice(1)} in ${location.name}`,
      body: variations[i % 4],
    };
  });
}

// ─── Related services section ─────────────────────────────────────────────────

function buildRelatedServices(
  service: Service,
  location: Location,
): { name: string; href: string; blurb: string }[] {
  const serviceMap = new Map(services.map((s) => [s.slug, s]));

  const blurbs: Record<string, string> = {
    'algae-removal': `Eliminate green and black algae from all exterior surfaces in ${location.name} using biocidal soft-wash treatment.`,
    'bio-wash-treatment': `Post-clean biocide application that extends your clean results for 6–12 months across ${location.name} properties.`,
    'bin-store-cleaning': `Hot-water sanitising of refuse areas and bin enclosures for ${location.name} residential and commercial properties.`,
    'brick-cleaning': `Specialist low-pressure brick cleaning for ${location.name}'s Victorian and Edwardian housing stock.`,
    'car-park-cleaning': `Heavy-duty pressure washing of car park surfaces in ${location.name} — removing oil, tyre marks, and biological growth.`,
    'cladding-cleaning': `Professional cleaning of timber, composite, and metal cladding systems on ${location.name} properties.`,
    'commercial-exterior-cleaning': `Scheduled commercial exterior cleaning contracts for ${location.name} businesses, retail, and industrial premises.`,
    'concrete-cleaning': `High-performance pressure washing of concrete driveways, paths, and hard-standings across ${location.name}.`,
    'conservatory-cleaning': `Pure-water conservatory roof and frame cleaning that dramatically improves light in ${location.name} homes.`,
    'driveway-cleaning': `Complete driveway restoration for ${location.name} properties — block paving, tarmac, concrete, and natural stone.`,
    'driveway-sealing': `Protect your cleaned driveway in ${location.name} with professional sealant application lasting 3–5 years.`,
    'fascia-soffit-cleaning': `Restore bright white fascia boards and soffits across ${location.name} using water-fed pole cleaning.`,
    'fence-cleaning': `Professional fence cleaning for timber, composite, and concrete panels in ${location.name} gardens.`,
    'gutter-cleaning': `SkyVac industrial gutter clearing from ground level across ${location.name} — no dangerous ladder work.`,
    'gutter-guard-installation': `Prevent blocked gutters at ${location.name} properties with professional gutter guard mesh installation.`,
    'hard-surface-cleaning': `Professional rotary surface cleaner for all hard external surfaces in ${location.name}.`,
    'high-rise-cleaning': `Multi-storey exterior cleaning with water-fed poles and platform access across ${location.name}.`,
    'jet-washing': `Fast, effective jet washing for driveways, paths, and patios across ${location.name}.`,
    'moss-removal': `NFRC-compliant moss removal from roofs, paths, and walls throughout ${location.name}.`,
    'oil-stain-removal': `Trade-strength hot-water oil stain removal from ${location.name} driveways and car parks.`,
    'patio-cleaning': `Pressure washing restoration of patios and outdoor living areas across ${location.name}.`,
    'patio-sealing': `Penetrating sealant protection for natural stone and block paving patios in ${location.name}.`,
    'pointing-cleaning': `Low-pressure mortar joint cleaning for brick properties in ${location.name} without mortar damage.`,
    'pressure-washing': `Professional pressure washing for all hard external surfaces across ${location.name}.`,
    'render-cleaning': `Soft-wash render cleaning for all render types — monocouche, K-Rend, pebbledash — in ${location.name}.`,
    'render-sealing': `Breathable render sealant application in ${location.name} that prevents water ingress and algae regrowth.`,
    'roof-cleaning': `NFRC-compliant soft-wash roof cleaning — never high pressure — for all tile types in ${location.name}.`,
    'roof-moss-treatment': `Biocidal roof moss treatment that kills growth at the root across ${location.name} properties.`,
    'roof-sealing': `Breathable tile sealant for cleaned roofs in ${location.name} — slowing moss regrowth for years.`,
    'sandstone-cleaning': `Specialist low-pressure sandstone cleaning for patio and heritage surfaces in ${location.name}.`,
    'solar-panel-cleaning': `Deionised pure-water solar panel cleaning in ${location.name} — restore generating efficiency with no chemicals.`,
    'steps-path-cleaning': `Pressure washing of garden steps and paths in ${location.name} — critical slip hazard removal.`,
    'stone-cleaning': `pH-appropriate natural stone cleaning for limestone, granite, and slate surfaces in ${location.name}.`,
    'tarmac-cleaning': `Specialist tarmac pressure washing for residential and commercial surfaces across ${location.name}.`,
    'tarmac-sealing': `Bitumen emulsion tarmac sealing in ${location.name} — restores black colour, prevents degradation.`,
    'uPVC-cleaning': `Professional uPVC brightening for windows, doors, and fascias across ${location.name} properties.`,
    'wall-cleaning': `Garden wall and boundary wall cleaning for brick, render, and stone across ${location.name}.`,
    'water-fed-pole-cleaning': `Pure water pole cleaning for windows, cladding, and high-level surfaces in ${location.name}.`,
    'weed-treatment': `Residual herbicide treatment for driveway and patio joints in ${location.name} — pet safe after 48 hours.`,
    'window-cleaning': `Streak-free pure-water window cleaning for residential and commercial properties in ${location.name}.`,
  };

  return service.relatedServices
    .filter((slug) => serviceMap.has(slug))
    .slice(0, 4)
    .map((slug) => {
      const related = serviceMap.get(slug)!;
      return {
        name: related.name,
        href: `/services/${slug}/${location.slug}/`,
        blurb: blurbs[slug] ?? `Professional ${related.name.toLowerCase()} service in ${location.name}.`,
      };
    });
}

// ─── Trust section ────────────────────────────────────────────────────────────

function buildTrustBody(service: Service, location: Location): string {
  const tierVariants: Record<number, string> = {
    1: `R.R.M External Cleaning Specialist has operated from Newton-le-Willows since 2016, building a reputation across ${location.name} and the wider ${location.county} area through consistent, professional results and transparent pricing.

Every member of our team is employed directly — we never subcontract work to third parties. This means the same skilled technicians who quoted your job carry out your ${service.shortName.toLowerCase()} from start to finish, ensuring quality control at every stage.

We carry full public liability insurance for all residential and commercial work, providing complete peace of mind whether we are cleaning a domestic patio or maintaining a commercial estate across ${location.name}'s business zones. Our insurance documentation is available on request for commercial clients and property managers who require it for their records.

Our commitment to ${location.name} extends beyond the work itself: we operate 24 hours a day, seven days a week, accommodating early-morning commercial starts, evening residential visits, and emergency call-outs for blocked gutters or post-storm damage. There is no premium for out-of-hours scheduling across ${location.county}.

Commercial clients across ${location.name ?? 'the region'} benefit from our method statement and risk assessment service — provided free of charge for all contract work — and our ability to access scaffolding platforms and cherry picker equipment for high-level facades when standard pole reach is insufficient.

We provide free no-obligation quotations for every enquiry, with transparent itemised pricing and no hidden charges. Quotes are valid for 30 days and all work is completed to a satisfaction guarantee.`,

    2: `Choosing R.R.M for your ${service.shortName.toLowerCase()} in ${location.name} means engaging a genuinely local business with over eight years of continuous operation across ${location.county} and the wider North West.

We employ our own technicians — never subcontractors — ensuring consistent quality and accountability on every job. Our full public liability insurance covers all work across ${location.name}, and certificates are available on request.

Available 24 hours a day, seven days a week, we accommodate your schedule rather than asking you to accommodate ours. Free quotations are provided for all enquiries, with clear pricing and no hidden charges.

Our equipment represents a significant investment in professional-grade capability: ${service.equipment.split(',')[0]} and the full range of supporting tools and chemicals required to address every scenario. Results in ${location.name} consistently exceed what DIY equipment can achieve, and our biocide aftercare extends the clean period significantly.`,

    3: `R.R.M External Cleaning Specialist serves ${location.name} from our Newton-le-Willows base — just a short distance away — with the same professional standards we apply across all 21 locations in our service area.

Fully insured, established since 2016, and available 24/7, we offer free no-obligation quotations for all ${service.shortName.toLowerCase()} enquiries in ${location.name}. We never subcontract — the team you meet at quotation is the team that cleans your property. For more information about our coverage across ${location.county}, visit our <a href="/areas/${location.nearbyHubs[0] ?? 'newton-le-willows'}/" class="underline">${location.nearbyHubs[0] ? location.nearbyHubs[0].split('-').map((w: string) => w.charAt(0).toUpperCase() + w.slice(1)).join('-') : 'Newton-le-Willows'} service area page</a>.`,
  };

  return tierVariants[location.tier] ?? tierVariants[3];
}

// ─── CTA section ─────────────────────────────────────────────────────────────

function buildCtaBody(service: Service, location: Location): string {
  const postcodeList = location.postcodes.join(', ');
  return `R.R.M External Cleaning Specialist provides professional ${service.name.toLowerCase()} across ${location.name}, covering ${postcodeList} and all surrounding areas. We are available 24 hours a day, seven days a week — call <a href="tel:+447845463877">+44 7845 463877</a> now for your free no-obligation quote, or email us at rrmexternalcleaning@gmail.com.

Whether you need a one-off restoration clean or a scheduled maintenance programme, our team will assess your property, explain our recommended approach, and provide a clear written quotation. We take the time to understand your specific requirements before any work begins.

With over eight years of professional exterior cleaning experience across ${location.county}, R.R.M brings the equipment, expertise, and local knowledge to deliver results that last — not just on the day, but for the months ahead.`;
}

// ─── FAQ items ────────────────────────────────────────────────────────────────

function buildFaqItems(
  service: Service,
  location: Location,
): { question: string; answer: string }[] {
  const defaults: { question: string; answer: string }[] = [
    {
      question: `How much does ${service.name} cost in ${location.name}?`,
      answer: `Pricing for ${service.name.toLowerCase()} in ${location.name} depends on the surface area, condition, and specific requirements of the property. ${location.propertyTypes.split(',')[0]} properties typically fall within our standard residential pricing band. We provide free no-obligation quotations for all enquiries — call +44 7845 463877 or email rrmexternalcleaning@gmail.com for a same-week assessment.`,
    },
    {
      question: `How long does ${service.name} take for a typical ${location.name} property?`,
      answer: `${service.avgJobDuration}. Properties across ${location.name}'s ${location.propertyTypes.split(',')[0].toLowerCase()} stock typically fall within the lower end of this range for standard conditions. Heavily contaminated surfaces or large areas may require additional time, which we identify and communicate at the quotation stage.`,
    },
    {
      question: `Is ${service.name} safe for all surfaces found in ${location.name} homes?`,
      answer: `Our ${service.name.toLowerCase()} uses ${service.method === 'soft-wash' ? 'low-pressure soft-washing appropriate for porous and delicate surfaces' : service.method === 'pressure' ? 'calibrated pressure settings matched to each surface material' : service.method === 'vacuum' ? 'safe vacuum extraction without damaging surface contact' : 'chemical treatments matched to each material type'}. ${location.propertyTypes.split(',')[0]} — the most common property type in ${location.name} — responds well to our standard approach. We always inspect surfaces before beginning work.`,
    },
    {
      question: `How often should ${location.name} homeowners arrange ${service.name}?`,
      answer: `Given ${location.climateNotes.split('.')[0].toLowerCase()}, most ${location.name} properties benefit from ${service.name.toLowerCase()} every 12–24 months. ${location.localChallenges.split('.')[0]}. Properties in heavily shaded or north-facing positions may require more frequent attention. We advise on appropriate intervals at the quotation stage based on your specific property.`,
    },
    {
      question: `Do you offer commercial ${service.name} in ${location.name}?`,
      answer: `Yes — R.R.M provides commercial ${service.name.toLowerCase()} across ${location.name}'s ${location.commercialZones ?? 'business and retail areas'}. We carry full commercial public liability insurance, provide method statements and risk assessments on request, and can schedule work outside standard business hours to minimise disruption. Contact us to discuss scheduled maintenance contracts.`,
    },
    {
      question: `Do you cover ${location.name} and nearby areas?`,
      answer: `Yes — R.R.M External Cleaning Specialist covers all of ${location.name}, including ${location.localNeighborhoods.slice(0, 3).join(', ')}, and the wider ${location.county} area. Based in Newton-le-Willows (WA12), we typically reach ${location.name} within the same week. Call +44 7845 463877 or email rrmexternalcleaning@gmail.com for a free quote.`,
    },
    {
      question: `What postcodes do you cover for ${service.shortName.toLowerCase()} near ${location.name}?`,
      answer: `Our ${service.name.toLowerCase()} service covers ${location.postcodes.join(', ')} and all surrounding areas. We serve the full ${location.county} region — contact us if you are unsure whether your address falls within our range. Free no-obligation quotes are available year-round.`,
    },
  ];

  if (!location.faqOverrides || location.faqOverrides.length === 0) {
    return defaults;
  }

  // Merge overrides — replace by matching question prefix
  const result = [...defaults];
  for (const override of location.faqOverrides) {
    const idx = result.findIndex(
      (f) =>
        f.question.toLowerCase().includes(override.question.toLowerCase().substring(0, 20)),
    );
    if (idx >= 0) {
      result[idx] = override;
    } else {
      result.push(override);
    }
  }
  return result.slice(0, 7);
}

// ─── Nearby areas ─────────────────────────────────────────────────────────────

function buildNearbyAreas(
  service: Service,
  location: Location,
): { text: string; links: { label: string; href: string }[] } {
  const allSlugs = [
    ...location.nearbyHubs,
    ...location.spokeLocations,
  ].filter((s) => s !== location.slug);

  const locationMap = new Map(locations.map((l) => [l.slug, l]));
  const anchorPattern = service.slug.charCodeAt(0) % 5;

  const links = allSlugs
    .filter((s) => locationMap.has(s))
    .slice(0, 6)
    .map((slug) => {
      const loc = locationMap.get(slug)!;
      let label: string;
      switch (anchorPattern) {
        case 0:
          label = `${service.shortName} in ${loc.name}`;
          break;
        case 1:
          label = `exterior cleaning ${loc.name}`;
          break;
        case 2:
          label = `our ${loc.name} ${service.shortName.toLowerCase()} service`;
          break;
        case 3:
          label = `${loc.name} cleaning specialists`;
          break;
        case 4:
        default:
          label = `${service.shortName.toLowerCase()} in ${loc.name}`;
          break;
      }
      return { label, href: `/services/${service.slug}/${slug}/` };
    });

  return {
    text: `R.R.M External Cleaning Specialist covers ${location.name} and the surrounding areas across ${location.county}. We also provide ${service.shortName.toLowerCase()} services in:`,
    links,
  };
}

// ─── Main export ──────────────────────────────────────────────────────────────

export function generateContent(service: Service, location: Location): ContentBlock {
  const h1 = buildH1(service, location);
  const introBody = buildIntroBody(service, location);
  const subsections = buildServiceSubsections(service, location);
  const relatedItems = buildRelatedServices(service, location);
  const trustBody = buildTrustBody(service, location);
  const ctaBody = buildCtaBody(service, location);
  const nearbyAreas = buildNearbyAreas(service, location);
  const faqItems = buildFaqItems(service, location);

  return {
    h1,
    metaTitle: `${service.shortName} ${location.name} | R.R.M External Cleaning`.slice(0, 60),
    metaDescription: `Professional ${service.name.toLowerCase()} in ${location.name}. R.R.M External Cleaning — fully insured, 24/7, est. 2016. Free no-obligation quotes across ${location.county}.`.slice(
      0,
      155,
    ),
    introSection: {
      h2: `${service.name} in ${location.name} — Local Expertise Since 2016`,
      body: introBody,
    },
    serviceSection: {
      h2: `Our ${service.name} Service in ${location.name}`,
      subsections,
    },
    relatedServicesSection: {
      h2: `Related Cleaning Services in ${location.name}`,
      items: relatedItems,
    },
    trustSection: {
      h2: `Why ${location.name} Chooses R.R.M External Cleaning`,
      body: trustBody,
    },
    ctaSection: {
      h2: `Get a Free ${service.shortName} Quote in ${location.name}`,
      body: ctaBody,
    },
    nearbyAreas,
    faqItems,
  };
}
