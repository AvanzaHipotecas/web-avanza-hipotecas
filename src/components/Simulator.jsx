import React, { useState, useMemo } from 'react';
import { motion } from 'framer-motion';
import { Calculator, TrendingUp, Home, AlertCircle, ArrowRight, Info } from 'lucide-react';
import { Button } from '@/components/ui/button';
import { Input } from '@/components/ui/input';
import { Label } from '@/components/ui/label';
import { useNavigate } from 'react-router-dom';

/* ─── ITP por comunidad (provincia → { ccaa, itp, label }) ─── */
const PROVINCES = [
  // Andalucía 7%
  { value: 'almeria',    label: 'Almería',              ccaa: 'Andalucía',           itp: 0.07 },
  { value: 'cadiz',      label: 'Cádiz',                ccaa: 'Andalucía',           itp: 0.07 },
  { value: 'cordoba',    label: 'Córdoba',              ccaa: 'Andalucía',           itp: 0.07 },
  { value: 'granada',    label: 'Granada',              ccaa: 'Andalucía',           itp: 0.07 },
  { value: 'huelva',     label: 'Huelva',               ccaa: 'Andalucía',           itp: 0.07 },
  { value: 'jaen',       label: 'Jaén',                 ccaa: 'Andalucía',           itp: 0.07 },
  { value: 'malaga',     label: 'Málaga',               ccaa: 'Andalucía',           itp: 0.07 },
  { value: 'sevilla',    label: 'Sevilla',              ccaa: 'Andalucía',           itp: 0.07 },
  // Aragón 8%
  { value: 'huesca',     label: 'Huesca',               ccaa: 'Aragón',              itp: 0.08 },
  { value: 'teruel',     label: 'Teruel',               ccaa: 'Aragón',              itp: 0.08 },
  { value: 'zaragoza',   label: 'Zaragoza',             ccaa: 'Aragón',              itp: 0.08 },
  // Asturias 8%
  { value: 'asturias',   label: 'Asturias',             ccaa: 'Asturias',            itp: 0.08 },
  // Baleares 8%
  { value: 'baleares',   label: 'Islas Baleares',       ccaa: 'Baleares',            itp: 0.08 },
  // Canarias 6.5% IGIC
  { value: 'laspalmas',  label: 'Las Palmas',           ccaa: 'Canarias',            itp: 0.065, igic: true },
  { value: 'tenerife',   label: 'Santa Cruz de Tenerife', ccaa: 'Canarias',          itp: 0.065, igic: true },
  // Cantabria 10%
  { value: 'cantabria',  label: 'Cantabria',            ccaa: 'Cantabria',           itp: 0.10 },
  // Castilla-La Mancha 9%
  { value: 'albacete',   label: 'Albacete',             ccaa: 'Castilla-La Mancha',  itp: 0.09 },
  { value: 'ciudadreal', label: 'Ciudad Real',          ccaa: 'Castilla-La Mancha',  itp: 0.09 },
  { value: 'cuenca',     label: 'Cuenca',               ccaa: 'Castilla-La Mancha',  itp: 0.09 },
  { value: 'guadalajara',label: 'Guadalajara',          ccaa: 'Castilla-La Mancha',  itp: 0.09 },
  { value: 'toledo',     label: 'Toledo',               ccaa: 'Castilla-La Mancha',  itp: 0.09 },
  // Castilla y León 8%
  { value: 'avila',      label: 'Ávila',                ccaa: 'Castilla y León',     itp: 0.08 },
  { value: 'burgos',     label: 'Burgos',               ccaa: 'Castilla y León',     itp: 0.08 },
  { value: 'leon',       label: 'León',                 ccaa: 'Castilla y León',     itp: 0.08 },
  { value: 'palencia',   label: 'Palencia',             ccaa: 'Castilla y León',     itp: 0.08 },
  { value: 'salamanca',  label: 'Salamanca',            ccaa: 'Castilla y León',     itp: 0.08 },
  { value: 'segovia',    label: 'Segovia',              ccaa: 'Castilla y León',     itp: 0.08 },
  { value: 'soria',      label: 'Soria',                ccaa: 'Castilla y León',     itp: 0.08 },
  { value: 'valladolid', label: 'Valladolid',           ccaa: 'Castilla y León',     itp: 0.08 },
  { value: 'zamora',     label: 'Zamora',               ccaa: 'Castilla y León',     itp: 0.08 },
  // Cataluña 10%
  { value: 'barcelona',  label: 'Barcelona',            ccaa: 'Cataluña',            itp: 0.10 },
  { value: 'girona',     label: 'Girona',               ccaa: 'Cataluña',            itp: 0.10 },
  { value: 'lleida',     label: 'Lleida',               ccaa: 'Cataluña',            itp: 0.10 },
  { value: 'tarragona',  label: 'Tarragona',            ccaa: 'Cataluña',            itp: 0.10 },
  // C. Valenciana 10%
  { value: 'alicante',   label: 'Alicante',             ccaa: 'C. Valenciana',       itp: 0.10 },
  { value: 'castellon',  label: 'Castellón',            ccaa: 'C. Valenciana',       itp: 0.10 },
  { value: 'valencia',   label: 'Valencia',             ccaa: 'C. Valenciana',       itp: 0.10 },
  // Extremadura 8%
  { value: 'badajoz',    label: 'Badajoz',              ccaa: 'Extremadura',         itp: 0.08 },
  { value: 'caceres',    label: 'Cáceres',              ccaa: 'Extremadura',         itp: 0.08 },
  // Galicia 10%
  { value: 'acoruna',    label: 'A Coruña',             ccaa: 'Galicia',             itp: 0.10 },
  { value: 'lugo',       label: 'Lugo',                 ccaa: 'Galicia',             itp: 0.10 },
  { value: 'ourense',    label: 'Ourense',              ccaa: 'Galicia',             itp: 0.10 },
  { value: 'pontevedra', label: 'Pontevedra',           ccaa: 'Galicia',             itp: 0.10 },
  // La Rioja 7%
  { value: 'larioja',    label: 'La Rioja',             ccaa: 'La Rioja',            itp: 0.07 },
  // Madrid 6%
  { value: 'madrid',     label: 'Madrid',               ccaa: 'Madrid',              itp: 0.06 },
  // Murcia 8%
  { value: 'murcia',     label: 'Murcia',               ccaa: 'Murcia',              itp: 0.08 },
  // Navarra 6%
  { value: 'navarra',    label: 'Navarra',              ccaa: 'Navarra',             itp: 0.06 },
  // País Vasco 4%
  { value: 'alava',      label: 'Álava',                ccaa: 'País Vasco',          itp: 0.04 },
  { value: 'guipuzcoa',  label: 'Guipúzcoa',           ccaa: 'País Vasco',          itp: 0.04 },
  { value: 'vizcaya',    label: 'Vizcaya',              ccaa: 'País Vasco',          itp: 0.04 },
  // Ceuta / Melilla 6%
  { value: 'ceuta',      label: 'Ceuta',                ccaa: 'Ceuta',               itp: 0.06 },
  { value: 'melilla',    label: 'Melilla',              ccaa: 'Melilla',             itp: 0.06 },
];

