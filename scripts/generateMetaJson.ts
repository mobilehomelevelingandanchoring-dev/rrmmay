/**
 * scripts/generateMetaJson.ts
 *
 * Generates public/meta.json from pageMetaLookup.
 *
 * Run:
 *   npx ts-node --project tsconfig.json scripts/generateMetaJson.ts
 */

import { writeFileSync } from 'fs';
import { join } from 'path';
import { generateAllPageMeta } from '../src/lib/pageMetaLookup';

const pages = generateAllPageMeta();
const outputPath = join(process.cwd(), 'public', 'meta.json');

writeFileSync(outputPath, JSON.stringify(pages, null, 2), 'utf-8');

console.log(`✅ Generated ${pages.length} page meta entries → public/meta.json`);
