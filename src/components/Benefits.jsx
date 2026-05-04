import React from 'react';
import { motion } from 'framer-motion';
import { DollarSign, Search, User, Clock, Shield, Award } from 'lucide-react';

const Benefits = () => {
  const benefits = [
    {
      icon: DollarSign,
      title: 'Pagas menos por tu hipoteca',
      description: 'Nuestros clientes consiguen de media más de 18.000 € de ahorro en su hipoteca gracias a nuestras negociaciones con los bancos.',
    },
    {
      icon: Search,
      title: 'Comparamos entre +20 bancos',
      description: 'Analizamos y comparamos las ofertas de más de 20 bancos para que consigas la hipoteca con las mejores condiciones para tu perfil.',
    },
    {
      icon: User,
      title: 'La tranquilidad de tener un experto a tu lado',
      description: 'No estarás solo en ningún momento: tu asesor personal se encarga de todo para que vivas el proceso con tranquilidad y sin complicaciones.',
    },
    {
      icon: Clock,
      title: 'Tu hipoteca más rápido',
      description: 'Gracias a nuestras herramientas digitales, reducimos plazos y agilizamos cada fase de tu hipoteca.',
    },
    {
      icon: Shield,
      title: 'Transparencia total',
      description: 'Te explicamos cada paso con claridad, sin letra pequeña y sin costes ocultos.',
    },
    {
      icon: Award,
      title: 'Confianza de miles de familias',
      description: 'Más de 2.500 operaciones hipotecarias gestionadas con éxito nos convierten en un referente del sector.',
    },
  ];

  return (
    <section id="beneficios" className="section-padding bg-[#E9ECEF]">
      <div className="container mx-auto px-4">
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          className="text-center mb-16"
        >
          <h2 className="text-4xl md:text-5xl font-bold text-[#1A3C40] mb-6">
            ¿Por qué nos eligen
            <span className="text-[#2EBFA5] block">los clientes?</span>
          </h2>
          <p className="text-xl text-gray-700 max-w-3xl mx-auto">
            Somos especialistas en conseguir las mejores condiciones hipotecarias. 
            <span className="font-bold block text-[#1A3C40]">Nuestro equipo de expertos trabaja para ti, no para los bancos.</span>
          </p>
        </motion.div>

        <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8">
          {benefits.map((benefit, index) => (
            <motion.div
              key={index}
              initial={{ opacity: 0, y: 30 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ delay: index * 0.1 }}
              className="bg-white rounded-xl p-8 shadow-custom hover:shadow-xl hover:-translate-y-1 transition-all duration-300 group flex flex-col"
            >
              <div className="w-16 h-16 bg-[#1A3C40] rounded-xl flex items-center justify-center mb-6 group-hover:bg-[#2EBFA5] transition-colors duration-300 shrink-0">
                <benefit.icon className="w-8 h-8 text-white" />
              </div>
              <h3 className="text-xl font-bold text-[#1A3C40] mb-4">{benefit.title}</h3>
              <p className="text-gray-600 leading-relaxed">{benefit.description}</p>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default Benefits;