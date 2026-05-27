"use client";

import { motion } from "framer-motion";
import Image from "next/image";

const fadeUp: import("framer-motion").Variants = {
  hidden: { opacity: 0, y: 28 },
  visible: { opacity: 1, y: 0, transition: { duration: 0.75, ease: "easeOut" } },
};

function Label({ text }: { text: string }) {
  return (
    <div className="flex items-center gap-3 mb-5">
      <div className="h-px w-8 bg-lime" />
      <span className="text-[10px] font-semibold tracking-[0.35em] uppercase text-charcoal-light">
        {text}
      </span>
    </div>
  );
}

const extras = [
  {
    num: "06",
    title: "Fútbol",
    desc: "Cancha de pasto natural y cancha de fútbol rápido con pasto sintético.",
  },
  {
    num: "07",
    title: "Softbol",
    desc: "Diamante de softbol en pasto natural.",
  },
  {
    num: "08",
    title: "Raquetbol",
    desc: "3 canchas cerradas de raquetbol.",
  },
  {
    num: "09",
    title: "Bar",
    desc: "Recientemente remodelado, disponible para socios e invitados.",
  },
  {
    num: "10",
    title: "Asadores y Palapas",
    desc: "Áreas al aire libre para reuniones familiares y celebraciones.",
  },
];

