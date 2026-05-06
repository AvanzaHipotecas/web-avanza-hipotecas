import React, { useState, useRef } from 'react';
import { Helmet } from 'react-helmet';
import { motion } from 'framer-motion';
import {
  ArrowRight, CheckCircle, Users, Shield, Clock,
  Home, Percent, ChevronDown, ChevronUp, HelpCircle,
  Send, Phone, Mail, Star, FileText, TrendingUp, Award
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

const HipotecaFuncionariosPage = () => {
  const [openFAQ, setOpenFAQ] = useState(null);
  const formRef = useRef();
  const { toast } = useToast();
  const [formData, setFormData] = useState({
    name: '', email: '', phone: '', propertyValue: '',
    mortgageType: 'funcionario', currentSituation: 'funcionario', message: '', privacy: false, marketing: false,
  });
  const [isSubmitting, setIsSubmitting] = useState(false);

  const scrollToContact = (e) => {
    e?.preventDefault();
    document.getElementById('contacto-func')?.scrollIntoView({ behavior: 'smooth' });
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
        mortgage_type: 'Hipoteca Funcionarios', current_situation: 'Funcionario',
        message: formData.message, notion_status: 'Captación: WEB | Status: Pendiente Llamar',
      }, 'YOUR_PUBLIC_KEY');
      const [webhookRes, emailRes] = await Promise.allSettled([webhookPromise, emailPromise]);
      if (webhookRes.status === 'fulfilled' || emailRes.status === 'fulfilled') {
        toast({ title: '¡Consulta enviada!', description: 'Un experto te contactará en menos de 24 horas.' });
        setFormData({ name: '', email: '', phone: '', propertyValue: '', mortgageType: 'funcionario', currentSituation: 'funcionario', message: '', privacy: false, marketing: false });
      } else { throw new Error(); }
    } catch {
      toast({ title: 'Error al enviar', description: 'Por favor inténtalo de nuevo o llámanos directamente.', variant: 'destructive' });
    } finally { setIsSubmitting(false); }
  };

  const ventajas = [
    { icon: Percent, title: 'Financiación hasta el 100%', desc: 'Tu estabilidad como funcionario facilita acceder al 100% del valor de compraventa.' },
    { icon: Star, title: 'Comparamos más de 20 bancos', desc: 'Analizamos todas las ofertas del mercado para conseguirte las mejores condiciones con tu perfil funcionarial.' },
    { icon: Award, title: 'Tu estabilidad, tu mayor ventaja', desc: 'Los bancos valoran especialmente el empleo público. Eso se traduce en condiciones más favorables.' },
    { icon: Clock, title: 'Plazos de hasta 40 años', desc: 'Amplía el plazo de amortización para conseguir cuotas más cómodas desde el primer mes.' },
    { icon: TrendingUp, title: 'Trámites simplificados', desc: 'La nómina pública verificable agiliza la documentación y acelera la aprobación.' },
    { icon: FileText, title: 'Estudio sin coste', desc: 'El estudio de tu caso es completamente gratuito y sin compromiso.' },
  ];

  const requisitos = [
    'Ser funcionario de carrera, interino o personal estatutario',
    'Nómina pública demostrable',
    'Historial crediticio sin impagos activos',
    'Antigüedad mínima según la entidad',
  ];

  const faqs = [
    {
      question: '¿Ser funcionario me garantiza mejores condiciones hipotecarias?',
      answer: 'No es una garantía automática, pero sí es una ventaja real. La estabilidad laboral del empleo público es uno de los factores más valorados por las entidades financieras a la hora de aprobar una hipoteca y fijar las condiciones. En Avanza Hipotecas sabemos qué bancos ofrecen las mejores condiciones para funcionarios y negociamos en tu nombre.',
    },
    {
      question: '¿Pueden acceder los funcionarios interinos o en período de prácticas?',
      answer: 'Sí, aunque con matices. Los funcionarios de carrera tienen el perfil más sólido. Los interinos y el personal en prácticas también pueden acceder, pero algunos bancos requieren un período mínimo de continuidad en el puesto. Analizamos tu situación concreta y te decimos qué entidades son más favorables a tu perfil.',
    },
    {
      question: '¿Personal estatutario (sanidad, educación) también puede acceder?',
      answer: 'Absolutamente. El personal estatutario de sanidad, educación y otros servicios públicos tiene un perfil muy valorado por los bancos. Su situación laboral se equipara prácticamente a la de un funcionario de carrera a efectos hipotecarios. Trabajamos con entidades que conocen bien estos perfiles.',
    },
    {
      question: '¿Puedo conseguir el 100% siendo funcionario?',
      answer: 'Sí. La estabilidad del empleo público hace que muchos bancos sean más flexibles con la financiación para funcionarios. En combinación con un buen historial crediticio e ingresos suficientes, el 100% de financiación es una opción real que analizamos caso por caso.',
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
        <title>Hipoteca para Funcionarios | Aprovecha tu estabilidad laboral | Avanza Hipotecas</title>
        <meta name="description" content="Hipoteca para funcionarios: aprovecha tu estabilidad laboral para conseguir las mejores condiciones del mercado. Financiación hasta el 100%. Estudio gratuito con más de 20 bancos." />
        <meta property="og:title" content="Hipoteca para Funcionarios | Aprovecha tu estabilidad laboral | Avanza Hipotecas" />
        <meta property="og:description" content="Hipoteca para funcionarios: aprovecha tu estabilidad laboral para conseguir las mejores condiciones del mercado. Financiación hasta el 100%. Estudio gratuito con más de 20 bancos." />
        <meta property="og:url" content="https://avanzahipotecas.es/hipoteca-funcionarios" />
        <meta property="og:image" content="https://avanzahipotecas.es/og-image.jpg" />
        <meta property="og:type" content="website" />
        <meta name="robots" content="index, follow" />
        <link rel="canonical" href="https://avanzahipotecas.es/hipoteca-funcionarios" />
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
                Hipoteca para Funcionarios:{' '}
                <span className="text-[#2EBFA5]">aprovecha tu estabilidad laboral</span>
              </motion.h1>
              <motion.p
                initial={{ opacity: 0, y: 20 }} animate={{ opacity: 1, y: 0 }} transition={{ delay: 0.4 }}
                className="text-xl text-gray-600 mb-8 leading-relaxed"
              >
                Tu condición de funcionario te da acceso a las mejores condiciones del mercado. Negociamos por ti con más de 20 bancos.
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
                <img src="https://images.unsplash.com/photo-1497366216548-37526070297c?w=800&q=80" alt="Oficina profesional moderna que transmite estabilidad y confianza" className="rounded-3xl shadow-2xl w-full object-cover h-[480px]" />
                <div className="absolute -bottom-6 -left-6 bg-white p-4 rounded-2xl shadow-lg flex items-center space-x-3">
                  <div className="w-12 h-12 bg-[#2EBFA5] rounded-full flex items-center justify-center">
                    <Award className="w-6 h-6 text-white" />
                  </div>
                  <div>
                    <p className="font-bold text-[#1A3C40]">Empleo público</p>
                    <p className="text-sm text-gray-600">Tu mayor garantía</p>
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
            <p className="text-xl text-gray-300 max-w-2xl mx-auto">Para todos los perfiles de empleo público que quieren comprar una vivienda</p>
          </motion.div>
          <div className="grid sm:grid-cols-2 lg:grid-cols-4 gap-6 max-w-5xl mx-auto">
            {[
              { icon: Award, title: 'Funcionarios de carrera', desc: 'Administración del Estado, autonómica o local con plaza definitiva' },
              { icon: Users, title: 'Personal estatutario', desc: 'Sanitarios, docentes y otros empleados de servicios públicos' },
              { icon: FileText, title: 'Funcionarios interinos', desc: 'Con continuidad demostrable en el puesto de trabajo' },
              { icon: Shield, title: 'Opositores con plaza provisional', desc: 'En período de prácticas o pendientes de destino definitivo' },
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
            <h2 className="text-4xl md:text-5xl font-bold text-[#1A3C40] mb-4">Ventajas de la <span className="text-[#2EBFA5]">Hipoteca Funcionarios</span></h2>
            <p className="text-xl text-gray-600 max-w-2xl mx-auto">El empleo público como palanca para conseguir las mejores condiciones hipotecarias</p>
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
              <p className="text-xl text-gray-600">Comprueba si tu perfil encaja con la Hipoteca Funcionarios</p>
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
              <p className="text-[#1A3C40] font-semibold text-lg">¿Tienes dudas sobre tu perfil como funcionario?</p>
              <p className="text-gray-600 mt-2 mb-4">Cuéntanos tu situación y nuestros asesores lo analizan sin coste en menos de 24 horas.</p>
              <Button onClick={scrollToContact} className="bg-[#1A3C40] hover:bg-[#122c30] text-white px-8 py-3 rounded-lg font-semibold">Analizar mi caso gratis</Button>
            </motion.div>
          </div>
        </div>
      </section>

      {/* ── FORMULARIO ── */}
      <section id="contacto-func" className="py-20 bg-[#E9ECEF]">
        <div className="container mx-auto px-4">
          <motion.div initial={{ opacity: 0, y: 30 }} whileInView={{ opacity: 1, y: 0 }} viewport={{ once: true }} className="text-center mb-14">
            <h2 className="text-4xl md:text-5xl font-bold text-[#1A3C40] mb-4">Obtén tu propuesta<span className="text-[#2EBFA5] block">personalizada</span></h2>
            <p className="text-xl text-gray-700 max-w-3xl mx-auto">Completa el formulario y un experto en hipotecas para funcionarios te contactará en menos de 24 horas</p>
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
                    <Label htmlFor="currentSituation" className="text-gray-700 font-medium">Tipo de empleo público</Label>
                    <Select id="currentSituation" name="currentSituation" value={formData.currentSituation} onChange={handleInputChange} className="mt-2">
                      <option value="funcionario">Funcionario de carrera</option>
                      <option value="interino">Funcionario interino</option>
                      <option value="estatutario">Personal estatutario (sanidad/educación)</option>
                      <option value="practicas">En período de prácticas</option>
                    </Select>
                  </div>
                </div>
                <div>
                  <Label htmlFor="message" className="text-gray-700 font-medium">Cuéntanos tu caso</Label>
                  <Textarea id="message" name="message" value={formData.message} onChange={handleInputChange} className="mt-2" placeholder="Administración, años de antigüedad, precio de la vivienda que buscas..." />
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
                    { n: 1, title: 'Análisis de tu perfil funcionarial', desc: 'Estudiamos tu tipo de empleo, antigüedad e ingresos' },
                    { n: 2, title: 'Búsqueda entre +20 bancos', desc: 'Seleccionamos las entidades con mejores condiciones para funcionarios' },
                    { n: 3, title: 'Presentamos tu propuesta', desc: 'Recibes un comparativo claro con las mejores opciones para tu perfil' },
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
              <Link to="/hipoteca-joven" className="bg-white rounded-2xl p-5 flex items-start gap-4 hover:shadow-md transition-shadow border border-gray-100 hover:border-[#2EBFA5]/40 group">
                <div className="w-10 h-10 bg-[#2EBFA5]/10 rounded-xl flex items-center justify-center flex-shrink-0">
                  <Users className="w-5 h-5 text-[#2EBFA5]" />
                </div>
                <div className="flex-1 min-w-0">
                  <p className="font-bold text-[#1A3C40] group-hover:text-[#2EBFA5] transition-colors text-sm">Hipoteca Joven</p>
                  <p className="text-xs text-gray-500 mt-0.5 leading-relaxed">¿Además eres menor de 35 años? Combina las ventajas de funcionario con las condiciones exclusivas para jóvenes</p>
                </div>
                <ArrowRight className="w-4 h-4 text-gray-400 flex-shrink-0 group-hover:text-[#2EBFA5] transition-colors" />
              </Link>
              <Link to="/hipoteca-100" className="bg-white rounded-2xl p-5 flex items-start gap-4 hover:shadow-md transition-shadow border border-gray-100 hover:border-[#2EBFA5]/40 group">
                <div className="w-10 h-10 bg-[#2EBFA5]/10 rounded-xl flex items-center justify-center flex-shrink-0">
                  <Home className="w-5 h-5 text-[#2EBFA5]" />
                </div>
                <div className="flex-1 min-w-0">
                  <p className="font-bold text-[#1A3C40] group-hover:text-[#2EBFA5] transition-colors text-sm">Hipoteca 100%</p>
                  <p className="text-xs text-gray-500 mt-0.5 leading-relaxed">Si no dispones de ahorros para la entrada, descubre cómo financiar el 100% del precio de compraventa</p>
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
            <p className="text-xl text-gray-600">Todo lo que necesitas saber sobre la Hipoteca para Funcionarios</p>
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

export default HipotecaFuncionariosPage;
