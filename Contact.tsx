import { Mail, Phone } from 'lucide-react';

export default function Contact() {
  return (
    <section id="contact" className="py-20 px-6 bg-white">
      <div className="container mx-auto text-center">
        <h2 className="text-3xl md:text-4xl font-bold text-gray-900 mb-4">
          Prêt à sécuriser vos infrastructures ?
        </h2>
        <p className="text-gray-600 mb-12 max-w-2xl mx-auto">
          Contactez nos experts aujourd'hui pour un devis personnalisé de votre projet.
        </p>

        <div className="grid md:grid-cols-2 gap-8 max-w-4xl mx-auto">
          <div className="bg-gray-50 p-8 rounded-lg hover:shadow-lg transition">
            <div className="w-16 h-16 bg-gradient-to-br from-[#7c3aed] to-[#a855f7] rounded-full flex items-center justify-center mx-auto mb-4">
              <Mail className="text-white" size={28} />
            </div>
            <h3 className="font-bold text-gray-900 mb-2">EMAIL CONTACT</h3>
            <a
              href="mailto: piccardisarl@gmail.com"
              className="text-[#7c3aed] hover:underline text-lg"
            >
              piccardisarl@gmail.com
            </a>
          </div>

          <div className="bg-gray-50 p-8 rounded-lg hover:shadow-lg transition">
            <div className="w-16 h-16 bg-gradient-to-br from-[#7c3aed] to-[#a855f7] rounded-full flex items-center justify-center mx-auto mb-4">
              <Phone className="text-white" size={28} />
            </div>
            <h3 className="font-bold text-gray-900 mb-2">APPELEZ-NOUS</h3>
            <a
              href="tel:+237699504429"
              className="text-[#7c3aed] hover:underline text-lg"
            >
              +237 699 50 44 29
            </a>
          </div>
        </div>
      </div>
    </section>
  );
}
