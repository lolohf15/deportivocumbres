"use client";

import { useState } from "react";
import { motion, AnimatePresence } from "framer-motion";
import { ChevronRight, ChevronLeft, Check, Calendar, Clock, Users, User, Mail, Phone, MessageSquare } from "lucide-react";

const reservationTypes = [
  { id: "padel", label: "Pádel", emoji: "🏸", desc: "Reserva de cancha de pádel" },
  { id: "tenis", label: "Tenis", emoji: "🎾", desc: "Reserva de cancha de tenis" },
  { id: "asador", label: "Asador", emoji: "🔥", desc: "Renta de área de asadores" },
  { id: "evento", label: "Evento", emoji: "🎉", desc: "Organización de eventos y celebraciones" },
];

const timeSlots = [
  "07:00 AM", "08:00 AM", "09:00 AM", "10:00 AM", "11:00 AM",
  "12:00 PM", "01:00 PM", "02:00 PM", "03:00 PM", "04:00 PM",
  "05:00 PM", "06:00 PM", "07:00 PM", "08:00 PM", "09:00 PM",
];

type FormData = {
  tipo: string;
  fecha: string;
  horario: string;
  personas: string;
  nombre: string;
  correo: string;
  telefono: string;
  comentarios: string;
};

const steps = [
  { id: 1, title: "Tipo de Reservación", subtitle: "¿Qué deseas reservar?" },
  { id: 2, title: "Fecha y Horario", subtitle: "Selecciona cuándo" },
  { id: 3, title: "Tus Datos", subtitle: "Información de contacto" },
  { id: 4, title: "Confirmación", subtitle: "Revisa tu solicitud" },
];

const slideVariants: import("framer-motion").Variants = {
  enter: (direction: number) => ({
    x: direction > 0 ? 60 : -60,
    opacity: 0,
  }),
  center: {
    x: 0,
    opacity: 1,
    transition: { duration: 0.4, ease: [0.25, 0.46, 0.45, 0.94] as const },
  },
  exit: (direction: number) => ({
    x: direction > 0 ? -60 : 60,
    opacity: 0,
    transition: { duration: 0.3 },
  }),
};

