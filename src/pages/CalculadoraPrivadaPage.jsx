import React, { useState, useMemo, useRef } from 'react';
import { Helmet } from 'react-helmet';
import {
  AlertTriangle, ArrowRight, ExternalLink, Home, Euro, Wallet,
  Calendar, CreditCard, MapPin, Users, User, ChevronDown,
} from 'lucide-react';
import { motion, AnimatePresence } from 'framer-motion';
import { Input } from '@/components/ui/input';
import { Label } from '@/components/ui/label';
import { Select } from '@/components/ui/select';
import { Button } from '@/components/ui/button';
import { Dialog, DialogContent, DialogTitle } from '@/components/ui/dialog';

// ── CONSTANTES DE CÁLCULO ──
const TIN = 3.5;                 // tipo de interés anual usado en la simulación (%)
const EDAD_MAXIMA = 75;          // edad máxima al término de la hipoteca
const PLAZO_MAX_100 = 30;        // plazo máximo (años) si se financia el 100%
const PLAZO_MAX_90 = 40;         // plazo máximo (años) si se financia <100%
const GASTOS_FIJOS = 3000;       // notaría + registro + gestoría + tasación (€)
const PCT_CUOTA_MAXIMA = 0.35;   // % máximo de ingresos destinado a la cuota

// Tipos generales de ITP por CCAA (transmisión de vivienda usada, sin
// bonificaciones). Son orientativos y pueden variar según bonificaciones
// aplicables (vivienda habitual, edad, familia numerosa, etc). Editar aquí
// si cambian los tipos.
const ITP_POR_PROVINCIA = {
  'Andalucía': 0.07,
  'Aragón': 0.08,
  'Asturias': 0.08,
  'Baleares': 0.08,
  'Canarias': 0.065,
  'Cantabria': 0.10,
  'Castilla-La Mancha': 0.09,
  'Castilla y León': 0.08,
  'Cataluña': 0.10,
  'Extremadura': 0.11,
  'Galicia': 0.10,
  'La Rioja': 0.07,
  'Madrid': 0.06,
  'Murcia': 0.08,
  'Navarra': 0.06,
  'País Vasco': 0.04,
  'Comunidad Valenciana': 0.10,
};

const CTA_URL = 'https://contacto.avanzahipotecas.es/?utm_source=email&utm_medium=email&utm_campaign=calculadora-hipoteca-2026';

// contacto.avanzahipotecas.es bloquea actualmente ser embebido en iframe desde
// otro origen (ERR_BLOCKED_BY_RESPONSE), así que el modal con iframe queda
// construido pero desconectado. El botón usa el target="_blank" de siempre.
// En cuanto se confirme que ese dominio permite framing (frame-ancestors),
// cambiar esta constante a `true` para reactivar el modal sin tocar nada más.
const IFRAME_MODAL_ENABLED = false;

const fmt = (n) => new Intl.NumberFormat('es-ES', { maximumFractionDigits: 0 }).format(Math.round(n));

const PLACEHOLDER_CLASS = 'placeholder:text-gray-500';
const FIELD_CLASS = `bg-[#FDFBF8] border-[#1A3C40]/15 rounded-xl focus-visible:ring-2 focus-visible:ring-[#2EBFA5]/40 focus-visible:ring-offset-0 focus-visible:border-[#2EBFA5] transition-shadow ${PLACEHOLDER_CLASS}`;

const emptyTitular = () => ({ ingresos: '', pagas: '', edad: '' });

const IconField = ({ icon: Icon, label, className = '', ...inputProps }) => (
  <div className={className}>
    <Label className="text-gray-600 text-sm">{label}</Label>
    <div className="relative mt-1.5">
      <Icon className="absolute left-3 top-1/2 -translate-y-1/2 w-4 h-4 text-[#2EBFA5] pointer-events-none" />
      <Input {...inputProps} className={`pl-9 ${FIELD_CLASS}`} />
    </div>
  </div>
);

