import React from 'react';
    import { motion } from 'framer-motion';
    import { useNavigate } from 'react-router-dom';
    import { ArrowRight, TrendingUp } from 'lucide-react';
    import { Button } from '@/components/ui/button';

    const Hero = () => {
      const navigate = useNavigate();

      const highlights = [
        'Financiación hasta el 100%',
        'Estudio gratuito y sin compromiso',
        'Respondemos en menos de 24 horas',
      ];

      const handleContactClick = () => {
        const contactSection = document.getElementById('contacto');
        if (contactSection) {
          contactSection.scrollIntoView({ behavior: 'smooth' });
        } else {
          navigate('/#contacto');
        }
      };

      return (
        <section
          id="inicio"
          className="relative overflow-hidden bg-white pt-24 pb-12 lg:min-h-screen lg:flex lg:items-center lg:pt-24 lg:pb-0"
        >
          <div className="absolute inset-0 bg-grid-slate-100 [mask-image:linear-gradient(to_bottom,white,transparent)]"></div>
          <div className="container mx-auto px-4 py-6 lg:py-20 relative z-10">
            <div className="grid lg:grid-cols-2 gap-12 items-center">
              <motion.div
                initial={{ opacity: 0, x: -50 }}
                animate={{ opacity: 1, x: 0 }}
                transition={{ duration: 0.8 }}
                className="text-center lg:text-left"
              >
                <motion.h1
                  initial={{ opacity: 0, y: 20 }}
                  animate={{ opacity: 1, y: 0 }}
                  transition={{ delay: 0.2 }}
                  className="text-4xl md:text-6xl font-bold leading-tight mb-6 text-[#1A3C40]"
                >
                  Encontramos y negociamos<span className="block text-[#2EBFA5]">la mejor hipoteca para ti</span>
                </motion.h1>
                <motion.p
                  initial={{ opacity: 0, y: 20 }}
                  animate={{ opacity: 1, y: 0 }}
                  transition={{ delay: 0.4 }}
                  className="text-xl md:text-2xl mb-8 text-gray-600"
                >
                  Negociamos con más de 20 bancos para conseguirte la mejor hipoteca. Sin complicaciones, sin perder tiempo y con un experto a tu lado desde el primer día.
                </motion.p>

                <motion.div
                  initial={{ opacity: 0, y: 20 }}
                  animate={{ opacity: 1, y: 0 }}
                  transition={{ delay: 0.6 }}
                  className="flex flex-col sm:flex-row gap-4 mb-8 justify-center lg:justify-start"
                >
                  <Button
                    className="bg-[#1A3C40] hover:bg-[#122c30] text-white font-semibold px-8 py-4 rounded-lg text-lg flex items-center justify-center group"
                    onClick={handleContactClick}
                  >
                    Consigue la mejor hipoteca
                    <ArrowRight className="ml-2 w-5 h-5 group-hover:translate-x-1 transition-transform" />
                  </Button>
                  <Button
                    variant="outline"
                    className="border-2 border-[#1A3C40] text-[#1A3C40] hover:bg-[#1A3C40] hover:text-white px-8 py-4 rounded-lg text-lg"
                    onClick={() => navigate('/simulador')}
                  >
                    Simular mi hipoteca
                  </Button>
                </motion.div>
                <motion.div
                  initial={{ opacity: 0, y: 20 }}
                  animate={{ opacity: 1, y: 0 }}
                  transition={{ delay: 0.8 }}
                  className="space-y-3"
                >
                  {highlights.map((text, index) => (
                    <div key={index} className="flex items-center space-x-3 justify-center lg:justify-start">
                      <span className="text-[#2EBFA5] font-bold text-lg">✓</span>
                      <span className="text-gray-700 font-medium">{text}</span>
                    </div>
                  ))}
                </motion.div>
              </motion.div>
              <motion.div
                initial={{ opacity: 0, x: 50 }}
                animate={{ opacity: 1, x: 0 }}
                transition={{ duration: 0.8 }}
              >
                <div className="relative mt-8 lg:mt-0">
                  <picture>
                    <source
                      media="(min-width: 1024px)"
                      srcSet="https://images.unsplash.com/photo-1581573950452-5a438c5f390f?w=1200&q=75&fm=webp"
                    />
                    <img
                      src="https://images.unsplash.com/photo-1581573950452-5a438c5f390f?w=800&q=75&fm=webp"
                      alt="Familia feliz en su nuevo hogar"
                      className="rounded-3xl shadow-2xl w-full h-auto"
                      width="800"
                      height="533"
                      fetchpriority="high"
                    />
                  </picture>
                  <div className="absolute -bottom-8 -left-8 bg-white p-4 rounded-2xl shadow-lg flex items-center space-x-3">
                    <div className="w-12 h-12 bg-[#2EBFA5] rounded-full flex items-center justify-center">
                      <TrendingUp className="w-6 h-6 text-white"/>
                    </div>
                    <div>
                      <p className="font-bold text-[#1A3C40]">Ahorro garantizado</p>
                      <p className="text-sm text-gray-600">Mejores tipos de interés</p>
                    </div>
                  </div>
                </div>
              </motion.div>
            </div>
          </div>
        </section>
      );
    };

    export default Hero;