/* ─── Gastos fijos ─── */
const FIXED_COSTS = { notaria: 900, gestoria: 350, registro: 450, tasacion: 400 };

/* ─── Formato moneda ─── */
const eur = (n) =>
  new Intl.NumberFormat('es-ES', { style: 'currency', currency: 'EUR', minimumFractionDigits: 0, maximumFractionDigits: 0 }).format(n);

/* ─── Fila de resultado ─── */
const ResultRow = ({ label, value, highlight, indent, separator }) => (
  <>
    {separator && <div className="border-t border-gray-200 my-1" />}
    <div className={`flex justify-between items-center py-2.5 px-4 rounded-lg ${highlight ? 'bg-[#2EBFA5]/10' : 'bg-gray-50'} ${indent ? 'ml-4' : ''}`}>
      <span className={`text-sm ${highlight ? 'font-bold text-[#1A3C40]' : indent ? 'text-gray-500' : 'text-gray-600 font-medium'}`}>{label}</span>
      <span className={`font-bold tabular-nums ${highlight ? 'text-[#1A3C40] text-lg' : 'text-gray-800 text-base'}`}>{value}</span>
    </div>
  </>
);

/* ─── Componente principal ─── */
const Simulator = () => {
  const navigate = useNavigate();
  const [form, setForm] = useState({
    propertyValue: '',
    province: '',
    savings: '',
    years: 30,
    interestRate: '3.5',
  });

  const handleChange = (e) => {
    const { name, value } = e.target;
    setForm(prev => ({ ...prev, [name]: value }));
  };

  const handleYears = (e) => setForm(prev => ({ ...prev, years: Number(e.target.value) }));

  /* ─── Cálculo ─── */
  const calc = useMemo(() => {
    const price    = parseFloat(form.propertyValue) || 0;
    const savings  = parseFloat(form.savings)       || 0;
    const years    = form.years;
    const rate     = parseFloat(form.interestRate)  || 0;
    const prov     = PROVINCES.find(p => p.value === form.province);

    if (price <= 0) return null;

    const itpRate     = prov ? prov.itp : null;
    const itpAmount   = itpRate !== null ? price * itpRate : null;
    const totalFixed  = FIXED_COSTS.notaria + FIXED_COSTS.gestoria + FIXED_COSTS.registro + FIXED_COSTS.tasacion;
    const totalCosts  = itpAmount !== null ? itpAmount + totalFixed : totalFixed;
    const loanAmount  = Math.max(0, price + totalCosts - savings);

    let monthly = null;
    if (loanAmount > 0 && rate > 0 && years > 0) {
      const mr = rate / 100 / 12;
      const n  = years * 12;
      monthly  = loanAmount * (mr * Math.pow(1 + mr, n)) / (Math.pow(1 + mr, n) - 1);
    } else if (loanAmount > 0 && rate === 0) {
      monthly = loanAmount / (years * 12);
    }

    return { price, savings, itpRate, itpAmount, totalFixed, totalCosts, loanAmount, monthly, prov };
  }, [form]);

  const hasResults = calc && calc.price > 0;

  return (
    <section id="simulador" className="section-padding bg-white">
      <div className="container mx-auto px-4">
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          className="text-center mb-16"
        >
          <h2 className="text-4xl md:text-5xl font-bold text-[#1A3C40] mb-6">
            Simulador de
            <span className="text-[#2EBFA5] block">Hipoteca</span>
          </h2>
          <p className="text-xl text-gray-700 max-w-3xl mx-auto">
            Calcula cuánto necesitas financiar, incluyendo impuestos y gastos de compraventa
          </p>
        </motion.div>

        <div className="max-w-6xl mx-auto grid lg:grid-cols-2 gap-10 items-start">

          {/* ── Panel izquierdo: inputs ── */}
          <motion.div
            initial={{ opacity: 0, x: -30 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true }}
            className="bg-[#E9ECEF] rounded-2xl p-8"
          >
            <div className="flex items-center mb-8">
              <Calculator className="w-8 h-8 text-[#1A3C40] mr-3" />
              <h3 className="text-2xl font-bold text-[#1A3C40]">Datos de tu hipoteca</h3>
            </div>

            <div className="space-y-6">
              {/* Precio */}
              <div>
                <Label htmlFor="propertyValue" className="text-gray-700 font-medium">Precio de la vivienda (€)</Label>
                <Input id="propertyValue" name="propertyValue" type="number" placeholder="250.000" value={form.propertyValue} onChange={handleChange} className="mt-2 bg-white" />
              </div>

              {/* Provincia */}
              <div>
                <Label htmlFor="province" className="text-gray-700 font-medium">Provincia</Label>
                <select
                  id="province"
                  name="province"
                  value={form.province}
                  onChange={handleChange}
                  className="mt-2 w-full h-10 rounded-md border border-input bg-white px-3 py-2 text-sm focus:outline-none focus:ring-2 focus:ring-[#2EBFA5] focus:border-transparent"
                >
                  <option value="">Selecciona una provincia</option>
                  {PROVINCES.map(p => (
                    <option key={p.value} value={p.value}>{p.label}</option>
                  ))}
                </select>
              </div>

              {/* Ahorro */}
              <div>
                <Label htmlFor="savings" className="text-gray-700 font-medium">Ahorro aportado (€)</Label>
                <Input id="savings" name="savings" type="number" placeholder="0" value={form.savings} onChange={handleChange} className="mt-2 bg-white" />
                <p className="text-xs text-gray-500 mt-1">Dinero propio que destinas a la compra (entrada + gastos)</p>
              </div>

              {/* Años — slider */}
              <div>
                <div className="flex justify-between items-center mb-2">
                  <Label className="text-gray-700 font-medium">Años de hipoteca</Label>
                  <span className="text-[#1A3C40] font-bold text-lg">{form.years} años</span>
                </div>
                <input
                  type="range"
                  min={5} max={40} step={1}
                  value={form.years}
                  onChange={handleYears}
                  className="w-full h-2 rounded-full appearance-none cursor-pointer"
                  style={{ accentColor: '#2EBFA5' }}
                />
                <div className="flex justify-between text-xs text-gray-400 mt-1">
                  <span>5 años</span>
                  <span>40 años</span>
                </div>
              </div>

              {/* Tipo de interés */}
              <div>
                <Label htmlFor="interestRate" className="text-gray-700 font-medium">Tipo de interés estimado (%)</Label>
                <Input id="interestRate" name="interestRate" type="number" step="0.1" min="0" max="15" placeholder="3.5" value={form.interestRate} onChange={handleChange} className="mt-2 bg-white" />
                <p className="text-xs text-gray-500 mt-1">Tipo fijo o media estimada para una hipoteca variable</p>
              </div>
            </div>
          </motion.div>

          {/* ── Panel derecho: resultados ── */}
          <motion.div
            initial={{ opacity: 0, x: 30 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true }}
            className="space-y-6"
          >
            {hasResults ? (
              <div className="bg-white rounded-2xl p-8 border border-gray-200 shadow-sm">
                <div className="flex items-center mb-6">
                  <TrendingUp className="w-8 h-8 text-[#2EBFA5] mr-3" />
                  <h3 className="text-2xl font-bold text-[#1A3C40]">Desglose estimado</h3>
                </div>

                <div className="space-y-2">
                  {/* Precio */}
                  <ResultRow label="Precio de la vivienda" value={eur(calc.price)} />

                  {/* Gastos */}
                  <div className="mt-3">
                    <p className="text-xs font-semibold text-gray-400 uppercase tracking-wider px-4 mb-2">Impuestos y gastos de compraventa</p>

                    {calc.itpAmount !== null ? (
                      <ResultRow
                        label={`${calc.prov.igic ? 'IGIC' : 'ITP'} (${(calc.prov.itp * 100).toFixed(1)}% · ${calc.prov.ccaa})`}
                        value={eur(calc.itpAmount)}
                        indent
                      />
                    ) : (
                      <div className="flex items-center gap-2 px-4 py-2 bg-amber-50 rounded-lg ml-4 mb-1">
                        <Info className="w-4 h-4 text-amber-500 flex-shrink-0" />
                        <span className="text-xs text-amber-700">Selecciona una provincia para calcular el ITP/IGIC</span>
                      </div>
                    )}

                    <ResultRow label="Notaría" value={eur(FIXED_COSTS.notaria)} indent />
                    <ResultRow label="Gestoría" value={eur(FIXED_COSTS.gestoria)} indent />
                    <ResultRow label="Registro de la Propiedad" value={eur(FIXED_COSTS.registro)} indent />
                    <ResultRow label="Tasación" value={eur(FIXED_COSTS.tasacion)} indent />

                    <div className="flex justify-between items-center py-2 px-4 mt-1">
                      <span className="text-sm font-semibold text-gray-700">
                        Total gastos{calc.itpAmount === null ? ' (sin ITP)' : ''}
                      </span>
                      <span className="font-bold text-gray-800 text-base tabular-nums">{eur(calc.totalCosts)}</span>
                    </div>
                  </div>

                  {/* Ahorro */}
                  {calc.savings > 0 && (
                    <ResultRow
                      label="Ahorro aportado"
                      value={`− ${eur(calc.savings)}`}
                      separator
                    />
                  )}

                  {/* Importe a financiar */}
                  <ResultRow
                    label="Importe a financiar"
                    value={eur(calc.loanAmount)}
                    separator
                    highlight
                  />

                  {/* Cuota mensual */}
                  {calc.monthly !== null && (
                    <div className="mt-4 bg-[#1A3C40] text-white rounded-xl p-5 flex justify-between items-center">
                      <div>
                        <p className="text-sm text-gray-300 font-medium">Cuota mensual estimada</p>
                        <p className="text-xs text-gray-400 mt-0.5">{form.years} años · {form.interestRate}% TIN</p>
                      </div>
                      <span className="text-3xl font-bold tabular-nums">{eur(calc.monthly)}<span className="text-lg font-normal">/mes</span></span>
                    </div>
                  )}
                </div>

                {/* Aviso legal */}
                <div className="mt-6 p-4 bg-amber-50 rounded-xl border border-amber-200 flex gap-3">
                  <AlertCircle className="w-5 h-5 text-amber-500 flex-shrink-0 mt-0.5" />
                  <p className="text-xs text-amber-800 leading-relaxed">
                    <strong>Cálculos orientativos.</strong> Estos resultados no implican ningún compromiso por parte de Avanza Hipotecas. Los gastos reales pueden variar según cada caso.
                  </p>
                </div>

                <Button
                  className="w-full mt-6 bg-[#2EBFA5] hover:bg-[#25a28b] text-white py-3 font-semibold flex items-center justify-center gap-2"
                  onClick={() => navigate('/#contacto')}
                >
                  Obtener oferta personalizada
                  <ArrowRight className="w-5 h-5" />
                </Button>
              </div>
            ) : (
              <div className="bg-[#E9ECEF] rounded-2xl p-10 text-center">
                <Home className="w-16 h-16 text-gray-300 mx-auto mb-4" />
                <h3 className="text-xl font-semibold text-gray-500 mb-2">Introduce el precio de la vivienda</h3>
                <p className="text-gray-400 text-sm">El desglose completo aparecerá aquí de forma automática</p>
              </div>
            )}

            {/* Info box */}
            <div className="bg-[#1A3C40] text-white rounded-2xl p-6">
              <p className="font-semibold mb-2">¿Sabías que…?</p>
              <p className="text-gray-300 text-sm leading-relaxed">
                Nuestros clientes consiguen tipos de interés hasta 0.5% más bajos que la media del mercado. En una hipoteca de 200.000€ a 30 años, esto supone un ahorro de más de 18.000€.
              </p>
            </div>
          </motion.div>
        </div>
      </div>
    </section>
  );
};

export default Simulator;
