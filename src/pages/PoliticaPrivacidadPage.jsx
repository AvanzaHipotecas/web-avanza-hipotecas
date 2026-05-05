import React from 'react';
import { Helmet } from 'react-helmet';
import { motion } from 'framer-motion';
import { Shield, User, Target, Lock, Mail, Clock, Share2, Server, CheckCircle, FileText } from 'lucide-react';
import { Link } from 'react-router-dom';

const sections = [
  {
    icon: User,
    number: 1,
    title: 'Responsable del tratamiento',
    content: (
      <div className="bg-[#E9ECEF] rounded-xl overflow-hidden">
        {[
          { label: 'Empresa', value: 'Avanza Consulting Hipotecario SL' },
          { label: 'CIF', value: 'B22555189' },
          { label: 'Dirección', value: 'Paseo de la Castellana, 194 Bajo B (28046 - Madrid)' },
          { label: 'Email', value: 'contacto@avanzahipotecas.es' },
        ].map((row, i) => (
          <div key={i} className={`flex flex-col sm:flex-row px-5 py-3 gap-1 ${i % 2 === 0 ? 'bg-white' : 'bg-[#E9ECEF]'}`}>
            <span className="font-semibold text-[#1A3C40] text-sm w-48 flex-shrink-0">{row.label}</span>
            <span className="text-gray-700 text-sm">{row.value}</span>
          </div>
        ))}
      </div>
    ),
  },
  {
    icon: Target,
    number: 2,
    title: 'Finalidad del tratamiento',
    content: (
      <>
        <p className="mb-3">Los datos personales facilitados por el usuario serán tratados para:</p>
        <ul className="list-disc pl-5 space-y-2 text-sm">
          <li>Gestionar solicitudes realizadas a través de formularios web.</li>
          <li>Contactar con el usuario por teléfono o correo electrónico.</li>
          <li>Analizar su perfil para valorar la viabilidad de una operación hipotecaria.</li>
          <li>Solicitar documentación necesaria para el estudio del caso.</li>
          <li>Realizar seguimiento del proceso iniciado por el usuario.</li>
          <li>Enviar comunicaciones comerciales únicamente si el usuario ha otorgado su consentimiento expreso.</li>
        </ul>
        <p className="mt-3 text-sm bg-[#2EBFA5]/10 rounded-xl px-4 py-3 text-[#1A3C40] font-medium">
          En ningún caso se enviarán comunicaciones comerciales sin consentimiento previo.
        </p>
      </>
    ),
  },
  {
    icon: FileText,
    number: 3,
    title: 'Tipos de datos tratados',
    content: (
      <>
        <p className="mb-3">Se podrán tratar los siguientes datos:</p>
        <div className="space-y-2 not-prose">
          {[
            'Datos identificativos (nombre y apellidos)',
            'Datos de contacto (teléfono, email)',
            'Datos profesionales (situación laboral, antigüedad)',
            'Datos económicos y financieros (ingresos, ahorro, préstamos u otras obligaciones)',
            'Cualquier otra información facilitada voluntariamente por el usuario',
          ].map((item) => (
            <div key={item} className="flex items-start gap-3 bg-[#E9ECEF] rounded-xl px-4 py-2.5">
              <CheckCircle className="w-4 h-4 text-[#2EBFA5] flex-shrink-0 mt-0.5" />
              <span className="text-sm text-gray-700">{item}</span>
            </div>
          ))}
        </div>
      </>
    ),
  },
  {
    icon: Lock,
    number: 4,
    title: 'Legitimación',
    content: (
      <p>
        La base legal para el tratamiento es el consentimiento del usuario y la aplicación de medidas
        precontractuales solicitadas por el usuario.
      </p>
    ),
  },
  {
    icon: Mail,
    number: 5,
    title: 'Comunicaciones comerciales',
    content: (
      <p>
        El envío de comunicaciones comerciales se realizará únicamente cuando el usuario haya marcado
        expresamente la casilla habilitada para ello. Dichas comunicaciones podrán incluir información
        sobre servicios, contenido informativo relacionado con el sector hipotecario y ofertas o novedades.
        El usuario podrá retirar su consentimiento en cualquier momento.
      </p>
    ),
  },
  {
    icon: Clock,
    number: 6,
    title: 'Conservación de los datos',
    content: (
      <>
        <p className="mb-4">El período de conservación de sus datos personales varía en función de la relación que mantenga con nosotros:</p>
        <div className="space-y-3 not-prose">
          {[
            {
              n: 1,
              tipo: 'Usuarios que solicitan información',
              plazo: 'Sus datos se conservarán mientras sean necesarios para atender su consulta y durante el período en que pueda ejercerse cualquier reclamación derivada de la misma. Una vez resuelta su solicitud, procederemos a su supresión o anonimización, salvo que exista otra base legítima que justifique su conservación.',
            },
            {
              n: 2,
              tipo: 'Leads con consentimiento para comunicaciones comerciales',
              plazo: 'Si nos ha dado su consentimiento para recibir información comercial, conservaremos sus datos mientras dicho consentimiento permanezca vigente. Podrá retirar su consentimiento en cualquier momento, momento a partir del cual cesaremos el envío de comunicaciones y procederemos a la supresión de sus datos en el plazo legalmente establecido.',
            },
            {
              n: 3,
              tipo: 'Clientes',
              plazo: 'Los datos de quienes hayan contratado nuestros servicios se conservarán durante la vigencia de la relación contractual y, una vez finalizada esta, durante los plazos previstos por la normativa aplicable, incluyendo la legislación civil, mercantil, fiscal y de prevención del blanqueo de capitales, con el fin de atender posibles responsabilidades legales o requerimientos de las autoridades competentes.',
            },
          ].map((row) => (
            <div key={row.n} className="bg-[#E9ECEF] rounded-xl px-5 py-4">
              <p className="font-semibold text-[#1A3C40] text-sm mb-1">{row.n}. {row.tipo}</p>
              <p className="text-gray-600 text-sm leading-relaxed">{row.plazo}</p>
            </div>
          ))}
        </div>
      </>
    ),
  },
  {
    icon: Share2,
    number: 7,
    title: 'Cesión de datos',
    content: (
      <p>
        No se cederán datos a terceros sin consentimiento previo del usuario, salvo obligación legal.
        En caso de que el usuario decida avanzar en el proceso hipotecario, se le solicitará autorización
        expresa mediante contrato para poder compartir sus datos con entidades financieras.
      </p>
    ),
  },
  {
    icon: Server,
    number: 8,
    title: 'Encargados de tratamiento',
    content: (
      <>
        <p className="mb-4">
          Para la prestación de nuestros servicios, contamos con proveedores externos que actúan como
          encargados del tratamiento en los términos del artículo 28 del Reglamento (UE) 2016/679 (RGPD).
          Dichos proveedores únicamente tratan los datos conforme a nuestras instrucciones y están
          obligados contractualmente a adoptar las medidas de seguridad adecuadas.
        </p>
        <div className="grid sm:grid-cols-2 gap-2 not-prose">
          {[
            { name: 'Proveedor de alojamiento web', desc: 'Infraestructura y hospedaje de la plataforma.' },
            { name: 'Proveedor de CRM y gestión de clientes', desc: 'Organización y seguimiento de consultas y expedientes.' },
            { name: 'Proveedor de automatización de procesos', desc: 'Gestión automatizada de flujos de trabajo internos.' },
            { name: 'Proveedor de comunicaciones digitales', desc: 'Envío de comunicaciones y atención al cliente.' },
            { name: 'Proveedor de servicios de correo electrónico', desc: 'Envío de notificaciones y confirmaciones.' },
            { name: 'Proveedor de analítica web', desc: 'Medición del rendimiento y mejora de la experiencia de usuario.' },
          ].map((item) => (
            <div key={item.name} className="bg-[#E9ECEF] rounded-xl px-4 py-3">
              <p className="font-bold text-[#1A3C40] text-sm">{item.name}</p>
              <p className="text-gray-600 text-xs mt-0.5">{item.desc}</p>
            </div>
          ))}
        </div>
        <p className="mt-4 text-sm">
          Cuando alguno de estos proveedores esté establecido fuera del Espacio Económico Europeo o implique
          transferencias internacionales de datos, nos aseguramos de que dichas transferencias se realizan
          con las garantías adecuadas previstas en el RGPD, tales como cláusulas contractuales tipo aprobadas
          por la Comisión Europea u otros mecanismos legalmente reconocidos.
        </p>
      </>
    ),
  },
  {
    icon: CheckCircle,
    number: 9,
    title: 'Derechos del usuario',
    content: (
      <>
        <p className="mb-3">
          El usuario puede ejercer sus derechos de acceso, rectificación, supresión, limitación del
          tratamiento, oposición y portabilidad. Para ello, puede enviar una solicitud a:
        </p>
        <a
          href="mailto:contacto@avanzahipotecas.es"
          className="inline-flex items-center gap-2 bg-[#2EBFA5]/15 text-[#1A3C40] font-semibold rounded-xl px-5 py-3 text-sm hover:bg-[#2EBFA5]/25 transition-colors"
        >
          <Mail className="w-4 h-4 text-[#2EBFA5]" />
          contacto@avanzahipotecas.es
        </a>
      </>
    ),
  },
  {
    icon: Shield,
    number: 10,
    title: 'Seguridad de los datos',
    content: (
      <p>
        Se aplican medidas técnicas y organizativas adecuadas para garantizar la seguridad de los datos
        personales y evitar su alteración, pérdida, tratamiento o acceso no autorizado.
      </p>
    ),
  },
];

const PoliticaPrivacidadPage = () => (
  <>
    <Helmet>
      <title>Política de Privacidad | Avanza Hipotecas</title>
      <meta name="description" content="Política de privacidad de Avanza Consulting Hipotecario SL. Información sobre el tratamiento de tus datos personales conforme al RGPD." />
      <meta name="robots" content="index, follow" />
      <link rel="canonical" href="https://avanzahipotecas.es/politica-privacidad" />
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
            <Shield className="w-8 h-8 text-[#2EBFA5]" />
          </div>
          <h1 className="text-4xl md:text-5xl font-bold mb-4">
            Política de <span className="text-[#2EBFA5]">Privacidad</span>
          </h1>
          <p className="text-gray-300 text-lg">
            Información sobre cómo tratamos tus datos personales de acuerdo con el RGPD
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
              transition={{ duration: 0.5, delay: i * 0.04 }}
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

export default PoliticaPrivacidadPage;
