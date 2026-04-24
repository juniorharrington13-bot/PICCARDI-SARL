import { Zap, Radio, Wifi, Hammer, Snowflake, Shield, ArrowRight } from 'lucide-react';
import { Link } from 'react-router-dom';

const expertises = [
  {
    id: 'protection-parafoudre',
    icon: Zap,
    title: 'Protection Parafoudre',
    description: 'Installation et maintenance de systèmes de protection parafoudre pour sécuriser vos infrastructures critiques.',
    tags: ['SÉCURITÉ', 'INSTALLATION']
  },
  {
    id: 'montage-pylone',
    icon: Radio,
    title: 'Montage Pylône Telecom / GSM',
    description: 'Montage et installation de pylônes télécommunications, maintenance et mise aux normes des infrastructures réseau.',
    tags: ['TELECOM', 'INSTALLATION']
  },
  {
    id: 'informatique',
    icon: Wifi,
    title: 'Informatique',
    description: 'Solutions informatiques complètes, réseaux d\'entreprise et infrastructure IT sécurisée.',
    tags: ['IT', 'RÉSEAU']
  },
  {
    id: 'genie-civil',
    icon: Hammer,
    title: 'Génie Civil',
    description: 'Construction et rénovation d\'infrastructures, travaux de génie civil pour sites industriels et télécoms.',
    tags: ['CONSTRUCTION', 'INFRASTRUCTURE']
  },
  {
    id: 'froid-collimation',
    icon: Snowflake,
    title: 'Froid et Collimation',
    description: 'Installation de systèmes de refroidissement et de précision pour environnements critiques et data centers.',
    tags: ['CLIMATISATION', 'TECHNOLOGIE']
  },
  {
    id: 'securite-maintenance',
    icon: Shield,
    title: 'Sécurité & Maintenance',
    description: 'Contrats de maintenance préventive et curative pour garantir la pérennité de vos installations.',
    tags: ['MAINTENANCE', 'SÉCURITÉ']
  }
];

export default function Expertise() {
  return (
    <section id="services" className="py-20 px-6 bg-gray-50">
      <div className="container mx-auto">
        <div className="mb-12">
          <div className="w-16 h-1 bg-[#7c3aed] mb-4"></div>
          <h2 className="text-3xl md:text-4xl font-bold text-gray-900">Nos Expertises Métiers</h2>
        </div>

        <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8">
          {expertises.map((expertise, index) => {
            const Icon = expertise.icon;
            return (
              <div
                key={index}
                className="bg-white p-6 rounded-lg shadow-sm hover:shadow-xl transition-all duration-300 group"
              >
                <div className="w-12 h-12 bg-gradient-to-br from-[#7c3aed] to-[#a855f7] rounded-lg flex items-center justify-center mb-4 group-hover:scale-110 transition-transform">
                  <Icon className="text-white" size={24} />
                </div>

                <h3 className="text-xl font-bold text-gray-900 mb-3">{expertise.title}</h3>
                <p className="text-gray-600 mb-4 leading-relaxed">{expertise.description}</p>

                <div className="flex gap-2 mb-4">
                  {expertise.tags.map((tag, tagIndex) => (
                    <span
                      key={tagIndex}
                      className="text-xs px-3 py-1 bg-[#7c3aed]/10 text-[#7c3aed] rounded-full font-medium"
                    >
                      {tag}
                    </span>
                  ))}
                </div>

                <Link
                  to={`/service/${expertise.id}`}
                  className="inline-flex items-center text-[#7c3aed] hover:text-[#6d28d9] font-semibold transition group/link"
                >
                  Plus d'info
                  <ArrowRight size={16} className="ml-2 group-hover/link:translate-x-1 transition-transform" />
                </Link>
              </div>
            );
          })}
        </div>
      </div>
    </section>
  );
}
