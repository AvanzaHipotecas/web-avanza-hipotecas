import React, { useState, useMemo } from 'react';
import { Helmet } from 'react-helmet';
import { motion } from 'framer-motion';
import {
  Calculator, TrendingDown, ArrowRight, Send, Shield,
  HelpCircle, ChevronDown, ChevronUp, CheckCircle
} from 'lucide-react';
import { Button } from '@/components/ui/button';
import { Input } from '@/components/ui/input';
import { Label } from '@/components/ui/label';
import { useToast } from '@/components/ui/use-toast';
import { Link } from 'react-router-dom';

const fmt = (n) =>
  new Intl.NumberFormat('es-ES', { maximumFractionDigits: 0 }).format(Math.round(n));
const fmtDec = (n) =>
  new Intl.NumberFormat('es-ES', { minimumFractionDigits: 2, maximumFractionDigits: 2 }).format(n);

const FAQItem = ({ faq, index, openIndex, onToggle }) => (
  <motion.div
    initial={{ opacity: 0, y: 20 }}
    whileInView={{ opacity: 1, y: 0 }}
    viewport={{ once: true }}
    transition={{ delay: index * 0.1 }}
    className="mb-4"
  >
    <div className="bg-white rounded-xl shadow-sm overflow-hidden">
      <button
        onClick={() => onToggle(index)}
        className="w-full px-6 py-6 text-left flex items-center justify-between hover:bg-gray-50 transition-colors duration-200"
      >
        <div className="flex items-center">
          <HelpCircle className="w-6 h-6 text-[#2EBFA5] mr-4 flex-shrink-0" />
          <h3 className="text-lg font-semibold text-[#1A3C40] pr-4">{faq.question}</h3>
        </div>
        {openIndex === index
          ? <ChevronUp className="w-6 h-6 text-gray-500 flex-shrink-0" />
          : <ChevronDown className="w-6 h-6 text-gray-500 flex-shrink-0" />}
      </button>
      {openIndex === index && (
        <div className="px-6 pb-6">
          <p className="pl-10 pr-4 text-gray-600 leading-relaxed">{faq.answer}</p>
        </div>
      )}
    </div>
  </motion.div>
);