const IconSelect = ({ icon: Icon, children, className = '', ...selectProps }) => (
  <div className={`relative ${className}`}>
    <Icon className="absolute left-3 top-1/2 -translate-y-1/2 w-4 h-4 text-[#2EBFA5] pointer-events-none z-10" />
    <Select {...selectProps} className={`appearance-none pl-9 pr-9 ${FIELD_CLASS}`}>
      {children}
    </Select>
    <ChevronDown className="absolute right-3 top-1/2 -translate-y-1/2 w-4 h-4 text-[#2EBFA5] pointer-events-none" />
  </div>
);

const TitularForm = ({ index, data, onChange }) => (
  <div className="rounded-2xl bg-[#2EBFA5]/[0.06] border border-[#2EBFA5]/15 p-5 sm:p-6 space-y-5">
    <div className="flex items-center gap-3">
      <div className="w-9 h-9 rounded-full bg-[#1A3C40] text-white flex items-center justify-center font-bold text-sm flex-shrink-0">
        {index + 1}
      </div>
      <div className="flex items-center gap-1.5">
        <User className="w-4 h-4 text-[#2EBFA5]" />
        <p className="font-semibold text-[#1A3C40] text-sm">Titular {index + 1}</p>
      </div>
    </div>
    <div className="grid grid-cols-2 sm:grid-cols-3 gap-4 sm:gap-5">
      <IconField
        icon={Euro}
        label="Ingresos netos (€)"
        className="col-span-2 sm:col-span-1"
        type="number" min="0" value={data.ingresos}
        onChange={e => onChange({ ...data, ingresos: e.target.value })}
        placeholder="1800"
      />
      <IconField
        icon={Wallet}
        label="Nº de pagas"
        type="number" min="1" max="14" value={data.pagas}
        onChange={e => onChange({ ...data, pagas: e.target.value })}
        placeholder="12"
      />
      <IconField
        icon={Calendar}
        label="Edad"
        type="number" min="18" max="90" value={data.edad}
        onChange={e => onChange({ ...data, edad: e.target.value })}
        placeholder="35"
      />
    </div>
  </div>
);

