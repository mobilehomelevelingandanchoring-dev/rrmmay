import { TermsConditions } from '@/pageComponents/TermsConditions';
import { Metadata } from 'next';

export const metadata: Metadata = {
  title: 'Terms & Conditions',
  description: 'Terms and conditions for R.R.M Exterior Cleaning Specialist',
};

export default function TermsConditionsPage() {
  return <TermsConditions />;
}
