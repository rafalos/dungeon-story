import Navbar from '@/components/Landing/Navbar';
import About from '@/components/Landing/Sections/About';
import Features from '@/components/Landing/Sections/Features';
import Journey from '@/components/Landing/Sections/Journey';
import Hero from '@/components/Landing/Sections/Hero';
import Footer from '@/components/Landing/Footer';

const LandingPage = () => (
  <div className="flex w-full justify-center bg-landingBg font-poppins">
    <div className="flex w-full flex-col">
      <Navbar />
      <main className="flex-1">
        <Hero />
        <About />
        <Features />
        <Journey />
      </main>
      <Footer />
    </div>
  </div>
);

export default LandingPage;