const CalculadoraPrivadaPage = () => {
  const [numTitulares, setNumTitulares] = useState('1');
  const [titular1, setTitular1] = useState(emptyTitular());
  const [titular2, setTitular2] = useState(emptyTitular());
  const [cuotaDeudas, setCuotaDeudas] = useState('0');
  const [ahorro, setAhorro] = useState('');
  const [provincia, setProvincia] = useState('');
  const [modalOpen, setModalOpen] = useState(false);
  const [iframeLoaded, setIframeLoaded] = useState(false);
  const dialogContentRef = useRef(null);

  const handleModalOpenChange = (open) => {
    setModalOpen(open);
    if (open) setIframeLoaded(false);
  };

  const resultado = useMemo(() => {
    const titulares = numTitulares === '2' ? [titular1, titular2] : [titular1];

    const parsed = titulares.map(t => ({
      ingresos: parseFloat(t.ingresos),
      pagas: parseFloat(t.pagas),
      edad: parseFloat(t.edad),
    }));

    const camposCompletos =
      parsed.every(t => t.ingresos > 0 && t.pagas > 0 && t.edad > 0) &&
      ahorro !== '' && !isNaN(parseFloat(ahorro)) &&
      provincia !== '';

    if (!camposCompletos) return null;

    const ahorroNum = parseFloat(ahorro);
    const cuotaDeudasNum = parseFloat(cuotaDeudas) || 0;
    const itp = ITP_POR_PROVINCIA[provincia];

    // Paso 1 — ingresos y cuota máxima admisible
    const ingresosAnualesTotal = parsed.reduce(
      (sum, t) => sum + (t.ingresos * t.pagas), 0
    );
    const ingresosMensualesEquivalentes = ingresosAnualesTotal / 12;
    const cuotaMaxima = ingresosMensualesEquivalentes * PCT_CUOTA_MAXIMA - cuotaDeudasNum;

    if (cuotaMaxima <= 0) {
      return { status: 'no-ingresos' };
    }

    // Paso 2 — plazos según edad
    const edadMayor = Math.max(...parsed.map(t => t.edad));
    const anosDisponibles = EDAD_MAXIMA - edadMayor;

    if (anosDisponibles <= 0) {
      return { status: 'no-edad' };
    }

    const plazo100 = Math.min(PLAZO_MAX_100, anosDisponibles);
    const plazo90 = Math.min(PLAZO_MAX_90, anosDisponibles);

    // Paso 3 — capacidad de préstamo por cuota (anualidad francesa)
    const r = (TIN / 100) / 12;
    const capacidadPrestamo = (plazoAnios) => {
      const n = plazoAnios * 12;
      if (n <= 0) return 0;
      return cuotaMaxima * (1 - Math.pow(1 + r, -n)) / r;
    };

    const capacidad30 = capacidadPrestamo(plazo100);
    const capacidad40 = capacidadPrestamo(plazo90);

    // Paso 5 — bandas de financiación
    // Banda 1 — financiación ≤90% (plazo hasta 40 años)
    const precio1Raw = (capacidad40 + ahorroNum - GASTOS_FIJOS) / (1 + itp);
    const entrada1 = ahorroNum - (itp * precio1Raw + GASTOS_FIJOS);
    const validoBanda1 = precio1Raw > 0 && entrada1 >= 0 && (entrada1 / precio1Raw) >= 0.10;
    const precioBanda1 = validoBanda1 ? precio1Raw : null;

    // Banda 2 — financiación >90% hasta 100% (plazo hasta 30 años)
    // El precio se basa únicamente en la capacidad de préstamo por ingresos;
    // el ahorro disponible no la recorta (a diferencia de la Banda 1).
    const precioBanda2 = capacidad30;
    const validoBanda2 = precioBanda2 > 0;

    // Paso 6 — resultado final
    const candidatos = [];
    if (validoBanda1) candidatos.push({ precio: precioBanda1, banda: 1, plazo: plazo90, financiacionLabel: 'Hasta el 90% del precio' });
    if (validoBanda2) candidatos.push({ precio: precioBanda2, banda: 2, plazo: plazo100, financiacionLabel: 'Entre el 90% y el 100% del precio' });

    if (candidatos.length === 0) {
      return { status: 'no-viable' };
    }

    const ganador = candidatos.reduce((max, c) => c.precio > max.precio ? c : max, candidatos[0]);
    const precioFinal = Math.floor(ganador.precio / 1000) * 1000;

    const entradaFinal = ahorroNum - (itp * precioFinal + GASTOS_FIJOS);
    const pctFinanciacion = precioFinal > 0 ? ((precioFinal - entradaFinal) / precioFinal) * 100 : 0;

    return {
      status: 'ok',
      precioFinal,
      banda: ganador.banda,
      plazo: ganador.plazo,
      financiacionLabel: ganador.financiacionLabel,
      cuotaMaxima,
      itp,
      entradaFinal,
      pctFinanciacion,
    };
  }, [numTitulares, titular1, titular2, cuotaDeudas, ahorro, provincia]);

  const mensajeError = {
    'no-ingresos': 'Con estos ingresos y las deudas actuales, no se cumple el requisito mínimo de cuota máxima admisible. No es posible calcular un importe.',
    'no-edad': `El titular de mayor edad no cumple el requisito de edad máxima (${EDAD_MAXIMA} años al término de la hipoteca). No es posible calcular un plazo.`,
    'no-viable': 'Con el ahorro disponible y la cuota máxima admisible no se alcanza una operación viable. Consúltanos para valorar tu caso con detalle.',
  };

  return (
    <div className="pt-24">
      <Helmet>
        <title>Calculadora privada</title>
        <meta name="robots" content="noindex, nofollow" />
      </Helmet>

      <section className="py-8 sm:py-14 bg-[#FDFBF8] min-h-screen">
        <div className="container mx-auto px-4">
          <div className="max-w-2xl mx-auto bg-white rounded-3xl shadow-xl border border-[#1A3C40]/5 overflow-hidden">
            <div className="p-6 sm:p-10">

              <p className="text-xs font-semibold text-gray-400 uppercase tracking-wider mb-3">
                Calculadora interna — uso privado
              </p>
              <div className="flex items-center gap-3 mb-8 sm:mb-10">
                <div className="w-11 h-11 rounded-2xl bg-[#2EBFA5]/10 flex items-center justify-center flex-shrink-0">
                  <Home className="w-5 h-5 text-[#2EBFA5]" />
                </div>
                <h1 className="text-2xl sm:text-3xl font-extrabold text-[#1A3C40] leading-tight tracking-tight">
                  Importe máximo de compra de vivienda
                </h1>
              </div>

              <div className="space-y-8">

                <div className="space-y-4">
                  <div className="flex items-center justify-between gap-4">
                    <h2 className="text-sm font-semibold text-[#1A3C40] uppercase tracking-wide">Titulares</h2>
                    <IconSelect
                      icon={Users}
                      value={numTitulares}
                      onChange={e => setNumTitulares(e.target.value)}
                      className="w-auto"
                    >
                      <option value="1">1 titular</option>
                      <option value="2">2 titulares</option>
                    </IconSelect>
                  </div>

                  <div className="space-y-4">
                    <TitularForm index={0} data={titular1} onChange={setTitular1} />
                    {numTitulares === '2' && (
                      <TitularForm index={1} data={titular2} onChange={setTitular2} />
                    )}
                  </div>
                </div>

                <div className="space-y-4 pt-2 border-t border-[#1A3C40]/10">
                  <h2 className="text-sm font-semibold text-[#1A3C40] uppercase tracking-wide pt-4">Datos de la operación</h2>
                  <div className="grid grid-cols-2 sm:grid-cols-3 gap-4 sm:gap-5">
                    <IconField
                      icon={CreditCard}
                      label="Deudas mensuales (€)"
                      type="number" min="0" value={cuotaDeudas}
                      onChange={e => setCuotaDeudas(e.target.value)}
                      placeholder="0"
                    />
                    <IconField
                      icon={Euro}
                      label="Ahorro disponible (€)"
                      type="number" min="0" value={ahorro}
                      onChange={e => setAhorro(e.target.value)}
                      placeholder="40000"
                    />
                    <div className="col-span-2 sm:col-span-1">
                      <Label className="text-gray-600 text-sm">Provincia</Label>
                      <IconSelect
                        icon={MapPin}
                        value={provincia}
                        onChange={e => setProvincia(e.target.value)}
                        className="mt-1.5 w-full"
                      >
                        <option value="">Selecciona</option>
                        {Object.keys(ITP_POR_PROVINCIA).map(p => (
                          <option key={p} value={p}>{p}</option>
                        ))}
                      </IconSelect>
                    </div>
                  </div>
                </div>
              </div>

              {!resultado && (
                <div className="flex flex-col items-center text-center pt-10 pb-2 gap-2">
                  <Home className="w-6 h-6 text-[#2EBFA5]/40" strokeWidth={1.5} />
                  <p className="text-gray-400 text-sm">
                    Completa todos los datos para ver el importe máximo de compra.
                  </p>
                </div>
              )}

              <AnimatePresence>
                {resultado && resultado.status !== 'ok' && (
                  <motion.div
                    key={resultado.status}
                    initial={{ opacity: 0, y: 8 }}
                    animate={{ opacity: 1, y: 0 }}
                    transition={{ duration: 0.3 }}
                    className="mt-10 flex items-start gap-3 bg-red-50 border border-red-200 rounded-2xl p-5"
                  >
                    <AlertTriangle className="w-5 h-5 text-red-500 flex-shrink-0 mt-0.5" />
                    <p className="text-red-700 text-sm">{mensajeError[resultado.status]}</p>
                  </motion.div>
                )}
              </AnimatePresence>
            </div>

            {/* ── RESULTADO ── */}
            <AnimatePresence>
              {resultado?.status === 'ok' && (
                <motion.div
                  key="resultado-ok"
                  initial={{ opacity: 0, scale: 0.96 }}
                  animate={{ opacity: 1, scale: 1 }}
                  transition={{ duration: 0.4, ease: 'easeOut' }}
                  className="bg-[#1A3C40] px-6 py-12 sm:px-10 sm:py-16 text-center"
                >
                  <p className="text-white/60 text-xs sm:text-sm font-semibold uppercase tracking-wider mb-3">
                    Importe máximo de compra de vivienda
                  </p>
                  <p className="text-[#2EBFA5] font-extrabold leading-none mb-6">
                    <span className="text-5xl sm:text-6xl md:text-7xl">{fmt(resultado.precioFinal)}</span>
                    <span className="text-2xl sm:text-3xl md:text-4xl align-top ml-1">€</span>
                  </p>
                  <p className="text-white/50 text-xs max-w-sm mx-auto mb-10 leading-relaxed">
                    Simulación orientativa realizada en base a los datos aportados. El importe final está sujeto a estudio y aprobación de la entidad financiera, así como a la documentación acreditativa de ingresos y solvencia.
                  </p>
                  <div className="max-w-xs mx-auto">
                    <p className="text-white text-base font-medium mb-4">
                      ¿Te interesa conseguir esta hipoteca?
                    </p>
                    {IFRAME_MODAL_ENABLED ? (
                      <Button
                        onClick={() => handleModalOpenChange(true)}
                        className="w-full bg-[#2EBFA5] hover:bg-[#25a28b] text-white font-semibold px-6 py-6 text-base flex items-center justify-center gap-2"
                      >
                        Solicita tu estudio sin coste <ArrowRight className="w-5 h-5" />
                      </Button>
                    ) : (
                      <a href={CTA_URL} target="_blank" rel="noopener noreferrer" className="block">
                        <Button className="w-full bg-[#2EBFA5] hover:bg-[#25a28b] text-white font-semibold px-6 py-6 text-base flex items-center justify-center gap-2">
                          Solicita tu estudio sin coste <ArrowRight className="w-5 h-5" />
                        </Button>
                      </a>
                    )}
                  </div>
                </motion.div>
              )}
            </AnimatePresence>

          </div>
        </div>
      </section>

      {IFRAME_MODAL_ENABLED && (
      <Dialog open={modalOpen} onOpenChange={handleModalOpenChange}>
        <DialogContent
          ref={dialogContentRef}
          onOpenAutoFocus={(e) => {
            // Radix focuses the first focusable descendant on open, which would
            // otherwise be the iframe. Once an iframe has focus, Escape/keydown
            // events are captured by its (cross-origin) document and never reach
            // this page, so the dialog becomes unclosable via keyboard. Keep
            // focus on the dialog container itself instead.
            e.preventDefault();
            dialogContentRef.current?.focus();
          }}
          className="p-0 gap-0 border-0 sm:border overflow-hidden flex flex-col
            w-screen h-[100dvh] max-w-none rounded-none
            top-0 left-0 translate-x-0 translate-y-0
            sm:w-full sm:h-auto sm:max-w-2xl sm:max-h-[90vh] sm:rounded-2xl
            sm:top-[50%] sm:left-[50%] sm:translate-x-[-50%] sm:translate-y-[-50%]"
        >
          <DialogTitle className="sr-only">Solicita tu estudio hipotecario sin coste</DialogTitle>
          <div className="relative flex-1 min-h-0 bg-white">
            {!iframeLoaded && (
              <div className="absolute inset-0 flex flex-col items-center justify-center gap-3 bg-white">
                <div className="w-8 h-8 border-4 border-gray-200 border-t-[#2EBFA5] rounded-full animate-spin" />
                <p className="text-gray-500 text-sm">Cargando...</p>
              </div>
            )}
            <iframe
              src={CTA_URL}
              title="Solicita tu estudio hipotecario sin coste"
              onLoad={() => setIframeLoaded(true)}
              className="w-full h-full border-0 block"
            />
          </div>
          <div className="flex-shrink-0 flex items-center justify-between gap-3 border-t border-gray-100 bg-gray-50 px-4 py-2.5">
            <p className="text-xs text-gray-500">¿No ves el formulario correctamente?</p>
            <a
              href={CTA_URL}
              target="_blank"
              rel="noopener noreferrer"
              className="flex items-center gap-1 whitespace-nowrap text-xs font-semibold text-[#2EBFA5] hover:underline"
            >
              Abrir en pestaña nueva <ExternalLink className="w-3 h-3" />
            </a>
          </div>
        </DialogContent>
      </Dialog>
      )}
    </div>
  );
};

export default CalculadoraPrivadaPage;
