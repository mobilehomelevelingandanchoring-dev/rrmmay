import { Layout } from '@/components/layout/Layout';
import { Hero } from '@/components/home/Hero';
import { ServicesOverview } from '@/components/home/ServicesOverview';
import { AreasSection } from '@/components/home/AreasSection';
import { WhyChooseUs } from '@/components/home/WhyChooseUs';
import { FAQPreview } from '@/components/home/FAQPreview';
import { CTASection } from '@/components/home/CTASection';
import VideoSection from '@/components/VideoSection';
import { useEffect } from 'react';
import { localBusinessSchema, organizationSchema } from '@/lib/schema';

const Index = () => {
  useEffect(() => {
    // Add LocalBusiness schema
    const localBusinessEl = document.createElement('script');
    localBusinessEl.type = 'application/ld+json';
    localBusinessEl.innerHTML = JSON.stringify(localBusinessSchema);
    document.head.appendChild(localBusinessEl);

    // Add Organization schema
    const orgEl = document.createElement('script');
    orgEl.type = 'application/ld+json';
    orgEl.innerHTML = JSON.stringify(organizationSchema);
    document.head.appendChild(orgEl);

    return () => {
      document.head.removeChild(localBusinessEl);
      document.head.removeChild(orgEl);
    };
  }, []);

  return (
    <Layout>
      <Hero />
      <VideoSection />
      <ServicesOverview />
      <WhyChooseUs />
      <AreasSection />
      <FAQPreview />
      <CTASection />
    </Layout>
  );
};

export default Index;