export default function ReservationForm() {
  const [step, setStep] = useState(1);
  const [direction, setDirection] = useState(1);
  const [submitted, setSubmitted] = useState(false);
  const [formData, setFormData] = useState<FormData>({
    tipo: "",
    fecha: "",
    horario: "",
    personas: "2",
    nombre: "",
    correo: "",
    telefono: "",
    comentarios: "",
  });

  const update = (key: keyof FormData, value: string) =>
    setFormData((prev) => ({ ...prev, [key]: value }));

  const next = () => {
    setDirection(1);
    setStep((s) => Math.min(s + 1, 4));
  };

  const prev = () => {
    setDirection(-1);
    setStep((s) => Math.max(s - 1, 1));
  };

  const submit = () => {
    setSubmitted(true);
  };

  const canProceed = () => {
    if (step === 1) return !!formData.tipo;
    if (step === 2) return !!formData.fecha && !!formData.horario;
    if (step === 3) return !!formData.nombre && !!formData.correo && !!formData.telefono;
    return true;
  };

  const selectedType = reservationTypes.find((t) => t.id === formData.tipo);

  return (
    <section id="formulario" className="py-28 lg:py-36 bg-cream-100">
      <div className="max-w-7xl mx-auto px-6 lg:px-8">
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-16 items-center">
          {/* Left: Info */}
          <motion.div
            initial={{ opacity: 0, x: -30 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.8 }}
          >
            <div className="flex items-center gap-4 mb-6">
              <div className="h-[1px] w-10 bg-forest-600" />
              <span className="text-forest-600 text-xs font-semibold tracking-[0.3em] uppercase">
                Reservaciones
              </span>
            </div>
            <h2 className="font-display text-4xl lg:text-5xl font-bold text-carbon-900 leading-tight mb-6">
              Reserva tu{" "}
              <span className="italic text-forest-700">espacio</span>{" "}
              ideal.
            </h2>
            <p className="text-carbon-400 text-lg leading-relaxed mb-12">
              Completa el formulario y uno de nuestros asesores confirmará tu reservación en menos de 2 horas.
            </p>

            {/* Steps list */}
            <div className="space-y-6">
              {steps.map((s) => (
                <div key={s.id} className="flex items-center gap-4">
                  <div
                    className={`w-10 h-10 rounded-full flex items-center justify-center flex-shrink-0 transition-all duration-300 ${
                      step > s.id
                        ? "bg-forest-700 border-2 border-forest-600"
                        : step === s.id
                        ? "bg-gold-500 border-2 border-gold-400"
                        : "bg-cream-200 border-2 border-cream-300"
                    }`}
                  >
                    {step > s.id ? (
                      <Check size={16} className="text-white" />
                    ) : (
                      <span
                        className={`text-sm font-bold ${
                          step === s.id ? "text-carbon-900" : "text-carbon-400"
                        }`}
                      >
                        {s.id}
                      </span>
                    )}
                  </div>
                  <div>
                    <p
                      className={`font-semibold text-sm transition-colors duration-300 ${
                        step === s.id ? "text-carbon-900" : "text-carbon-400"
                      }`}
                    >
                      {s.title}
                    </p>
                    <p className="text-carbon-300 text-xs">{s.subtitle}</p>
                  </div>
                  {s.id < steps.length && (
                    <div className="absolute h-6 w-[1px] bg-cream-300 left-[1.25rem] mt-10" />
                  )}
                </div>
              ))}
            </div>
          </motion.div>

          {/* Right: Form */}
          <motion.div
            initial={{ opacity: 0, x: 30 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.8 }}
          >
            {submitted ? (
              <motion.div
                initial={{ scale: 0.9, opacity: 0 }}
                animate={{ scale: 1, opacity: 1 }}
                className="bg-white rounded-3xl p-10 shadow-xl text-center border border-cream-200"
              >
                <motion.div
                  initial={{ scale: 0 }}
                  animate={{ scale: 1 }}
                  transition={{ type: "spring", delay: 0.2 }}
                  className="w-20 h-20 rounded-full bg-forest-800 flex items-center justify-center mx-auto mb-6"
                >
                  <Check size={36} className="text-gold-400" />
                </motion.div>
                <h3 className="font-display text-3xl font-bold text-carbon-900 mb-3">
                  ¡Solicitud Enviada!
                </h3>
                <p className="text-carbon-400 mb-2">
                  Hemos recibido tu reservación de{" "}
                  <strong className="text-carbon-700">{selectedType?.label}</strong>.
                </p>
                <p className="text-carbon-400 text-sm mb-8">
                  Un asesor se pondrá en contacto contigo al correo{" "}
                  <strong className="text-forest-700">{formData.correo}</strong> en menos de 2 horas.
                </p>
                <button
                  onClick={() => {
                    setSubmitted(false);
                    setStep(1);
                    setFormData({
                      tipo: "", fecha: "", horario: "", personas: "2",
                      nombre: "", correo: "", telefono: "", comentarios: "",
                    });
                  }}
                  className="px-6 py-3 bg-forest-800 text-white rounded-2xl font-semibold text-sm hover:bg-forest-700 transition-colors"
                >
                  Nueva Reservación
                </button>
              </motion.div>
            ) : (
              <div className="bg-white rounded-3xl shadow-xl overflow-hidden border border-cream-200">
                {/* Progress Bar */}
                <div className="h-1.5 bg-cream-200">
                  <motion.div
                    className="h-full bg-gradient-to-r from-forest-700 to-gold-500"
                    animate={{ width: `${(step / 4) * 100}%` }}
                    transition={{ duration: 0.4 }}
                  />
                </div>

                {/* Step Header */}
                <div className="px-8 pt-8 pb-0">
                  <div className="flex items-center justify-between mb-2">
                    <span className="text-gold-600 text-xs font-bold tracking-widest uppercase">
                      Paso {step} de 4
                    </span>
                    <span className="text-carbon-300 text-xs">
                      {steps[step - 1].subtitle}
                    </span>
                  </div>
                  <h3 className="font-display text-2xl font-bold text-carbon-900">
                    {steps[step - 1].title}
                  </h3>
                </div>

                {/* Form Content */}
                <div className="overflow-hidden relative" style={{ minHeight: "340px" }}>
                  <AnimatePresence custom={direction} mode="wait">
                    <motion.div
                      key={step}
                      custom={direction}
                      variants={slideVariants}
                      initial="enter"
                      animate="center"
                      exit="exit"
                      className="p-8"
                    >
                      {/* Step 1: Type */}
                      {step === 1 && (
                        <div className="grid grid-cols-2 gap-3">
                          {reservationTypes.map((type) => (
                            <motion.button
                              key={type.id}
                              whileTap={{ scale: 0.97 }}
                              onClick={() => update("tipo", type.id)}
                              className={`p-5 rounded-2xl border-2 text-left transition-all duration-200 ${
                                formData.tipo === type.id
                                  ? "border-forest-700 bg-forest-50 shadow-md shadow-forest-100"
                                  : "border-cream-200 hover:border-cream-300 bg-cream-50 hover:bg-cream-100"
                              }`}
                            >
                              <span className="text-3xl block mb-3">{type.emoji}</span>
                              <span
                                className={`font-semibold block text-sm ${
                                  formData.tipo === type.id ? "text-forest-800" : "text-carbon-700"
                                }`}
                              >
                                {type.label}
                              </span>
                              <span className="text-carbon-400 text-xs mt-1 block">
                                {type.desc}
                              </span>
                            </motion.button>
                          ))}
                        </div>
                      )}

                      {/* Step 2: Date & Time */}
                      {step === 2 && (
                        <div className="space-y-5">
                          <div>
                            <label className="block text-xs font-semibold text-carbon-500 uppercase tracking-widest mb-2">
                              <span className="flex items-center gap-2">
                                <Calendar size={12} /> Fecha
                              </span>
                            </label>
                            <input
                              type="date"
                              value={formData.fecha}
                              onChange={(e) => update("fecha", e.target.value)}
                              min={new Date().toISOString().split("T")[0]}
                              className="w-full px-4 py-3.5 rounded-xl border border-cream-200 bg-cream-50 text-carbon-800 focus:outline-none focus:border-forest-600 focus:ring-2 focus:ring-forest-100 transition-all"
                            />
                          </div>
                          <div>
                            <label className="block text-xs font-semibold text-carbon-500 uppercase tracking-widest mb-2">
                              <span className="flex items-center gap-2">
                                <Clock size={12} /> Horario
                              </span>
                            </label>
                            <div className="grid grid-cols-3 gap-2 max-h-48 overflow-y-auto pr-1">
                              {timeSlots.map((slot) => (
                                <button
                                  key={slot}
                                  onClick={() => update("horario", slot)}
                                  className={`py-2.5 rounded-xl text-xs font-medium transition-all duration-200 ${
                                    formData.horario === slot
                                      ? "bg-forest-800 text-white shadow-md"
                                      : "bg-cream-100 hover:bg-cream-200 text-carbon-600"
                                  }`}
                                >
                                  {slot}
                                </button>
                              ))}
                            </div>
                          </div>
                          <div>
                            <label className="block text-xs font-semibold text-carbon-500 uppercase tracking-widest mb-2">
                              <span className="flex items-center gap-2">
                                <Users size={12} /> Número de Personas
                              </span>
                            </label>
                            <div className="flex items-center gap-4">
                              <button
                                onClick={() =>
                                  update("personas", String(Math.max(1, parseInt(formData.personas) - 1)))
                                }
                                className="w-10 h-10 rounded-full bg-cream-100 hover:bg-cream-200 font-bold text-carbon-700 transition-colors"
                              >
                                −
                              </button>
                              <span className="font-display text-3xl font-bold text-carbon-900 w-12 text-center">
                                {formData.personas}
                              </span>
                              <button
                                onClick={() =>
                                  update("personas", String(Math.min(30, parseInt(formData.personas) + 1)))
                                }
                                className="w-10 h-10 rounded-full bg-cream-100 hover:bg-cream-200 font-bold text-carbon-700 transition-colors"
                              >
                                +
                              </button>
                            </div>
                          </div>
                        </div>
                      )}

                      {/* Step 3: Personal Info */}
                      {step === 3 && (
                        <div className="space-y-4">
                          {[
                            { key: "nombre", label: "Nombre del Socio", icon: User, type: "text", placeholder: "Tu nombre completo" },
                            { key: "correo", label: "Correo Electrónico", icon: Mail, type: "email", placeholder: "tucorreo@ejemplo.com" },
                            { key: "telefono", label: "Teléfono", icon: Phone, type: "tel", placeholder: "+52 (81) 0000-0000" },
                          ].map(({ key, label, icon: Icon, type, placeholder }) => (
                            <div key={key}>
                              <label className="block text-xs font-semibold text-carbon-500 uppercase tracking-widest mb-2">
                                <span className="flex items-center gap-2">
                                  <Icon size={12} /> {label}
                                </span>
                              </label>
                              <input
                                type={type}
                                value={formData[key as keyof FormData]}
                                onChange={(e) => update(key as keyof FormData, e.target.value)}
                                placeholder={placeholder}
                                className="w-full px-4 py-3.5 rounded-xl border border-cream-200 bg-cream-50 text-carbon-800 placeholder-carbon-300 focus:outline-none focus:border-forest-600 focus:ring-2 focus:ring-forest-100 transition-all"
                              />
                            </div>
                          ))}
                          <div>
                            <label className="block text-xs font-semibold text-carbon-500 uppercase tracking-widest mb-2">
                              <span className="flex items-center gap-2">
                                <MessageSquare size={12} /> Comentarios (opcional)
                              </span>
                            </label>
                            <textarea
                              value={formData.comentarios}
                              onChange={(e) => update("comentarios", e.target.value)}
                              placeholder="Algún requerimiento especial..."
                              rows={3}
                              className="w-full px-4 py-3.5 rounded-xl border border-cream-200 bg-cream-50 text-carbon-800 placeholder-carbon-300 focus:outline-none focus:border-forest-600 focus:ring-2 focus:ring-forest-100 transition-all resize-none"
                            />
                          </div>
                        </div>
                      )}

                      {/* Step 4: Confirm */}
                      {step === 4 && (
                        <div className="space-y-4">
                          <div className="bg-forest-50 border border-forest-100 rounded-2xl p-5 space-y-4">
                            {[
                              { label: "Tipo", value: selectedType?.label + " " + selectedType?.emoji },
                              { label: "Fecha", value: formData.fecha || "—" },
                              { label: "Horario", value: formData.horario || "—" },
                              { label: "Personas", value: formData.personas },
                              { label: "Nombre", value: formData.nombre },
                              { label: "Correo", value: formData.correo },
                              { label: "Teléfono", value: formData.telefono },
                            ].map(({ label, value }) => (
                              <div key={label} className="flex justify-between items-start">
                                <span className="text-carbon-400 text-sm">{label}</span>
                                <span className="text-carbon-800 text-sm font-semibold text-right max-w-[200px]">
                                  {value}
                                </span>
                              </div>
                            ))}
                            {formData.comentarios && (
                              <div>
                                <span className="text-carbon-400 text-sm block mb-1">Comentarios</span>
                                <p className="text-carbon-700 text-sm bg-white/60 rounded-xl p-3">
                                  {formData.comentarios}
                                </p>
                              </div>
                            )}
                          </div>
                          <p className="text-carbon-400 text-xs text-center">
                            Al enviar confirmas que eres socio del club y aceptas las políticas de cancelación.
                          </p>
                        </div>
                      )}
                    </motion.div>
                  </AnimatePresence>
                </div>

                {/* Navigation */}
                <div className="px-8 pb-8 flex items-center justify-between gap-4">
                  <button
                    onClick={prev}
                    disabled={step === 1}
                    className="flex items-center gap-2 px-5 py-3 rounded-xl font-semibold text-sm text-carbon-500 hover:text-carbon-800 disabled:opacity-30 disabled:cursor-not-allowed transition-colors"
                  >
                    <ChevronLeft size={16} />
                    Anterior
                  </button>

                  {step < 4 ? (
                    <button
                      onClick={next}
                      disabled={!canProceed()}
                      className="flex items-center gap-2 px-7 py-3 rounded-xl font-bold text-sm bg-forest-800 text-white hover:bg-forest-700 disabled:opacity-40 disabled:cursor-not-allowed transition-all duration-200 hover:shadow-lg hover:shadow-forest-800/20"
                    >
                      Continuar
                      <ChevronRight size={16} />
                    </button>
                  ) : (
                    <button
                      onClick={submit}
                      className="flex items-center gap-2 px-7 py-3 rounded-xl font-bold text-sm bg-gold-500 text-carbon-900 hover:bg-gold-400 transition-all duration-200 hover:shadow-lg hover:shadow-gold-500/20"
                    >
                      Enviar Solicitud
                      <Check size={16} />
                    </button>
                  )}
                </div>
              </div>
            )}
          </motion.div>
        </div>
      </div>
    </section>
  );
}
