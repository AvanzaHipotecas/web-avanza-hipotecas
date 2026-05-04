import React from 'react';
import { Helmet } from 'react-helmet';
import Simulator from '@/components/Simulator';
import { motion } from 'framer-motion';

const SimulatorPage = () => {
  return (
    <motion.div
      initial={{ opacity: 0 }}
      animate={{ opacity: 1 }}
      exit={{ opacity: 0 }}
      transition={{ duration: 0.5 }}
      className="pt-24"
    >
      <Helmet>
        <title>Simulador de Hipoteca - Avanza Hipotecas</title>
        <meta name="description" content="Calcula la cuota de tu hipoteca con nuestro simulador online. Obtén una estimación de tus pagos mensuales y el total de intereses." />
        <meta property="og:title" content="Simulador de Hipoteca - Avanza Hipotecas" />
        <meta property="og:description" content="Calcula la cuota de tu hipoteca con nuestro simulador online. Obtén una estimación de tus pagos mensuales y el total de intereses." />
        <meta name="robots" content="index, follow" />
        <link rel="canonical" href="https://avanzahipotecas.com/simulador" />
      </Helmet>
      <Simulator />
    </motion.div>
  );
};

export default SimulatorPage;