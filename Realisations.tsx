const projects = [
  {
    title: 'Alimentation Site BLF',
    subtitle: 'Projet d\'infrastructure électrique',
    image: '/assets/swap.jpeg',
    category: 'ÉLECTRICITÉ'
  },
  {
    title: 'Maintenance & Soudage de Précision',
    subtitle: 'Intervention technique spécialisée',
    image: '/assets/pic en action.jpeg',
    category: 'MAINTENANCE'
  },
  {
    title: 'Installation Réseau',
    subtitle: 'Déploiement infrastructure télécom',
    image: '/assets/hero 2.jpg',
    category: 'TELECOM'
  },
  {
    title: 'Préparation de Structure en Soi',
    subtitle: 'Travaux de génie civil',
    image: '/assets/action 2.jpeg',
    category: 'GÉNIE CIVIL'
  },
  {
    title: 'Élévation Urbain Sene',
    subtitle: 'Construction d\'infrastructure urbaine',
    image: '/assets/maison1.jpeg',
    category: 'CONSTRUCTION'
  },
  {
    title: 'Installation Stratégique en Altitude',
    subtitle: 'Montage complexe d\'un site de télécommunications',
    image: '/assets/pylone b.jpeg',
    category: 'TELECOM'
  }
];

export default function Realisations() {
  return (
    <section id="realisations" className="py-20 px-6 bg-white">
      <div className="container mx-auto">
        <div className="flex flex-col md:flex-row justify-between items-start md:items-center mb-12">
          <div>
            <div className="w-16 h-1 bg-[#7c3aed] mb-4"></div>
            <h2 className="text-3xl md:text-4xl font-bold text-gray-900">Nos Réalisations</h2>
          </div>

          <div className="mt-6 md:mt-0">
            <p className="text-gray-600 max-w-md">
              Découvrez une sélection de nos projets réalisés. Buzzeut notre savoir-faire technique au service de la qualité de vie des populations.
            </p>
          </div>
        </div>

        <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-6">
          {projects.map((project, index) => (
            <div
              key={index}
              className="relative overflow-hidden rounded-lg shadow-lg group cursor-pointer h-80"
            >
              <img
                src={project.image}
                alt={project.title}
                className="w-full h-full object-cover transition-transform duration-500 group-hover:scale-110"
              />

              <div className="absolute inset-0 bg-gradient-to-t from-black/90 via-black/50 to-transparent flex flex-col justify-end p-6">
                <span className="text-[#86efac] text-sm font-semibold mb-2">
                  {project.category}
                </span>
                <h3 className="text-white text-xl font-bold mb-2">{project.title}</h3>
                <p className="text-gray-300 text-sm">{project.subtitle}</p>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
