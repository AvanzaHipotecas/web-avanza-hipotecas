import React from 'react';
import { Helmet } from 'react-helmet';
import { Clock, Tag, ArrowRight, ArrowLeft, CheckCircle } from 'lucide-react';
import { Link, useNavigate } from 'react-router-dom';
import { Button } from '@/components/ui/button';

const SubrogacionHipotecariaPage = () => {
  const navigate = useNavigate();

  const scrollToContact = () => {
    navigate('/');
    setTimeout(() => document.getElementById('contacto')?.scrollIntoView({ behavior: 'smooth' }), 100);
  };

  return (
    <>
      <Helmet>
        <title>Subrogación hipotecaria: cambia de banco y ahorra | Avanza Hipotecas</title>
        <meta name="description" content="Qué es la subrogación hipotecaria, cuándo compensa cambiar de banco y cómo calcular el ahorro. Analizamos tu hipoteca gratis con Avanza Hipotecas." />
        <meta property="og:title" content="Subrogación hipotecaria: cambia de banco y ahorra | Avanza Hipotecas" />
        <meta property="og:description" content="Qué es la subrogación hipotecaria, cuándo compensa cambiar de banco y cómo calcular el ahorro. Analizamos tu hipoteca gratis con Avanza Hipotecas." />
        <meta property="og:url" content="https://avanzahipotecas.es/blog/subrogacion-hipotecaria" />
        <meta property="og:image" content="https://avanzahipotecas.es/og-image.jpg" />
        <meta property="og:type" content="article" />
        <meta name="robots" content="index, follow" />
        <link rel="canonical" href="https://avanzahipotecas.es/blog/subrogacion-hipotecaria" />
      </Helmet>

      {/* ── HERO ── */}
      <section className="pt-24 bg-white">
        <div className="relative h-72 md:h-96 overflow-hidden">
          <img
            src="https://images.unsplash.com/photo-1450101499163-c8848c66ca85?w=1200&q=80"
            alt="Firma de documentos hipotecarios"
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
                <span className="text-white/70 text-sm">5 abril 2026</span>
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

              <p className="text-xl text-gray-600 font-medium leading-relaxed">
                Mucha gente asume que la hipoteca que firmó con su banco es para siempre. No lo es. La subrogación hipotecaria te permite cambiar tu hipoteca a otra entidad con mejores condiciones sin necesidad de cancelar el préstamo actual. Y el ahorro, en muchos casos, es muy significativo. Si aún no tienes claro si te conviene <Link to="/blog/hipoteca-fija-o-variable-2026" className="text-[#2EBFA5] font-medium hover:underline">hipoteca fija o variable</Link> para la nueva condición, consulta nuestra guía antes de decidir.
              </p>

              <h2 className="text-2xl font-bold text-[#1A3C40] pt-4">¿Qué es exactamente la subrogación hipotecaria?</h2>
              <p>
                La subrogación es el mecanismo legal por el que se traslada una hipoteca de un banco a otro. El préstamo continúa existiendo, con el mismo importe pendiente y el mismo inmueble como garantía, pero cambian las condiciones: tipo de interés, plazo, y la entidad acreedora.
              </p>
              <p>
                Es importante distinguir entre dos tipos:
              </p>
              <ul className="list-disc pl-6 space-y-2">
                <li><strong>Subrogación de acreedor:</strong> cambias el banco. Es la más frecuente y la que analizamos en este artículo.</li>
                <li><strong>Subrogación de deudor:</strong> cambia la persona que debe el préstamo (por ejemplo, cuando alguien compra una casa con hipoteca ya constituida). Es menos habitual y más compleja.</li>
              </ul>

              <h2 className="text-2xl font-bold text-[#1A3C40] pt-4">¿Cuándo compensa hacer una subrogación?</h2>
              <p>
                No siempre es rentable cambiar de banco. Hay que hacer los números. En términos generales, la subrogación compensa cuando:
              </p>
              <div className="not-prose space-y-3 my-4">
                {[
                  'El tipo de interés de tu hipoteca actual es notablemente superior al que ofrece el mercado',
                  'Tu hipoteca es variable y quieres pasarla a fija para ganar estabilidad',
                  'Tu banco actual rechaza mejorar las condiciones después de negociar',
                  'Queda un plazo de amortización suficiente para que el ahorro supere los costes del proceso',
                  'Tu perfil financiero ha mejorado desde que firmaste y ahora puedes acceder a mejores condiciones',
                ].map((item, i) => (
                  <div key={i} className="flex items-start gap-3 bg-[#E9ECEF] rounded-xl px-5 py-3">
                    <CheckCircle className="w-5 h-5 text-[#2EBFA5] flex-shrink-0 mt-0.5" />
                    <span className="text-gray-700 text-sm">{item}</span>
                  </div>
                ))}
              </div>

              <h2 className="text-2xl font-bold text-[#1A3C40] pt-4">¿Cómo calcular si te compensa?</h2>
              <p>
                El cálculo básico es sencillo: comparas el ahorro total en intereses con los costes del proceso de subrogación.
              </p>

              <div className="not-prose bg-white border border-gray-200 rounded-2xl overflow-hidden my-4">
                <div className="bg-[#1A3C40] text-white px-6 py-4">
                  <p className="font-bold">Ejemplo: hipoteca de 150.000 € a 20 años restantes</p>
                </div>
                <div className="p-6 space-y-3">
                  {[
                    { label: 'Tipo actual', value: '4,00%', note: 'Variable: Euríbor + 1,20%' },
                    { label: 'Tipo nuevo (fijo)', value: '2,90%', note: 'Oferta del banco destino' },
                    { label: 'Ahorro mensual aprox.', value: '~90 €/mes', note: '' },
                    { label: 'Ahorro total en 20 años', value: '~21.600 €', note: '' },
                    { label: 'Costes de la subrogación', value: '~800–1.200 €', note: 'Tasación + notaría y registro (desde 2019 los paga el banco destino en su mayoría)' },
                    { label: 'Ahorro neto estimado', value: '~20.000 €', highlight: true, note: '' },
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

              <h2 className="text-2xl font-bold text-[#1A3C40] pt-4">¿Qué costes tiene la subrogación?</h2>
              <p>
                Desde la entrada en vigor de la Ley Hipotecaria de 2019, los costes de la subrogación se han reducido notablemente para el cliente:
              </p>
              <ul className="list-disc pl-6 space-y-2">
                <li><strong>Tasación:</strong> necesaria y a cargo del cliente (~400 €). Es el único coste fijo obligatorio.</li>
                <li><strong>Comisión por subrogación:</strong> depende del contrato y los años transcurridos. Para hipotecas variables puede ser del 0% tras los primeros años; para fijas, puede llegar al 2% en los primeros años. Revisa tu escritura.</li>
                <li><strong>Notaría y registro:</strong> en la subrogación de acreedor, la ley los atribuye al banco destino. El cliente habitualmente no los paga.</li>
                <li><strong>Cancelación registral:</strong> si finalmente quieres cancelar la hipoteca antigua por completo, sí tiene coste. Pero en la subrogación pura no es necesario.</li>
              </ul>

              <h2 className="text-2xl font-bold text-[#1A3C40] pt-4">El proceso paso a paso</h2>
              <p>
                El proceso de subrogación tiene una estructura bien definida:
              </p>
              <div className="not-prose space-y-3 my-4">
                {[
                  { n: 1, step: 'Estudio previo', desc: 'Analizas tu hipoteca actual (tipo, plazo, capital pendiente) y las ofertas del mercado.' },
                  { n: 2, step: 'Oferta vinculante del banco destino', desc: 'El nuevo banco te hace una oferta formal con las condiciones que propone.' },
                  { n: 3, step: 'Notificación al banco actual', desc: 'El banco destino notifica al banco original que vas a subrogarte.' },
                  { n: 4, step: 'Derecho de enervación', desc: 'Tu banco actual tiene 15 días para mejorar la oferta del banco destino e igualarla o superarla.' },
                  { n: 5, step: 'Firma ante notario', desc: 'Si el banco original no mejora la oferta, se formaliza la subrogación.' },
                ].map(({ n, step, desc }) => (
                  <div key={n} className="flex items-start gap-4 bg-[#E9ECEF] rounded-xl px-5 py-4">
                    <div className="w-8 h-8 bg-[#2EBFA5] text-white rounded-full flex items-center justify-center text-sm font-bold flex-shrink-0">{n}</div>
                    <div>
                      <p className="font-bold text-[#1A3C40] text-sm">{step}</p>
                      <p className="text-gray-600 text-sm mt-0.5">{desc}</p>
                    </div>
                  </div>
                ))}
              </div>

              <h2 className="text-2xl font-bold text-[#1A3C40] pt-4">El papel de un bróker hipotecario en la subrogación</h2>
              <p>
                Gestionar una subrogación por tu cuenta es posible, pero tiene sus dificultades: no siempre sabes a qué bancos acudir, no conoces qué condiciones son realmente buenas para tu perfil, y los bancos saben que estás negociando solo.
              </p>
              <p>
                Un bróker hipotecario como Avanza Hipotecas:
              </p>
              <ul className="list-disc pl-6 space-y-2">
                <li>Analiza tu hipoteca actual y calcula si la subrogación te compensa de verdad.</li>
                <li>Accede a las ofertas de más de 20 entidades y negocia en tu nombre.</li>
                <li>Gestiona toda la documentación y el proceso hasta la firma.</li>
                <li>No te cobra nada a ti por el estudio. El servicio se financia a través de la entidad que recibe la hipoteca.</li>
              </ul>
              <p>
                En muchos casos, encontramos ofertas que los clientes no habrían conseguido negociando solos, precisamente porque trabajamos con entidades que no operan con particulares de forma directa.
              </p>

              <h2 className="text-2xl font-bold text-[#1A3C40] pt-4">Subrogación hipotecaria: por qué actuar ahora puede ahorrarte miles de euros</h2>
              <p>
                Si firmaste tu hipoteca hace más de dos o tres años y no la has revisado, es muy probable que hoy puedas conseguir mejores condiciones. El mercado cambia, los bancos compiten por captar hipotecas, y tú tienes más poder de negociación del que crees, especialmente si tu historial de pagos es impecable.
              </p>
              <p>
                El primer paso es hacer los números. Y en Avanza Hipotecas lo hacemos por ti, sin coste y sin compromiso.
              </p>
            </div>

            {/* ── CTA ── */}
            <div className="mt-14 bg-[#1A3C40] text-white rounded-2xl p-8 text-center">
              <h3 className="text-2xl font-bold mb-3">¿Tu hipoteca se puede mejorar?</h3>
              <p className="text-gray-300 mb-6">Analizamos tu hipoteca actual y te decimos si la subrogación te compensa. Sin coste y sin compromiso.</p>
              <Button onClick={scrollToContact} className="bg-[#2EBFA5] hover:bg-[#25a28b] text-white font-semibold px-8 py-3 text-lg flex items-center gap-2 mx-auto">
                Solicita tu consulta gratuita <ArrowRight className="w-5 h-5" />
              </Button>
            </div>

            <div className="mt-8 border-t border-gray-100 pt-8">
              <p className="text-sm font-semibold text-[#1A3C40] mb-4">También te puede interesar</p>
              <div className="grid sm:grid-cols-2 gap-3">
                <Link to="/blog/que-es-el-euribor" className="flex items-center gap-3 bg-[#E9ECEF] rounded-xl px-4 py-3 hover:bg-[#2EBFA5]/10 transition-colors group">
                  <ArrowRight className="w-4 h-4 text-[#2EBFA5] flex-shrink-0" />
                  <span className="text-sm font-medium text-[#1A3C40] group-hover:text-[#2EBFA5] transition-colors">Qué es el euríbor y cómo afecta a tu hipoteca</span>
                </Link>
                <Link to="/blog/hipoteca-fija-o-variable-2026" className="flex items-center gap-3 bg-[#E9ECEF] rounded-xl px-4 py-3 hover:bg-[#2EBFA5]/10 transition-colors group">
                  <ArrowRight className="w-4 h-4 text-[#2EBFA5] flex-shrink-0" />
                  <span className="text-sm font-medium text-[#1A3C40] group-hover:text-[#2EBFA5] transition-colors">Hipoteca fija o variable en 2026: guía completa</span>
                </Link>
              </div>
            </div>
          </div>
        </div>
      </section>
    </>
  );
};

export default SubrogacionHipotecariaPage;
