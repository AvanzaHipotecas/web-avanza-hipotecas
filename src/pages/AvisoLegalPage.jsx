import React from 'react';
import { Helmet } from 'react-helmet';
import { motion } from 'framer-motion';
import { FileText, Building2, Scale, Shield, Globe, Lock, Briefcase, BookOpen } from 'lucide-react';
import { Link } from 'react-router-dom';

const sections = [
  {
    icon: Building2,
    number: 1,
    title: 'DATOS IDENTIFICATIVOS',
    content: (
      <>
        <p className="mb-4">
          En cumplimiento con el deber de información recogido en la Ley de Servicios de la Sociedad
          de la Información (LSSI-CE), se informa que:
        </p>
        <div className="bg-[#E9ECEF] rounded-xl overflow-hidden">
          {[
            { label: 'Titular', value: 'Avanza Consulting Hipotecario SL' },
            { label: 'NIF/CIF', value: 'B22555189' },
            { label: 'Domicilio social', value: 'Paseo de la Castellana, 194 bajo B (Madrid-28046)' },
            { label: 'Correo electrónico', value: 'contacto@avanzahipotecas.es' },
          ].map((row, i) => (
            <div key={i} className={`flex flex-col sm:flex-row px-5 py-3 gap-1 ${i % 2 === 0 ? 'bg-white' : 'bg-[#E9ECEF]'}`}>
              <span className="font-semibold text-[#1A3C40] text-sm w-48 flex-shrink-0">{row.label}</span>
              <span className="text-gray-700 text-sm">{row.value}</span>
            </div>
          ))}
        </div>
      </>
    ),
  },
  {
    icon: FileText,
    number: 2,
    title: 'OBJETO',
    content: (
      <p>
        El presente sitio web tiene como finalidad ofrecer información sobre los servicios de intermediación
        hipotecaria ofrecidos por el Titular, así como facilitar el contacto con potenciales clientes interesados
        en dichos servicios.
      </p>
    ),
  },
  {
    icon: BookOpen,
    number: 3,
    title: 'CONDICIONES DE USO',
    content: (
      <>
        <p className="mb-3">
          El acceso y uso de este sitio web atribuye la condición de usuario e implica la aceptación plena
          de las condiciones aquí expuestas. El usuario se compromete a:
        </p>
        <ul className="list-disc pl-5 space-y-2 text-sm">
          <li>Hacer un uso adecuado de los contenidos y servicios ofrecidos.</li>
          <li>No emplearlos para realizar actividades ilícitas o contrarias a la buena fe.</li>
          <li>No difundir contenidos ilegales o que vulneren derechos de terceros.</li>
          <li>No introducir virus informáticos ni realizar acciones que puedan alterar el funcionamiento de la web.</li>
        </ul>
      </>
    ),
  },
  {
    icon: Shield,
    number: 4,
    title: 'RESPONSABILIDAD',
    content: (
      <p>
        El Titular no se hace responsable de los daños o perjuicios que pudieran derivarse de interrupciones
        del servicio, errores en los contenidos o presencia de virus u otros elementos dañinos. El Titular se
        reserva el derecho a modificar los contenidos del sitio web en cualquier momento.
      </p>
    ),
  },
  {
    icon: Lock,
    number: 5,
    title: 'PROPIEDAD INTELECTUAL E INDUSTRIAL',
    content: (
      <p>
        Todos los contenidos del sitio web (textos, imágenes, diseño, logotipos, etc.) son propiedad del
        Titular o cuentan con licencia para su uso, y están protegidos por la normativa vigente. Queda
        prohibida su reproducción, distribución o modificación sin autorización expresa del Titular.
      </p>
    ),
  },
  {
    icon: Globe,
    number: 6,
    title: 'ENLACES EXTERNOS',
    content: (
      <p>
        En caso de que en el sitio web se dispongan enlaces a terceros, el Titular no se hace responsable
        de los contenidos ni del funcionamiento de dichos sitios externos.
      </p>
    ),
  },
  {
    icon: Shield,
    number: 7,
    title: 'PROTECCIÓN DE DATOS',
    content: (
      <p>
        El tratamiento de los datos personales de los usuarios se regirá por lo establecido en la Política
        de Privacidad, elaborada conforme al Reglamento General de Protección de Datos (RGPD).
      </p>
    ),
  },
  {
    icon: Briefcase,
    number: 8,
    title: 'NATURALEZA DE LOS SERVICIOS',
    content: (
      <p>
        El Titular presta servicios de intermediación hipotecaria, no constituyendo en ningún caso
        asesoramiento financiero personalizado ni garantizando la concesión de financiación. Las condiciones
        finales de cualquier operación dependerán de las entidades financieras y del perfil del cliente.
      </p>
    ),
  },
  {
    icon: Scale,
    number: 9,
    title: 'LEGISLACIÓN APLICABLE Y JURISDICCIÓN',
    content: (
      <p>
        La relación entre el Titular y el usuario se regirá por la normativa española vigente. Para la
        resolución de cualquier conflicto, ambas partes se someterán a los juzgados y tribunales
        correspondientes al domicilio del Titular.
      </p>
    ),
  },
];

const AvisoLegalPage = () => (
  <>
    <Helmet>
      <title>Aviso Legal | Avanza Hipotecas</title>
      <meta name="description" content="Aviso legal de Avanza Consulting Hipotecario SL. Datos identificativos, condiciones de uso, propiedad intelectual y legislación aplicable." />
      <meta name="robots" content="noindex, nofollow" />
    </Helmet>

    {/* HERO */}
    <section className="pt-32 pb-12 bg-[#1A3C40] text-white">
      <div className="container mx-auto px-4">
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.7 }}
          className="max-w-3xl mx-auto text-center"
        >
          <div className="inline-flex items-center justify-center w-16 h-16 bg-[#2EBFA5]/20 rounded-2xl mb-6">
            <Scale className="w-8 h-8 text-[#2EBFA5]" />
          </div>
          <h1 className="text-4xl md:text-5xl font-bold mb-4">
            Aviso <span className="text-[#2EBFA5]">Legal</span>
          </h1>
          <p className="text-gray-300 text-lg">
            Información legal sobre el titular del sitio web y las condiciones de uso
          </p>
          <p className="text-gray-400 text-sm mt-4">Última actualización: mayo de 2026</p>
        </motion.div>
      </div>
    </section>

    {/* CONTENIDO */}
    <section className="py-16 bg-white">
      <div className="container mx-auto px-4">
        <div className="max-w-3xl mx-auto">

          {sections.map(({ icon: Icon, number, title, content }, i) => (
            <motion.div
              key={number}
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.5, delay: i * 0.05 }}
              className="mb-10"
            >
              <div className="flex items-center gap-3 mb-4">
                <div className="w-9 h-9 bg-[#2EBFA5]/15 rounded-xl flex items-center justify-center flex-shrink-0">
                  <Icon className="w-5 h-5 text-[#2EBFA5]" />
                </div>
                <h2 className="text-lg font-bold text-[#1A3C40]">
                  {number}. {title}
                </h2>
              </div>
              <div className="pl-12 text-gray-700 leading-relaxed text-sm">
                {content}
              </div>
            </motion.div>
          ))}

          {/* Separador y volver */}
          <div className="mt-8 pt-8 border-t border-gray-100 text-center">
            <Link to="/" className="inline-flex items-center gap-2 text-[#2EBFA5] font-medium hover:underline text-sm">
              ← Volver al inicio
            </Link>
          </div>

        </div>
      </div>
    </section>
  </>
);

export default AvisoLegalPage;
