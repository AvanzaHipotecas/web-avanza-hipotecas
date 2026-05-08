import React, { useState, useRef } from 'react';
import { Helmet } from 'react-helmet';
import { motion } from 'framer-motion';
import {
  ArrowRight, CheckCircle, Clock, Home, Percent,
  ChevronDown, ChevronUp, HelpCircle, Send, Phone, Mail,
  Shield, TrendingDown, RefreshCw, FileText, Users, Star, Calculator
} from 'lucide-react';
import { Button } from '@/components/ui/button';
import { Input } from '@/components/ui/input';
import { Label } from '@/components/ui/label';
import { Select } from '@/components/ui/select';
import { Textarea } from '@/components/ui/textarea';
import { useToast } from '@/components/ui/use-toast';
import emailjs from '@emailjs/browser';
import Testimonials from '@/components/Testimonials';
import { Link } from 'react-router-dom';

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
        <motion.div
          initial={{ opacity: 0, height: 0 }}
          animate={{ opacity: 1, height: 'auto' }}
          exit={{ opacity: 0, height: 0 }}
          transition={{ duration: 0.3 }}
          className="px-6 pb-6"
        >
          <p className="pl-10 pr-4 text-gray-600 leading-relaxed">{faq.answer}</p>
        </motion.div>
      )}
    </div>
  </motion.div>
);

