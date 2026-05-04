import React from 'react';
import { motion } from 'framer-motion';
import { Star, Users, Award, TrendingUp } from 'lucide-react';

const stats = [
  { icon: Users, number: '2.500+', label: 'Familias atendidas' },
  { icon: Award, number: '98%', label: 'Clientes satisfechos' },
  { icon: TrendingUp, number: '18.000€', label: 'Ahorro medio' },
  { icon: Star, number: '4.9/5', label: 'Valoración media' },
];

const Trust = () => (
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

      <div className="grid grid-cols-2 md:grid-cols-4 gap-8">
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
    </div>
  </section>
);

export default Trust;
