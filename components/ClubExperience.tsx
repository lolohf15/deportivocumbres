"use client";

import { useRef } from "react";
import { motion, useScroll, useTransform } from "framer-motion";
import Image from "next/image";
import { Star, Heart, Users, Trophy } from "lucide-react";

const stats = [
  { icon: Users, value: "2,500+", label: "Familias Socias" },
  { icon: Trophy, value: "120+", label: "Torneos al Año" },
  { icon: Star, value: "4.9/5", label: "Satisfacción" },
  { icon: Heart, value: "15", label: "Años de Historia" },
];

const features = [
  {
    title: "Comunidad que inspira",
    description:
      "En Club Deportivo Cumbres, los lazos van más allá del deporte. Somos una comunidad de familias que comparten valores, tradiciones y momentos únicos.",
    image:
      "https://images.unsplash.com/photo-1529156069898-49953e39b3ac?w=800&q=80&auto=format&fit=crop",
    align: "right" as const,
  },
  {
    title: "Instalaciones de clase mundial",
    description:
      "Contamos con espacios diseñados para brindarte comodidad, seguridad y la mejor experiencia deportiva y social en cada visita.",
    image:
      "https://images.unsplash.com/photo-1534438327276-14e5300c3a48?w=800&q=80&auto=format&fit=crop",
    align: "left" as const,
  },
  {
    title: "Bienestar para toda la familia",
    description:
      "Desde los más pequeños hasta los adultos mayores, tenemos programas diseñados para que cada miembro de tu familia encuentre su espacio ideal.",
    image:
      "https://images.unsplash.com/photo-1476480862126-209bfaa8edc8?w=800&q=80&auto=format&fit=crop",
    align: "right" as const,
  },
];

