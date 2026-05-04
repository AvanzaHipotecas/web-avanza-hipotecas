import React, { useState } from 'react';
import { motion, AnimatePresence } from 'framer-motion';
import { Home, TrendingUp, Users, Globe, Wrench, X, CheckCircle, Award, HelpCircle } from 'lucide-react';
import { Button } from '@/components/ui/button';
import { useToast } from "@/components/ui/use-toast";

const mortgageTypesData = [
  {
    icon: Home,
    title: 'Hipoteca 100%',
    short_description: 'Consigue hasta el 100% del valor de tu vivienda con condiciones exclusivas y olvídate de ahorrar durante años para la entrada.',
    full_description: 'Ideal si no dispones de los ahorros necesarios para la entrada (normalmente el 20% del valor de la vivienda). Negociamos con los bancos para que puedas financiar el 100% del precio de compra, siempre que tu perfil financiero sea solvente.',
    requirements: [
      'Perfil financiero solvente',
      'Estabilidad laboral demostrable',
      'No estar en ficheros de ASNEF',
    ],
    cta_text: 'Quiero mi hipoteca 100%',
    color: 'from-blue-500 to-blue-600'
  },
  {
    icon: TrendingUp,
    title: 'Hipoteca 100% + Gastos',
    short_description: 'Consigue financiación completa que incluye tanto el valor de la vivienda como los gastos de compraventa.',
    full_description: 'Accede a una hipoteca que cubre no solo el valor total de la vivienda, sino también los gastos asociados a la operación. La opción más completa para quienes no quieren preocuparse por la entrada ni por los costes adicionales.',
    requirements: [
      'Perfil financiero solvente',
      'Funcionarios o indefinidos con antigüedad',
      'Suele requerir una garantía adicional',
    ],
    cta_text: 'Solicitar mi hipoteca 100% + Gastos',
    color: 'from-teal-500 to-teal-600'
  },
  {
    icon: Award,
    title: 'Hipoteca Funcionarios',
    short_description: 'Tu estabilidad laboral se traduce en ventajas únicas: más financiación y mejores condiciones para tu hipoteca.',
    full_description: 'Si eres funcionario, tu perfil estable permite acceder a condiciones más ventajosas. Negociamos con los bancos para que consigas mayor financiación y tipos competitivos, adaptados a tu situación laboral.',
    requirements: [
      'Contrato como funcionario',
      'Perfil financiero solvente',
      'No estar en ficheros de ASNEF',
    ],
    cta_text: 'Quiero mi hipoteca para funcionarios',
    color: 'from-green-500 to-green-600'
  },
  {
    icon: Users,
    title: 'Hipoteca Joven',
    short_description: 'Si tienes menos de 35 años, disfruta de ventajas exclusivas para dar el paso hacia tu primera vivienda.',
    full_description: 'Diseñada para menores de 35 años que quieren acceder a su primera vivienda. Esta hipoteca ofrece condiciones especiales que facilitan dar el paso sin necesidad de años de ahorro previo.',
    requirements: [
      'Menor de 35 años',
      'Perfil financiero solvente',
      '+4 meses de antigüedad laboral',
    ],
    cta_text: 'Quiero mi hipoteca joven',
    color: 'from-orange-500 to-orange-600'
  },
  {
    icon: Globe,
    title: 'Hipoteca No Residentes',
    short_description: 'Financiación diseñada para compradores internacionales que desean adquirir una vivienda en España.',
    full_description: 'Si resides fuera de España pero quieres comprar una vivienda aquí, te ofrecemos una hipoteca adaptada a tu perfil como comprador internacional.',
    requirements: [
      'No residir fiscalmente en España',
      'Perfil financiero solvente',
      'Aportar una entrada inicial más elevada que la de un residente',
    ],
    cta_text: 'Más información',
    color: 'from-indigo-500 to-indigo-600'
  },
  {
    icon: Wrench,
    title: 'Hipoteca + Reforma',
    short_description: 'Compra y reforma tu casa con un solo préstamo.',
    full_description: 'Con una sola hipoteca podrás financiar tanto la compra de la vivienda como las reformas necesarias para dejarla a tu gusto, en una única operación.',
    requirements: [
      'Perfil financiero solvente',
      'Estabilidad laboral demostrable',
      'No estar en ficheros de ASNEF',
    ],
    cta_text: 'Quiero mi hipoteca + reforma',
    color: 'from-red-500 to-red-600'
  }
];

