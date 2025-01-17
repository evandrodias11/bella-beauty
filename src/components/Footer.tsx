import React from 'react';

const Footer = () => {
  return (
    <footer className="bg-gray-900 text-white py-12">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="grid md:grid-cols-4 gap-8">
          <div>
            <h3 className="text-xl font-bold mb-4">Bella Beauty</h3>
            <p className="text-gray-400">
              Transformando sua beleza com excelência e profissionalismo
            </p>
          </div>
          <div>
            <h4 className="text-lg font-semibold mb-4">Links Rápidos</h4>
            <ul className="space-y-2">
              <li><a href="#home" className="text-gray-400 hover:text-white">Home</a></li>
              <li><a href="#about" className="text-gray-400 hover:text-white">Sobre</a></li>
              <li><a href="#services" className="text-gray-400 hover:text-white">Serviços</a></li>
              <li><a href="#gallery" className="text-gray-400 hover:text-white">Galeria</a></li>
              <li><a href="#contact" className="text-gray-400 hover:text-white">Contato</a></li>
            </ul>
          </div>
          <div>
            <h4 className="text-lg font-semibold mb-4">Horário de Funcionamento</h4>
            <ul className="space-y-2 text-gray-400">
              <li>Segunda - Sexta: 9h às 20h</li>
              <li>Sábado: 9h às 18h</li>
              <li>Domingo: Fechado</li>
            </ul>
          </div>
          <div>
            <h4 className="text-lg font-semibold mb-4">Newsletter</h4>
            <p className="text-gray-400 mb-4">
              Receba nossas novidades e promoções
            </p>
            <form className="flex">
              <input
                type="email"
                placeholder="Seu e-mail"
                className="flex-1 px-4 py-2 rounded-l-md text-gray-900"
              />
              <button
                type="submit"
                className="bg-rose-600 px-4 py-2 rounded-r-md hover:bg-rose-700 transition-colors"
              >
                Assinar
              </button>
            </form>
          </div>
        </div>
        <div className="border-t border-gray-800 mt-12 pt-8 text-center text-gray-400">
          <p>© 2024 Bella Beauty. Todos os direitos reservados.</p>
        </div>
      </div>
    </footer>
  );
};

export default Footer;