import React, { useState } from 'react';
import { Menu, X } from 'lucide-react';

const Navbar = () => {
  const [isOpen, setIsOpen] = useState(false);

  return (
    <nav className="bg-white shadow-md fixed w-full z-50">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="flex justify-between h-16">
          <div className="flex items-center">
            <span className="text-2xl font-bold text-rose-600">Bella Beauty</span>
          </div>
          
          {/* Desktop Menu */}
          <div className="hidden md:flex items-center space-x-8">
            <a href="#home" className="text-gray-700 hover:text-rose-600 transition-colors">Home</a>
            <a href="#about" className="text-gray-700 hover:text-rose-600 transition-colors">Sobre</a>
            <a href="#services" className="text-gray-700 hover:text-rose-600 transition-colors">Serviços</a>
            <a href="#gallery" className="text-gray-700 hover:text-rose-600 transition-colors">Galeria</a>
            <a href="#contact" className="text-gray-700 hover:text-rose-600 transition-colors">Contato</a>
            <button className="bg-rose-600 text-white px-6 py-2 rounded-full hover:bg-rose-700 transition-colors">
              Agende Agora
            </button>
          </div>

          {/* Mobile Menu Button */}
          <div className="md:hidden flex items-center">
            <button
              onClick={() => setIsOpen(!isOpen)}
              className="text-gray-700 hover:text-rose-600"
            >
              {isOpen ? <X size={24} /> : <Menu size={24} />}
            </button>
          </div>
        </div>
      </div>

      {/* Mobile Menu */}
      {isOpen && (
        <div className="md:hidden">
          <div className="px-2 pt-2 pb-3 space-y-1 sm:px-3">
            <a href="#home" className="block px-3 py-2 text-gray-700 hover:text-rose-600">Home</a>
            <a href="#about" className="block px-3 py-2 text-gray-700 hover:text-rose-600">Sobre</a>
            <a href="#services" className="block px-3 py-2 text-gray-700 hover:text-rose-600">Serviços</a>
            <a href="#gallery" className="block px-3 py-2 text-gray-700 hover:text-rose-600">Galeria</a>
            <a href="#contact" className="block px-3 py-2 text-gray-700 hover:text-rose-600">Contato</a>
            <button className="w-full bg-rose-600 text-white px-6 py-2 rounded-full hover:bg-rose-700 transition-colors">
              Agende Agora
            </button>
          </div>
        </div>
      )}
    </nav>
  );
};

export default Navbar;