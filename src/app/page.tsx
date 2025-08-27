// src/app/page.tsx
import Navigation from '@/components/Navigation';
import Hero from '@/components/Hero';
import Projects from '@/components/Projects';
import Skills from '@/components/Skills';
import About from '@/components/About';
import Contact from '@/components/Contact';
import Footer from '@/components/Footer'; // Import the footer

export default function Home() {
  return (
    <main className="relative">
      <Navigation />
      <Hero />
      <Projects />
      <Skills />
      <About />
      <Contact />
      <Footer /> {/* Add the footer */}
    </main>
  );
}