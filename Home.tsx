import Header from '../components/Header';
import Hero from '../components/Hero';
import Expertise from '../components/Expertise';
import ServiceBanner from '../components/ServiceBanner';
import Realisations from '../components/Realisations';
import About from '../components/About';
import Contact from '../components/Contact';
import Footer from '../components/Footer';
export default function Home() {
  return (
    <div className="min-h-screen">
      <Header />
      <Hero />
      <Expertise />
      <ServiceBanner />
      <Realisations />
      <About />
      <Contact />
      <Footer />
    </div>
  );
}
