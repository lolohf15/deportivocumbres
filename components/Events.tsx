"use client";

import { useState } from "react";
import { motion, AnimatePresence } from "framer-motion";
import Image from "next/image";
import { Calendar, ArrowUpRight } from "lucide-react";

const categories = ["Todos", "Torneos", "Eventos Sociales", "Familias", "Wellness"];

const events = [
  {
    id: 1,
    title: "Torneo de Pádel Cumbres Open",
    category: "Torneos",
    date: "14 Jun 2025",
    image: "https://images.unsplash.com/photo-1554068865-24cecd4e34b8?w=600&q=80&auto=format&fit=crop",
    size: "large",
    description: "El torneo más esperado del año. 64 parejas compiten por el trofeo.",
  },
  {
    id: 2,
    title: "Noche de Gala Anual",
    category: "Eventos Sociales",
    date: "28 Jun 2025",
    image: "https://images.unsplash.com/photo-1540575467063-178a50c2df87?w=600&q=80&auto=format&fit=crop",
    size: "small",
    description: "Una noche de elegancia para los socios del club.",
  },
  {
    id: 3,
    title: "Día Familiar de Natación",
    category: "Familias",
    date: "5 Jul 2025",
    image: "https://images.unsplash.com/photo-1530549387789-4c1017266635?w=600&q=80&auto=format&fit=crop",
    size: "small",
    description: "Actividades acuáticas para toda la familia.",
  },
  {
    id: 4,
    title: "Clínica de Tenis Profesional",
    category: "Torneos",
    date: "12 Jul 2025",
    image: "https://images.unsplash.com/photo-1568702846914-96b305d2aaeb?w=600&q=80&auto=format&fit=crop",
    size: "medium",
    description: "Instrucción con tenistas de nivel nacional.",
  },
  {
    id: 5,
    title: "Retiro de Yoga al Amanecer",
    category: "Wellness",
    date: "19 Jul 2025",
    image: "https://images.unsplash.com/photo-1544367567-0f2fcb009e0b?w=600&q=80&auto=format&fit=crop",
    size: "small",
    description: "Sesiones de bienestar al aire libre.",
  },
  {
    id: 6,
    title: "Torneo Interfamilias de Fútbol",
    category: "Familias",
    date: "26 Jul 2025",
    image: "https://images.unsplash.com/photo-1431324155629-1a6deb1dec8d?w=600&q=80&auto=format&fit=crop",
    size: "large",
    description: "El torneo más divertido del año para las familias socias.",
  },
];

const containerVariants = {
  hidden: {},
  visible: { transition: { staggerChildren: 0.08 } },
};

const itemVariants = {
  hidden: { opacity: 0, scale: 0.95 },
  visible: { opacity: 1, scale: 1, transition: { duration: 0.5 } },
};