const MortgageTypes = () => {
  const [selectedMortgage, setSelectedMortgage] = useState(null);
  const { toast } = useToast();

  const handleCtaClick = () => {
    setSelectedMortgage(null);
    toast({
      title: "¡Solicitud en camino! 🚀",
      description: "Pronto un asesor se pondrá en contacto contigo. Por ahora, esta función es una demostración.",
    });
     setTimeout(() => {
      document.getElementById('contacto')?.scrollIntoView({ behavior: 'smooth' });
    }, 300);
  };

  const handleScrollToContact = () => {
    document.getElementById('contacto')?.scrollIntoView({ behavior: 'smooth' });
  };

  return (
    <>
      <section id="tipos" className="py-16 md:py-24 bg-[#E9ECEF]">
        <div className="container mx-auto px-4">
          <motion.div
            initial={{ opacity: 0, y: 30 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            className="text-center mb-16"
          >
            <h2 className="text-4xl md:text-5xl font-bold text-[#1A3C40] mb-6">
              Una hipoteca para
              <span className="text-[#2EBFA5] block">cada necesidad</span>
            </h2>
            <p className="text-xl text-gray-700 max-w-3xl mx-auto">
              Explora nuestras soluciones y descubre cuál se adapta mejor a tu proyecto de vida.
            </p>
          </motion.div>

          <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8 mb-12">
            {mortgageTypesData.map((type, index) => (
              <motion.div
                key={index}
                initial={{ opacity: 0, y: 30 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ delay: index * 0.05 }}
                className="bg-white rounded-2xl p-8 shadow-lg hover:shadow-2xl hover:-translate-y-2 transition-all duration-300 group flex flex-col text-center items-center"
              >
                <div className="w-20 h-20 bg-[#1A3C40] rounded-2xl flex items-center justify-center mb-6 shadow-lg group-hover:bg-[#2EBFA5] transition-colors duration-300">
                  <type.icon className="w-10 h-10 text-white" />
                </div>
                
                <h3 className="text-xl font-bold text-[#1A3C40] mb-3">{type.title}</h3>
                <p className="text-gray-600 text-base leading-relaxed flex-grow mb-6">{type.short_description}</p>
                <Button variant="outline" className="mt-auto w-full border-[#1A3C40] text-[#1A3C40] hover:bg-[#1A3C40] hover:text-white" onClick={() => setSelectedMortgage(type)}>
                    Saber más
                </Button>
              </motion.div>
            ))}
          </div>

          <motion.div
            initial={{ opacity: 0, y: 30 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ delay: 0.3 }}
            className="mt-16"
          >
            <div className="bg-white rounded-2xl p-8 shadow-lg border border-gray-200 text-center max-w-3xl mx-auto">
              <HelpCircle className="w-12 h-12 text-[#2EBFA5] mx-auto mb-4" />
              <h3 className="text-2xl font-bold text-[#1A3C40] mb-3">¿Tu caso es diferente?</h3>
              <p className="text-gray-600 mb-6">
                Tenemos soluciones personalizadas para autónomos, funcionarios, militares y muchas otras situaciones. ¡No te quedes con la duda!
              </p>
              <Button 
                className="btn-primary text-white font-bold px-8 py-3 text-lg"
                onClick={handleScrollToContact}
              >
                Consulta tu caso
              </Button>
            </div>
          </motion.div>

        </div>
      </section>

      <AnimatePresence>
        {selectedMortgage && (
          <motion.div
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            exit={{ opacity: 0 }}
            className="fixed inset-0 bg-black/70 z-50 flex items-center justify-center p-4"
            onClick={() => setSelectedMortgage(null)}
          >
            <motion.div
              initial={{ scale: 0.9, y: 20 }}
              animate={{ scale: 1, y: 0 }}
              exit={{ scale: 0.9, y: 20 }}
              transition={{ type: 'spring', stiffness: 300, damping: 30 }}
              className="bg-white rounded-2xl shadow-2xl w-full max-w-2xl max-h-[90vh] overflow-y-auto p-8 relative"
              onClick={(e) => e.stopPropagation()}
            >
              <button 
                onClick={() => setSelectedMortgage(null)}
                className="absolute top-4 right-4 text-gray-400 hover:text-gray-800 transition-colors z-10"
                aria-label="Cerrar ventana"
              >
                <X className="w-6 h-6" />
              </button>

              <div className="flex items-center mb-6">
                <div className="w-16 h-16 bg-[#1A3C40] rounded-xl flex items-center justify-center mr-5 flex-shrink-0">
                  <selectedMortgage.icon className="w-8 h-8 text-white" />
                </div>
                <h2 className="text-3xl font-bold text-[#1A3C40]">{selectedMortgage.title}</h2>
              </div>

              <p className="text-gray-600 leading-relaxed mb-6">{selectedMortgage.full_description}</p>

              <div className="bg-[#E9ECEF] rounded-lg p-6">
                <h4 className="font-bold text-[#1A3C40] mb-4 text-lg">Requisitos principales:</h4>
                <ul className="space-y-3">
                  {selectedMortgage.requirements.map((req, index) => (
                    <li key={index} className="flex items-start">
                      <CheckCircle className="w-5 h-5 text-green-500 mr-3 mt-0.5 flex-shrink-0" />
                      <span className="text-gray-700">{req}</span>
                    </li>
                  ))}
                </ul>
              </div>
              
              <div className="mt-8 text-center">
                <Button 
                  className="btn-primary text-white font-bold px-8 py-6 text-lg w-full md:w-auto"
                  onClick={handleCtaClick}
                >
                  {selectedMortgage.cta_text}
                </Button>
              </div>
            </motion.div>
          </motion.div>
        )}
      </AnimatePresence>
    </>
  );
};

export default MortgageTypes;