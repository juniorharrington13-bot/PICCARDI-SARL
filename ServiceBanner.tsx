export default function ServiceBanner() {
  return (
    <section className="bg-gradient-to-r from-[#2d1b4e] to-[#6b3fa0] text-white py-12 px-6">
      <div className="container mx-auto">
        <div className="flex flex-col md:flex-row items-center justify-between">
          <div className="md:w-2/3 mb-6 md:mb-0">
            <h2 className="text-2xl md:text-3xl font-bold mb-3">
              Prestations de Service & Maintenance
            </h2>
            <p className="text-gray-200 leading-relaxed">
              Un accompagnement sur mesure pour faciliter la supervision et la maintenance
              préventive de vos sites critiques.
            </p>
          </div>

          <button className="bg-[#86efac] text-[#1e293b] px-8 py-3 rounded-md font-semibold hover:bg-[#6ee7b7] transition whitespace-nowrap">
            Se renseigner
          </button>
        </div>
      </div>
    </section>
  );
}
