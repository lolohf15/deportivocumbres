"use client";

import { motion } from "framer-motion";
import Image from "next/image";

const tipos = [
  "Bodas",
  "XV Años",
  "Baby Showers",
  "Eventos Corporativos",
  "Reuniones Sociales",
  "Torneos Internos",
];

export default function Eventos() {
  return (
    <section id="eventos" className="bg-charcoal overflow-hidden">
      {/* Full-bleed hero image */}
      <div className="relative h-[65vh] min-h-[420px] overflow-hidden">
        <Image
          src="/images/hero-club.jpg"
          alt="Salones y Espacios para Eventos"
          fill
          className="object-cover object-center"
          quality={85}
        />
        <div className="absolute inset-0 bg-gradient-to-b from-charcoal/20 via-transparent to-charcoal/80" />

        {/* Overlay text */}
        <motion.div
          initial={{ opacity: 0, y: 24 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.8 }}
          className="absolute bottom-10 left-8 lg:left-16 max-w-xl"
        >
          <div className="flex items-center gap-3 mb-5">
            <div className="h-px w-8 bg-lime" />
            <span className="text-[10px] font-semibold tracking-[0.35em] uppercase text-lime/80">
              Eventos
            </span>
          </div>
          <h2 className="font-display text-4xl lg:text-5xl font-semibold text-white leading-tight">
            Salones elegantes con vistas panorámicas a Monterrey.
          </h2>
        </motion.div>
      </div>

      {/* Events grid */}
      <div className="max-w-7xl mx-auto px-6 lg:px-10 py-20 lg:py-24">
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-16 items-start">
          {/* Left: description */}
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true, margin: "-60px" }}
            transition={{ duration: 0.7 }}
          >
            <p className="text-white/60 text-base leading-relaxed max-w-md">
              Salones y espacios privados con vistas al Cerro de la Silla, disponibles para celebraciones y eventos corporativos. Acceso exclusivo para socios y sus invitados.
            </p>
          </motion.div>

          {/* Right: event types list */}
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true, margin: "-60px" }}
            transition={{ duration: 0.7, delay: 0.15 }}
          >
            <ul className="divide-y divide-white/10">
              {tipos.map((tipo, i) => (
                <motion.li
                  key={tipo}
                  initial={{ opacity: 0, x: 12 }}
                  whileInView={{ opacity: 1, x: 0 }}
                  viewport={{ once: true }}
                  transition={{ duration: 0.5, delay: i * 0.07 + 0.1 }}
                  className="flex items-center justify-between py-4 group cursor-default"
                >
                  <span className="text-white/80 text-sm font-medium group-hover:text-white transition-colors">
                    {tipo}
                  </span>
                  <div className="w-1.5 h-1.5 rounded-full bg-lime opacity-0 group-hover:opacity-100 transition-opacity" />
                </motion.li>
              ))}
            </ul>

            <motion.div
              initial={{ opacity: 0 }}
              whileInView={{ opacity: 1 }}
              viewport={{ once: true }}
              transition={{ delay: 0.5 }}
              className="mt-10"
            >
              <a
                href="#contacto"
                className="inline-flex items-center gap-3 text-sm font-semibold text-charcoal bg-lime hover:bg-lime-dark px-7 py-3.5 transition-colors duration-300"
              >
                Organizar un evento
              </a>
            </motion.div>
          </motion.div>
        </div>
      </div>
    </section>
  );
}
