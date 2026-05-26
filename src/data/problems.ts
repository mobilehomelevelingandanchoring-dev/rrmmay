/**
 * Problem Entities Data
 * Semantic SEO Optimized Problem Pages
 * BERT/NLP Optimized | Solution-Focused | E-E-A-T Enhanced
 */

export interface ProblemEntity {
  slug: string;
  name: string;
  displayName: string;
  description: string;
  whatIs: string;
  causes: string;
  risksDangers: string; // Why not to ignore
  affectedSurfaces: string[];
  seasons?: string; // When it's worst
  solutionServices: string[]; // Service slugs that solve this
  preventionTips: string[];
  timelineToWorsening?: string; // How quickly it deteriorates
  metaTitle: string;
  metaDescription: string;
  faqs?: { q: string; a: string }[];
}

export const problems: Record<string, ProblemEntity> = {
  'moss-growth': {
    slug: 'moss-growth',
    name: 'Moss Growth',
    displayName: 'Moss Growth & Moss Removal',
    description: 'Moss growth is one of the most common exterior problems in the UK climate. This green or brown growth appears on surfaces exposed to moisture and shade, particularly roofs, gutters, patios, and driveways.',
    whatIs: 'Moss is a primitive plant that thrives in damp, cool conditions. It appears as a green or brown carpet-like growth that spreads across outdoor surfaces. Unlike algae, which forms a slimy coating, moss creates substantial growth that can reach several centimeters thick.',
    causes: 'Moss grows because our North West climate provides perfect conditions—regular rainfall, high humidity, and frequent shade create the damp environment moss needs. Tree coverage, gutters that retain water, and poorly draining surfaces all accelerate moss growth. North-facing properties and areas under tree canopies are particularly susceptible.',
    risksDangers: 'Moss creates multiple risks. It makes surfaces slippery and creates fall hazards, particularly on roofs and patios. It retains moisture against underlying surfaces, leading to accelerated deterioration, algae growth, and eventual structural damage. On roofs, moss buildup prevents proper water drainage and can cause leaks. Left unchecked, moss infestations become progressively worse and more expensive to treat.',
    affectedSurfaces: ['roof-tiles', 'gutters', 'patios', 'driveways', 'block-paving', 'tarmac', 'stone', 'concrete', 'timber'],
    seasons: 'Moss grows year-round but becomes most visible in autumn and winter when conditions are dampest. Spring growth accelerates as temperatures warm.',
    solutionServices: ['soft-washing', 'roof-cleaning', 'gutter-cleaning', 'patio-cleaning', 'driveway-cleaning'],
    preventionTips: [
      'Keep gutters clear and functional—blocked gutters create perfect moss conditions',
      'Trim overhanging tree branches to increase sunlight and air circulation',
      'Ensure proper drainage on patios and driveways',
      'Consider moss-resistant paints or coatings on vulnerable surfaces',
      'Regular professional cleaning prevents moss from establishing thick growth'
    ],
    timelineToWorsening: 'Moss typically becomes visible within 3-6 months of ideal conditions. Once established, it spreads and thickens rapidly. Within a year, a light coating can become 2-3 cm thick, creating serious hazards and structural risks.',
    metaTitle: 'Moss Growth & Removal | Professional Cleaning Solution',
    metaDescription: 'Moss on roof, patio, or driveway? Learn causes and get professional moss removal. Prevent moss growth with expert cleaning service.',
    faqs: [
      {
        q: 'Why is moss such a common problem in the North West?',
        a: 'Our climate is perfect for moss growth. Regular rainfall, high humidity, and many shaded properties create the exact conditions moss needs. This is why moss is more common here than in drier regions.'
      },
      {
        q: 'Is moss just cosmetic or does it cause real damage?',
        a: 'Moss is far more than cosmetic. It retains moisture against surfaces, accelerating decay. On roofs, it blocks water drainage and can cause leaks. On patio stones, it creates slip hazards. Professional removal prevents these serious problems.'
      },
      {
        q: 'Can I remove moss myself?',
        a: 'DIY moss removal is possible but risky. Roof moss requires dangerous ladder work. DIY cleaning often misses deep moss roots, leading to rapid regrowth. Professional soft washing removes moss completely and treats underlying surfaces to prevent rapid regrowth.'
      },
      {
        q: 'How often do I need professional moss removal?',
        a: 'This depends on your property\'s shade and drainage. North-facing properties under trees might need annual treatment. Properties in open, sunlit areas might only need cleaning every 2-3 years. We recommend professional inspection to assess your specific situation.'
      },
      {
        q: 'What\'s the difference between moss treatment and just power washing?',
        a: 'Standard pressure washing can remove moss but often damages surfaces and doesn\'t prevent regrowth. Professional soft washing uses appropriate pressure and biocides to remove moss safely and effectively while treating surfaces to slow future growth.'
      }
    ]
  },

  'algae-discoloration': {
    slug: 'algae-discoloration',
    name: 'Algae & Discoloration',
    displayName: 'Algae Staining & Black Spot Discoloration',
    description: 'Algae and discoloration appear as black, green, or brown staining on exterior surfaces. This common problem accelerates rapidly in damp conditions and significantly impacts property appearance.',
    whatIs: 'Algae discoloration forms as single-celled or colonial algae colonize exterior surfaces. Unlike moss, algae creates a slimy, staining growth rather than thick carpet growth. Black algae (most common in UK) appears as dark staining that makes surfaces look dirty and aged.',
    causes: 'Algae thrives in damp conditions with regular moisture exposure. Wind-driven rain on north-facing surfaces, spray from gutters, and poor drainage all encourage algae growth. Shaded areas with reduced sunlight create ideal conditions. Gutters, roof tiles, render, and patios are particularly vulnerable.',
    risksDangers: 'While less immediately hazardous than moss, algae staining significantly impacts property appearance and marketability. The dark staining makes properties look neglected and aged. Under staining, moisture accelerates surface deterioration. Repeated algae growth indicates underlying moisture problems that need addressing.',
    affectedSurfaces: ['roof-tiles', 'render', 'brick', 'stone', 'gutters', 'concrete', 'patios'],
    seasons: 'Algae grows year-round but appears most visible in spring and summer when moisture levels peak.',
    solutionServices: ['soft-washing', 'roof-cleaning', 'render-cleaning', 'patio-cleaning'],
    preventionTips: [
      'Improve drainage to reduce moisture exposure',
      'Keep gutters clean to prevent spray and moisture problems',
      'Trim vegetation to increase sunlight and air circulation',
      'Apply algae-resistant coatings to vulnerable surfaces',
      'Regular professional cleaning prevents discoloration from setting'
    ],
    metaTitle: 'Algae Staining & Black Spot Removal | Professional Cleaning',
    metaDescription: 'Black algae staining on roof, render, or patio? Professional algae removal stops discoloration. Expert cleaning solution.',
    faqs: [
      {
        q: 'What causes black staining on my roof and walls?',
        a: 'Black or green staining is usually algae growth caused by moisture exposure. North-facing surfaces, shaded areas, and those near gutters are most vulnerable. This is common in damp climates like ours.'
      },
      {
        q: 'Does algae damage the underlying surface?',
        a: 'Yes. Algae holds moisture against surfaces, accelerating deterioration. Under the staining, render and mortar begin breaking down. Professional removal stops this damage process.'
      },
      {
        q: 'Can algae come back quickly?',
        a: 'In optimal moisture conditions, regrowth can occur within 12-18 months. Professional soft washing includes treatments that slow algae regrowth. Addressing underlying moisture issues is key to long-term prevention.'
      }
    ]
  },

  'lichen-growth': {
    slug: 'lichen-growth',
    name: 'Lichen Growth',
    displayName: 'Lichen Removal & Control',
    description: 'Lichen appears as crusty, colored growth on exterior surfaces. While slower-growing than moss or algae, lichen causes significant property deterioration if left untreated.',
    whatIs: 'Lichen is a composite organism made of fungus and algae living together. It appears as crusty growth in orange, grey, green, or black colors. Unlike moss, lichen growth is very slow but can persist for many years.',
    causes: 'Lichen grows in clean air areas exposed to moisture and established on hard surfaces. It thrives on brick, stone, and concrete. Slow growth means lichen-covered properties are often older or long-neglected.',
    risksDangers: 'Although slow-growing, lichen penetrates surface structure. On natural stone and brick, it erodes mortar and material. Long-term lichen growth can compromise structural integrity. Property appearance is significantly impacted.',
    affectedSurfaces: ['brick', 'stone', 'concrete', 'slate-roofs', 'timber'],
    solutionServices: ['soft-washing', 'render-cleaning', 'roof-cleaning'],
    preventionTips: [
      'Regular professional cleaning prevents lichen establishment',
      'Control moisture around surfaces to discourage growth',
      'Apply sealers to vulnerable materials'
    ],
    metaTitle: 'Lichen Growth Removal | Professional Stone & Brick Cleaning',
    metaDescription: 'Lichen growth on brick, stone, or roof? Professional removal prevents structural damage. Expert cleaning service.'
  },

  'black-spot-mold': {
    slug: 'black-spot-mold',
    name: 'Black Spot & Mold Growth',
    displayName: 'Black Mold & Fungal Growth Removal',
    description: 'Black spot and mold growth indicates moisture problems. This biological growth creates health risks and accelerates surface deterioration.',
    whatIs: 'Black mold and spot growth are fungal colonies that appear as black or very dark discoloration. Unlike moss or algae, mold indicates serious moisture issues and can create health concerns.',
    causes: 'Black mold grows where moisture is trapped against surfaces. Poor guttering, damaged render, missing pointing, and inadequate drainage create conditions for mold. North-facing damp walls are particularly vulnerable.',
    risksDangers: 'Mold growth indicates moisture problems affecting underlying surfaces. Long-term exposure can be associated with health concerns. The presence of black mold significantly impacts property value and marketability. Underlying moisture damage can be extensive.',
    affectedSurfaces: ['render', 'brick', 'concrete', 'timber', 'gutters', 'soffits'],
    solutionServices: ['soft-washing', 'render-cleaning'],
    preventionTips: [
      'Address underlying moisture issues—mold is a symptom, not just a cosmetic problem',
      'Maintain gutters and drainage to prevent moisture',
      'Ensure adequate ventilation',
      'Repair damaged render or mortar promptly'
    ],
    metaTitle: 'Black Mold & Fungal Growth Removal | Health & Structural Protection',
    metaDescription: 'Black mold on render or walls? Professional removal addresses moisture problems. Protect health and property.'
  },

  'pollution-staining': {
    slug: 'pollution-staining',
    name: 'Pollution & Weather Staining',
    displayName: 'Industrial Pollution & Staining Removal',
    description: 'Pollution deposits from traffic and industrial sources create staining on exterior surfaces. These deposits accelerate deterioration and significantly impact property appearance.',
    whatIs: 'Pollution staining appears as brown, grey, or black deposits on building facades and surfaces. Wind-blown pollution particles land on surfaces and bond through moisture and weathering.',
    causes: 'Urban and industrial areas mean pollution exposure from vehicle exhaust, industrial emissions, and atmospheric particles. These deposits accumulate gradually and become increasingly resistant to removal.',
    risksDangers: 'Pollution deposits are acidic and damage underlying materials. Pollution stains make properties look neglected and aged, impacting value and marketability. The deposits accelerate material degradation.',
    affectedSurfaces: ['render', 'brick', 'stone', 'concrete', 'glass', 'gutters'],
    seasons: 'Staining is worse in winter when atmospheric pollution levels peak and rainfall is heavy.',
    solutionServices: ['soft-washing', 'render-cleaning', 'window-cleaning', 'driveway-cleaning'],
    preventionTips: [
      'Regular cleaning removes deposits before they bond permanently',
      'Protective coatings can slow staining accumulation',
      'Address drainage issues that concentrate pollution'
    ],
    metaTitle: 'Pollution Stain Removal | Industrial & Traffic Deposit Cleaning',
    metaDescription: 'Pollution staining on render, brick, or windows? Professional removal stops deterioration. Expert cleaning.'
  },

  'grime-dirt-accumulation': {
    slug: 'grime-dirt-accumulation',
    name: 'Grime & Dirt Accumulation',
    displayName: 'General Grime, Dirt & Soiling',
    description: 'Grime and dirt accumulation makes properties look old and neglected. Regular cleaning prevents this buildup and maintains property value and curb appeal.',
    whatIs: 'Grime is the combination of dirt, dust, pollution, and weathered material that accumulates on exterior surfaces over time. Unlike algae or moss, grime is non-biological but impacts appearance significantly.',
    causes: 'Wind-blown dirt, atmospheric particles, and weathering create grime. All exterior surfaces gradually accumulate this combination of debris and weathered material.',
    risksDangers: 'While not immediately hazardous, grime accumulation makes properties look aged and neglected. It holds moisture against surfaces, accelerating deterioration. Grime can hide developing problems.',
    affectedSurfaces: ['concrete', 'paving', 'driveways', 'render', 'brick'],
    solutionServices: ['pressure-washing', 'driveway-cleaning', 'patio-cleaning'],
    preventionTips: [
      'Regular professional cleaning prevents excessive buildup',
      'Annual pressure washing maintains appearance',
      'Proper drainage reduces water-carried grime'
    ],
    metaTitle: 'Professional Grime & Dirt Removal | Pressure Washing Service',
    metaDescription: 'Remove grime and dirt buildup. Professional pressure washing restores appearance. Maintain property value.'
  },

  'oil-stains': {
    slug: 'oil-stains',
    name: 'Oil & Traffic Stains',
    displayName: 'Oil Stains & Petroleum Residue Removal',
    description: 'Oil stains from vehicle leaks and traffic create permanent-looking marks on driveways and parking areas. These stubborn stains require professional treatment.',
    whatIs: 'Oil stains are residue from vehicle leaks, fuel spills, and traffic pollution. These oily deposits soak into porous surfaces and resist standard cleaning.',
    causes: 'Vehicle leaks from parked cars, fuel spills, and traffic on the surface all create oil deposits. Porous surfaces like concrete and asphalt absorb oil deeply.',
    risksDangers: 'Oil stains significantly impact appearance and property value. While not immediately hazardous, oil creates slippery surfaces and prevents water drainage.',
    affectedSurfaces: ['concrete', 'asphalt', 'block-paving', 'tarmac'],
    solutionServices: ['pressure-washing', 'driveway-cleaning'],
    preventionTips: [
      'Address vehicle leaks promptly to prevent staining',
      'Clean spills immediately before they soak in',
      'Apply protective sealers to reduce oil absorption',
      'Regular professional cleaning prevents permanent staining'
    ],
    metaTitle: 'Oil & Traffic Stain Removal | Professional Driveway Cleaning',
    metaDescription: 'Remove oil stains from driveway. Professional cleaning removes stubborn petroleum residue. Restore appearance.'
  }
};

export default problems;
