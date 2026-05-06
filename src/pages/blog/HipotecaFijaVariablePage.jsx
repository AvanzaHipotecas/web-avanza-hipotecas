import React from 'react';
import { Helmet } from 'react-helmet';
import { motion } from 'framer-motion';
import { Clock, Tag, ArrowRight, ArrowLeft, CheckCircle, XCircle } from 'lucide-react';
import { Link, useNavigate } from 'react-router-dom';
import { Button } from '@/components/ui/button';

const HipotecaFijaVariablePage = () => {
  const navigate = useNavigate();

  const scrollToContact = () => {
    navigate('/');
    setTimeout(() => document.getElementById('contacto')?.scrollIntoView({ behavior: 'smooth' }), 100);
  };

  return (
    <>
      <Helmet>
        <title>Hipoteca fija o variable en 2026: guía completa | Avanza Hipotecas</title>
        <meta name="description" content="Compara hipoteca fija y variable en 2026: diferencias, ventajas y cuál te conviene según tu perfil. Solicita tu estudio gratuito con Avanza Hipotecas." />
        <meta property="og:title" content="Hipoteca fija o variable en 2026: guía completa | Avanza Hipotecas" />
        <meta property="og:description" content="Compara hipoteca fija y variable en 2026: diferencias, ventajas y cuál te conviene según tu perfil. Solicita tu estudio gratuito con Avanza Hipotecas." />
        <meta property="og:url" content="https://avanzahipotecas.es/blog/hipoteca-fija-o-variable-2026" />
        <meta property="og:image" content="https://avanzahipotecas.es/og-image.jpg" />
        <meta property="og:type" content="article" />
        <meta name="robots" content="index, follow" />
        <link rel="canonical" href="https://avanzahipotecas.es/blog/hipoteca-fija-o-variable-2026" />
      </Helmet>

      {/* ── HERO ── */}
      <section className="pt-24 bg-white">
        <div className="relative h-72 md:h-96 overflow-hidden">
          <img
            src="https://images.unsplash.com/photo-1611974789855-9c2a0a7236a3?w=1200&q=80"
            alt="Gráficos financieros y tipos de interés"
            className="w-full h-full object-cover"
          />
          <div className="absolute inset-0 bg-[#1A3C40]/70" />
          <div className="absolute inset-0 flex items-end">
            <div className="container mx-auto px-4 pb-10">
              <div className="flex items-center gap-3 mb-4">
                <span className="bg-[#2EBFA5]/20 text-[#2EBFA5] px-3 py-1 rounded-full text-sm font-semibold flex items-center gap-1">
                  <Tag className="w-3 h-3" /> Consejos
                </span>
                <span className="text-white/70 text-sm flex items-center gap-1">
                  <Clock className="w-3.5 h-3.5" /> 5 min de lectura
                </span>
                <span className="text-white/70 text-sm">28 abril 2026</span>
              </div>
              <h1 className="text-3xl md:text-4xl lg:text-5xl font-bold text-white leading-tight max-w-3xl">
                Hipoteca fija o variable en 2026: ¿cuál te conviene más?
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
                Es la pregunta que se hace cualquier persona antes de firmar una hipoteca. Y en 2026, con el euríbor en un momento de relativa estabilidad tras los fuertes movimientos de los años anteriores, la respuesta sigue dependiendo de cada perfil. Pero hay claves que pueden ayudarte a decidir.
              </p>

              <h2 className="text-2xl font-bold text-[#1A3C40] pt-4">¿Qué es una hipoteca fija?</h2>
              <p>
                En una hipoteca a tipo fijo el interés se mantiene igual durante toda la vida del préstamo, independientemente de lo que haga el euríbor o cualquier otro índice de referencia. Si firmas al 3,2%, pagas al 3,2% el primer mes y también el último.
              </p>
              <p>
                Esto tiene una consecuencia clara: <strong>sabes exactamente cuánto vas a pagar cada mes</strong>. Esa previsibilidad tiene un precio: en general, el tipo inicial de una hipoteca fija suele ser algo más alto que el de una variable en el momento de la firma.
              </p>

              <h2 className="text-2xl font-bold text-[#1A3C40] pt-4">¿Qué es una hipoteca variable?</h2>
              <p>
                En una hipoteca variable el tipo de interés se calcula sumando el euríbor a un diferencial fijo que negocia el banco. Por ejemplo: <strong>Euríbor + 0,60%</strong>. Normalmente la revisión es anual, aunque puede ser semestral.
              </p>
              <p>
                Esto significa que tu cuota puede bajar si el euríbor baja, y puede subir si sube. Lo vimos claramente entre 2022 y 2023, cuando el euríbor pasó de estar en negativo a superar el 4%, disparando las cuotas de millones de hipotecados en España.
              </p>

              <h2 className="text-2xl font-bold text-[#1A3C40] pt-4">La situación del mercado en 2026</h2>
              <p>
                Tras las subidas agresivas de tipos del Banco Central Europeo en 2022 y 2023, el BCE inició un ciclo de bajadas a partir de mediados de 2024. En 2026, el euríbor se ha estabilizado en niveles significativamente más bajos que el pico de 2023, aunque todavía lejos de los mínimos históricos negativos de 2021.
              </p>
              <p>
                Esto ha provocado un fenómeno interesante: <strong>los bancos han endurecido sus ofertas de hipotecas fijas</strong> (ya no compiten tan agresivamente como en 2022) mientras que las variables resultan más atractivas para quienes apuestan por que los tipos seguirán bajando. El escenario es abierto.
              </p>

              <h2 className="text-2xl font-bold text-[#1A3C40] pt-4">Hipoteca fija vs variable: ventajas e inconvenientes</h2>

              <div className="grid sm:grid-cols-2 gap-6 not-prose my-6">
                <div className="bg-[#E9ECEF] rounded-xl p-6">
                  <h3 className="font-bold text-[#1A3C40] text-lg mb-4">Hipoteca Fija</h3>
                  <div className="space-y-3">
                    {[
                      'Cuota estable durante toda la vida del préstamo',
                      'Ideal para planificar a largo plazo',
                      'No te afectan las subidas del euríbor',
                      'Tranquilidad psicológica garantizada',
                    ].map(v => (
                      <div key={v} className="flex items-start gap-2 text-sm text-gray-700">
                        <CheckCircle className="w-4 h-4 text-[#2EBFA5] flex-shrink-0 mt-0.5" /> {v}
                      </div>
                    ))}
                    {[
                      'Tipo inicial más alto que en variable',
                      'No te beneficias de bajadas del euríbor',
                      'Comisión por amortización anticipada más alta',
                    ].map(v => (
                      <div key={v} className="flex items-start gap-2 text-sm text-gray-700 mt-3">
                        <XCircle className="w-4 h-4 text-red-400 flex-shrink-0 mt-0.5" /> {v}
                      </div>
                    ))}
                  </div>
                </div>
                <div className="bg-[#E9ECEF] rounded-xl p-6">
                  <h3 className="font-bold text-[#1A3C40] text-lg mb-4">Hipoteca Variable</h3>
                  <div className="space-y-3">
                    {[
                      'Tipo inicial más bajo (diferencial fijo)',
                      'Te beneficias de las bajadas del euríbor',
                      'Menor comisión por amortización anticipada',
                      'Puede ser más barata a corto plazo',
                    ].map(v => (
                      <div key={v} className="flex items-start gap-2 text-sm text-gray-700">
                        <CheckCircle className="w-4 h-4 text-[#2EBFA5] flex-shrink-0 mt-0.5" /> {v}
                      </div>
                    ))}
                    {[
                      'Cuota incierta: puede subir con el euríbor',
                      'Requiere mayor capacidad de absorber fluctuaciones',
                      'Más difícil de planificar financieramente',
                    ].map(v => (
                      <div key={v} className="flex items-start gap-2 text-sm text-gray-700 mt-3">
                        <XCircle className="w-4 h-4 text-red-400 flex-shrink-0 mt-0.5" /> {v}
                      </div>
                    ))}
                  </div>
                </div>
              </div>

              <h2 className="text-2xl font-bold text-[#1A3C40] pt-4">¿Cuál te conviene según tu perfil?</h2>

              <p><strong>Elige hipoteca fija si:</strong></p>
              <ul className="list-disc pl-6 space-y-1">
                <li>Valoras la seguridad y la previsibilidad por encima de todo.</li>
                <li>Tienes una hipoteca a largo plazo (más de 25 años) y no quieres sorpresas.</li>
                <li>Tu situación financiera no te permitiría absorber bien una subida de cuota.</li>
                <li>Planeas quedarte en la vivienda muchos años.</li>
              </ul>

              <p className="mt-4"><strong>Elige hipoteca variable si:</strong></p>
              <ul className="list-disc pl-6 space-y-1">
                <li>Tienes margen financiero para afrontar subidas de cuota sin problema.</li>
                <li>El plazo de tu hipoteca es más corto (15-20 años).</li>
                <li>Crees que el euríbor seguirá bajando o se mantendrá estable.</li>
                <li>Planeas amortizar capital de forma anticipada en los próximos años.</li>
              </ul>

              <h2 className="text-2xl font-bold text-[#1A3C40] pt-4">¿Y la hipoteca mixta?</h2>
              <p>
                Existe una tercera opción que muchos bancos ofrecen: la hipoteca mixta. Funciona con un tipo fijo durante los primeros años (5, 10 o 15 años) y luego pasa a variable el resto del plazo. Es una alternativa interesante si quieres estabilidad inicial pero prefieres un tipo de partida más ajustado que el fijo puro.
              </p>

              <h2 className="text-2xl font-bold text-[#1A3C40] pt-4">Hipoteca fija o variable: cómo decidir con un asesor hipotecario</h2>
              <p>
                La decisión entre fijo y variable no es matemática pura. Depende de tu perfil de riesgo, de tu situación financiera, del importe y plazo de tu hipoteca, y de la oferta concreta que consigas negociar con los bancos. Por eso lo más inteligente no es buscar la respuesta en internet, sino analizarlo con un experto que conozca las condiciones reales del mercado y pueda comparar las ofertas de más de 20 entidades para tu caso específico.
              </p>
              <p>
                En Avanza Hipotecas hacemos ese análisis de forma gratuita y sin compromiso.
              </p>
            </div>

            {/* ── CTA ── */}
            <div className="mt-14 bg-[#1A3C40] text-white rounded-2xl p-8 text-center">
              <h3 className="text-2xl font-bold mb-3">¿Fija, variable o mixta? Te ayudamos a decidir</h3>
              <p className="text-gray-300 mb-6">Analizamos tu caso y comparamos las mejores ofertas del mercado para que elijas con toda la información.</p>
              <Button onClick={scrollToContact} className="bg-[#2EBFA5] hover:bg-[#25a28b] text-white font-semibold px-8 py-3 text-lg flex items-center gap-2 mx-auto">
                Solicita tu consulta gratuita <ArrowRight className="w-5 h-5" />
              </Button>
            </div>
          </div>
        </div>
      </section>
    </>
  );
};

export default HipotecaFijaVariablePage;
