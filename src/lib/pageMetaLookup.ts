/**
 * pageMetaLookup.ts
 *
 * Central meta-tag registry for all 926+ pages.
 *
 * Usage:
 *   import { getPageMeta } from '@/lib/pageMetaLookup';
 *   const meta = getPageMeta('/services/driveway-cleaning/newton-le-willows/');
 *
 * To export meta.json, run:
 *   npx ts-node -e "import('@/lib/pageMetaLookup').then(m => console.log(JSON.stringify(m.generateAllPageMeta(), null, 2)))"
 */

export interface PageMeta {
  url: string;
  pageName: string;
  metaTitle: string;
  metaDescription: string;
  metaKeywords: string;
}

// ─── 40 Service definitions ───────────────────────────────────────────────────

const serviceInfo: Record<string, {
  name: string;
  painPoint: string;
  kwCore: string;
}> = {
  'algae-removal': {
    name: 'Algae Removal',
    painPoint: 'Green algae staining your surfaces?',
    kwCore: 'algae removal, green algae treatment, algae cleaning North West',
  },
  'bio-wash-treatment': {
    name: 'Bio-Wash Treatment',
    painPoint: 'Biological growth creeping back after cleaning?',
    kwCore: 'bio-wash treatment, biocidal treatment, algae prevention North West',
  },
  'bin-store-cleaning': {
    name: 'Bin Store Cleaning',
    painPoint: 'Odour and grime taking over your bin store?',
    kwCore: 'bin store cleaning, refuse area cleaning, bin enclosure hygiene',
  },
  'brick-cleaning': {
    name: 'Brick Cleaning',
    painPoint: 'Weathered, stained brickwork ageing your home?',
    kwCore: 'brick cleaning, brickwork cleaning, facade cleaning North West',
  },
  'car-park-cleaning': {
    name: 'Car Park Cleaning',
    painPoint: 'Oil stains and grime making your car park look unprofessional?',
    kwCore: 'car park cleaning, car park pressure washing, car park maintenance',
  },
  'cladding-cleaning': {
    name: 'Cladding Cleaning',
    painPoint: 'Stained or discoloured cladding letting your property down?',
    kwCore: 'cladding cleaning, uPVC cladding cleaning, composite cladding cleaning',
  },
  'commercial-exterior-cleaning': {
    name: 'Commercial Exterior Cleaning',
    painPoint: 'Grimy facades and blocked gutters costing you clients?',
    kwCore: 'commercial exterior cleaning, commercial pressure washing, commercial property maintenance',
  },
  'concrete-cleaning': {
    name: 'Concrete Cleaning',
    painPoint: 'Oil stains and moss degrading your concrete?',
    kwCore: 'concrete cleaning, concrete driveway cleaning, concrete pressure washing',
  },
  'conservatory-cleaning': {
    name: 'Conservatory Cleaning',
    painPoint: 'Conservatory roof gone green and blocking the light?',
    kwCore: 'conservatory cleaning, conservatory roof cleaning, uPVC conservatory cleaning',
  },
  'driveway-cleaning': {
    name: 'Driveway Cleaning',
    painPoint: 'Oil stains, moss & grime ruining your driveway?',
    kwCore: 'driveway cleaning, block paving cleaning, driveway jet washing',
  },
  'driveway-sealing': {
    name: 'Driveway Sealing',
    painPoint: 'Tired of your driveway staining and re-greening every year?',
    kwCore: 'driveway sealing, block paving sealing, driveway sealant',
  },
  'fascia-soffit-cleaning': {
    name: 'Fascia & Soffit Cleaning',
    painPoint: 'Yellowing or dirty fascias and soffits?',
    kwCore: 'fascia cleaning, soffit cleaning, fascia soffit cleaning North West',
  },
  'fence-cleaning': {
    name: 'Fence Cleaning',
    painPoint: 'Mouldy, green, or stained fencing spoiling your garden?',
    kwCore: 'fence cleaning, garden fence cleaning, timber fence cleaning',
  },
  'gutter-cleaning': {
    name: 'Gutter Cleaning',
    painPoint: 'Blocked gutters causing damp and water damage?',
    kwCore: 'gutter cleaning, blocked gutters, gutter clearing North West',
  },
  'gutter-guard-installation': {
    name: 'Gutter Guard Installation',
    painPoint: 'Fed up with constantly clearing blocked gutters?',
    kwCore: 'gutter guard installation, gutter guards, gutter leaf guard',
  },
  'hard-surface-cleaning': {
    name: 'Hard Surface Cleaning',
    painPoint: 'Grime and moss covering all your outdoor hard surfaces?',
    kwCore: 'hard surface cleaning, pressure washing, outdoor surface cleaning',
  },
  'high-rise-cleaning': {
    name: 'High-Rise Cleaning',
    painPoint: 'Multi-storey facade beyond standard reach and looking neglected?',
    kwCore: 'high rise cleaning, multi storey facade cleaning, commercial building cleaning',
  },
  'jet-washing': {
    name: 'Jet Washing',
    painPoint: 'Stubborn grime, stains & algae refusing to shift?',
    kwCore: 'jet washing, jet wash near me, pressure washing North West',
  },
  'moss-removal': {
    name: 'Moss Removal',
    painPoint: 'Moss spreading across your roof and surfaces?',
    kwCore: 'moss removal, roof moss removal, moss treatment North West',
  },
  'oil-stain-removal': {
    name: 'Oil Stain Removal',
    painPoint: 'Unsightly oil stains on your driveway or floor?',
    kwCore: 'oil stain removal, driveway oil stains, oil degreaser North West',
  },
  'patio-cleaning': {
    name: 'Patio Cleaning',
    painPoint: 'Green algae and black stains spoiling your patio?',
    kwCore: 'patio cleaning, patio jet washing, patio pressure washing',
  },
  'patio-sealing': {
    name: 'Patio Sealing',
    painPoint: 'Patio staining and going green again already?',
    kwCore: 'patio sealing, patio sealant, natural stone sealing',
  },
  'pointing-cleaning': {
    name: 'Pointing Cleaning',
    painPoint: 'Green, stained mortar joints affecting your walls?',
    kwCore: 'pointing cleaning, mortar joint cleaning, brick pointing cleaning',
  },
  'pressure-washing': {
    name: 'Pressure Washing',
    painPoint: 'Grime and stains building up on your driveways and patios?',
    kwCore: 'pressure washing, pressure wash North West, affordable pressure washing',
  },
  'render-cleaning': {
    name: 'Render Cleaning',
    painPoint: 'Stained or green render spoiling your home\'s appearance?',
    kwCore: 'render cleaning, K-rend cleaning, render soft wash North West',
  },
  'render-sealing': {
    name: 'Render Sealing',
    painPoint: 'Render going green again within months of cleaning?',
    kwCore: 'render sealing, render sealant, render protection North West',
  },
  'roof-cleaning': {
    name: 'Roof Cleaning',
    painPoint: 'Moss & algae destroying your roof tiles?',
    kwCore: 'roof cleaning, soft wash roof cleaning, roof moss removal',
  },
  'roof-moss-treatment': {
    name: 'Roof Moss Treatment',
    painPoint: 'Moss spreading across your roof and blocking gutters?',
    kwCore: 'roof moss treatment, moss treatment North West, roof biocide',
  },
  'roof-sealing': {
    name: 'Roof Sealing',
    painPoint: 'Moss growing straight back after your roof was cleaned?',
    kwCore: 'roof sealing, tile sealant, roof tile protection',
  },
  'sandstone-cleaning': {
    name: 'Sandstone Cleaning',
    painPoint: 'Stained or grimy sandstone losing its natural beauty?',
    kwCore: 'sandstone cleaning, Indian stone cleaning, natural sandstone cleaning',
  },
  'solar-panel-cleaning': {
    name: 'Solar Panel Cleaning',
    painPoint: 'Dirty solar panels cutting your energy output?',
    kwCore: 'solar panel cleaning, PV panel cleaning, solar array cleaning',
  },
  'steps-path-cleaning': {
    name: 'Steps & Path Cleaning',
    painPoint: 'Slippery, mossy steps creating a dangerous hazard?',
    kwCore: 'steps cleaning, path cleaning, garden path pressure washing',
  },
  'stone-cleaning': {
    name: 'Stone Cleaning',
    painPoint: 'Natural stone surfaces stained and losing their appeal?',
    kwCore: 'stone cleaning, natural stone cleaning, limestone cleaning',
  },
  'tarmac-cleaning': {
    name: 'Tarmac Cleaning',
    painPoint: 'Oil stains and moss turning your tarmac drive green?',
    kwCore: 'tarmac cleaning, tarmac drive cleaning, tarmac jet washing',
  },
  'tarmac-sealing': {
    name: 'Tarmac Sealing',
    painPoint: 'Tarmac fading, cracking, and losing its deep black colour?',
    kwCore: 'tarmac sealing, tarmac sealant, bitumen driveway sealing',
  },
  'uPVC-cleaning': {
    name: 'uPVC Cleaning',
    painPoint: 'Yellowing or dirty uPVC windows and doors?',
    kwCore: 'uPVC cleaning, UPVC window cleaning, uPVC door cleaning',
  },
  'wall-cleaning': {
    name: 'Wall Cleaning',
    painPoint: 'Stained or grimy exterior walls letting down your property?',
    kwCore: 'wall cleaning, exterior wall cleaning, facade cleaning North West',
  },
  'water-fed-pole-cleaning': {
    name: 'Water-Fed Pole Cleaning',
    painPoint: 'High windows and gutters beyond normal reach?',
    kwCore: 'water fed pole cleaning, high window cleaning, reach pole cleaning',
  },
  'weed-treatment': {
    name: 'Weed Treatment',
    painPoint: 'Weeds breaking through paving, paths, and drives?',
    kwCore: 'weed treatment, weed removal, paving weed killer North West',
  },
  'window-cleaning': {
    name: 'Window Cleaning',
    painPoint: 'Streaky, grimy windows reducing light and kerb appeal?',
    kwCore: 'window cleaning, residential window cleaning, commercial window cleaning',
  },
};

