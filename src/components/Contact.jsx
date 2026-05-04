import React, { useState, useRef } from 'react';
import { motion } from 'framer-motion';
import { Send, Phone, Mail, Clock, Shield } from 'lucide-react';
import emailjs from '@emailjs/browser';
import { Button } from '@/components/ui/button';
import { Input } from '@/components/ui/input';
import { Label } from '@/components/ui/label';
import { Select } from '@/components/ui/select';
import { Textarea } from '@/components/ui/textarea';
import { useToast } from '@/components/ui/use-toast';

const Contact = () => {
  const formRef = useRef();
  const [formData, setFormData] = useState({
    name: '',
    email: '',
    phone: '',
    propertyValue: '',
    mortgageType: '',
    currentSituation: '',
    message: '',
    privacy: false,
    marketing: false
  });
  const [isSubmitting, setIsSubmitting] = useState(false);
  const { toast } = useToast();

  const handleInputChange = e => {
    const { name, value, type, checked } = e.target;
    setFormData(prev => ({
      ...prev,
      [name]: type === 'checkbox' ? checked : value
    }));
  };

  const handleSubmit = async e => {
    e.preventDefault();
    if (!formData.privacy) {
      toast({
        title: "Error",
        description: "Debes aceptar la política de privacidad para continuar.",
        variant: "destructive"
      });
      return;
    }
    setIsSubmitting(true);

    try {
      // 1. Send to Webhook (Notion)
      const webhookPromise = fetch('https://n8n.srv993017.hstgr.cloud/webhook/093ba8d6-0bed-4cb3-ac20-a4c7f3952963', {
        method: 'POST',
        headers: {
          'Content-Type': 'application/json',
        },
        body: JSON.stringify(formData),
      });

      // 2. Send to EmailJS
      // NOTE: Replace 'YOUR_SERVICE_ID', 'YOUR_TEMPLATE_ID', and 'YOUR_PUBLIC_KEY' with actual values from EmailJS dashboard
      const emailParams = {
        to_email: 'guigrsanti@gmail.com',
        from_name: formData.name,
        from_email: formData.email,
        phone: formData.phone,
        property_value: formData.propertyValue || 'No especificado',
        mortgage_type: formData.mortgageType || 'No especificado',
        current_situation: formData.currentSituation || 'No especificado',
        message: formData.message,
        notion_status: "Captación: WEB | Status: Pendiente Llamar"
      };

      // We use a specific template ID. Ideally, you should create a template in EmailJS that uses these variables:
      // {{from_name}}, {{from_email}}, {{phone}}, {{message}}, {{notion_status}}, etc.
      // If you haven't set up EmailJS yet, this call might fail if keys are invalid.
      const emailPromise = emailjs.send(
        'YOUR_SERVICE_ID', 
        'YOUR_TEMPLATE_ID', 
        emailParams, 
        'YOUR_PUBLIC_KEY'
      );

      // Execute both in parallel
      const [webhookResponse, emailResponse] = await Promise.allSettled([webhookPromise, emailPromise]);

      // Check Webhook success
      if (webhookResponse.status === 'rejected' || (webhookResponse.value && !webhookResponse.value.ok)) {
        console.error('Error en Webhook:', webhookResponse.reason || 'Respuesta no exitosa');
        // We don't stop execution here, as email might have succeeded
      }

      // Check EmailJS success
      if (emailResponse.status === 'rejected') {
        console.error('Error en EmailJS:', emailResponse.reason);
      }

      // If at least one succeeded, we consider it a partial success for the user
      if (webhookResponse.status === 'fulfilled' || emailResponse.status === 'fulfilled') {
        toast({
          title: "¡Consulta enviada con éxito!",
          description: "Hemos recibido tus datos. Un experto te contactará en breve."
        });

        setFormData({
          name: '',
          email: '',
          phone: '',
          propertyValue: '',
          mortgageType: '',
          currentSituation: '',
          message: '',
          privacy: false,
          marketing: false
        });
      } else {
        throw new Error('Fallaron todos los métodos de envío');
      }

    } catch (error) {
      console.error('Error general al enviar el formulario:', error);
      toast({
        title: "Error al enviar",
        description: "Hubo un problema al procesar tu consulta. Por favor, inténtalo de nuevo o contacta directamente con nosotros.",
        variant: "destructive"
      });
    } finally {
      setIsSubmitting(false);
    }
  };

  return (
    <section id="contacto" className="section-padding bg-white">
      <div className="container mx-auto px-4">
        <motion.div initial={{
        opacity: 0,
        y: 30
      }} whileInView={{
        opacity: 1,
        y: 0
      }} viewport={{
        once: true
      }} className="text-center mb-16">
          <h2 className="text-4xl md:text-5xl font-bold text-[#1A3C40] mb-6">
            Obtén tu propuesta
            <span className="text-[#2EBFA5] block">personalizada</span>
          </h2>
          <p className="text-xl text-gray-700 max-w-3xl mx-auto">
            Completa el formulario y nuestros expertos te contactarán en menos de 24 horas
          </p>
        </motion.div>

        <div className="max-w-6xl mx-auto">
          <div className="grid lg:grid-cols-2 gap-12">
            {/* Formulario */}
            <motion.div initial={{
            opacity: 0,
            x: -30
          }} whileInView={{
            opacity: 1,
            x: 0
          }} viewport={{
            once: true
          }} className="bg-[#E9ECEF] rounded-2xl p-8">
              <div className="flex items-center mb-6">
                <Send className="w-8 h-8 text-[#1A3C40] mr-3" />
                <h3 className="text-2xl font-bold text-[#1A3C40]">Solicita tu consulta gratuita</h3>
              </div>

              <form ref={formRef} onSubmit={handleSubmit} className="space-y-6">
                <div className="grid md:grid-cols-2 gap-4">
                  <div>
                    <Label htmlFor="name" className="text-gray-700 font-medium">
                      Nombre completo *
                    </Label>
                    <Input id="name" name="name" type="text" required value={formData.name} onChange={handleInputChange} className="mt-2" placeholder="Tu nombre completo" />
                  </div>
                  <div>
                    <Label htmlFor="phone" className="text-gray-700 font-medium">
                      Teléfono *
                    </Label>
                    <Input id="phone" name="phone" type="tel" required value={formData.phone} onChange={handleInputChange} className="mt-2" placeholder="600 123 456" />
                  </div>
                </div>

                <div>
                  <Label htmlFor="email" className="text-gray-700 font-medium">
                    Email *
                  </Label>
                  <Input id="email" name="email" type="email" required value={formData.email} onChange={handleInputChange} className="mt-2" placeholder="tu@email.com" />
                </div>

                <div className="grid md:grid-cols-2 gap-4">
                  <div>
                    <Label htmlFor="propertyValue" className="text-gray-700 font-medium">
                      Valor de la propiedad (€)
                    </Label>
                    <Input id="propertyValue" name="propertyValue" type="number" value={formData.propertyValue} onChange={handleInputChange} className="mt-2" placeholder="300000" />
                  </div>
                  <div>
                    <Label htmlFor="mortgageType" className="text-gray-700 font-medium">
                      Tipo de hipoteca
                    </Label>
                    <Select id="mortgageType" name="mortgageType" value={formData.mortgageType} onChange={handleInputChange} className="mt-2">
                      <option value="">Selecciona una opción</option>
                      <option value="primera-vivienda">Primera vivienda</option>
                      <option value="segunda-vivienda">Segunda vivienda</option>
                      <option value="100-financiacion">100% financiación</option>
                      <option value="100-gastos">100% + gastos</option>
                      <option value="joven">Hipoteca joven</option>
                      <option value="verde">Hipoteca verde</option>
                      <option value="no-residente">No residente</option>
                      <option value="reforma">Reforma</option>
                      <option value="subrogacion">Subrogación</option>
                    </Select>
                  </div>
                </div>

                <div>
                  <Label htmlFor="currentSituation" className="text-gray-700 font-medium">
                    Situación laboral
                  </Label>
                  <Select id="currentSituation" name="currentSituation" value={formData.currentSituation} onChange={handleInputChange} className="mt-2">
                    <option value="">Selecciona tu situación</option>
                    <option value="empleado-cuenta-ajena">Empleado por cuenta ajena</option>
                    <option value="autonomo">Autónomo</option>
                    <option value="funcionario">Funcionario</option>
                    <option value="pensionista">Pensionista</option>
                    <option value="desempleado">Desempleado</option>
                    <option value="estudiante">Estudiante</option>
                    <option value="otros">Otros</option>
                  </Select>
                </div>

                <div>
                  <Label htmlFor="message" className="text-gray-700 font-medium">
                    Cuéntanos tu caso
                  </Label>
                  <Textarea id="message" name="message" value={formData.message} onChange={handleInputChange} className="mt-2" placeholder="Describe tu situación, necesidades específicas, plazos, etc." />
                </div>

                <div className="space-y-3">
                  <div className="flex items-start space-x-3">
                    <input
                      type="checkbox"
                      id="privacy"
                      name="privacy"
                      checked={formData.privacy}
                      onChange={handleInputChange}
                      className="mt-1 w-4 h-4 accent-[#1A3C40] border-gray-300 rounded focus:ring-[#2EBFA5] flex-shrink-0"
                    />
                    <Label htmlFor="privacy" className="text-sm text-gray-600 leading-relaxed cursor-pointer">
                      He leído y acepto la{' '}
                      <a href="/politica-privacidad" target="_blank" rel="noopener noreferrer" className="text-[#1A3C40] font-medium hover:underline">
                        Política de Privacidad
                      </a>{' '}
                      <span className="text-red-500">*</span>
                    </Label>
                  </div>
                  <div className="flex items-start space-x-3">
                    <input
                      type="checkbox"
                      id="marketing"
                      name="marketing"
                      checked={formData.marketing}
                      onChange={handleInputChange}
                      className="mt-1 w-4 h-4 accent-[#1A3C40] border-gray-300 rounded focus:ring-[#2EBFA5] flex-shrink-0"
                    />
                    <Label htmlFor="marketing" className="text-sm text-gray-600 leading-relaxed cursor-pointer">
                      Acepto recibir información sobre hipotecas, consejos y comunicaciones comerciales de Avanza Consulting Hipotecario SL
                    </Label>
                  </div>
                </div>

                <Button type="submit" disabled={isSubmitting} className="btn-primary w-full text-base sm:text-lg text-white py-5 sm:py-4 font-semibold">
                  {isSubmitting ? (
                    'Enviando...'
                  ) : (
                    <>
                      <span className="hidden sm:inline">Quiero mi propuesta personalizada</span>
                      <span className="inline sm:hidden text-sm">Mi propuesta personalizada</span>
                    </>
                  )}
                </Button>
              </form>

              <div className="mt-6 p-4 bg-green-100 rounded-lg border border-green-300">
                <div className="flex items-center mb-2">
                  <Shield className="w-5 h-5 text-green-600 mr-2" />
                  <span className="font-semibold text-green-800">Estudio 100% gratuito y sin compromiso</span>
                </div>
                <p className="text-sm text-green-700">Contacta con nosotros para un estudio personalizado.</p>
              </div>
            </motion.div>

            {/* Información de contacto */}
            <motion.div initial={{
            opacity: 0,
            x: 30
          }} whileInView={{
            opacity: 1,
            x: 0
          }} viewport={{
            once: true
          }} className="space-y-8">
              <div className="bg-[#1A3C40] text-white rounded-2xl p-8">
                <h3 className="text-2xl font-bold mb-6">¿Prefieres llamarnos?</h3>
                
                <div className="space-y-6">
                  <div className="flex items-center">
                    <Phone className="w-6 h-6 mr-4 text-[#2EBFA5]" />
                    <div>
                      <div className="font-semibold">Teléfono de contacto</div>
                      <div className="text-gray-300">624 810 190</div>
                    </div>
                  </div>
                  
                  <div className="flex items-center">
                    <Mail className="w-6 h-6 mr-4 text-[#2EBFA5]" />
                    <div>
                      <div className="font-semibold">Email</div>
                      <div className="text-gray-300">contacto@avanzahipotecas.es</div>
                    </div>
                  </div>
                  
                  <div className="flex items-start">
                    <Clock className="w-6 h-6 mr-4 text-[#2EBFA5] mt-1 flex-shrink-0" />
                    <div>
                      <div className="font-semibold">Horario de atención</div>
                      <div className="text-gray-300">Lunes a Jueves: 9:00h - 14:00h y 16:00h - 19:00h</div>
                      <div className="text-gray-300">Viernes: 8:00h - 14:00h</div>
                    </div>
                  </div>
                </div>
              </div>

              <div className="bg-[#E9ECEF] rounded-2xl p-8">
                <h4 className="text-xl font-bold text-[#1A3C40] mb-4">¿Qué ocurre después?</h4>
                
                <div className="space-y-4">
                  <div className="flex items-start">
                    <div className="w-8 h-8 bg-[#2EBFA5] text-white rounded-full flex items-center justify-center text-sm font-bold mr-4 mt-1">1</div>
                    <div>
                      <div className="font-semibold text-[#1A3C40]">Análisis de tu perfil</div>
                      <div className="text-gray-600 text-sm">Estudiamos tu situación financiera y necesidades específicas</div>
                    </div>
                  </div>
                  
                  <div className="flex items-start">
                    <div className="w-8 h-8 bg-[#2EBFA5] text-white rounded-full flex items-center justify-center text-sm font-bold mr-4 mt-1">2</div>
                    <div>
                      <div className="font-semibold text-[#1A3C40]">Búsqueda personalizada</div>
                      <div className="text-gray-600 text-sm">Comparamos ofertas entre más de 20 bancos</div>
                    </div>
                  </div>
                  
                  <div className="flex items-start">
                    <div className="w-8 h-8 bg-[#2EBFA5] text-white rounded-full flex items-center justify-center text-sm font-bold mr-4 mt-1">3</div>
                    <div>
                      <div className="font-semibold text-[#1A3C40]">Presentación de opciones</div>
                      <div className="text-gray-600 text-sm">Te presentamos las mejores ofertas adaptadas a tu caso</div>
                    </div>
                  </div>
                  
                  <div className="flex items-start">
                    <div className="w-8 h-8 bg-[#2EBFA5] text-white rounded-full flex items-center justify-center text-sm font-bold mr-4 mt-1">4</div>
                    <div>
                      <div className="font-semibold text-[#1A3C40]">Gestión completa</div>
                      <div className="text-gray-600 text-sm">Nos encargamos de toda la tramitación hasta la firma</div>
                    </div>
                  </div>
                </div>
              </div>

            </motion.div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default Contact;