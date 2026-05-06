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

const schemaFAQ = {
  '@context': 'https://schema.org',
  '@type': 'FAQPage',
  mainEntity: [
    { '@type': 'Question', name: '¿Qué es la FEIN y por qué es importante?', acceptedAnswer: { '@type': 'Answer', text: 'La FEIN (Ficha Europea de Información Normalizada) es un documento obligatorio que los bancos deben proporcionar antes de firmar una hipoteca. Contiene información detallada sobre las condiciones del préstamo, incluyendo el tipo de interés, comisiones, y el coste total del crédito. Es importante porque te permite comparar ofertas de diferentes entidades de forma transparente.' } },
    { '@type': 'Question', name: '¿Puedo conseguir una hipoteca sin nómina?', acceptedAnswer: { '@type': 'Answer', text: 'Sí, es posible conseguir una hipoteca sin nómina tradicional. Los bancos pueden aceptar otras formas de ingresos como: ingresos por alquiler, pensiones, prestaciones por desempleo, ingresos como autónomo, o avales de terceros. Nuestros asesores especializados te ayudarán a encontrar la mejor opción según tu situación específica.' } },
    { '@type': 'Question', name: '¿Cuánto tiempo tarda el proceso de aprobación?', acceptedAnswer: { '@type': 'Answer', text: 'El proceso completo suele tardar entre 4 y 8 semanas, dependiendo de la complejidad del caso y la entidad elegida. Nosotros agilizamos este proceso gestionando toda la documentación y manteniendo comunicación directa con los bancos, lo que puede reducir los tiempos hasta en un 70%.' } },
    { '@type': 'Question', name: '¿Qué gastos adicionales debo considerar?', acceptedAnswer: { '@type': 'Answer', text: 'Además de la hipoteca, debes considerar: tasación (300-600€), notaría (0.1-0.5% del precio), registro de la propiedad (0.1-0.3%), gestoría (300-800€), seguro de hogar y vida, e impuestos (ITP o IVA según el caso). Nuestro servicio incluye un desglose detallado de todos estos gastos.' } },
    { '@type': 'Question', name: '¿Puedo cambiar de banco si ya tengo una hipoteca?', acceptedAnswer: { '@type': 'Answer', text: 'Sí, puedes realizar una subrogación o novación de tu hipoteca actual. Esto puede ser beneficioso si encuentras mejores condiciones en otra entidad. Analizamos tu caso actual y te ayudamos a determinar si el cambio te resultará rentable, considerando todos los gastos asociados.' } },
    { '@type': 'Question', name: '¿Qué diferencia hay entre tipo fijo y variable?', acceptedAnswer: { '@type': 'Answer', text: 'Tipo fijo: el interés se mantiene constante durante toda la vida del préstamo, ofreciendo estabilidad en las cuotas. Tipo variable: el interés cambia según el Euríbor, pudiendo subir o bajar. También existe el tipo mixto, que combina ambos. Te asesoramos sobre cuál es mejor según tu perfil de riesgo y situación financiera.' } },
  ],
};

const schemaLocalBusiness = {
  '@context': 'https://schema.org',
  '@type': ['FinancialService', 'LocalBusiness'],
  name: 'Avanza Hipotecas',
  description: 'Bróker hipotecario especializado en conseguir las mejores condiciones hipotecarias. Negociamos con más de 20 bancos para encontrar la hipoteca ideal para cada cliente.',
  url: 'https://avanzahipotecas.es',
  logo: 'https://avanzahipotecas.es/favicon.png',
  telephone: '+34624810190',
  email: 'contacto@avanzahipotecas.es',
  address: {
    '@type': 'PostalAddress',
    addressLocality: 'Madrid',
    addressCountry: 'ES',
  },
  geo: {
    '@type': 'GeoCoordinates',
    latitude: 40.4168,
    longitude: -3.7038,
  },
  openingHoursSpecification: [
    {
      '@type': 'OpeningHoursSpecification',
      dayOfWeek: ['Monday', 'Tuesday', 'Wednesday', 'Thursday'],
      opens: '09:00',
      closes: '14:00',
    },
    {
      '@type': 'OpeningHoursSpecification',
      dayOfWeek: ['Monday', 'Tuesday', 'Wednesday', 'Thursday'],
      opens: '16:00',
      closes: '19:00',
    },
    {
      '@type': 'OpeningHoursSpecification',
      dayOfWeek: ['Friday'],
      opens: '08:00',
      closes: '14:00',
    },
  ],
  aggregateRating: {
    '@type': 'AggregateRating',
    ratingValue: '4.9',
    bestRating: '5',
    ratingCount: '2500',
  },
  sameAs: [
    'https://www.instagram.com/avanzahipotecas',
  ],
  hasCredential: 'Intermediario de crédito inmobiliario inscrito en el Registro del Banco de España con el número E515',
  areaServed: {
    '@type': 'Country',
    name: 'España',
  },
  priceRange: 'Estudio gratuito y sin compromiso',
};

const HomePage = () => {
  return (
    <main>
      <Helmet>
        <title>Avanza Hipotecas - Encuentra la Mejor Hipoteca para tu Hogar</title>
        <meta name="description" content="Especialistas en conseguir las mejores condiciones hipotecarias. Un asesor experto negocia por ti entre más de 20 bancos. Estudio gratuito y sin compromiso." />
        <meta property="og:title" content="Avanza Hipotecas - Encuentra la Mejor Hipoteca para tu Hogar" />
        <meta property="og:description" content="Especialistas en conseguir las mejores condiciones hipotecarias. Un asesor experto negocia por ti entre más de 20 bancos. Estudio gratuito y sin compromiso." />
        <meta property="og:type" content="website" />
        <meta property="og:url" content="https://avanzahipotecas.es/" />
        <meta property="og:image" content="https://avanzahipotecas.es/og-image.jpg" />
        <meta property="og:image:width" content="1200" />
        <meta property="og:image:height" content="630" />
        <meta name="keywords" content="hipoteca, préstamo hipotecario, financiación vivienda, asesor hipotecario, broker hipotecario Madrid, mejores condiciones hipoteca" />
        <meta name="robots" content="index, follow" />
        <link rel="canonical" href="https://avanzahipotecas.es/" />
        <script type="application/ld+json">{JSON.stringify(schemaLocalBusiness)}</script>
        <script type="application/ld+json">{JSON.stringify(schemaFAQ)}</script>
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