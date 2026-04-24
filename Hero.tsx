import { useState, useEffect } from 'react';
import { CheckCircle, Award, Users } from 'lucide-react';

const backgroundImages = [
  '/assets/hero 1.jpg',
  '/assets/hero 2.jpg',
  '/assets/hero 3.jpg',
  '/assets/hero 4.jpg',
  '/assets/hero 5.jpg'
];

export default function Hero() {
  const [currentImageIndex, setCurrentImageIndex] = useState(0);

  useEffect(() => {
    const interval = setInterval(() => {
      setCurrentImageIndex((prevIndex) =>
        (prevIndex + 1) % backgroundImages.length
      );
    }, 5000);

    return () => clearInterval(interval);
  }, []);
  const handleContactClick = () => {
    const contactSection = document.getElementById('contact');
    if (contactSection) {
      contactSection.scrollIntoView({ behavior: 'smooth' });
    }
  };

  const handleRealisationsClick = () => {
    const realisationsSection = document.getElementById('realisations');
    if (realisationsSection) {
      realisationsSection.scrollIntoView({ behavior: 'smooth' });
    }
  };

  return (
    <section className="relative text-white pt-32 pb-20 px-6 overflow-hidden">
      {backgroundImages.map((img, index) => (
        <div
          key={img}
          className={`absolute inset-0 transition-opacity duration-1000 ease-in-out ${index === currentImageIndex ? 'opacity-100' : 'opacity-0'
            }`}
          style={{
            backgroundImage: `url('${img}')`,
            backgroundSize: 'cover',
            backgroundPosition: 'center',
          }}
        >
          <div className="absolute inset-0 bg-gradient-to-br from-[#2d1b4e]/80 via-[#4c2a7c]/80 to-[#6b3fa0]/80"></div>
        </div>
      ))}

      <div className="container mx-auto relative z-10">
        <div className="flex flex-col lg:flex-row items-center justify-between">
          <div className="lg:w-2/3 mb-12 lg:mb-0">
            <h1 className="text-4xl md:text-5xl lg:text-6xl font-bold mb-6 leading-tight">
              PICCARDI SARL : L'Excellence<br />
              Technique au Service de<br />
              vos <span className="text-[#86efac]">Infrastructures.</span>
            </h1>

            <p className="text-lg mb-8 text-gray-200 max-w-2xl leading-relaxed">
              Piccardi SARL se distingue d'un réseau dense de télécommunications au Cameroun, avec l'expertise et la disponibilité de l'entreprise de demain.
            </p>

            <div className="flex flex-col sm:flex-row gap-4">
              <button
                onClick={handleContactClick}
                className="bg-[#86efac] text-[#1e293b] px-8 py-3 rounded-md font-semibold hover:bg-[#6ee7b7] transition"
              >
                Contacter un expert
              </button>
              <button
                onClick={handleRealisationsClick}
                className="border-2 border-white px-8 py-3 rounded-md font-semibold hover:bg-white hover:text-[#2d1b4e] transition"
              >
                Nos Réalisations
              </button>
            </div>
          </div>

          <div className="lg:w-1/3 flex flex-col space-y-4">
            <div className="bg-white/10 backdrop-blur-md p-4 rounded-lg flex items-center space-x-3">
              <CheckCircle className="text-[#86efac]" size={24} />
              <div>
                <div className="font-semibold">Certification Qualité</div>
                <div className="text-sm text-gray-300">ISO 9001</div>
              </div>
            </div>

            <div className="bg-white/10 backdrop-blur-md p-4 rounded-lg flex items-center space-x-3">
              <Award className="text-[#86efac]" size={24} />
              <div>
                <div className="font-semibold">Excellence</div>
                <div className="text-sm text-gray-300">+15 ans d'expertise</div>
              </div>
            </div>

            <div className="bg-white/10 backdrop-blur-md p-4 rounded-lg flex items-center space-x-3">
              <Users className="text-[#86efac]" size={24} />
              <div>
                <div className="font-semibold">Équipe Certifiée</div>
                <div className="text-sm text-gray-300">Professionnels qualifiés</div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
