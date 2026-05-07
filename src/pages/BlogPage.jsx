import React, { useState, useMemo } from 'react';
import { Helmet } from 'react-helmet';
import { motion } from 'framer-motion';
import { Search, Clock, ArrowRight, Tag } from 'lucide-react';
import { Link } from 'react-router-dom';
import { Button } from '@/components/ui/button';

const ARTICLES = [
  {
    slug: 'hipoteca-al-100-como-conseguirla-2026',
    title: 'Cómo conseguir una hipoteca al 100% en 2026',
    category: 'Guías',
    categoryColor: 'bg-blue-100 text-blue-700',
    excerpt: 'Las tres vías reales para financiar el 100% de una vivienda: aval ICO del Estado, convenios propios de Avanza Hipotecas con entidades financieras y pignoración de activos. Descubre cuál encaja con tu perfil.',
    readTime: '8 min',
    date: '6 mayo 2026',
    image: 'https://images.unsplash.com/photo-1582407947304-fd86f028f716?w=800&q=80&fm=webp',
    imageAlt: 'Vivienda moderna con financiación hipotecaria al 100%',
  },
  {
    slug: 'hipoteca-joven-2026-requisitos',
    title: 'Hipoteca joven 2026: requisitos y bancos que la conceden',
    category: 'Guías',
    categoryColor: 'bg-blue-100 text-blue-700',
    excerpt: 'Todo lo que necesitas saber sobre la hipoteca joven en 2026: requisitos de edad, las dos vías para conseguir el 100% de financiación y por qué un bróker puede marcar la diferencia.',
    readTime: '7 min',
    date: '6 mayo 2026',
    image: 'https://images.unsplash.com/photo-1560472354-b33ff0c44a43?w=800&q=80&fm=webp',
    imageAlt: 'Jóvenes recibiendo las llaves de su primer piso',
  },
  {
    slug: 'hipoteca-fija-o-variable-2026',
    title: 'Hipoteca fija o variable en 2026: ¿cuál te conviene más?',
    category: 'Consejos',
    categoryColor: 'bg-[#2EBFA5]/10 text-[#2EBFA5]',
    excerpt: 'Las diferencias clave entre hipoteca fija y variable, ventajas e inconvenientes de cada tipo, y cómo elegir según tu perfil y la situación actual del mercado en 2026.',
    readTime: '5 min',
    date: '28 abril 2026',
    image: 'https://images.unsplash.com/photo-1611974789855-9c2a0a7236a3?w=800&q=80&fm=webp',
    imageAlt: 'Gráficos financieros y tipos de interés',
  },
  {
    slug: 'cuanto-dinero-necesito-para-comprar-vivienda',
    title: '¿Cuánto dinero necesito ahorrado para comprar una vivienda?',
    category: 'Guías',
    categoryColor: 'bg-blue-100 text-blue-700',
    excerpt: 'Desglose completo de los gastos de compraventa, el porcentaje habitual que financian los bancos y cuánto ahorro mínimo necesitas antes de empezar a buscar piso.',
    readTime: '4 min',
    date: '20 abril 2026',
    image: 'https://images.unsplash.com/photo-1579621970563-ebec7560ff3e?w=800&q=80&fm=webp',
    imageAlt: 'Ahorro para comprar vivienda',
  },
  {
    slug: 'que-es-el-euribor',
    title: 'Qué es el euríbor y cómo afecta a tu hipoteca variable',
    category: 'Educación financiera',
    categoryColor: 'bg-purple-100 text-purple-700',
    excerpt: 'Explicación clara de qué es el euríbor, cómo se calcula la cuota en una hipoteca variable, su evolución histórica y qué puedes hacer cuando sube.',
    readTime: '6 min',
    date: '12 abril 2026',
    image: 'https://images.unsplash.com/photo-1551288049-bebda4e38f71?w=800&q=80&fm=webp',
    imageAlt: 'Datos financieros y euríbor',
  },
  {
    slug: 'subrogacion-hipotecaria',
    title: 'Subrogación hipotecaria: cómo cambiar de banco y ahorrar miles de euros',
    category: 'Consejos',
    categoryColor: 'bg-[#2EBFA5]/10 text-[#2EBFA5]',
    excerpt: 'Qué es la subrogación de hipoteca, cuándo compensa hacerla, cómo calcular si el cambio de banco te ahorra dinero y qué papel juega un bróker en el proceso.',
    readTime: '5 min',
    date: '5 abril 2026',
    image: 'https://images.unsplash.com/photo-1450101499163-c8848c66ca85?w=800&q=80&fm=webp',
    imageAlt: 'Firma de documentos hipotecarios',
  },
];