export default function ClubExperience() {
  const containerRef = useRef<HTMLDivElement>(null);

  return (
    <section id="experiencia" ref={containerRef} className="bg-cream-100 overflow-hidden">
      {/* Stats Band */}
      <div className="bg-forest-800 py-12">
        <div className="max-w-7xl mx-auto px-6 lg:px-8">
          <div className="grid grid-cols-2 lg:grid-cols-4 gap-8 lg:gap-0 lg:divide-x lg:divide-forest-600/50">
            {stats.map((stat, i) => (
              <motion.div
                key={stat.label}
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ duration: 0.5, delay: i * 0.1 }}
                className="flex flex-col items-center text-center lg:px-8"
              >
                <stat.icon size={24} className="text-gold-400 mb-3" />
                <span className="font-display text-3xl lg:text-4xl font-bold text-white">
                  {stat.value}
                </span>
                <span className="text-forest-300 text-xs uppercase tracking-widest mt-1">
                  {stat.label}
                </span>
              </motion.div>
            ))}
          </div>
        </div>
      </div>

      {/* Main Experience Content */}
      <div className="py-28 lg:py-36">
        <div className="max-w-7xl mx-auto px-6 lg:px-8">
          {/* Section Header */}
          <motion.div
            initial={{ opacity: 0, y: 30 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true, margin: "-100px" }}
            transition={{ duration: 0.7 }}
            className="text-center mb-24"
          >
            <div className="flex items-center justify-center gap-4 mb-6">
              <div className="h-[1px] w-10 bg-forest-600" />
              <span className="text-forest-600 text-xs font-semibold tracking-[0.3em] uppercase">
                La Experiencia CDC
              </span>
              <div className="h-[1px] w-10 bg-forest-600" />
            </div>
            <h2 className="font-display text-4xl lg:text-6xl font-bold text-carbon-900 leading-tight max-w-3xl mx-auto">
              Un estilo de vida{" "}
              <span className="italic text-forest-700">extraordinario</span>{" "}
              te espera.
            </h2>
          </motion.div>

          {/* Alternating Features */}
          <div className="space-y-24 lg:space-y-32">
            {features.map((feature, i) => (
              <motion.div
                key={feature.title}
                initial={{ opacity: 0, y: 40 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true, margin: "-80px" }}
                transition={{ duration: 0.8 }}
                className={`grid grid-cols-1 lg:grid-cols-2 gap-12 lg:gap-20 items-center ${
                  feature.align === "left" ? "lg:flex-row-reverse" : ""
                }`}
              >
                {/* Image */}
                <div
                  className={`relative ${
                    feature.align === "left" ? "lg:order-2" : "lg:order-1"
                  }`}
                >
                  <motion.div
                    whileHover={{ scale: 1.02 }}
                    transition={{ type: "spring", stiffness: 200, damping: 20 }}
                    className="relative h-[400px] lg:h-[500px] rounded-3xl overflow-hidden"
                  >
                    <Image
                      src={feature.image}
                      alt={feature.title}
                      fill
                      className="object-cover"
                    />
                    <div className="absolute inset-0 bg-gradient-to-t from-forest-900/40 to-transparent" />
                  </motion.div>

                  {/* Decorative element */}
                  <div
                    className={`absolute -z-10 w-48 h-48 bg-gold-200 rounded-full blur-3xl opacity-60 ${
                      feature.align === "left"
                        ? "-top-8 -left-8"
                        : "-top-8 -right-8"
                    }`}
                  />
                </div>

                {/* Text */}
                <div
                  className={`${
                    feature.align === "left" ? "lg:order-1" : "lg:order-2"
                  }`}
                >
                  <div className="flex items-center gap-3 mb-6">
                    <span className="w-8 h-8 rounded-full bg-forest-100 flex items-center justify-center text-forest-700 font-bold text-sm">
                      {String(i + 1).padStart(2, "0")}
                    </span>
                    <div className="h-[1px] w-12 bg-forest-300" />
                  </div>
                  <h3 className="font-display text-3xl lg:text-4xl font-bold text-carbon-900 mb-6 leading-tight">
                    {feature.title}
                  </h3>
                  <p className="text-carbon-400 text-lg leading-relaxed mb-8">
                    {feature.description}
                  </p>
                  <a
                    href="#membresias"
                    className="inline-flex items-center gap-3 text-forest-700 font-semibold hover:text-gold-600 transition-colors group"
                  >
                    <span>Conocer más</span>
                    <span className="w-8 h-8 rounded-full bg-forest-100 flex items-center justify-center group-hover:bg-gold-100 transition-colors">
                      <svg
                        width="14"
                        height="14"
                        viewBox="0 0 14 14"
                        fill="none"
                        className="text-current"
                      >
                        <path
                          d="M3 7h8m0 0L7.5 3.5M11 7l-3.5 3.5"
                          stroke="currentColor"
                          strokeWidth="1.5"
                          strokeLinecap="round"
                          strokeLinejoin="round"
                        />
                      </svg>
                    </span>
                  </a>
                </div>
              </motion.div>
            ))}
          </div>

          {/* Testimonial */}
          <motion.div
            initial={{ opacity: 0, y: 30 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.8 }}
            className="mt-32 relative"
          >
            <div className="bg-forest-800 rounded-3xl p-10 lg:p-16 overflow-hidden">
              {/* Background decoration */}
              <div className="absolute top-0 right-0 w-64 h-64 bg-forest-700/50 rounded-full blur-3xl" />
              <div className="absolute bottom-0 left-0 w-48 h-48 bg-gold-500/10 rounded-full blur-3xl" />

              <div className="relative">
                <div className="flex items-center gap-1 mb-6">
                  {[...Array(5)].map((_, i) => (
                    <Star
                      key={i}
                      size={18}
                      className="text-gold-500 fill-gold-500"
                    />
                  ))}
                </div>
                <blockquote className="font-display text-2xl lg:text-4xl text-white font-bold leading-tight mb-8 max-w-3xl">
                  "Pertenecer a Club Deportivo Cumbres ha transformado nuestra vida familiar. No solo practicamos deporte, vivimos una comunidad."
                </blockquote>
                <div className="flex items-center gap-4">
                  <div className="w-12 h-12 rounded-full bg-forest-600 border-2 border-gold-500 flex items-center justify-center">
                    <span className="text-gold-400 font-bold text-lg">MG</span>
                  </div>
                  <div>
                    <p className="text-white font-semibold">María González</p>
                    <p className="text-forest-300 text-sm">Socia desde 2015 · Familia con 3 hijos</p>
                  </div>
                </div>
              </div>
            </div>
          </motion.div>
        </div>
      </div>
    </section>
  );
}
