import React from 'react';
import { Helmet } from 'react-helmet';
import { Clock, Tag, ArrowRight, ArrowLeft } from 'lucide-react';
import { Link, useNavigate } from 'react-router-dom';
import { Button } from '@/components/ui/button';

const EuriborHipotecaPage = () => {
  const navigate = useNavigate();

  const scrollToContact = () => {
    navigate('/');
    setTimeout(() => document.getElementById('contacto')?.scrollIntoView({ behavior: 'smooth' }), 100);
  };

  return (
    <>
      <Helmet>
        <title>Qué es el euríbor y cómo afecta a tu hipoteca | Avanza Hipotecas</title>
        <meta name="description" content="Qué es el euríbor, cómo se calcula y cómo afecta a tu hipoteca variable. Ejemplos reales y qué hacer si sube. Estudio gratuito con Avanza Hipotecas." />
        <meta property="og:title" content="Qué es el euríbor y cómo afecta a tu hipoteca | Avanza Hipotecas" />
        <meta property="og:description" content="Qué es el euríbor, cómo se calcula y cómo afecta a tu hipoteca variable. Ejemplos reales y qué hacer si sube. Estudio gratuito con Avanza Hipotecas." />
        <meta property="og:url" content="https://avanzahipotecas.es/blog/que-es-el-euribor" />
        <meta property="og:image" content="https://avanzahipotecas.es/og-image.jpg" />
        <meta property="og:type" content="article" />
        <meta name="robots" content="index, follow" />
        <link rel="canonical" href="https://avanzahipotecas.es/blog/que-es-el-euribor" />
      </Helmet>

      {/* ── HERO ── */}
      <section className="pt-24 bg-white">
        <div className="relative h-72 md:h-96 overflow-hidden">
          <img
            src="https://images.unsplash.com/photo-1551288049-bebda4e38f71?w=1200&q=75&fm=webp"
            alt="Datos financieros y euríbor"
            className="w-full h-full object-cover"
            width="1200"
            height="400"
            fetchpriority="high"
          />
          <div className="absolute inset-0 bg-[#1A3C40]/70" />
          <div className="absolute inset-0 flex items-end">
            <div className="container mx-auto px-4 pb-10">
              <div className="flex items-center gap-3 mb-4">
                <span className="bg-purple-500/20 text-purple-300 px-3 py-1 rounded-full text-sm font-semibold flex items-center gap-1">
                  <Tag className="w-3 h-3" /> Educación financiera
                </span>
                <span className="text-white/70 text-sm flex items-center gap-1">
                  <Clock className="w-3.5 h-3.5" /> 6 min de lectura
                </span>
                <span className="text-white/70 text-sm">12 abril 2026</span>
              </div>
              <h1 className="text-3xl md:text-4xl lg:text-5xl font-bold text-white leading-tight max-w-3xl">
                Qué es el euríbor y cómo afecta a tu hipoteca variable
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
                Si tienes una hipoteca variable o estás pensando en contratar una, el euríbor es la palabra que más vas a escuchar. Pero ¿qué es exactamente? ¿Por qué sube y baja? ¿Y qué consecuencias reales tiene en tu bolsillo? En este artículo lo explicamos sin tecnicismos.
              </p>

              <h2 className="text-2xl font-bold text-[#1A3C40] pt-4">¿Qué es el euríbor?</h2>
              <p>
                El euríbor (<em>Euro Interbank Offered Rate</em>) es el tipo de interés al que los bancos europeos se prestan dinero entre sí. En otras palabras: es el precio del dinero en el mercado interbancario de la eurozona.
              </p>
              <p>
                Se publica diariamente para distintos plazos: 1 semana, 1 mes, 3 meses, 6 meses y 12 meses. Para las hipotecas en España, el más utilizado es el <strong>euríbor a 12 meses</strong>, que refleja el coste de prestarse dinero durante un año.
              </p>
              <p>
                Lo calcula el Instituto Europeo de Mercados Monetarios (EMMI) a partir de los datos que aportan los principales bancos de la eurozona. No lo fija ningún gobierno ni el BCE directamente, aunque las decisiones del Banco Central Europeo sobre los tipos de interés oficiales influyen enormemente en su evolución.
              </p>

              <h2 className="text-2xl font-bold text-[#1A3C40] pt-4">¿Cómo funciona una hipoteca variable?</h2>
              <p>
                Cuando contratas una hipoteca variable, el tipo de interés que pagas se calcula sumando dos componentes:
              </p>
              <div className="not-prose bg-[#1A3C40] text-white rounded-xl px-6 py-5 my-2 text-center">
                <p className="text-lg font-semibold">Tipo de interés = Euríbor a 12 meses + Diferencial fijo</p>
                <p className="text-sm text-gray-300 mt-2">Ejemplo: Euríbor (2,8%) + Diferencial (0,60%) = 3,40% anual</p>
              </div>
              <p>
                El diferencial es el margen que cobra el banco y permanece fijo durante toda la vida del préstamo. El euríbor, en cambio, varía. Y ahí está la incertidumbre.
              </p>
              <p>
                Normalmente, la revisión del tipo se hace una vez al año (aunque puede ser semestral): el banco toma el euríbor del mes anterior a la revisión, le suma el diferencial, y calcula la nueva cuota para los próximos 12 meses.
              </p>

              <h2 className="text-2xl font-bold text-[#1A3C40] pt-4">Evolución histórica del euríbor</h2>
              <p>
                Para entender por qué el euríbor importa tanto, basta con ver lo que ha pasado en los últimos años:
              </p>

              <div className="not-prose space-y-3 my-4">
                {[
                  { periodo: '2010–2016', nivel: '~1–2%', descripcion: 'Tipos moderados, cuotas razonables' },
                  { periodo: '2016–2022', nivel: 'Negativo o cerca de 0%', descripcion: 'Hipotecas variables extraordinariamente baratas. Muchos pagarían solo el diferencial' },
                  { periodo: '2022–2023', nivel: 'Subida de 0% a +4%', descripcion: 'La subida de tipos del BCE disparó el euríbor. Las cuotas variables subieron cientos de euros al mes' },
                  { periodo: '2024–2026', nivel: 'Bajada progresiva', descripcion: 'El BCE inició bajadas de tipos. El euríbor ha ido descendiendo, aunque de forma gradual' },
                ].map((row, i) => (
                  <div key={i} className="bg-[#E9ECEF] rounded-xl px-5 py-4 flex flex-col sm:flex-row sm:items-center sm:justify-between gap-2">
                    <div>
                      <p className="font-bold text-[#1A3C40] text-sm">{row.periodo}</p>
                      <p className="text-xs text-gray-500">{row.descripcion}</p>
                    </div>
                    <span className="font-bold text-[#2EBFA5] text-sm whitespace-nowrap">{row.nivel}</span>
                  </div>
                ))}
              </div>

              <h2 className="text-2xl font-bold text-[#1A3C40] pt-4">Un ejemplo concreto de cómo cambia la cuota</h2>
              <p>
                Supón que tienes una hipoteca variable de 180.000 € a 25 años con un diferencial de 0,75%:
              </p>
              <div className="not-prose grid sm:grid-cols-3 gap-3 my-4">
                {[
                  { euribor: 'Euríbor al 0%', total: '0,75%', cuota: '~720 €/mes' },
                  { euribor: 'Euríbor al 2%', total: '2,75%', cuota: '~835 €/mes' },
                  { euribor: 'Euríbor al 4%', total: '4,75%', cuota: '~975 €/mes' },
                ].map((col, i) => (
                  <div key={i} className="bg-[#E9ECEF] rounded-xl p-4 text-center">
                    <p className="text-sm font-semibold text-[#1A3C40]">{col.euribor}</p>
                    <p className="text-xs text-gray-500 mt-1">Tipo final: {col.total}</p>
                    <p className="text-xl font-bold text-[#2EBFA5] mt-2">{col.cuota}</p>
                  </div>
                ))}
              </div>
              <p>
                La diferencia entre el euríbor en mínimos y en máximos puede suponer más de <strong>250 € al mes de diferencia en la misma hipoteca</strong>. Eso equivale a más de 3.000 € al año.
              </p>

              <h2 className="text-2xl font-bold text-[#1A3C40] pt-4">¿Qué puedes hacer cuando el euríbor sube?</h2>
              <p>
                Si ya tienes una hipoteca variable y el euríbor ha subido (o crees que va a subir), tienes varias opciones:
              </p>
              <ul className="list-disc pl-6 space-y-2">
                <li><strong>Amortización parcial anticipada:</strong> si tienes ahorros, pagar capital reduce el importe pendiente y, por tanto, la cuota futura.</li>
                <li><strong>Negociar con tu banco una novación:</strong> puedes pedir a tu entidad que cambie el tipo variable por uno fijo. El banco puede aceptar o no, y puede cobrar una comisión.</li>
                <li><strong><Link to="/blog/subrogacion-hipotecaria" className="text-[#2EBFA5] hover:underline">Subrogación hipotecaria</Link>:</strong> cambiar tu hipoteca a otro banco que ofrezca mejores condiciones, sea fijo o variable con mejor diferencial.</li>
                <li><strong>Consultar con un bróker:</strong> para saber si realmente te compensa actuar o si es mejor esperar a que el euríbor baje.</li>
              </ul>

              <h2 className="text-2xl font-bold text-[#1A3C40] pt-4">Euríbor e hipoteca variable: qué hacer en cada escenario</h2>
              <p>
                El euríbor es el principal factor que determina cuánto pagas si tienes una hipoteca variable. Entender cómo funciona te permite anticiparte a los cambios y tomar decisiones informadas: cuándo amortizar, cuándo cambiar de tipo, cuándo cambiar de banco.
              </p>
              <p>
                En Avanza Hipotecas ayudamos a nuestros clientes tanto a contratar la hipoteca con las mejores condiciones desde el principio como a mejorar una hipoteca ya firmada. Analizamos tu caso sin coste y te decimos qué tiene sentido hacer en tu situación concreta.
              </p>
            </div>

            {/* ── CTA ── */}
            <div className="mt-14 bg-[#1A3C40] text-white rounded-2xl p-8 text-center">
              <h3 className="text-2xl font-bold mb-3">¿Te afecta la subida del euríbor?</h3>
              <p className="text-gray-300 mb-6">Analizamos tu hipoteca actual y te decimos si tiene sentido cambiar de tipo o de banco para mejorar tus condiciones.</p>
              <Button onClick={scrollToContact} className="bg-[#2EBFA5] hover:bg-[#25a28b] text-white font-semibold px-8 py-3 text-lg flex items-center gap-2 mx-auto">
                Solicita tu consulta gratuita <ArrowRight className="w-5 h-5" />
              </Button>
            </div>

            <div className="mt-8 border-t border-gray-100 pt-8">
              <p className="text-sm font-semibold text-[#1A3C40] mb-4">También te puede interesar</p>
              <div className="grid sm:grid-cols-2 gap-3">
                <Link to="/blog/hipoteca-fija-o-variable-2026" className="flex items-center gap-3 bg-[#E9ECEF] rounded-xl px-4 py-3 hover:bg-[#2EBFA5]/10 transition-colors group">
                  <ArrowRight className="w-4 h-4 text-[#2EBFA5] flex-shrink-0" />
                  <span className="text-sm font-medium text-[#1A3C40] group-hover:text-[#2EBFA5] transition-colors">Hipoteca fija o variable en 2026: guía completa</span>
                </Link>
                <Link to="/blog/subrogacion-hipotecaria" className="flex items-center gap-3 bg-[#E9ECEF] rounded-xl px-4 py-3 hover:bg-[#2EBFA5]/10 transition-colors group">
                  <ArrowRight className="w-4 h-4 text-[#2EBFA5] flex-shrink-0" />
                  <span className="text-sm font-medium text-[#1A3C40] group-hover:text-[#2EBFA5] transition-colors">Subrogación hipotecaria: cómo mejorar tu hipoteca actual</span>
                </Link>
              </div>
            </div>
          </div>
        </div>
      </section>
    </>
  );
};

export default EuriborHipotecaPage;
