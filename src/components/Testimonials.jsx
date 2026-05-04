import React from 'react';
import { motion } from 'framer-motion';
import { Star } from 'lucide-react';

const testimonials = [
  {
    name: 'Alberto F., 31 años',
    location: 'Madrid',
    text: 'Pensábamos que necesitábamos años más ahorrando para comprar. Avanza Hipotecas consiguió financiarnos el 100% del valor de compra y firmamos en 6 semanas.',
  },
  {
    name: 'Celia L., 30 años',
    location: 'Barcelona',
    text: 'Mi banco me dijo que no por mi contrato temporal. Avanza lo llevó a otros bancos y conseguimos la hipoteca sin problema.',
  },
  {
    name: 'Juan y Paula, 33 y 30 años',
    location: 'Valencia',
    text: 'Fui primero a mi banco de toda la vida y me ofrecieron un tipo del 3,2%. Con Avanza firmamos al 2,6%. En 30 años eso son miles de euros.',
  },
  {
    name: 'Laura P., 28 años',
    location: 'Madrid',
    text: 'No sabíamos nada de hipotecas y nos explicaron todo con claridad. Nunca nos sentimos solos en el proceso.',
  },
];

const Testimonials = () => (
  <section className="section-padding bg-[#E9ECEF]">
    <div className="container mx-auto px-4">
      <motion.div
        initial={{ opacity: 0, y: 30 }}
        whileInView={{ opacity: 1, y: 0 }}
        viewport={{ once: true }}
        className="text-center mb-12"
      >
        <h2 className="text-3xl md:text-4xl font-bold text-[#1A3C40]">
          Lo que dicen nuestros clientes
        </h2>
      </motion.div>

      <div className="grid sm:grid-cols-2 lg:grid-cols-4 gap-6">
        {testimonials.map((testimonial, index) => (
          <motion.div
            key={index}
            initial={{ opacity: 0, y: 30 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ delay: index * 0.1 }}
            className="bg-white rounded-2xl p-6 flex flex-col shadow-sm"
          >
            <div className="flex gap-0.5 mb-4">
              {[...Array(5)].map((_, i) => (
                <Star key={i} className="w-4 h-4 text-yellow-400 fill-yellow-400" />
              ))}
            </div>
            <p className="text-gray-700 text-sm leading-relaxed italic flex-1">"{testimonial.text}"</p>
            <div className="mt-4 pt-4 border-t border-gray-100">
              <div className="font-semibold text-[#1A3C40] text-sm">{testimonial.name}</div>
              <div className="text-xs text-gray-500">{testimonial.location}</div>
            </div>
          </motion.div>
        ))}
      </div>
    </div>
  </section>
);

export default Testimonials;