// ─── 21 Location definitions ──────────────────────────────────────────────────

const locationInfo: Record<string, {
  name: string;
  county: string;
  tier: 1 | 2 | 3;
}> = {
  'newton-le-willows': { name: 'Newton-le-Willows', county: 'Merseyside', tier: 1 },
  'warrington':        { name: 'Warrington',        county: 'Cheshire',          tier: 1 },
  'st-helens':         { name: 'St Helens',         county: 'Merseyside',        tier: 2 },
  'widnes':            { name: 'Widnes',            county: 'Cheshire',          tier: 2 },
  'leigh':             { name: 'Leigh',             county: 'Greater Manchester', tier: 2 },
  'golborne':          { name: 'Golborne',          county: 'Wigan',             tier: 2 },
  'earlestown':        { name: 'Earlestown',        county: 'Merseyside',        tier: 2 },
  'lowton':            { name: 'Lowton',            county: 'Wigan',             tier: 2 },
  'haydock':           { name: 'Haydock',           county: 'Merseyside',        tier: 2 },
  'lymm':              { name: 'Lymm',              county: 'Cheshire',          tier: 2 },
  'great-sankey':      { name: 'Great Sankey',      county: 'Cheshire',          tier: 3 },
  'burtonwood':        { name: 'Burtonwood',        county: 'Cheshire',          tier: 3 },
  'ashton-in-makerfield': { name: 'Ashton-in-Makerfield', county: 'Wigan',      tier: 2 },
  'skelmersdale':      { name: 'Skelmersdale',      county: 'Lancashire',        tier: 2 },
  'ormskirk':          { name: 'Ormskirk',          county: 'Lancashire',        tier: 2 },
  'irlam':             { name: 'Irlam',             county: 'Greater Manchester', tier: 3 },
  'manchester':        { name: 'Manchester',        county: 'Greater Manchester', tier: 2 },
  'huyton':            { name: 'Huyton',            county: 'Merseyside',        tier: 2 },
  'wavertree':         { name: 'Wavertree',         county: 'Liverpool',         tier: 3 },
  'halewood':          { name: 'Halewood',          county: 'Merseyside',        tier: 3 },
  'uppermill':         { name: 'Uppermill',         county: 'Greater Manchester', tier: 3 },
};

// ─── Description templates (5 variants, rotate by hash) ──────────────────────

