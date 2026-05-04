import React from 'react';
import { Helmet } from 'react-helmet';
import { motion } from 'framer-motion';
import { ArrowRight, Search, TrendingUp, Users, CheckCircle, MessageSquare, Zap, Heart } from 'lucide-react';
import { Button } from '@/components/ui/button';
import { useNavigate } from 'react-router-dom';

const SobreNosotrosPage = () => {
  const navigate = useNavigate();

  const scrollToContact = () => {
    navigate('/');
    setTimeout(() => {
      document.getElementById('contacto')?.scrollIntoView({ behavior: 'smooth' });
    }, 100);
  };

  const cards = [
    {
      icon: Search,
      title: 'Analizamos tu caso real',
      desc: 'No el ideal. El tuyo. Entendemos tu situación financiera y detectamos qué es viable de verdad antes de dar ningún paso.',
    },
    {
      icon: TrendingUp,
      title: 'Filtramos y negociamos',
      desc: 'Comparamos entre más de 20 entidades y negociamos directamente con los bancos para conseguir la mejor operación según tu perfil.',
    },
    {
      icon: Users,
      title: 'Te acompañamos hasta la firma',
      desc: 'Estamos contigo en cada paso del proceso. Sin rodeos, sin promesas vacías, con comunicación directa y enfoque práctico.',
    },
  ];

  const steps = [
    { n: 1, title: 'Estudio de viabilidad real',          desc: 'Analizamos tu perfil financiero en profundidad para saber desde el primer momento qué es posible.' },
    { n: 2, title: 'Estrategia adaptada a tu perfil',     desc: 'Diseñamos la mejor aproximación según tu situación laboral, ahorros y objetivo de compra.' },
    { n: 3, title: 'Gestión y negociación con entidades', desc: 'Presentamos tu expediente a los bancos adecuados y negociamos las condiciones en tu nombre.' },
    { n: 4, title: 'Seguimiento hasta la firma',          desc: 'Coordinamos todos los pasos hasta el día de la firma. Tú solo tienes que aparecer a firmar.' },
  ];

  const expectations = [
    { icon: MessageSquare, text: 'Claridad desde el primer momento' },
    { icon: Zap,           text: 'Comunicación directa y sin tecnicismos' },
    { icon: Search,        text: 'Enfoque práctico, no teoría' },
    { icon: Heart,         text: 'Implicación real en tu operación' },
  ];

  return (
    <>
      <Helmet>
        <title>Sobre nosotros | Avanza Hipotecas — Tu equipo de intermediación hipotecaria</title>
        <meta
          name="description"
          content="Somos un equipo especializado en intermediación hipotecaria. No somos un comparador: negociamos por ti con más de 20 bancos para que firmes en las mejores condiciones posibles."
        />
        <meta name="robots" content="index, follow" />
        <link rel="canonical" href="https://avanzahipotecas.es/sobre-nosotros" />
      </Helmet>

      {/* ── HERO ── */}
      <section className="min-h-[70vh] flex items-center relative overflow-hidden bg-white pt-28 pb-16">
        <div className="absolute inset-0 bg-gradient-to-br from-[#2EBFA5]/5 to-white pointer-events-none" />
        <div className="container mx-auto px-4 relative z-10">
          <div className="max-w-4xl mx-auto text-center">
            <motion.h1
              initial={{ opacity: 0, y: 30 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.7 }}
              className="text-4xl md:text-5xl lg:text-6xl font-bold leading-tight mb-6 text-[#1A3C40]"
            >
              No somos un comparador.{' '}
              <span className="text-[#2EBFA5]">Somos tu equipo.</span>
            </motion.h1>
            <motion.p
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ delay: 0.3, duration: 0.7 }}
              className="text-xl md:text-2xl text-gray-600 leading-relaxed max-w-3xl mx-auto"
            >
              Especializados en intermediación hipotecaria con un único objetivo: que firmes tu hipoteca en las mejores condiciones posibles.
            </motion.p>
            <motion.div
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ delay: 0.5 }}
              className="mt-10 flex justify-center gap-8"
            >
              {['+20 bancos', 'Estudio gratuito', 'Sin compromiso'].map((item) => (
                <div key={item} className="flex items-center gap-2">
                  <CheckCircle className="w-5 h-5 text-[#2EBFA5]" />
                  <span className="text-gray-700 font-medium">{item}</span>
                </div>
              ))}
            </motion.div>
          </div>
        </div>
      </section>

      {/* ── QUIÉNES SOMOS ── */}
      <section className="py-20 bg-[#1A3C40] text-white">
        <div className="container mx-auto px-4">
          <div className="max-w-5xl mx-auto grid lg:grid-cols-2 gap-14 items-center">
            <motion.div
              initial={{ opacity: 0, x: -30 }}
              whileInView={{ opacity: 1, x: 0 }}
              viewport={{ once: true }}
            >
              <h2 className="text-4xl md:text-5xl font-bold mb-8">
                ¿Quiénes <span className="text-[#2EBFA5]">somos?</span>
              </h2>
              <div className="space-y-4 text-gray-300 leading-relaxed text-lg">
                <p>
                  En Avanza Hipotecas somos un equipo especializado en intermediación hipotecaria. No trabajamos como una inmobiliaria ni como un comparador genérico. Nos centramos en una sola cosa: conseguir que nuestros clientes firmen su hipoteca en las mejores condiciones posibles, sin perder tiempo ni cometer errores que cuestan miles de euros.
                </p>
                <p>
                  Sabemos cómo funciona el proceso por dentro. Y también sabemos algo importante: la mayoría de personas toma decisiones hipotecarias con información incompleta o directamente equivocada. Ahí es donde entramos nosotros.
                </p>
              </div>
            </motion.div>
            <motion.div
              initial={{ opacity: 0, x: 30 }}
              whileInView={{ opacity: 1, x: 0 }}
              viewport={{ once: true }}
              className="grid grid-cols-2 gap-4"
            >
              {[
                { num: '+20', label: 'bancos comparados' },
                { num: '100%', label: 'estudio gratuito' },
                { num: '24h', label: 'respuesta garantizada' },
                { num: '1', label: 'único objetivo: tu hipoteca' },
              ].map((stat, i) => (
                <div key={i} className="bg-white/10 rounded-2xl p-6 text-center">
                  <p className="text-3xl font-bold text-[#2EBFA5] mb-1">{stat.num}</p>
                  <p className="text-sm text-gray-300 leading-tight">{stat.label}</p>
                </div>
              ))}
            </motion.div>
          </div>
        </div>
      </section>

      {/* ── QUÉ HACEMOS REALMENTE ── */}
      <section className="py-20 bg-white">
        <div className="container mx-auto px-4">
          <motion.div
            initial={{ opacity: 0, y: 30 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            className="text-center mb-14"
          >
            <h2 className="text-4xl md:text-5xl font-bold text-[#1A3C40] mb-4">
              Qué hacemos <span className="text-[#2EBFA5]">realmente</span>
            </h2>
          </motion.div>
          <div className="grid md:grid-cols-3 gap-8 max-w-5xl mx-auto">
            {cards.map((card, i) => (
              <motion.div
                key={i}
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ delay: i * 0.15 }}
                className="bg-[#E9ECEF] rounded-2xl p-8 flex flex-col"
              >
                <div className="w-14 h-14 bg-[#2EBFA5] rounded-2xl flex items-center justify-center mb-6">
                  <card.icon className="w-7 h-7 text-white" />
                </div>
                <h3 className="text-xl font-bold text-[#1A3C40] mb-3">{card.title}</h3>
                <p className="text-gray-600 leading-relaxed flex-1">{card.desc}</p>
              </motion.div>
            ))}
          </div>
        </div>
      </section>

      {/* ── POR QUÉ TRABAJAMOS ASÍ ── */}
      <section className="py-20 bg-[#E9ECEF]">
        <div className="container mx-auto px-4">
          <div className="max-w-4xl mx-auto">
            <motion.div
              initial={{ opacity: 0, y: 30 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              className="text-center mb-10"
            >
              <h2 className="text-4xl md:text-5xl font-bold text-[#1A3C40] mb-4">
                Por qué <span className="text-[#2EBFA5]">trabajamos así</span>
              </h2>
            </motion.div>
            <motion.div
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              className="bg-white rounded-2xl p-10 shadow-sm"
            >
              <p className="text-xl text-gray-700 leading-relaxed text-center">
                Porque vemos constantemente los mismos errores: personas que pierden oportunidades por ir al banco equivocado, clientes que aceptan condiciones peores por desconocimiento, y procesos que se alargan meses sin necesidad.
              </p>
              <p className="text-xl font-semibold text-[#1A3C40] leading-relaxed text-center mt-6">
                Nuestro trabajo es evitar exactamente eso.
              </p>
            </motion.div>
          </div>
        </div>
      </section>

      {/* ── CÓMO TRABAJAMOS ── */}
      <section className="py-20 bg-white">
        <div className="container mx-auto px-4">
          <motion.div
            initial={{ opacity: 0, y: 30 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            className="text-center mb-14"
          >
            <h2 className="text-4xl md:text-5xl font-bold text-[#1A3C40] mb-4">
              Cómo <span className="text-[#2EBFA5]">trabajamos</span>
            </h2>
          </motion.div>
          <div className="max-w-4xl mx-auto grid sm:grid-cols-2 gap-6">
            {steps.map((step, i) => (
              <motion.div
                key={i}
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ delay: i * 0.1 }}
                className="flex items-start gap-5 p-6 rounded-2xl border border-gray-100 hover:border-[#2EBFA5]/40 hover:shadow-md transition-all duration-200"
              >
                <div className="w-12 h-12 bg-[#2EBFA5] text-white rounded-full flex items-center justify-center text-xl font-bold flex-shrink-0">
                  {step.n}
                </div>
                <div>
                  <h3 className="font-bold text-[#1A3C40] text-lg mb-1">{step.title}</h3>
                  <p className="text-gray-600 text-sm leading-relaxed">{step.desc}</p>
                </div>
              </motion.div>
            ))}
          </div>
        </div>
      </section>

      {/* ── QUÉ PUEDES ESPERAR ── */}
      <section className="py-20 bg-[#E9ECEF]">
        <div className="container mx-auto px-4">
          <motion.div
            initial={{ opacity: 0, y: 30 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            className="text-center mb-14"
          >
            <h2 className="text-4xl md:text-5xl font-bold text-[#1A3C40] mb-4">
              Qué puedes <span className="text-[#2EBFA5]">esperar de nosotros</span>
            </h2>
          </motion.div>
          <div className="max-w-3xl mx-auto">
            <div className="grid sm:grid-cols-2 gap-4 mb-10">
              {expectations.map((item, i) => (
                <motion.div
                  key={i}
                  initial={{ opacity: 0, x: -20 }}
                  whileInView={{ opacity: 1, x: 0 }}
                  viewport={{ once: true }}
                  transition={{ delay: i * 0.1 }}
                  className="flex items-center gap-4 bg-white rounded-xl p-5 shadow-sm"
                >
                  <div className="w-10 h-10 bg-[#2EBFA5]/10 rounded-xl flex items-center justify-center flex-shrink-0">
                    <item.icon className="w-5 h-5 text-[#2EBFA5]" />
                  </div>
                  <span className="font-semibold text-[#1A3C40]">{item.text}</span>
                </motion.div>
              ))}
            </div>
            <motion.div
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              className="bg-[#1A3C40] text-white rounded-2xl p-8 text-center"
            >
              <p className="text-xl font-semibold leading-relaxed">
                "Si tu caso es viable, vamos a ir a por ello.<br className="hidden sm:block" />
                Si no lo es, también te lo vamos a decir."
              </p>
            </motion.div>
          </div>
        </div>
      </section>

      {/* ── CTA FINAL ── */}
      <section className="py-24 bg-[#1A3C40] text-white">
        <div className="container mx-auto px-4">
          <motion.div
            initial={{ opacity: 0, y: 30 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            className="max-w-3xl mx-auto text-center"
          >
            <h2 className="text-3xl md:text-4xl font-bold mb-6 leading-tight">
              Si estás pensando en comprar vivienda o mejorar tu hipoteca, analizamos tu caso de forma{' '}
              <span className="text-[#2EBFA5]">gratuita y sin compromiso.</span>
            </h2>
            <Button
              onClick={scrollToContact}
              className="bg-[#2EBFA5] hover:bg-[#25a28b] text-white font-semibold px-10 py-4 rounded-lg text-lg flex items-center gap-2 mx-auto"
            >
              Solicita tu estudio gratuito
              <ArrowRight className="w-5 h-5" />
            </Button>
          </motion.div>
        </div>
      </section>
    </>
  );
};

export default SobreNosotrosPage;
