import { useParams, Link } from 'react-router-dom';
import { ArrowLeft, CheckCircle } from 'lucide-react';
import ContactForm from '../components/ContactForm';

const serviceDetails: Record<string, any> = {
  'protection-parafoudre': {
    title: 'Protection Parafoudre',
    subtitle: 'Sécurisez vos infrastructures contre les surcharges électriques',
    image: '/assets/paraf.jpeg',
    description: 'Protégez vos investissements et assurez la continuité de vos opérations avec nos solutions de pointe en protection parafoudre. Nous concevons, installons et maintenons des systèmes sur mesure pour prémunir vos infrastructures critiques contre les dommages liés aux surtensions et aux aléas climatiques. Ne laissez pas la foudre menacer votre activité !',
    details: [
      'Diagnostic complet de vos installations',
      'Installation de paratonnerres et mise à la terre',
      'Systèmes de protection en cascade',
      'Maintenance préventive annuelle',
      'Certificat de conformité aux normes NF C 17-100'
    ],
    benefits: [
      'Protection contre les surtensions',
      'Sécurité du personnel et des équipements',
      'Conformité aux normes internationales',
      'Durabilité des installations',
      'Support technique 24/7'
    ]
  },
  'montage-pylone': {
    title: 'Montage Pylône Telecom / GSM',
    subtitle: 'Infrastructure réseau de haute performance',
    image: '/assets/pylone 1.jpg',
    description: 'Élevez votre réseau vers de nouveaux sommets ! Notre expertise en montage de pylônes de télécommunications vous garantit une infrastructure robuste, fiable et ultra-performante. De l\'installation à la maintenance, nous déployons des solutions sécurisées pour assurer une connectivité optimale à vos utilisateurs.',
    details: [
      'Montage de pylônes (50m à 100m+)',
      'Installation d\'antennes et équipements radio',
      'Mise aux normes ANATEL',
      'Maintenance et inspection régulière',
      'Démantèlement et recyclage'
    ],
    benefits: [
      'Expertise technique reconnue',
      'Équipes certifiées et formées',
      'Respect des délais',
      'Sécurité maximale sur site',
      'Support post-installation'
    ]
  },
  'informatique': {
    title: 'Informatique',
    subtitle: 'Solutions IT complètes pour votre entreprise',
    image: '/assets/info.jpeg',
    description: 'Propulsez votre entreprise dans l\'ère du numérique avec nos solutions IT sur mesure. Nous concevons et déployons des infrastructures informatiques et des réseaux d\'entreprise ultra-performants, hautement sécurisés et évolutifs. Gagnez en productivité et concentrez-vous sur votre cœur de métier grâce à notre accompagnement de bout en bout.',
    details: [
      'Installation et configuration de réseaux',
      'Serveurs et infrastructure de données',
      'Cybersécurité et protection des données',
      'Support technique et maintenance',
      'Formation des utilisateurs'
    ],
    benefits: [
      'Infrastructure sécurisée',
      'Productivité augmentée',
      'Disponibilité 24/7',
      'Conformité RGPD',
      'Évolutivité garantie'
    ]
  },
  'genie-civil': {
    title: 'Génie Civil',
    subtitle: 'Construisons l\'infrastructure de demain',
    image: '/assets/genie civil.jpeg',
    description: 'Bâtissez un avenir solide avec notre pôle génie civil. Nous réalisons vos projets d\'infrastructures pour les secteurs industriels et des télécommunications avec une précision chirurgicale. Notre promesse : des ouvrages pérennes, conformes aux normes les plus strictes, livrés dans le respect absolu de vos délais et budgets.',
    details: [
      'Étude de faisabilité et conception',
      'Terrassement et fondations',
      'Structures en béton armé',
      'Finitions et mise en conformité',
      'Contrôle qualité rigoureux'
    ],
    benefits: [
      'Normes internationales respectées',
      'Durabilité et solidité',
      'Respect de l\'environnement',
      'Délais maîtrisés',
      'Garantie décennale'
    ]
  },
  'froid-collimation': {
    title: 'Froid et Collimation',
    subtitle: 'Environnements contrôlés pour data centers',
    image: '/assets/froid et clim .jpeg',
    description: 'Maintenez vos équipements critiques à température idéale avec nos systèmes de refroidissement et de climatisation de précision. Spécialistes des environnements très exigeants tels que les data centers, nous garantissons un contrôle thermique absolu et une efficacité énergétique maximale pour prévenir toute surchauffe.',
    details: [
      'Climatisation de précision',
      'Systèmes de refroidissement par liquide',
      'Groupe froid de secours',
      'Monitoring et gestion thermique',
      'Maintenance préventive'
    ],
    benefits: [
      'Température optimale maintenue',
      'Économies d\'énergie',
      'Fiabilité accrue',
      'Disponibilité 99.9%',
      'Conformité normes data center'
    ]
  },
  'securite-maintenance': {
    title: 'Sécurité & Maintenance',
    subtitle: 'Garantir la pérennité de vos installations',
    image: '/assets/sec et main 2 .jpeg',
    description: 'Dormez sur vos deux oreilles grâce à nos services de sécurité et de maintenance. Nos équipes ultra-réactives assurent un suivi rigoureux, des maintenances préventives régulières et des interventions curatives rapides pour minimiser les temps d\'arrêt, maximiser la durée de vie de vos équipements et garantir une continuité de service irréprochable.',
    details: [
      'Maintenance préventive programmée',
      'Interventions curatives d\'urgence',
      'Pièces de rechange disponibles',
      'Documentation technique complète',
      'Formation du personnel'
    ],
    benefits: [
      'Réduction des pannes',
      'Allongement de la durée de vie',
      'Coûts prévisibles',
      'Support technique dédié',
      'SLA garanti'
    ]
  }
};

