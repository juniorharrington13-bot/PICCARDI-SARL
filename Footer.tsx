import { Building2 } from 'lucide-react';

const partners = [
  { name: 'FOTI SARL', image: '/assets/foti 1.jpeg' },
  { name: 'IHS', image: '/assets/ihs.jpeg' },
  { name: 'INDELEC', image: '/assets/indelec.jpeg' },
  { name: 'INQ', image: '/assets/inq.jpeg' }
];

export default function Footer() {
  return (
    <footer className="bg-[#1a1a2e] text-white">
      <div className="container mx-auto px-6 py-12">
        <div className="mb-12">
          <h3 className="text-xl font-bold mb-6 text-center">Nos Partenaires de Confiance</h3>
          <div className="grid grid-cols-2 md:grid-cols-4 gap-8 items-center justify-items-center">
            {partners.map((partner, index) => (
              <div
                key={index}
                className="bg-white/5 backdrop-blur-sm px-6 py-4 rounded-lg hover:bg-white/10 transition w-full h-24 flex items-center justify-center overflow-hidden"
              >
                <img
                  src={partner.image}
                  alt={partner.name}
                  className="max-h-16 max-w-full object-contain"
                />
              </div>
            ))}
          </div>
        </div>

        <div className="border-t border-gray-700 pt-8">
          <div className="grid md:grid-cols-3 gap-8">
            <div>
              <div className="flex items-center space-x-2 mb-4">
                <Building2 size={24} />
                <span className="text-2xl font-bold">PICCARDI SARL</span>
              </div>
              <p className="text-gray-400 text-sm leading-relaxed">
                L'expertise en infrastructure et télécommunications au service du développement du Cameroun.
              </p>
            </div>

            <div>
              <h4 className="font-bold mb-4">RESSOURCES</h4>
              <ul className="space-y-2 text-gray-400 text-sm">
                <li><a href="#services" className="hover:text-white transition">Services</a></li>
                <li><a href="#about" className="hover:text-white transition">À propos</a></li>
                <li><a href="#realisations" className="hover:text-white transition">Réalisations</a></li>
                <li><a href="#contact" className="hover:text-white transition">Contact</a></li>
              </ul>
            </div>

            <div>
              <h4 className="font-bold mb-4">SERVICES</h4>
              <ul className="space-y-2 text-gray-400 text-sm">
                <li>Protection Parafoudre</li>
                <li>Montage Pylône Telecom</li>
                <li>Informatique & Réseaux</li>
                <li>Froid et Collimation</li>
              </ul>
            </div>
          </div>

          <div className="mt-8 pt-8 border-t border-gray-700 text-center text-gray-400 text-sm">
            <p>© 2026 PICCARDISARL. Tous droits réservés.</p>
          </div>
        </div>
      </div>
    </footer>
  );
}
