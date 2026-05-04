import React from 'react';
import { Routes, Route, useLocation } from 'react-router-dom';
import Header from '@/components/Header';
import Footer from '@/components/Footer';
import WhatsAppButton from '@/components/WhatsAppButton';
import HomePage from '@/pages/HomePage';
import SimulatorPage from '@/pages/SimulatorPage';
import HipotecaJovenPage from '@/pages/HipotecaJovenPage';
import Hipoteca100Page from '@/pages/Hipoteca100Page';
import Hipoteca100GastosPage from '@/pages/Hipoteca100GastosPage';
import HipotecaFuncionariosPage from '@/pages/HipotecaFuncionariosPage';
import HipotecaNoResidentesPage from '@/pages/HipotecaNoResidentesPage';
import HipotecaReformaPage from '@/pages/HipotecaReformaPage';
import SobreNosotrosPage from '@/pages/SobreNosotrosPage';
import BlogPage from '@/pages/BlogPage';
import HipotecaFijaVariablePage from '@/pages/blog/HipotecaFijaVariablePage';
import AhorroComprarViviendaPage from '@/pages/blog/AhorroComprarViviendaPage';
import EuriborHipotecaPage from '@/pages/blog/EuriborHipotecaPage';
import SubrogacionHipotecariaPage from '@/pages/blog/SubrogacionHipotecariaPage';
import PoliticaCookiesPage from '@/pages/PoliticaCookiesPage';
import AvisoLegalPage from '@/pages/AvisoLegalPage';
import PoliticaPrivacidadPage from '@/pages/PoliticaPrivacidadPage';
import CookieBanner from '@/components/CookieBanner';
import ScrollToTop from '@/components/ScrollToTop';
import { Toaster } from '@/components/ui/toaster';
import { AnimatePresence } from 'framer-motion';

function App() {
  const location = useLocation();

  return (
    <div className="min-h-screen bg-white">
      <ScrollToTop />
      <Header />
      <AnimatePresence mode="wait">
        <Routes location={location} key={location.pathname}>
          <Route path="/" element={<HomePage />} />
          <Route path="/simulador" element={<SimulatorPage />} />
          <Route path="/hipoteca-joven" element={<HipotecaJovenPage />} />
          <Route path="/hipoteca-100" element={<Hipoteca100Page />} />
          <Route path="/hipoteca-100-gastos" element={<Hipoteca100GastosPage />} />
          <Route path="/hipoteca-funcionarios" element={<HipotecaFuncionariosPage />} />
          <Route path="/hipoteca-no-residentes" element={<HipotecaNoResidentesPage />} />
          <Route path="/hipoteca-reforma" element={<HipotecaReformaPage />} />
          <Route path="/sobre-nosotros" element={<SobreNosotrosPage />} />
          <Route path="/blog" element={<BlogPage />} />
          <Route path="/blog/hipoteca-fija-o-variable-2026" element={<HipotecaFijaVariablePage />} />
          <Route path="/blog/cuanto-dinero-necesito-para-comprar-vivienda" element={<AhorroComprarViviendaPage />} />
          <Route path="/blog/que-es-el-euribor" element={<EuriborHipotecaPage />} />
          <Route path="/blog/subrogacion-hipotecaria" element={<SubrogacionHipotecariaPage />} />
          <Route path="/politica-cookies" element={<PoliticaCookiesPage />} />
          <Route path="/aviso-legal" element={<AvisoLegalPage />} />
          <Route path="/politica-privacidad" element={<PoliticaPrivacidadPage />} />
        </Routes>
      </AnimatePresence>
      <Footer />
      <WhatsAppButton />
      <CookieBanner />
      <Toaster />
    </div>
  );
}

export default App;