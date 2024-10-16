import Hero from '@/components/Hero';
import OldWayVsXamBuster from '@/components/OldWayVsXamBuster';
import KeyBenefits from '@/components/KeyBenefits';
import Features from '@/components/Features';
import HowItWorks from '@/components/HowItWorks';
import Pricing from '@/components/Pricing';
import Testimonials from '@/components/Testimonials';
import FAQ from '@/components/FAQ';
import ContactUs from '@/components/ContactUs';
import SignUp from '@/components/SignUp';

export default function Home() {
  return (
    <main className="flex flex-col items-center justify-center min-h-screen">
      <Hero />
      <OldWayVsXamBuster />
      <KeyBenefits />
      <Features />
      <HowItWorks />
      <Pricing />
      <Testimonials />
      <FAQ />
      <ContactUs />
      <SignUp />
    </main>
  );
}