const CambioHipotecaPage = () => {
  const [openFAQ, setOpenFAQ] = useState(null);
  const formRef = useRef();
  const { toast } = useToast();
  const [formData, setFormData] = useState({
    name: '', email: '', phone: '', pendingCapital: '',
    mortgageType: 'cambio-hipoteca', improvementGoal: 'reducir-tipo', message: '', privacy: false, marketing: false,
  });
  const [isSubmitting, setIsSubmitting] = useState(false);

  const scrollToContact = (e) => {
    e?.preventDefault();
    document.getElementById('contacto-cambio')?.scrollIntoView({ behavior: 'smooth' });
  };

  const handleInputChange = (e) => {
    const { name, value, type, checked } = e.target;
    setFormData(prev => ({ ...prev, [name]: type === 'checkbox' ? checked : value }));
  };

  const handleSubmit = async (e) => {
    e.preventDefault();
    if (!formData.privacy) {
      toast({ title: 'Error', description: 'Debes aceptar la política de privacidad.', variant: 'destructive' });
      return;
    }
    setIsSubmitting(true);
    try {
      const webhookPromise = fetch('https://n8n.srv993017.hstgr.cloud/webhook/093ba8d6-0bed-4cb3-ac20-a4c7f3952963', {
        method: 'POST',
        headers: { 'Content-Type': 'application/json' },
        body: JSON.stringify(formData),
      });
      const emailPromise = emailjs.send('YOUR_SERVICE_ID', 'YOUR_TEMPLATE_ID', {
        to_email: 'guigrsanti@gmail.com',
        from_name: formData.name, from_email: formData.email,
        phone: formData.phone, property_value: formData.pendingCapital || 'No especificado',
        mortgage_type: 'Cambio de Hipoteca', current_situation: formData.improvementGoal,
        message: formData.message, notion_status: 'Captación: WEB | Status: Pendiente Llamar',
      }, 'YOUR_PUBLIC_KEY');
      const [webhookRes, emailRes] = await Promise.allSettled([webhookPromise, emailPromise]);
      if (webhookRes.status === 'fulfilled' || emailRes.status === 'fulfilled') {
        toast({ title: '¡Consulta enviada!', description: 'Un experto te contactará en menos de 24 horas.' });
        setFormData({ name: '', email: '', phone: '', pendingCapital: '', mortgageType: 'cambio-hipoteca', improvementGoal: 'reducir-tipo', message: '', privacy: false, marketing: false });
      } else { throw new Error(); }
    } catch {
      toast({ title: 'Error al enviar', description: 'Por favor inténtalo de nuevo o llámanos directamente.', variant: 'destructive' });
    } finally { setIsSubmitting(false); }
  };

  const ventajas = [
    { icon: TrendingDown, title: 'Reduce el tipo de interés', desc: 'Sin cambiar de entidad, tu banco puede mejorar el tipo si percibe que tienes alternativas reales sobre la mesa.' },
    { icon: RefreshCw, title: 'De variable a fija', desc: 'Una de las mejoras más habituales en novaciones: ganar estabilidad cambiando el tipo de referencia.' },
    { icon: Clock, title: 'Sin trámites de cambio de banco', desc: 'Evitas la tasación y los tiempos de una subrogación completa. El proceso es más rápido y sencillo.' },
    { icon: Users, title: 'Fuerza negociadora real', desc: 'Negociamos con datos concretos del mercado. Tu banco sabe que conocemos sus competidores.' },
    { icon: Percent, title: 'Ampliación o reducción de plazo', desc: 'Ajustamos el horizonte de amortización para adaptar la cuota mensual a tu situación actual.' },
    { icon: FileText, title: 'Estudio gratuito', desc: 'Analizamos tu hipoteca y te decimos qué mejoras son posibles, sin coste ni compromiso.' },
  ];

  const quePuedesMejorar = [
    'El tipo de interés fijo o el diferencial sobre el euríbor en hipotecas variables',
    'Pasar de hipoteca variable a fija o mixta para ganar estabilidad',
    'Ampliar el plazo de amortización y reducir la cuota mensual',
    'Reducir o eliminar vinculaciones como seguros o tarjetas de crédito',
    'Reducir el diferencial en hipotecas variables con historial de pagos impecable',
  ];

  const faqs = [
    {
      question: '¿En qué se diferencia un cambio de hipoteca de una subrogación?',
      answer: 'En un cambio de hipoteca (o novación), modificas las condiciones con tu banco actual sin cambiar de entidad. En una subrogación, trasladas la hipoteca a otro banco. Ambas pueden ser válidas; en Avanza Hipotecas analizamos cuál te conviene más según tu situación concreta y el coste de cada opción.',
    },
    {
      question: '¿Mi banco tiene obligación de mejorar mis condiciones?',
      answer: 'No tiene obligación legal, pero sí tiene interés en retenerte si percibe que tienes alternativas reales. Contar con un bróker hipotecario que negocia con datos concretos del mercado cambia radicalmente el resultado. Sin presión externa, los bancos rara vez ofrecen su mejor condición de forma espontánea.',
    },
    {
      question: '¿Qué costes tiene renegociar la hipoteca con mi banco?',
      answer: 'Depende de lo que acuerdes. Si solo modificas el tipo de interés o el diferencial, puede existir una comisión por novación en tu escritura (revísala). Si amplías plazo o modificas capital, el coste puede ser algo mayor. En muchos casos la novación tiene coste mínimo o nulo. Te lo analizamos en tu caso concreto antes de actuar.',
    },
    {
      question: '¿Cuándo compensa negociar en lugar de cambiar de banco?',
      answer: 'Cuando tu banco acepta mejorar sin necesidad de tasación ni cambio completo, el proceso es más rápido y económico. También puede ser preferible si tienes una comisión de subrogación alta en tu escritura o si el ahorro neto no justificaría los costes de un traslado completo. En Avanza Hipotecas hacemos los números de ambas opciones y te decimos cuál sale ganando.',
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
        <title>Cambio de hipoteca: mejora tus condiciones hoy | Avanza Hipotecas</title>
        <meta name="description" content="Negociamos con tu banco actual para mejorar el tipo de interés o las condiciones de tu hipoteca. Sin cambiar de banco. Consulta gratuita." />
        <meta property="og:title" content="Cambio de hipoteca: mejora tus condiciones hoy | Avanza Hipotecas" />
        <meta property="og:description" content="Negociamos con tu banco actual para mejorar el tipo de interés o las condiciones de tu hipoteca. Sin cambiar de banco. Consulta gratuita." />
        <meta property="og:url" content="https://avanzahipotecas.es/cambio-hipoteca" />
        <meta property="og:image" content="https://avanzahipotecas.es/og-image.jpg" />
        <meta property="og:type" content="website" />
        <meta name="robots" content="index, follow" />
        <link rel="canonical" href="https://avanzahipotecas.es/cambio-hipoteca" />
        <script type="application/ld+json">{JSON.stringify(schemaFAQ)}</script>
      </Helmet>

      {/* ── HERO ── */}
      <section className="min-h-screen flex items-center relative overflow-hidden bg-white pt-28 pb-16">
        <div className="absolute inset-0 bg-gradient-to-br from-[#2EBFA5]/5 to-white pointer-events-none" />
        <div className="container mx-auto px-4 relative z-10">
          <div className="grid lg:grid-cols-2 gap-12 items-center">
            <motion.div
              initial={{ opacity: 0, x: -50 }} animate={{ opacity: 1, x: 0 }} transition={{ duration: 0.8 }}
              className="text-center lg:text-left"
            >
              <motion.h1
                initial={{ opacity: 0, y: 20 }} animate={{ opacity: 1, y: 0 }} transition={{ delay: 0.2 }}
                className="text-4xl md:text-5xl lg:text-6xl font-bold leading-tight mb-6 text-[#1A3C40]"
              >
                Cambia tu hipoteca y{' '}
                <span className="text-[#2EBFA5]">mejora tus condiciones</span>
              </motion.h1>
              <motion.p
                initial={{ opacity: 0, y: 20 }} animate={{ opacity: 1, y: 0 }} transition={{ delay: 0.4 }}
                className="text-xl text-gray-600 mb-8 leading-relaxed"
              >
                Negociamos con tu banco actual para conseguirte un tipo de interés más bajo, pasar a hipoteca fija o mejorar las condiciones. Sin cambiar de entidad.
              </motion.p>
              <motion.div
                initial={{ opacity: 0, y: 20 }} animate={{ opacity: 1, y: 0 }} transition={{ delay: 0.6 }}
                className="flex flex-col sm:flex-row gap-4 justify-center lg:justify-start"
              >
                <Button onClick={scrollToContact} className="bg-[#1A3C40] hover:bg-[#122c30] text-white font-semibold px-8 py-4 rounded-lg text-lg flex items-center justify-center group">
                  Mejorar mi hipoteca gratis
                  <ArrowRight className="ml-2 w-5 h-5 group-hover:translate-x-1 transition-transform" />
                </Button>
                <Button variant="outline" className="border-2 border-[#1A3C40] text-[#1A3C40] hover:bg-[#1A3C40] hover:text-white px-8 py-4 rounded-lg text-lg" onClick={() => window.location.href = '/simulador'}>
                  Simular mi hipoteca
                </Button>
              </motion.div>
              <motion.p
                initial={{ opacity: 0 }} animate={{ opacity: 1 }} transition={{ delay: 0.7 }}
                className="text-sm text-center lg:text-left"
              >
                <Link to="/calculadora-subrogacion" className="text-[#2EBFA5] font-medium hover:underline inline-flex items-center gap-1">
                  <Calculator className="w-3.5 h-3.5" />
                  ¿Cuánto ahorrarías? Calcula el ahorro en segundos →
                </Link>
              </motion.p>
              <motion.div
                initial={{ opacity: 0, y: 20 }} animate={{ opacity: 1, y: 0 }} transition={{ delay: 0.8 }}
                className="mt-8 flex flex-col sm:flex-row gap-4 justify-center lg:justify-start"
              >
                {['Estudio 100% gratuito', 'Sin compromiso', 'Sin cambiar de banco'].map((item) => (
                  <div key={item} className="flex items-center space-x-2">
                    <CheckCircle className="w-5 h-5 text-[#2EBFA5] flex-shrink-0" />
                    <span className="text-gray-700 text-sm font-medium">{item}</span>
                  </div>
                ))}
              </motion.div>
            </motion.div>
            <motion.div
              initial={{ opacity: 0, x: 50 }} animate={{ opacity: 1, x: 0 }} transition={{ duration: 0.8 }}
              className="hidden lg:block"
            >
              <div className="relative">
                <img
                  src="https://images.unsplash.com/photo-1521791136064-7986c2920216?w=800&q=75&fm=webp"
                  alt="Apretón de manos representando el acuerdo de mejora hipotecaria"
                  className="rounded-3xl shadow-2xl w-full object-cover h-[480px]"
                  width="800" height="480"
                  loading="lazy"
                />
                <div className="absolute -bottom-6 -left-6 bg-white p-4 rounded-2xl shadow-lg flex items-center space-x-3">
                  <div className="w-12 h-12 bg-[#2EBFA5] rounded-full flex items-center justify-center">
                    <Percent className="w-6 h-6 text-white" />
                  </div>
                  <div>
                    <p className="font-bold text-[#1A3C40]">Mejores condiciones</p>
                    <p className="text-sm text-gray-600">Con tu banco actual</p>
                  </div>
                </div>
              </div>
            </motion.div>
          </div>
        </div>
      </section>

      {/* ── ¿QUÉ PUEDES MEJORAR? ── */}
      <section className="py-20 bg-[#1A3C40] text-white">
        <div className="container mx-auto px-4">
          <motion.div initial={{ opacity: 0, y: 30 }} whileInView={{ opacity: 1, y: 0 }} viewport={{ once: true }} className="text-center mb-14">
            <h2 className="text-4xl md:text-5xl font-bold mb-4">¿Qué puedes <span className="text-[#2EBFA5]">mejorar?</span></h2>
            <p className="text-xl text-gray-300 max-w-2xl mx-auto">Estas son las condiciones que habitualmente se pueden renegociar con tu banco</p>
          </motion.div>
          <div className="grid sm:grid-cols-2 lg:grid-cols-3 gap-5 max-w-5xl mx-auto">
            {quePuedesMejorar.map((item, i) => (
              <motion.div
                key={i}
                initial={{ opacity: 0, y: 20 }} whileInView={{ opacity: 1, y: 0 }} viewport={{ once: true }} transition={{ delay: i * 0.1 }}
                className="bg-white/10 rounded-2xl px-6 py-5 flex items-start gap-4"
              >
                <CheckCircle className="w-5 h-5 text-[#2EBFA5] flex-shrink-0 mt-0.5" />
                <p className="text-gray-200 text-sm leading-relaxed">{item}</p>
              </motion.div>
            ))}
          </div>
          <motion.div initial={{ opacity: 0, y: 20 }} whileInView={{ opacity: 1, y: 0 }} viewport={{ once: true }} className="text-center mt-12">
            <p className="text-gray-300 mb-4">¿No sabes qué puedes mejorar en tu caso? Te lo decimos gratis.</p>
            <Button onClick={scrollToContact} className="bg-[#2EBFA5] hover:bg-[#25a28b] text-white font-semibold px-8 py-3 text-lg">
              Analizar mi hipoteca sin compromiso
            </Button>
          </motion.div>
        </div>
      </section>

      {/* ── VENTAJAS ── */}
      <section className="py-20 bg-white">
        <div className="container mx-auto px-4">
          <motion.div initial={{ opacity: 0, y: 30 }} whileInView={{ opacity: 1, y: 0 }} viewport={{ once: true }} className="text-center mb-14">
            <h2 className="text-4xl md:text-5xl font-bold text-[#1A3C40] mb-4">Por qué <span className="text-[#2EBFA5]">funciona con Avanza</span></h2>
            <p className="text-xl text-gray-600 max-w-2xl mx-auto">Los bancos negocian de forma diferente cuando saben que tienen enfrente a un profesional con datos</p>
          </motion.div>
          <div className="grid sm:grid-cols-2 lg:grid-cols-3 gap-8 max-w-6xl mx-auto">
            {ventajas.map((v, i) => (
              <motion.div key={i} initial={{ opacity: 0, y: 20 }} whileInView={{ opacity: 1, y: 0 }} viewport={{ once: true }} transition={{ delay: i * 0.1 }} className="flex items-start space-x-4 p-6 rounded-2xl border border-gray-100 hover:border-[#2EBFA5]/40 hover:shadow-md transition-all duration-200">
                <div className="w-12 h-12 bg-[#2EBFA5]/10 rounded-xl flex items-center justify-center flex-shrink-0">
                  <v.icon className="w-6 h-6 text-[#2EBFA5]" />
                </div>
                <div>
                  <h3 className="font-bold text-[#1A3C40] mb-1">{v.title}</h3>
                  <p className="text-gray-600 text-sm leading-relaxed">{v.desc}</p>
                </div>
              </motion.div>
            ))}
          </div>
        </div>
      </section>

      {/* ── PROCESO ── */}
      <section className="py-20 bg-[#E9ECEF]">
        <div className="container mx-auto px-4">
          <div className="max-w-4xl mx-auto">
            <motion.div initial={{ opacity: 0, y: 30 }} whileInView={{ opacity: 1, y: 0 }} viewport={{ once: true }} className="text-center mb-14">
              <h2 className="text-4xl md:text-5xl font-bold text-[#1A3C40] mb-4">Cómo <span className="text-[#2EBFA5]">lo hacemos</span></h2>
              <p className="text-xl text-gray-600">Negociamos en tu nombre con tu banco actual respaldados por datos del mercado</p>
            </motion.div>
            <div className="grid sm:grid-cols-2 gap-5">
              {[
                { n: 1, title: 'Estudiamos tu hipoteca y el mercado', desc: 'Analizamos tus condiciones actuales y qué puede ofrecerte el mercado para tu perfil en este momento.' },
                { n: 2, title: 'Estrategia de negociación', desc: 'Definimos la propuesta más sólida para presentar a tu banco con datos reales como respaldo.' },
                { n: 3, title: 'Negociación directa con tu entidad', desc: 'Actuamos como intermediarios con experiencia: sabemos qué pedir, cómo pedirlo y cuándo presionar.' },
                { n: 4, title: 'Firma de la novación', desc: 'Si hay acuerdo, se formaliza ante notario con las nuevas condiciones. Gestionamos todos los trámites.' },
              ].map(({ n, title, desc }) => (
                <motion.div key={n} initial={{ opacity: 0, y: 20 }} whileInView={{ opacity: 1, y: 0 }} viewport={{ once: true }} transition={{ delay: n * 0.1 }} className="bg-white rounded-2xl p-6 shadow-sm flex items-start gap-4">
                  <div className="w-10 h-10 bg-[#2EBFA5] text-white rounded-full flex items-center justify-center text-sm font-bold flex-shrink-0">{n}</div>
                  <div>
                    <p className="font-bold text-[#1A3C40] mb-1">{title}</p>
                    <p className="text-gray-600 text-sm leading-relaxed">{desc}</p>
                  </div>
                </motion.div>
              ))}
            </div>
            <motion.div initial={{ opacity: 0, y: 20 }} whileInView={{ opacity: 1, y: 0 }} viewport={{ once: true }} className="mt-10 bg-[#2EBFA5]/10 border border-[#2EBFA5]/30 rounded-2xl p-6 text-center">
              <p className="text-[#1A3C40] font-semibold text-lg">¿Tu banco ya lleva años sin ofrecerte nada mejor?</p>
              <p className="text-gray-600 mt-2 mb-4">Eso cambia cuando negocia con alguien que sabe lo que ofrece el mercado. Cuéntanos tu caso.</p>
              <Button onClick={scrollToContact} className="bg-[#1A3C40] hover:bg-[#122c30] text-white px-8 py-3 rounded-lg font-semibold">Mejorar mi hipoteca gratis</Button>
            </motion.div>
          </div>
        </div>
      </section>

      {/* ── FORMULARIO ── */}
      <section id="contacto-cambio" className="py-20 bg-[#E9ECEF]">
        <div className="container mx-auto px-4">
          <motion.div initial={{ opacity: 0, y: 30 }} whileInView={{ opacity: 1, y: 0 }} viewport={{ once: true }} className="text-center mb-14">
            <h2 className="text-4xl md:text-5xl font-bold text-[#1A3C40] mb-4">Cuéntanos tu<span className="text-[#2EBFA5] block">situación</span></h2>
            <p className="text-xl text-gray-700 max-w-3xl mx-auto">Un experto analizará tu hipoteca y te dirá si podemos mejorarla y cuánto, sin coste ni compromiso</p>
          </motion.div>
          <div className="max-w-6xl mx-auto grid lg:grid-cols-2 gap-12">
            <motion.div initial={{ opacity: 0, x: -30 }} whileInView={{ opacity: 1, x: 0 }} viewport={{ once: true }} className="bg-white rounded-2xl p-8 shadow-sm">
              <div className="flex items-center mb-6">
                <Send className="w-8 h-8 text-[#1A3C40] mr-3" />
                <h3 className="text-2xl font-bold text-[#1A3C40]">Analizar mi hipoteca</h3>
              </div>
              <form ref={formRef} onSubmit={handleSubmit} className="space-y-6">
                <div className="grid md:grid-cols-2 gap-4">
                  <div>
                    <Label htmlFor="name" className="text-gray-700 font-medium">Nombre completo *</Label>
                    <Input id="name" name="name" type="text" required value={formData.name} onChange={handleInputChange} className="mt-2" placeholder="Tu nombre completo" />
                  </div>
                  <div>
                    <Label htmlFor="phone" className="text-gray-700 font-medium">Teléfono *</Label>
                    <Input id="phone" name="phone" type="tel" required value={formData.phone} onChange={handleInputChange} className="mt-2" placeholder="600 123 456" />
                  </div>
                </div>
                <div>
                  <Label htmlFor="email" className="text-gray-700 font-medium">Email *</Label>
                  <Input id="email" name="email" type="email" required value={formData.email} onChange={handleInputChange} className="mt-2" placeholder="tu@email.com" />
                </div>
                <div className="grid md:grid-cols-2 gap-4">
                  <div>
                    <Label htmlFor="pendingCapital" className="text-gray-700 font-medium">Capital pendiente (€)</Label>
                    <Input id="pendingCapital" name="pendingCapital" type="number" value={formData.pendingCapital} onChange={handleInputChange} className="mt-2" placeholder="150000" />
                  </div>
                  <div>
                    <Label htmlFor="improvementGoal" className="text-gray-700 font-medium">¿Qué quieres mejorar?</Label>
                    <Select id="improvementGoal" name="improvementGoal" value={formData.improvementGoal} onChange={handleInputChange} className="mt-2">
                      <option value="reducir-tipo">Reducir el tipo de interés</option>
                      <option value="pasar-a-fija">Pasar de variable a fija</option>
                      <option value="ampliar-plazo">Ampliar el plazo y bajar la cuota</option>
                      <option value="reducir-vinculaciones">Reducir vinculaciones (seguros, etc.)</option>
                      <option value="otro">Otra mejora</option>
                    </Select>
                  </div>
                </div>
                <div>
                  <Label htmlFor="message" className="text-gray-700 font-medium">Cuéntanos más</Label>
                  <Textarea id="message" name="message" value={formData.message} onChange={handleInputChange} className="mt-2" placeholder="Tipo de interés actual, años que te quedan, condición que más te preocupa..." />
                </div>
                <div className="space-y-3">
                  <div className="flex items-start space-x-3">
                    <input type="checkbox" id="privacy" name="privacy" checked={formData.privacy} onChange={handleInputChange} className="mt-1 w-4 h-4 accent-[#1A3C40] border-gray-300 rounded focus:ring-[#2EBFA5] flex-shrink-0" />
                    <Label htmlFor="privacy" className="text-sm text-gray-600 leading-relaxed cursor-pointer">
                      He leído y acepto la{' '}
                      <a href="/politica-privacidad" target="_blank" rel="noopener noreferrer" className="text-[#1A3C40] font-medium hover:underline">Política de Privacidad</a>
                      {' '}<span className="text-red-500">*</span>
                    </Label>
                  </div>
                  <div className="flex items-start space-x-3">
                    <input type="checkbox" id="marketing" name="marketing" checked={formData.marketing} onChange={handleInputChange} className="mt-1 w-4 h-4 accent-[#1A3C40] border-gray-300 rounded focus:ring-[#2EBFA5] flex-shrink-0" />
                    <Label htmlFor="marketing" className="text-sm text-gray-600 leading-relaxed cursor-pointer">
                      Acepto recibir información sobre hipotecas, consejos y comunicaciones comerciales de Avanza Consulting Hipotecario SL
                    </Label>
                  </div>
                </div>
                <Button type="submit" disabled={isSubmitting} className="btn-primary w-full text-base sm:text-lg text-white py-5 sm:py-4 font-semibold">
                  {isSubmitting ? 'Enviando...' : 'Quiero mejorar mi hipoteca'}
                </Button>
              </form>
              <div className="mt-6 p-4 bg-green-100 rounded-lg border border-green-300">
                <div className="flex items-center mb-1">
                  <Shield className="w-5 h-5 text-green-600 mr-2" />
                  <span className="font-semibold text-green-800">Análisis 100% gratuito y sin compromiso</span>
                </div>
                <p className="text-sm text-green-700">Si no hay margen de mejora, te lo decimos claramente.</p>
              </div>
            </motion.div>
            <motion.div initial={{ opacity: 0, x: 30 }} whileInView={{ opacity: 1, x: 0 }} viewport={{ once: true }} className="space-y-8">
              <div className="bg-[#1A3C40] text-white rounded-2xl p-8">
                <h3 className="text-2xl font-bold mb-6">¿Prefieres llamarnos?</h3>
                <div className="space-y-6">
                  <div className="flex items-center"><Phone className="w-6 h-6 mr-4 text-[#2EBFA5]" /><div><div className="font-semibold">Teléfono de contacto</div><div className="text-gray-300">624 810 190</div></div></div>
                  <div className="flex items-center"><Mail className="w-6 h-6 mr-4 text-[#2EBFA5]" /><div><div className="font-semibold">Email</div><div className="text-gray-300">contacto@avanzahipotecas.es</div></div></div>
                  <div className="flex items-start"><Clock className="w-6 h-6 mr-4 text-[#2EBFA5] mt-1 flex-shrink-0" /><div><div className="font-semibold">Horario de atención</div><div className="text-gray-300">Lunes a Jueves: 9:00h - 14:00h y 16:00h - 19:00h</div><div className="text-gray-300">Viernes: 8:00h - 14:00h</div></div></div>
                </div>
              </div>
              <div className="bg-white rounded-2xl p-8 shadow-sm">
                <h4 className="text-xl font-bold text-[#1A3C40] mb-4">¿Qué ocurre después?</h4>
                <div className="space-y-4">
                  {[
                    { n: 1, title: 'Análisis de tu hipoteca y el mercado', desc: 'Comparamos tus condiciones actuales con lo que ofrece el mercado hoy' },
                    { n: 2, title: 'Definimos la estrategia', desc: 'Preparamos la propuesta más sólida para presentar a tu banco' },
                    { n: 3, title: 'Negociamos en tu nombre', desc: 'Hablamos directamente con tu banco con datos y experiencia' },
                    { n: 4, title: 'Firma de las nuevas condiciones', desc: 'Si hay acuerdo, formalizamos los cambios ante notario' },
                  ].map(({ n, title, desc }) => (
                    <div key={n} className="flex items-start">
                      <div className="w-8 h-8 bg-[#2EBFA5] text-white rounded-full flex items-center justify-center text-sm font-bold mr-4 mt-1 flex-shrink-0">{n}</div>
                      <div><div className="font-semibold text-[#1A3C40]">{title}</div><div className="text-gray-600 text-sm">{desc}</div></div>
                    </div>
                  ))}
                </div>
              </div>
            </motion.div>
          </div>
        </div>
      </section>

      {/* ── TESTIMONIOS ── */}
      <Testimonials />

      {/* ── TAMBIÉN TE PUEDE INTERESAR ── */}
      <section className="py-12 bg-[#F8F9FA]">
        <div className="container mx-auto px-4">
          <div className="max-w-4xl mx-auto">
            <h2 className="text-xl font-bold text-[#1A3C40] mb-5 text-center">También te puede interesar</h2>
            <div className="grid sm:grid-cols-3 gap-4">
              <Link to="/subrogacion-hipotecaria" className="bg-white rounded-2xl p-5 flex items-start gap-3 hover:shadow-md transition-shadow border border-gray-100 hover:border-[#2EBFA5]/40 group">
                <div className="w-10 h-10 bg-[#2EBFA5]/10 rounded-xl flex items-center justify-center flex-shrink-0">
                  <RefreshCw className="w-5 h-5 text-[#2EBFA5]" />
                </div>
                <div className="flex-1 min-w-0">
                  <p className="font-bold text-[#1A3C40] group-hover:text-[#2EBFA5] transition-colors text-sm">Subrogación hipotecaria</p>
                  <p className="text-xs text-gray-500 mt-0.5 leading-relaxed">¿Mejor cambiar de banco? Te explicamos cuándo compensa más</p>
                </div>
              </Link>
              <Link to="/hipoteca-100" className="bg-white rounded-2xl p-5 flex items-start gap-3 hover:shadow-md transition-shadow border border-gray-100 hover:border-[#2EBFA5]/40 group">
                <div className="w-10 h-10 bg-[#2EBFA5]/10 rounded-xl flex items-center justify-center flex-shrink-0">
                  <Home className="w-5 h-5 text-[#2EBFA5]" />
                </div>
                <div className="flex-1 min-w-0">
                  <p className="font-bold text-[#1A3C40] group-hover:text-[#2EBFA5] transition-colors text-sm">Hipoteca 100%</p>
                  <p className="text-xs text-gray-500 mt-0.5 leading-relaxed">Financia el 100% del precio de compraventa sin ahorros previos</p>
                </div>
              </Link>
              <Link to="/blog/subrogacion-hipotecaria" className="bg-white rounded-2xl p-5 flex items-start gap-3 hover:shadow-md transition-shadow border border-gray-100 hover:border-[#2EBFA5]/40 group">
                <div className="w-10 h-10 bg-[#2EBFA5]/10 rounded-xl flex items-center justify-center flex-shrink-0">
                  <FileText className="w-5 h-5 text-[#2EBFA5]" />
                </div>
                <div className="flex-1 min-w-0">
                  <p className="font-bold text-[#1A3C40] group-hover:text-[#2EBFA5] transition-colors text-sm">Guía: cambiar de banco</p>
                  <p className="text-xs text-gray-500 mt-0.5 leading-relaxed">Subrogación vs novación: cuándo compensa cada opción</p>
                </div>
              </Link>
            </div>
          </div>
        </div>
      </section>

      {/* ── FAQ ── */}
      <section className="py-20 bg-white">
        <div className="container mx-auto px-4">
          <motion.div initial={{ opacity: 0, y: 30 }} whileInView={{ opacity: 1, y: 0 }} viewport={{ once: true }} className="text-center mb-14">
            <h2 className="text-4xl md:text-5xl font-bold text-[#1A3C40] mb-4">Preguntas <span className="text-[#2EBFA5]">frecuentes</span></h2>
            <p className="text-xl text-gray-600">Todo lo que necesitas saber sobre el cambio de hipoteca</p>
          </motion.div>
          <div className="max-w-4xl mx-auto">
            {faqs.map((faq, i) => (
              <FAQItem key={i} faq={faq} index={i} openIndex={openFAQ} onToggle={(idx) => setOpenFAQ(openFAQ === idx ? null : idx)} />
            ))}
          </div>
        </div>
      </section>
    </>
  );
};

export default CambioHipotecaPage;
