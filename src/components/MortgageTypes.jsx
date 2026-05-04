import React from 'react';
import { motion } from 'framer-motion';
import { Home, TrendingUp, Users, Globe, Wrench, Award, HelpCircle, ArrowRight } from 'lucide-react';
import { Link } from 'react-router-dom';
import { Button } from '@/components/ui/button';

const mortgageTypesData = [
  {
    icon: Home,
    title: 'Hipoteca 100%',
    short_description: 'Consigue hasta el 100% del valor de tu vivienda con condiciones exclusivas y olvídate de ahorrar durante años para la entrada.',
    href: '/hipoteca-100',
  },
  {
    icon: TrendingUp,
    title: 'Hipoteca 100% + Gastos',
    short_description: 'Consigue financiación completa que incluye tanto el valor de la vivienda como los gastos de compraventa.',
    href: '/hipoteca-100-gastos',
  },
  {
    icon: Award,
    title: 'Hipoteca Funcionarios',
    short_description: 'Tu estabilidad laboral se traduce en ventajas únicas: más financiación y mejores condiciones para tu hipoteca.',
    href: '/hipoteca-funcionarios',
  },
  {
    icon: Users,
    title: 'Hipoteca Joven',
    short_description: 'Si tienes menos de 35 años, disfruta de ventajas exclusivas para dar el paso hacia tu primera vivienda.',
    href: '/hipoteca-joven',
  },
  {
    icon: Globe,
    title: 'Hipoteca No Residentes',
    short_description: 'Financiación diseñada para compradores internacionales que desean adquirir una vivienda en España.',
    href: '/hipoteca-no-residentes',
  },
  {
    icon: Wrench,
    title: 'Hipoteca + Reforma',
    short_description: 'Compra y reforma tu casa con un solo préstamo.',
    href: '/hipoteca-reforma',
  },
];

const MortgageTypes = () => (
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
            <Button asChild variant="outline" className="mt-auto w-full border-[#1A3C40] text-[#1A3C40] hover:bg-[#1A3C40] hover:text-white">
              <Link to={type.href} className="flex items-center justify-center gap-2">
                Saber más <ArrowRight className="w-4 h-4" />
              </Link>
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
          <Button asChild className="btn-primary text-white font-bold px-8 py-3 text-lg">
            <Link to="/#contacto">Consulta tu caso</Link>
          </Button>
        </div>
      </motion.div>
    </div>
  </section>
);

export default MortgageTypes;
