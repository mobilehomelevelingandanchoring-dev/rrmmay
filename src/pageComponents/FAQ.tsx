'use client';

import Link from 'next/link';
import { Fragment } from 'react';
import { Layout } from '@/components/layout/Layout';
import { Button } from '@/components/ui/button';
import { ContactInfo } from '@/components/ContactInfo';
import {
  Accordion,
  AccordionContent,
  AccordionItem,
  AccordionTrigger,
} from '@/components/ui/accordion';
import { ArrowRight, ChevronRight, Phone } from 'lucide-react';

/* ────────────────────────────────────────────
   FAQ Data — grouped by topic
   ──────────────────────────────────────────── */

const faqCategories = [
  /* ── 1. General Questions ── */
  {
    title: 'General Questions',
    faqs: [
      {
        question: 'What areas do you cover for exterior cleaning?',
        answer: (
          <>
            R.R.M External Cleaning Specialist is based in Newton‑le‑Willows and covers a wide area across the Northwest including{' '}
            <Link href="/locations/warrington" className="text-accent hover:underline">Warrington</Link>,{' '}
            <Link href="/locations/liverpool" className="text-accent hover:underline">Liverpool</Link>,{' '}
            <Link href="/locations/manchester" className="text-accent hover:underline">Manchester</Link>,{' '}
            <Link href="/locations/st-helens" className="text-accent hover:underline">St Helens</Link>,{' '}
            <Link href="/locations/widnes" className="text-accent hover:underline">Widnes</Link>,{' '}
            <Link href="/locations/wigan" className="text-accent hover:underline">Wigan</Link>,{' '}
            Skelmersdale,{' '}
            <Link href="/locations/golborne" className="text-accent hover:underline">Golborne</Link>,{' '}
            <Link href="/locations/huyton" className="text-accent hover:underline">Huyton</Link>,{' '}
            <Link href="/locations/lymm" className="text-accent hover:underline">Lymm</Link>,{' '}
            and the wider Greater Manchester and Merseyside areas. If your location is not listed, contact us — we may still be able to help.
          </>
        ),
      },
      {
        question: 'How long has R.R.M External Cleaning Specialist been operating?',
        answer: 'We have been providing professional exterior cleaning services since 2016. Over that time we have cleaned hundreds of residential and commercial properties across the Northwest, building a strong reputation for reliable, high‑quality work.',
      },
      {
        question: 'Are you fully insured for exterior cleaning work?',
        answer: 'Yes. R.R.M External Cleaning Specialist carries comprehensive public liability insurance covering all residential and commercial cleaning work. We are happy to provide proof of insurance on request before any work begins.',
      },
      {
        question: 'Do you work on commercial properties?',
        answer: (
          <>
            Yes. We provide exterior cleaning for both residential and commercial properties including offices, retail units, warehouses, schools, car parks, and industrial premises across the Northwest. We offer one‑off deep cleans and scheduled maintenance contracts. <Link href="/contact" className="text-accent hover:underline">Contact us</Link> to discuss your commercial requirements.
          </>
        ),
      },
      {
        question: 'What services does R.R.M External Cleaning Specialist offer?',
        answer: (
          <>
            We offer a comprehensive range of exterior cleaning services:{' '}
            <Link href="/services/pressure-washing" className="text-accent hover:underline">Pressure Washing</Link>,{' '}
            <Link href="/services/driveway-cleaning" className="text-accent hover:underline">Driveway Cleaning</Link>,{' '}
            <Link href="/services/roof-cleaning" className="text-accent hover:underline">Roof Cleaning</Link>,{' '}
            <Link href="/services/gutter-cleaning" className="text-accent hover:underline">Gutter Cleaning</Link>,{' '}
            <Link href="/services/window-cleaning" className="text-accent hover:underline">Window Cleaning</Link>,{' '}
            <Link href="/services/render-cleaning" className="text-accent hover:underline">Render Cleaning</Link>,{' '}
            <Link href="/services/soft-washing" className="text-accent hover:underline">Soft Washing</Link>, and{' '}
            <Link href="/services/moss-removal" className="text-accent hover:underline">Moss &amp; Algae Removal</Link>. Each service is tailored to the specific surface and contamination level of your property.
          </>
        ),
      },
      {
        question: 'Can I combine multiple services in one visit?',
        answer: 'Absolutely. Many customers combine driveway cleaning with patio cleaning, or gutter cleaning with a roof clean. Combining services in a single visit is more cost‑effective and means less disruption to your routine. We can quote for bundled services when we assess your property.',
      },
    ],
  },

  /* ── 2. Pricing & Scheduling ── */
  {
    title: 'Pricing & Scheduling',
    faqs: [
      {
        question: 'How do I get a free quote?',
        answer: (
          <>
            Call us on <a href="tel:+447845463877" className="text-accent hover:underline font-semibold">07845 463877</a> or use our{' '}
            <Link href="/contact" className="text-accent hover:underline">online contact form</Link>. We provide free, no‑obligation quotes after assessing your property. The price we quote is the price you pay — no hidden charges.
          </>
        ),
      },
      {
        question: 'How much does pressure washing cost?',
        answer: 'Pricing depends on the area size, surface type, and contamination level. A typical residential driveway clean starts from around £150. Patio cleaning, path cleaning, and wall cleaning are priced similarly based on area. We provide free written quotes so you know the exact cost before work begins.',
      },
      {
        question: 'How much does gutter cleaning cost?',
        answer: 'Gutter cleaning costs depend on the property size, number of storeys, and accessibility. A standard residential gutter clean is very affordable and takes a couple of hours. We include downpipe clearing and debris removal as standard. Contact us for a free quote specific to your property.',
      },
      {
        question: 'How much does roof cleaning cost?',
        answer: 'Roof cleaning is priced based on the roof area, pitch, tile type, and extent of moss or algae coverage. Because we use specialist soft washing techniques and biocidal treatments, the cost reflects the care and products involved. We provide free assessments and written quotes.',
      },
      {
        question: 'Do you offer maintenance contracts for commercial properties?',
        answer: 'Yes. We provide scheduled maintenance contracts for commercial properties on monthly, quarterly, or bi‑annual cycles. Regular cleaning is more cost‑effective than reactive one‑off cleans and keeps premises consistently presentable. We work with facilities managers, property agents, and business owners across the Northwest.',
      },
      {
        question: 'How long does a typical job take?',
        answer: 'Time varies by service and area size. A typical residential driveway takes 2–4 hours. A patio of similar size takes 2–3 hours. Roof cleaning may take a full day. Gutter cleaning on a standard house takes 1–2 hours. We provide an estimated duration with every quote.',
      },
      {
        question: 'Do I need to be home during the work?',
        answer: 'Not necessarily. As long as we have access to the areas needing cleaning and an outside tap for water, you do not need to be present. Many customers give us access and carry on with their day. We will update you when the job is complete.',
      },
      {
        question: 'How far in advance should I book?',
        answer: 'We recommend booking 1–2 weeks in advance, though we can sometimes accommodate shorter notice. Spring and summer are our busiest periods, so earlier booking is advisable during March through August.',
      },
      {
        question: 'Do you charge for assessments or quotes?',
        answer: 'No. All assessments and quotes are completely free with no obligation. We visit the property, evaluate the surfaces and contamination, and provide a clear written price.',
      },
    ],
  },

  /* ── 3. Pressure Washing ── */
  {
    title: 'Pressure Washing Questions',
    faqs: [
      {
        question: 'What is the difference between pressure washing and soft washing?',
        answer: (
          <>
            <Link href="/services/pressure-washing" className="text-accent hover:underline">Pressure washing</Link> uses high‑pressure water to physically remove contamination from hard surfaces like driveways, patios, and concrete.{' '}
            <Link href="/services/soft-washing" className="text-accent hover:underline">Soft washing</Link> uses low‑pressure application of specialist biocidal chemicals to treat delicate surfaces like render, roofing, and painted walls that high pressure would damage. We assess each surface and use the appropriate method — and often combine both on a single property.
          </>
        ),
      },
      {
        question: 'Will pressure washing damage my driveway or patio?',
        answer: 'Not when carried out by experienced professionals. The most common cause of pressure washing damage is incorrect pressure settings or holding the nozzle too close. We assess every surface before cleaning and select the correct pressure, nozzle, and technique. Block paving, natural stone, concrete, tarmac, and render each require a different approach.',
      },
      {
        question: 'What surfaces can you pressure wash?',
        answer: (
          <>
            We pressure wash block paving, concrete, tarmac, natural stone (sandstone, limestone, granite, York stone), porcelain paving, brick, slate, and timber or composite decking. For rendered walls and roofs, we use <Link href="/services/soft-washing" className="text-accent hover:underline">soft washing</Link> instead. Each surface requires specific pressure settings and techniques.
          </>
        ),
      },
      {
        question: 'Do you use a rotary surface cleaner for driveways?',
        answer: 'Yes. We use commercial rotary surface cleaners for all flat areas like driveways and patios. These deliver perfectly even cleaning without the zebra‑stripe patterns that hand‑held lances produce. For edges, corners, and detailed areas, we switch to precision lance work.',
      },
      {
        question: 'Can you remove oil stains from driveways?',
        answer: 'Yes. We use specialist degreasing agents that effectively treat most oil and petroleum stains on concrete and block paving. Very old or deeply penetrated stains may lighten significantly rather than disappear completely — we set realistic expectations during our assessment.',
      },
      {
        question: 'Do you offer driveway sealing after pressure washing?',
        answer: (
          <>
            Yes. After cleaning, we can apply protective sealant to block paving and natural stone. Sealing inhibits future staining, slows weed and moss growth in joints, enhances the colour of the surface, and extends the time between cleans. See our <Link href="/services/driveway-cleaning" className="text-accent hover:underline">driveway cleaning</Link> page for more details.
          </>
        ),
      },
    ],
  },

  /* ── 4. Driveway Cleaning ── */
  {
    title: 'Driveway Cleaning Questions',
    faqs: [
      {
        question: 'Do you re‑sand block paving after driveway cleaning?',
        answer: (
          <>
            Yes. Pressure washing block paving inevitably displaces some jointing sand. We carry kiln‑dried sand and re‑fill all joints after cleaning as standard. This maintains the structural integrity of the paving and prevents weed regrowth. Learn more on our <Link href="/services/driveway-cleaning" className="text-accent hover:underline">driveway cleaning</Link> page.
          </>
        ),
      },
      {
        question: 'How often should I have my driveway cleaned?',
        answer: 'In the Northwest climate, most driveways benefit from annual cleaning. Properties with heavy tree coverage, north‑facing surfaces, or persistent shade may need cleaning every 6–9 months. Applying a sealant after cleaning significantly extends the interval.',
      },
      {
        question: 'What types of driveway can you clean?',
        answer: 'We clean all driveway surface types: block paving, concrete, tarmac, asphalt, natural stone (sandstone, limestone, granite), resin‑bound, and resin‑bonded. Each material requires different pressure settings and techniques, and we have the equipment and experience to handle them all.',
      },
      {
        question: 'Can you clean a driveway that has weeds growing through the joints?',
        answer: 'Yes. We pre‑treat weeds and moss before pressure washing, then clean the entire surface, re‑sand the joints, and can apply a biocidal treatment to inhibit regrowth. The result is a clean, weed‑free driveway.',
      },
    ],
  },

  /* ── 5. Roof Cleaning ── */
  {
    title: 'Roof Cleaning Questions',
    faqs: [
      {
        question: 'Is roof cleaning safe for my tiles?',
        answer: (
          <>
            Yes, when done correctly. We never use high‑pressure water on roofs. Our <Link href="/services/roof-cleaning" className="text-accent hover:underline">roof cleaning</Link> uses low‑pressure soft washing and professional biocide treatments that safely kill and remove moss, algae, and lichen without damaging tiles or forcing water under them.
          </>
        ),
      },
      {
        question: 'How long does a roof clean last?',
        answer: 'A professional roof clean with biocide treatment typically prevents significant regrowth for 2–4 years depending on your location, roof orientation, and surrounding tree coverage. Properties in damper, shadier locations may see regrowth sooner.',
      },
      {
        question: 'Will you walk on my roof?',
        answer: 'We avoid walking on roofs wherever possible. Our soft washing equipment can be applied from ladders, scaffolding, or cherry pickers depending on roof access. Where foot traffic on the roof is unavoidable, we use crawl boards to distribute weight and protect tiles.',
      },
      {
        question: 'Can moss on a roof cause damage?',
        answer: 'Yes. Moss retains moisture against tiles, which can lead to frost damage in winter. Moss roots can lift tile edges, allowing water ingress. Heavy moss growth also adds weight to the roof structure and blocks gutters with debris as it sheds. Professional removal protects the roof long‑term.',
      },
    ],
  },

  /* ── 6. Gutter Cleaning ── */
  {
    title: 'Gutter Cleaning Questions',
    faqs: [
      {
        question: 'How often should gutters be cleaned?',
        answer: (
          <>
            At minimum once per year in late autumn after most leaves have fallen. Properties surrounded by mature trees — particularly in areas like Skelmersdale, Lymm, and south Warrington — benefit from cleaning twice yearly: once in late autumn and once in spring. See our <Link href="/services/gutter-cleaning" className="text-accent hover:underline">gutter cleaning</Link> page for full details.
          </>
        ),
      },
      {
        question: 'How do you clean gutters?',
        answer: 'We use industrial gutter vacuum systems fitted with carbon fibre poles reaching up to 12 metres. This allows us to clean gutters safely from ground level without ladders on most properties. The vacuum removes leaves, moss, silt, and compacted debris thoroughly. Downpipe clearing is included as standard.',
      },
      {
        question: 'What happens if blocked gutters are left uncleaned?',
        answer: 'Blocked gutters cause water to overflow down external walls, leading to damp, mould, and peeling paint inside. Standing water rots fascia boards and soffits. In winter, trapped water freezes and can crack guttering. Persistent water pooling at the base of walls can lead to foundation problems over time.',
      },
      {
        question: 'Do you clean downpipes as well as gutters?',
        answer: 'Yes. Downpipe clearing is included as standard with every gutter clean. Blocked downpipes are one of the most common causes of gutter overflow. We check every downpipe for free flow and flush any blockages to restore proper drainage.',
      },
      {
        question: 'Can you clean gutters on tall or difficult buildings?',
        answer: 'Yes. Our gutter vacuum systems reach up to 12 metres from ground level, covering most two‑ and three‑storey properties. For taller or more complex buildings, we use appropriate ladder or platform access equipment.',
      },
    ],
  },

  /* ── 7. Window Cleaning ── */
  {
    title: 'Window Cleaning Questions',
    faqs: [
      {
        question: 'How does pure water window cleaning work?',
        answer: (
          <>
            Pure water has had all minerals and impurities removed through a filtration process. When applied to glass via our water‑fed poles, it attracts and dissolves dirt, then dries without leaving spots or streaks. This method is safer than traditional ladder‑based cleaning and produces excellent results. See our <Link href="/services/window-cleaning" className="text-accent hover:underline">window cleaning</Link> page for more information.
          </>
        ),
      },
      {
        question: 'How often should windows be cleaned?',
        answer: 'For residential properties, every 4–8 weeks keeps windows consistently clean. Commercial properties may need more frequent cleaning depending on location, foot traffic, and the impression they need to maintain. We offer regular scheduled cleaning visits.',
      },
      {
        question: 'Can you clean windows on upper floors?',
        answer: 'Yes. Our water‑fed pole systems reach windows on most residential and commercial properties from ground level, including second‑ and third‑floor windows. This is safer than traditional ladder methods and allows us to clean frames and sills at the same time.',
      },
    ],
  },

  /* ── 8. Render Cleaning ── */
  {
    title: 'Render Cleaning Questions',
    faqs: [
      {
        question: 'How do you clean rendered walls without causing damage?',
        answer: (
          <>
            We use <Link href="/services/soft-washing" className="text-accent hover:underline">soft washing</Link> — low‑pressure application of specialist biocidal solutions that kill algae, mould, and lichen at the cellular level. The surface is then gently rinsed. This is safe for K‑rend, silicone render, monocouche, and painted surfaces. High‑pressure washing would damage these coatings. See our <Link href="/services/render-cleaning" className="text-accent hover:underline">render cleaning</Link> page.
          </>
        ),
      },
      {
        question: 'Why does render go green or black?',
        answer: 'Rendered walls develop green algae and black mould due to persistent moisture exposure. North‑ and east‑facing walls are worst affected because they receive less direct sunlight and remain damp for longer after rain. The Northwest climate makes this a near‑universal problem on rendered properties.',
      },
      {
        question: 'How long does a render clean last?',
        answer: 'A professional soft wash with biocidal treatment typically keeps rendered walls clean for 2–4 years. The biocide continues to work after the initial clean, inhibiting regrowth. Results vary depending on wall orientation, shade, and local moisture levels.',
      },
    ],
  },

  /* ── 9. Soft Washing & Moss Removal ── */
  {
    title: 'Soft Washing & Moss Removal Questions',
    faqs: [
      {
        question: 'What is soft washing and when is it used?',
        answer: (
          <>
            <Link href="/services/soft-washing" className="text-accent hover:underline">Soft washing</Link> applies specialist biocidal cleaning solutions at low pressure to surfaces that high‑pressure water would damage. It is the correct method for rendered walls, roofs, painted surfaces, timber cladding, and aged stonework. The chemicals kill biological growth at the cellular level, producing longer‑lasting results than pressure alone.
          </>
        ),
      },
      {
        question: 'How does moss removal work on different surfaces?',
        answer: (
          <>
            Our <Link href="/services/moss-removal" className="text-accent hover:underline">moss removal</Link> approach depends on the surface. On driveways and patios, we combine high‑pressure cleaning with biocidal treatment. On roofs, we use low‑pressure soft washing. On walls and render, we apply biocide at low pressure and gently rinse. In every case, the treatment kills moss at the root and significantly delays regrowth.
          </>
        ),
      },
      {
        question: 'Will moss come back after treatment?',
        answer: 'Eventually, yes — moss is a natural organism that will recolonise over time. However, professional treatment with biocidal products significantly slows regrowth compared to simply scraping moss off. Depending on the surface and location, you can expect 1–4 years before significant re‑establishment.',
      },
      {
        question: 'Are your biocidal treatments safe for the environment?',
        answer: 'All products we use are biodegradable and approved for outdoor use. We manage application carefully, avoid direct contact with planted areas, and control runoff into drainage systems. Our treatments are effective against biological growth while being responsible to the surrounding environment.',
      },
    ],
  },

  /* ── 10. Location-Specific Questions ── */
  {
    title: 'Location‑Specific Questions',
    faqs: [
      {
        question: 'What pressure washing services do you offer in Liverpool?',
        answer: (
          <>
            We provide full <Link href="/services/pressure-washing/liverpool" className="text-accent hover:underline">pressure washing in Liverpool</Link> including driveway cleaning, patio cleaning, commercial forecourt washing, wall cleaning, and decking cleaning. We cover all Liverpool areas from Walton and Anfield to Aigburth, Woolton, and the city centre. Liverpool&apos;s maritime climate and heavy rainfall make annual pressure washing essential for most properties.
          </>
        ),
      },
      {
        question: 'Do you offer pressure washing in Warrington?',
        answer: (
          <>
            Yes. Our <Link href="/services/pressure-washing/warrington" className="text-accent hover:underline">pressure washing service in Warrington</Link> covers every area including Stockton Heath, Appleton, Grappenhall, Birchwood, Great Sankey, Chapelford, and the town centre. Warrington&apos;s position at the junction of three motorways means traffic pollution is a significant factor in surface contamination.
          </>
        ),
      },
      {
        question: 'Do you offer gutter cleaning in Warrington?',
        answer: (
          <>
            Yes. We provide <Link href="/services/gutter-cleaning/warrington" className="text-accent hover:underline">professional gutter cleaning across Warrington</Link> using industrial vacuum systems. We cover all Warrington areas and offer both one‑off cleans and scheduled maintenance for residential and commercial properties.
          </>
        ),
      },
      {
        question: 'Do you provide gutter cleaning in Skelmersdale?',
        answer: (
          <>
            Yes. <Link href="/services/gutter-cleaning/skelmersdale" className="text-accent hover:underline">Gutter cleaning in Skelmersdale</Link> is one of our core services. Skelmersdale&apos;s extensive green spaces and mature trees contribute heavy leaf debris that blocks gutters, making regular cleaning essential — particularly in late autumn and spring.
          </>
        ),
      },
      {
        question: 'What exterior cleaning services do you provide in St Helens?',
        answer: (
          <>
            We offer the full range of exterior cleaning in <Link href="/locations/st-helens" className="text-accent hover:underline">St Helens</Link>: pressure washing, driveway cleaning, patio cleaning, gutter cleaning, roof cleaning, render cleaning, soft washing, and moss removal for both residential and commercial properties.
          </>
        ),
      },
      {
        question: 'Do you cover Widnes for pressure washing and gutter cleaning?',
        answer: (
          <>
            Yes. We provide pressure washing, driveway cleaning, gutter cleaning, and all other exterior cleaning services in <Link href="/locations/widnes" className="text-accent hover:underline">Widnes</Link> and the surrounding Halton area. Widnes properties near the Mersey are particularly susceptible to moisture‑driven algae and moss growth.
          </>
        ),
      },
      {
        question: 'Do you provide exterior cleaning services in Manchester?',
        answer: (
          <>
            Yes. We cover <Link href="/locations/manchester" className="text-accent hover:underline">Manchester</Link> and Greater Manchester for pressure washing, driveway cleaning, roof cleaning, gutter cleaning, render cleaning, and soft washing. Manchester&apos;s higher rainfall and urban pollution make professional exterior cleaning particularly beneficial.
          </>
        ),
      },
      {
        question: 'Do you operate in Wigan?',
        answer: (
          <>
            Yes. We provide all exterior cleaning services in <Link href="/locations/wigan" className="text-accent hover:underline">Wigan</Link> and surrounding areas including Standish, Hindley, Aspull, and Ince. Wigan&apos;s mix of older terraced housing and modern estates all benefit from professional pressure washing and gutter maintenance.
          </>
        ),
      },
      {
        question: 'What services do you offer in Newton‑le‑Willows?',
        answer: (
          <>
            As our home base, <Link href="/locations/newton-le-willows" className="text-accent hover:underline">Newton‑le‑Willows</Link> receives our full range of services: pressure washing, driveway cleaning, patio cleaning, roof cleaning, gutter cleaning, window cleaning, render cleaning, soft washing, and moss removal. Being locally based means fast response times and competitive pricing for Newton residents.
          </>
        ),
      },
      {
        question: 'Do you cover Golborne and Huyton?',
        answer: (
          <>
            Yes. We regularly clean properties in both <Link href="/locations/golborne" className="text-accent hover:underline">Golborne</Link> and <Link href="/locations/huyton" className="text-accent hover:underline">Huyton</Link>. Both areas are well within our standard coverage area and receive the full range of services.
          </>
        ),
      },
      {
        question: 'Do you offer services in Lymm?',
        answer: (
          <>
            Yes. <Link href="/locations/lymm" className="text-accent hover:underline">Lymm</Link>&apos;s leafy, canal‑side setting means properties are particularly prone to moss, algae, and leaf staining. We provide pressure washing, driveway cleaning, gutter cleaning, and all other services across Lymm and the surrounding villages.
          </>
        ),
      },
      {
        question: 'What is the best pressure washing approach for Liverpool patios?',
        answer: 'Liverpool patios — particularly Indian sandstone, which is very popular in south Liverpool suburbs — need careful pressure selection to avoid etching the stone. We use controlled pressure combined with stone‑safe cleaning agents. The city\'s persistent moisture means annual cleaning is recommended, ideally in spring after winter contamination has peaked.',
      },
      {
        question: 'How often should gutters be cleaned in Skelmersdale?',
        answer: 'Skelmersdale\'s extensive tree coverage and above‑average rainfall mean gutters should be cleaned at least once per year in late autumn. Properties near mature trees — particularly in areas like Ashurst, Tanhouse, and the greener edges of town — benefit from a second clean in spring to clear blossom, seed pods, and winter moss.',
      },
    ],
  },

  /* ── 11. Preparation & Expectations ── */
  {
    title: 'Preparation & Expectations',
    faqs: [
      {
        question: 'Do I need to prepare anything before you arrive?',
        answer: 'Please move vehicles off the driveway if that is being cleaned, and clear any loose items (pots, furniture, bins) from the area to be worked on. Ensure we have access to an outside tap. Other than that, we handle everything.',
      },
      {
        question: 'Do you need access to water and electricity?',
        answer: 'We need access to an outside tap for water supply. Our pressure washing equipment is powered by its own petrol‑driven units, so we do not require electricity from your property. If no outside tap is available, we can usually connect to an indoor tap with an appropriate fitting.',
      },
      {
        question: 'What should I expect after a driveway or patio clean?',
        answer: 'Immediately after cleaning, surfaces may appear slightly darker while still wet. As the surface dries over the following hours, the full result becomes visible. Block paving will have fresh jointing sand applied. Some deeply embedded stains may have lightened but not fully disappeared — we always set clear expectations during the assessment.',
      },
      {
        question: 'Will there be mess or water runoff?',
        answer: 'There will be water and loosened debris during the cleaning process, which is unavoidable. We manage runoff carefully, direct water towards drains where possible, and clean up the area after the job. We take care around neighbouring properties and planted areas.',
      },
    ],
  },

  /* ── 12. Insurance & Guarantees ── */
  {
    title: 'Insurance & Guarantees',
    faqs: [
      {
        question: 'Are you insured for working on my property?',
        answer: 'Yes. R.R.M External Cleaning Specialist carries full public liability insurance covering all work on residential and commercial properties. This protects you and your property in the unlikely event of any issues. We can provide documentation on request.',
      },
      {
        question: 'Do you guarantee your work?',
        answer: 'We stand behind the quality of our work. If you are not satisfied with the result, contact us and we will return to address any concerns. For biocidal treatments (roof cleaning, render cleaning, soft washing), we advise on expected longevity based on your property\'s specific conditions.',
      },
      {
        question: 'What happens if something is accidentally damaged during cleaning?',
        answer: 'In the unlikely event of accidental damage, our public liability insurance covers repair or replacement costs. We take great care to protect your property, assess risks before starting, and use appropriate techniques for every surface. If any issue arises, we deal with it promptly and professionally.',
      },
    ],
  },

  /* ── 13. Seasonal Advice ── */
  {
    title: 'Seasonal Advice',
    faqs: [
      {
        question: 'When is the best time to have my driveway or patio cleaned?',
        answer: 'Spring (March–May) is the most popular time, as it removes accumulated winter grime and prepares outdoor spaces for summer use. Autumn (October–November) is also effective as a pre‑winter preparation, clearing leaf debris and moss before the coldest months.',
      },
      {
        question: 'When should I schedule gutter cleaning?',
        answer: 'Late autumn (November–December) is the most important time, after the majority of leaves have fallen. A spring clean is recommended for properties near mature trees. After‑storm gutter checks are advisable if you notice water overflowing during heavy rain.',
      },
      {
        question: 'Can you pressure wash in winter?',
        answer: 'We can work through most of the winter, as long as temperatures are above freezing. Frost and ice make surfaces dangerous to work on and can affect cleaning results. We monitor conditions and will advise if a reschedule is necessary.',
      },
      {
        question: 'Is there a best season for roof cleaning?',
        answer: 'Late spring through early autumn provides the best conditions for roof cleaning. Biocidal treatments work most effectively in warmer temperatures when biological organisms are actively growing. Dry weather following application allows the treatment to penetrate and work fully.',
      },
      {
        question: 'Should I clean my property before selling?',
        answer: 'Pressure washing the driveway, patio, and external walls is one of the most cost‑effective improvements a seller can make. Estate agents consistently report that clean exterior surfaces improve first impressions and positively influence buyer offers. We regularly carry out pre‑sale cleans across the Northwest.',
      },
    ],
  },
];