function buildServiceLocationDesc(
  sSlug: string,
  lSlug: string,
  variant: number,
): string {
  const s  = serviceInfo[sSlug];
  const l  = locationInfo[lSlug];
  const sn = s.name.toLowerCase();
  const ln = l.name;
  const cn = l.county;
  const pp = s.painPoint;

  const t = variant % 5;
  if (t === 0)
    return `${pp} R.R.M External Cleaning covers ${ln}. Affordable ${sn}, fully insured, 10+ yrs experience. Free quote — book today!`;
  if (t === 1)
    return `${pp} Trust R.R.M for ${sn} in ${ln}. Affordable & reliable. Serving ${cn} since 2016. Free no-obligation quote today!`;
  if (t === 2)
    return `Professional ${sn} in ${ln} from R.R.M External Cleaning. ${pp} Affordable, fully insured. North West. Book today!`;
  if (t === 3)
    return `${pp} R.R.M Specialist provides ${sn} in ${ln}, ${cn}. Affordable, residential & commercial. Book your free quote now!`;
  return `Affordable ${sn} in ${ln} from R.R.M. ${pp} Fully insured, local, 10+ years North West experience. Free quote!`;
}

// ─── Service × Location (840 pages) ──────────────────────────────────────────

function generateServiceLocationMeta(
  sSlug: string,
  lSlug: string,
  sIdx: number,
  lIdx: number,
): PageMeta {
  const s = serviceInfo[sSlug];
  const l = locationInfo[lSlug];

  const title = `${s.name} in ${l.name} | R.R.M`;
  const variant = (sIdx + lIdx) % 5;
  const description = buildServiceLocationDesc(sSlug, lSlug, variant);

  return {
    url: `/services/${sSlug}/${lSlug}/`,
    pageName: `${s.name} — ${l.name}`,
    metaTitle: title,
    metaDescription: description,
    metaKeywords: `${s.kwCore}, ${s.name.toLowerCase()} ${l.name}, ${s.name.toLowerCase()} ${l.county}, affordable ${s.name.toLowerCase()} near me, R.R.M ${l.name}`,
  };
}

// ─── Service index pages (40 pages) ──────────────────────────────────────────

