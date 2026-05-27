"use client";

import { useState } from "react";
import { motion, AnimatePresence } from "framer-motion";
import { ExternalLink, Calendar, Clock, Users, ArrowRight, Zap } from "lucide-react";

const tabs = [
  { id: "padel", label: "Pádel", icon: "🏸" },
  { id: "tenis", label: "Tenis", icon: "🎾" },
  { id: "asadores", label: "Asadores", icon: "🔥" },
  { id: "eventos", label: "Eventos", icon: "🎉" },
];

const tabContent = {
  padel: {
    title: "Reservación de Pádel",
    subtitle: "Reserva tu cancha en tiempo real a través de Playtomic",
    description:
      "Nuestras 8 canchas de pádel están disponibles para reservar de manera inmediata. Conectamos con Playtomic para ofrecerte la mejor experiencia de reserva en línea.",
    features: [
      "Disponibilidad en tiempo real",
      "Confirmación instantánea por correo",
      "Cancela hasta 2 horas antes sin cargo",
      "Historial y estadísticas de juego",
    ],
    cta: {
      label: "Reservar en Playtomic",
      href: "https://playtomic.com/",
      external: true,
      color: "bg-[#00D4AA] hover:bg-[#00BF99]",
      textColor: "text-white",
    },
    secondary: {
      label: "Ver disponibilidad",
      href: "#formulario",
    },
    badge: "Powered by Playtomic",
    color: "forest",
    hours: "6:00 AM – 11:00 PM",
    minPlayers: "2-4 jugadores",
  },
  tenis: {
    title: "Reservación de Tenis",
    subtitle: "Gestiona tu cancha de tenis con Court Reserve",
    description:
      "Reserva cualquiera de nuestras 6 canchas de tenis (arcilla y superficie dura) a través de nuestra plataforma integrada con Court Reserve.",
    features: [
      "Canchas de arcilla y dura disponibles",
      "Reservas hasta 7 días de anticipación",
      "Notificaciones de confirmación y recordatorio",
      "Programación de clínicas y torneos",
    ],
    cta: {
      label: "Reservar en Court Reserve",
      href: "https://courtreserve.com/players/",
      external: true,
      color: "bg-[#1a56db] hover:bg-[#1645b8]",
      textColor: "text-white",
    },
    secondary: {
      label: "Solicitar clase particular",
      href: "#formulario",
    },
    badge: "Powered by Court Reserve",
    color: "forest",
    hours: "6:00 AM – 10:00 PM",
    minPlayers: "2-4 jugadores",
  },
  asadores: {
    title: "Asadores Privados",
    subtitle: "Vive una experiencia gastronómica única en el club",
    description:
      "Nuestros asadores privados son el espacio perfecto para reuniones familiares y con amigos. Contamos con 6 áreas equipadas con asador de carbón, mesadas y área de descanso.",
    features: [
      "6 áreas privadas con techado",
      "Asador de carbón de alta capacidad",
      "Equipo de cocina incluido",
      "Servicio de limpieza post-evento",
    ],
    cta: {
      label: "Solicitar Reservación",
      href: "#formulario",
      external: false,
      color: "bg-gold-500 hover:bg-gold-400",
      textColor: "text-carbon-900",
    },
    secondary: {
      label: "Ver paquetes disponibles",
      href: "#formulario",
    },
    badge: "Capacidad: hasta 30 personas",
    color: "gold",
    hours: "10:00 AM – 10:00 PM",
    minPlayers: "Mínimo 8 personas",
  },
  eventos: {
    title: "Eventos Especiales",
    subtitle: "Celebra los momentos importantes en el mejor espacio",
    description:
      "Organizamos eventos corporativos, cumpleaños, bodas y todo tipo de celebraciones en nuestros salones y espacios al aire libre con capacidad para hasta 300 personas.",
    features: [
      "Salón de eventos con capacidad 300 personas",
      "Terraza panorámica al aire libre",
      "Equipo audiovisual profesional",
      "Catering y servicio personalizado",
    ],
    cta: {
      label: "Cotizar mi Evento",
      href: "#formulario",
      external: false,
      color: "bg-forest-800 hover:bg-forest-700",
      textColor: "text-white",
    },
    secondary: {
      label: "Ver galería de eventos",
      href: "#eventos",
    },
    badge: "Capacidad: hasta 300 personas",
    color: "forest",
    hours: "Lunes a Domingo",
    minPlayers: "Con anticipación de 2 semanas",
  },
};

