import React from 'react';
import { motion } from 'framer-motion';
import { Star, Users, Award, TrendingUp } from 'lucide-react';

const Trust = () => {
  const stats = [
    { icon: Users, number: '2.500+', label: 'Familias atendidas' },
    { icon: Award, number: '98%', label: 'Clientes satisfechos' },
    { icon: TrendingUp, number: '18.000€', label: 'Ahorro medio' },
    { icon: Star, number: '4.9/5', label: 'Valoración media' },
  ];

  const testimonials = [
    {
      name: 'María González',
      location: 'Madrid',
      text: 'Gracias a Avanza Hipotecas conseguimos una hipoteca al 1.8% cuando otros bancos nos ofrecían el 2.5%. El ahorro es considerable.',
      rating: 5
    },
    {
      name: 'Carlos Ruiz',
      location: 'Barcelona',
      text: 'El proceso fue muy rápido y transparente. Nuestro asesor nos explicó todo paso a paso. Totalmente recomendable.',
      rating: 5
    },
    {
      name: 'Ana Martín',
      location: 'Valencia',
      text: 'Pensábamos que no podríamos conseguir financiación al 100%, pero ellos lo hicieron posible. Excelente servicio.',
      rating: 5
    }
  ];

  return (
    <section className="section-padding bg-white">
      <div className="container mx-auto px-4">
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          className="text-center mb-16"
        >
          <h2 className="text-4xl md:text-5xl font-bold text-[#1A3C40] mb-6">
            La confianza de
            <span className="text-[#2EBFA5] block">miles de familias</span>
          </h2>
        </motion.div>

        <div className="grid grid-cols-2 md:grid-cols-4 gap-8 mb-16">
          {stats.map((stat, index) => (
            <motion.div
              key={index}
              initial={{ opacity: 0, y: 30 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ delay: index * 0.1 }}
              className="text-center"
            >
              <div className="w-16 h-16 bg-[#1A3C40] rounded-full flex items-center justify-center mx-auto mb-4">
                <stat.icon className="w-8 h-8 text-white" />
              </div>
              <div className="text-3xl md:text-4xl font-bold text-[#1A3C40] mb-2">{stat.number}</div>
              <div className="text-gray-600">{stat.label}</div>
            </motion.div>
          ))}
        </div>

        <motion.div
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          className="mb-16"
        >
          <h3 className="text-3xl font-bold text-center text-[#1A3C40] mb-12">
            Lo que dicen nuestros clientes
          </h3>
          
          <div className="grid md:grid-cols-3 gap-8">
            {testimonials.map((testimonial, index) => (
              <motion.div
                key={index}
                initial={{ opacity: 0, y: 30 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ delay: index * 0.2 }}
                className="bg-[#E9ECEF] rounded-xl p-6 shadow-custom"
              >
                <div className="flex mb-4">
                  {[...Array(testimonial.rating)].map((_, i) => (
                    <Star key={i} className="w-5 h-5 text-yellow-400 fill-current" />
                  ))}
                </div>
                <p className="text-gray-700 mb-4 italic">"{testimonial.text}"</p>
                <div>
                  <div className="font-semibold text-[#1A3C40]">{testimonial.name}</div>
                  <div className="text-sm text-gray-500">{testimonial.location}</div>
                </div>
              </motion.div>
            ))}
          </div>
        </motion.div>
      </div>
    </section>
  );
};

export default Trust;