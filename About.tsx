import { CheckCircle } from 'lucide-react';

export default function About() {
  return (
    <section id="about" className="py-20 px-6 bg-gray-50">
      <div className="container mx-auto">
        <div className="grid md:grid-cols-2 gap-12 items-center">
          <div className="relative">
            <div className="w-full h-96 bg-gradient-to-br from-[#7c3aed] to-[#a855f7] rounded-lg overflow-hidden">
              <img
                src="/assets/BOSS.jpg"
                alt="CEO PICCARDI"
                className="w-full h-full object-cover"
              />
            </div>
          </div>

          <div>
            <span className="text-[#7c3aed] font-semibold text-sm tracking-wider uppercase">
              À propos de nous
            </span>
            <h2 className="text-3xl md:text-4xl font-bold text-gray-900 mt-4 mb-6">
              Une vision camerounaise de<br />
              l'infrastructure globale.
            </h2>

            <div className="text-gray-600 leading-relaxed mb-8 space-y-4">
              <p>
                Fondée en 2006 et stratégiquement implantée à Douala, cœur économique de la sous-région, <strong className="text-gray-900">PICCARDI SARL</strong> s'est imposée au fil des années comme le partenaire de confiance et l'acteur incontournable des grands projets d'infrastructure au Cameroun. En conjuguant une expertise technique locale de pointe avec les standards de qualité internationaux les plus stricts, nous accompagnons la transformation des secteurs industriels, technologiques et télécoms.
              </p>
              <p>
                Sous l'impulsion et la direction visionnaire de <strong className="text-[#7c3aed]">Monsieur HEROS PICCARD DONGMO</strong>, notre entreprise repousse continuellement les limites de l'ingénierie. Qu'il s'agisse de génie civil complexe, d'infrastructures IT ou de réseaux télécoms critiques, nous plaçons l'innovation, la sécurité absolue et l'excellence opérationnelle au centre de chaque ouvrage, avec pour ambition de bâtir aujourd'hui l'Afrique de demain.
              </p>
            </div>

            <div className="space-y-4 mb-6">
              <div className="flex items-start space-x-3">
                <CheckCircle className="text-[#86efac] flex-shrink-0 mt-1" size={24} />
                <div>
                  <h3 className="font-bold text-gray-900 mb-1">Fiabilité Garantie</h3>
                  <p className="text-gray-600 text-sm">
                    Une équipe technique d'élite formée aux derniers standards internationaux.
                  </p>
                </div>
              </div>

              <div className="flex items-start space-x-3">
                <CheckCircle className="text-[#86efac] flex-shrink-0 mt-1" size={24} />
                <div>
                  <h3 className="font-bold text-gray-900 mb-1">Engagement Flexible</h3>
                  <p className="text-gray-600 text-sm">
                    Des solutions sur mesure qui s'adaptent aux besoins spécifiques de chaque client.
                  </p>
                </div>
              </div>
            </div>

            <div className="bg-white p-6 rounded-lg shadow-sm">
              <p className="text-gray-700 italic">
                "Notre mission est de bâtir des infrastructures durables qui contribuent au développement économique du Cameroun et de l'Afrique."
              </p>
              <p className="text-[#7c3aed] font-semibold mt-3">— Direction PICCARDI SARL</p>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
