"use client";

import { motion } from "framer-motion";
import Image from "next/image";
import { ArrowUpRight } from "lucide-react";

const sports = [
  {
    id: "padel",
    name: "Pádel",
    tagline: "El deporte de moda",
    description:
      "8 canchas panorámicas de pádel con iluminación LED de alta gama. Torneos semanales y clínicas para todos los niveles.",
    image:
      "https://images.unsplash.com/photo-1554068865-24cecd4e34b8?w=800&q=80&auto=format&fit=crop",
    accent: "#c9a96e",
    stat: "8 Canchas",
    href: "#reservaciones",
  },
  {
    id: "tenis",
    name: "Tenis",
    tagline: "Tradición y precisión",
    description:
      "6 canchas de arcilla y superficie dura. Instructores certificados, academia infantil y competencias federadas.",
    image:
      "https://images.unsplash.com/photo-1568702846914-96b305d2aaeb?w=800&q=80&auto=format&fit=crop",
    accent: "#2d6249",
    stat: "6 Canchas",
    href: "#reservaciones",
  },
  {
    id: "futbol",
    name: "Fútbol",
    tagline: "Pasión en cada jugada",
    description:
      "Canchas de pasto sintético premium, ligas inter-socios, torneos familiares y entrenamiento infantil cada fin de semana.",
    image:
      "https://images.unsplash.com/photo-1431324155629-1a6deb1dec8d?w=800&q=80&auto=format&fit=crop",
    accent: "#1b3a2d",
    stat: "4 Canchas",
    href: "#reservaciones",
  },
  {
    id: "natacion",
    name: "Natación",
    tagline: "Fluidez y bienestar",
    description:
      "Alberca olímpica temperada y alberca recreativa familiar. Clases para niños desde 3 años y masters de competencia.",
    image:
      "https://images.unsplash.com/photo-1530549387789-4c1017266635?w=800&q=80&auto=format&fit=crop",
    accent: "#3a7a5c",
    stat: "2 Albercas",
    href: "#reservaciones",
  },
];

const containerVariants = {
  hidden: {},
  visible: {
    transition: { staggerChildren: 0.15 },
  },
};

const cardVariants = {
  hidden: { opacity: 0, y: 50 },
  visible: {
    opacity: 1,
    y: 0,
    transition: { duration: 0.7, ease: [0.25, 0.46, 0.45, 0.94] as const },
  },
};

export default function Sports() {
  return (
    <section id="deportes" className="py-28 lg:py-36 bg-cream-100">
      <div className="max-w-7xl mx-auto px-6 lg:px-8">
        {/* Header */}
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true, margin: "-100px" }}
          transition={{ duration: 0.7 }}
          className="mb-20"
        >
          <div className="flex items-center gap-4 mb-6">
            <div className="h-[1px] w-10 bg-forest-600" />
            <span className="text-forest-600 text-xs font-semibold tracking-[0.3em] uppercase">
              Disciplinas
            </span>
          </div>
          <div className="flex flex-col lg:flex-row lg:items-end justify-between gap-6">
            <h2 className="font-display text-4xl lg:text-6xl font-bold text-carbon-900 leading-tight max-w-2xl">
              El deporte que{" "}
              <span className="text-forest-700 italic">eliges,</span>
              <br />
              la excelencia que mereces.
            </h2>
            <p className="text-carbon-400 max-w-xs text-base leading-relaxed lg:text-right">
              Instalaciones de primer nivel para cada disciplina, con instructores certificados y tecnología de vanguardia.
            </p>
          </div>
        </motion.div>

        {/* Cards Grid */}
        <motion.div
          variants={containerVariants}
          initial="hidden"
          whileInView="visible"
          viewport={{ once: true, margin: "-80px" }}
          className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-6"
        >
          {sports.map((sport) => (
            <motion.a
              key={sport.id}
              href={sport.href}
              variants={cardVariants}
              whileHover={{ y: -8 }}
              transition={{ type: "spring", stiffness: 300, damping: 20 }}
              className="group relative rounded-3xl overflow-hidden aspect-[3/4] cursor-pointer block"
            >
              {/* Background Image */}
              <div className="absolute inset-0">
                <Image
                  src={sport.image}
                  alt={sport.name}
                  fill
                  className="object-cover transition-transform duration-700 group-hover:scale-105"
                />
              </div>

              {/* Gradient Overlay */}
              <div className="absolute inset-0 bg-gradient-to-t from-carbon-950/95 via-carbon-950/30 to-transparent" />
              <div
                className="absolute inset-0 opacity-0 group-hover:opacity-20 transition-opacity duration-500"
                style={{ backgroundColor: sport.accent }}
              />

              {/* Stat Badge */}
              <div className="absolute top-5 left-5">
                <span
                  className="px-3 py-1.5 rounded-full text-[10px] font-bold tracking-widest uppercase text-white/90"
                  style={{ backgroundColor: `${sport.accent}99` }}
                >
                  {sport.stat}
                </span>
              </div>

              {/* Arrow */}
              <motion.div
                className="absolute top-5 right-5 w-9 h-9 rounded-full bg-white/10 backdrop-blur-sm flex items-center justify-center opacity-0 group-hover:opacity-100 transition-opacity duration-300"
                whileHover={{ scale: 1.1 }}
              >
                <ArrowUpRight size={16} className="text-white" />
              </motion.div>

              {/* Content */}
              <div className="absolute bottom-0 left-0 right-0 p-6">
                <p
                  className="text-[10px] font-semibold tracking-[0.3em] uppercase mb-2 transition-colors duration-300"
                  style={{ color: sport.accent }}
                >
                  {sport.tagline}
                </p>
                <h3 className="font-display text-3xl font-bold text-white mb-3 group-hover:text-gold-300 transition-colors duration-300">
                  {sport.name}
                </h3>
                <p className="text-white/60 text-sm leading-relaxed max-h-0 overflow-hidden group-hover:max-h-24 transition-all duration-500">
                  {sport.description}
                </p>
                <div className="mt-4 flex items-center gap-2 opacity-0 group-hover:opacity-100 transition-opacity duration-300 translate-y-2 group-hover:translate-y-0 transition-transform">
                  <span className="text-gold-400 text-xs font-semibold">
                    Reservar ahora
                  </span>
                  <ArrowUpRight size={12} className="text-gold-400" />
                </div>
              </div>
            </motion.a>
          ))}
        </motion.div>

        {/* Bottom CTA */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.6, delay: 0.3 }}
          className="mt-16 flex flex-col sm:flex-row items-center justify-center gap-6 py-12 border-t border-cream-300"
        >
          <p className="text-carbon-400 text-center">
            También ofrecemos{" "}
            <span className="text-carbon-700 font-semibold">
              fitness, yoga, crossfit y más.
            </span>
          </p>
          <a
            href="#membresias"
            className="px-6 py-3 bg-forest-800 hover:bg-forest-700 text-white text-sm font-semibold rounded-full transition-all duration-300 hover:shadow-lg hover:shadow-forest-800/20 whitespace-nowrap"
          >
            Ver todas las actividades
          </a>
        </motion.div>
      </div>
    </section>
  );
}
