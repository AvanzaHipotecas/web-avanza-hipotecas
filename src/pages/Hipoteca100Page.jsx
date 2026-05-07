import React, { useState, useRef } from 'react';
import { Helmet } from 'react-helmet';
import { motion } from 'framer-motion';
import {
  ArrowRight, CheckCircle, Users, Shield, Clock,
  Home, Percent, ChevronDown, ChevronUp, HelpCircle,
  Send, Phone, Mail, Star, FileText, TrendingUp
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

const Hipoteca100Page = () => {
  const [openFAQ, setOpenFAQ] = useState(null);
  const formRef = useRef();
  const { toast } = useToast();
  const [formData, setFormData] = useState({
    name: '', email: '', phone: '', propertyValue: '',
    mortgageType: '100-financiacion', currentSituation: '', message: '', privacy: false, marketing: false,
  });
  const [isSubmitting, setIsSubmitting] = useState(false);

  const scrollToContact = (e) => {
    e?.preventDefault();
    document.getElementById('contacto-h100')?.scrollIntoView({ behavior: 'smooth' });
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
        phone: formData.phone, property_value: formData.propertyValue || 'No especificado',
        mortgage_type: 'Hipoteca 100%', current_situation: formData.currentSituation || 'No especificado',
        message: formData.message, notion_status: 'Captación: WEB | Status: Pendiente Llamar',
      }, 'YOUR_PUBLIC_KEY');
      const [webhookRes, emailRes] = await Promise.allSettled([webhookPromise, emailPromise]);
      if (webhookRes.status === 'fulfilled' || emailRes.status === 'fulfilled') {
        toast({ title: '¡Consulta enviada!', description: 'Un experto te contactará en menos de 24 horas.' });
        setFormData({ name: '', email: '', phone: '', propertyValue: '', mortgageType: '100-financiacion', currentSituation: '', message: '', privacy: false, marketing: false });
      } else { throw new Error(); }
    } catch {
      toast({ title: 'Error al enviar', description: 'Por favor inténtalo de nuevo o llámanos directamente.', variant: 'destructive' });
    } finally { setIsSubmitting(false); }
  };

  const ventajas = [
    { icon: Percent, title: 'Financiación hasta el 100%', desc: 'Cubrimos el 100% del valor de compraventa, sin necesidad de ahorros para la entrada.' },
    { icon: Star, title: 'Comparamos más de 20 bancos', desc: 'Analizamos todas las ofertas del mercado para encontrar la que mejor se adapta a tu perfil.' },
    { icon: Clock, title: 'Plazos de hasta 40 años', desc: 'Amplía el plazo de amortización para conseguir cuotas más cómodas desde el primer mes.' },
    { icon: TrendingUp, title: 'Gestión integral', desc: 'Nos encargamos de toda la documentación y negociación con el banco. Tú solo firmas.' },
    { icon: Home, title: 'Requisitos adaptados', desc: 'Trabajamos con entidades que tienen criterios más flexibles para perfiles sin entrada.' },
    { icon: FileText, title: 'Estudio sin coste', desc: 'El estudio de tu caso es completamente gratuito y sin compromiso.' },
  ];

  const requisitos = [
    'Ingresos demostrables y estables (nómina, autónomo o pensión)',
    'Historial crediticio sin impagos activos',
    'Perfil de solvencia adecuado al importe solicitado',
    'No es necesario tener ahorros para la entrada',
  ];

  const faqs = [
    {
      question: '¿Es posible realmente conseguir el 100% de financiación?',
      answer: 'Sí, es posible. Aunque no todos los bancos la ofrecen de forma estándar, trabajamos con entidades especializadas que pueden financiar el 100% del precio de compraventa en determinados perfiles. La clave está en presentar un expediente sólido con ingresos estables y un historial crediticio limpio. Analizamos tu caso sin coste para decirte si eres candidato.',
    },
    {
      question: '¿Necesito ahorros para los gastos de compra (notaría, impuestos...)?',
      answer: 'Con la Hipoteca 100% se cubre el precio de la vivienda, pero los gastos de compraventa (notaría, registro, impuestos) suelen quedar fuera. Estos pueden suponer entre un 8% y un 12% adicional según la comunidad autónoma. Si también necesitas cubrir estos gastos, te recomendamos estudiar la opción de Hipoteca 100% + Gastos.',
    },
    {
      question: '¿Qué perfil necesito para que me concedan el 100%?',
      answer: 'Los bancos valoran principalmente la estabilidad de ingresos, la antigüedad laboral y un buen historial crediticio. No es imprescindible tener un gran sueldo, pero sí demostrar que puedes asumir la cuota mensual de forma sostenida. En Avanza Hipotecas analizamos tu perfil completo y te decimos con qué entidades tienes más posibilidades.',
    },
    {
      question: '¿Cuánto tiempo tarda el proceso desde que solicito la consulta?',
      answer: 'Tras la consulta inicial, el análisis de tu perfil lo hacemos en 24-48 horas. Si la operación es viable, iniciamos la búsqueda entre bancos y en 1-2 semanas tendrás propuestas reales. El proceso completo hasta la firma suele durar entre 4 y 8 semanas, dependiendo de la entidad elegida.',
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
        <title>Hipoteca 100% | Financia el precio completo de tu vivienda | Avanza Hipotecas</title>
        <meta name="description" content="Consigue una hipoteca que financia el 100% del precio de compraventa. Sin necesidad de ahorros para la entrada. Estudio gratuito y comparativa de más de 20 bancos." />
        <meta property="og:title" content="Hipoteca 100% | Financia el precio completo de tu vivienda | Avanza Hipotecas" />
        <meta property="og:description" content="Consigue una hipoteca que financia el 100% del precio de compraventa. Sin necesidad de ahorros para la entrada. Estudio gratuito y comparativa de más de 20 bancos." />
        <meta property="og:url" content="https://avanzahipotecas.es/hipoteca-100" />
        <meta property="og:image" content="https://avanzahipotecas.es/og-image.jpg" />
        <meta property="og:type" content="website" />
        <meta name="robots" content="index, follow" />
        <link rel="canonical" href="https://avanzahipotecas.es/hipoteca-100" />
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
                Financia el 100% del precio de compra de{' '}
                <span className="text-[#2EBFA5]">tu vivienda</span>
              </motion.h1>
              <motion.p
                initial={{ opacity: 0, y: 20 }} animate={{ opacity: 1, y: 0 }} transition={{ delay: 0.4 }}
                className="text-xl text-gray-600 mb-8 leading-relaxed"
              >
                Accede a la totalidad del precio de compraventa sin necesidad de ahorros previos para la entrada.
              </motion.p>
              <motion.div
                initial={{ opacity: 0, y: 20 }} animate={{ opacity: 1, y: 0 }} transition={{ delay: 0.6 }}
                className="flex flex-col sm:flex-row gap-4 justify-center lg:justify-start"
              >
                <Button onClick={scrollToContact} className="bg-[#1A3C40] hover:bg-[#122c30] text-white font-semibold px-8 py-4 rounded-lg text-lg flex items-center justify-center group">
                  Solicitar consulta gratuita
                  <ArrowRight className="ml-2 w-5 h-5 group-hover:translate-x-1 transition-transform" />
                </Button>
                <Button variant="outline" className="border-2 border-[#1A3C40] text-[#1A3C40] hover:bg-[#1A3C40] hover:text-white px-8 py-4 rounded-lg text-lg" onClick={() => window.location.href = '/simulador'}>
                  Simular mi hipoteca
                </Button>
              </motion.div>
              <motion.div
                initial={{ opacity: 0, y: 20 }} animate={{ opacity: 1, y: 0 }} transition={{ delay: 0.8 }}
                className="mt-8 flex flex-col sm:flex-row gap-4 justify-center lg:justify-start"
              >
                {['Estudio 100% gratuito', 'Sin compromiso', '+20 bancos comparados'].map((item) => (
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
                <img src="https://images.unsplash.com/photo-1560518883-ce09059eeffa?w=800&q=80&fm=webp" alt="Pareja recibiendo las llaves de su nueva vivienda" className="rounded-3xl shadow-2xl w-full object-cover h-[480px]" loading="lazy" />
                <div className="absolute -bottom-6 -left-6 bg-white p-4 rounded-2xl shadow-lg flex items-center space-x-3">
                  <div className="w-12 h-12 bg-[#2EBFA5] rounded-full flex items-center justify-center">
                    <Percent className="w-6 h-6 text-white" />
                  </div>
                  <div>
                    <p className="font-bold text-[#1A3C40]">Hasta el 100%</p>
                    <p className="text-sm text-gray-600">de financiación</p>
                  </div>
                </div>
              </div>
            </motion.div>
          </div>
        </div>
      </section>

      {/* ── ¿A QUIÉN VA DIRIGIDA? ── */}
      <section className="py-20 bg-[#1A3C40] text-white">
        <div className="container mx-auto px-4">
          <motion.div initial={{ opacity: 0, y: 30 }} whileInView={{ opacity: 1, y: 0 }} viewport={{ once: true }} className="text-center mb-14">
            <h2 className="text-4xl md:text-5xl font-bold mb-4">¿A quién va <span className="text-[#2EBFA5]">dirigida?</span></h2>
            <p className="text-xl text-gray-300 max-w-2xl mx-auto">Para quienes quieren comprar una vivienda sin necesidad de contar con ahorros para la entrada</p>
          </motion.div>
          <div className="grid sm:grid-cols-2 lg:grid-cols-4 gap-6 max-w-5xl mx-auto">
            {[
              { icon: Users, title: 'Sin ahorros para la entrada', desc: 'Compradores con solvencia pero sin liquidez suficiente para el pago inicial' },
              { icon: Home, title: 'Primera o segunda vivienda', desc: 'Válida tanto para vivienda habitual como para segunda residencia' },
              { icon: FileText, title: 'Cualquier situación laboral', desc: 'Trabajadores por cuenta ajena, autónomos y funcionarios' },
              { icon: Shield, title: 'Perfil solvente', desc: 'Ingresos estables e historial crediticio limpio como principales requisitos' },
            ].map((item, i) => (
              <motion.div key={i} initial={{ opacity: 0, y: 20 }} whileInView={{ opacity: 1, y: 0 }} viewport={{ once: true }} transition={{ delay: i * 0.1 }} className="bg-white/10 rounded-2xl p-6 text-center">
                <div className="w-14 h-14 bg-[#2EBFA5] rounded-full flex items-center justify-center mx-auto mb-4">
                  <item.icon className="w-7 h-7 text-white" />
                </div>
                <h3 className="font-bold text-lg mb-2">{item.title}</h3>
                <p className="text-gray-300 text-sm leading-relaxed">{item.desc}</p>
              </motion.div>
            ))}
          </div>
        </div>
      </section>

      {/* ── VENTAJAS ── */}
      <section className="py-20 bg-white">
        <div className="container mx-auto px-4">
          <motion.div initial={{ opacity: 0, y: 30 }} whileInView={{ opacity: 1, y: 0 }} viewport={{ once: true }} className="text-center mb-14">
            <h2 className="text-4xl md:text-5xl font-bold text-[#1A3C40] mb-4">Ventajas de la <span className="text-[#2EBFA5]">Hipoteca 100%</span></h2>
            <p className="text-xl text-gray-600 max-w-2xl mx-auto">Tu vivienda, sin necesidad de ahorros previos para la entrada</p>
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

      {/* ── REQUISITOS ── */}
      <section className="py-20 bg-[#E9ECEF]">
        <div className="container mx-auto px-4">
          <div className="max-w-4xl mx-auto">
            <motion.div initial={{ opacity: 0, y: 30 }} whileInView={{ opacity: 1, y: 0 }} viewport={{ once: true }} className="text-center mb-14">
              <h2 className="text-4xl md:text-5xl font-bold text-[#1A3C40] mb-4">Requisitos <span className="text-[#2EBFA5]">principales</span></h2>
              <p className="text-xl text-gray-600">Comprueba si tu perfil encaja con la Hipoteca 100%</p>
            </motion.div>
            <div className="grid sm:grid-cols-2 gap-4">
              {requisitos.map((req, i) => (
                <motion.div key={i} initial={{ opacity: 0, x: -20 }} whileInView={{ opacity: 1, x: 0 }} viewport={{ once: true }} transition={{ delay: i * 0.08 }} className="flex items-start space-x-3 bg-white rounded-xl p-5 shadow-sm">
                  <CheckCircle className="w-5 h-5 text-[#2EBFA5] flex-shrink-0 mt-0.5" />
                  <span className="text-gray-700 font-medium">{req}</span>
                </motion.div>
              ))}
            </div>
            <motion.div initial={{ opacity: 0, y: 20 }} whileInView={{ opacity: 1, y: 0 }} viewport={{ once: true }} className="mt-10 bg-[#2EBFA5]/10 border border-[#2EBFA5]/30 rounded-2xl p-6 text-center">
              <p className="text-[#1A3C40] font-semibold text-lg">¿No estás seguro de si cumples los requisitos?</p>
              <p className="text-gray-600 mt-2 mb-4">Cuéntanos tu caso y nuestros asesores lo analizan sin coste en menos de 24 horas.</p>
              <Button onClick={scrollToContact} className="bg-[#1A3C40] hover:bg-[#122c30] text-white px-8 py-3 rounded-lg font-semibold">Analizar mi caso gratis</Button>
            </motion.div>
          </div>
        </div>
      </section>

      {/* ── FORMULARIO ── */}
      <section id="contacto-h100" className="py-20 bg-[#E9ECEF]">
        <div className="container mx-auto px-4">
          <motion.div initial={{ opacity: 0, y: 30 }} whileInView={{ opacity: 1, y: 0 }} viewport={{ once: true }} className="text-center mb-14">
            <h2 className="text-4xl md:text-5xl font-bold text-[#1A3C40] mb-4">Obtén tu propuesta<span className="text-[#2EBFA5] block">personalizada</span></h2>
            <p className="text-xl text-gray-700 max-w-3xl mx-auto">Completa el formulario y un experto en Hipotecas 100% te contactará en menos de 24 horas</p>
          </motion.div>
          <div className="max-w-6xl mx-auto grid lg:grid-cols-2 gap-12">
            <motion.div initial={{ opacity: 0, x: -30 }} whileInView={{ opacity: 1, x: 0 }} viewport={{ once: true }} className="bg-white rounded-2xl p-8 shadow-sm">
              <div className="flex items-center mb-6">
                <Send className="w-8 h-8 text-[#1A3C40] mr-3" />
                <h3 className="text-2xl font-bold text-[#1A3C40]">Solicita tu consulta gratuita</h3>
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
                    <Label htmlFor="propertyValue" className="text-gray-700 font-medium">Valor de la propiedad (€)</Label>
                    <Input id="propertyValue" name="propertyValue" type="number" value={formData.propertyValue} onChange={handleInputChange} className="mt-2" placeholder="250000" />
                  </div>
                  <div>
                    <Label htmlFor="currentSituation" className="text-gray-700 font-medium">Situación laboral</Label>
                    <Select id="currentSituation" name="currentSituation" value={formData.currentSituation} onChange={handleInputChange} className="mt-2">
                      <option value="">Selecciona tu situación</option>
                      <option value="empleado-cuenta-ajena">Empleado por cuenta ajena</option>
                      <option value="autonomo">Autónomo</option>
                      <option value="funcionario">Funcionario</option>
                      <option value="otros">Otros</option>
                    </Select>
                  </div>
                </div>
                <div>
                  <Label htmlFor="message" className="text-gray-700 font-medium">Cuéntanos tu caso</Label>
                  <Textarea id="message" name="message" value={formData.message} onChange={handleInputChange} className="mt-2" placeholder="Precio de la vivienda, ingresos aproximados, si tienes ahorros para gastos..." />
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
                  {isSubmitting ? 'Enviando...' : 'Quiero mi propuesta personalizada'}
                </Button>
              </form>
              <div className="mt-6 p-4 bg-green-100 rounded-lg border border-green-300">
                <div className="flex items-center mb-1">
                  <Shield className="w-5 h-5 text-green-600 mr-2" />
                  <span className="font-semibold text-green-800">Estudio 100% gratuito y sin compromiso</span>
                </div>
                <p className="text-sm text-green-700">Contacta con nosotros para un análisis personalizado.</p>
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
                    { n: 1, title: 'Análisis de tu perfil', desc: 'Estudiamos tu situación financiera y capacidad de endeudamiento' },
                    { n: 2, title: 'Búsqueda entre +20 bancos', desc: 'Comparamos las entidades con mayor flexibilidad para el 100%' },
                    { n: 3, title: 'Presentamos tu propuesta', desc: 'Recibes un comparativo claro con las mejores opciones para ti' },
                    { n: 4, title: 'Gestión completa hasta firma', desc: 'Nos encargamos de toda la tramitación sin coste para ti' },
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
            <div className="grid sm:grid-cols-2 gap-4">
              <Link to="/hipoteca-100-gastos" className="bg-white rounded-2xl p-5 flex items-start gap-4 hover:shadow-md transition-shadow border border-gray-100 hover:border-[#2EBFA5]/40 group">
                <div className="w-10 h-10 bg-[#2EBFA5]/10 rounded-xl flex items-center justify-center flex-shrink-0">
                  <FileText className="w-5 h-5 text-[#2EBFA5]" />
                </div>
                <div className="flex-1 min-w-0">
                  <p className="font-bold text-[#1A3C40] group-hover:text-[#2EBFA5] transition-colors text-sm">Hipoteca 100% + Gastos</p>
                  <p className="text-xs text-gray-500 mt-0.5 leading-relaxed">¿Necesitas cubrir también los gastos de compraventa e impuestos? Financiamos el precio completo más los gastos</p>
                </div>
                <ArrowRight className="w-4 h-4 text-gray-400 flex-shrink-0 group-hover:text-[#2EBFA5] transition-colors" />
              </Link>
              <Link to="/hipoteca-joven" className="bg-white rounded-2xl p-5 flex items-start gap-4 hover:shadow-md transition-shadow border border-gray-100 hover:border-[#2EBFA5]/40 group">
                <div className="w-10 h-10 bg-[#2EBFA5]/10 rounded-xl flex items-center justify-center flex-shrink-0">
                  <Users className="w-5 h-5 text-[#2EBFA5]" />
                </div>
                <div className="flex-1 min-w-0">
                  <p className="font-bold text-[#1A3C40] group-hover:text-[#2EBFA5] transition-colors text-sm">Hipoteca Joven</p>
                  <p className="text-xs text-gray-500 mt-0.5 leading-relaxed">¿Tienes menos de 35 años? Accede a condiciones exclusivas y mayor financiación para tu primera vivienda</p>
                </div>
                <ArrowRight className="w-4 h-4 text-gray-400 flex-shrink-0 group-hover:text-[#2EBFA5] transition-colors" />
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
            <p className="text-xl text-gray-600">Todo lo que necesitas saber sobre la Hipoteca 100%</p>
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

export default Hipoteca100Page;
