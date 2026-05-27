"use client";

import { motion } from "framer-motion";
import { Check, Star, Zap, Crown, ArrowRight } from "lucide-react";

const plans = [
  {
    id: "individual",
    name: "Individual",
    tagline: "El punto de partida ideal",
    icon: Zap,
    price: "$1,850",
    period: "/ mes",
    description:
      "Para el deportista que busca instalaciones de primer nivel sin compromisos familiares.",
    features: [
      "Acceso ilimitado a canchas de pádel",
      "2 clases de tenis al mes",
      "Uso de alberca olímpica",
      "Área de fitness y pesas",
      "1 reservación de asador al mes",
      "App de reservaciones incluida",
    ],
    notIncluded: ["Acceso familiar", "Asistencia a eventos VIP"],
    cta: "Comenzar Ahora",
    highlight: false,
    badge: null,
  },
  {
    id: "familiar",
    name: "Familiar",
    tagline: "La elección más popular",
    icon: Star,
    price: "$3,200",
    period: "/ mes",
    description:
      "Para familias que desean vivir la experiencia completa del club, con acceso para todos.",
    features: [
      "Acceso para 2 adultos + 3 menores",
      "Canchas de pádel y tenis ilimitadas",
      "Clases para niños incluidas",
      "Alberca recreativa y olímpica",
      "2 reservaciones de asador al mes",
      "Invitados: 2 pases por mes",
      "Descuento del 20% en eventos",
      "App premium de reservaciones",
    ],
    notIncluded: [],
    cta: "Elegir Plan Familiar",
    highlight: true,
    badge: "Más Popular",
  },
  {
    id: "premium",
    name: "Premium VIP",
    tagline: "La experiencia sin límites",
    icon: Crown,
    price: "$5,500",
    period: "/ mes",
    description:
      "El acceso más exclusivo al club, con beneficios ilimitados y atención personalizada.",
    features: [
      "Acceso para toda la familia extendida",
      "Reservaciones sin límite de canchas",
      "Entrenador personal 4x/semana",
      "Clases de academia incluidas",
      "Asadores y eventos sin restricción",
      "Invitados ilimitados con aviso previo",
      "Salón VIP con servicio de bar",
      "Concierge deportivo personalizado",
      "Acceso anticipado a torneos y eventos",
    ],
    notIncluded: [],
    cta: "Contactar Asesor VIP",
    highlight: false,
    badge: "Exclusivo",
  },
];

