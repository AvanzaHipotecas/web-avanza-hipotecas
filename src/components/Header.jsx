import React, { useState, useRef, useEffect } from 'react';
import { motion, AnimatePresence } from 'framer-motion';
import { Link, useNavigate } from 'react-router-dom';
import { Menu, X, ChevronDown } from 'lucide-react';
import { Button } from '@/components/ui/button';

const mortgageItems = [
  { name: 'Hipoteca 100%', href: '/hipoteca-100' },
  { name: 'Hipoteca 100% + Gastos', href: '/hipoteca-100-gastos' },
  { name: 'Hipoteca Joven', href: '/hipoteca-joven' },
  { name: 'Hipoteca Funcionarios', href: '/hipoteca-funcionarios' },
  { name: 'Hipoteca No Residentes', href: '/hipoteca-no-residentes' },
  { name: 'Hipoteca + Reforma', href: '/hipoteca-reforma' },
];

const mejorarItems = [
  { name: 'Subrogación hipotecaria', href: '/subrogacion-hipotecaria' },
  { name: 'Cambio de hipoteca', href: '/cambio-hipoteca' },
  { name: 'Calculadora subrogación', href: '/calculadora-subrogacion' },
];

const Header = () => {
  const [isMenuOpen, setIsMenuOpen] = useState(false);
  const [activeDropdown, setActiveDropdown] = useState(null);
  const [mobileHipotecasOpen, setMobileHipotecasOpen] = useState(false);
  const [mobileMejorarOpen, setMobileMejorarOpen] = useState(false);
  const desktopNavRef = useRef(null);
  const navigate = useNavigate();

  useEffect(() => {
    const handleClickOutside = (e) => {
      if (desktopNavRef.current && !desktopNavRef.current.contains(e.target)) {
        setActiveDropdown(null);
      }
    };
    document.addEventListener('mousedown', handleClickOutside);
    return () => document.removeEventListener('mousedown', handleClickOutside);
  }, []);

  const handleScrollToContact = (e) => {
    e.preventDefault();
    setIsMenuOpen(false);
    const contactSection = document.getElementById('contacto');
    if (contactSection) {
      contactSection.scrollIntoView({ behavior: 'smooth' });
    } else {
      navigate('/');
      setTimeout(() => document.getElementById('contacto')?.scrollIntoView({ behavior: 'smooth' }), 100);
    }
  };

  const toggleDropdown = (name) => {
    setActiveDropdown(prev => prev === name ? null : name);
  };

  return (
    <header className="fixed top-0 left-0 right-0 z-50 bg-[#2EBFA5] text-white shadow-md">
      <nav className="container mx-auto px-4 py-2">
        <div className="flex items-center h-[80px]">

          {/* Logo */}
          <motion.div initial={{ opacity: 0, x: -20 }} animate={{ opacity: 1, x: 0 }} className="flex-shrink-0">
            <Link to="/" className="flex items-center space-x-3">
              <img
                src="https://horizons-cdn.hostinger.com/46b65610-3610-4aaa-b75e-344adbd2c5fe/transparente---copia-5zX4t.png"
                alt="Logo Avanza Hipotecas"
                className="h-16 w-auto"
                width="64" height="64"
                fetchpriority="high"
              />
              <img
                src="https://horizons-cdn.hostinger.com/46b65610-3610-4aaa-b75e-344adbd2c5fe/0---copia-2-xf8ce.png"
                alt="Avanza Hipotecas"
                className="h-10 w-auto hidden sm:block"
                width="160" height="40"
                fetchpriority="high"
              />
            </Link>
          </motion.div>

          {/* Desktop nav — centered */}
          <div ref={desktopNavRef} className="hidden md:flex flex-1 justify-end items-center gap-7 lg:gap-9 mr-6">

            <motion.a
              href="/sobre-nosotros"
              className="text-white hover:text-gray-200 font-semibold text-lg transition-colors duration-200 whitespace-nowrap"
              initial={{ opacity: 0, y: -10 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ delay: 0.1 }}
            >
              Sobre nosotros
            </motion.a>

            {/* Hipotecas dropdown */}
            <motion.div
              className="relative"
              initial={{ opacity: 0, y: -10 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ delay: 0.2 }}
            >
              <button
                className="flex items-center gap-1 text-white hover:text-gray-200 font-semibold text-lg transition-colors duration-200 whitespace-nowrap"
                onClick={() => toggleDropdown('hipotecas')}
              >
                <span>Hipotecas</span>
                <ChevronDown className={`w-4 h-4 transition-transform duration-200 ${activeDropdown === 'hipotecas' ? 'rotate-180' : ''}`} />
              </button>
              <AnimatePresence>
                {activeDropdown === 'hipotecas' && (
                  <motion.div
                    initial={{ opacity: 0, y: -8 }}
                    animate={{ opacity: 1, y: 0 }}
                    exit={{ opacity: 0, y: -8 }}
                    transition={{ duration: 0.15 }}
                    className="absolute top-full left-0 mt-2 w-64 bg-white rounded-lg shadow-xl py-2 z-50"
                  >
                    {mortgageItems.map((item) => (
                      <a
                        key={item.name}
                        href={item.href}
                        className="block px-4 py-2.5 text-[#1A3C40] hover:bg-[#2EBFA5]/10 hover:text-[#2EBFA5] transition-colors duration-150 text-sm font-medium"
                        onClick={() => setActiveDropdown(null)}
                      >
                        {item.name}
                      </a>
                    ))}
                  </motion.div>
                )}
              </AnimatePresence>
            </motion.div>

            {/* Mejorar hipoteca dropdown */}
            <motion.div
              className="relative"
              initial={{ opacity: 0, y: -10 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ delay: 0.3 }}
            >
              <button
                className="flex items-center gap-1 text-white hover:text-gray-200 font-semibold text-lg transition-colors duration-200 whitespace-nowrap"
                onClick={() => toggleDropdown('mejorar')}
              >
                <span>Mejorar hipoteca</span>
                <ChevronDown className={`w-4 h-4 transition-transform duration-200 ${activeDropdown === 'mejorar' ? 'rotate-180' : ''}`} />
              </button>
              <AnimatePresence>
                {activeDropdown === 'mejorar' && (
                  <motion.div
                    initial={{ opacity: 0, y: -8 }}
                    animate={{ opacity: 1, y: 0 }}
                    exit={{ opacity: 0, y: -8 }}
                    transition={{ duration: 0.15 }}
                    className="absolute top-full left-0 mt-2 w-56 bg-white rounded-lg shadow-xl py-2 z-50"
                  >
                    {mejorarItems.map((item) => (
                      <a
                        key={item.name}
                        href={item.href}
                        className="block px-4 py-2.5 text-[#1A3C40] hover:bg-[#2EBFA5]/10 hover:text-[#2EBFA5] transition-colors duration-150 text-sm font-medium"
                        onClick={() => setActiveDropdown(null)}
                      >
                        {item.name}
                      </a>
                    ))}
                  </motion.div>
                )}
              </AnimatePresence>
            </motion.div>

            <motion.div
              initial={{ opacity: 0, y: -10 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ delay: 0.4 }}
            >
              <Link to="/simulador" className="text-white hover:text-gray-200 font-semibold text-lg transition-colors duration-200 whitespace-nowrap">
                Simulador
              </Link>
            </motion.div>

            <motion.a
              href="/blog"
              className="text-white hover:text-gray-200 font-semibold text-lg transition-colors duration-200 whitespace-nowrap"
              initial={{ opacity: 0, y: -10 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ delay: 0.5 }}
            >
              Blog
            </motion.a>
          </div>

          {/* CTA — right, desktop only */}
          <motion.div
            className="hidden md:flex flex-shrink-0"
            initial={{ opacity: 0, y: -10 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ delay: 0.6 }}
          >
            <Button asChild className="bg-[#1A3C40] hover:bg-[#122c30] text-white px-5 py-2 rounded-lg font-semibold text-sm whitespace-nowrap">
              <a href="/#contacto" onClick={handleScrollToContact}>Consulta Gratuita</a>
            </Button>
          </motion.div>

          {/* Mobile toggle */}
          <button className="md:hidden ml-auto p-2" onClick={() => setIsMenuOpen(!isMenuOpen)} aria-label="Abrir menú">
            {isMenuOpen ? <X className="w-6 h-6" /> : <Menu className="w-6 h-6" />}
          </button>
        </div>

        {/* Mobile menu */}
        {isMenuOpen && (
          <motion.div
            initial={{ opacity: 0, height: 0 }}
            animate={{ opacity: 1, height: 'auto' }}
            exit={{ opacity: 0, height: 0 }}
            className="md:hidden mt-2 pb-4 border-t border-white/20 pt-4 bg-[#2EBFA5]"
          >
            <a
              href="/sobre-nosotros"
              className="flex items-center py-3 text-white hover:text-gray-200 transition-colors font-semibold text-base"
              onClick={() => setIsMenuOpen(false)}
            >
              Sobre nosotros
            </a>

            {/* Mobile — Hipotecas accordion */}
            <button
              className="flex items-center justify-between w-full py-3 text-white hover:text-gray-200 transition-colors font-semibold text-base"
              onClick={() => setMobileHipotecasOpen(!mobileHipotecasOpen)}
            >
              <span>Hipotecas</span>
              <ChevronDown className={`w-4 h-4 transition-transform duration-200 ${mobileHipotecasOpen ? 'rotate-180' : ''}`} />
            </button>
            {mobileHipotecasOpen && (
              <div className="pl-4 border-l-2 border-white/30 ml-2 mb-2 space-y-1">
                {mortgageItems.map((item) => (
                  <a
                    key={item.name}
                    href={item.href}
                    className="block py-2.5 text-white/90 hover:text-white text-sm font-medium transition-colors"
                    onClick={() => setIsMenuOpen(false)}
                  >
                    {item.name}
                  </a>
                ))}
              </div>
            )}

            {/* Mobile — Mejorar hipoteca accordion */}
            <button
              className="flex items-center justify-between w-full py-3 text-white hover:text-gray-200 transition-colors font-semibold text-base"
              onClick={() => setMobileMejorarOpen(!mobileMejorarOpen)}
            >
              <span>Mejorar hipoteca</span>
              <ChevronDown className={`w-4 h-4 transition-transform duration-200 ${mobileMejorarOpen ? 'rotate-180' : ''}`} />
            </button>
            {mobileMejorarOpen && (
              <div className="pl-4 border-l-2 border-white/30 ml-2 mb-2 space-y-1">
                {mejorarItems.map((item) => (
                  <a
                    key={item.name}
                    href={item.href}
                    className="block py-2.5 text-white/90 hover:text-white text-sm font-medium transition-colors"
                    onClick={() => setIsMenuOpen(false)}
                  >
                    {item.name}
                  </a>
                ))}
              </div>
            )}

            <Link
              to="/simulador"
              className="flex items-center py-3 text-white hover:text-gray-200 transition-colors font-semibold text-base"
              onClick={() => setIsMenuOpen(false)}
            >
              Simulador
            </Link>

            <a
              href="/blog"
              className="flex items-center py-3 text-white hover:text-gray-200 transition-colors font-semibold text-base"
              onClick={() => setIsMenuOpen(false)}
            >
              Blog
            </a>

            <Button asChild className="bg-[#1A3C40] hover:bg-[#122c30] text-white w-full mt-4 py-3 rounded-lg font-semibold text-base">
              <a href="/#contacto" onClick={handleScrollToContact}>Consulta Gratuita</a>
            </Button>
          </motion.div>
        )}
      </nav>
    </header>
  );
};

export default Header;