/* ────────────────────────────────────────────
   Breadcrumbs
   ──────────────────────────────────────────── */
const breadcrumbs = [
  { name: 'Home', url: '/' },
  { name: 'FAQ', url: '/faq' },
];

/* ────────────────────────────────────────────
   Component
   ──────────────────────────────────────────── */
export default function FAQ() {
  return (
    <Layout>
      {/* Breadcrumb */}
      <nav className="bg-secondary/50" aria-label="Breadcrumb">
        <div className="container-custom py-4">
          <ol className="flex items-center gap-2 text-sm flex-wrap">
            {breadcrumbs.map((crumb, index) => (
              <Fragment key={crumb.url}>
                {index > 0 && (
                  <li className="text-primary-foreground/50">
                    <ChevronRight className="h-4 w-4" />
                  </li>
                )}
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

      {/* Hero */}
      <section className="hero-bg py-16 md:py-24">
        <div className="container-custom">
          <div className="max-w-3xl">
            <h1 className="font-display text-4xl md:text-5xl font-bold text-primary-foreground mb-6">
              Frequently Asked Questions
            </h1>
            <p className="text-lg md:text-xl text-primary-foreground/85 leading-relaxed mb-4">
              Find answers to common questions about our <strong>pressure washing</strong>, <strong>driveway cleaning</strong>, <strong>gutter cleaning</strong>, <strong>roof cleaning</strong>, <strong>render cleaning</strong>, <strong>soft washing</strong>, <strong>window cleaning</strong>, and <strong>moss removal</strong> services across Liverpool, Warrington, Manchester, St Helens, and the wider Northwest.
            </p>
            <p className="text-primary-foreground/75">
              Can&apos;t find what you&apos;re looking for?{' '}
              <Link href="/contact" className="text-accent hover:underline font-semibold">Get in touch</Link> or call{' '}
              <a href="tel:+447845463877" className="text-accent hover:underline font-semibold">07845 463877</a> and we&apos;ll be happy to help.
            </p>
          </div>
        </div>
      </section>

      {/* FAQ Sections */}
      <div className="bg-gradient-to-b from-primary/5 via-primary/[0.03] to-background">
        <section className="section-padding">
          <div className="container-custom">
            <div className="max-w-4xl mx-auto space-y-10">
              {faqCategories.map((category, categoryIndex) => (
                <div
                  key={categoryIndex}
                  className={
                    categoryIndex % 2 === 0
                      ? 'bg-white/70 rounded-xl p-6 md:p-8 border border-primary/10 shadow-sm'
                      : 'bg-primary/[0.04] rounded-xl p-6 md:p-8 border border-primary/10'
                  }
                >
                  <h2 className="font-display text-2xl font-bold text-foreground mb-6">
                    {category.title}
                  </h2>
                  <Accordion type="single" collapsible className="w-full">
                    {category.faqs.map((faq, faqIndex) => (
                      <AccordionItem
                        key={faqIndex}
                        value={`${categoryIndex}-${faqIndex}`}
                        className="border-border/50"
                      >
                        <AccordionTrigger className="text-left font-display font-semibold text-foreground hover:text-accent">
                          {faq.question}
                        </AccordionTrigger>
                        <AccordionContent className="text-muted-foreground leading-relaxed">
                          {faq.answer}
                        </AccordionContent>
                      </AccordionItem>
                    ))}
                  </Accordion>
                </div>
              ))}
            </div>
          </div>
        </section>
      </div>

      {/* CTA */}
      <section className="py-16 hero-bg">
        <div className="container-custom text-center">
          <h2 className="font-display text-3xl font-bold text-primary-foreground mb-4">
            Still Have Questions?
          </h2>
          <p className="text-primary-foreground/85 mb-8 max-w-xl mx-auto">
            We&apos;re happy to answer any questions about our services. Get in touch and we&apos;ll provide the information you need.
          </p>
          <div className="flex flex-col sm:flex-row gap-4 justify-center">
            <Button variant="hero" size="lg" asChild className="group">
              <a href="tel:+447845463877">
                <Phone className="h-5 w-5 mr-2 group-hover:scale-110 transition-transform" />
                Call: 07845 463877
              </a>
            </Button>
            <Button variant="heroOutline" size="lg" asChild>
              <Link href="/contact">
                Contact Us
                <ArrowRight className="ml-2 h-4 w-4" />
              </Link>
            </Button>
          </div>
        </div>
      </section>

      {/* Contact Information */}
      <section className="section-padding bg-secondary/10">
        <div className="container-custom">
          <h2 className="font-display text-3xl md:text-4xl font-bold text-foreground text-center mb-2">
            Get in Touch
          </h2>
          <p className="text-center text-muted-foreground mb-12 max-w-2xl mx-auto">
            Reach out directly to our team for personalised assistance and free quotes across Liverpool, Warrington, Manchester, and the wider Northwest.
          </p>
          <ContactInfo variant="default" />
        </div>
      </section>
    </Layout>
  );
}
