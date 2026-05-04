import React from 'react';
import { Helmet } from 'react-helmet';
import { motion } from 'framer-motion';
import { Cookie, Shield, BarChart2, Megaphone, Settings, CheckCircle } from 'lucide-react';
import { Link } from 'react-router-dom';

const Section = ({ icon: Icon, number, title, children }) => (
  <motion.div
    initial={{ opacity: 0, y: 20 }}
    whileInView={{ opacity: 1, y: 0 }}
    viewport={{ once: true }}
    transition={{ duration: 0.5 }}
    className="mb-10"
  >
    <div className="flex items-center gap-3 mb-4">
      <div className="w-9 h-9 bg-[#2EBFA5]/15 rounded-xl flex items-center justify-center flex-shrink-0">
        <Icon className="w-5 h-5 text-[#2EBFA5]" />
      </div>
      <h2 className="text-xl font-bold text-[#1A3C40]">
        {number}. {title}
      </h2>
    </div>
    <div className="pl-12 text-gray-700 leading-relaxed space-y-3">
      {children}
    </div>
  </motion.div>
);

const CookieTypeCard = ({ icon: Icon, title, tag, tagColor, description }) => (
  <div className="bg-[#E9ECEF] rounded-xl p-5 flex gap-4">
    <div className={`w-10 h-10 rounded-xl flex items-center justify-center flex-shrink-0 ${tagColor}`}>
      <Icon className="w-5 h-5 text-white" />
    </div>
    <div>
      <div className="flex items-center gap-2 mb-1">
        <p className="font-bold text-[#1A3C40] text-sm">{title}</p>
        <span className={`text-xs px-2 py-0.5 rounded-full font-medium ${tagColor} text-white`}>{tag}</span>
      </div>
      <p className="text-sm text-gray-600 leading-relaxed">{description}</p>
    </div>
  </div>
);

