import React from 'react';
import { Helmet } from 'react-helmet';
import { Clock, Tag, ArrowRight, ArrowLeft, CheckCircle, AlertCircle } from 'lucide-react';
import { Link, useNavigate } from 'react-router-dom';
import { Button } from '@/components/ui/button';

const HipotecaFijaVariableMixtaPage = () => {
  const navigate = useNavigate();

  const scrollToContact = () => {
    navigate('/');
    setTimeout(() => document.getElementById('contacto')?.scrollIntoView({ behavior: 'smooth' }), 100);
  };

  const faqs = [
    {
      question: '¿Qué hipoteca es mejor en 2026: fija, variable o mixta?',
      answer: 'No existe una respuesta universal. Depende de tu perfil, tu tolerancia al riesgo y cuánto tiempo llevarás pagando la hipoteca. Si priorizas la estabilidad y no quieres sorpresas en la cuota, la fija es la opción más segura. Si puedes asumir variaciones en la cuota y confías en que el euríbor se mantendrá moderado, la variable puede ser más barata. La mixta es un término medio: te asegura una cuota fija durante los primeros años y luego entra a tipo variable cuando ya llevas buena parte amortizada.',
    },
    {
      question: '¿Vale la pena firmar una hipoteca fija si el euríbor está bajando en 2026?',
      answer: 'Sí puede valer la pena, aunque la lógica lleve a pensar lo contrario. Con el euríbor en niveles moderados, los bancos han abaratado los tipos fijos y actualmente ofrecen condiciones competitivas. Además, la hipoteca fija elimina por completo el riesgo de que el euríbor vuelva a subir, como ocurrió en 2022-2023 cuando superó el 4%. Si te dan un tipo fijo razonable y tu horizonte es largo (más de 15 años), la tranquilidad que aporta puede merecer la pena.',
    },
    {
      question: '¿Qué pasa si firmo una hipoteca variable y el euríbor sube mucho?',
      answer: 'Tu cuota mensual subirá, porque el tipo de interés de tu hipoteca se revisa periódicamente (generalmente cada 6 o 12 meses) según el euríbor publicado en ese momento. Si la subida es importante, como ocurrió entre 2022 y 2023, el incremento puede ser de varios cientos de euros al mes. Para evitarlo tienes dos opciones: negociar con tu banco un cambio a tipo fijo (novación) o cambiar a otro banco con mejores condiciones (subrogación). Avanza Hipotecas te ayuda en ambos casos.',
    },
    {
      question: '¿Puedo cambiar el tipo de mi hipoteca una vez firmada?',
      answer: 'Sí. Tienes dos vías: la novación, que es modificar las condiciones con tu banco actual, y la subrogación, que consiste en trasladar la hipoteca a otro banco con mejores condiciones. Ambas opciones te permiten pasar de variable a fijo, de fijo a variable o cambiar cualquier condición del préstamo. Los costes son asumibles —principalmente la tasación en el caso de la subrogación— y el proceso tiene plazos definidos por ley.',
    },
  ];

  const schemaFAQ = {
    '@context': 'https://schema.org',
    '@type': 'FAQPage',
    mainEntity: faqs.map(f => ({
      '@type': 'Question',
      name: f.question,
      acceptedAnswer: { '@type': 'Answer', text: f.answer },
    })),
  };

  const comparativa = [
    { aspecto: 'Cuota mensual', fija: 'Siempre igual', variable: 'Cambia cada 6-12 meses', mixta: 'Fija al inicio, variable después' },
    { aspecto: 'Tipo de interés', fija: 'Fijo durante todo el préstamo', variable: 'Euríbor + diferencial', mixta: 'Fijo (primeros años) + variable (resto)' },
    { aspecto: 'Riesgo de subida', fija: 'Ninguno', variable: 'Alto si el euríbor sube', mixta: 'Bajo al inicio; moderado al final' },
    { aspecto: 'Tipo inicial habitual (2026)', fija: '~3,0% – 3,5%', variable: 'Euríbor (2,4%) + 0,60–0,90%', mixta: '~2,5–3,0% fijo + variable' },
    { aspecto: 'Cuota más baja al inicio', fija: 'No (suele ser la más alta)', variable: 'Sí (si el euríbor es bajo)', mixta: 'Sí (tipo fijo inicial más bajo)' },
    { aspecto: 'Ideal para...', fija: 'Perfil conservador, plazo largo', variable: 'Perfil dinámico, plazo corto-medio', mixta: 'Perfil intermedio, plazo medio-largo' },
  ];

  return (
    <>
      <Helmet>
        <title>Hipoteca fija, variable o mixta 2026: guía completa | Avanza Hipotecas</title>
        <meta name="description" content="¿No sabes si elegir hipoteca fija, variable o mixta en 2026? Te explicamos las diferencias y cuál se adapta mejor a tu situación. Consulta gratis." />
        <meta property="og:title" content="Hipoteca fija, variable o mixta 2026: guía completa | Avanza Hipotecas" />
        <meta property="og:description" content="¿No sabes si elegir hipoteca fija, variable o mixta en 2026? Te explicamos las diferencias y cuál se adapta mejor a tu situación. Consulta gratis." />
        <meta property="og:url" content="https://avanzahipotecas.es/blog/hipoteca-fija-variable-mixta-2026" />
        <meta property="og:image" content="https://avanzahipotecas.es/og-image.jpg" />
        <meta property="og:type" content="article" />
        <meta name="robots" content="index, follow" />
        <link rel="canonical" href="https://avanzahipotecas.es/blog/hipoteca-fija-variable-mixta-2026" />
        <script type="application/ld+json">{JSON.stringify(schemaFAQ)}</script>
      </Helmet>

      {/* ── HERO ── */}
      <section className="pt-24 bg-white">
        <div className="relative h-72 md:h-96 overflow-hidden">
          <img
            src="https://images.unsplash.com/photo-1454165804606-c3d57bc86b40?w=1200&q=75&fm=webp"
            alt="Persona revisando opciones de hipoteca en documentos financieros"
            className="w-full h-full object-cover"
            width="1200"
            height="400"
            fetchpriority="high"
          />
          <div className="absolute inset-0 bg-[#1A3C40]/70" />
          <div className="absolute inset-0 flex items-end">
            <div className="container mx-auto px-4 pb-10">
              <div className="flex items-center gap-3 mb-4 flex-wrap">
                <span className="bg-blue-100 text-blue-700 px-3 py-1 rounded-full text-sm font-semibold flex items-center gap-1">
                  <Tag className="w-3 h-3" /> Guías
                </span>
                <span className="text-white/70 text-sm flex items-center gap-1">
                  <Clock className="w-3.5 h-3.5" /> 10 min de lectura
                </span>
                <span className="text-white/70 text-sm">22 mayo 2026</span>
              </div>
              <h1 className="text-3xl md:text-4xl lg:text-5xl font-bold text-white leading-tight max-w-3xl">
                Hipoteca fija, variable o mixta en 2026: ¿cuál te conviene?
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

              {/* ── INTRO ── */}
              <p className="text-xl text-gray-600 font-medium leading-relaxed">
                La primera pregunta que aparece cuando decides pedir una hipoteca es casi siempre la misma: <strong>¿fija, variable o mixta?</strong> Parece una decisión técnica, pero en realidad es una de las más importantes que tomarás en toda la vida del préstamo. Una elección acertada puede ahorrarte decenas de miles de euros. Una elección equivocada puede obligarte a pagar de más durante años.
              </p>
              <p>
                En este artículo te explicamos cómo funciona cada modalidad, cuáles son sus ventajas e inconvenientes reales, qué está pasando con el euríbor en 2026 y, sobre todo, qué opción encaja mejor con distintos perfiles de comprador. Y si al final de la lectura sigues con dudas, hay buenas noticias: una hipoteca no es irreversible.
              </p>

              {/* ── 1. FIJA ── */}
              <h2 className="text-2xl font-bold text-[#1A3C40] pt-4">Hipoteca fija: estabilidad ante todo</h2>
              <p>
                En una hipoteca a tipo fijo, el interés que pagas no cambia en toda la vida del préstamo. Si firmas al 3,20%, pagarás exactamente el mismo porcentaje el primer mes y el último, independientemente de lo que haga el euríbor o los mercados financieros. Tu cuota mensual es constante desde el primer día hasta que terminas de pagar.
              </p>
              <p>
                Este modelo tiene una ventaja evidente: la <strong>previsibilidad total</strong>. Sabes exactamente cuánto vas a pagar cada mes, lo que facilita la planificación económica familiar. No te afectan las subidas de tipos ni los vaivenes del mercado. En los momentos de inestabilidad financiera —como los que vivimos entre 2022 y 2023, cuando el euríbor superó el 4%— los titulares de hipotecas fijas no notaron absolutamente nada en su cuota.
              </p>
              <p>
                La hipoteca fija suele tener un tipo inicial ligeramente más alto que la variable. En 2026, las ofertas competitivas se mueven entre el 3,0% y el 3,5% TAE según el perfil del solicitante. Sin embargo, ese coste adicional es en realidad un <strong>seguro contra la incertidumbre</strong>. Compensa especialmente cuando el plazo es largo (20 o más años) y cuando el comprador tiene un perfil conservador que no quiere incertidumbre en la economía doméstica.
              </p>

              <div className="not-prose space-y-3 my-4">
                <p className="text-sm font-semibold text-[#1A3C40] mb-2">La hipoteca fija es ideal si...</p>
                {[
                  'Prefieres saber exactamente lo que pagarás cada mes sin sorpresas',
                  'Tu presupuesto mensual está muy ajustado y no puedes asumir variaciones',
                  'Vas a contratar una hipoteca a más de 20 años',
                  'Piensas que los tipos de interés pueden volver a subir en el futuro',
                  'Tienes aversión al riesgo financiero',
                ].map((item, i) => (
                  <div key={i} className="flex items-start gap-3 bg-[#E9ECEF] rounded-xl px-5 py-3">
                    <CheckCircle className="w-5 h-5 text-[#2EBFA5] flex-shrink-0 mt-0.5" />
                    <span className="text-gray-700 text-sm">{item}</span>
                  </div>
                ))}
              </div>

              {/* ── 2. VARIABLE ── */}
              <h2 className="text-2xl font-bold text-[#1A3C40] pt-4">Hipoteca variable: el euríbor como protagonista</h2>
              <p>
                La hipoteca variable funciona diferente. Su tipo de interés se compone de dos partes: un <strong>diferencial fijo</strong> (por ejemplo, +0,75%) que fija el banco al contratar, y el <strong>euríbor</strong>, que es el índice de referencia que fluctúa con el mercado. La suma de ambos determina el tipo que pagas en cada período de revisión, que habitualmente es cada 6 o 12 meses.
              </p>
              <p>
                El euríbor es el tipo al que los bancos europeos se prestan dinero entre sí. Cuando el Banco Central Europeo sube los tipos oficiales para controlar la inflación, el euríbor sube; cuando los baja para estimular la economía, el euríbor baja. Esta dependencia es la clave para entender el riesgo de una hipoteca variable.
              </p>
              <p>
                En épocas de euríbor bajo, la hipoteca variable es claramente la opción más económica. Los años previos a 2022, con el euríbor en negativo, muchos titulares de hipotecas variables pagaban cuotas ridículamente bajas. Pero cuando el euríbor se disparó desde el 0% hasta el 4,16% en apenas 18 meses, muchas familias vieron cómo su cuota mensual subía entre 200 y 400 euros de golpe.
              </p>
              <p>
                En 2026, con el euríbor en torno al 2,3–2,4%, la hipoteca variable tiene un atractivo renovado. Un diferencial competitivo de +0,70% daría un tipo efectivo de alrededor del 3,1%, lo que supone cuotas similares o incluso inferiores a algunas ofertas de tipo fijo. Pero hay que tener claro que esa cuota puede cambiar en la próxima revisión.
              </p>

              <div className="not-prose space-y-3 my-4">
                <p className="text-sm font-semibold text-[#1A3C40] mb-2">La hipoteca variable es ideal si...</p>
                {[
                  'Tienes capacidad financiera para absorber posibles subidas de cuota',
                  'El plazo de la hipoteca es corto o medio (menos de 15 años)',
                  'Crees que el euríbor se mantendrá moderado o seguirá bajando',
                  'Tienes previsto amortizar capital anticipadamente de forma periódica',
                  'Prefieres pagar menos al inicio aunque asumas algo de incertidumbre',
                ].map((item, i) => (
                  <div key={i} className="flex items-start gap-3 bg-[#E9ECEF] rounded-xl px-5 py-3">
                    <CheckCircle className="w-5 h-5 text-[#2EBFA5] flex-shrink-0 mt-0.5" />
                    <span className="text-gray-700 text-sm">{item}</span>
                  </div>
                ))}
              </div>

              {/* ── 3. MIXTA ── */}
              <h2 className="text-2xl font-bold text-[#1A3C40] pt-4">Hipoteca mixta: lo mejor de los dos mundos</h2>
              <p>
                La hipoteca mixta combina las dos modalidades anteriores en un mismo préstamo. Durante un período inicial —habitualmente entre 5 y 15 años— el tipo es fijo. A partir de ahí, el préstamo pasa a tipo variable referenciado al euríbor más un diferencial.
              </p>
              <p>
                Esta estructura tiene una lógica financiera clara: los primeros años de una hipoteca son los de mayor exposición al riesgo, porque el capital pendiente es elevado y la parte de intereses en cada cuota representa una proporción muy alta del pago total. Al fijar el tipo durante esa etapa inicial, se elimina el riesgo en el momento más crítico. Cuando el préstamo entra en la fase variable, el capital pendiente ya es menor y las oscilaciones del euríbor tienen un impacto más limitado en la cuota.
              </p>
              <p>
                El tipo fijo inicial de una hipoteca mixta suele ser <strong>más bajo que el de una hipoteca fija pura</strong>, lo que la convierte en una opción especialmente interesante en el contexto actual. Algunas entidades ofrecen primeros diez años por debajo del 2,8%, combinado con un diferencial variable posterior muy ajustado.
              </p>
              <p>
                El inconveniente: si el euríbor vuelve a subir significativamente al final del período fijo, la cuota variable puede resultar más alta de lo esperado. Por eso es importante valorar bien el plazo del tramo fijo y la proyección del diferencial antes de firmar.
              </p>

              {/* ── 4. TABLA COMPARATIVA ── */}
              <h2 className="text-2xl font-bold text-[#1A3C40] pt-4">Tabla comparativa: fija vs. variable vs. mixta</h2>

              <div className="not-prose bg-white border border-gray-200 rounded-2xl overflow-hidden my-4">
                <div className="bg-[#1A3C40] text-white px-6 py-3">
                  <div className="grid grid-cols-4 text-sm font-bold gap-2">
                    <span>Aspecto</span>
                    <span>Fija</span>
                    <span>Variable</span>
                    <span>Mixta</span>
                  </div>
                </div>
                <div className="divide-y divide-gray-100">
                  {comparativa.map((row, i) => (
                    <div key={i} className="grid grid-cols-4 text-sm gap-2">
                      <div className="px-4 py-3 font-medium text-gray-700 bg-gray-50">{row.aspecto}</div>
                      <div className="px-3 py-3 text-gray-700 text-xs leading-snug">{row.fija}</div>
                      <div className="px-3 py-3 text-gray-700 text-xs leading-snug">{row.variable}</div>
                      <div className="px-3 py-3 text-gray-700 text-xs leading-snug">{row.mixta}</div>
                    </div>
                  ))}
                </div>
              </div>

              {/* ── 5. EURÍBOR 2026 ── */}
              <h2 className="text-2xl font-bold text-[#1A3C40] pt-4">El euríbor en 2026: ¿dónde está y qué se espera?</h2>
              <p>
                Para tomar la decisión correcta entre hipoteca variable y las alternativas, es fundamental entender dónde está el euríbor ahora y qué perspectiva tiene a medio plazo.
              </p>
              <p>
                Tras alcanzar su máximo histórico reciente en el 4,16% en octubre de 2023, el euríbor ha protagonizado una caída sostenida a lo largo de 2024 y 2025 como respuesta a las sucesivas bajadas de tipos del Banco Central Europeo. En mayo de 2026, el euríbor a 12 meses se sitúa en torno al <strong>2,3–2,4%</strong>, niveles que no se veían desde principios de 2022.
              </p>
              <p>
                Las perspectivas son de relativa estabilidad. El BCE ha dado señales de que el ciclo de bajadas de tipos está tocando fondo, aunque no descarta ajustes adicionales si la inflación de la zona euro sigue controlada. Los mercados anticipan que el euríbor se mantendrá en un rango de entre el 2,0% y el 2,5% durante los próximos 12 a 18 meses, sin grandes movimientos bruscos en ninguna dirección.
              </p>
              <p>
                Este escenario tiene una lectura para cada modalidad hipotecaria. Para la <strong>variable</strong>: las condiciones actuales son mejores que hace dos años, pero el euríbor podría subir de nuevo si hay un repunte inflacionista o un cambio de política monetaria. Para la <strong>fija</strong>: los bancos han abaratado sus ofertas fijas aprovechando la bajada del euríbor, lo que la convierte en una opción más competitiva que en 2022-2023. Para la <strong>mixta</strong>: el contexto es especialmente favorable, ya que el tramo fijo inicial se puede conseguir a un tipo atractivo.
              </p>

              {/* ── 6. EJEMPLO REAL ── */}
              <h2 className="text-2xl font-bold text-[#1A3C40] pt-4">Ejemplo real: el mismo cliente con las tres hipotecas</h2>
              <p>
                María tiene 35 años y quiere comprar una vivienda de 250.000€. El banco financia el 80% del valor, por lo que necesita una hipoteca de 200.000€ a 25 años. Tiene un perfil solvente: ingresos estables, contrato indefinido y sin deudas. Le presentamos las condiciones actuales del mercado para las tres modalidades:
              </p>

              <div className="not-prose bg-white border border-gray-200 rounded-2xl overflow-hidden my-4">
                <div className="bg-[#1A3C40] text-white px-6 py-4">
                  <p className="font-bold">María: 200.000€ a 25 años (cifras orientativas, mayo 2026)</p>
                </div>
                <div className="divide-y divide-gray-100">
                  {[
                    {
                      tipo: 'Hipoteca fija',
                      color: 'bg-blue-50',
                      items: [
                        { label: 'Tipo de interés', value: '3,40% fijo' },
                        { label: 'Cuota mensual', value: '990 €/mes', highlight: true },
                        { label: 'Cuota en 5 años', value: '990 €/mes (siempre igual)' },
                        { label: 'Intereses totales estimados', value: '~97.000 €' },
                        { label: 'Riesgo de subida', value: 'Ninguno' },
                      ],
                    },
                    {
                      tipo: 'Hipoteca variable',
                      color: 'bg-amber-50',
                      items: [
                        { label: 'Tipo de interés', value: 'Euríbor (2,40%) + 0,75% = 3,15%' },
                        { label: 'Cuota mensual inicial', value: '968 €/mes', highlight: true },
                        { label: 'Cuota si euríbor sube a 3,5%', value: '~1.065 €/mes (+97€)' },
                        { label: 'Cuota si euríbor baja a 1,5%', value: '~912 €/mes (-56€)' },
                        { label: 'Riesgo de subida', value: 'Moderado-alto' },
                      ],
                    },
                    {
                      tipo: 'Hipoteca mixta',
                      color: 'bg-[#2EBFA5]/5',
                      items: [
                        { label: 'Tipo fijo (primeros 10 años)', value: '2,90%' },
                        { label: 'Cuota primeros 10 años', value: '937 €/mes', highlight: true },
                        { label: 'Tipo variable (años 11-25)', value: 'Euríbor + 0,80% (según mercado)' },
                        { label: 'Ahorro vs. fija (10 años)', value: '~6.360 €' },
                        { label: 'Riesgo de subida', value: 'Bajo al inicio; moderado al final' },
                      ],
                    },
                  ].map((block, bi) => (
                    <div key={bi} className={`${block.color} px-6 py-4`}>
                      <p className="font-bold text-[#1A3C40] text-sm mb-3">{block.tipo}</p>
                      <div className="space-y-2">
                        {block.items.map((item, ii) => (
                          <div key={ii} className={`flex flex-col sm:flex-row sm:justify-between sm:items-center px-3 py-2 rounded-lg gap-1 ${item.highlight ? 'bg-[#1A3C40]/10' : 'bg-white/60'}`}>
                            <p className={`text-xs ${item.highlight ? 'font-bold text-[#1A3C40]' : 'text-gray-600'}`}>{item.label}</p>
                            <span className={`font-semibold whitespace-nowrap text-xs ${item.highlight ? 'text-[#1A3C40]' : 'text-gray-700'}`}>{item.value}</span>
                          </div>
                        ))}
                      </div>
                    </div>
                  ))}
                </div>
              </div>

              <p>
                El ejemplo de María ilustra bien la disyuntiva. La hipoteca mixta ofrece la cuota más baja durante los primeros diez años, lo que supone un ahorro real de más de 6.000€ respecto a la fija en ese período. La variable ofrece una cuota inicial intermedia pero con incertidumbre en las revisiones. La fija es la más cara al inicio pero garantiza que la cuota no cambiará jamás.
              </p>
              <p>
                ¿Cuál es la decisión correcta para María? Depende de su tolerancia al riesgo, sus planes a largo plazo y su capacidad de absorber variaciones. Por eso en Avanza Hipotecas no damos una respuesta estándar: analizamos cada caso individualmente y buscamos las mejores condiciones en función del perfil real de cada cliente. También puedes usar nuestro <Link to="/simulador" className="text-[#2EBFA5] font-medium hover:underline">simulador de hipoteca</Link> para hacerte una idea rápida de las cuotas.
              </p>

              {/* ── 7. Y SI ME EQUIVOCO ── */}
              <div className="not-prose bg-[#E9ECEF] rounded-2xl p-6 my-6">
                <div className="flex items-start gap-3 mb-3">
                  <AlertCircle className="w-6 h-6 text-[#2EBFA5] flex-shrink-0 mt-0.5" />
                  <h2 className="text-xl font-bold text-[#1A3C40]">¿Y si me equivoco? No pasa nada</h2>
                </div>
                <p className="text-gray-700 leading-relaxed mb-3">
                  Una de las creencias más extendidas sobre las hipotecas es que la decisión que tomas al firmar es definitiva para siempre. No es así. El marco legal español prevé dos mecanismos que te permiten modificar las condiciones de tu hipoteca en cualquier momento de la vida del préstamo.
                </p>
                <div className="space-y-3 mb-4">
                  <div className="bg-white rounded-xl px-5 py-4">
                    <p className="font-bold text-[#1A3C40] text-sm mb-1">Novación: cambia las condiciones con tu banco actual</p>
                    <p className="text-gray-600 text-sm leading-relaxed">Si quieres pasar de variable a fijo (o viceversa), ampliar el plazo o bajar el tipo de interés, puedes negociar directamente con tu banco sin cambiar de entidad. Se llama novación hipotecaria y es la vía más rápida, aunque el resultado depende de lo que esté dispuesto a ofrecerte tu banco.</p>
                  </div>
                  <div className="bg-white rounded-xl px-5 py-4">
                    <p className="font-bold text-[#1A3C40] text-sm mb-1">Subrogación: traslada tu hipoteca a otro banco con mejores condiciones</p>
                    <p className="text-gray-600 text-sm leading-relaxed">Si tu banco no quiere o no puede mejorar las condiciones, puedes cambiar a otra entidad financiera a través de una subrogación hipotecaria. El préstamo se traslada con el mismo capital pendiente pero con nuevas condiciones —habitualmente un tipo de interés más bajo— y los gastos notariales los asume el banco receptor.</p>
                  </div>
                </div>
                <p className="text-gray-700 text-sm leading-relaxed mb-4">
                  En Avanza Hipotecas gestionamos ambas opciones para nuestros clientes. Si firmaste una hipoteca variable y el euríbor vuelve a subir, si conseguiste un tipo fijo alto y ahora el mercado ofrece algo mejor, o simplemente quieres revisar si tus condiciones siguen siendo competitivas, podemos analizarlo sin coste ni compromiso.
                </p>
                <div className="flex flex-col sm:flex-row gap-3">
                  <Link to="/subrogacion-hipotecaria" className="inline-flex items-center gap-2 bg-[#2EBFA5] text-white px-4 py-2.5 rounded-lg text-sm font-semibold hover:bg-[#25a28b] transition-colors">
                    Subrogación hipotecaria <ArrowRight className="w-4 h-4" />
                  </Link>
                  <Link to="/cambio-hipoteca" className="inline-flex items-center gap-2 bg-white border border-[#2EBFA5] text-[#2EBFA5] px-4 py-2.5 rounded-lg text-sm font-semibold hover:bg-[#2EBFA5]/5 transition-colors">
                    Cambio de hipoteca <ArrowRight className="w-4 h-4" />
                  </Link>
                </div>
              </div>

              {/* ── 8. POR QUÉ UN BRÓKER ── */}
              <h2 className="text-2xl font-bold text-[#1A3C40] pt-4">Por qué un bróker hipotecario puede conseguirte mejores condiciones</h2>
              <p>
                Cuando una persona va directamente a su banco a pedir una hipoteca, negocia en desventaja. El banco sabe que probablemente no recibió oferta de otra entidad. Sabe que el cliente no tiene información completa sobre lo que el mercado ofrece en ese momento. Y sabe que el proceso de comparar por su cuenta es largo y complicado. En ese escenario, la entidad tiene todo el poder de negociación.
              </p>
              <p>
                Un bróker hipotecario como Avanza Hipotecas cambia esa ecuación. Trabajamos con más de 20 entidades financieras y tenemos acceso a condiciones y tipos preferentes que no se publican en las webs oficiales de los bancos. Cuando buscamos hipoteca para un cliente, presentamos su perfil simultáneamente en varias entidades y generamos una competencia real. El resultado son ofertas que el cliente nunca obtendría yendo por su cuenta.
              </p>
              <p>
                Esto aplica igualmente a las tres modalidades de hipoteca. Si quieres la mejor hipoteca fija del mercado, la mejor variable con el diferencial más bajo, o la mixta con el período fijo más largo a un tipo competitivo, nosotros buscamos la opción concreta que mejor encaja con tu situación.
              </p>
              <p>
                Además, no cobramos nada al cliente. Nuestros honorarios los paga la entidad financiera cuando se formaliza la hipoteca, lo que significa que obtienes asesoramiento experto y acceso a las mejores condiciones del mercado sin coste adicional. También puedes iniciar el proceso usando nuestra <Link to="/hipoteca-100" className="text-[#2EBFA5] font-medium hover:underline">página de hipotecas con financiación hasta el 100%</Link> si buscas opciones de financiación total.
              </p>

              {/* ── FAQ ── */}
              <h2 className="text-2xl font-bold text-[#1A3C40] pt-4">Preguntas frecuentes</h2>

              {faqs.map((faq, i) => (
                <div key={i}>
                  <h3 className="text-lg font-bold text-[#1A3C40] mt-4 mb-2">{faq.question}</h3>
                  <p className="text-gray-700 leading-relaxed">{faq.answer}</p>
                </div>
              ))}

              {/* ── CONCLUSIÓN ── */}
              <h2 className="text-2xl font-bold text-[#1A3C40] pt-4">La decisión es tuya, pero no tienes que tomarla solo</h2>
              <p>
                Hipoteca fija, variable o mixta: no hay una respuesta correcta universal. Hay una respuesta correcta para tu situación concreta, tu perfil económico y tus planes de futuro. Lo que sí está claro es que tomar esa decisión con información incompleta o sin comparar el mercado puede costarte mucho dinero.
              </p>
              <p>
                En Avanza Hipotecas hacemos ese trabajo por ti. Analizamos tu perfil, accedemos a las mejores condiciones de más de 20 entidades y te presentamos una comparativa clara y honesta. Sin presiones, sin jerga técnica innecesaria y sin coste para ti. Y si más adelante las condiciones del mercado mejoran, también podemos ayudarte a renegociar o cambiar de banco.
              </p>
            </div>

            {/* ── CTA FINAL ── */}
            <div className="mt-14 bg-[#1A3C40] text-white rounded-2xl p-8 text-center">
              <h3 className="text-2xl font-bold mb-3">¿Te ayudamos a elegir la mejor hipoteca?</h3>
              <p className="text-gray-300 mb-6">El estudio es gratuito y sin compromiso. Un experto te llama en menos de 24 horas para analizar tu caso.</p>
              <div className="flex flex-col sm:flex-row gap-4 justify-center items-center">
                <Button onClick={scrollToContact} className="bg-[#2EBFA5] hover:bg-[#25a28b] text-white font-semibold px-8 py-3 text-lg flex items-center gap-2">
                  Solicitar estudio gratuito <ArrowRight className="w-5 h-5" />
                </Button>
                <a href="tel:+34624810190" className="text-white font-bold text-lg hover:text-[#2EBFA5] transition-colors">
                  624 810 190
                </a>
              </div>
            </div>

            {/* ── TAMBIÉN TE PUEDE INTERESAR ── */}
            <div className="mt-10 border-t border-gray-100 pt-8">
              <p className="text-sm font-semibold text-[#1A3C40] mb-4">También te puede interesar</p>
              <div className="grid sm:grid-cols-3 gap-3">
                <Link to="/simulador" className="flex items-center gap-3 bg-[#E9ECEF] rounded-xl px-4 py-3 hover:bg-[#2EBFA5]/10 transition-colors group">
                  <ArrowRight className="w-4 h-4 text-[#2EBFA5] flex-shrink-0" />
                  <span className="text-sm font-medium text-[#1A3C40] group-hover:text-[#2EBFA5] transition-colors">Simulador de hipoteca</span>
                </Link>
                <Link to="/subrogacion-hipotecaria" className="flex items-center gap-3 bg-[#E9ECEF] rounded-xl px-4 py-3 hover:bg-[#2EBFA5]/10 transition-colors group">
                  <ArrowRight className="w-4 h-4 text-[#2EBFA5] flex-shrink-0" />
                  <span className="text-sm font-medium text-[#1A3C40] group-hover:text-[#2EBFA5] transition-colors">Subrogación hipotecaria</span>
                </Link>
                <Link to="/hipoteca-100" className="flex items-center gap-3 bg-[#E9ECEF] rounded-xl px-4 py-3 hover:bg-[#2EBFA5]/10 transition-colors group">
                  <ArrowRight className="w-4 h-4 text-[#2EBFA5] flex-shrink-0" />
                  <span className="text-sm font-medium text-[#1A3C40] group-hover:text-[#2EBFA5] transition-colors">Hipoteca al 100%</span>
                </Link>
              </div>
            </div>

          </div>
        </div>
      </section>
    </>
  );
};

export default HipotecaFijaVariableMixtaPage;
