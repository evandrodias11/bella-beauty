import React from 'react';
import { Scissors, Palette, Sparkles, Brush } from 'lucide-react';

const Services = () => {
  const services = [
    {
      icon: <Scissors className="w-8 h-8" />,
      title: 'Corte de Cabelo',
      description: 'Cortes modernos e personalizados para todos os tipos de cabelo',
      price: 'A partir de R$ 60',
    },
    {
      icon: <Palette className="w-8 h-8" />,
      title: 'Coloração',
      description: 'Coloração profissional com as melhores marcas do mercado',
      price: 'A partir de R$ 120',
    },
    {
      icon: <Sparkles className="w-8 h-8" />,
      title: 'Tratamentos Capilares',
      description: 'Hidratação, reconstrução e tratamentos específicos',
      price: 'A partir de R$ 80',
    },
    {
      icon: <Brush className="w-8 h-8" />,
      title: 'Maquiagem',
      description: 'Maquiagem para eventos, festas e ocasiões especiais',
      price: 'A partir de R$ 100',
    },
  ];

  return (
    <section id="services" className="py-20">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="text-center mb-16">
          <h2 className="text-4xl font-bold text-gray-900 mb-4">Nossos Serviços</h2>
          <p className="text-gray-600 max-w-2xl mx-auto">
            Oferecemos uma variedade de serviços de beleza para atender todas as suas necessidades
          </p>
        </div>
        <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-8">
          {services.map((service, index) => (
            <div key={index} className="bg-white p-6 rounded-lg shadow-lg hover:shadow-xl transition-shadow">
              <div className="text-rose-600 mb-4">{service.icon}</div>
              <h3 className="text-xl font-bold text-gray-900 mb-2">{service.title}</h3>
              <p className="text-gray-600 mb-4">{service.description}</p>
              <p className="text-rose-600 font-semibold">{service.price}</p>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default Services;