const PoliticaCookiesPage = () => (
  <>
    <Helmet>
      <title>Política de Cookies | Avanza Hipotecas</title>
      <meta name="description" content="Información sobre las cookies utilizadas en avanzahipotecas.es: tipos, finalidad y cómo gestionar tus preferencias de acuerdo con la LSSI-CE y el RGPD." />
      <meta name="robots" content="index, follow" />
      <link rel="canonical" href="https://avanzahipotecas.es/politica-cookies" />
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
            <Cookie className="w-8 h-8 text-[#2EBFA5]" />
          </div>
          <h1 className="text-4xl md:text-5xl font-bold mb-4">
            Política de <span className="text-[#2EBFA5]">Cookies</span>
          </h1>
          <p className="text-gray-300 text-lg">
            Información sobre las cookies utilizadas en este sitio web y cómo gestionar tus preferencias
          </p>
          <p className="text-gray-400 text-sm mt-4">Última actualización: mayo de 2026</p>
        </motion.div>
      </div>
    </section>

    {/* CONTENIDO */}
    <section className="py-16 bg-white">
      <div className="container mx-auto px-4">
        <div className="max-w-3xl mx-auto">

          <Section icon={Cookie} number={1} title="¿Qué son las cookies?">
            <p>
              En cumplimiento con la Ley de Servicios de la Sociedad de la Información (LSSI-CE) y el
              Reglamento General de Protección de Datos (RGPD), informamos que este sitio web utiliza cookies.
            </p>
            <p>
              Las cookies son pequeños archivos de texto que se almacenan en el dispositivo del usuario al visitar
              una página web, con el fin de mejorar la experiencia de navegación y recopilar información estadística.
            </p>
          </Section>

          <Section icon={BarChart2} number={2} title="Tipos de cookies utilizadas">
            <div className="space-y-4 not-prose">
              <CookieTypeCard
                icon={Shield}
                title="Cookies técnicas (necesarias)"
                tag="Necesaria"
                tagColor="bg-[#1A3C40]"
                description="Permiten la navegación y el uso de las funcionalidades básicas de la web, como el control de sesión y el acceso a áreas seguras. No requieren consentimiento del usuario."
              />
              <CookieTypeCard
                icon={BarChart2}
                title="Cookies de análisis"
                tag="Analítica"
                tagColor="bg-blue-500"
                description="Permiten cuantificar el número de usuarios y analizar su comportamiento en la web. Utilizamos Google Analytics para mejorar nuestros servicios."
              />
              <CookieTypeCard
                icon={Megaphone}
                title="Cookies de marketing y publicidad"
                tag="Marketing"
                tagColor="bg-purple-500"
                description="Permiten mostrar anuncios personalizados y medir la eficacia de campañas publicitarias. Utilizamos el Pixel de Facebook (Meta Ads) para la captación de leads."
              />
            </div>
          </Section>

          <Section icon={Settings} number={3} title="Cookies de terceros">
            <p>
              Este sitio web utiliza servicios de terceros que pueden recopilar información con fines
              estadísticos y publicitarios:
            </p>
            <div className="not-prose space-y-3 mt-2">
              {[
                { name: 'Google Analytics', desc: 'Servicio de análisis web de Google LLC. Recopila datos sobre el comportamiento de los usuarios en el sitio para mejorar la experiencia.' },
                { name: 'Meta (Facebook Ads)', desc: 'Pixel de seguimiento de Meta Platforms, Inc. Permite medir conversiones y optimizar campañas publicitarias en Facebook e Instagram.' },
              ].map((item) => (
                <div key={item.name} className="flex items-start gap-3 bg-[#E9ECEF] rounded-xl px-5 py-3">
                  <CheckCircle className="w-5 h-5 text-[#2EBFA5] flex-shrink-0 mt-0.5" />
                  <div>
                    <p className="font-semibold text-[#1A3C40] text-sm">{item.name}</p>
                    <p className="text-gray-600 text-sm">{item.desc}</p>
                  </div>
                </div>
              ))}
            </div>
            <p className="mt-3">
              Estos terceros pueden transferir datos fuera del Espacio Económico Europeo, cumpliendo
              con las garantías legales necesarias establecidas por el RGPD.
            </p>
          </Section>

          <Section icon={Settings} number={4} title="Gestión y configuración de cookies">
            <p>
              El usuario puede permitir, bloquear o eliminar las cookies instaladas en su dispositivo
              mediante la configuración de su navegador:
            </p>
            <ul className="list-disc pl-5 space-y-1 text-sm mt-2">
              <li><strong>Google Chrome:</strong> Configuración → Privacidad y seguridad → Cookies y otros datos de sitios</li>
              <li><strong>Mozilla Firefox:</strong> Opciones → Privacidad y seguridad → Cookies y datos del sitio</li>
              <li><strong>Safari:</strong> Preferencias → Privacidad → Gestionar datos de sitios web</li>
              <li><strong>Microsoft Edge:</strong> Configuración → Privacidad, búsqueda y servicios → Cookies</li>
            </ul>
            <p className="mt-3">
              También puede gestionar sus preferencias a través del banner de cookies mostrado al acceder
              al sitio web. Si desea restablecer sus preferencias, puede borrar las cookies almacenadas
              en su navegador y volver a visitar el sitio.
            </p>
          </Section>

          <Section icon={CheckCircle} number={5} title="Consentimiento">
            <p>
              Al acceder a este sitio web, el usuario verá un aviso de cookies que le permitirá:
            </p>
            <ul className="list-disc pl-5 space-y-1 text-sm mt-2">
              <li><strong>Aceptar todas</strong> las cookies, incluidas las analíticas y de marketing.</li>
              <li><strong>Rechazar</strong> las cookies no necesarias, permitiendo solo las técnicas.</li>
              <li><strong>Configurar</strong> sus preferencias accediendo a esta página.</li>
            </ul>
            <p className="mt-3">
              El uso de cookies no necesarias se realizará únicamente tras el consentimiento expreso del usuario,
              de conformidad con el artículo 22.2 de la LSSI-CE y el artículo 7 del RGPD.
            </p>
          </Section>

          <Section icon={Shield} number={6} title="Modificación de la política">
            <p>
              El Titular se reserva el derecho a modificar la presente política para adaptarla a novedades
              legislativas o cambios en la actividad del sitio web. Se recomienda al usuario revisar esta
              página periódicamente.
            </p>
            <p>
              Para cualquier consulta sobre el uso de cookies o el tratamiento de datos personales,
              puede contactar con nosotros en{' '}
              <a href="mailto:contacto@avanzahipotecas.es" className="text-[#2EBFA5] font-medium hover:underline">
                contacto@avanzahipotecas.es
              </a>
              .
            </p>
          </Section>

          {/* CTA volver */}
          <div className="mt-8 pt-8 border-t border-gray-100 text-center">
            <Link to="/" className="inline-flex items-center gap-2 text-[#2EBFA5] font-medium hover:underline">
              ← Volver al inicio
            </Link>
          </div>

        </div>
      </div>
    </section>
  </>
);

export default PoliticaCookiesPage;
