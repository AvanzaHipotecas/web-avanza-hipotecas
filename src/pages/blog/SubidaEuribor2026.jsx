import React from 'react';
import { Helmet } from 'react-helmet';
import { Clock, Tag, ArrowRight, ArrowLeft, CheckCircle, Phone } from 'lucide-react';
import { Link, useNavigate } from 'react-router-dom';
import { Button } from '@/components/ui/button';

const SubidaEuribor2026 = () => {
  const navigate = useNavigate();

  const scrollToContact = () => {
    navigate('/');
    setTimeout(() => document.getElementById('contacto')?.scrollIntoView({ behavior: 'smooth' }), 100);
  };

  const schemaArticle = {
    '@context': 'https://schema.org',
    '@type': 'Article',
    headline: 'Euríbor junio 2026: sube por tercer mes consecutivo y qué significa para tu hipoteca',
    description: 'El Euríbor encadena tres meses al alza tras la subida de tipos del BCE en junio de 2026. Descubre cómo afecta a tu hipoteca y qué opciones tienes ahora.',
    datePublished: '2026-06-11',
    author: { '@type': 'Organization', name: 'Avanza Hipotecas' },
    publisher: {
      '@type': 'Organization',
      name: 'Avanza Hipotecas',
      url: 'https://avanzahipotecas.es',
    },
    mainEntityOfPage: {
      '@type': 'WebPage',
      '@id': 'https://avanzahipotecas.es/blog/subida-euribor-junio-2026',
    },
  };

  return (
    <>
      <Helmet>
        <title>Euríbor junio 2026: sube y qué significa para tu hipoteca</title>
        <meta name="description" content="El Euríbor encadena tres meses al alza tras la subida de tipos del BCE en junio de 2026. Descubre cómo afecta a tu hipoteca y qué opciones tienes ahora." />
        <meta property="og:title" content="Euríbor junio 2026: sube y qué significa para tu hipoteca" />
        <meta property="og:description" content="El Euríbor encadena tres meses al alza tras la subida de tipos del BCE en junio de 2026. Descubre cómo afecta a tu hipoteca y qué opciones tienes ahora." />
        <meta property="og:url" content="https://avanzahipotecas.es/blog/subida-euribor-junio-2026" />
        <meta property="og:image" content="https://avanzahipotecas.es/og-image.jpg" />
        <meta property="og:type" content="article" />
        <meta name="robots" content="index, follow" />
        <link rel="canonical" href="https://avanzahipotecas.es/blog/subida-euribor-junio-2026" />
        <script type="application/ld+json">{JSON.stringify(schemaArticle)}</script>
      </Helmet>

      {/* ── HERO ── */}
      <section className="pt-24 bg-white">
        <div className="relative h-72 md:h-96 overflow-hidden">
          <img
            src="https://images.unsplash.com/photo-1611974789855-9c2a0a7236a3?w=1200&q=75&fm=webp"
            alt="Gráficos financieros mostrando la evolución de los tipos de interés"
            className="w-full h-full object-cover"
            width="1200"
            height="400"
            fetchpriority="high"
          />
          <div className="absolute inset-0 bg-[#1A3C40]/70" />
          <div className="absolute inset-0 flex items-end">
            <div className="container mx-auto px-4 pb-10">
              <div className="flex items-center gap-3 mb-4 flex-wrap">
                <span className="bg-purple-500/20 text-purple-300 px-3 py-1 rounded-full text-sm font-semibold flex items-center gap-1">
                  <Tag className="w-3 h-3" /> Educación financiera
                </span>
                <span className="text-white/70 text-sm flex items-center gap-1">
                  <Clock className="w-3.5 h-3.5" /> 7 min de lectura
                </span>
                <span className="text-white/70 text-sm">11 junio 2026</span>
              </div>
              <h1 className="text-3xl md:text-4xl lg:text-5xl font-bold text-white leading-tight max-w-3xl">
                Euríbor junio 2026: sube por tercer mes consecutivo y qué significa para tu hipoteca
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
                El ciclo de bajadas y estabilidad en los tipos de interés que ha marcado los dos últimos años ha llegado a un punto de inflexión. El Banco Central Europeo (BCE) subió los tipos de interés el 11 de junio de 2026 en 25 puntos básicos, situando el precio oficial del dinero en el 2,25%. Es la primera subida desde septiembre de 2023, y responde a un repunte de la inflación en la zona euro.
              </p>
              <p>
                El Euríbor a 12 meses, el índice que determina la cuota de la mayoría de hipotecas variables en España, ya venía anticipando este cambio de ciclo: en mayo de 2026 cerró en el 2,804%, su tercer mes consecutivo de subidas. En junio se sitúa en torno al 2,81%, niveles que no se veían desde septiembre de 2024.
              </p>
              <p>
                En este artículo explicamos qué es exactamente el Euríbor, cómo afecta a tu cuota si tienes una hipoteca variable, y qué puedes hacer ahora tanto si ya tienes una hipoteca como si estás buscando una.
              </p>

              {/* QUÉ ES EL EURIBOR */}
              <h2 className="text-2xl font-bold text-[#1A3C40] pt-4">¿Qué es el Euríbor y por qué afecta a tu hipoteca variable?</h2>
              <p>
                El Euríbor (Euro Interbank Offered Rate) es el tipo de interés al que las principales entidades financieras de la zona euro se prestan dinero entre sí. El Banco de España publica mensualmente el valor oficial del Euríbor a 12 meses, que es la referencia que utilizan la mayoría de hipotecas variables en España.
              </p>
              <p>
                Una hipoteca variable no tiene un tipo de interés fijo: se calcula sumando el Euríbor vigente en el momento de la revisión más un diferencial fijo que se pacta con la entidad al firmar el préstamo. Como las revisiones suelen ser anuales o semestrales, cuando el Euríbor sube, la cuota mensual sube en la siguiente revisión; cuando baja, la cuota se reduce.
              </p>
              <p>
                Esta es la razón por la que el movimiento del BCE es relevante incluso para quienes no tienen relación directa con los tipos oficiales: el Euríbor tiende a anticipar y a seguir las decisiones de política monetaria del BCE, y su evolución reciente —tres meses consecutivos al alza— refleja precisamente ese ajuste.
              </p>

              {/* EJEMPLO PRÁCTICO */}
              <h2 className="text-2xl font-bold text-[#1A3C40] pt-4">Ejemplo práctico: así sube la cuota de una hipoteca de 150.000 € a 25 años</h2>
              <p>
                Para entender el impacto real de esta subida, conviene traducirla a una cuota concreta. Tomamos como referencia una hipoteca variable de 150.000 € a 25 años con un diferencial habitual de mercado del 0,75% sobre el Euríbor.
              </p>
              <p>
                Comparamos la cuota con el Euríbor actual de junio de 2026 (2,81%) frente a un escenario de referencia 0,25 puntos por debajo —la magnitud exacta de la última subida de tipos del BCE—, que ilustra el efecto de este movimiento sobre la cuota mensual:
              </p>

              <div className="not-prose bg-white border border-gray-200 rounded-2xl overflow-hidden my-4">
                <div className="bg-[#1A3C40] text-white px-6 py-4">
                  <p className="font-bold">Hipoteca de 150.000 € a 25 años con diferencial del 0,75%</p>
                </div>
                <div className="divide-y divide-gray-100">
                  {[
                    { label: 'Escenario de referencia (0,25 puntos menos)', value: 'Tipo 3,31% · cuota aprox. 736 €/mes' },
                    { label: 'Con el Euríbor actual de junio 2026 (2,81%)', value: 'Tipo 3,56% · cuota aprox. 756 €/mes', highlight: true },
                    { label: 'Diferencia mensual aproximada', value: '+20 €/mes (unos 240 €/año)', highlight: true },
                  ].map((row, i) => (
                    <div key={i} className={`flex flex-col sm:flex-row sm:justify-between sm:items-center px-5 py-3 gap-1 ${row.highlight ? 'bg-[#2EBFA5]/10' : ''}`}>
                      <p className={`text-sm ${row.highlight ? 'font-bold text-[#1A3C40]' : 'text-gray-600'}`}>{row.label}</p>
                      <span className={`font-bold whitespace-nowrap text-sm ${row.highlight ? 'text-[#1A3C40]' : 'text-gray-800'}`}>{row.value}</span>
                    </div>
                  ))}
                </div>
              </div>

              <p>
                Veinte euros al mes puede parecer una cifra modesta, pero hay que tener en cuenta dos factores. Primero, es el efecto de un único movimiento de 25 puntos básicos: si la inflación sigue presionando y el BCE encadena nuevas subidas, el impacto se acumula. Segundo, el cálculo depende del diferencial concreto de cada hipoteca y del capital pendiente, por lo que en préstamos de mayor importe o con diferenciales más altos la subida en euros puede ser sensiblemente mayor.
              </p>

              {/* QUÉ HACER AHORA */}
              <h2 className="text-2xl font-bold text-[#1A3C40] pt-4">Qué puedes hacer ahora ante la subida del Euríbor</h2>
              <p>
                La reacción adecuada depende de tu situación actual frente a la hipoteca. Estas son las dos circunstancias más habituales:
              </p>

              <h3 className="text-xl font-bold text-[#1A3C40] pt-2">Si ya tienes una hipoteca variable</h3>
              <p>
                Si tu hipoteca está referenciada al Euríbor, conviene revisar ahora, antes de tu próxima fecha de revisión, qué opciones tienes disponibles. No es necesario esperar a que la cuota suba para actuar:
              </p>
              <div className="not-prose space-y-3 my-4">
                {[
                  'Revisa cuándo se revisa tu hipoteca y simula el efecto que tendría el Euríbor actual sobre tu cuota concreta',
                  'Valora si te conviene pasar a un tipo fijo o mixto para ganar estabilidad ante un posible nuevo ciclo de subidas',
                  'Comprueba si las condiciones de tu hipoteca (diferencial, vinculaciones) siguen siendo competitivas frente al mercado actual',
                  'Si decides cambiar de tipo o de entidad, existen vías para hacerlo sin necesidad de esperar al vencimiento de tu hipoteca',
                ].map((item, i) => (
                  <div key={i} className="flex items-start gap-3 bg-[#E9ECEF] rounded-xl px-5 py-3">
                    <CheckCircle className="w-5 h-5 text-[#2EBFA5] flex-shrink-0 mt-0.5" />
                    <span className="text-gray-700 text-sm">{item}</span>
                  </div>
                ))}
              </div>

              <h3 className="text-xl font-bold text-[#1A3C40] pt-2">Si estás buscando hipoteca ahora</h3>
              <p>
                Si todavía no has firmado y estás comparando condiciones, este cambio de ciclo es un argumento adicional para cerrar tu operación cuanto antes. Las condiciones que se negocian hoy pueden no estar disponibles si el Euríbor continúa al alza en los próximos meses. Puedes hacer una primera estimación de tu cuota con nuestro <Link to="/simulador" className="text-[#2EBFA5] font-medium hover:underline">simulador de hipoteca</Link>, y si buscas financiación con poco ahorro previo, también puedes consultar nuestra página sobre <Link to="/hipoteca-100" className="text-[#2EBFA5] font-medium hover:underline">hipoteca al 100%</Link>.
              </p>
              <p>
                En cualquiera de los dos escenarios, el factor determinante no es solo el tipo de interés que ofrece una entidad, sino la rapidez con la que se puede formalizar la operación en las condiciones actuales antes de que el mercado vuelva a moverse.
              </p>

              {/* CIERRE */}
              <h2 className="text-2xl font-bold text-[#1A3C40] pt-4">Un momento para revisar tu situación, no para tomar decisiones precipitadas</h2>
              <p>
                Una subida de tipos no significa que debas actuar de forma impulsiva, pero sí que conviene informarse con datos actualizados antes de que pase más tiempo. En Avanza Hipotecas analizamos tu situación concreta —ya sea una hipoteca variable que quieres revisar o una nueva hipoteca que estás negociando— y te indicamos con claridad qué opciones tienes en el contexto actual del Euríbor.
              </p>
            </div>

            {/* ── CTA FINAL ── */}
            <div className="mt-14 bg-[#1A3C40] text-white rounded-2xl p-8 text-center">
              <h3 className="text-2xl font-bold mb-3">¿Quieres saber cómo te afecta esta subida?</h3>
              <p className="text-gray-300 mb-6">
                Analizamos tu hipoteca actual o tu próxima solicitud sin coste y sin compromiso, con la información más actualizada del Euríbor.
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
                <Link to="/simulador" className="flex items-center gap-3 bg-[#E9ECEF] rounded-xl px-4 py-3 hover:bg-[#2EBFA5]/10 transition-colors group">
                  <ArrowRight className="w-4 h-4 text-[#2EBFA5] flex-shrink-0" />
                  <span className="text-sm font-medium text-[#1A3C40] group-hover:text-[#2EBFA5] transition-colors">Simulador de hipoteca</span>
                </Link>
                <Link to="/hipoteca-100" className="flex items-center gap-3 bg-[#E9ECEF] rounded-xl px-4 py-3 hover:bg-[#2EBFA5]/10 transition-colors group">
                  <ArrowRight className="w-4 h-4 text-[#2EBFA5] flex-shrink-0" />
                  <span className="text-sm font-medium text-[#1A3C40] group-hover:text-[#2EBFA5] transition-colors">Hipoteca al 100% sin entrada</span>
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

export default SubidaEuribor2026;