const serviceIndexMeta: Record<string, Omit<PageMeta, 'url'>> = {
  'algae-removal': {
    pageName: 'Algae Removal',
    metaTitle: 'Affordable Algae Removal North West | R.R.M',
    metaDescription: 'Green algae staining your surfaces? R.R.M offers affordable algae removal across Newton-le-Willows, Warrington & the North West. Biocidal treatment. Book today!',
    metaKeywords: 'algae removal North West, green algae treatment, affordable algae removal, algae removal near me, R.R.M algae removal',
  },
  'bio-wash-treatment': {
    pageName: 'Bio-Wash Treatment',
    metaTitle: 'Bio-Wash Treatment North West | R.R.M Specialist',
    metaDescription: 'Biological growth coming back after cleaning? R.R.M\'s bio-wash treatment kills algae & moss at the root for 6–12 months. Affordable. North West. Book today!',
    metaKeywords: 'bio-wash treatment North West, biocidal treatment, algae prevention North West, bio wash near me, R.R.M bio-wash',
  },
  'bin-store-cleaning': {
    pageName: 'Bin Store Cleaning',
    metaTitle: 'Bin Store Cleaning North West | R.R.M Specialist',
    metaDescription: 'Odour and grime in your bin store? R.R.M provides hot-water bin store sanitising across North West commercial and residential premises. Affordable. Book today!',
    metaKeywords: 'bin store cleaning North West, refuse area cleaning, bin enclosure cleaning, bin store sanitising near me',
  },
  'brick-cleaning': {
    pageName: 'Brick Cleaning',
    metaTitle: 'Affordable Brick Cleaning North West | R.R.M',
    metaDescription: 'Weathered, stained brickwork ageing your property? R.R.M offers specialist low-pressure brick cleaning across Warrington, Newton-le-Willows & the North West. Book today!',
    metaKeywords: 'brick cleaning North West, brickwork cleaning, facade cleaning, brick cleaning Warrington, brick cleaning near me',
  },
  'car-park-cleaning': {
    pageName: 'Car Park Cleaning',
    metaTitle: 'Car Park Cleaning North West | R.R.M Specialist',
    metaDescription: 'Oil stains and grime making your car park look unprofessional? R.R.M provides heavy-duty car park cleaning across the North West. Commercial contracts available. Book today!',
    metaKeywords: 'car park cleaning North West, car park pressure washing, oil stain car park, commercial car park cleaning near me',
  },
  'cladding-cleaning': {
    pageName: 'Cladding Cleaning',
    metaTitle: 'Cladding Cleaning North West | R.R.M Specialist',
    metaDescription: 'Stained or discoloured cladding letting your property down? R.R.M cleans timber, composite & uPVC cladding across North West. Affordable. Book a free quote today!',
    metaKeywords: 'cladding cleaning North West, uPVC cladding cleaning, composite cladding cleaning, cladding cleaning near me',
  },
  'commercial-exterior-cleaning': {
    pageName: 'Commercial Exterior Cleaning',
    metaTitle: 'Affordable Commercial Exterior Cleaning | R.R.M',
    metaDescription: 'Grimy facades, stained car parks & blocked gutters costing you clients? R.R.M delivers affordable commercial exterior cleaning across North West. Get a quote!',
    metaKeywords: 'commercial exterior cleaning North West, commercial pressure washing Warrington, commercial jet washing Manchester, affordable commercial cleaning North West, car park cleaning North West',
  },
  'concrete-cleaning': {
    pageName: 'Concrete Cleaning',
    metaTitle: 'Concrete Cleaning North West | R.R.M Specialist',
    metaDescription: 'Oil stains and moss on your concrete driveway or path? R.R.M\'s industrial rotary cleaners restore concrete across Warrington, Newton-le-Willows & North West. Book today!',
    metaKeywords: 'concrete cleaning North West, concrete driveway cleaning, concrete pressure washing, concrete cleaning near me',
  },
  'conservatory-cleaning': {
    pageName: 'Conservatory Cleaning',
    metaTitle: 'Conservatory Cleaning North West | R.R.M',
    metaDescription: 'Conservatory roof gone green and blocking the light? R.R.M\'s pure-water cleaning restores conservatories across North West. Affordable, no ladder access. Book today!',
    metaKeywords: 'conservatory cleaning North West, conservatory roof cleaning, uPVC conservatory cleaning, conservatory cleaning near me',
  },
  'driveway-cleaning': {
    pageName: 'Driveway Cleaning',
    metaTitle: 'Affordable Driveway Cleaning Near You | R.R.M',
    metaDescription: 'Oil stains, moss & grime on your driveway? R.R.M External Cleaning Specialist delivers affordable jet washing near Warrington & North West. Book today!',
    metaKeywords: 'driveway cleaning near me, affordable driveway cleaning, driveway cleaning Warrington, driveway cleaning Newton-le-Willows, block paving cleaning North West',
  },
  'driveway-sealing': {
    pageName: 'Driveway Sealing',
    metaTitle: 'Driveway Sealing North West | R.R.M Specialist',
    metaDescription: 'Protect your driveway from oil stains, moss & weather damage. R.R.M applies professional sealant across North West driveways. Lasts 3–5 years. Free quote!',
    metaKeywords: 'driveway sealing North West, block paving sealing, driveway sealant Warrington, driveway sealing near me',
  },
  'fascia-soffit-cleaning': {
    pageName: 'Fascia & Soffit Cleaning',
    metaTitle: 'Fascia & Soffit Cleaning North West | R.R.M',
    metaDescription: 'Yellowing or dirty fascias and soffits? R.R.M restores bright white fascias across Newton-le-Willows, Warrington & North West. Safe ground-level cleaning. Book today!',
    metaKeywords: 'fascia cleaning North West, soffit cleaning, fascia soffit cleaning Warrington, fascia cleaning near me, uPVC fascia cleaning',
  },
  'fence-cleaning': {
    pageName: 'Fence Cleaning',
    metaTitle: 'Fence Cleaning North West | R.R.M Specialist',
    metaDescription: 'Mouldy, green, or stained fencing spoiling your garden? R.R.M provides professional fence cleaning across North West. Timber, composite & concrete panels. Book today!',
    metaKeywords: 'fence cleaning North West, garden fence cleaning, timber fence cleaning, fence cleaning Warrington, fence cleaning near me',
  },
  'gutter-cleaning': {
    pageName: 'Gutter Cleaning',
    metaTitle: 'Affordable Gutter Cleaning Near You | R.R.M',
    metaDescription: 'Blocked gutters causing damp & damage? R.R.M External Cleaning Specialist clears gutters affordably across Newton-le-Willows, Warrington & Manchester. Book now!',
    metaKeywords: 'gutter cleaning near me, blocked gutters North West, affordable gutter cleaning Warrington, gutter unblocking Manchester, fascia cleaning North West',
  },
  'gutter-guard-installation': {
    pageName: 'Gutter Guard Installation',
    metaTitle: 'Gutter Guard Installation North West | R.R.M',
    metaDescription: 'Fed up with constantly clearing blocked gutters? R.R.M installs professional gutter guard systems across North West — residential & commercial. Free quote today!',
    metaKeywords: 'gutter guard installation North West, gutter guards, gutter leaf guard Warrington, gutter protection North West',
  },
  'hard-surface-cleaning': {
    pageName: 'Hard Surface Cleaning',
    metaTitle: 'Hard Surface Cleaning North West | R.R.M',
    metaDescription: 'Grime and moss covering your driveways, patios & paths? R.R.M\'s industrial rotary cleaners transform hard surfaces across North West. Affordable. Book today!',
    metaKeywords: 'hard surface cleaning North West, pressure washing, outdoor surface cleaning, hard surface cleaning near me',
  },
  'high-rise-cleaning': {
    pageName: 'High-Rise Cleaning',
    metaTitle: 'High-Rise Exterior Cleaning North West | R.R.M',
    metaDescription: 'Multi-storey facade looking neglected? R.R.M provides safe high-rise exterior cleaning across North West using extended water-fed poles. Commercial contracts. Book today!',
    metaKeywords: 'high rise cleaning North West, multi storey facade cleaning, commercial building cleaning, high rise cleaning near me',
  },
  'jet-washing': {
    pageName: 'Jet Washing',
    metaTitle: 'Affordable Jet Washing Near You | R.R.M Specialist',
    metaDescription: 'Stubborn grime, stains & algae no match for our professional jet washing. R.R.M offers affordable jet washing services near Warrington & North West. Book today!',
    metaKeywords: 'jet washing near me, affordable jet washing North West, jet washing Warrington, jet washing Newton-le-Willows, professional jet washing North West',
  },
  'moss-removal': {
    pageName: 'Moss Removal',
    metaTitle: 'Professional Moss Removal Near You | R.R.M',
    metaDescription: 'Moss spreading across your roof, paths, and paving? R.R.M\'s NFRC-compliant moss removal covers North West. Affordable, biocidal treatment. Book today!',
    metaKeywords: 'moss removal near me, roof moss removal North West, moss treatment Warrington, affordable moss removal, moss removal Newton-le-Willows',
  },
  'oil-stain-removal': {
    pageName: 'Oil Stain Removal',
    metaTitle: 'Oil Stain Removal North West | R.R.M Specialist',
    metaDescription: 'Unsightly oil stains on your driveway or garage floor? R.R.M uses trade-strength hot-water degreasing across North West. Affordable. Free quote today!',
    metaKeywords: 'oil stain removal North West, driveway oil stains, oil stain removal near me, oil degreaser Warrington',
  },
  'patio-cleaning': {
    pageName: 'Patio Cleaning',
    metaTitle: 'Affordable Patio Cleaning Near You | R.R.M',
    metaDescription: 'Green algae, moss & black stains spoiling your patio? R.R.M offers affordable patio jet washing near Warrington, Newton-le-Willows & Manchester. Book today!',
    metaKeywords: 'patio cleaning near me, affordable patio cleaning North West, patio jet washing Warrington, patio cleaning Newton-le-Willows, black stain removal patio',
  },
  'patio-sealing': {
    pageName: 'Patio Sealing',
    metaTitle: 'Patio Sealing North West | R.R.M Specialist',
    metaDescription: 'Keep your patio looking great for longer. R.R.M applies penetrating sealant on natural stone and block paving across North West. Affordable. Free quote today!',
    metaKeywords: 'patio sealing North West, patio sealant, natural stone sealing Warrington, patio sealing near me',
  },
  'pointing-cleaning': {
    pageName: 'Pointing Cleaning',
    metaTitle: 'Pointing Cleaning North West | R.R.M Specialist',
    metaDescription: 'Green or stained mortar joints affecting your walls? R.R.M provides specialist low-pressure pointing cleaning across North West. Affordable. Book today!',
    metaKeywords: 'pointing cleaning North West, mortar joint cleaning, brick pointing cleaning, pointing cleaning near me',
  },
  'pressure-washing': {
    pageName: 'Pressure Washing',
    metaTitle: 'Affordable Jet Washing Near You | R.R.M Specialist',
    metaDescription: 'Stubborn grime, stains & algae no match for our professional jet washing. R.R.M offers affordable jet washing services near Warrington & North West. Book today!',
    metaKeywords: 'pressure washing near me, jet washing North West, affordable pressure washing, pressure washing Warrington, pressure washing Newton-le-Willows',
  },
  'render-cleaning': {
    pageName: 'Render Cleaning',
    metaTitle: 'Affordable Render Cleaning & Sealing | R.R.M',
    metaDescription: 'Stained, green or cracked render damaging your home\'s appearance? R.R.M offers affordable render cleaning & sealing across the North West. Book today!',
    metaKeywords: 'render cleaning near me, affordable render cleaning North West, K-rend cleaning Warrington, render cleaning Manchester, green render cleaning',
  },
  'render-sealing': {
    pageName: 'Render Sealing',
    metaTitle: 'Render Sealing North West | R.R.M Specialist',
    metaDescription: 'Render going green again within months? R.R.M\'s breathable render sealant prevents regrowth and water ingress across North West. Affordable. Free quote today!',
    metaKeywords: 'render sealing North West, render sealant, render protection Warrington, render sealing near me',
  },
  'roof-cleaning': {
    pageName: 'Roof Cleaning',
    metaTitle: 'Affordable Roof Cleaning Near You | R.R.M',
    metaDescription: 'Moss & algae destroying your roof tiles? R.R.M offers affordable soft wash roof cleaning across Newton-le-Willows, Warrington & Manchester. Book today!',
    metaKeywords: 'roof cleaning near me, affordable roof cleaning North West, soft wash roof cleaning Warrington, roof moss removal Newton-le-Willows, roof tile cleaning',
  },
  'roof-moss-treatment': {
    pageName: 'Roof Moss Treatment',
    metaTitle: 'Roof Moss Treatment North West | R.R.M Specialist',
    metaDescription: 'Moss spreading across your roof and blocking gutters? R.R.M\'s biocidal roof moss treatment kills growth at the root across North West. Affordable. Book today!',
    metaKeywords: 'roof moss treatment North West, moss treatment Warrington, roof biocide, roof moss removal near me, roof moss Newton-le-Willows',
  },
  'roof-sealing': {
    pageName: 'Roof Sealing',
    metaTitle: 'Roof Sealing North West | R.R.M Specialist',
    metaDescription: 'Moss growing back within a year of your roof being cleaned? R.R.M applies breathable tile sealant across North West. Affordable. Free no-obligation quote today!',
    metaKeywords: 'roof sealing North West, tile sealant, roof tile protection Warrington, roof sealing near me',
  },
  'sandstone-cleaning': {
    pageName: 'Sandstone Cleaning',
    metaTitle: 'Sandstone Cleaning North West | R.R.M Specialist',
    metaDescription: 'Stained or grimy sandstone losing its natural beauty? R.R.M\'s specialist pH-appropriate cleaning protects and restores sandstone across North West. Book today!',
    metaKeywords: 'sandstone cleaning North West, Indian stone cleaning, natural sandstone cleaning, sandstone cleaning near me',
  },
  'solar-panel-cleaning': {
    pageName: 'Solar Panel Cleaning',
    metaTitle: 'Solar Panel Cleaning North West | R.R.M',
    metaDescription: 'Dirty solar panels cutting your energy output? R.R.M\'s pure-water solar panel cleaning restores efficiency across North West. No chemicals. Book today!',
    metaKeywords: 'solar panel cleaning North West, PV panel cleaning, solar array cleaning, solar panel cleaning near me',
  },
  'steps-path-cleaning': {
    pageName: 'Steps & Path Cleaning',
    metaTitle: 'Steps & Path Cleaning North West | R.R.M',
    metaDescription: 'Slippery, mossy steps creating a dangerous hazard? R.R.M removes moss and algae from steps and paths across North West. Affordable. Free quote today!',
    metaKeywords: 'steps cleaning North West, path cleaning, garden path cleaning, slippery steps cleaning near me',
  },
  'stone-cleaning': {
    pageName: 'Stone Cleaning',
    metaTitle: 'Stone Cleaning North West | R.R.M Specialist',
    metaDescription: 'Natural stone surfaces stained and losing their appeal? R.R.M provides specialist pH-appropriate stone cleaning across North West. Affordable. Book today!',
    metaKeywords: 'stone cleaning North West, natural stone cleaning, limestone cleaning, stone cleaning near me',
  },
  'tarmac-cleaning': {
    pageName: 'Tarmac Cleaning',
    metaTitle: 'Tarmac Cleaning North West | R.R.M Specialist',
    metaDescription: 'Oil stains and moss turning your tarmac drive green? R.R.M provides specialist tarmac cleaning across North West. Affordable, reliable. Book today!',
    metaKeywords: 'tarmac cleaning North West, tarmac drive cleaning, tarmac jet washing, tarmac cleaning near me',
  },
  'tarmac-sealing': {
    pageName: 'Tarmac Sealing',
    metaTitle: 'Tarmac Sealing North West | R.R.M Specialist',
    metaDescription: 'Tarmac fading and cracking? R.R.M applies bitumen emulsion sealing to restore deep black colour and protect against weather damage across North West. Book today!',
    metaKeywords: 'tarmac sealing North West, tarmac sealant, bitumen driveway sealing, tarmac sealing near me',
  },
  'uPVC-cleaning': {
    pageName: 'uPVC Cleaning',
    metaTitle: 'uPVC Cleaning North West | R.R.M Specialist',
    metaDescription: 'Yellowing or dirty uPVC windows, doors, and fascias? R.R.M restores bright white uPVC across North West. Affordable, ground-level safe cleaning. Book today!',
    metaKeywords: 'uPVC cleaning North West, UPVC window cleaning, uPVC door cleaning, uPVC cleaning near me',
  },
  'wall-cleaning': {
    pageName: 'Wall Cleaning',
    metaTitle: 'Wall Cleaning North West | R.R.M Specialist',
    metaDescription: 'Stained or grimy exterior walls letting down your property? R.R.M provides specialist wall cleaning across North West. Affordable. Free quote today!',
    metaKeywords: 'wall cleaning North West, exterior wall cleaning, facade cleaning, wall cleaning near me',
  },
  'water-fed-pole-cleaning': {
    pageName: 'Water-Fed Pole Cleaning',
    metaTitle: 'Water-Fed Pole Cleaning North West | R.R.M',
    metaDescription: 'High windows and gutters beyond normal reach? R.R.M\'s extended water-fed pole systems clean up to 70ft across North West. Affordable. Free quote today!',
    metaKeywords: 'water fed pole cleaning North West, high window cleaning, reach pole cleaning, water fed pole near me',
  },
  'weed-treatment': {
    pageName: 'Weed Treatment',
    metaTitle: 'Weed Treatment North West | R.R.M Specialist',
    metaDescription: 'Weeds breaking through paving, paths, and drives? R.R.M provides professional weed treatment across North West. Affordable, residential & commercial. Book today!',
    metaKeywords: 'weed treatment North West, weed removal, paving weed killer, weed treatment near me',
  },
  'window-cleaning': {
    pageName: 'Window Cleaning',
    metaTitle: 'Affordable Window Cleaning Near You | R.R.M',
    metaDescription: 'Grime, bird mess & streaks dulling your windows? R.R.M External Cleaning Specialist offers affordable window cleaning across the North West. Book today!',
    metaKeywords: 'window cleaning near me, affordable window cleaning North West, window cleaning Warrington, water-fed pole window cleaning, commercial window cleaning North West',
  },
};

