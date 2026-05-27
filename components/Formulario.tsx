"use client";

import { useState } from "react";
import { motion } from "framer-motion";
import { Check } from "lucide-react";
import Image from "next/image";

type Form = {
  nombre: string;
  socio: string;
  correo: string;
  telefono: string;
  fecha: string;
  personas: string;
  tipo: string;
  comentarios: string;
};

const initial: Form = {
  nombre: "",
  socio: "",
  correo: "",
  telefono: "",
  fecha: "",
  personas: "",
  tipo: "",
  comentarios: "",
};

const labelCls = "block text-[10px] font-semibold tracking-[0.25em] uppercase text-charcoal-light mb-2";
const inputCls =
  "w-full bg-off-white border border-border text-charcoal text-sm px-4 py-3.5 focus:outline-none focus:border-green-dark transition-colors placeholder:text-charcoal-light/50";

export default function Formulario() {
  const [form, setForm] = useState<Form>(initial);
  const [sent, setSent] = useState(false);

  const update = (k: keyof Form, v: string) =>
    setForm((p) => ({ ...p, [k]: v }));

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    setSent(true);
  };

  return (
    <section id="contacto" className="bg-white border-t border-border">
      <div className="grid grid-cols-1 lg:grid-cols-2 min-h-[700px]">
        {/* Left — image */}
        <div className="relative h-64 lg:h-auto overflow-hidden">
          <Image
            src="/images/hero-club.jpg"
            alt="Club Deportivo Cumbres"
            fill
            className="object-cover object-center"
            quality={85}
          />
          <div className="absolute inset-0 bg-black/30" />
          <div className="absolute inset-0 flex flex-col justify-end p-10 lg:p-14">
            <p className="text-lime text-[10px] font-bold tracking-[0.35em] uppercase mb-4">
              Reservaciones
            </p>
            <h2 className="font-display text-3xl lg:text-4xl font-semibold text-white leading-snug mb-4">
              Organiza tu evento en el club.
            </h2>
            <p className="text-white/60 text-sm leading-relaxed max-w-xs">
              Asadores, palapas y salones disponibles para socios. Responderemos en menos de 24 horas.
            </p>
          </div>
        </div>

        {/* Right — form */}
        <div className="flex items-center px-8 lg:px-14 xl:px-20 py-16">
          {sent ? (
            <motion.div
              initial={{ opacity: 0, scale: 0.97 }}
              animate={{ opacity: 1, scale: 1 }}
              className="w-full text-center py-12"
            >
              <div className="w-14 h-14 rounded-full bg-green-dark flex items-center justify-center mx-auto mb-6">
                <Check size={26} className="text-white" />
              </div>
              <h3 className="font-display text-2xl font-semibold text-charcoal mb-3">
                Solicitud recibida
              </h3>
              <p className="text-charcoal-light text-sm leading-relaxed mb-8 max-w-xs mx-auto">
                Nos pondremos en contacto contigo a <strong>{form.correo}</strong> a la brevedad.
              </p>
              <button
                onClick={() => { setForm(initial); setSent(false); }}
                className="text-sm text-green-dark border-b border-green-dark/40 hover:border-green-dark transition-colors"
              >
                Enviar otra solicitud
              </button>
            </motion.div>
          ) : (
            <form onSubmit={handleSubmit} className="w-full max-w-lg">
              <h3 className="font-display text-2xl font-semibold text-charcoal mb-8">
                Formulario de Reservación
              </h3>

              {/* Row 1 */}
              <div className="grid grid-cols-1 sm:grid-cols-2 gap-5 mb-5">
                <div>
                  <label className={labelCls}>Nombre</label>
                  <input
                    type="text"
                    required
                    placeholder="Tu nombre"
                    value={form.nombre}
                    onChange={(e) => update("nombre", e.target.value)}
                    className={inputCls}
                  />
                </div>
                <div>
                  <label className={labelCls}>Número de Socio</label>
                  <input
                    type="text"
                    placeholder="Ej. 00123"
                    value={form.socio}
                    onChange={(e) => update("socio", e.target.value)}
                    className={inputCls}
                  />
                </div>
              </div>

              {/* Teléfono */}
              <div className="mb-5">
                <label className={labelCls}>Teléfono</label>
                <input
                  type="tel"
                  placeholder="+52 81 0000 0000"
                  value={form.telefono}
                  onChange={(e) => update("telefono", e.target.value)}
                  className={inputCls}
                />
              </div>

              {/* Correo */}
              <div className="mb-5">
                <label className={labelCls}>Correo electrónico</label>
                <input
                  type="email"
                  required
                  placeholder="correo@ejemplo.com"
                  value={form.correo}
                  onChange={(e) => update("correo", e.target.value)}
                  className={inputCls}
                />
              </div>

              {/* Row 2 */}
              <div className="grid grid-cols-1 sm:grid-cols-2 gap-5 mb-5">
                <div>
                  <label className={labelCls}>Fecha</label>
                  <input
                    type="date"
                    required
                    value={form.fecha}
                    min={new Date().toISOString().split("T")[0]}
                    onChange={(e) => update("fecha", e.target.value)}
                    className={inputCls}
                  />
                </div>
                <div>
                  <label className={labelCls}>Personas</label>
                  <input
                    type="number"
                    min={1}
                    max={300}
                    placeholder="Número de personas"
                    value={form.personas}
                    onChange={(e) => update("personas", e.target.value)}
                    className={inputCls}
                  />
                </div>
              </div>

              {/* Tipo */}
              <div className="mb-5">
                <label className={labelCls}>Tipo de reservación</label>
                <select
                  required
                  value={form.tipo}
                  onChange={(e) => update("tipo", e.target.value)}
                  className={inputCls + " cursor-pointer"}
                >
                  <option value="" disabled>Selecciona una opción</option>
                  <option value="asador">Asador privado</option>
                  <option value="salon">Salón de eventos</option>
                  <option value="terraza">Terraza</option>
                  <option value="reunion">Reunión corporativa</option>
                  <option value="otro">Otro</option>
                </select>
              </div>

              {/* Comentarios */}
              <div className="mb-8">
                <label className={labelCls}>Comentarios</label>
                <textarea
                  rows={3}
                  placeholder="Cuéntanos sobre tu evento o requerimientos especiales..."
                  value={form.comentarios}
                  onChange={(e) => update("comentarios", e.target.value)}
                  className={inputCls + " resize-none"}
                />
              </div>

              <button
                type="submit"
                className="w-full py-4 bg-green-dark hover:bg-green-deep text-white text-sm font-semibold tracking-wide transition-colors duration-300"
              >
                Enviar Solicitud
              </button>
            </form>
          )}
        </div>
      </div>
    </section>
  );
}
