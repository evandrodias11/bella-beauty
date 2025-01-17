import React from 'react';
import { Check } from 'lucide-react';

const About = () => {
  const differentials = [
    'Profissionais certificados e experientes',
    'Produtos de alta qualidade',
    'Ambiente higienizado e acolhedor',
    'Atendimento personalizado',
  ];

  return (
    <section id="about" className="py-20 bg-gray-50">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="grid md:grid-cols-2 gap-12 items-center">
          <div>
            <h2 className="text-4xl font-bold text-gray-900 mb-6">
              Há 10 anos cuidando da sua autoestima
            </h2>
            <p className="text-gray-600 mb-8">
              Nossa história começou com um sonho de criar um espaço onde as pessoas pudessem
              se sentir especiais e renovadas. Hoje, somos referência em beleza e bem-estar,
              oferecendo serviços de excelência com profissionais altamente qualificados.
            </p>
            <ul className="space-y-4">
              {differentials.map((item, index) => (
                <li key={index} className="flex items-center text-gray-700">
                  <Check className="text-rose-600 mr-3" size={20} />
                  {item}
                </li>
              ))}
            </ul>
          </div>
          <div className="relative">
            <img
              src="https://images.unsplash.com/photo-1521590832167-7bcbfaa6381f?ixlib=rb-1.2.1&auto=format&fit=crop&w=1950&q=80"
              alt="Salão de beleza"
              className="rounded-lg shadow-xl"
            />
          </div>
        </div>
      </div>
    </section>
  );
};

export default About;