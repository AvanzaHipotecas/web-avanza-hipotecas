import React, { useState } from 'react';
import { motion } from 'framer-motion';
import { ChevronDown, ChevronUp, HelpCircle } from 'lucide-react';
import { Button } from '@/components/ui/button';

const FAQ = () => {
  const [openIndex, setOpenIndex] = useState(null);

  const faqs = [
    {
      question: '¿Qué es la FEIN y por qué es importante?',
      answer: 'La FEIN (Ficha Europea de Información Normalizada) es un documento obligatorio que los bancos deben proporcionar antes de firmar una hipoteca. Contiene información detallada sobre las condiciones del préstamo, incluyendo el tipo de interés, comisiones, y el coste total del crédito. Es importante porque te permite comparar ofertas de diferentes entidades de forma transparente.'
    },
    {
      question: '¿Puedo conseguir una hipoteca sin nómina?',
      answer: 'Sí, es posible conseguir una hipoteca sin nómina tradicional. Los bancos pueden aceptar otras formas de ingresos como: ingresos por alquiler, pensiones, prestaciones por desempleo, ingresos como autónomo, o avales de terceros. Nuestros asesores especializados te ayudarán a encontrar la mejor opción según tu situación específica.'
    },
    {
      question: '¿Cuánto tiempo tarda el proceso de aprobación?',
      answer: 'El proceso completo suele tardar entre 4 y 8 semanas, dependiendo de la complejidad del caso y la entidad elegida. Nosotros agilizamos este proceso gestionando toda la documentación y manteniendo comunicación directa con los bancos, lo que puede reducir los tiempos hasta en un 70%.'
    },
    {
      question: '¿Qué gastos adicionales debo considerar?',
      answer: 'Además de la hipoteca, debes considerar: tasación (300-600€), notaría (0.1-0.5% del precio), registro de la propiedad (0.1-0.3%), gestoría (300-800€), seguro de hogar y vida, e impuestos (ITP o IVA según el caso). Nuestro servicio incluye un desglose detallado de todos estos gastos.'
    },
    {
      question: '¿Puedo cambiar de banco si ya tengo una hipoteca?',
      answer: 'Sí, puedes realizar una subrogación o novación de tu hipoteca actual. Esto puede ser beneficioso si encuentras mejores condiciones en otra entidad. Analizamos tu caso actual y te ayudamos a determinar si el cambio te resultará rentable, considerando todos los gastos asociados.'
    },
    {
      question: '¿Qué diferencia hay entre tipo fijo y variable?',
      answer: 'Tipo fijo: el interés se mantiene constante durante toda la vida del préstamo, ofreciendo estabilidad en las cuotas. Tipo variable: el interés cambia según el Euríbor, pudiendo subir o bajar. También existe el tipo mixto, que combina ambos. Te asesoramos sobre cuál es mejor según tu perfil de riesgo y situación financiera.'
    }
  ];

  const toggleFAQ = (index) => {
    setOpenIndex(openIndex === index ? null : index);
  };

  return (
    <section className="section-padding bg-[#E9ECEF]">
      <div className="container mx-auto px-4">
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          className="text-center mb-16"
        >
          <h2 className="text-4xl md:text-5xl font-bold text-[#1A3C40] mb-6">
            Preguntas
            <span className="text-[#2EBFA5] block">Frecuentes</span>
          </h2>
          <p className="text-xl text-gray-700 max-w-3xl mx-auto">
            Resolvemos las dudas más comunes sobre hipotecas y nuestro servicio
          </p>
        </motion.div>

        <div className="max-w-4xl mx-auto">
          {faqs.map((faq, index) => (
            <motion.div
              key={index}
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ delay: index * 0.1 }}
              className="mb-4"
            >
              <div className="bg-white rounded-xl shadow-custom overflow-hidden">
                <button
                  onClick={() => toggleFAQ(index)}
                  className="w-full px-6 py-6 text-left flex items-center justify-between hover:bg-gray-50 transition-colors duration-200"
                >
                  <div className="flex items-center">
                    <HelpCircle className="w-6 h-6 text-[#2EBFA5] mr-4 flex-shrink-0" />
                    <h3 className="text-lg font-semibold text-[#1A3C40] pr-4">
                      {faq.question}
                    </h3>
                  </div>
                  {openIndex === index ? (
                    <ChevronUp className="w-6 h-6 text-gray-500 flex-shrink-0" />
                  ) : (
                    <ChevronDown className="w-6 h-6 text-gray-500 flex-shrink-0" />
                  )}
                </button>
                
                {openIndex === index && (
                  <motion.div
                    initial={{ opacity: 0, height: 0 }}
                    animate={{ opacity: 1, height: 'auto' }}
                    exit={{ opacity: 0, height: 0 }}
                    transition={{ duration: 0.3 }}
                    className="px-6 pb-6"
                  >
                    <div className="pl-10 pr-4">
                      <p className="text-gray-600 leading-relaxed">
                        {faq.answer}
                      </p>
                    </div>
                  </motion.div>
                )}
              </div>
            </motion.div>
          ))}
        </div>

        <motion.div
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          className="text-center mt-12"
        >
          <div className="bg-[#1A3C40] text-white rounded-2xl p-8 max-w-2xl mx-auto">
            <h3 className="text-2xl font-bold mb-4">¿Tienes más preguntas?</h3>
            <p className="text-gray-300 mb-6">
              Nuestros asesores expertos están disponibles para resolver cualquier duda específica sobre tu caso.
            </p>
            <Button
              onClick={() => document.getElementById('contacto').scrollIntoView({ behavior: 'smooth' })}
              className="bg-[#2EBFA5] hover:bg-[#25a28b] text-white font-semibold px-8 py-3 rounded-lg transition-colors duration-200"
            >
              Consulta gratuita
            </Button>
          </div>
        </motion.div>
      </div>
    </section>
  );
};

export default FAQ;