export default function Reservations() {
  const [activeTab, setActiveTab] = useState<keyof typeof tabContent>("padel");
  const content = tabContent[activeTab];

  return (
    <section id="reservaciones" className="py-28 lg:py-36 bg-carbon-900">
      <div className="max-w-7xl mx-auto px-6 lg:px-8">
        {/* Header */}
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true, margin: "-100px" }}
          transition={{ duration: 0.7 }}
          className="text-center mb-16"
        >
          <div className="flex items-center justify-center gap-4 mb-6">
            <div className="h-[1px] w-10 bg-gold-500" />
            <span className="text-gold-500 text-xs font-semibold tracking-[0.3em] uppercase">
              Reservaciones
            </span>
            <div className="h-[1px] w-10 bg-gold-500" />
          </div>
          <h2 className="font-display text-4xl lg:text-5xl font-bold text-white leading-tight mb-4">
            Todo en un solo lugar.
          </h2>
          <p className="text-carbon-300 text-lg max-w-xl mx-auto">
            Reserva canchas, asadores y espacios para eventos de forma rápida y sencilla.
          </p>
        </motion.div>

        {/* Tabs */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.6, delay: 0.2 }}
          className="flex flex-wrap justify-center gap-3 mb-12"
        >
          {tabs.map((tab) => (
            <button
              key={tab.id}
              onClick={() => setActiveTab(tab.id as keyof typeof tabContent)}
              className={`flex items-center gap-2 px-6 py-3 rounded-full text-sm font-semibold transition-all duration-300 ${
                activeTab === tab.id
                  ? "bg-gold-500 text-carbon-900 shadow-lg shadow-gold-500/20"
                  : "bg-carbon-700 text-carbon-200 hover:bg-carbon-600 hover:text-white"
              }`}
            >
              <span>{tab.icon}</span>
              {tab.label}
            </button>
          ))}
        </motion.div>

        {/* Content */}
        <AnimatePresence mode="wait">
          <motion.div
            key={activeTab}
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            exit={{ opacity: 0, y: -20 }}
            transition={{ duration: 0.4 }}
            className="grid grid-cols-1 lg:grid-cols-2 gap-8 items-center"
          >
            {/* Left: Info Card */}
            <div className="bg-carbon-800 rounded-3xl p-8 lg:p-10 border border-white/5">
              {/* Badge */}
              <div className="inline-flex items-center gap-2 px-3 py-1.5 rounded-full bg-forest-800/50 border border-forest-600/30 mb-6">
                <Zap size={12} className="text-gold-500" />
                <span className="text-gold-400 text-[10px] font-bold tracking-widest uppercase">
                  {content.badge}
                </span>
              </div>

              <h3 className="font-display text-3xl font-bold text-white mb-2">
                {content.title}
              </h3>
              <p className="text-gold-500 font-medium text-sm mb-6">{content.subtitle}</p>
              <p className="text-carbon-300 leading-relaxed mb-8">{content.description}</p>

              {/* Features */}
              <ul className="space-y-3 mb-8">
                {content.features.map((feature, i) => (
                  <li key={i} className="flex items-start gap-3">
                    <div className="w-5 h-5 rounded-full bg-forest-700/50 border border-forest-600/50 flex items-center justify-center flex-shrink-0 mt-0.5">
                      <div className="w-1.5 h-1.5 rounded-full bg-gold-500" />
                    </div>
                    <span className="text-carbon-200 text-sm">{feature}</span>
                  </li>
                ))}
              </ul>

              {/* Info Pills */}
              <div className="flex flex-wrap gap-3 mb-8">
                <div className="flex items-center gap-2 px-3 py-2 rounded-xl bg-carbon-700 border border-carbon-600">
                  <Clock size={14} className="text-gold-500" />
                  <span className="text-carbon-200 text-xs">{content.hours}</span>
                </div>
                <div className="flex items-center gap-2 px-3 py-2 rounded-xl bg-carbon-700 border border-carbon-600">
                  <Users size={14} className="text-gold-500" />
                  <span className="text-carbon-200 text-xs">{content.minPlayers}</span>
                </div>
              </div>

              {/* CTAs */}
              <div className="flex flex-col sm:flex-row gap-3">
                <a
                  href={content.cta.href}
                  target={content.cta.external ? "_blank" : undefined}
                  rel={content.cta.external ? "noopener noreferrer" : undefined}
                  className={`flex items-center justify-center gap-2 px-6 py-3.5 rounded-2xl font-semibold text-sm transition-all duration-300 hover:shadow-xl hover:-translate-y-0.5 ${content.cta.color} ${content.cta.textColor}`}
                >
                  {content.cta.label}
                  {content.cta.external ? (
                    <ExternalLink size={14} />
                  ) : (
                    <ArrowRight size={14} />
                  )}
                </a>
                <a
                  href={content.secondary.href}
                  className="flex items-center justify-center gap-2 px-6 py-3.5 rounded-2xl font-semibold text-sm border border-carbon-600 text-carbon-200 hover:border-gold-500/50 hover:text-gold-400 transition-all duration-300"
                >
                  {content.secondary.label}
                </a>
              </div>
            </div>

            {/* Right: Visual */}
            <div className="relative">
              {/* Glass card mockup */}
              <div className="bg-gradient-to-br from-carbon-700/50 to-carbon-800/50 backdrop-blur-sm rounded-3xl p-6 border border-white/10 shadow-2xl">
                {/* Mock calendar header */}
                <div className="flex items-center justify-between mb-6">
                  <div>
                    <p className="text-carbon-400 text-xs uppercase tracking-widest mb-1">
                      Disponibilidad
                    </p>
                    <p className="text-white font-display font-bold text-xl">
                      {tabs.find((t) => t.id === activeTab)?.label}
                    </p>
                  </div>
                  <div className="w-12 h-12 rounded-2xl bg-forest-800/60 border border-forest-600/30 flex items-center justify-center">
                    <Calendar size={20} className="text-gold-500" />
                  </div>
                </div>

                {/* Time slots mock */}
                <div className="grid grid-cols-3 gap-2 mb-6">
                  {["07:00", "08:00", "09:00", "10:00", "11:00", "12:00", "13:00", "14:00", "15:00", "16:00", "17:00", "18:00"].map(
                    (time, i) => {
                      const available = ![1, 3, 7, 9].includes(i);
                      return (
                        <motion.button
                          key={time}
                          whileHover={available ? { scale: 1.05 } : {}}
                          className={`py-2.5 rounded-xl text-xs font-semibold transition-colors duration-200 ${
                            i === 4
                              ? "bg-gold-500 text-carbon-900 shadow-md shadow-gold-500/30"
                              : available
                              ? "bg-carbon-700/70 text-carbon-200 hover:bg-forest-700/60 hover:text-white border border-transparent hover:border-forest-600/50"
                              : "bg-carbon-800/50 text-carbon-500 cursor-not-allowed line-through"
                          }`}
                        >
                          {time}
                        </motion.button>
                      );
                    }
                  )}
                </div>

                {/* Cancha selector */}
                <div className="space-y-2 mb-6">
                  {["Cancha 1", "Cancha 2", "Cancha 3"].map((cancha, i) => (
                    <div
                      key={cancha}
                      className={`flex items-center justify-between px-4 py-3 rounded-xl ${
                        i === 0
                          ? "bg-forest-800/40 border border-forest-600/40"
                          : "bg-carbon-700/30 border border-transparent"
                      }`}
                    >
                      <span className="text-white text-sm font-medium">{cancha}</span>
                      <span
                        className={`text-xs font-semibold px-2 py-1 rounded-full ${
                          i === 1
                            ? "bg-red-500/20 text-red-400"
                            : "bg-forest-700/50 text-forest-300"
                        }`}
                      >
                        {i === 1 ? "Ocupada" : "Disponible"}
                      </span>
                    </div>
                  ))}
                </div>

                <button className="w-full py-3.5 rounded-2xl bg-gold-500 text-carbon-900 font-bold text-sm hover:bg-gold-400 transition-colors">
                  Confirmar Reservación
                </button>
              </div>

              {/* Floating decoration */}
              <div className="absolute -top-4 -right-4 w-24 h-24 bg-forest-600/20 rounded-full blur-3xl" />
              <div className="absolute -bottom-4 -left-4 w-32 h-32 bg-gold-500/10 rounded-full blur-3xl" />
            </div>
          </motion.div>
        </AnimatePresence>
      </div>
    </section>
  );
}