const ArticleCard = ({ article, index }) => (
  <motion.article
    initial={{ opacity: 0, y: 20 }}
    whileInView={{ opacity: 1, y: 0 }}
    viewport={{ once: true }}
    transition={{ delay: index * 0.1 }}
    className="bg-white rounded-2xl overflow-hidden border border-gray-100 hover:border-[#2EBFA5]/30 hover:shadow-lg transition-all duration-300 flex flex-col"
  >
    <div className="relative h-52 overflow-hidden">
      <img src={article.image} alt={article.imageAlt} className="w-full h-full object-cover hover:scale-105 transition-transform duration-500" loading="lazy" />
    </div>
    <div className="p-6 flex flex-col flex-1">
      <div className="flex items-center gap-3 mb-3">
        <span className={`inline-flex items-center gap-1 px-3 py-1 rounded-full text-xs font-semibold ${article.categoryColor}`}>
          <Tag className="w-3 h-3" />{article.category}
        </span>
        <span className="flex items-center gap-1 text-xs text-gray-400">
          <Clock className="w-3 h-3" />{article.readTime}
        </span>
      </div>
      <h2 className="text-xl font-bold text-[#1A3C40] mb-3 leading-tight">{article.title}</h2>
      <p className="text-gray-600 text-sm leading-relaxed flex-1 mb-5">{article.excerpt}</p>
      <div className="flex items-center justify-between mt-auto">
        <span className="text-xs text-gray-400">{article.date}</span>
        <Link to={`/blog/${article.slug}`}>
          <Button variant="ghost" className="text-[#2EBFA5] hover:text-[#1A3C40] font-semibold text-sm flex items-center gap-1 p-0 h-auto">
            Leer artículo <ArrowRight className="w-4 h-4" />
          </Button>
        </Link>
      </div>
    </div>
  </motion.article>
);

const BlogPage = () => {
  const [query, setQuery] = useState('');

  const filtered = useMemo(() => {
    if (!query.trim()) return ARTICLES;
    const q = query.toLowerCase();
    return ARTICLES.filter(a =>
      a.title.toLowerCase().includes(q) ||
      a.category.toLowerCase().includes(q) ||
      a.excerpt.toLowerCase().includes(q)
    );
  }, [query]);

  return (
    <>
      <Helmet>
        <title>Blog de hipotecas | Consejos, guías y novedades | Avanza Hipotecas</title>
        <meta name="description" content="Consejos prácticos, guías completas y novedades sobre hipotecas para que tomes las mejores decisiones. Artículos escritos por expertos en intermediación hipotecaria." />
        <meta property="og:title" content="Blog de hipotecas | Consejos, guías y novedades | Avanza Hipotecas" />
        <meta property="og:description" content="Consejos prácticos, guías completas y novedades sobre hipotecas para que tomes las mejores decisiones. Artículos escritos por expertos en intermediación hipotecaria." />
        <meta property="og:url" content="https://avanzahipotecas.es/blog" />
        <meta property="og:image" content="https://avanzahipotecas.es/og-image.jpg" />
        <meta property="og:type" content="website" />
        <meta name="robots" content="index, follow" />
        <link rel="canonical" href="https://avanzahipotecas.es/blog" />
      </Helmet>

      {/* ── CABECERA ── */}
      <section className="pt-32 pb-16 bg-[#1A3C40] text-white">
        <div className="container mx-auto px-4">
          <motion.div
            initial={{ opacity: 0, y: 30 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.7 }}
            className="max-w-3xl mx-auto text-center"
          >
            <h1 className="text-4xl md:text-5xl font-bold mb-4">
              Blog de <span className="text-[#2EBFA5]">hipotecas</span>
            </h1>
            <p className="text-xl text-gray-300 mb-10">
              Consejos, guías y novedades para que tomes las mejores decisiones sobre tu hipoteca
            </p>
            {/* Buscador */}
            <div className="relative max-w-xl mx-auto">
              <Search className="absolute left-4 top-1/2 -translate-y-1/2 w-5 h-5 text-gray-400" />
              <input
                type="text"
                placeholder="Buscar artículos..."
                value={query}
                onChange={e => setQuery(e.target.value)}
                className="w-full pl-12 pr-5 py-4 rounded-xl bg-white text-gray-800 placeholder-gray-400 focus:outline-none focus:ring-2 focus:ring-[#2EBFA5] text-base"
              />
            </div>
          </motion.div>
        </div>
      </section>

      {/* ── ARTÍCULOS ── */}
      <section className="py-20 bg-[#E9ECEF]">
        <div className="container mx-auto px-4">
          {filtered.length > 0 ? (
            <div className="grid sm:grid-cols-2 lg:grid-cols-2 gap-8 max-w-5xl mx-auto">
              {filtered.map((article, i) => (
                <ArticleCard key={article.slug} article={article} index={i} />
              ))}
            </div>
          ) : (
            <div className="text-center py-20">
              <p className="text-2xl font-semibold text-gray-500 mb-2">No se encontraron artículos</p>
              <p className="text-gray-400">Prueba con otro término de búsqueda</p>
            </div>
          )}
        </div>
      </section>

      {/* ── CTA ── */}
      <section className="py-20 bg-white">
        <div className="container mx-auto px-4">
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            className="max-w-3xl mx-auto bg-[#1A3C40] text-white rounded-2xl p-10 text-center"
          >
            <h2 className="text-3xl font-bold mb-4">¿Tienes dudas sobre tu hipoteca?</h2>
            <p className="text-gray-300 mb-8">Nuestros expertos analizan tu caso de forma gratuita y sin compromiso.</p>
            <Link to="/#contacto">
              <Button className="bg-[#2EBFA5] hover:bg-[#25a28b] text-white font-semibold px-8 py-3 text-lg flex items-center gap-2 mx-auto">
                Solicita tu consulta gratuita <ArrowRight className="w-5 h-5" />
              </Button>
            </Link>
          </motion.div>
        </div>
      </section>
    </>
  );
};

export default BlogPage;