export default function Memberships() {
  return (
    <section id="membresias" className="py-28 lg:py-36 bg-carbon-950 overflow-hidden">
      <div className="max-w-7xl mx-auto px-6 lg:px-8">
        {/* Header */}
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true, margin: "-100px" }}
          transition={{ duration: 0.7 }}
          className="text-center mb-20"
        >
          <div className="flex items-center justify-center gap-4 mb-6">
            <div className="h-[1px] w-10 bg-gold-500" />
            <span className="text-gold-500 text-xs font-semibold tracking-[0.3em] uppercase">
              Membresías
            </span>
            <div className="h-[1px] w-10 bg-gold-500" />
          </div>
          <h2 className="font-display text-4xl lg:text-6xl font-bold text-white leading-tight mb-6">
            Elige tu nivel de{" "}
            <span className="text-transparent bg-clip-text bg-gradient-to-r from-gold-400 to-gold-300">
              experiencia.
            </span>
          </h2>
          <p className="text-carbon-300 text-lg max-w-xl mx-auto">
            Sin cuotas de inscripción durante junio. Todas las membresías incluyen acceso al club social los fines de semana.
          </p>
        </motion.div>

        {/* Plans Grid */}
        <div className="grid grid-cols-1 lg:grid-cols-3 gap-6 lg:gap-8 items-start">
          {plans.map((plan, i) => (
            <motion.div
              key={plan.id}
              initial={{ opacity: 0, y: 40 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true, margin: "-60px" }}
              transition={{ duration: 0.6, delay: i * 0.15 }}
              whileHover={{ y: plan.highlight ? 0 : -6 }}
              className={`relative rounded-3xl overflow-hidden ${
                plan.highlight
                  ? "bg-gradient-to-b from-forest-700 to-forest-900 border-2 border-gold-500/40 shadow-2xl shadow-forest-800/50 lg:-mt-6 lg:pb-6"
                  : "bg-carbon-800 border border-white/5"
              }`}
            >
              {/* Badge */}
              {plan.badge && (
                <div
                  className={`absolute top-0 left-0 right-0 text-center py-2 text-[10px] font-bold tracking-widest uppercase ${
                    plan.highlight
                      ? "bg-gold-500 text-carbon-900"
                      : "bg-carbon-700 text-carbon-300"
                  }`}
                >
                  {plan.badge}
                </div>
              )}

              <div className={`p-8 ${plan.badge ? "pt-12" : ""}`}>
                {/* Icon + Name */}
                <div className="flex items-center gap-3 mb-6">
                  <div
                    className={`w-10 h-10 rounded-2xl flex items-center justify-center ${
                      plan.highlight
                        ? "bg-gold-500/20 border border-gold-500/40"
                        : "bg-carbon-700 border border-carbon-600"
                    }`}
                  >
                    <plan.icon
                      size={18}
                      className={plan.highlight ? "text-gold-400" : "text-carbon-300"}
                    />
                  </div>
                  <div>
                    <p
                      className={`text-xs font-semibold uppercase tracking-widest ${
                        plan.highlight ? "text-gold-400" : "text-carbon-400"
                      }`}
                    >
                      {plan.tagline}
                    </p>
                    <h3 className="text-white font-display font-bold text-xl">
                      {plan.name}
                    </h3>
                  </div>
                </div>

                {/* Price */}
                <div className="mb-6">
                  <div className="flex items-end gap-1 mb-1">
                    <span
                      className={`font-display text-4xl lg:text-5xl font-bold ${
                        plan.highlight ? "text-white" : "text-carbon-100"
                      }`}
                    >
                      {plan.price}
                    </span>
                    <span className="text-carbon-400 text-sm mb-2">{plan.period}</span>
                  </div>
                  <p className="text-carbon-400 text-sm leading-relaxed">
                    {plan.description}
                  </p>
                </div>

                {/* Divider */}
                <div
                  className={`h-[1px] mb-6 ${
                    plan.highlight ? "bg-white/10" : "bg-carbon-700"
                  }`}
                />

                {/* Features */}
                <ul className="space-y-3 mb-8">
                  {plan.features.map((feature, j) => (
                    <li key={j} className="flex items-start gap-3">
                      <div
                        className={`w-5 h-5 rounded-full flex items-center justify-center flex-shrink-0 mt-0.5 ${
                          plan.highlight
                            ? "bg-gold-500/20"
                            : "bg-forest-800/50"
                        }`}
                      >
                        <Check
                          size={11}
                          className={plan.highlight ? "text-gold-400" : "text-forest-400"}
                        />
                      </div>
                      <span className="text-carbon-200 text-sm">{feature}</span>
                    </li>
                  ))}
                  {plan.notIncluded.map((feature, j) => (
                    <li key={`ni-${j}`} className="flex items-start gap-3 opacity-40">
                      <div className="w-5 h-5 rounded-full bg-carbon-700 flex items-center justify-center flex-shrink-0 mt-0.5">
                        <div className="w-2 h-[1px] bg-carbon-400" />
                      </div>
                      <span className="text-carbon-400 text-sm line-through">
                        {feature}
                      </span>
                    </li>
                  ))}
                </ul>

                {/* CTA */}
                <motion.a
                  href="#formulario"
                  whileHover={{ scale: 1.02 }}
                  whileTap={{ scale: 0.98 }}
                  className={`flex items-center justify-center gap-2 w-full py-4 rounded-2xl font-semibold text-sm transition-all duration-300 ${
                    plan.highlight
                      ? "bg-gold-500 hover:bg-gold-400 text-carbon-900 shadow-lg shadow-gold-500/20"
                      : "bg-carbon-700 hover:bg-carbon-600 text-white border border-carbon-600"
                  }`}
                >
                  {plan.cta}
                  <ArrowRight size={14} />
                </motion.a>
              </div>
            </motion.div>
          ))}
        </div>

        {/* Bottom note */}
        <motion.p
          initial={{ opacity: 0 }}
          whileInView={{ opacity: 1 }}
          viewport={{ once: true }}
          transition={{ duration: 0.6, delay: 0.4 }}
          className="text-center text-carbon-500 text-sm mt-10"
        >
          * Precios en MXN + IVA. Sin cuota de inscripción durante el mes de junio 2025. Membresías sujetas a disponibilidad.
        </motion.p>
      </div>
    </section>
  );
}
