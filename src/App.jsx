import React, { lazy, Suspense } from 'react';
import { Routes, Route, useLocation } from 'react-router-dom';
import Header from '@/components/Header';
import Footer from '@/components/Footer';
import WhatsAppButton from '@/components/WhatsAppButton';
import CookieBanner from '@/components/CookieBanner';
import ScrollToTop from '@/components/ScrollToTop';
import { Toaster } from '@/components/ui/toaster';
import { AnimatePresence } from 'framer-motion';

const HomePage                 = lazy(() => import('@/pages/HomePage'));
const SimulatorPage            = lazy(() => import('@/pages/SimulatorPage'));
const HipotecaJovenPage        = lazy(() => import('@/pages/HipotecaJovenPage'));
const Hipoteca100Page          = lazy(() => import('@/pages/Hipoteca100Page'));
const Hipoteca100GastosPage    = lazy(() => import('@/pages/Hipoteca100GastosPage'));
const HipotecaFuncionariosPage = lazy(() => import('@/pages/HipotecaFuncionariosPage'));
const HipotecaNoResidentesPage = lazy(() => import('@/pages/HipotecaNoResidentesPage'));
const HipotecaReformaPage      = lazy(() => import('@/pages/HipotecaReformaPage'));
const SobreNosotrosPage        = lazy(() => import('@/pages/SobreNosotrosPage'));
const BlogPage                 = lazy(() => import('@/pages/BlogPage'));
const HipotecaFijaVariablePage    = lazy(() => import('@/pages/blog/HipotecaFijaVariablePage'));
const AhorroComprarViviendaPage   = lazy(() => import('@/pages/blog/AhorroComprarViviendaPage'));
const EuriborHipotecaPage         = lazy(() => import('@/pages/blog/EuriborHipotecaPage'));
const SubrogacionHipotecariaPage  = lazy(() => import('@/pages/blog/SubrogacionHipotecariaPage'));
const HipotecaJoven2026Page       = lazy(() => import('@/pages/blog/HipotecaJoven2026Page'));
const Hipoteca100ComoConseguirlaPage = lazy(() => import('@/pages/blog/Hipoteca100ComoConseguirlaPage'));
const PoliticaCookiesPage      = lazy(() => import('@/pages/PoliticaCookiesPage'));
const AvisoLegalPage           = lazy(() => import('@/pages/AvisoLegalPage'));
const PoliticaPrivacidadPage   = lazy(() => import('@/pages/PoliticaPrivacidadPage'));

function App() {
  const location = useLocation();

  return (
    <div className="min-h-screen bg-white">
      <ScrollToTop />
      <Header />
      <Suspense fallback={<div className="min-h-screen" />}>
        <AnimatePresence mode="wait">
          <Routes location={location} key={location.pathname}>
            <Route path="/"                                                    element={<HomePage />} />
            <Route path="/simulador"                                           element={<SimulatorPage />} />
            <Route path="/hipoteca-joven"                                      element={<HipotecaJovenPage />} />
            <Route path="/hipoteca-100"                                        element={<Hipoteca100Page />} />
            <Route path="/hipoteca-100-gastos"                                 element={<Hipoteca100GastosPage />} />
            <Route path="/hipoteca-funcionarios"                               element={<HipotecaFuncionariosPage />} />
            <Route path="/hipoteca-no-residentes"                              element={<HipotecaNoResidentesPage />} />
            <Route path="/hipoteca-reforma"                                    element={<HipotecaReformaPage />} />
            <Route path="/sobre-nosotros"                                      element={<SobreNosotrosPage />} />
            <Route path="/blog"                                                element={<BlogPage />} />
            <Route path="/blog/hipoteca-fija-o-variable-2026"                 element={<HipotecaFijaVariablePage />} />
            <Route path="/blog/cuanto-dinero-necesito-para-comprar-vivienda"  element={<AhorroComprarViviendaPage />} />
            <Route path="/blog/que-es-el-euribor"                             element={<EuriborHipotecaPage />} />
            <Route path="/blog/subrogacion-hipotecaria"                       element={<SubrogacionHipotecariaPage />} />
            <Route path="/blog/hipoteca-joven-2026-requisitos"                element={<HipotecaJoven2026Page />} />
            <Route path="/blog/hipoteca-al-100-como-conseguirla-2026"         element={<Hipoteca100ComoConseguirlaPage />} />
            <Route path="/politica-cookies"                                    element={<PoliticaCookiesPage />} />
            <Route path="/aviso-legal"                                         element={<AvisoLegalPage />} />
            <Route path="/politica-privacidad"                                 element={<PoliticaPrivacidadPage />} />
          </Routes>
        </AnimatePresence>
      </Suspense>
      <Footer />
      <WhatsAppButton />
      <CookieBanner />
      <Toaster />
    </div>
  );
}

export default App;