// ─── 21 Location pages ────────────────────────────────────────────────────────

const locationPageMeta: Record<string, Omit<PageMeta, 'url'>> = {
  'newton-le-willows': {
    pageName: 'Newton-le-Willows',
    metaTitle: 'Exterior Cleaning Newton-le-Willows | R.R.M',
    metaDescription: 'R.R.M\'s home base since 2016. Fastest response times for driveway, roof, gutter & patio cleaning in Newton-le-Willows, WA12. Affordable & fully insured. Book today!',
    metaKeywords: 'exterior cleaning Newton-le-Willows, driveway cleaning WA12, roof cleaning Newton-le-Willows, gutter cleaning WA12, R.R.M Newton-le-Willows',
  },
  'warrington': {
    pageName: 'Warrington',
    metaTitle: 'Exterior Cleaning Warrington | R.R.M Specialist',
    metaDescription: 'Professional driveway, roof, gutter, patio & render cleaning across Warrington. R.R.M External Cleaning — affordable, fully insured, serving WA1–WA4. Free quote!',
    metaKeywords: 'exterior cleaning Warrington, driveway cleaning Warrington, roof cleaning Warrington, gutter cleaning WA1, R.R.M Warrington',
  },
  'st-helens': {
    pageName: 'St Helens',
    metaTitle: 'Exterior Cleaning St Helens | R.R.M Specialist',
    metaDescription: 'Moss, grime or blocked gutters in St Helens? R.R.M covers WA9–WA11 with affordable driveway, roof, patio & gutter cleaning. Fully insured. Book today!',
    metaKeywords: 'exterior cleaning St Helens, driveway cleaning WA9, roof cleaning St Helens, gutter cleaning WA10, R.R.M St Helens',
  },
  'widnes': {
    pageName: 'Widnes',
    metaTitle: 'Exterior Cleaning Widnes | R.R.M Specialist',
    metaDescription: 'Driveway, roof, gutter & patio cleaning in Widnes, Cheshire. R.R.M External Cleaning — affordable, fully insured, serving WA8. Free no-obligation quote!',
    metaKeywords: 'exterior cleaning Widnes, driveway cleaning WA8, roof cleaning Widnes, gutter cleaning Widnes, R.R.M Widnes',
  },
  'leigh': {
    pageName: 'Leigh',
    metaTitle: 'Exterior Cleaning Leigh | R.R.M Specialist',
    metaDescription: 'Professional exterior cleaning across Leigh, Greater Manchester. R.R.M covers WN7 — driveways, roofs, gutters, patios & render. Affordable. Book today!',
    metaKeywords: 'exterior cleaning Leigh, driveway cleaning WN7, roof cleaning Leigh, gutter cleaning Leigh, R.R.M Leigh',
  },
  'golborne': {
    pageName: 'Golborne',
    metaTitle: 'Exterior Cleaning Golborne | R.R.M Specialist',
    metaDescription: 'R.R.M provides fast, affordable exterior cleaning in Golborne, Wigan. Driveways, roofs, gutters & patios across WA3. Same-day response from Newton-le-Willows. Book!',
    metaKeywords: 'exterior cleaning Golborne, driveway cleaning WA3, roof cleaning Golborne, gutter cleaning Golborne, R.R.M Golborne',
  },
  'earlestown': {
    pageName: 'Earlestown',
    metaTitle: 'Exterior Cleaning Earlestown | R.R.M Specialist',
    metaDescription: 'Exterior cleaning specialists in Earlestown, Merseyside. R.R.M restores driveways, roofs, gutters & render across WA12. Affordable, local, fully insured. Book today!',
    metaKeywords: 'exterior cleaning Earlestown, driveway cleaning Earlestown, roof cleaning WA12, gutter cleaning Earlestown, R.R.M Earlestown',
  },
  'lowton': {
    pageName: 'Lowton',
    metaTitle: 'Exterior Cleaning Lowton | R.R.M Specialist',
    metaDescription: 'Professional driveway, patio, roof & gutter cleaning in Lowton, Wigan. R.R.M covers WA3 — affordable, fully insured, near you. Free no-obligation quote!',
    metaKeywords: 'exterior cleaning Lowton, driveway cleaning Lowton, roof cleaning Lowton WA3, gutter cleaning Lowton, R.R.M Lowton',
  },
  'haydock': {
    pageName: 'Haydock',
    metaTitle: 'Exterior Cleaning Haydock | R.R.M Specialist',
    metaDescription: 'Affordable exterior cleaning in Haydock, Merseyside. R.R.M covers WA11 — driveways, roofs, gutters, patios & commercial properties. Fully insured. Book today!',
    metaKeywords: 'exterior cleaning Haydock, driveway cleaning WA11, roof cleaning Haydock, gutter cleaning Haydock, R.R.M Haydock',
  },
  'lymm': {
    pageName: 'Lymm',
    metaTitle: 'Exterior Cleaning Lymm | R.R.M Specialist',
    metaDescription: 'Premium exterior cleaning for Lymm\'s characterful homes. R.R.M covers WA13 — driveways, roofs, render & gutters. Affordable, fully insured. Free quote!',
    metaKeywords: 'exterior cleaning Lymm, driveway cleaning WA13, roof cleaning Lymm, render cleaning Lymm, R.R.M Lymm Cheshire',
  },
  'great-sankey': {
    pageName: 'Great Sankey',
    metaTitle: 'Exterior Cleaning Great Sankey | R.R.M',
    metaDescription: 'Professional driveway, patio & gutter cleaning in Great Sankey, Warrington. R.R.M covers WA5 — affordable, near you, fully insured. Free quote today!',
    metaKeywords: 'exterior cleaning Great Sankey, driveway cleaning WA5, gutter cleaning Great Sankey, R.R.M Great Sankey',
  },
  'burtonwood': {
    pageName: 'Burtonwood',
    metaTitle: 'Exterior Cleaning Burtonwood | R.R.M Specialist',
    metaDescription: 'Affordable exterior cleaning in Burtonwood, Cheshire. R.R.M covers WA5 between Newton-le-Willows & Warrington. Driveways, roofs, gutters. Book today!',
    metaKeywords: 'exterior cleaning Burtonwood, driveway cleaning Burtonwood WA5, roof cleaning Burtonwood, R.R.M Burtonwood',
  },
  'ashton-in-makerfield': {
    pageName: 'Ashton-in-Makerfield',
    metaTitle: 'Exterior Cleaning Ashton-in-Makerfield | R.R.M',
    metaDescription: 'Moss, grime & blocked gutters? R.R.M covers Ashton-in-Makerfield, WN4 — affordable driveway, roof, patio & gutter cleaning. Fully insured. Book today!',
    metaKeywords: 'exterior cleaning Ashton-in-Makerfield, driveway cleaning WN4, roof cleaning Ashton, gutter cleaning Ashton-in-Makerfield, R.R.M Ashton',
  },
  'skelmersdale': {
    pageName: 'Skelmersdale',
    metaTitle: 'Exterior Cleaning Skelmersdale | R.R.M Specialist',
    metaDescription: 'Affordable exterior cleaning in Skelmersdale, Lancashire. R.R.M covers WN8 — driveways, roofs, gutters, patio & render. Fully insured. Free quote today!',
    metaKeywords: 'exterior cleaning Skelmersdale, driveway cleaning WN8, gutter cleaning Skelmersdale, roof cleaning Skelmersdale, R.R.M Skelmersdale',
  },
  'ormskirk': {
    pageName: 'Ormskirk',
    metaTitle: 'Exterior Cleaning Ormskirk | R.R.M Specialist',
    metaDescription: 'Professional exterior cleaning in Ormskirk, Lancashire. R.R.M covers L39 — driveways, roofs, gutters, patio & heritage masonry. Affordable. Book today!',
    metaKeywords: 'exterior cleaning Ormskirk, driveway cleaning L39, roof cleaning Ormskirk, gutter cleaning Ormskirk, R.R.M Ormskirk Lancashire',
  },
  'irlam': {
    pageName: 'Irlam',
    metaTitle: 'Exterior Cleaning Irlam | R.R.M Specialist',
    metaDescription: 'Affordable exterior cleaning in Irlam, Greater Manchester. R.R.M covers M44 — driveways, roofs, gutters & render. Fully insured, near you. Book today!',
    metaKeywords: 'exterior cleaning Irlam, driveway cleaning M44, roof cleaning Irlam, gutter cleaning Irlam, R.R.M Irlam',
  },
  'manchester': {
    pageName: 'Manchester',
    metaTitle: 'Exterior Cleaning Manchester | R.R.M Specialist',
    metaDescription: 'Professional exterior cleaning across Manchester. R.R.M covers M1–M13 — driveways, roofs, render, gutters & commercial facades. Affordable. Free quote!',
    metaKeywords: 'exterior cleaning Manchester, driveway cleaning Manchester, roof cleaning Manchester, commercial exterior cleaning Manchester, R.R.M Manchester',
  },
  'huyton': {
    pageName: 'Huyton',
    metaTitle: 'Exterior Cleaning Huyton | R.R.M Specialist',
    metaDescription: 'Affordable exterior cleaning in Huyton, Merseyside. R.R.M covers L36 — driveways, roofs, gutters, render & patio cleaning. Fully insured. Book today!',
    metaKeywords: 'exterior cleaning Huyton, driveway cleaning L36, roof cleaning Huyton, gutter cleaning Huyton Merseyside, R.R.M Huyton',
  },
  'wavertree': {
    pageName: 'Wavertree',
    metaTitle: 'Exterior Cleaning Wavertree | R.R.M Specialist',
    metaDescription: 'Professional exterior cleaning for Wavertree\'s Victorian homes. R.R.M covers L15 — brick, render, gutters & windows. Heritage-safe. Affordable. Book today!',
    metaKeywords: 'exterior cleaning Wavertree, driveway cleaning L15, brick cleaning Wavertree, gutter cleaning Wavertree Liverpool, R.R.M Wavertree',
  },
  'halewood': {
    pageName: 'Halewood',
    metaTitle: 'Exterior Cleaning Halewood | R.R.M Specialist',
    metaDescription: 'Affordable exterior cleaning in Halewood, Merseyside. R.R.M covers L26 — driveways, roofs, gutters & patios. Fully insured, near you. Free quote today!',
    metaKeywords: 'exterior cleaning Halewood, driveway cleaning L26, roof cleaning Halewood, gutter cleaning Halewood Merseyside, R.R.M Halewood',
  },
  'uppermill': {
    pageName: 'Uppermill',
    metaTitle: 'Exterior Cleaning Uppermill | R.R.M Specialist',
    metaDescription: 'Specialist exterior cleaning for Uppermill\'s stone-built homes. R.R.M covers OL3 — sandstone, gritstone, render & gutters. Affordable. Free quote today!',
    metaKeywords: 'exterior cleaning Uppermill, sandstone cleaning OL3, stone cleaning Uppermill, gutter cleaning Uppermill Greater Manchester, R.R.M Uppermill',
  },
};

