"use client";

import Image from "next/image";
import { MapPin, Phone, Mail, Camera, Globe, PlayCircle } from "lucide-react";

const quickLinks = [
  { label: "Instalaciones", href: "#instalaciones" },
  { label: "Reservaciones", href: "#reservaciones" },
  { label: "Eventos", href: "#eventos" },
  { label: "Contacto", href: "#contacto" },
];

const socials = [
  { icon: Camera, label: "Instagram", href: "#" },
  { icon: Globe, label: "Facebook", href: "#" },
  { icon: PlayCircle, label: "YouTube", href: "#" },
];

export default function Footer() {
  return (
    <footer className="bg-charcoal text-white/70">
      {/* Main grid */}
      <div className="max-w-7xl mx-auto px-6 lg:px-10 pt-16 pb-10">
        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-10 lg:gap-8 mb-14">
          {/* Brand */}
          <div className="sm:col-span-2 lg:col-span-1">
            <div className="bg-white inline-flex px-3 py-2 rounded-sm mb-6">
              <Image
                src="/images/logo.jpg"
                alt="Club Deportivo Cumbres"
                width={120}
                height={44}
                className="object-contain h-10 w-auto"
              />
            </div>
            <p className="text-sm leading-relaxed text-white/50 max-w-xs">
              Club Deportivo Cumbres A.C. — Fundado en 1977. Deporte, comunidad y familia en Monterrey, N.L.
            </p>
            {/* Socials */}
            <div className="flex items-center gap-3 mt-6">
              {socials.map(({ icon: Icon, label, href }) => (
                <a
                  key={label}
                  href={href}
                  target="_blank"
                  rel="noopener noreferrer"
                  aria-label={label}
                  className="w-9 h-9 flex items-center justify-center border border-white/15 hover:border-lime hover:text-lime text-white/50 transition-colors duration-300"
                >
                  <Icon size={15} />
                </a>
              ))}
            </div>
          </div>

          {/* Quick links */}
          <div>
            <h5 className="text-white text-xs font-semibold tracking-[0.25em] uppercase mb-5">
              Navegación
            </h5>
            <ul className="space-y-3">
              {quickLinks.map((l) => (
                <li key={l.label}>
                  <a
                    href={l.href}
                    className="text-sm hover:text-lime transition-colors duration-300"
                  >
                    {l.label}
                  </a>
                </li>
              ))}
            </ul>
          </div>

          {/* Contact */}
          <div>
            <h5 className="text-white text-xs font-semibold tracking-[0.25em] uppercase mb-5">
              Contacto
            </h5>
            <ul className="space-y-4">
              <li className="flex items-start gap-3 text-sm">
                <MapPin size={14} className="text-lime flex-shrink-0 mt-0.5" />
                <span>Paseo de las Olimpiadas 2600,<br />Cumbres del Sur, 64610,<br />Monterrey, N.L.</span>
              </li>
              <li className="flex items-center gap-3 text-sm">
                <Phone size={14} className="text-lime flex-shrink-0" />
                <a href="tel:+528181234567" className="hover:text-lime transition-colors">
                  +52 (81) 8123-4567
                </a>
              </li>
              <li className="flex items-center gap-3 text-sm">
                <Mail size={14} className="text-lime flex-shrink-0" />
                <a href="mailto:contacto@clubcumbres.mx" className="hover:text-lime transition-colors">
                  contacto@clubcumbres.mx
                </a>
              </li>
            </ul>
          </div>

          {/* Hours */}
          <div>
            <h5 className="text-white text-xs font-semibold tracking-[0.25em] uppercase mb-5">
              Horario
            </h5>
            <ul className="space-y-2 text-sm">
              <li className="flex justify-between gap-4">
                <span>Lunes — Viernes</span>
                <span className="text-white/50">6am – 10pm</span>
              </li>
              <li className="flex justify-between gap-4">
                <span>Sábado</span>
                <span className="text-white/50">7am – 9pm</span>
              </li>
              <li className="flex justify-between gap-4">
                <span>Domingo</span>
                <span className="text-white/50">8am – 8pm</span>
              </li>
            </ul>

            {/* WhatsApp */}
            <a
              href="https://wa.me/528181234567"
              target="_blank"
              rel="noopener noreferrer"
              className="inline-flex items-center gap-2 mt-6 text-xs font-semibold text-charcoal bg-lime hover:bg-lime-dark px-4 py-2.5 transition-colors duration-300"
            >
              WhatsApp
            </a>
          </div>
        </div>

        {/* Bottom bar */}
        <div className="border-t border-white/10 pt-8 flex flex-col sm:flex-row items-center justify-between gap-4">
          <p className="text-xs text-white/30">
            © {new Date().getFullYear()} Club Deportivo Cumbres A.C. Todos los derechos reservados.
          </p>
          <div className="flex items-center gap-5">
            {["Aviso de Privacidad", "Reglamento"].map((item) => (
              <a key={item} href="#" className="text-xs text-white/30 hover:text-white/60 transition-colors">
                {item}
              </a>
            ))}
          </div>
        </div>
      </div>
    </footer>
  );
}
