"use client";

import { motion } from "framer-motion";
import { ArrowUpRight } from "lucide-react";

const items = [
  {
    num: "01",
    title: "Pádel",
    desc: "3 canchas al aire libre. Consulta disponibilidad y reserva en tiempo real.",
    platform: "Playtomic",
    href: "https://www.playtomic.io",
    external: true,
    label: "Reservar en Playtomic",
  },
  {
    num: "02",
    title: "Tenis",
    desc: "10 canchas disponibles — 4 de arcilla y 6 de superficie Leyco.",
    platform: "CourtReserve",
    href: "https://www.courtreserve.com",
    external: true,
    label: "Reservar en CourtReserve",
  },
  {
    num: "03",
    title: "Asadores, Palapas y Salones",
    desc: "Aparta un espacio privado para bodas, XV años, reuniones o celebraciones familiares.",
    platform: "Formulario de contacto",
    href: "#contacto",
    external: false,
    label: "Solicitar reservación",
  },
];

export default function Reservaciones() {
  return (
    <section id="reservaciones" className="bg-white border-t border-border">
      <div className="max-w-7xl mx-auto px-6 lg:px-10 py-24 lg:py-32">
        {/* Header */}
        <motion.div
          initial={{ opacity: 0, y: 24 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true, margin: "-80px" }}
          transition={{ duration: 0.7 }}
          className="mb-16"
        >
          <div className="flex items-center gap-3 mb-5">
            <div className="h-px w-8 bg-lime" />
            <span className="text-[10px] font-semibold tracking-[0.35em] uppercase text-charcoal-light">
              Reservaciones
            </span>
          </div>
          <h2 className="font-display text-4xl lg:text-5xl font-semibold text-charcoal leading-tight">
            Reserva tu espacio.
          </h2>
        </motion.div>

        {/* Items List */}
        <div className="divide-y divide-border">
          {items.map((item, i) => (
            <motion.div
              key={item.num}
              initial={{ opacity: 0, y: 16 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true, margin: "-40px" }}
              transition={{ duration: 0.6, delay: i * 0.1 }}
              className="group flex flex-col sm:flex-row sm:items-center justify-between gap-6 py-8 lg:py-10 cursor-pointer"
            >
              <div className="flex items-start gap-6 lg:gap-10">
                {/* Number */}
                <span className="text-lime text-sm font-bold tracking-widest pt-1 flex-shrink-0">
                  {item.num}
                </span>

                {/* Info */}
                <div>
                  <h3 className="font-display text-2xl lg:text-3xl font-semibold text-charcoal mb-1.5 group-hover:text-green-dark transition-colors duration-300">
                    {item.title}
                  </h3>
                  <p className="text-charcoal-light text-sm">{item.desc}</p>
                </div>
              </div>

              {/* CTA */}
              <a
                href={item.href}
                target={item.external ? "_blank" : undefined}
                rel={item.external ? "noopener noreferrer" : undefined}
                className="flex items-center gap-3 flex-shrink-0 text-sm font-semibold text-green-dark border border-green-dark px-6 py-3 hover:bg-green-dark hover:text-white transition-all duration-300 group-hover:shadow-sm sm:ml-auto"
              >
                {item.label}
                <ArrowUpRight size={15} />
              </a>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
}
