import Header from '@/components/layout/Header';
import Footer from '@/components/Footer';
import HeroSectionUpgraded from '@/components/sections/HeroSectionUpgraded';
import PromiseSection from '@/components/sections/PromiseSection';
import ServicesSectionUpgraded from '@/components/sections/ServicesSectionUpgraded';
import ProcessSectionUpgraded from '@/components/sections/ProcessSectionUpgraded';
import TestimonialsSectionUpgraded from '@/components/sections/TestimonialsSectionUpgraded';
import StatsSectionUpgraded from '@/components/sections/StatsSectionUpgraded';
import ContactSectionUpgraded from '@/components/sections/ContactSectionUpgraded';

export default function Home() {
  return (
    <div style={{ width: '100%', maxWidth: '100vw', overflowX: 'hidden' }}>
      <Header />
      <main style={{ width: '100%', maxWidth: '100vw', overflowX: 'hidden', marginTop: 0 }}>
        <div id="hero"><HeroSectionUpgraded /></div>
        <div id="process"><ProcessSectionUpgraded /></div>
        <div id="testimonials"><TestimonialsSectionUpgraded /></div>
        <div id="promise"><PromiseSection /></div>
        <div id="services"><ServicesSectionUpgraded /></div>
        <div id="stats"><StatsSectionUpgraded /></div>
        <div id="contact"><ContactSectionUpgraded /></div>
      </main>
      <Footer />
    </div>
  );
}
