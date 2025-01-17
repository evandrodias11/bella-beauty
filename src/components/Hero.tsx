import React from 'react';
import { ChevronRight } from 'lucide-react';

const Hero = () => {
  return (
    <section id="home" className="pt-16">
      <div className="relative h-[90vh] bg-cover bg-center" style={{
        backgroundImage: `url('https://images.unsplash.com/photo-1560066984-138dadb4c035?ixlib=rb-1.2.1&auto=format&fit=crop&w=1950&q=80')`
      }}>
        <div className="absolute inset-0 bg-black bg-opacity-50" />
        <div className="relative h-full max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 flex items-center">
          <div className="text-white">
            <h1 className="text-5xl md:text-6xl font-bold mb-6">
              Realce sua Beleza com<br />Profissionais Qualificados
            </h1>
            <p className="text-xl mb-8 max-w-2xl">
              Oferecemos tratamentos de beleza personalizados em um ambiente acolhedor e moderno,
              onde cada cliente recebe atenção exclusiva para realçar sua beleza natural.
            </p>
            <button className="bg-rose-600 text-white px-8 py-3 rounded-full text-lg font-medium hover:bg-rose-700 transition-colors inline-flex items-center">
              Conheça Nossos Serviços
              <ChevronRight className="ml-2" size={20} />
            </button>
          </div>
        </div>
      </div>
    </section>
  );
};

export default Hero;