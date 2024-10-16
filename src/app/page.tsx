// pages/index.tsx
import Header from '@/app/components/Header';
import Hero from '@/app/components/Hero';
import Statistics from '@/app/components/Statistics';
import Features from '@/app/components/Features';
import Pricing from '@/app/components/Pricing';
import Testimonials from '@/app/components/Testimonials';
import CTA from '@/app/components/CTA';
import Footer from '@/app/components/Footer';

export default function Home() {
  return (
    <>
      <div className="container">
        <Header />
        <Hero />
        <Statistics />
        <Features />
        <Pricing />
        <Testimonials />
        <CTA />
        <Footer />
      </div>
    </>
  );
}
