import React from 'react';
import { Helmet } from 'react-helmet';
import { Clock, Tag, ArrowRight, ArrowLeft, CheckCircle, Phone } from 'lucide-react';
import { Link, useNavigate } from 'react-router-dom';
import { Button } from '@/components/ui/button';

const HipotecaAutonomos = () => {
  const navigate = useNavigate();

  const scrollToContact = () => {
    navigate('/');
    setTimeout(() => document.getElementById('contacto')?.scrollIntoView({ behavior: 'smooth' }), 100);
  };

  const schemaArticle = {
    '@context': 'https://schema.org',
    '@type': 'Article',
    headline: 'Hipoteca para autónomos en 2026: cómo conseguirla y qué piden los bancos',
    description: 'Guía completa para autónomos que quieren solicitar una hipoteca en 2026: documentación necesaria, perfil valorado por los bancos y ventajas de usar un broker hipotecario.',
    datePublished: '2026-06-05',
    author: { '@type': 'Organization', name: 'Avanza Hipotecas' },
    publisher: {
      '@type': 'Organization',
      name: 'Avanza Hipotecas',
      url: 'https://avanzahipotecas.es',
    },
    mainEntityOfPage: {
      '@type': 'WebPage',
      '@id': 'https://avanzahipotecas.es/blog/hipoteca-para-autonomos-2026',
    },
  };

  return (
    <>
      <Helmet>
        <title>Hipoteca para autónomos en 2026: cómo conseguirla | Avanza Hipotecas</title>
        <meta name="description" content="Guía para autónomos que quieren pedir una hipoteca en 2026: qué documentación piden los bancos, qué perfil se valora más y por qué un broker marca la diferencia. Consulta gratuita." />
        <meta property="og:title" content="Hipoteca para autónomos en 2026: cómo conseguirla | Avanza Hipotecas" />
        <meta property="og:description" content="Guía para autónomos que quieren pedir una hipoteca en 2026: qué documentación piden los bancos, qué perfil se valora más y por qué un broker marca la diferencia. Consulta gratuita." />
        <meta property="og:url" content="https://avanzahipotecas.es/blog/hipoteca-para-autonomos-2026" />
        <meta property="og:image" content="https://avanzahipotecas.es/og-image.jpg" />
        <meta property="og:type" content="article" />
        <meta name="robots" content="index, follow" />
        <link rel="canonical" href="https://avanzahipotecas.es/blog/hipoteca-para-autonomos-2026" />
        <script type="application/ld+json">{JSON.stringify(schemaArticle)}</script>
      </Helmet>

      {/* ── HERO ── */}
      <section className="pt-24 bg-white">
        <div className="relative h-72 md:h-96 overflow-hidden">
          <img
            src="https://images.unsplash.com/photo-1521791136064-7986c2920216?w=1200&q=75&fm=webp"
            alt="Autónomo trabajando en su oficina revisando documentos financieros"
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
                  <Clock className="w-3.5 h-3.5" /> 8 min de lectura
                </span>
                <span className="text-white/70 text-sm">5 junio 2026</span>
              </div>
              <h1 className="text-3xl md:text-4xl lg:text-5xl font-bold text-white leading-tight max-w-3xl">
                Hipoteca para autónomos en 2026: cómo conseguirla y qué piden los bancos
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
                Conseguir una hipoteca siendo autónomo en España es posible. Pero exige más preparación, más documentación y, en muchos casos, saber a qué entidades dirigirse. Los bancos no rechazan a los autónomos por principio: los analizan con criterios distintos a los de un asalariado y, si el perfil es sólido, conceden la hipoteca en condiciones completamente competitivas.
              </p>
              <p>
                En esta guía explicamos qué documentación solicitan las entidades, qué características del perfil pesan más en la decisión y cómo un bróker hipotecario puede marcar una diferencia real en el resultado final.
              </p>

              {/* POR QUÉ ES MÁS DIFÍCIL */}
              <h2 className="text-2xl font-bold text-[#1A3C40] pt-4">Por qué los bancos analizan distinto a un autónomo</h2>
              <p>
                Un empleado por cuenta ajena tiene una nómina mensual fija que el banco puede verificar de forma objetiva. Sus ingresos futuros son predecibles, al menos a corto y medio plazo. Para el banco, eso reduce el riesgo de impago.
              </p>
              <p>
                Un autónomo, en cambio, tiene ingresos que pueden variar según el ejercicio, el sector o la estacionalidad del negocio. Los bancos no pueden proyectar su capacidad de pago futuro con la misma certeza. Por eso aplican un análisis más detallado: no se fijan en un extracto de tres meses, sino en la evolución del negocio a lo largo de varios años.
              </p>
              <p>
                Esto no es un obstáculo insalvable. Es simplemente una forma diferente de acreditar solvencia. Un autónomo con dos años de actividad consolidada, ingresos estables y sin cargas financieras relevantes puede acceder a una hipoteca en condiciones equivalentes a las de cualquier trabajador por cuenta ajena.
              </p>

              {/* DOCUMENTACIÓN */}
              <h2 className="text-2xl font-bold text-[#1A3C40] pt-4">Qué documentación pide el banco a un autónomo</h2>
              <p>
                La documentación que solicitan las entidades a un autónomo es más extensa que la de un asalariado. Estos son los documentos habituales en cualquier operación hipotecaria para trabajadores por cuenta propia:
              </p>

              <div className="not-prose space-y-3 my-4">
                {[
                  {
                    titulo: 'Últimas dos declaraciones de la renta (IRPF)',
                    detalle: 'Es el documento principal para acreditar ingresos. El banco analiza el rendimiento neto de la actividad económica declarado, no la facturación bruta. Es imprescindible que estén presentadas en plazo y sin incidencias.',
                  },
                  {
                    titulo: 'Declaraciones trimestrales de IVA (modelos 303)',
                    detalle: 'Permiten al banco ver la evolución reciente de la actividad a lo largo del año en curso, más allá de la última renta anual. Son especialmente relevantes si la última declaración de la renta tiene más de doce meses.',
                  },
                  {
                    titulo: 'Vida laboral actualizada',
                    detalle: 'Acredita la fecha de alta como autónomo y la continuidad de la actividad. La mayoría de entidades exigen un mínimo de dos años de antigüedad como requisito indispensable.',
                  },
                  {
                    titulo: 'Extractos bancarios de los últimos 6 a 12 meses',
                    detalle: 'El banco analiza los movimientos de la cuenta profesional para contrastar que los ingresos declarados coinciden con los cobros reales. Descuadres significativos pueden generar dudas sobre la solidez del negocio.',
                  },
                  {
                    titulo: 'Certificado de estar al corriente con la Agencia Tributaria y la Seguridad Social',
                    detalle: 'Cualquier deuda con Hacienda o la Seguridad Social bloquea la operación de forma automática. Debe estar al día en el momento de la solicitud.',
                  },
                  {
                    titulo: 'Contrato de alquiler o escrituras de la vivienda habitual actual',
                    detalle: 'Para verificar la situación de residencia actual y calcular correctamente la carga financiera mensual del solicitante.',
                  },
                ].map((item, i) => (
                  <div key={i} className="flex items-start gap-3 bg-[#E9ECEF] rounded-xl px-5 py-4">
                    <CheckCircle className="w-5 h-5 text-[#2EBFA5] flex-shrink-0 mt-0.5" />
                    <div>
                      <p className="font-semibold text-[#1A3C40] text-sm">{item.titulo}</p>
                      <p className="text-gray-600 text-sm mt-0.5 leading-relaxed">{item.detalle}</p>
                    </div>
                  </div>
                ))}
              </div>

              <p>
                Algunos bancos pueden solicitar documentación adicional en función del tipo de actividad: en el caso de sociedades, pueden requerir las cuentas anuales depositadas en el Registro Mercantil o el modelo 200 del Impuesto de Sociedades. Para actividades profesionales con facturación a pocas empresas, pueden pedir los principales contratos de prestación de servicios.
              </p>

              {/* PERFIL IDEAL */}
              <h2 className="text-2xl font-bold text-[#1A3C40] pt-4">Qué perfil de autónomo tiene más opciones de conseguir la hipoteca</h2>
              <p>
                No todos los autónomos se encuentran en la misma posición ante una entidad financiera. Estos son los factores que más peso tienen en la evaluación del riesgo:
              </p>

              <div className="not-prose bg-white border border-gray-200 rounded-2xl overflow-hidden my-4">
                <div className="bg-[#1A3C40] text-white px-6 py-3">
                  <p className="font-bold text-sm">Factores que refuerzan el perfil de un autónomo ante el banco</p>
                </div>
                <div className="divide-y divide-gray-100">
                  {[
                    { factor: 'Antigüedad mínima de 2 años', impacto: 'Imprescindible en la mayoría de entidades. Con menos de 2 años es muy difícil conseguir financiación estándar.' },
                    { factor: 'Ingresos estables o crecientes', impacto: 'Dos rentas con ingresos similares o en aumento son mucho más valoradas que una con picos y otra con caída.' },
                    { factor: 'Sin deudas con Hacienda ni Seguridad Social', impacto: 'Cualquier descubierto con la Administración es un bloqueo automático en todas las entidades.' },
                    { factor: 'Sin préstamos personales ni cargas financieras elevadas', impacto: 'El banco calcula el ratio deuda/ingresos. Cuantas menos cargas mensuales, mayor margen para la hipoteca.' },
                    { factor: 'Ahorros propios para la entrada y gastos', impacto: 'Disponer del 20-30% del precio más los gastos de compraventa mejora significativamente las condiciones.' },
                    { factor: 'Actividad en sector consolidado o con contrato de servicios estable', impacto: 'Reduce la percepción de riesgo del negocio. Un autónomo con un cliente principal sólido genera más confianza.' },
                  ].map((row, i) => (
                    <div key={i} className="grid grid-cols-1 sm:grid-cols-2 text-sm">
                      <div className="px-5 py-3 font-medium text-[#1A3C40] bg-gray-50">{row.factor}</div>
                      <div className="px-5 py-3 text-gray-600 leading-snug">{row.impacto}</div>
                    </div>
                  ))}
                </div>
              </div>

              <p>
                El perfil que más opciones tiene es el de un autónomo con al menos tres años de actividad ininterrumpida, dos rentas anuales con ingresos netos estables por encima de los 25.000 euros, sin deudas con la Administración y con capacidad de aportar entre el 20% y el 30% del precio de la vivienda como entrada. Ese perfil puede acceder a prácticamente cualquier hipoteca del mercado.
              </p>
              <p>
                Pero también hay opciones para perfiles más ajustados. Con dos años de antigüedad y unos ingresos netos de 18.000-20.000 euros anuales, existen entidades que estudian la operación si el importe solicitado es proporcional a esos ingresos. La clave está en saber cuáles son esas entidades y cómo presentar la operación.
              </p>
              <p>
                Si necesitas financiación del 100% del valor de tasación, también existe esa posibilidad para autónomos con un perfil sólido. Puedes consultar más información en nuestra página sobre <Link to="/hipoteca-100" className="text-[#2EBFA5] font-medium hover:underline">hipoteca al 100%</Link>.
              </p>

              {/* VENTAJAS BROKER */}
              <h2 className="text-2xl font-bold text-[#1A3C40] pt-4">Ventajas de usar un bróker hipotecario si eres autónomo</h2>
              <p>
                Para un autónomo, acudir directamente a su banco a pedir una hipoteca tiene una limitación estructural: solo puede ver lo que ese banco está dispuesto a ofrecerle. Si ese banco tiene criterios restrictivos para perfiles por cuenta propia, la respuesta será un rechazo o unas condiciones poco competitivas.
              </p>
              <p>
                Un bróker hipotecario trabaja simultáneamente con más de 20 entidades y conoce, para cada una de ellas, los criterios reales con los que analizan a los autónomos. Eso permite identificar qué entidades tienen más probabilidad de aprobar la operación y presentar el expediente en las condiciones más favorables posibles.
              </p>

              <div className="not-prose space-y-3 my-4">
                {[
                  'Identificamos qué entidades tienen criterios más flexibles con autónomos y cuáles exigen más antigüedad o mayores ingresos mínimos',
                  'Preparamos la documentación de forma que muestre la solidez real del perfil, no solo los números brutos',
                  'Negociamos el tipo de interés y las condiciones en nombre del cliente, con acceso a ofertas que no están disponibles en las webs comerciales de los bancos',
                  'Evitamos que el cliente acumule solicitudes rechazadas, que pueden perjudicar su historial crediticio',
                  'Gestionamos todo el proceso hasta la firma: documentación, tasación, negociación y coordinación notarial',
                  'El servicio no tiene coste para el cliente: los honorarios del bróker los abona la entidad que concede la hipoteca',
                ].map((item, i) => (
                  <div key={i} className="flex items-start gap-3 bg-[#E9ECEF] rounded-xl px-5 py-3">
                    <CheckCircle className="w-5 h-5 text-[#2EBFA5] flex-shrink-0 mt-0.5" />
                    <span className="text-gray-700 text-sm">{item}</span>
                  </div>
                ))}
              </div>

              <p>
                El valor de un bróker para un autónomo no se limita a conseguir un tipo de interés más bajo. En muchos casos, la diferencia real está en <strong>conseguir la aprobación</strong> de una operación que directamente habría sido rechazada. Las entidades financieras no son homogéneas en sus criterios: lo que una rechaza, otra puede aprobarlo con buenas condiciones. Conocer ese mapa es el trabajo del bróker.
              </p>

              {/* CONCLUSIÓN */}
              <h2 className="text-2xl font-bold text-[#1A3C40] pt-4">El primer paso: saber qué opciones tienes realmente</h2>
              <p>
                Antes de iniciar cualquier trámite bancario, lo más útil que puede hacer un autónomo que quiere comprar vivienda es conocer su posición real en el mercado hipotecario. Eso implica revisar la documentación disponible, evaluar los ingresos de los últimos ejercicios y contrastar qué entidades encajan mejor con ese perfil.
              </p>
              <p>
                En Avanza Hipotecas hacemos ese análisis de forma gratuita y sin ningún compromiso. En una primera consulta evaluamos tu situación y te decimos con claridad qué posibilidades reales tienes, qué documentación necesitarás preparar y qué condiciones puedes esperar conseguir. Sin promesas exageradas ni rodeos.
              </p>
            </div>

            {/* ── CTA FINAL ── */}
            <div className="mt-14 bg-[#1A3C40] text-white rounded-2xl p-8 text-center">
              <h3 className="text-2xl font-bold mb-3">¿Eres autónomo y quieres comprar vivienda?</h3>
              <p className="text-gray-300 mb-6">
                Analizamos tu caso sin coste y sin compromiso. Te decimos qué opciones tienes y qué entidades encajan mejor con tu perfil de autónomo.
              </p>
              <div className="flex flex-col sm:flex-row gap-4 justify-center items-center">
                <Button onClick={scrollToContact} className="bg-[#2EBFA5] hover:bg-[#25a28b] text-white font-semibold px-8 py-3 text-lg flex items-center gap-2">
                  Solicita tu análisis gratuito <ArrowRight className="w-5 h-5" />
                </Button>
                <a href="tel:+34624810190" className="flex items-center gap-2 text-[#2EBFA5] font-semibold hover:text-white transition-colors text-lg">
                  <Phone className="w-5 h-5" /> 624 810 190
                </a>
              </div>
            </div>

            {/* ── TAMBIÉN TE PUEDE INTERESAR ── */}
            <div className="mt-8 border-t border-gray-100 pt-8">
              <p className="text-sm font-semibold text-[#1A3C40] mb-4">También te puede interesar</p>
              <div className="grid sm:grid-cols-3 gap-3">
                <Link to="/hipoteca-100" className="flex items-center gap-3 bg-[#E9ECEF] rounded-xl px-4 py-3 hover:bg-[#2EBFA5]/10 transition-colors group">
                  <ArrowRight className="w-4 h-4 text-[#2EBFA5] flex-shrink-0" />
                  <span className="text-sm font-medium text-[#1A3C40] group-hover:text-[#2EBFA5] transition-colors">Hipoteca al 100% sin entrada</span>
                </Link>
                <Link to="/blog/cuanto-dinero-necesito-para-comprar-vivienda" className="flex items-center gap-3 bg-[#E9ECEF] rounded-xl px-4 py-3 hover:bg-[#2EBFA5]/10 transition-colors group">
                  <ArrowRight className="w-4 h-4 text-[#2EBFA5] flex-shrink-0" />
                  <span className="text-sm font-medium text-[#1A3C40] group-hover:text-[#2EBFA5] transition-colors">¿Cuánto dinero necesitas ahorrado?</span>
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

export default HipotecaAutonomos;
