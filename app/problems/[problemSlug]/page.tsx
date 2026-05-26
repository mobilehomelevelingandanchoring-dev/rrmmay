import type { Metadata } from 'next';
import { problems } from '@/data/problems';
import ProblemPageContent from '@/pageComponents/ProblemPage';

const BASE_URL = 'https://rrmexternalcleaningspecialist.co.uk';
const SITE_NAME = 'R.R.M External Cleaning Specialist';

export function generateStaticParams() {
  return Object.keys(problems).map((slug) => ({ problemSlug: slug }));
}

export async function generateMetadata({
  params,
}: {
  params: Promise<{ problemSlug: string }>;
}): Promise<Metadata> {
  const { problemSlug } = await params;
  const problem = problems[problemSlug];
  if (!problem) return {};

  const canonical = `${BASE_URL}/problems/${problemSlug}/`;

  // LLM-optimised title: keyword-first, ≤60 chars
  const title = problem.metaTitle.length <= 60
    ? problem.metaTitle
    : `${problem.displayName} — Professional Treatment | R.R.M`;

  // Enhanced description with local intent and near-me signal
  const description =
    `${problem.metaDescription} Professional ${problem.name.toLowerCase()} treatment across Warrington, Newton-le-Willows, St Helens & the North West. Free quotes.`.slice(0, 155);

  return {
    title: { absolute: title },
    description,
    keywords: [
      `${problem.name.toLowerCase()} North West`,
      `${problem.name.toLowerCase()} treatment near me`,
      `${problem.name.toLowerCase()} removal Warrington`,
      `${problem.name.toLowerCase()} exterior cleaning`,
      `professional ${problem.name.toLowerCase()} treatment`,
      'exterior property treatment North West',
      'exterior cleaning specialist near me',
    ],
    alternates: { canonical },
    openGraph: {
      title,
      description,
      url: canonical,
      type: 'article',
      siteName: SITE_NAME,
      locale: 'en_GB',
      images: [
        {
          url: `${BASE_URL}/og-image.png`,
          width: 1200,
          height: 630,
          alt: `${problem.displayName} — Professional Treatment by R.R.M External Cleaning`,
        },
      ],
    },
    twitter: {
      card: 'summary_large_image',
      title,
      description,
      images: [`${BASE_URL}/og-image.png`],
    },
    robots: {
      index: true,
      follow: true,
      googleBot: {
        index: true,
        follow: true,
        'max-image-preview': 'large',
        'max-snippet': -1,
        'max-video-preview': -1,
      },
    },
  };
}

export default async function ProblemPage({
  params,
}: {
  params: Promise<{ problemSlug: string }>;
}) {
  const { problemSlug } = await params;
  return <ProblemPageContent params={{ problemSlug }} />;
}