export default function Events() {
  const [activeCategory, setActiveCategory] = useState("Todos");

  const filtered =
    activeCategory === "Todos"
      ? events
      : events.filter((e) => e.category === activeCategory);

  return (
    <section id="eventos" className="py-28 lg:py-36 bg-cream-50">
      <div className="max-w-7xl mx-auto px-6 lg:px-8">
        {/* Header */}
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true, margin: "-100px" }}
          transition={{ duration: 0.7 }}
          className="mb-14"
        >
          <div className="flex items-center gap-4 mb-6">
            <div className="h-[1px] w-10 bg-forest-600" />
            <span className="text-forest-600 text-xs font-semibold tracking-[0.3em] uppercase">
              Agenda
            </span>
          </div>
          <div className="flex flex-col lg:flex-row lg:items-end justify-between gap-6 mb-10">
            <h2 className="font-display text-4xl lg:text-6xl font-bold text-carbon-900 leading-tight max-w-2xl">
              Eventos que{" "}
              <span className="italic text-forest-700">conectan</span>{" "}
              a nuestra comunidad.
            </h2>
            <a
              href="#formulario"
              className="flex items-center gap-2 text-forest-700 font-semibold hover:text-gold-600 transition-colors whitespace-nowrap group"
            >
              Organizar un evento
              <ArrowUpRight
                size={16}
                className="group-hover:translate-x-0.5 group-hover:-translate-y-0.5 transition-transform"
              />
            </a>
          </div>

          {/* Category Filter */}
          <div className="flex flex-wrap gap-2">
            {categories.map((cat) => (
              <button
                key={cat}
                onClick={() => setActiveCategory(cat)}
                className={`px-5 py-2 rounded-full text-sm font-medium transition-all duration-300 ${
                  activeCategory === cat
                    ? "bg-forest-800 text-white shadow-md"
                    : "bg-cream-200 text-carbon-500 hover:bg-cream-300 hover:text-carbon-800"
                }`}
              >
                {cat}
              </button>
            ))}
          </div>
        </motion.div>

        {/* Masonry Grid */}
        <AnimatePresence mode="wait">
          <motion.div
            key={activeCategory}
            variants={containerVariants}
            initial="hidden"
            animate="visible"
            className="grid grid-cols-2 lg:grid-cols-3 gap-4 lg:gap-6 auto-rows-[200px]"
          >
            {filtered.map((event) => (
              <motion.div
                key={event.id}
                variants={itemVariants}
                layout
                className={`relative rounded-2xl overflow-hidden group cursor-pointer ${
                  event.size === "large"
                    ? "col-span-2 row-span-2"
                    : event.size === "medium"
                    ? "col-span-1 row-span-2"
                    : "col-span-1 row-span-1"
                }`}
              >
                {/* Image */}
                <Image
                  src={event.image}
                  alt={event.title}
                  fill
                  className="object-cover transition-transform duration-700 group-hover:scale-105"
                />

                {/* Overlay */}
                <div className="absolute inset-0 bg-gradient-to-t from-carbon-950/90 via-carbon-950/20 to-transparent opacity-80 group-hover:opacity-100 transition-opacity duration-300" />

                {/* Category Badge */}
                <div className="absolute top-4 left-4">
                  <span className="px-2.5 py-1 bg-gold-500/90 backdrop-blur-sm text-carbon-900 text-[10px] font-bold tracking-wider uppercase rounded-full">
                    {event.category}
                  </span>
                </div>

                {/* Content */}
                <div className="absolute bottom-0 left-0 right-0 p-5 lg:p-6">
                  <div className="flex items-center gap-2 mb-2">
                    <Calendar size={12} className="text-gold-400" />
                    <span className="text-gold-400 text-xs font-medium">{event.date}</span>
                  </div>
                  <h3
                    className={`font-display font-bold text-white leading-tight ${
                      event.size === "large" ? "text-2xl lg:text-3xl" : "text-lg"
                    }`}
                  >
                    {event.title}
                  </h3>
                  {event.size !== "small" && (
                    <p className="text-white/60 text-sm mt-2 leading-relaxed line-clamp-2">
                      {event.description}
                    </p>
                  )}
                  <motion.div
                    className="mt-4 flex items-center gap-2 opacity-0 group-hover:opacity-100 translate-y-2 group-hover:translate-y-0 transition-all duration-300"
                  >
                    <span className="text-gold-400 text-xs font-semibold">Más información</span>
                    <ArrowUpRight size={12} className="text-gold-400" />
                  </motion.div>
                </div>
              </motion.div>
            ))}
          </motion.div>
        </AnimatePresence>

        {/* Bottom CTA */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.6 }}
          className="mt-16 text-center"
        >
          <a
            href="#formulario"
            className="inline-flex items-center gap-3 px-8 py-4 bg-forest-800 hover:bg-forest-700 text-white font-semibold rounded-full transition-all duration-300 hover:shadow-xl hover:shadow-forest-800/20 hover:-translate-y-1"
          >
            <Calendar size={18} />
            Organizar un Evento Privado
          </a>
        </motion.div>
      </div>
    </section>
  );
}
