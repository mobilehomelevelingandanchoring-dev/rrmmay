/**
 * Surface Entities Data
 * Semantic SEO Optimized Surface Pages
 * BERT/NLP Optimized | Material-Specific Expertise | E-E-A-T Enhanced
 */

export interface SurfaceEntity {
  slug: string;
  name: string;
  displayName: string;
  description: string;
  whatIs: string; // Material composition & properties
  commonProblems: string[]; // Problem entity slugs
  cleaningChallenges: string;
  appropriateServices: string[]; // Service slugs suitable for this surface
  pressureWarnings?: string; // Pressure limits & safety
  seasonalConcerns?: string;
  maintenanceTips: string[];
  materialProperties?: string; // Durability, porosity, etc.
  costConsiderations?: string;
  metaTitle: string;
  metaDescription: string;
  faqs?: { q: string; a: string }[];
}

export const surfaces: Record<string, SurfaceEntity> = {
  'concrete': {
    slug: 'concrete',
    name: 'Concrete',
    displayName: 'Concrete Driveways & Surfaces',
    description: 'Concrete is a durable popular surface for driveways and patios. However, it requires regular professional maintenance to prevent staining, algae growth, and deterioration.',
    whatIs: 'Concrete is a composite material made from cement, aggregates, and water. It\'s popular for driveways, patios, and foundations due to its durability and cost-effectiveness. While strong, concrete is porous and susceptible to staining and biological growth.',
    commonProblems: ['moss-growth', 'algae-discoloration', 'oil-stains', 'grime-dirt-accumulation', 'pollution-staining'],
    cleaningChallenges: 'Concrete\'s porosity allows stains to soak in, making early treatment critical. Once stains set, they\'re difficult to remove. Biological growth (moss, algae) penetrates concrete, requiring professional treatment to prevent deep damage. Oil stains can be particularly stubborn.',
    appropriateServices: ['pressure-washing', 'driveway-cleaning', 'soft-washing'],
    pressureWarnings: 'Concrete can be pressure washed but requires care to prevent surface damage or erosion. Very high pressure can expose aggregate or create erosion patterns. Professional technicians use appropriate pressure settings based on concrete age and condition.',
    seasonalConcerns: 'Winter freeze-thaw cycles damage concrete. Water trapped in concrete pores freezes and expands, creating cracks and damage. Fall cleaning prevents winter damage by removing moisture-holding debris.',
    maintenanceTips: [
      'Clean spills immediately before they stain and soak in',
      'Seal concrete every 2-3 years to reduce staining and water absorption',
      'Keep gutters clean to prevent water runoff staining',
      'Address cracks promptly before they expand in winter',
      'Remove moss and algae promptly to prevent deep penetration'
    ],
    materialProperties: 'Concrete is durable but porous. Its strength depends on mix quality and installation. Age affects durability—older concrete can be more fragile. Freeze-thaw cycles gradually degrade concrete.',
    costConsiderations: 'Concrete cleaning is relatively affordable. Sealing is moderately priced and extends concrete life significantly. Damage repair can be expensive, making prevention cost-effective.',
    metaTitle: 'Professional Concrete Cleaning | Driveway & Patio Maintenance',
    metaDescription: 'Professional concrete cleaning for driveways and patios. Remove stains, algae, and moss. Protect your concrete investment.',
    faqs: [
      {
        q: 'How often should concrete driveways be cleaned?',
        a: 'Most concrete benefits from annual professional cleaning, particularly in our damp climate. High-traffic areas or those exposed to oil stains may need more frequent attention. Cleaning removes damaging biological growth before it penetrates deeply.'
      },
      {
        q: 'Can pressure washing damage concrete?',
        a: 'High pressure can damage concrete, especially older material. Professional cleaning uses appropriate pressure settings. Modern soft washing techniques can clean effectively without high pressure.'
      },
      {
        q: 'Why does sealed concrete still stain?',
        a: 'Sealers reduce staining but don\'t prevent it completely. Acidic deposits and biological growth can still stain sealed concrete. Regular cleaning maintains both the seal and the surface appearance.'
      },
      {
        q: 'What\'s the best way to prevent oil stains on concrete?',
        a: 'Seal concrete to reduce absorption, address vehicle leaks promptly, and clean spills immediately. Professional cleaning prevents permanent staining by removing fresh deposits before they set.'
      }
    ]
  },

  'block-paving': {
    slug: 'block-paving',
    name: 'Block Paving',
    displayName: 'Block Paving & Brick Pavers',
    description: 'Block paving creates attractive, practical driveways and patios. Regular professional cleaning maintains appearance and prevents damage from biological growth and staining.',
    whatIs: 'Block paving (also called pavers or brick pavers) are individual units of stone, concrete, or clay laid in patterns. This creates attractive, flexible surfaces that can be easily repaired. However, the joints between blocks are vulnerable to water damage and biological growth.',
    commonProblems: ['moss-growth', 'algae-discoloration', 'grime-dirt-accumulation', 'weed-growth', 'joint-deterioration'],
    cleaningChallenges: 'Block paving\'s main vulnerability is the joints between blocks. Moss and weeds grow in joints, compromising the whole surface. Sand-filled joints can erode from water and pressure washing. Professional cleaning must address both blocks and joints carefully.',
    appropriateServices: ['pressure-washing', 'driveway-cleaning', 'patio-cleaning'],
    pressureWarnings: 'Block paving can tolerate moderate pressure washing if done carefully. However, excessive pressure erodes joint sand and can displace blocks. Professional technicians use appropriate techniques to clean without damaging joints.',
    seasonalConcerns: 'Winter freeze-thaw cycles damage joints. Water in joints freezes and expands, displacing blocks. Fall cleaning and joint maintenance prepare surfaces for winter.',
    maintenanceTips: [
      'Keep joints clear of moss, weeds, and debris',
      'Repoint joints periodically to maintain structural integrity',
      'Seal surfaces to reduce water absorption',
      'Inspect after winter for displaced blocks or joint damage',
      'Professional cleaning removes growth before it damages joints'
    ],
    materialProperties: 'Block paving\'s strength depends on the material (concrete, clay, stone) and installation quality. Flexibility allows movement without cracking, but joints need maintenance. Quality installation and materials last 20+ years.',
    costConsiderations: 'Cleaning is moderately priced. Joint maintenance extends surface life significantly. Professional repointing is more cost-effective than replacing damaged sections.',
    metaTitle: 'Professional Block Paving Cleaning | Joint & Surface Care',
    metaDescription: 'Block paving cleaning service for driveways and patios. Professional maintenance of joints and surface. Restore appearance.',
    faqs: [
      {
        q: 'Why do block paving joints attract moss and weeds?',
        a: 'Joint sand retains moisture, creating ideal conditions for moss and weed growth. Damp UK climate accelerates this. Regular professional cleaning and proper joint maintenance prevent serious growth.'
      },
      {
        q: 'Can I pressure wash my block paving?',
        a: 'Moderate pressure washing is acceptable but risky without expertise. Excessive pressure erodes joint sand. Professional cleaning uses appropriate techniques to clean blocks without damaging joints.'
      },
      {
        q: 'How do I prevent moss growing between pavers?',
        a: 'Keep joint sand clear of debris, seal surfaces to reduce water retention, ensure proper drainage, and get regular professional cleaning. These steps prevent moss from establishing.'
      }
    ]
  },

  'tarmac': {
    slug: 'tarmac',
    name: 'Tarmac',
    displayName: 'Tarmac Driveway & Asphalt Cleaning',
    description: 'Tarmac driveways are practical and cost-effective. However, they require regular professional maintenance to prevent deterioration from weather, staining, and biological growth.',
    whatIs: 'Tarmac (asphalt) is a flexible surface made from bitumen and stone aggregates. It\'s popular for driveways due to low installation cost and ease of repair. However, tarmac is softer than concrete and more vulnerable to weather and staining.',
    commonProblems: ['oil-stains', 'algae-discoloration', 'grime-dirt-accumulation', 'weather-cracking', 'surface-degradation'],
    cleaningChallenges: 'Tarmac\'s soft surface means pressure washing must be gentle to avoid damage. Oil soaks into tarmac quickly and can soften the surface. Biological growth can accelerate tarmac deterioration. High heat can soften tarmac temporarily.',
    appropriateServices: ['soft-washing', 'driveway-cleaning'],
    pressureWarnings: 'Tarmac requires gentle pressure washing or soft washing only. High pressure can damage the surface, create divots, and accelerate deterioration. Professional use low pressure and appropriate nozzles. Hot pressure washing can soften and damage tarmac.',
    seasonalConcerns: 'Summer heat softens tarmac—avoid aggressive cleaning in heat. Winter freeze-thaw cycles crack tarmac. Spring is ideal for tarmac cleaning and minor repairs.',
    maintenanceTips: [
      'Use soft washing rather than high-pressure cleaning',
      'Seal tarmac every 2-3 years to protect from weather and staining',
      'Address cracks immediately before they expand',
      'Keep gutters clean to prevent water damage',
      'Professional cleaning and maintenance extend tarmac life'
    ],
    materialProperties: 'Tarmac is flexible and durable if maintained. However, sun, rain, and traffic cause gradual deterioration. Sealing extends life significantly. Properly maintained tarmac lasts 15-20 years.',
    costConsiderations: 'Tarmac is inexpensive to install but requires regular maintenance. Professional cleaning and sealing are cost-effective and extend surface life.',
    metaTitle: 'Professional Tarmac Cleaning | Driveway & Asphalt Care',
    metaDescription: 'Tarmac driveway cleaning with soft washing. Professional maintenance protects your surface. Affordable, effective care.',
    faqs: [
      {
        q: 'Can I pressure wash my tarmac driveway?',
        a: 'Not with high pressure. Tarmac requires soft washing only. High pressure damages the surface. Professional soft washing cleans effectively without damage.'
      },
      {
        q: 'Why is my tarmac surface soft in summer?',
        a: 'Heat softens bitumen in tarmac. This is normal and temporary. Avoid heavy traffic or cleaning during peak heat to prevent damage.'
      },
      {
        q: 'How do I prevent oil stains from soaking into tarmac?',
        a: 'Seal tarmac to reduce absorption. Clean spills immediately. Address vehicle leaks. Sealing is the most effective prevention method.'
      }
    ]
  },

  'brick-stone': {
    slug: 'brick-stone',
    name: 'Brick & Stone',
    displayName: 'Brick & Stone Cleaning',
    description: 'Brick and stone facades are beautiful and durable but require expert cleaning to prevent damage. Professional care maintains appearance and protects these valuable materials.',
    whatIs: 'Brick and natural stone are traditional building materials valued for durability and appearance. Brick is fired clay, stone includes sandstone, limestone, granite, and slate. Both are porous to varying degrees and susceptible to staining and biological growth.',
    commonProblems: ['lichen-growth', 'algae-discoloration', 'pollution-staining', 'moss-growth', 'mortar-deterioration'],
    cleaningChallenges: 'Brick and stone are porous and absorb stains readily. Different stone types require different cleaning approaches. Aggressive cleaning can damage mortar and stone surface. Historic brick and stone require particularly careful treatment.',
    appropriateServices: ['soft-washing', 'render-cleaning'],
    pressureWarnings: 'Brick and stone require low-pressure soft washing only. High pressure damages mortar, erodes soft stone, and can crack hard stone. Professional expertise is essential to clean without damage.',
    seasonalConcerns: 'Winter freeze-thaw cycles damage brick and stone. Water in pores freezes and expands, causing cracks and spalling. Fall cleaning prevents winter damage.',
    maintenanceTips: [
      'Use professional soft washing only—never high pressure',
      'Inspect mortar regularly and repoint as needed',
      'Apply appropriate sealers to protect stone',
      'Prevent water concentration that accelerates growth',
      'Professional assessment identifies damage before it becomes serious'
    ],
    materialProperties: 'Natural stone durability varies widely. Sandstone is softer and more vulnerable than granite. Brick is hardwearing if well-fired. Mortar is the most vulnerable component and requires regular maintenance.',
    costConsiderations: 'Professional soft washing costs more than standard pressure washing but prevents expensive damage. Regular maintenance is much more cost-effective than repairing damage from improper cleaning.',
    metaTitle: 'Professional Brick & Stone Cleaning | Heritage Property Care',
    metaDescription: 'Expert brick and stone cleaning. Safe professional soft washing protects masonry. Restore heritage properties.',
    faqs: [
      {
        q: 'Why shouldn\'t I pressure wash brick and stone?',
        a: 'High pressure damages mortar, erodes soft stone, and can crack hard stone. Brick and stone require low-pressure soft washing to clean safely without long-term damage.'
      },
      {
        q: 'What\'s the difference between different stone types?',
        a: 'Sandstone is porous and soft; limestone is moderately soft; granite is hard and durable. Each requires different cleaning approaches. Professional expertise ensures appropriate care.'
      },
      {
        q: 'How do I prevent lichen damage to my brick?',
        a: 'Regular professional cleaning removes lichen before it penetrates. Applying appropriate sealers provides additional protection. Professional assessment identifies vulnerable areas.'
      }
    ]
  },

  'timber-wood': {
    slug: 'timber-wood',
    name: 'Timber & Wood',
    displayName: 'Timber & Wood Cleaning & Treatment',
    description: 'Timber requires specialized cleaning to prevent damage while maintaining appearance. Professional care protects wooden features and prolongs their lifespan.',
    whatIs: 'Timber is used for fascias, soffits, cladding, gates, and furniture. While beautiful and traditional, wood is vulnerable to water damage, rot, and biological growth. Different timber types have different requirements.',
    commonProblems: ['moss-growth', 'algae-discoloration', 'wood-rot', 'paint-deterioration', 'biological-staining'],
    cleaningChallenges: 'Timber is vulnerable to water damage, so cleaning must be gentle. High pressure can damage wood fibers and open grain, allowing water penetration. Biological growth must be removed without damaging wood.',
    appropriateServices: ['soft-washing', 'window-cleaning'],
    pressureWarnings: 'Timber requires very low pressure or soft washing only. High pressure damages wood fibers, opens grain, and accelerates rot. Improper cleaning is more damaging than not cleaning.',
    seasonalConcerns: 'Winter rain and freeze-thaw damage wood. Summer sun can crack wood and degrade finishes. Regular treatment maintains protection.',
    maintenanceTips: [
      'Use soft washing only—avoid high pressure',
      'Apply protective treatments regularly',
      'Maintain paint/stain to prevent water penetration',
      'Ensure proper drainage to minimize water exposure',
      'Professional treatment extends timber lifespan significantly'
    ],
    materialProperties: 'Timber durability depends on species, installation, and maintenance. Exposed timber is vulnerable and requires regular treatment. Properly maintained timber lasts many decades.',
    costConsiderations: 'Professional treatment is essential but moderately priced. Regular maintenance prevents expensive rot repairs.',
    metaTitle: 'Professional Timber & Wood Cleaning | Preservation & Care',
    metaDescription: 'Expert timber cleaning and treatment. Soft washing protects wood. Professional maintenance extends lifespan.',
    faqs: [
      {
        q: 'Can I pressure wash timber?',
        a: 'No. Pressure washing damages wood fibers and accelerates rot. Timber requires gentle soft washing only. Professional expertise prevents damage.'
      },
      {
        q: 'How do I prevent rot in my wooden fascia?',
        a: 'Apply protective stains or paints regularly. Ensure proper drainage. Remove moss and algae before they trap moisture. Professional treatment provides long-term protection.'
      }
    ]
  },

  'roof-tiles-gutters': {
    slug: 'roof-tiles-gutters',
    name: 'Roof Tiles & Gutters',
    displayName: 'Roof & Gutter Cleaning',
    description: 'Roof tiles and gutters are critical to property protection. Regular professional maintenance prevents expensive water damage and extends lifespan.',
    whatIs: 'Roof tiles (slate, clay, concrete, asphalt) shed water from roofs. Gutters channel that water away from foundations. Both require proper function to protect property from water damage.',
    commonProblems: ['moss-growth', 'algae-discoloration', 'gutter-blockages', 'water-damage', 'debris-accumulation'],
    cleaningChallenges: 'Roof cleaning is dangerous work. Tiles vary in fragility—slate and old clay require extreme care. Gutters accumulate leaves, moss, and debris that cause water overflow and damage.',
    appropriateServices: ['roof-cleaning', 'gutter-cleaning', 'soft-washing'],
    pressureWarnings: 'Roof tiles are fragile and require very low pressure or soft washing. High pressure breaks tiles, dislodges them, and creates water entry points. Professional expertise is essential.',
    seasonalConcerns: 'Fall debris from trees accumulates in gutters. Spring cleaning prepares for summer storms. Regular cleaning prevents winter damage.',
    maintenanceTips: [
      'Have gutters cleaned at least annually, more frequently if trees are overhead',
      'Inspect gutters after storms for damage or blockages',
      'Never attempt roof cleaning yourself—it\'s dangerous and risks damage',
      'Professional inspection identifies problems before they cause expensive damage'
    ],
    materialProperties: 'Roof tile durability varies. Slate and clay are durable but fragile. Concrete and asphalt are more rugged. Properly maintained roofs last 50+ years.',
    costConsiderations: 'Professional gutter cleaning is inexpensive and prevents expensive water damage. Roof cleaning is moderately priced and extends tile life.',
    metaTitle: 'Professional Roof & Gutter Cleaning | Property Protection',
    metaDescription: 'Expert roof and gutter cleaning. Safe, professional service protects your property. Prevent water damage.',
    faqs: [
      {
        q: 'Why is gutter cleaning important?',
        a: 'Clogged gutters cause water overflow that damages fascias, soffits, and foundations. Moss growing in gutters retains water and accelerates deterioration. Regular cleaning prevents expensive damage.'
      },
      {
        q: 'How often should gutters be cleaned?',
        a: 'Most gutters benefit from annual cleaning. Properties with overhanging trees need more frequent attention—even twice yearly. Professional inspection determines your specific needs.'
      }
    ]
  },

  'upvc-plastic': {
    slug: 'upvc-plastic',
    name: 'uPVC & Plastic',
    displayName: 'uPVC Windows, Doors & Cladding',
    description: 'uPVC is low-maintenance but requires professional cleaning to maintain appearance. Regular care prevents biological growth and discoloration.',
    whatIs: 'uPVC (unplasticized polyvinyl chloride) is used for windows, doors, gutters, and cladding. It\'s popular due to low maintenance and durability. However, it\'s susceptible to biological staining and discoloration.',
    commonProblems: ['algae-discoloration', 'pollution-staining', 'grime-accumulation', 'discoloration'],
    cleaningChallenges: 'uPVC stains readily and biological growth creates permanent-looking marks. Discoloration can make uPVC look aged. Cleaning must be gentle to avoid scratching glossy finishes.',
    appropriateServices: ['window-cleaning', 'soft-washing'],
    pressureWarnings: 'uPVC can tolerate moderate pressure washing but low pressure is safer. Very high pressure can force water into seals. Soft washing is preferred to prevent any risk.',
    maintenanceTips: [
      'Regular cleaning prevents permanent staining',
      'Use soft washing to protect finish',
      'Professional treatment prevents staining from setting permanently'
    ],
    costConsiderations: 'uPVC cleaning is inexpensive. Regular maintenance prevents permanent staining.',
    metaTitle: 'Professional uPVC Window & Cladding Cleaning',
    metaDescription: 'Expert uPVC cleaning for windows, doors, and cladding. Restore appearance. Professional service.'
  },

  'glass-glazing': {
    slug: 'glass-glazing',
    name: 'Glass & Glazing',
    displayName: 'Glass Window & Conservatory Cleaning',
    description: 'Professional glass cleaning maintains visibility, safety, and appearance. Regular cleaning prevents permanent staining and extends glass lifespan.',
    whatIs: 'Glass is used for windows, doors, and conservatory panels. While durable, glass is transparent—any dirt, streaks, or biological growth is visible. Glass requires regular cleaning for optimal appearance.',
    commonProblems: ['grime-accumulation', 'pollution-staining', 'mineral-deposits', 'algae-growth-edges'],
    cleaningChallenges: 'Glass cleaning requires techniques that prevent streaking. Water-fed poles with deionized water prevent mineral deposits. Conservatories trap moisture and require specialized approaches.',
    appropriateServices: ['window-cleaning', 'conservatory-cleaning'],
    pressureWarnings: 'Glass can tolerate pressure washing but soft pressure is safer. Water-fed poles are preferred to avoid frame water infiltration.',
    seasonalConcerns: 'Spring and fall are ideal cleaning times to maximize visibility.',
    maintenanceTips: [
      'Regular professional cleaning maintains clarity',
      'Address mineral deposits before they harden',
      'Professional treatment prevents permanent staining'
    ],
    metaTitle: 'Professional Glass & Window Cleaning | Crystal Clear Results',
    metaDescription: 'Expert glass and window cleaning. Restore clarity and shine. Professional service for perfect results.'
  }
};

export default surfaces;