// ─── Static pages ─────────────────────────────────────────────────────────────

const staticPageMeta: Record<string, Omit<PageMeta, 'url'>> = {
  '/': {
    pageName: 'Home',
    metaTitle: 'Expert Exterior Cleaning North West | R.R.M Specialist',
    metaDescription: 'Moss, grime or blocked gutters? R.R.M External Cleaning Specialist restores driveways, roofs, patios & render. Affordable & local, North West. Book now!',
    metaKeywords: 'exterior cleaning North West, driveway cleaning, roof cleaning, gutter cleaning, patio cleaning, render cleaning, jet washing, moss removal, affordable exterior cleaning near me',
  },
  '/services/': {
    pageName: 'All Services',
    metaTitle: 'Exterior Cleaning Services North West | R.R.M',
    metaDescription: 'Browse all 40 exterior cleaning services across 21 North West locations. R.R.M — fully insured, 5-star rated, established 2016. Free no-obligation quotes.',
    metaKeywords: 'exterior cleaning services North West, pressure washing, driveway cleaning, roof cleaning, gutter cleaning, window cleaning, commercial cleaning North West',
  },
  '/locations/': {
    pageName: 'All Locations',
    metaTitle: 'Exterior Cleaning Locations North West | R.R.M',
    metaDescription: 'R.R.M External Cleaning Specialist serves 21 towns across the North West — Newton-le-Willows, Warrington, Manchester & more. Affordable, local, fully insured.',
    metaKeywords: 'exterior cleaning locations North West, cleaning near me, R.R.M service area, North West exterior cleaning towns',
  },
  '/about/': {
    pageName: 'About Us',
    metaTitle: 'About R.R.M External Cleaning Specialist | North West',
    metaDescription: 'R.R.M External Cleaning Specialist — established 2016. Locally based in Newton-le-Willows, fully insured, 10+ years experience across the North West.',
    metaKeywords: 'about R.R.M External Cleaning, exterior cleaning company North West, local cleaning specialist, Newton-le-Willows cleaning company',
  },
  '/contact/': {
    pageName: 'Contact Us',
    metaTitle: 'Contact R.R.M External Cleaning | Free Quote North West',
    metaDescription: 'Get a free no-obligation quote from R.R.M External Cleaning Specialist. Call 07845 463877 or email today. Serving North West, Newton-le-Willows, Warrington.',
    metaKeywords: 'contact R.R.M External Cleaning, free quote exterior cleaning, exterior cleaning quote North West, cleaning company Newton-le-Willows',
  },
};

