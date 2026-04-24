import { Menu, X } from 'lucide-react';
import { useState } from 'react';
import { Link } from 'react-router-dom';

export default function Header() {
  const [isMenuOpen, setIsMenuOpen] = useState(false);

  return (
    <header className="bg-[#2d1b4e] text-white py-4 px-6 fixed w-full top-0 z-50">
      <div className="container mx-auto flex justify-between items-center">
        <Link to="/" className="text-2xl font-bold hover:opacity-80 transition">PICCARDI SARL</Link>

        <nav className="hidden md:flex space-x-8">
          <a href="/#services" className="hover:text-gray-300 transition">Services</a>
          <a href="/#about" className="hover:text-gray-300 transition">About</a>
          <a href="/#realisations" className="hover:text-gray-300 transition">Réalisations</a>
          <a href="/#contact" className="hover:text-gray-300 transition">Contact</a>
        </nav>

        <a href="/#contact" className="hidden md:block bg-gradient-to-r from-[#7c3aed] to-[#a855f7] px-6 py-2 rounded-md hover:opacity-90 transition">
          Demander un devis
        </a>

        <button
          className="md:hidden"
          onClick={() => setIsMenuOpen(!isMenuOpen)}
        >
          {isMenuOpen ? <X size={24} /> : <Menu size={24} />}
        </button>
      </div>

      {isMenuOpen && (
        <nav className="md:hidden mt-4 flex flex-col space-y-4 pb-4">
          <a href="/#services" className="hover:text-gray-300 transition">Services</a>
          <a href="/#about" className="hover:text-gray-300 transition">About</a>
          <a href="/#realisations" className="hover:text-gray-300 transition">Réalisations</a>
          <a href="/#contact" className="hover:text-gray-300 transition">Contact</a>
          <a href="/#contact" className="bg-gradient-to-r from-[#7c3aed] to-[#a855f7] px-6 py-2 rounded-md hover:opacity-90 transition text-center">
            Demander un devis
          </a>
        </nav>
      )}
    </header>
  );
}