const CalculadoraSubrogacionPage = () => {
  const { toast } = useToast();

  const [capital, setCapital] = useState('200000');
  const [currentPayment, setCurrentPayment] = useState('1320');
  const [years, setYears] = useState('20');
  const [newRate, setNewRate] = useState(3.0);

  const [contactForm, setContactForm] = useState({ name: '', phone: '', email: '', privacy: false });
  const [isSubmitting, setIsSubmitting] = useState(false);
  const [openFAQ, setOpenFAQ] = useState(null);

  const calc = useMemo(() => {
    const p = parseFloat(capital) || 0;
    const cp = parseFloat(currentPayment) || 0;
    const n = parseInt(years) || 0;

    if (p <= 0 || n <= 0) return null;

    const monthlyRate = newRate / 100 / 12;
    const totalMonths = n * 12;
    const newPayment =
      monthlyRate === 0
        ? p / totalMonths
        : (p * (monthlyRate * Math.pow(1 + monthlyRate, totalMonths))) /
          (Math.pow(1 + monthlyRate, totalMonths) - 1);

    const monthlySavings = cp > 0 ? cp - newPayment : null;
    const totalSavings = monthlySavings !== null ? monthlySavings * totalMonths : null;

    return {
      newPayment,
      monthlySavings,
      totalSavings,
      totalCurrentCost: cp > 0 ? cp * totalMonths : null,
      totalNewCost: newPayment * totalMonths,
      hasSavings: monthlySavings !== null && monthlySavings > 0.5,
    };
  }, [capital, currentPayment, years, newRate]);

  const handleContactChange = (e) => {
    const { name, value, type, checked } = e.target;
    setContactForm(prev => ({ ...prev, [name]: type === 'checkbox' ? checked : value }));
  };

  const handleContactSubmit = async (e) => {
    e.preventDefault();
    if (!contactForm.privacy) {
      toast({ title: 'Error', description: 'Debes aceptar la política de privacidad.', variant: 'destructive' });
      return;
    }
    setIsSubmitting(true);
    try {
      const payload = {
        ...contactForm,
        mortgageType: 'calculadora-subrogacion',
        calculadoraResultado: calc
          ? `Capital: ${capital}€ | Cuota actual: ${currentPayment}€ | Plazo: ${years}a | Tipo nuevo: ${newRate}% | Nueva cuota: ${fmtDec(calc.newPayment)}€ | Ahorro mensual: ${calc.monthlySavings !== null ? fmtDec(calc.monthlySavings) : 'N/A'}€ | Ahorro total: ${calc.totalSavings !== null ? fmt(calc.totalSavings) : 'N/A'}€`
          : 'Sin datos calculados',
      };
      await fetch('https://n8n.srv993017.hstgr.cloud/webhook/093ba8d6-0bed-4cb3-ac20-a4c7f3952963', {
        method: 'POST',
        headers: { 'Content-Type': 'application/json' },
        body: JSON.stringify(payload),
      });
      toast({ title: '¡Consulta enviada!', description: 'Un experto te contactará en menos de 24 horas.' });
      setContactForm({ name: '', phone: '', email: '', privacy: false });
    } catch {
      toast({ title: 'Error al enviar', description: 'Por favor inténtalo de nuevo o llámanos directamente.', variant: 'destructive' });
    } finally {
      setIsSubmitting(false);
    }
  };

  const faqs = [
    {
      question: '¿Cómo funciona esta calculadora de subrogación?',
      answer: 'Introduces el capital pendiente de tu hipoteca, la cuota mensual que pagas ahora, los años que te quedan y el tipo de interés al que podrías subrogar. La calculadora estima la nueva cuota con ese tipo y muestra el ahorro mensual y total que obtendrías si cambias de banco.',
    },
    {
      question: '¿El resultado de la calculadora es exacto?',
      answer: 'Es una estimación orientativa. El ahorro real puede variar según el tipo exacto que negocies, las condiciones del nuevo préstamo y los costes del proceso (principalmente la tasación, habitualmente entre 300 y 450 €). Para un análisis gratuito y preciso de tu caso concreto, consúltanos sin compromiso.',
    },
    {
      question: '¿Qué tipo de interés debo introducir?',
      answer: 'Introduce el tipo de interés fijo al que crees que podrías subrogar tu hipoteca. Si ya tienes una oferta concreta, usa ese dato. Si no, prueba con valores entre el 2,5% y el 3,5%, que son rangos habituales en el mercado actual para hipotecas fijas con un buen perfil crediticio.',
    },
    {
      question: '¿Qué costes tiene la subrogación que no aparecen aquí?',
      answer: 'El principal coste para el cliente es la tasación (habitualmente entre 300 y 450 €). Los gastos notariales y registrales los asume el banco destino desde la Ley Hipotecaria de 2019. También revisa en tu escritura si existe comisión de subrogación, que puede ser del 0% tras los primeros años en hipotecas variables.',
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
        <title>Calculadora subrogación hipotecaria | Avanza Hipotecas</title>
        <meta name="description" content="Calcula cuánto puedes ahorrar cambiando tu hipoteca de banco. Introduce tus datos y ve el ahorro real en segundos. Consulta gratuita." />
        <meta property="og:title" content="Calculadora subrogación hipotecaria | Avanza Hipotecas" />
        <meta property="og:description" content="Calcula cuánto puedes ahorrar cambiando tu hipoteca de banco. Introduce tus datos y ve el ahorro real en segundos. Consulta gratuita." />
        <meta property="og:url" content="https://avanzahipotecas.es/calculadora-subrogacion" />
        <meta property="og:image" content="https://avanzahipotecas.es/og-image.jpg" />
        <meta property="og:type" content="website" />
        <meta name="robots" content="index, follow" />
        <link rel="canonical" href="https://avanzahipotecas.es/calculadora-subrogacion" />
        <script type="application/ld+json">{JSON.stringify(schemaFAQ)}</script>
      </Helmet>

      {/* ── HERO ── */}
      <section className="pt-32 pb-16 bg-[#1A3C40] text-white">
        <div className="container mx-auto px-4">
          <motion.div
            initial={{ opacity: 0, y: 30 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.7 }}
            className="max-w-3xl mx-auto text-center"
          >
            <div className="w-16 h-16 bg-[#2EBFA5] rounded-2xl flex items-center justify-center mx-auto mb-6">
              <Calculator className="w-8 h-8 text-white" />
            </div>
            <h1 className="text-4xl md:text-5xl font-bold mb-4">
              Calculadora de <span className="text-[#2EBFA5]">subrogación hipotecaria</span>
            </h1>
            <p className="text-xl text-gray-300 mb-8">
              Introduce los datos de tu hipoteca y descubre en segundos cuánto puedes ahorrar cambiando de banco
            </p>
            <div className="flex flex-wrap justify-center gap-6 text-sm text-gray-300">
              {['Resultado instantáneo', 'Sin registro', 'Consulta gratuita'].map(item => (
                <div key={item} className="flex items-center gap-2">
                  <CheckCircle className="w-4 h-4 text-[#2EBFA5] flex-shrink-0" />
                  <span>{item}</span>
                </div>
              ))}
            </div>
          </motion.div>
        </div>
      </section>

      {/* ── CALCULADORA ── */}
      <section className="py-12 bg-[#E9ECEF]">
        <div className="container mx-auto px-4">
          <motion.div
            initial={{ opacity: 0, y: 30 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ delay: 0.2 }}
            className="max-w-5xl mx-auto bg-white rounded-3xl shadow-xl overflow-hidden border border-gray-100"
          >
            <div className="grid lg:grid-cols-2">

              {/* ── INPUTS ── */}
              <div className="p-8 space-y-7">
                <h2 className="text-2xl font-bold text-[#1A3C40]">Introduce los datos de tu hipoteca</h2>

                <div>
                  <Label htmlFor="capital" className="text-gray-700 font-semibold text-base">
                    Capital pendiente (€)
                  </Label>
                  <Input
                    id="capital"
                    type="number"
                    min="0"
                    value={capital}
                    onChange={e => setCapital(e.target.value)}
                    className="mt-2 text-lg h-12"
                    placeholder="200000"
                  />
                </div>

                <div>
                  <Label htmlFor="currentPayment" className="text-gray-700 font-semibold text-base">
                    Cuota mensual actual (€)
                  </Label>
                  <Input
                    id="currentPayment"
                    type="number"
                    min="0"
                    value={currentPayment}
                    onChange={e => setCurrentPayment(e.target.value)}
                    className="mt-2 text-lg h-12"
                    placeholder="1200"
                  />
                </div>

                <div>
                  <Label htmlFor="years" className="text-gray-700 font-semibold text-base">
                    Plazo restante (años)
                  </Label>
                  <Input
                    id="years"
                    type="number"
                    min="1"
                    max="40"
                    value={years}
                    onChange={e => setYears(e.target.value)}
                    className="mt-2 text-lg h-12"
                    placeholder="20"
                  />
                </div>

                {/* ── SLIDER ── */}
                <div>
                  <Label className="text-gray-700 font-semibold text-base">
                    Tipo de interés nuevo (%)
                  </Label>
                  <div className="mt-4 flex items-center justify-between mb-3">
                    <span className="text-sm text-gray-400 w-6">1%</span>
                    <div className="text-center">
                      <span className="text-5xl font-bold text-[#2EBFA5]">{newRate.toFixed(1)}</span>
                      <span className="text-3xl font-bold text-[#2EBFA5]">%</span>
                    </div>
                    <span className="text-sm text-gray-400 w-6 text-right">5%</span>
                  </div>
                  <input
                    type="range"
                    min="1"
                    max="5"
                    step="0.1"
                    value={newRate}
                    onChange={e => setNewRate(parseFloat(e.target.value))}
                    className="w-full h-3 bg-gray-200 rounded-lg appearance-none cursor-pointer accent-[#2EBFA5]"
                    style={{ accentColor: '#2EBFA5' }}
                  />
                  <div className="flex justify-between mt-1 text-xs text-gray-400">
                    <span>Tipo mínimo</span>
                    <span>Tipo máximo</span>
                  </div>
                </div>

                <p className="text-xs text-gray-400 leading-relaxed border-t border-gray-100 pt-4">
                  * Estimación orientativa basada en el sistema de amortización francés. Para un análisis exacto y gratuito, consúltanos.
                </p>
              </div>

              {/* ── RESULTS ── */}
              <div className="bg-[#1A3C40] p-8 text-white flex flex-col min-h-[480px]">
                <h2 className="text-2xl font-bold mb-6">Resultados estimados</h2>

                {calc ? (
                  <div className="flex flex-col gap-4 flex-1">

                    {/* Nueva cuota */}
                    <div className="bg-white/10 rounded-2xl p-5">
                      <p className="text-gray-300 text-sm font-medium mb-1">Nueva cuota mensual estimada</p>
                      <p className="text-4xl font-bold">{fmtDec(calc.newPayment)} €</p>
                    </div>

                    {/* Ahorro mensual */}
                    {calc.monthlySavings !== null && (
                      <div className={`rounded-2xl p-5 ${calc.hasSavings
                        ? 'bg-[#2EBFA5]/20 border border-[#2EBFA5]/40'
                        : 'bg-red-900/20 border border-red-500/30'}`}
                      >
                        <p className="text-gray-300 text-sm font-medium mb-1">Ahorro mensual</p>
                        <p className={`text-3xl font-bold ${calc.hasSavings ? 'text-[#2EBFA5]' : 'text-red-400'}`}>
                          {calc.hasSavings ? '+' : ''}{fmtDec(calc.monthlySavings)} €/mes
                        </p>
                        {!calc.hasSavings && (
                          <p className="text-red-300 text-xs mt-1">
                            Con este tipo la cuota subiría. Prueba con un tipo más bajo.
                          </p>
                        )}
                      </div>
                    )}

                    {/* Ahorro total — solo si hay ahorro */}
                    {calc.hasSavings && calc.totalSavings !== null && (
                      <div className="bg-[#2EBFA5] rounded-2xl p-5">
                        <p className="text-white/80 text-sm font-medium mb-1">Ahorro total durante el préstamo</p>
                        <p className="text-4xl font-bold">{fmt(calc.totalSavings)} €</p>
                      </div>
                    )}

                    {/* Tabla comparativa */}
                    {calc.totalCurrentCost !== null && (
                      <div className="bg-white/5 rounded-2xl p-5 mt-auto">
                        <p className="text-gray-400 text-xs font-semibold mb-3 uppercase tracking-wide">
                          Comparativa total del préstamo
                        </p>
                        <div className="space-y-2 text-sm">
                          <div className="flex justify-between items-center">
                            <span className="text-gray-400">Total con hipoteca actual</span>
                            <span className="font-semibold">{fmt(calc.totalCurrentCost)} €</span>
                          </div>
                          <div className="flex justify-between items-center">
                            <span className="text-gray-400">Total con subrogación</span>
                            <span className={`font-semibold ${calc.hasSavings ? 'text-[#2EBFA5]' : ''}`}>
                              {fmt(calc.totalNewCost)} €
                            </span>
                          </div>
                          {calc.hasSavings && (
                            <div className="flex justify-between items-center border-t border-white/10 pt-2 mt-1">
                              <span className="text-[#2EBFA5] font-bold">Ahorro total</span>
                              <span className="text-[#2EBFA5] font-bold text-base">{fmt(calc.totalSavings)} €</span>
                            </div>
                          )}
                        </div>
                      </div>
                    )}
                  </div>
                ) : (
                  <div className="flex flex-col items-center justify-center flex-1 text-center opacity-40 py-8">
                    <Calculator className="w-20 h-20 mb-5" />
                    <p className="text-xl font-medium">Introduce los datos</p>
                    <p className="text-sm mt-2 text-gray-400">Los resultados aparecerán aquí</p>
                  </div>
                )}
              </div>
            </div>
          </motion.div>

          {/* ── NOTA SOBRE COSTES ── */}
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            className="max-w-5xl mx-auto mt-6 bg-[#2EBFA5]/10 border border-[#2EBFA5]/30 rounded-2xl p-5 flex flex-col sm:flex-row items-start sm:items-center gap-4"
          >
            <TrendingDown className="w-6 h-6 text-[#2EBFA5] flex-shrink-0" />
            <div className="flex-1">
              <p className="font-semibold text-[#1A3C40] text-sm">
                La calculadora no incluye los costes de la subrogación
              </p>
              <p className="text-gray-600 text-xs mt-0.5">
                Principalmente la tasación (~300–450 €). Los gastos notariales y registrales los asume el banco destino desde 2019.
              </p>
            </div>
            <Link to="/subrogacion-hipotecaria" className="text-[#2EBFA5] font-semibold text-sm whitespace-nowrap hover:underline flex-shrink-0">
              Ver todos los costes →
            </Link>
          </motion.div>
        </div>
      </section>

      {/* ── CTA + FORM ── */}
      <section className="py-20 bg-white">
        <div className="container mx-auto px-4">
          <motion.div
            initial={{ opacity: 0, y: 30 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            className="max-w-2xl mx-auto"
          >
            <div className="text-center mb-10">
              <h2 className="text-3xl md:text-4xl font-bold text-[#1A3C40] mb-4">
                ¿Quieres conseguir este ahorro?
                <span className="text-[#2EBFA5] block mt-1">Consúltanos gratis</span>
              </h2>
              <p className="text-gray-600 text-lg leading-relaxed">
                Nuestros expertos analizan tu hipoteca actual y negocian las mejores condiciones con más de 20 entidades. Sin coste para ti.
              </p>
            </div>

            <div className="bg-white rounded-2xl border border-gray-100 shadow-lg p-8">
              <div className="flex items-center mb-6">
                <Send className="w-7 h-7 text-[#1A3C40] mr-3" />
                <h3 className="text-xl font-bold text-[#1A3C40]">Quiero ahorrar en mi hipoteca</h3>
              </div>
              <form onSubmit={handleContactSubmit} className="space-y-5">
                <div>
                  <Label htmlFor="c-name" className="text-gray-700 font-medium">Nombre *</Label>
                  <Input
                    id="c-name" name="name" type="text" required
                    value={contactForm.name} onChange={handleContactChange}
                    className="mt-2" placeholder="Tu nombre completo"
                  />
                </div>
                <div>
                  <Label htmlFor="c-phone" className="text-gray-700 font-medium">Teléfono *</Label>
                  <Input
                    id="c-phone" name="phone" type="tel" required
                    value={contactForm.phone} onChange={handleContactChange}
                    className="mt-2" placeholder="600 123 456"
                  />
                </div>
                <div>
                  <Label htmlFor="c-email" className="text-gray-700 font-medium">Email *</Label>
                  <Input
                    id="c-email" name="email" type="email" required
                    value={contactForm.email} onChange={handleContactChange}
                    className="mt-2" placeholder="tu@email.com"
                  />
                </div>
                <div className="flex items-start space-x-3">
                  <input
                    type="checkbox" id="c-privacy" name="privacy"
                    checked={contactForm.privacy} onChange={handleContactChange}
                    className="mt-1 w-4 h-4 accent-[#1A3C40] border-gray-300 rounded flex-shrink-0"
                  />
                  <Label htmlFor="c-privacy" className="text-sm text-gray-600 leading-relaxed cursor-pointer">
                    He leído y acepto la{' '}
                    <a href="/politica-privacidad" target="_blank" rel="noopener noreferrer" className="text-[#1A3C40] font-medium hover:underline">
                      Política de Privacidad
                    </a>
                    {' '}<span className="text-red-500">*</span>
                  </Label>
                </div>
                <Button
                  type="submit" disabled={isSubmitting}
                  className="btn-primary w-full text-base text-white py-4 font-semibold"
                >
                  {isSubmitting ? 'Enviando...' : 'Quiero ahorrar en mi hipoteca'}
                </Button>
              </form>
              <div className="mt-5 p-4 bg-green-100 rounded-lg border border-green-300">
                <div className="flex items-center mb-1">
                  <Shield className="w-5 h-5 text-green-600 mr-2" />
                  <span className="font-semibold text-green-800">Consulta 100% gratuita y sin compromiso</span>
                </div>
                <p className="text-sm text-green-700">Un experto te contactará en menos de 24 horas.</p>
              </div>
            </div>

            <div className="mt-8 text-center">
              <p className="text-gray-500 text-sm mb-1">¿Prefieres llamarnos?</p>
              <a href="tel:+34624810190" className="text-[#1A3C40] font-bold text-xl hover:text-[#2EBFA5] transition-colors">
                624 810 190
              </a>
            </div>
          </motion.div>
        </div>
      </section>

      {/* ── FAQ ── */}
      <section className="py-20 bg-[#E9ECEF]">
        <div className="container mx-auto px-4">
          <motion.div
            initial={{ opacity: 0, y: 30 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            className="text-center mb-14"
          >
            <h2 className="text-4xl md:text-5xl font-bold text-[#1A3C40] mb-4">
              Preguntas <span className="text-[#2EBFA5]">frecuentes</span>
            </h2>
            <p className="text-xl text-gray-600">Todo lo que necesitas saber sobre la calculadora y la subrogación</p>
          </motion.div>
          <div className="max-w-4xl mx-auto">
            {faqs.map((faq, i) => (
              <FAQItem
                key={i} faq={faq} index={i} openIndex={openFAQ}
                onToggle={(idx) => setOpenFAQ(openFAQ === idx ? null : idx)}
              />
            ))}
          </div>
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            className="max-w-4xl mx-auto mt-12 bg-[#1A3C40] text-white rounded-2xl p-8 text-center"
          >
            <h3 className="text-2xl font-bold mb-3">¿Quieres un análisis preciso de tu caso?</h3>
            <p className="text-gray-300 mb-6">
              La calculadora es orientativa. Nuestros expertos calculan el ahorro real de tu hipoteca, gratis y sin compromiso.
            </p>
            <div className="flex flex-col sm:flex-row gap-4 justify-center">
              <Link to="/subrogacion-hipotecaria">
                <Button className="bg-[#2EBFA5] hover:bg-[#25a28b] text-white font-semibold px-8 py-3 text-lg flex items-center gap-2 mx-auto">
                  Hablar con un experto <ArrowRight className="w-5 h-5" />
                </Button>
              </Link>
            </div>
          </motion.div>
        </div>
      </section>
    </>
  );
};

export default CalculadoraSubrogacionPage;
