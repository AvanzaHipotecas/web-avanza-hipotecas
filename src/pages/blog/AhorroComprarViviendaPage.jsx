import React from 'react';
import { Helmet } from 'react-helmet';
import { motion } from 'framer-motion';
import { Clock, Tag, ArrowRight, ArrowLeft, CheckCircle } from 'lucide-react';
import { Link, useNavigate } from 'react-router-dom';
import { Button } from '@/components/ui/button';

const AhorroComprarViviendaPage = () => {
  const navigate = useNavigate();

  const scrollToContact = () => {
    navigate('/');
    setTimeout(() => document.getElementById('contacto')?.scrollIntoView({ behavior: 'smooth' }), 100);
  };

  return (
    <>
      <Helmet>
        <title>¿Cuánto dinero necesitas para comprar vivienda? | Avanza Hipotecas</title>
        <meta name="description" content="Cuánto debes ahorrar para comprar piso en España: entrada, gastos e impuestos con ejemplos reales. Consulta gratuita con Avanza Hipotecas." />
        <meta property="og:title" content="¿Cuánto dinero necesitas para comprar vivienda? | Avanza Hipotecas" />
        <meta property="og:description" content="Cuánto debes ahorrar para comprar piso en España: entrada, gastos e impuestos con ejemplos reales. Consulta gratuita con Avanza Hipotecas." />
        <meta property="og:url" content="https://avanzahipotecas.es/blog/cuanto-dinero-necesito-para-comprar-vivienda" />
        <meta property="og:image" content="https://avanzahipotecas.es/og-image.jpg" />
        <meta property="og:type" content="article" />
        <meta name="robots" content="index, follow" />
        <link rel="canonical" href="https://avanzahipotecas.es/blog/cuanto-dinero-necesito-para-comprar-vivienda" />
      </Helmet>

      {/* ── HERO ── */}
      <section className="pt-24 bg-white">
        <div className="relative h-72 md:h-96 overflow-hidden">
          <img
            src="https://images.unsplash.com/photo-1579621970563-ebec7560ff3e?w=1200&q=80&fm=webp"
            alt="Ahorro para comprar vivienda"
            className="w-full h-full object-cover"
            fetchpriority="high"
          />
          <div className="absolute inset-0 bg-[#1A3C40]/70" />
          <div className="absolute inset-0 flex items-end">
            <div className="container mx-auto px-4 pb-10">
              <div className="flex items-center gap-3 mb-4">
                <span className="bg-blue-500/20 text-blue-300 px-3 py-1 rounded-full text-sm font-semibold flex items-center gap-1">
                  <Tag className="w-3 h-3" /> Guías
                </span>
                <span className="text-white/70 text-sm flex items-center gap-1">
                  <Clock className="w-3.5 h-3.5" /> 4 min de lectura
                </span>
                <span className="text-white/70 text-sm">20 abril 2026</span>
              </div>
              <h1 className="text-3xl md:text-4xl lg:text-5xl font-bold text-white leading-tight max-w-3xl">
                ¿Cuánto dinero necesito ahorrado para comprar una vivienda?
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

              <p className="text-xl text-gray-600 font-medium leading-relaxed">
                Uno de los errores más frecuentes al plantearse comprar vivienda es empezar a buscar piso sin saber exactamente cuánto dinero se necesita. Muchos compradores descubren tarde que el banco no les financia todo, y que los gastos de compraventa suponen un porcentaje nada despreciable sobre el precio de compra.
              </p>

              <h2 className="text-2xl font-bold text-[#1A3C40] pt-4">La regla del 80%: lo que financia el banco</h2>
              <p>
                En condiciones estándar, los bancos españoles financian como máximo el <strong>80% del valor de tasación</strong> de la vivienda. Eso significa que el comprador debe aportar el 20% restante de su propio bolsillo solo para la entrada, sin contar los gastos.
              </p>
              <p>
                Sin embargo, existen excepciones importantes que conviene conocer:
              </p>
              <ul className="list-disc pl-6 space-y-2">
                <li><strong>Hipoteca al 90%:</strong> posible en algunos perfiles con ingresos sólidos y buena solvencia.</li>
                <li><strong><Link to="/hipoteca-100" className="text-[#2EBFA5] font-medium hover:underline">Hipoteca al 100%</Link>:</strong> disponible para determinados perfiles, normalmente a través de un bróker hipotecario que accede a entidades especializadas.</li>
                <li><strong>Jóvenes menores de 35 años:</strong> el aval del Estado puede facilitar el acceso a mayor financiación.</li>
              </ul>

              <h2 className="text-2xl font-bold text-[#1A3C40] pt-4">Los gastos de compraventa: el gran olvidado</h2>
              <p>
                Además de la entrada, hay un capítulo de gastos que muchos compradores no tienen en cuenta hasta que están a punto de firmar: los impuestos y gastos de compraventa. Estos pueden suponer <strong>entre el 8% y el 13% adicional</strong> sobre el precio de la vivienda, dependiendo de la comunidad autónoma.
              </p>

              {/* Tabla de gastos */}
              <div className="not-prose bg-[#E9ECEF] rounded-2xl p-6 my-6">
                <h3 className="font-bold text-[#1A3C40] text-lg mb-5">Desglose de gastos de compraventa (vivienda de segunda mano)</h3>
                <div className="space-y-3">
                  {[
                    { concepto: 'ITP (Impuesto de Transmisiones Patrimoniales)', importe: '6% – 10% del precio', nota: 'Varía por comunidad autónoma' },
                    { concepto: 'Notaría', importe: '~900 €', nota: 'Escritura de compraventa e hipoteca' },
                    { concepto: 'Registro de la Propiedad', importe: '~450 €', nota: 'Inscripción de la hipoteca' },
                    { concepto: 'Gestoría', importe: '~350 €', nota: 'Tramitación de la documentación' },
                    { concepto: 'Tasación', importe: '~400 €', nota: 'Requerida por el banco' },
                  ].map((row, i) => (
                    <div key={i} className="flex flex-col sm:flex-row sm:items-center sm:justify-between bg-white rounded-xl px-5 py-3 gap-1">
                      <div>
                        <p className="font-semibold text-[#1A3C40] text-sm">{row.concepto}</p>
                        <p className="text-xs text-gray-500">{row.nota}</p>
                      </div>
                      <span className="font-bold text-[#2EBFA5] text-sm whitespace-nowrap">{row.importe}</span>
                    </div>
                  ))}
                </div>
                <p className="text-xs text-gray-500 mt-4">* Para obra nueva se paga IVA (10%) en lugar de ITP, más AJD (Actos Jurídicos Documentados).</p>
              </div>

              <h2 className="text-2xl font-bold text-[#1A3C40] pt-4">Ejemplo práctico: vivienda de 200.000 €</h2>

              <div className="not-prose bg-white border border-gray-200 rounded-2xl overflow-hidden my-6">
                <div className="bg-[#1A3C40] text-white px-6 py-4">
                  <p className="font-bold text-lg">Escenario: piso de segunda mano en Madrid (ITP 6%)</p>
                </div>
                <div className="p-6 space-y-3">
                  {[
                    { label: 'Precio de compra', value: '200.000 €', highlight: false },
                    { label: 'Hipoteca al 80%', value: '160.000 €', highlight: false },
                    { label: 'Entrada necesaria (20%)', value: '40.000 €', highlight: false },
                    { label: 'ITP (6%)', value: '12.000 €', highlight: false },
                    { label: 'Resto de gastos', value: '~2.100 €', highlight: false },
                    { label: 'Total que debes tener ahorrado', value: '~54.100 €', highlight: true },
                  ].map((row, i) => (
                    <div key={i} className={`flex justify-between items-center px-4 py-2.5 rounded-lg ${row.highlight ? 'bg-[#2EBFA5]/10' : 'bg-gray-50'}`}>
                      <span className={`text-sm ${row.highlight ? 'font-bold text-[#1A3C40]' : 'text-gray-600'}`}>{row.label}</span>
                      <span className={`font-bold ${row.highlight ? 'text-[#1A3C40] text-base' : 'text-gray-800 text-sm'}`}>{row.value}</span>
                    </div>
                  ))}
                </div>
              </div>

              <p>
                Eso supone tener ahorrado aproximadamente el <strong>27% del precio de compra</strong>. Una cifra que muchos compradores no tienen en cuenta al iniciar la búsqueda.
              </p>

              <h2 className="text-2xl font-bold text-[#1A3C40] pt-4">¿Y si no tengo ese 20% de entrada?</h2>
              <p>
                No siempre es necesario tener el 20%. Existen vías para acceder a mayor financiación:
              </p>
              <ul className="list-disc pl-6 space-y-2">
                <li>Trabajar con un bróker hipotecario que acceda a entidades que financian el 90% o el 100%.</li>
                <li>Aprovechar el <Link to="/hipoteca-joven" className="text-[#2EBFA5] font-medium hover:underline">aval del Estado si eres menor de 35 años</Link> y cumples los requisitos.</li>
                <li>Presentar una operación sólida: ingresos altos, historial limpio y sin deudas.</li>
              </ul>
              <p>
                En estos casos, aunque puedas financiar más del 80%, sí necesitarás cubrir al menos los gastos de compraventa con fondos propios, ya que el banco no suele incluirlos en la hipoteca estándar.
              </p>

              <h2 className="text-2xl font-bold text-[#1A3C40] pt-4">Cuánto ahorrar para comprar piso: recomendación de nuestros asesores</h2>
              <p>
                Antes de empezar a buscar piso, asegúrate de tener claro cuánto puedes aportar de tu propio bolsillo. Una regla orientativa: <strong>ten ahorrado al menos el 25-30% del precio de la vivienda</strong> que te puedes permitir. Eso cubre la entrada estándar más los gastos, con algo de margen de seguridad.
              </p>
              <p>
                Si no llegas a esa cifra, no te desanimes. En Avanza Hipotecas analizamos tu caso y te decimos qué opciones reales tienes, incluidas las que no te contará tu banco directamente.
              </p>
            </div>

            {/* ── CTA ── */}
            <div className="mt-14 bg-[#1A3C40] text-white rounded-2xl p-8 text-center">
              <h3 className="text-2xl font-bold mb-3">¿Cuánto puedes financiar realmente?</h3>
              <p className="text-gray-300 mb-6">Analizamos tu caso gratuitamente y te decimos qué opciones tienes según tu ahorro disponible.</p>
              <Button onClick={scrollToContact} className="bg-[#2EBFA5] hover:bg-[#25a28b] text-white font-semibold px-8 py-3 text-lg flex items-center gap-2 mx-auto">
                Solicita tu consulta gratuita <ArrowRight className="w-5 h-5" />
              </Button>
            </div>

            <div className="mt-8 border-t border-gray-100 pt-8">
              <p className="text-sm font-semibold text-[#1A3C40] mb-4">También te puede interesar</p>
              <div className="grid sm:grid-cols-2 gap-3">
                <Link to="/hipoteca-100" className="flex items-center gap-3 bg-[#E9ECEF] rounded-xl px-4 py-3 hover:bg-[#2EBFA5]/10 transition-colors group">
                  <ArrowRight className="w-4 h-4 text-[#2EBFA5] flex-shrink-0" />
                  <span className="text-sm font-medium text-[#1A3C40] group-hover:text-[#2EBFA5] transition-colors">Hipoteca 100%: financia sin necesidad de entrada</span>
                </Link>
                <Link to="/hipoteca-joven" className="flex items-center gap-3 bg-[#E9ECEF] rounded-xl px-4 py-3 hover:bg-[#2EBFA5]/10 transition-colors group">
                  <ArrowRight className="w-4 h-4 text-[#2EBFA5] flex-shrink-0" />
                  <span className="text-sm font-medium text-[#1A3C40] group-hover:text-[#2EBFA5] transition-colors">Hipoteca Joven: condiciones especiales para menores de 35</span>
                </Link>
              </div>
            </div>
          </div>
        </div>
      </section>
    </>
  );
};

export default AhorroComprarViviendaPage;
