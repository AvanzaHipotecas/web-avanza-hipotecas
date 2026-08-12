import React from 'react';
import { Helmet } from 'react-helmet';
import { Clock, Tag, ArrowRight, ArrowLeft, CheckCircle, Phone } from 'lucide-react';
import { Link, useNavigate } from 'react-router-dom';
import { Button } from '@/components/ui/button';

const BrokerVsBanco = () => {
  const navigate = useNavigate();

  const scrollToContact = () => {
    navigate('/');
    setTimeout(() => document.getElementById('contacto')?.scrollIntoView({ behavior: 'smooth' }), 100);
  };

  const schemaArticle = {
    '@context': 'https://schema.org',
    '@type': 'Article',
    headline: 'Bróker hipotecario o banco: por qué conviene un intermediario',
    description: 'Un bróker hipotecario compara varias entidades, ahorra tiempo en gestiones y negocia mejores condiciones que acudir directamente al banco. Estudio sin coste.',
    datePublished: '2026-08-12',
    author: { '@type': 'Organization', name: 'Avanza Hipotecas' },
    publisher: {
      '@type': 'Organization',
      name: 'Avanza Hipotecas',
      url: 'https://avanzahipotecas.es',
    },
    mainEntityOfPage: {
      '@type': 'WebPage',
      '@id': 'https://avanzahipotecas.es/blog/broker-hipotecario-vs-banco',
    },
  };

  return (
    <>
      <Helmet>
        <title>Bróker hipotecario vs banco | Avanza Hipotecas</title>
        <meta name="description" content="Un bróker hipotecario compara varias entidades, ahorra tiempo en gestiones y negocia mejores condiciones que acudir directamente al banco. Estudio sin coste." />
        <meta property="og:title" content="Bróker hipotecario vs banco | Avanza Hipotecas" />
        <meta property="og:description" content="Un bróker hipotecario compara varias entidades, ahorra tiempo en gestiones y negocia mejores condiciones que acudir directamente al banco. Estudio sin coste." />
        <meta property="og:url" content="https://avanzahipotecas.es/blog/broker-hipotecario-vs-banco" />
        <meta property="og:image" content="https://avanzahipotecas.es/og-image.jpg" />
        <meta property="og:type" content="article" />
        <meta name="robots" content="index, follow" />
        <link rel="canonical" href="https://avanzahipotecas.es/blog/broker-hipotecario-vs-banco" />
        <script type="application/ld+json">{JSON.stringify(schemaArticle)}</script>
      </Helmet>

      {/* ── HERO ── */}
      <section className="pt-24 bg-white">
        <div className="relative h-72 md:h-96 overflow-hidden">
          <img
            src="https://images.unsplash.com/photo-1450101499163-c8848c66ca85?w=1200&q=75&fm=webp"
            alt="Reunión entre un intermediario hipotecario y un cliente revisando condiciones de financiación"
            className="w-full h-full object-cover"
            width="1200"
            height="400"
            fetchpriority="high"
          />
          <div className="absolute inset-0 bg-[#1A3C40]/70" />
          <div className="absolute inset-0 flex items-end">
            <div className="container mx-auto px-4 pb-10">
              <div className="flex items-center gap-3 mb-4 flex-wrap">
                <span className="bg-blue-500/20 text-blue-300 px-3 py-1 rounded-full text-sm font-semibold flex items-center gap-1">
                  <Tag className="w-3 h-3" /> Guías
                </span>
                <span className="text-white/70 text-sm flex items-center gap-1">
                  <Clock className="w-3.5 h-3.5" /> 7 min de lectura
                </span>
                <span className="text-white/70 text-sm">12 agosto 2026</span>
              </div>
              <h1 className="text-3xl md:text-4xl lg:text-5xl font-bold text-white leading-tight max-w-3xl">
                Por qué acudir a un bróker hipotecario en vez de directamente al banco
              </h1>
            </div>
          </div>
        </div>
      </section>

      {/* ── CONTENIDO ── */}
      <section className="py-16 bg-white">
        <div className="container mx-auto px-4">
          <div className="max-w-3xl mx-auto">

            <Link to="/blog" className="inline-flex items-center gap-2 text-[#2EBFA5] font-medium mb-10 hover:underline">
              <ArrowLeft className="w-4 h-4" /> Volver al blog
            </Link>

            <div className="prose prose-lg max-w-none text-gray-700 leading-relaxed space-y-6">

              {/* INTRO */}
              <p className="text-xl text-gray-600 font-medium leading-relaxed">
                Al solicitar una hipoteca, la mayoría de personas empieza por el mismo sitio: su banco habitual. Es la opción más inmediata, pero también la más limitada. Un banco solo puede ofrecer su propio producto, con sus propios criterios de riesgo y sus propias condiciones. Un bróker hipotecario trabaja con un planteamiento distinto: analiza el perfil del cliente y lo contrasta contra decenas de entidades para identificar cuál ofrece las mejores condiciones para ese caso concreto.
              </p>
              <p>
                Esta diferencia de enfoque tiene consecuencias directas en el tipo de interés, en el tiempo que se tarda en cerrar la operación y en la probabilidad de que la hipoteca sea aprobada. A continuación explicamos qué hace exactamente un intermediario hipotecario y por qué su intervención suele traducirse en mejores resultados que una gestión directa.
              </p>

              {/* QUÉ HACE UN BRÓKER */}
              <h2 className="text-2xl font-bold text-[#1A3C40] pt-4">Qué hace un bróker hipotecario y cómo trabaja Avanza</h2>
              <p>
                Un bróker hipotecario es un intermediario financiero que actúa entre el cliente y las entidades bancarias. Su función consiste en analizar la situación financiera del solicitante —ingresos, ahorros, tipo de contrato, historial crediticio— y presentar esa operación a las entidades que, según su criterio de riesgo, tienen más probabilidades de aprobarla en condiciones favorables.
              </p>
              <p>
                En Avanza Hipotecas, el proceso empieza con un estudio del perfil financiero del cliente. A partir de ahí, se identifican las entidades cuyos criterios de concesión encajan mejor con ese perfil, se prepara la documentación necesaria para cada una y se presenta la operación de forma simultánea a varias de ellas. El objetivo es obtener distintas ofertas reales y comparables, no una única respuesta condicionada por los intereses comerciales de una sola entidad.
              </p>
              <p>
                A diferencia de un empleado de banca, cuyo trabajo es colocar los productos de su propia entidad, la actividad de un intermediario hipotecario está regulada por el Banco de España, que exige inscripción en su registro de intermediarios de crédito inmobiliario y el cumplimiento de obligaciones de transparencia frente al cliente.
              </p>

              {/* COMPARATIVA DE CONDICIONES */}
              <h2 className="text-2xl font-bold text-[#1A3C40] pt-4">Comparar hipotecas: la diferencia entre un producto y varios</h2>
              <p>
                Cuando un cliente acude directamente a una entidad, recibe una única propuesta: la que esa entidad ha decidido ofrecerle en función de su propia política comercial y de riesgo del momento. No existe punto de comparación real, porque el cliente no tiene visibilidad de qué condiciones le ofrecerían otras entidades para ese mismo perfil.
              </p>
              <p>
                Un bróker hipotecario elimina esa limitación. Al trabajar con múltiples entidades de forma simultánea, puede comparar hipotecas de distintos proveedores para un mismo caso: tipo de interés, vinculaciones exigidas, comisiones de apertura, plazo máximo y condiciones de amortización. Esa comparativa permite identificar la oferta objetivamente más ventajosa, en lugar de aceptar la única propuesta disponible.
              </p>
              <p>
                Esta comparativa resulta especialmente determinante en productos con criterios muy dispares entre entidades, como la <Link to="/hipoteca-100" className="text-[#2EBFA5] font-medium hover:underline">hipoteca al 100% sin entrada</Link> o la <Link to="/hipoteca-joven" className="text-[#2EBFA5] font-medium hover:underline">hipoteca joven</Link>, donde los requisitos de acceso y las condiciones ofrecidas varían de forma notable de una entidad a otra.
              </p>

              <div className="not-prose bg-white border border-gray-200 rounded-2xl overflow-hidden my-4">
                <div className="bg-[#1A3C40] text-white px-6 py-3">
                  <p className="font-bold text-sm">Ir directamente al banco frente a acudir a un bróker hipotecario</p>
                </div>
                <div className="divide-y divide-gray-100">
                  {[
                    { factor: 'Entidades consultadas', banco: 'Una, la del propio banco', broker: 'Varias entidades de forma simultánea' },
                    { factor: 'Comparativa de condiciones', banco: 'No existe, solo hay una oferta', broker: 'Se comparan tipos, comisiones y plazos' },
                    { factor: 'Gestión documental', banco: 'A cargo del cliente en cada entidad', broker: 'Centralizada por el intermediario' },
                    { factor: 'Capacidad de negociación', banco: 'Limitada al margen individual del cliente', broker: 'Respaldada por el volumen de operaciones' },
                    { factor: 'Coste del servicio', banco: 'No aplica', broker: 'Estudio sin coste ni compromiso' },
                  ].map((row, i) => (
                    <div key={i} className="grid grid-cols-1 sm:grid-cols-3 text-sm">
                      <div className="px-5 py-3 font-medium text-[#1A3C40] bg-gray-50">{row.factor}</div>
                      <div className="px-5 py-3 text-gray-600 leading-snug border-t sm:border-t-0 sm:border-l border-gray-100">{row.banco}</div>
                      <div className="px-5 py-3 text-gray-600 leading-snug border-t sm:border-t-0 sm:border-l border-gray-100">{row.broker}</div>
                    </div>
                  ))}
                </div>
              </div>

              {/* AHORRO DE TIEMPO */}
              <h2 className="text-2xl font-bold text-[#1A3C40] pt-4">Ahorro de tiempo: gestión centralizada de la documentación</h2>
              <p>
                Solicitar una hipoteca implica reunir y presentar un volumen considerable de documentación: nóminas, declaraciones de la renta, vida laboral, extractos bancarios, tasación, escrituras. Si el cliente decide consultar varias entidades por su cuenta, tiene que repetir ese proceso —y a menudo esa documentación— con cada una de ellas, además de gestionar los tiempos de respuesta de cada banco por separado.
              </p>
              <p>
                Un bróker hipotecario centraliza toda esa gestión. La documentación se recopila una sola vez, se adapta al formato que exige cada entidad y se hace seguimiento simultáneo de todas las operaciones abiertas. Esto reduce de forma considerable el tiempo total del proceso, desde la solicitud inicial hasta la obtención de la oferta vinculante.
              </p>

              {/* NEGOCIACIÓN */}
              <h2 className="text-2xl font-bold text-[#1A3C40] pt-4">Capacidad de negociación por volumen de operaciones</h2>
              <p>
                Un cliente que negocia una hipoteca de forma individual tiene un margen de negociación limitado: su capacidad de presión frente al banco se reduce, en la práctica, a la posibilidad de acudir a otra entidad. Un intermediario hipotecario, en cambio, gestiona un volumen constante de operaciones con las mismas entidades, lo que le otorga una posición distinta en la negociación.
              </p>
              <p>
                Ese volumen permite acceder a condiciones que las entidades no ofrecen en sus canales comerciales directos: reducciones en el diferencial, bonificaciones ajustadas al perfil real del cliente o exención de determinadas comisiones. No se trata de ventajas garantizadas en todos los casos, sino de una capacidad de negociación que un cliente individual, por sí solo, no tiene frente a la entidad.
              </p>

              {/* ESTUDIO GRATUITO */}
              <h2 className="text-2xl font-bold text-[#1A3C40] pt-4">Estudio sin coste antes de comprometerse</h2>
              <p>
                Antes de iniciar cualquier trámite, en Avanza Hipotecas realizamos un estudio de viabilidad sin coste ni compromiso. En esa fase se analiza la situación financiera del cliente, se determina el importe de financiación al que puede optar y se identifican las entidades con más probabilidades de aprobar la operación en buenas condiciones.
              </p>
              <p>
                Este estudio permite al cliente conocer su posición real en el mercado hipotecario antes de decidir si continúa con el proceso. No implica ningún compromiso de contratación ni genera coste alguno, con independencia de que la operación llegue o no a formalizarse.
              </p>
              <p>
                Como primer acercamiento, antes de solicitar el estudio sin coste, también puedes utilizar nuestro <Link to="/simulador" className="text-[#2EBFA5] font-medium hover:underline">simulador de hipoteca</Link> para hacerte una idea orientativa del importe de financiación y la cuota mensual según tu situación.
              </p>

              {/* ACOMPAÑAMIENTO */}
              <h2 className="text-2xl font-bold text-[#1A3C40] pt-4">Acompañamiento durante todo el proceso hasta la firma</h2>
              <p>
                La labor de un intermediario hipotecario no termina con la obtención de una oferta. Continúa durante toda la tramitación: coordinación con la entidad para la tasación, revisión de la oferta vinculante (FEIN), verificación de que las condiciones pactadas se mantienen hasta el final del proceso y coordinación con la notaría para la firma.
              </p>
              <p>
                Ese acompañamiento continuo reduce el margen de error en una operación que, para la mayoría de personas, es una de las decisiones financieras más relevantes de su vida. Contar con un profesional que supervisa cada fase del proceso aporta un control sobre la operación que resulta difícil de replicar gestionándola de forma individual.
              </p>
              <p>
                La actividad de intermediación hipotecaria en España está sujeta a la supervisión del Banco de España y, en el ámbito de la política monetaria que determina la evolución de los tipos de interés, al Banco Central Europeo (BCE). Este marco regulatorio garantiza que el intermediario opere con criterios de transparencia frente al cliente en todas las fases del proceso.
              </p>
            </div>

            {/* ── CTA FINAL ── */}
            <div className="mt-14 bg-[#1A3C40] text-white rounded-2xl p-8 text-center">
              <h3 className="text-2xl font-bold mb-3">¿Quieres saber qué condiciones puedes conseguir?</h3>
              <p className="text-gray-300 mb-6">
                Realizamos un estudio de tu situación sin coste ni compromiso y te indicamos qué entidades encajan mejor con tu perfil.
              </p>
              <div className="flex flex-col sm:flex-row gap-4 justify-center items-center">
                <Button onClick={scrollToContact} className="bg-[#2EBFA5] hover:bg-[#25a28b] text-white font-semibold px-8 py-3 text-lg flex items-center gap-2">
                  Solicita tu estudio sin coste <ArrowRight className="w-5 h-5" />
                </Button>
                <a href="https://wa.me/34624810190" target="_blank" rel="noopener noreferrer" className="flex items-center gap-2 text-[#2EBFA5] font-semibold hover:text-white transition-colors text-lg">
                  <Phone className="w-5 h-5" /> WhatsApp 624 810 190
                </a>
              </div>
              <p className="text-gray-400 text-sm mt-5">
                contacto@avanzahipotecas.es
              </p>
            </div>

            {/* ── TAMBIÉN TE PUEDE INTERESAR ── */}
            <div className="mt-8 border-t border-gray-100 pt-8">
              <p className="text-sm font-semibold text-[#1A3C40] mb-4">También te puede interesar</p>
              <div className="grid sm:grid-cols-3 gap-3">
                <Link to="/blog/hipoteca-para-autonomos-2026" className="flex items-center gap-3 bg-[#E9ECEF] rounded-xl px-4 py-3 hover:bg-[#2EBFA5]/10 transition-colors group">
                  <ArrowRight className="w-4 h-4 text-[#2EBFA5] flex-shrink-0" />
                  <span className="text-sm font-medium text-[#1A3C40] group-hover:text-[#2EBFA5] transition-colors">Hipoteca para autónomos en 2026</span>
                </Link>
                <Link to="/blog/subrogacion-hipotecaria-guia-completa" className="flex items-center gap-3 bg-[#E9ECEF] rounded-xl px-4 py-3 hover:bg-[#2EBFA5]/10 transition-colors group">
                  <ArrowRight className="w-4 h-4 text-[#2EBFA5] flex-shrink-0" />
                  <span className="text-sm font-medium text-[#1A3C40] group-hover:text-[#2EBFA5] transition-colors">Subrogación hipotecaria: guía completa</span>
                </Link>
                <Link to="/blog/hipoteca-fija-variable-mixta-2026" className="flex items-center gap-3 bg-[#E9ECEF] rounded-xl px-4 py-3 hover:bg-[#2EBFA5]/10 transition-colors group">
                  <ArrowRight className="w-4 h-4 text-[#2EBFA5] flex-shrink-0" />
                  <span className="text-sm font-medium text-[#1A3C40] group-hover:text-[#2EBFA5] transition-colors">Hipoteca fija, variable o mixta en 2026</span>
                </Link>
              </div>
            </div>

          </div>
        </div>
      </section>
    </>
  );
};

export default BrokerVsBanco;