// ─── Main lookup ──────────────────────────────────────────────────────────────

/**
 * Look up pre-defined or generate programmatic meta for any page URL.
 */
export function getPageMeta(url: string): PageMeta {
  // Static pages
  if (staticPageMeta[url]) return { url, ...staticPageMeta[url] };

  // Service index: /services/[service]/
  const svcMatch = url.match(/^\/services\/([^/]+)\/?$/);
  if (svcMatch) {
    const slug = svcMatch[1];
    if (serviceIndexMeta[slug]) return { url, ...serviceIndexMeta[slug] };
    // Fallback for any service not in overrides
    const s = serviceInfo[slug];
    if (s) return {
      url,
      pageName: s.name,
      metaTitle: `${s.name} North West | R.R.M External Cleaning`,
      metaDescription: `${s.painPoint} R.R.M offers professional, affordable ${s.name.toLowerCase()} across 21 North West locations. Fully insured, est. 2016. Free quote today!`,
      metaKeywords: `${s.kwCore}, ${s.name.toLowerCase()} North West, affordable ${s.name.toLowerCase()} near me`,
    };
  }

  // Location page: /locations/[location]/
  const locMatch = url.match(/^\/locations\/([^/]+)\/?$/);
  if (locMatch) {
    const slug = locMatch[1];
    if (locationPageMeta[slug]) return { url, ...locationPageMeta[slug] };
  }

  // Service × location: /services/[service]/[location]/
  const svcLocMatch = url.match(/^\/services\/([^/]+)\/([^/]+)\/?$/);
  if (svcLocMatch) {
    const [, sSlug, lSlug] = svcLocMatch;
    const serviceKeys = Object.keys(serviceInfo);
    const locationKeys = Object.keys(locationInfo);
    const sIdx = serviceKeys.indexOf(sSlug);
    const lIdx = locationKeys.indexOf(lSlug);
    if (sIdx !== -1 && lIdx !== -1) {
      return generateServiceLocationMeta(sSlug, lSlug, sIdx, lIdx);
    }
  }

  // Default fallback
  return {
    url,
    pageName: 'R.R.M External Cleaning',
    metaTitle: 'Expert Exterior Cleaning North West | R.R.M Specialist',
    metaDescription: 'Professional exterior cleaning services across the North West. R.R.M — affordable, fully insured, 10+ years experience. Free no-obligation quote today!',
    metaKeywords: 'exterior cleaning North West, R.R.M External Cleaning, affordable exterior cleaning near me',
  };
}

// ─── Full array export (for meta.json generation) ────────────────────────────

/**
 * Generates all 900+ page meta entries as a flat array.
 * Use this to create/update public/meta.json.
 */
export function generateAllPageMeta(): PageMeta[] {
  const results: PageMeta[] = [];

  // Static pages
  Object.keys(staticPageMeta).forEach((url) => {
    results.push({ url, ...staticPageMeta[url] });
  });

  // Service index pages (40)
  Object.keys(serviceIndexMeta).forEach((slug) => {
    results.push({ url: `/services/${slug}/`, ...serviceIndexMeta[slug] });
  });

  // Location pages (21)
  Object.keys(locationPageMeta).forEach((slug) => {
    results.push({ url: `/locations/${slug}/`, ...locationPageMeta[slug] });
  });

  // Service × location pages (40 × 21 = 840)
  const serviceKeys  = Object.keys(serviceInfo);
  const locationKeys = Object.keys(locationInfo);

  serviceKeys.forEach((sSlug, sIdx) => {
    locationKeys.forEach((lSlug, lIdx) => {
      results.push(generateServiceLocationMeta(sSlug, lSlug, sIdx, lIdx));
    });
  });

  return results;
}
