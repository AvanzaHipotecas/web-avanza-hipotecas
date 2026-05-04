import React from 'react';
import { Helmet } from 'react-helmet';
import Hero from '@/components/Hero';
import Benefits from '@/components/Benefits';
import BankPartners from '@/components/BankPartners';
import MortgageTypes from '@/components/MortgageTypes';
import Trust from '@/components/Trust';
import FAQ from '@/components/FAQ';
import Contact from '@/components/Contact';
import Testimonials from '@/components/Testimonials';

const HomePage = () => {
  return (
    <main>
       <Helmet>
        <title>Avanza Hipotecas - Encuentra la Mejor Hipoteca para tu Hogar</title>
        <meta name="description" content="Especialistas en conseguir las mejores condiciones hipotecarias. Un asesor experto negocia por ti entre más de 20 bancos. Estudio gratuito y sin compromiso." />
        <meta property="og:title" content="Avanza Hipotecas - Encuentra la Mejor Hipoteca para tu Hogar" />
        <meta property="og:description" content="Especialistas en conseguir las mejores condiciones hipotecarias. Un asesor experto negocia por ti entre más de 20 bancos. Estudio gratuito y sin compromiso." />
        <meta property="og:type" content="website" />
        <meta name="keywords" content="hipoteca, préstamo hipotecario, financiación vivienda, asesor hipotecario, mejores condiciones hipoteca" />
        <meta name="robots" content="index, follow" />
        <link rel="canonical" href="https://avanzahipotecas.com" />
      </Helmet>
      <Hero />
      <Benefits />
      <BankPartners />
      <MortgageTypes />
      <Trust />
      <Contact />
      <Testimonials />
      <FAQ />
    </main>
  );
};

export default HomePage;