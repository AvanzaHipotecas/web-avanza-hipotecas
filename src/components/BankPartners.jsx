import React from 'react';
import { motion } from 'framer-motion';

const logos = [
  { name: 'Abanca',        src: '/logos/abanca.png',        alt: 'Logo de ABANCA' },
  { name: 'BBVA',          src: '/logos/bbva.png',          alt: 'Logo de BBVA' },
  { name: 'CaixaBank',     src: '/logos/caixabank.png',     alt: 'Logo de CaixaBank' },
  { name: 'Deutsche Bank', src: '/logos/deutsche-bank.png', alt: 'Logo de Deutsche Bank' },
  { name: 'Ibercaja',      src: '/logos/ibercaja.png',      alt: 'Logo de Ibercaja' },
  { name: 'ING',           src: '/logos/ing.png',           alt: 'Logo de ING' },
  { name: 'Kutxabank',     src: '/logos/kutxabank.png',     alt: 'Logo de Kutxabank' },
  { name: 'Laboral Kutxa', src: '/logos/laboral-kutxa.png', alt: 'Logo de Laboral Kutxa' },
  { name: 'Openbank',      src: '/logos/openbank.png',      alt: 'Logo de Openbank' },
  { name: 'Santander',     src: '/logos/santander.png',     alt: 'Logo de Banco Santander' },
  { name: 'Unicaja',       src: '/logos/unicaja.png',       alt: 'Logo de Unicaja Banco' },
];

const marqueeVariants = {
  animate: {
    x: [0, -2016],
    transition: {
      x: {
        repeat: Infinity,
        repeatType: 'loop',
        duration: 30,
        ease: 'linear',
      },
    },
  },
};

const BankPartners = () => {
  return (
    <section className="bg-white py-12 md:py-16">
      <div className="container mx-auto px-4 text-center">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.5 }}
          className="mb-12"
        >
          <h2 className="text-3xl md:text-4xl font-bold text-[#1A3C40] mb-4">
            Trabajamos con los principales bancos
          </h2>
          <p className="text-lg text-gray-700 max-w-2xl mx-auto">
            Comparamos por ti entre más de 20 entidades para asegurarte la mejor oferta.
          </p>
        </motion.div>
      </div>
      <div
        className="relative max-w-screen-xl mx-auto"
        aria-label="Carrusel de logos de bancos"
      >
        <div className="absolute inset-y-0 left-0 w-16 bg-gradient-to-r from-white to-transparent z-10"></div>
        <div className="absolute inset-y-0 right-0 w-16 bg-gradient-to-l from-white to-transparent z-10"></div>
        <div className="overflow-hidden">
          <motion.div
            className="flex items-center whitespace-nowrap"
            variants={marqueeVariants}
            animate="animate"
            whileHover={{
              animationPlayState: 'paused'
            }}
          >
            {[...logos, ...logos].map((logo, index) => (
              <div
                key={index}
                className="flex-shrink-0 mx-8"
                style={{ width: '150px' }}
              >
                <img
                  src={logo.src}
                  alt={logo.alt}
                  width="150"
                  height="60"
                  loading="lazy"
                  className="h-auto w-full object-contain"
                  style={{ maxHeight: '60px' }}
                />
              </div>
            ))}
          </motion.div>
        </div>
      </div>
    </section>
  );
};

export default BankPartners;
