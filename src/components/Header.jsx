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

const Header = () => {
  const [isMenuOpen, setIsMenuOpen] = useState(false);
  const [isHipotecasOpen, setIsHipotecasOpen] = useState(false);
  const [isMobileHipotecasOpen, setIsMobileHipotecasOpen] = useState(false);
  const dropdownRef = useRef(null);
  const navigate = useNavigate();

  useEffect(() => {
    const handleClickOutside = (e) => {
      if (dropdownRef.current && !dropdownRef.current.contains(e.target)) {
        setIsHipotecasOpen(false);
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

  return (
    <header className="fixed top-0 left-0 right-0 z-50 bg-[#2EBFA5] text-white shadow-md">
      <nav className="container mx-auto px-4 py-2">
        <div className="flex items-center justify-between h-[80px]">

          {/* Logo */}
          <motion.div initial={{ opacity: 0, x: -20 }} animate={{ opacity: 1, x: 0 }}>
            <Link to="/" className="flex items-center space-x-4">
              <img
                src="https://horizons-cdn.hostinger.com/46b65610-3610-4aaa-b75e-344adbd2c5fe/transparente---copia-5zX4t.png"
                alt="Logo Avanza Hipotecas"
                className="h-16 w-auto"
              />
              <img
                src="https://horizons-cdn.hostinger.com/46b65610-3610-4aaa-b75e-344adbd2c5fe/0---copia-2-xf8ce.png"
                alt="Avanza Hipotecas"
                className="h-10 w-auto hidden sm:block"
              />
            </Link>
          </motion.div>

          {/* Desktop nav */}
          <div className="hidden md:flex items-center space-x-6">

            <motion.a
              href="/sobre-nosotros"
              className="text-white hover:text-gray-200 font-medium transition-colors duration-200"
              initial={{ opacity: 0, y: -10 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ delay: 0.1 }}
            >
              Sobre nosotros
            </motion.a>

            {/* Hipotecas dropdown */}
            <motion.div
              ref={dropdownRef}
              className="relative"
              initial={{ opacity: 0, y: -10 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ delay: 0.2 }}
            >
              <button
                className="flex items-center space-x-1 text-white hover:text-gray-200 font-medium transition-colors duration-200"
                onClick={() => setIsHipotecasOpen(!isHipotecasOpen)}
              >
                <span>Hipotecas</span>
                <ChevronDown className={`w-4 h-4 transition-transform duration-200 ${isHipotecasOpen ? 'rotate-180' : ''}`} />
              </button>
              <AnimatePresence>
                {isHipotecasOpen && (
                  <motion.div
                    initial={{ opacity: 0, y: -8 }}
                    animate={{ opacity: 1, y: 0 }}
                    exit={{ opacity: 0, y: -8 }}
                    transition={{ duration: 0.15 }}
                    className="absolute top-full left-0 mt-2 w-60 bg-white rounded-lg shadow-xl py-2 z-50"
                  >
                    {mortgageItems.map((item) => (
                      <a
                        key={item.name}
                        href={item.href}
                        className="block px-4 py-2.5 text-[#1A3C40] hover:bg-[#2EBFA5]/10 hover:text-[#2EBFA5] transition-colors duration-150 text-sm font-medium"
                        onClick={() => setIsHipotecasOpen(false)}
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
              transition={{ delay: 0.3 }}
            >
              <Link to="/simulador" className="text-white hover:text-gray-200 font-medium transition-colors duration-200">
                Simulador
              </Link>
            </motion.div>

            <motion.a
              href="/blog"
              className="text-white hover:text-gray-200 font-medium transition-colors duration-200"
              initial={{ opacity: 0, y: -10 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ delay: 0.4 }}
            >
              Blog
            </motion.a>

            <motion.div
              initial={{ opacity: 0, y: -10 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ delay: 0.5 }}
            >
              <Button asChild className="bg-[#1A3C40] hover:bg-[#122c30] text-white px-6 py-2 rounded-lg">
                <a href="/#contacto" onClick={handleScrollToContact}>Consulta Gratuita</a>
              </Button>
            </motion.div>
          </div>

          {/* Mobile menu toggle */}
          <button className="md:hidden p-2" onClick={() => setIsMenuOpen(!isMenuOpen)}>
            {isMenuOpen ? <X className="w-6 h-6" /> : <Menu className="w-6 h-6" />}
          </button>
        </div>

        {/* Mobile menu */}
        {isMenuOpen && (
          <motion.div
            initial={{ opacity: 0, height: 0 }}
            animate={{ opacity: 1, height: 'auto' }}
            exit={{ opacity: 0, height: 0 }}
            className="md:hidden mt-4 pb-4 border-t border-white/20 pt-4 bg-[#2EBFA5]"
          >
            <a
              href="/sobre-nosotros"
              className="flex items-center py-3 text-white hover:text-gray-200 transition-colors font-medium"
              onClick={() => setIsMenuOpen(false)}
            >
              Sobre nosotros
            </a>

            {/* Mobile Hipotecas accordion */}
            <button
              className="flex items-center justify-between w-full py-3 text-white hover:text-gray-200 transition-colors font-medium"
              onClick={() => setIsMobileHipotecasOpen(!isMobileHipotecasOpen)}
            >
              <span>Hipotecas</span>
              <ChevronDown className={`w-4 h-4 transition-transform duration-200 ${isMobileHipotecasOpen ? 'rotate-180' : ''}`} />
            </button>
            {isMobileHipotecasOpen && (
              <div className="pl-4 border-l-2 border-white/30 ml-2 mb-2">
                {mortgageItems.map((item) => (
                  <a
                    key={item.name}
                    href={item.href}
                    className="block py-2 text-white/90 hover:text-white text-sm transition-colors"
                    onClick={() => setIsMenuOpen(false)}
                  >
                    {item.name}
                  </a>
                ))}
              </div>
            )}

            <Link
              to="/simulador"
              className="flex items-center py-3 text-white hover:text-gray-200 transition-colors font-medium"
              onClick={() => setIsMenuOpen(false)}
            >
              Simulador
            </Link>

            <a
              href="/blog"
              className="flex items-center py-3 text-white hover:text-gray-200 transition-colors font-medium"
              onClick={() => setIsMenuOpen(false)}
            >
              Blog
            </a>

            <Button asChild className="bg-[#1A3C40] hover:bg-[#122c30] text-white w-full mt-4 py-3 rounded-lg">
              <a href="/#contacto" onClick={handleScrollToContact}>Consulta Gratuita</a>
            </Button>
          </motion.div>
        )}
      </nav>
    </header>
  );
};

export default Header;
