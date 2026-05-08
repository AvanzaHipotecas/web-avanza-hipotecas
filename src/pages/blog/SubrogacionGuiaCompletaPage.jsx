import React from 'react';
import { Helmet } from 'react-helmet';
import { Clock, Tag, ArrowRight, ArrowLeft, CheckCircle } from 'lucide-react';
import { Link, useNavigate } from 'react-router-dom';
import { Button } from '@/components/ui/button';

const SubrogacionGuiaCompletaPage = () => {
  const navigate = useNavigate();

  const scrollToContact = () => {
    navigate('/');
    setTimeout(() => document.getElementById('contacto')?.scrollIntoView({ behavior: 'smooth' }), 100);
  };

  const faqs = [
    {
      question: '¿Qué es la subrogación hipotecaria y cómo funciona?',
      answer: 'La subrogación hipotecaria es el proceso legal por el que trasladas tu hipoteca de una entidad financiera a otra con mejores condiciones. El préstamo no se cancela: continúa con el mismo capital pendiente e inmueble como garantía, pero cambia la entidad acreedora, el tipo de interés y las condiciones pactadas.',
    },
    {
      question: '¿Cuánto cuesta hacer una subrogación hipotecaria?',
      answer: 'El principal coste para el cliente es la tasación de la vivienda, habitualmente entre 300 y 450 euros. Los gastos notariales y registrales los asume el banco que recibe la hipoteca desde la Ley Hipotecaria de 2019. También conviene revisar si tu escritura incluye comisión de subrogación, que puede ser del 0% tras los primeros años en hipotecas variables.',
    },
    {
      question: '¿Cuánto tiempo tarda el proceso de subrogación?',
      answer: 'Entre 4 y 8 semanas habitualmente. El proceso incluye la tasación, la notificación al banco actual y su período de enervación de 15 días hábiles (plazo para igualar la oferta del banco destino). Si el banco actual no actúa o no iguala la oferta, se formaliza la firma ante notario.',
    },
    {
      question: '¿Puedo pasar mi hipoteca variable a fija haciendo una subrogación?',
      answer: 'Sí. De hecho, es uno de los motivos más habituales para subrogar en el contexto actual. Al cambiar de banco, puedes acordar con el banco destino un tipo fijo para el resto del préstamo, eliminando la incertidumbre del euríbor. En Avanza Hipotecas analizamos si te compensa más la subrogación a tipo fijo o una novación con tu banco actual.',
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

  return (
    <>
      <Helmet>
        <title>Subrogación hipotecaria: guía completa 2026 | Avanza Hipotecas</title>
        <meta name="description" content="¿Estás pagando demasiado por tu hipoteca? Te explicamos cómo cambiar de banco y ahorrar hasta cientos de euros al mes. Guía completa 2026." />
        <meta property="og:title" content="Subrogación hipotecaria: guía completa 2026 | Avanza Hipotecas" />
        <meta property="og:description" content="¿Estás pagando demasiado por tu hipoteca? Te explicamos cómo cambiar de banco y ahorrar hasta cientos de euros al mes. Guía completa 2026." />
        <meta property="og:url" content="https://avanzahipotecas.es/blog/subrogacion-hipotecaria-guia-completa" />
        <meta property="og:image" content="https://avanzahipotecas.es/og-image.jpg" />
        <meta property="og:type" content="article" />
        <meta name="robots" content="index, follow" />
        <link rel="canonical" href="https://avanzahipotecas.es/blog/subrogacion-hipotecaria-guia-completa" />
        <script type="application/ld+json">{JSON.stringify(schemaFAQ)}</script>
      </Helmet>

      {/* ── HERO ── */}
      <section className="pt-24 bg-white">
        <div className="relative h-72 md:h-96 overflow-hidden">
          <img
            src="https://images.unsplash.com/photo-1554224155-6726b3ff858f?w=1200&q=75&fm=webp"
            alt="Documentos hipotecarios y calculadora sobre una mesa"
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
                  <Clock className="w-3.5 h-3.5" /> 8 min de lectura
                </span>
                <span className="text-white/70 text-sm">8 mayo 2026</span>
              </div>
              <h1 className="text-3xl md:text-4xl lg:text-5xl font-bold text-white leading-tight max-w-3xl">
                Subrogación hipotecaria: cómo cambiar de banco y ahorrar miles de euros
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
                ¿Sigues pagando la hipoteca que firmaste hace años? Cuando la contrataste, las condiciones del mercado eran las que eran. Pero el mercado hipotecario cambia, los tipos evolucionan y lo que antes parecía razonable puede ser hoy una condición claramente desfavorable. La pregunta que mucha gente no se hace —o se hace demasiado tarde— es: <strong>¿podría estar pagando menos?</strong>
              </p>
              <p>
                En muchos casos, la respuesta es sí. Y la herramienta para conseguirlo se llama subrogación hipotecaria. En esta guía completa te explicamos qué es, cuándo te compensa, en qué se diferencia de la novación, y qué ocurre paso a paso cuando lo gestionamos en Avanza Hipotecas.
              </p>

              {/* ── 1. QUÉ ES ── */}
              <h2 className="text-2xl font-bold text-[#1A3C40] pt-4">¿Qué es la subrogación hipotecaria?</h2>
              <p>
                La subrogación hipotecaria es el proceso legal por el que trasladas tu hipoteca de una entidad financiera a otra. El préstamo no se cancela: continúa con el mismo capital pendiente y el mismo inmueble como garantía. Lo que cambia es quién lo gestiona y, sobre todo, las condiciones: el tipo de interés, el plazo y las vinculaciones asociadas.
              </p>
              <p>
                Conviene distinguir dos tipos de subrogación:
              </p>
              <ul className="list-disc pl-6 space-y-2">
                <li><strong>Subrogación de acreedor:</strong> cambias de entidad financiera. Es la más habitual y la que analiza esta guía.</li>
                <li><strong>Subrogación de deudor:</strong> cambia la persona que debe el préstamo, por ejemplo al heredar una vivienda con hipoteca. Es menos frecuente y más compleja.</li>
              </ul>
              <p>
                El mecanismo legal es claro: el banco destino notifica al banco original tu intención de cambiar. El banco actual tiene entonces 15 días hábiles para igualar o mejorar la oferta del nuevo banco. Si no lo hace, la subrogación sigue adelante y firmas ante notario con la nueva entidad.
              </p>

              {/* ── 2. CUÁNDO MERECE ── */}
              <h2 className="text-2xl font-bold text-[#1A3C40] pt-4">¿Cuándo merece la pena subrogar?</h2>
              <p>
                No siempre es la decisión correcta. Hay que hacer los números antes de actuar. En términos generales, la subrogación merece la pena cuando:
              </p>
              <div className="not-prose space-y-3 my-4">
                {[
                  'Tu tipo de interés actual es notablemente superior al que ofrece el mercado',
                  'Tienes una hipoteca variable y el euríbor ha subido hasta hacerte pagar más de lo que pagarías con un tipo fijo',
                  'Quieres pasar a tipo fijo para ganar estabilidad y dejar de depender de los vaivenes del euríbor',
                  'Tu banco actual rechaza mejorar las condiciones después de negociar directamente',
                  'Tu situación financiera ha mejorado desde que firmaste y ahora tienes acceso a mejores condiciones',
                  'Te quedan suficientes años de hipoteca para que el ahorro supere los costes del proceso',
                ].map((item, i) => (
                  <div key={i} className="flex items-start gap-3 bg-[#E9ECEF] rounded-xl px-5 py-3">
                    <CheckCircle className="w-5 h-5 text-[#2EBFA5] flex-shrink-0 mt-0.5" />
                    <span className="text-gray-700 text-sm">{item}</span>
                  </div>
                ))}
              </div>
              <p>
                El principal coste para el cliente es la tasación de la vivienda, habitualmente entre 300 y 450 euros. Los gastos notariales y registrales los asume el banco que recibe la hipoteca, gracias a la Ley Hipotecaria de 2019. Esto hace que la barrera económica para subrogar sea mucho más baja de lo que muchas personas creen.
              </p>

              {/* ── 3. SUBROGACIÓN vs NOVACIÓN ── */}
              <h2 className="text-2xl font-bold text-[#1A3C40] pt-4">Subrogación vs. novación: ¿cuál es la diferencia?</h2>
              <p>
                Este es uno de los puntos que más confusión genera. La <strong>novación hipotecaria</strong> es una modificación de las condiciones de tu hipoteca con el mismo banco, sin cambiar de entidad. Puedes negociar una bajada del tipo de interés, pasar de variable a fijo o ampliar el plazo de amortización. Generalmente es más rápida y no requiere tasación.
              </p>
              <p>
                La diferencia clave es el <strong>poder de negociación</strong>. Cuando actúas solo frente a tu banco, negocias con escasa presión: la entidad sabe que cambiar de banco te supone trámites. Cuando un bróker hipotecario entra en escena con ofertas reales de otras entidades sobre la mesa, el banco reacciona de forma diferente. En muchos casos, es la amenaza creíble de la subrogación lo que hace que el banco actual mejore sus condiciones.
              </p>

              <div className="not-prose bg-white border border-gray-200 rounded-2xl overflow-hidden my-4">
                <div className="bg-[#1A3C40] text-white px-6 py-3">
                  <p className="font-bold text-sm">Comparativa: subrogación vs. novación</p>
                </div>
                <div className="divide-y divide-gray-100">
                  {[
                    { concepto: '¿Cambias de banco?', subrogacion: 'Sí', novacion: 'No' },
                    { concepto: 'Coste principal', subrogacion: 'Tasación (~300-450€)', novacion: 'Posible comisión por novación' },
                    { concepto: 'Tiempo estimado', subrogacion: '4-8 semanas', novacion: '2-4 semanas' },
                    { concepto: '¿Requiere tasación?', subrogacion: 'Sí', novacion: 'Habitualmente no' },
                    { concepto: 'Ahorro potencial', subrogacion: 'Mayor (más competencia)', novacion: 'Depende de lo que acepte el banco' },
                  ].map((row, i) => (
                    <div key={i} className="grid grid-cols-3 text-sm">
                      <div className="px-4 py-3 font-medium text-gray-700 bg-gray-50">{row.concepto}</div>
                      <div className="px-4 py-3 text-[#1A3C40]">{row.subrogacion}</div>
                      <div className="px-4 py-3 text-gray-600">{row.novacion}</div>
                    </div>
                  ))}
                </div>
              </div>

              <p>
                En Avanza Hipotecas analizamos ambas opciones para tu caso y te recomendamos la que más te conviene. A veces la novación con tu banco actual es suficiente. Otras veces, el mercado ofrece condiciones tan mejores que la subrogación es la única decisión lógica. Te lo decimos con datos, no con suposiciones.
              </p>
              <p>
                Si quieres profundizar en la diferencia entre ambas opciones, puedes consultar nuestra página de <Link to="/cambio-hipoteca" className="text-[#2EBFA5] font-medium hover:underline">cambio de hipoteca</Link>.
              </p>

              {/* ── 4. EJEMPLO REAL ── */}
              <h2 className="text-2xl font-bold text-[#1A3C40] pt-4">Ejemplo real: 28.000€ ahorrados con una subrogación</h2>
              <p>
                Alejandro, 38 años, tenía una hipoteca de 180.000€ contratada hace cinco años a tipo variable (euríbor + 1,20%). Con el euríbor en máximos, su tipo efectivo había llegado al 4,2% y pagaba cada mes 1.156€. Le quedaban 15 años de préstamo y estaba viendo cómo su cuota había subido más de 200€ respecto a cuando firmó.
              </p>
              <p>
                Contactó con Avanza Hipotecas. Tras analizar su situación, accedimos a las ofertas de más de 20 entidades —incluyendo entidades con las que tenemos convenios que permiten conseguir tipos preferentes para nuestros clientes— y negociamos en su nombre. El resultado: una oferta de tipo fijo al 2,9% en una entidad con la que trabajamos habitualmente.
              </p>

              <div className="not-prose bg-white border border-gray-200 rounded-2xl overflow-hidden my-4">
                <div className="bg-[#1A3C40] text-white px-6 py-4">
                  <p className="font-bold">El caso de Alejandro: hipoteca de 180.000€ con 15 años restantes</p>
                </div>
                <div className="p-6 space-y-3">
                  {[
                    { label: 'Tipo anterior', value: '4,2% variable', note: 'Euríbor + 1,20%' },
                    { label: 'Cuota anterior', value: '1.156 €/mes', note: '' },
                    { label: 'Tipo nuevo (fijo)', value: '2,9%', note: 'Conseguido con subrogación a otra entidad' },
                    { label: 'Nueva cuota mensual', value: '1.000 €/mes', note: '' },
                    { label: 'Ahorro mensual', value: '156 €/mes', highlight: true, note: '' },
                    { label: 'Ahorro total (15 años)', value: 'más de 28.000 €', highlight: true, note: '' },
                    { label: 'Coste del proceso para Alejandro', value: '380 € (tasación)', note: 'Gastos notariales y registrales los asumió el banco destino' },
                  ].map((row, i) => (
                    <div key={i} className={`flex flex-col sm:flex-row sm:justify-between sm:items-center px-4 py-2.5 rounded-lg gap-1 ${row.highlight ? 'bg-[#2EBFA5]/10' : 'bg-gray-50'}`}>
                      <div>
                        <p className={`text-sm ${row.highlight ? 'font-bold text-[#1A3C40]' : 'text-gray-600'}`}>{row.label}</p>
                        {row.note && <p className="text-xs text-gray-400">{row.note}</p>}
                      </div>
                      <span className={`font-bold whitespace-nowrap ${row.highlight ? 'text-[#1A3C40] text-base' : 'text-gray-800 text-sm'}`}>{row.value}</span>
                    </div>
                  ))}
                </div>
              </div>

              <p>
                El proceso completo tardó seis semanas desde la primera consulta hasta la firma. El banco anterior intentó ejercer su derecho de enervación igualando la oferta, pero las condiciones del banco destino seguían siendo superiores. Alejandro firmó ante notario con plena tranquilidad y ahora tiene una cuota fija que no cambiará hasta que termine de pagar.
              </p>

              {/* ── CTA CALCULADORA ── */}
              <div className="not-prose bg-[#1A3C40] text-white rounded-2xl p-6 my-8">
                <p className="font-bold text-lg mb-2">¿Cuánto podrías ahorrar tú?</p>
                <p className="text-gray-300 text-sm mb-4">Introduce los datos de tu hipoteca en nuestra calculadora y ve el ahorro estimado en segundos. Sin registro, sin compromiso.</p>
                <Link to="/calculadora-subrogacion">
                  <Button className="bg-[#2EBFA5] hover:bg-[#25a28b] text-white font-semibold px-6 py-3 flex items-center gap-2">
                    Calcular mi ahorro <ArrowRight className="w-4 h-4" />
                  </Button>
                </Link>
              </div>

              {/* ── 5. PASOS ── */}
              <h2 className="text-2xl font-bold text-[#1A3C40] pt-4">Cómo hacemos la subrogación en Avanza Hipotecas</h2>
              <p>
                Nuestro proceso está diseñado para que tú te preocupes de lo mínimo posible. Estas son las cuatro fases:
              </p>
              <div className="not-prose space-y-3 my-4">
                {[
                  { n: 1, step: 'Análisis gratuito de tu hipoteca', desc: 'Nos cuentas tus condiciones actuales: tipo de interés, capital pendiente, plazo restante y entidad con la que tienes el préstamo. Estudiamos si existe margen de mejora real antes de actuar.' },
                  { n: 2, step: 'Búsqueda entre más de 20 entidades', desc: 'Accedemos a condiciones que las entidades no publican abiertamente. Tenemos convenios con entidades financieras que nos permiten conseguir tipos preferentes para nuestros clientes. Negociamos en tu nombre.' },
                  { n: 3, step: 'Presentación de las mejores ofertas', desc: 'Recibes un comparativo claro y transparente con las mejores opciones del mercado para tu perfil concreto. Tú decides, con información completa y sin presiones.' },
                  { n: 4, step: 'Gestión completa hasta la firma', desc: 'Nos encargamos de toda la documentación, la coordinación con el banco actual, la gestión de la tasación y el proceso ante notario. Sin sorpresas ni costes ocultos.' },
                ].map(({ n, step, desc }) => (
                  <div key={n} className="flex items-start gap-4 bg-[#E9ECEF] rounded-xl px-5 py-4">
                    <div className="w-8 h-8 bg-[#2EBFA5] text-white rounded-full flex items-center justify-center text-sm font-bold flex-shrink-0">{n}</div>
                    <div>
                      <p className="font-bold text-[#1A3C40] text-sm">{step}</p>
                      <p className="text-gray-600 text-sm mt-0.5 leading-relaxed">{desc}</p>
                    </div>
                  </div>
                ))}
              </div>

              {/* ── 6. FAQ ── */}
              <h2 className="text-2xl font-bold text-[#1A3C40] pt-4">Preguntas frecuentes sobre la subrogación hipotecaria</h2>

              {faqs.map((faq, i) => (
                <div key={i}>
                  <h3 className="text-lg font-bold text-[#1A3C40] mt-4 mb-2">{faq.question}</h3>
                  <p className="text-gray-700 leading-relaxed">{faq.answer}</p>
                </div>
              ))}

              {/* ── CONCLUSIÓN ── */}
              <h2 className="text-2xl font-bold text-[#1A3C40] pt-4">¿Por qué actuar ahora?</h2>
              <p>
                Si firmaste tu hipoteca hace más de dos o tres años y no la has revisado, es probable que hoy puedas conseguir condiciones mejores. El mercado hipotecario es dinámico: las entidades compiten por captar hipotecas, los tipos cambian y tú tienes más poder de negociación del que crees, especialmente si tienes un historial de pagos impecable.
              </p>
              <p>
                La subrogación no es una promesa vaga. Es un mecanismo legal establecido, con costes claros y un proceso bien definido. El único riesgo real es no hacerla y seguir pagando de más año tras año.
              </p>
              <p>
                En Avanza Hipotecas hacemos el análisis por ti, sin coste y sin compromiso. Si no hay margen de mejora, te lo decimos con la misma claridad. Y si lo hay, nos ponemos a trabajar.
              </p>
            </div>

            {/* ── CTA FINAL ── */}
            <div className="mt-14 bg-[#1A3C40] text-white rounded-2xl p-8 text-center">
              <h3 className="text-2xl font-bold mb-3">¿Quieres que analicemos tu hipoteca?</h3>
              <p className="text-gray-300 mb-6">El estudio es gratuito y sin compromiso. Un experto te llama en menos de 24 horas.</p>
              <div className="flex flex-col sm:flex-row gap-4 justify-center items-center">
                <Button onClick={scrollToContact} className="bg-[#2EBFA5] hover:bg-[#25a28b] text-white font-semibold px-8 py-3 text-lg flex items-center gap-2">
                  Solicitar análisis gratuito <ArrowRight className="w-5 h-5" />
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
                <Link to="/subrogacion-hipotecaria" className="flex items-center gap-3 bg-[#E9ECEF] rounded-xl px-4 py-3 hover:bg-[#2EBFA5]/10 transition-colors group">
                  <ArrowRight className="w-4 h-4 text-[#2EBFA5] flex-shrink-0" />
                  <span className="text-sm font-medium text-[#1A3C40] group-hover:text-[#2EBFA5] transition-colors">Servicio de subrogación hipotecaria</span>
                </Link>
                <Link to="/cambio-hipoteca" className="flex items-center gap-3 bg-[#E9ECEF] rounded-xl px-4 py-3 hover:bg-[#2EBFA5]/10 transition-colors group">
                  <ArrowRight className="w-4 h-4 text-[#2EBFA5] flex-shrink-0" />
                  <span className="text-sm font-medium text-[#1A3C40] group-hover:text-[#2EBFA5] transition-colors">Cambio de hipoteca sin cambiar de banco</span>
                </Link>
                <Link to="/calculadora-subrogacion" className="flex items-center gap-3 bg-[#E9ECEF] rounded-xl px-4 py-3 hover:bg-[#2EBFA5]/10 transition-colors group">
                  <ArrowRight className="w-4 h-4 text-[#2EBFA5] flex-shrink-0" />
                  <span className="text-sm font-medium text-[#1A3C40] group-hover:text-[#2EBFA5] transition-colors">Calculadora de subrogación hipotecaria</span>
                </Link>
              </div>
            </div>

          </div>
        </div>
      </section>
    </>
  );
};

export default SubrogacionGuiaCompletaPage;
