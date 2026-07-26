import { Navbar } from '@/components/common/Navbar';
import { Footer } from '@/components/common/Footer';
import { BackgroundShapes } from '@/components/common/BackgroundShapes';
import { Hero } from '@/components/sections/Hero';
import { Trust } from '@/components/sections/Trust';
import { About } from '@/components/sections/About';
import { Skills } from '@/components/sections/Skills';
import { Projects } from '@/components/sections/Projects';
import { Timeline } from '@/components/sections/Timeline';
import { GitHub } from '@/components/sections/GitHub';
import { Differentiators } from '@/components/sections/Differentiators';
import { Testimonials } from '@/components/sections/Testimonials';
import { Contact } from '@/components/sections/Contact';
import { siteConfig } from '@/lib/data';

const jsonLd = {
  '@context': 'https://schema.org',
  '@type': 'Person',
  name: siteConfig.name,
  jobTitle: siteConfig.role,
  email: `mailto:${siteConfig.email}`,
  url: 'https://sujith.dev',
  sameAs: [siteConfig.github, siteConfig.linkedin],
  address: { '@type': 'PostalAddress', addressLocality: 'Coimbatore', addressRegion: 'Tamil Nadu', addressCountry: 'India' },
  alumniOf: { '@type': 'CollegeOrUniversity', name: 'PSG College of Technology' },
  knowsAbout: ['JavaScript', 'Python', 'React', 'Node.js', 'Google Gemini API', 'Full-Stack Development', 'AI'],
};

export default function Home() {
  return (
    <>
      <script type="application/ld+json" dangerouslySetInnerHTML={{ __html: JSON.stringify(jsonLd) }} />
      <BackgroundShapes />
      <Navbar />
      <main>
        <Hero />
        <Trust />
        <About />
        <Skills />
        <Projects />
        <Timeline />
        <GitHub />
        <Differentiators />
        <Testimonials />
        <Contact />
      </main>
      <Footer />
    </>
  );
}
