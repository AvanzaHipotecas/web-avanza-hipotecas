import React from 'react';
import { motion } from 'framer-motion';

const logos = [
    { name: 'Abanca', src: 'https://horizons-cdn.hostinger.com/46b65610-3610-4aaa-b75e-344adbd2c5fe/242e02b46e08dc1aaed3ae50aeacdb10.png', alt: 'Logo de ABANCA' },
    { name: 'Bankinter', src: 'https://horizons-cdn.hostinger.com/46b65610-3610-4aaa-b75e-344adbd2c5fe/6a1269f63a410bf52f604facf69ef66c.png', alt: 'Logo de Bankinter' },
    { name: 'BBVA', src: 'https://horizons-cdn.hostinger.com/46b65610-3610-4aaa-b75e-344adbd2c5fe/b2a7ffdece14cb8536a4aad91dc09402.png', alt: 'Logo de BBVA' },
    { name: 'CaixaBank', src: 'https://horizons-cdn.hostinger.com/46b65610-3610-4aaa-b75e-344adbd2c5fe/e7d7dfc3027ac8c88e9bc44d863fb7d9.png', alt: 'Logo de CaixaBank' },
    { name: 'Deutsche Bank', src: 'https://horizons-cdn.hostinger.com/46b65610-3610-4aaa-b75e-344adbd2c5fe/c8d69509dbff78cfbd26f3c77ccb5468.png', alt: 'Logo de Deutsche Bank' },
    { name: 'Ibercaja', src: 'https://horizons-cdn.hostinger.com/46b65610-3610-4aaa-b75e-344adbd2c5fe/924378e105011a87396ad73902848070.png', alt: 'Logo de Ibercaja' },
    { name: 'ING', src: 'https://horizons-cdn.hostinger.com/46b65610-3610-4aaa-b75e-344adbd2c5fe/c531c7bd99811b1d00cd69d03f608d64.png', alt: 'Logo de ING' },
    { name: 'Kutxabank', src: 'https://horizons-cdn.hostinger.com/46b65610-3610-4aaa-b75e-344adbd2c5fe/ba0334c52f56525292eea9d36c09125c.png', alt: 'Logo de Kutxabank' },
    { name: 'Laboral Kutxa', src: 'https://horizons-cdn.hostinger.com/46b65610-3610-4aaa-b75e-344adbd2c5fe/581465a78b5a82d2e96602d3cd812de9.png', alt: 'Logo de Laboral Kutxa' },
    { name: 'Openbank', src: 'https://horizons-cdn.hostinger.com/46b65610-3610-4aaa-b75e-344adbd2c5fe/6affd47b84dd7b91f6166b2972883b11.png', alt: 'Logo de Openbank' },
    { name: 'Santander', src: 'https://horizons-cdn.hostinger.com/46b65610-3610-4aaa-b75e-344adbd2c5fe/cab9f067dbef122ebbfecdf5d98b8fa3.png', alt: 'Logo de Banco Santander' },
    { name: 'Unicaja', src: 'https://horizons-cdn.hostinger.com/46b65610-3610-4aaa-b75e-344adbd2c5fe/f3713690127bfc4cf1e3ad06b2c79396.png', alt: 'Logo de Unicaja Banco' },
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