export default function ServiceDetail() {
  const { serviceId } = useParams();
  const service = serviceDetails[serviceId || ''];

  if (!service) {
    return (
      <div className="min-h-screen pt-32 px-6 bg-gray-50">
        <div className="container mx-auto text-center">
          <h1 className="text-4xl font-bold mb-4">Service non trouvé</h1>
          <Link to="/" className="text-[#7c3aed] hover:underline">Retour à l'accueil</Link>
        </div>
      </div>
    );
  }

  return (
    <div className="min-h-screen bg-white pt-32">
      <div className="container mx-auto px-6">
        <Link to="/" className="inline-flex items-center text-[#7c3aed] hover:text-[#6d28d9] mb-8 transition">
          <ArrowLeft size={20} className="mr-2" />
          Retour aux services
        </Link>

        <div className="grid md:grid-cols-2 gap-12 mb-12">
          <div>
            <img
              src={service.image}
              alt={service.title}
              className="w-full aspect-video object-cover rounded-2xl shadow-xl transition-transform duration-500 hover:scale-[1.02]"
            />
          </div>

          <div>
            <h1 className="text-4xl font-bold text-gray-900 mb-2">{service.title}</h1>
            <p className="text-xl text-[#7c3aed] font-semibold mb-6">{service.subtitle}</p>
            <p className="text-gray-600 leading-relaxed text-lg mb-8">{service.description}</p>

            <div className="bg-[#7c3aed]/10 border-l-4 border-[#7c3aed] p-6 rounded-lg">
              <h3 className="font-bold text-gray-900 mb-4">Ce service inclut :</h3>
              <ul className="space-y-2">
                {service.details.map((detail: string, index: number) => (
                  <li key={index} className="flex items-start text-gray-700">
                    <CheckCircle className="text-[#86efac] mr-3 flex-shrink-0 mt-1" size={20} />
                    {detail}
                  </li>
                ))}
              </ul>
            </div>
          </div>
        </div>

        <div className="bg-gradient-to-r from-[#2d1b4e] to-[#6b3fa0] text-white rounded-lg p-12 mb-12">
          <h2 className="text-3xl font-bold mb-8">Avantages</h2>
          <div className="grid md:grid-cols-2 gap-8">
            {service.benefits.map((benefit: string, index: number) => (
              <div key={index} className="flex items-start">
                <div className="w-8 h-8 bg-[#86efac] rounded-full flex items-center justify-center text-[#2d1b4e] font-bold mr-4 flex-shrink-0">
                  ✓
                </div>
                <span className="text-lg">{benefit}</span>
              </div>
            ))}
          </div>
        </div>

        <div className="bg-gray-50 rounded-lg p-12">
          <h2 className="text-3xl font-bold text-gray-900 mb-8 text-center">Demander des informations</h2>
          <ContactForm serviceTitle={service.title} />
        </div>
      </div>
    </div>
  );
}