export default function Instalaciones() {
  return (
    <section id="instalaciones" className="bg-white">
      {/* Section Header */}
      <div className="max-w-7xl mx-auto px-6 lg:px-10 pt-24 pb-16">
        <motion.div
          initial="hidden"
          whileInView="visible"
          viewport={{ once: true, margin: "-80px" }}
          variants={fadeUp}
        >
          <Label text="Instalaciones" />
          <h2 className="font-display text-4xl lg:text-5xl font-semibold text-charcoal leading-tight max-w-xl">
            Un club pensado para cada deporte y cada momento.
          </h2>
        </motion.div>
      </div>

      {/* 1. Pádel — Full width cinematic */}
      <motion.div
        initial={{ opacity: 0 }}
        whileInView={{ opacity: 1 }}
        viewport={{ once: true, margin: "-60px" }}
        transition={{ duration: 0.8 }}
        className="relative h-[75vh] min-h-[480px] overflow-hidden"
      >
        <Image
          src="/images/padel-social.jpg"
          alt="Canchas de Pádel"
          fill
          className="object-cover object-center transition-transform duration-[1.4s] hover:scale-[1.03]"
          quality={85}
        />
        <div className="absolute inset-0 bg-gradient-to-t from-black/60 via-transparent to-transparent" />

        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.7, delay: 0.2 }}
          className="absolute bottom-10 left-8 lg:left-16"
        >
          <p className="text-lime text-[10px] font-bold tracking-[0.35em] uppercase mb-3">
            01 — Pádel
          </p>
          <h3 className="font-display text-4xl lg:text-5xl font-semibold text-white mb-3">
            Pádel
          </h3>
          <p className="text-white/70 text-base max-w-sm">
            3 canchas al aire libre. Reserva en tiempo real a través de Playtomic.
          </p>
        </motion.div>
      </motion.div>

      {/* 2. Tenis — Split: text left / image right */}
      <div className="grid grid-cols-1 lg:grid-cols-2 min-h-[560px]">
        <motion.div
          initial="hidden"
          whileInView="visible"
          viewport={{ once: true, margin: "-80px" }}
          variants={fadeUp}
          className="flex flex-col justify-center px-8 lg:px-16 xl:px-20 py-16 lg:py-0 bg-off-white order-2 lg:order-1"
        >
          <Label text="02 — Tenis" />
          <h3 className="font-display text-4xl lg:text-5xl font-semibold text-charcoal mb-4 leading-tight">
            Tenis
          </h3>
          <p className="text-charcoal-light text-base leading-relaxed max-w-md mb-4">
            El único club en Monterrey con <strong className="text-charcoal font-semibold">10 canchas de tenis</strong>: 4 de arcilla y 6 de superficie Leyco.
          </p>
          <p className="text-charcoal-light text-sm leading-relaxed max-w-md">
            Disponibles para socios con reservación a través de CourtReserve.
          </p>
        </motion.div>
        <div className="relative h-80 lg:h-auto overflow-hidden order-1 lg:order-2">
          <Image
            src="/images/tenis.jpg"
            alt="Canchas de Tenis"
            fill
            className="object-cover object-center transition-transform duration-[1.2s] hover:scale-[1.04]"
            quality={85}
          />
        </div>
      </div>

      {/* 3. Albercas — Split: image left / text right */}
      <div className="grid grid-cols-1 lg:grid-cols-2 min-h-[560px]">
        <div className="relative h-80 lg:h-auto overflow-hidden">
          <Image
            src="/images/alberca.jpg"
            alt="Albercas"
            fill
            className="object-cover object-center transition-transform duration-[1.2s] hover:scale-[1.04]"
            quality={85}
          />
        </div>
        <motion.div
          initial="hidden"
          whileInView="visible"
          viewport={{ once: true, margin: "-80px" }}
          variants={fadeUp}
          className="flex flex-col justify-center px-8 lg:px-16 xl:px-20 py-16 lg:py-0 bg-white"
        >
          <Label text="03 — Albercas" />
          <h3 className="font-display text-4xl lg:text-5xl font-semibold text-charcoal mb-4 leading-tight">
            Albercas
          </h3>
          <p className="text-charcoal-light text-base leading-relaxed max-w-md">
            Alberca semi-olímpica y alberca infantil con tobogán. Área de sauna. Un espacio familiar para disfrutar durante todo el año.
          </p>
        </motion.div>
      </div>

      {/* 4. Gimnasio — Side by side images */}
      <div className="bg-off-white py-16 lg:py-20">
        <div className="max-w-7xl mx-auto px-6 lg:px-10">
          <motion.div
            initial="hidden"
            whileInView="visible"
            viewport={{ once: true, margin: "-60px" }}
            variants={fadeUp}
            className="mb-10"
          >
            <Label text="04 — Gimnasio" />
            <h3 className="font-display text-4xl lg:text-5xl font-semibold text-charcoal mb-4 leading-tight">
              Gimnasio
            </h3>
            <p className="text-charcoal-light text-base max-w-md leading-relaxed">
              Equipamiento completo de cardio y pesas para todos los niveles.
            </p>
          </motion.div>

          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true, margin: "-60px" }}
            transition={{ duration: 0.8 }}
            className="grid grid-cols-1 sm:grid-cols-2 gap-4 lg:gap-6"
          >
            <div className="relative h-72 sm:h-80 lg:h-[420px] overflow-hidden rounded-sm">
              <Image
                src="/images/gym1.jpg"
                alt="Área de Cardio"
                fill
                className="object-cover object-center transition-transform duration-[1.2s] hover:scale-[1.05]"
                quality={85}
              />
              <div className="absolute bottom-4 left-4">
                <span className="text-white/80 text-xs font-medium tracking-widest uppercase bg-black/30 backdrop-blur-sm px-3 py-1.5 rounded-sm">
                  Cardio
                </span>
              </div>
            </div>
            <div className="relative h-72 sm:h-80 lg:h-[420px] overflow-hidden rounded-sm">
              <Image
                src="/images/gym2.jpg"
                alt="Área de Pesas"
                fill
                className="object-cover object-center transition-transform duration-[1.2s] hover:scale-[1.05]"
                quality={85}
              />
              <div className="absolute bottom-4 left-4">
                <span className="text-white/80 text-xs font-medium tracking-widest uppercase bg-black/30 backdrop-blur-sm px-3 py-1.5 rounded-sm">
                  Pesas y Fuerza
                </span>
              </div>
            </div>
          </motion.div>
        </div>
      </div>

      {/* 5. Restaurante — Split: text left / image right */}
      <div className="grid grid-cols-1 lg:grid-cols-2 min-h-[560px]">
        <motion.div
          initial="hidden"
          whileInView="visible"
          viewport={{ once: true, margin: "-80px" }}
          variants={fadeUp}
          className="flex flex-col justify-center px-8 lg:px-16 xl:px-20 py-16 lg:py-0 bg-white order-2 lg:order-1"
        >
          <Label text="05 — Restaurante" />
          <h3 className="font-display text-4xl lg:text-5xl font-semibold text-charcoal mb-4 leading-tight">
            Restaurante
          </h3>
          <p className="text-charcoal-light text-base leading-relaxed max-w-md">
            Vistas panorámicas a Monterrey y el Cerro de la Silla. Cocina variada, ambiente familiar y precios accesibles para socios e invitados.
          </p>
        </motion.div>
        <div className="relative h-80 lg:h-auto overflow-hidden order-1 lg:order-2">
          <Image
            src="/images/terraza.jpg"
            alt="Restaurante con vista panorámica"
            fill
            className="object-cover object-center transition-transform duration-[1.2s] hover:scale-[1.04]"
            quality={85}
          />
        </div>
      </div>

      {/* 6. Additional facilities grid */}
      <div className="bg-charcoal">
        <div className="max-w-7xl mx-auto px-6 lg:px-10 py-20 lg:py-24">
          <motion.div
            initial="hidden"
            whileInView="visible"
            viewport={{ once: true, margin: "-60px" }}
            variants={fadeUp}
            className="mb-14"
          >
            <div className="flex items-center gap-3 mb-5">
              <div className="h-px w-8 bg-lime" />
              <span className="text-[10px] font-semibold tracking-[0.35em] uppercase text-lime/70">
                Más Instalaciones
              </span>
            </div>
            <h3 className="font-display text-3xl lg:text-4xl font-semibold text-white leading-tight">
              Mucho más por descubrir.
            </h3>
          </motion.div>

          <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-px bg-white/10">
            {extras.map((item, i) => (
              <motion.div
                key={item.num}
                initial={{ opacity: 0, y: 16 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true, margin: "-40px" }}
                transition={{ duration: 0.55, delay: i * 0.08 }}
                className={`bg-charcoal px-8 py-10 group${i === extras.length - 1 ? " sm:col-span-2 lg:col-span-2" : ""}`}
              >
                <span className="text-lime text-xs font-bold tracking-widest block mb-4">
                  {item.num}
                </span>
                <h4 className="font-display text-xl font-semibold text-white mb-3 group-hover:text-lime transition-colors duration-300">
                  {item.title}
                </h4>
                <p className="text-white/50 text-sm leading-relaxed">
                  {item.desc}
                </p>
              </motion.div>
            ))}
          </div>
        </div>
      </div>
    </section>
  );
}
