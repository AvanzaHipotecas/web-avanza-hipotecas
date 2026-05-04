import React, { useState, useEffect } from 'react';
import { motion, AnimatePresence } from 'framer-motion';
import { Cookie } from 'lucide-react';
import { Link } from 'react-router-dom';
import { Button } from '@/components/ui/button';

const COOKIE_KEY = 'avanza_cookie_consent';

const CookieBanner = () => {
  const [visible, setVisible] = useState(false);

  useEffect(() => {
    const consent = localStorage.getItem(COOKIE_KEY);
    if (!consent) {
      const t = setTimeout(() => setVisible(true), 800);
      return () => clearTimeout(t);
    }
  }, []);

  const accept = () => {
    localStorage.setItem(COOKIE_KEY, 'accepted');
    setVisible(false);
  };

  const reject = () => {
    localStorage.setItem(COOKIE_KEY, 'rejected');
    setVisible(false);
  };

  return (
    <AnimatePresence>
      {visible && (
        <motion.div
          initial={{ y: 120, opacity: 0 }}
          animate={{ y: 0, opacity: 1 }}
          exit={{ y: 120, opacity: 0 }}
          transition={{ type: 'spring', damping: 28, stiffness: 320 }}
          className="fixed bottom-0 left-0 right-0 z-[200] p-4 md:p-6"
        >
          <div className="max-w-5xl mx-auto bg-[#1A3C40] text-white rounded-2xl shadow-2xl border border-white/10 p-5 md:p-7">
            <div className="flex flex-col md:flex-row md:items-center gap-4 md:gap-8">
              <div className="flex-1 min-w-0">
                <div className="flex items-center gap-2 mb-2">
                  <Cookie className="w-5 h-5 text-[#2EBFA5] flex-shrink-0" />
                  <h3 className="font-bold text-white text-base">Uso de cookies</h3>
                </div>
                <p className="text-gray-300 text-sm leading-relaxed">
                  Utilizamos cookies propias y de terceros para mejorar tu experiencia, analizar el tráfico y mostrarte contenido personalizado. Puedes aceptar todas, rechazarlas o configurar tus preferencias.{' '}
                  <Link
                    to="/politica-cookies"
                    className="text-[#2EBFA5] underline hover:text-white transition-colors whitespace-nowrap"
                  >
                    Configurar cookies
                  </Link>
                </p>
              </div>
              <div className="flex flex-row gap-3 flex-shrink-0">
                <Button
                  onClick={reject}
                  variant="outline"
                  className="border-white/40 text-white hover:bg-white/10 bg-transparent text-sm px-5 h-10"
                >
                  Rechazar
                </Button>
                <Button
                  onClick={accept}
                  className="bg-[#2EBFA5] hover:bg-[#25a28b] text-white font-semibold text-sm px-6 h-10"
                >
                  Aceptar todas
                </Button>
              </div>
            </div>
          </div>
        </motion.div>
      )}
    </AnimatePresence>
  );
};

export default CookieBanner;
