import React from 'react';
import { motion } from 'framer-motion';
import { Home, Phone, Mail, MapPin, Shield, FileText, Users, Instagram, BadgeCheck } from 'lucide-react';
const Footer = () => {
  const currentYear = new Date().getFullYear();
const footerLinks = {
    servicios: [{
      name: 'Hipoteca 100%',
      href: '/hipoteca-100'
    }, {
      name: 'Hipoteca 100% + Gastos',
      href: '/hipoteca-100-gastos'
    }, {
      name: 'Hipoteca Joven',
      href: '/hipoteca-joven'
    }, {
      name: 'Hipoteca Funcionarios',
      href: '/hipoteca-funcionarios'
    }, {
      name: 'Hipoteca No Residentes',
      href: '/hipoteca-no-residentes'
    }, {
      name: 'Hipoteca + Reforma',
      href: '/hipoteca-reforma'
    }],
    recursos: [{
      name: 'Simulador hipoteca',
      href: '/simulador'
    }, {
      name: 'Calculadora gastos',
      href: '/simulador'
    }, {
      name: 'Blog hipotecario',
      href: '/blog'
    }, {
      name: 'Preguntas frecuentes',
      href: '/#faq'
    }],
    legal: [{
      name: 'Aviso legal',
      href: '/aviso-legal'
    }, {
      name: 'Política de privacidad',
      href: '/politica-privacidad'
    }, {
      name: 'Política de cookies',
      href: '/politica-cookies'
    }]
  };
  return <footer className="bg-[#1A3C40] text-white">
          <div className="container mx-auto px-4 py-16">
            <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-8 mb-12">
              <motion.div initial={{
          opacity: 0,
          y: 30
        }} whileInView={{
          opacity: 1,
          y: 0
        }} viewport={{
          once: true
        }} className="lg:col-span-1">
                <div className="flex items-center space-x-2 mb-6">
                   <img src="https://horizons-cdn.hostinger.com/46b65610-3610-4aaa-b75e-344adbd2c5fe/logofooter-ohN7n.png" alt="Logo de Avanza Hipotecas para el pie de página" className="h-14 w-auto" />
                </div>
                
                <p className="text-gray-300 mb-6 leading-relaxed">
                  Especialistas en conseguir las mejores condiciones hipotecarias. 
                  Tu asesor personal te acompaña en todo el proceso.
                </p>
                
                <div className="space-y-3">
                  <div className="flex items-center text-gray-300">
                    <Phone className="w-5 h-5 mr-3 text-[#2EBFA5]" />
                    <span>624 810 190</span>
                  </div>
                  <div className="flex items-center text-gray-300">
                     <Mail className="w-5 h-5 mr-3 text-[#2EBFA5]" />
                    <span>contacto@avanzahipotecas.es</span>
                  </div>
                  <div className="flex items-center text-gray-300">
                    <MapPin className="w-5 h-5 mr-3 text-[#2EBFA5]" />
                    <span>Madrid, España</span>
                  </div>
                </div>

                <div className="mt-6">
                  <a
                    href="https://www.instagram.com/avanzahipotecas"
                    target="_blank"
                    rel="noopener noreferrer"
                    className="inline-flex items-center justify-center w-10 h-10 rounded-full bg-white/10 hover:bg-[#2EBFA5] transition-colors duration-200"
                    aria-label="Instagram de Avanza Hipotecas"
                  >
                    <Instagram className="w-5 h-5 text-white" />
                  </a>
                </div>
              </motion.div>

              <motion.div initial={{
          opacity: 0,
          y: 30
        }} whileInView={{
          opacity: 1,
          y: 0
        }} viewport={{
          once: true
        }} transition={{
          delay: 0.1
        }}>
                <h3 className="text-lg font-semibold mb-6 flex items-center">
                  <Home className="w-5 h-5 mr-2 text-[#2EBFA5]" />
                  Servicios
                </h3>
                <ul className="space-y-3">
                  {footerLinks.servicios.map((link, index) => <li key={index}>
                      <a href={link.href} className="text-gray-300 hover:text-white transition-colors duration-200 text-sm">
                        {link.name}
                      </a>
                    </li>)}
                </ul>
              </motion.div>

              <motion.div initial={{
          opacity: 0,
          y: 30
        }} whileInView={{
          opacity: 1,
          y: 0
        }} viewport={{
          once: true
        }} transition={{
          delay: 0.2
        }}>
                <h3 className="text-lg font-semibold mb-6 flex items-center">
                  <Users className="w-5 h-5 mr-2 text-[#2EBFA5]" />
                  Recursos
                </h3>
                <ul className="space-y-3">
                  {footerLinks.recursos.map((link, index) => <li key={index}>
                      <a href={link.href} className="text-gray-300 hover:text-white transition-colors duration-200 text-sm">
                        {link.name}
                      </a>
                    </li>)}
                </ul>
              </motion.div>

              <motion.div initial={{
          opacity: 0,
          y: 30
        }} whileInView={{
          opacity: 1,
          y: 0
        }} viewport={{
          once: true
        }} transition={{
          delay: 0.3
        }}>
                <h3 className="text-lg font-semibold mb-6 flex items-center">
                  <Shield className="w-5 h-5 mr-2 text-[#2EBFA5]" />
                  Legal
                </h3>
                <ul className="space-y-3">
                  {footerLinks.legal.map((link, index) => <li key={index}>
                      <a href={link.href} className="text-gray-300 hover:text-white transition-colors duration-200 text-sm">
                        {link.name}
                      </a>
                    </li>)}
                </ul>
              </motion.div>
            </div>

            <div className="border-t border-gray-700 pt-8">
              <div className="grid md:grid-cols-2 gap-6 items-center">
                <motion.div initial={{
            opacity: 0,
            x: -30
          }} whileInView={{
            opacity: 1,
            x: 0
          }} viewport={{
            once: true
          }} className="text-sm text-gray-400">
                  <p>© {currentYear} Avanza Hipotecas. Todos los derechos reservados.</p>
                  <p className="mt-1">
                    Estudio inicial gratuito.
                  </p>
                </motion.div>

                <motion.div initial={{
            opacity: 0,
            x: 30
          }} whileInView={{
            opacity: 1,
            y: 0
          }} viewport={{
            once: true
          }} className="flex items-center justify-start md:justify-end space-x-6">
                  <div className="flex items-center text-sm text-gray-400">
                    <Shield className="w-4 h-4 mr-2 text-green-400" />
                    <span>Cumplimiento RGPD</span>
                  </div>
                  <div className="flex items-center text-sm text-gray-400">
                    <FileText className="w-4 h-4 mr-2 text-gray-200" />
                    <span>Registro Mercantil</span>
                  </div>
                </motion.div>
              </div>
            </div>

            <motion.div initial={{
        opacity: 0,
        y: 20
      }} whileInView={{
        opacity: 1,
        y: 0
      }} viewport={{
        once: true
      }} className="mt-6 flex items-center gap-2 text-sm text-gray-300">
              <BadgeCheck className="w-4 h-4 text-[#2EBFA5] flex-shrink-0" />
              <span>Intermediario de crédito inmobiliario inscrito en el Registro del Banco de España con el número <strong>E515</strong></span>
            </motion.div>

            <motion.div initial={{
        opacity: 0,
        y: 20
      }} whileInView={{
        opacity: 1,
        y: 0
      }} viewport={{
        once: true
      }} className="mt-4 p-4 bg-gray-800/50 rounded-lg">
              <p className="text-xs text-gray-400 leading-relaxed">
                <strong>Aviso importante:</strong> Avanza Hipotecas actúa como intermediario de crédito, no como prestamista. 
                Las condiciones finales dependerán de la evaluación de cada entidad financiera. Los tipos de interés mostrados 
                son orientativos y pueden variar según el perfil del cliente. El estudio inicial es gratuito y sin compromiso.
              </p>
            </motion.div>
          </div>
        </footer>;
};
export default Footer;