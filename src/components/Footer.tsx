import { Link } from "react-router-dom";
import { useTranslation } from "react-i18next";
import { Mail, Instagram, Youtube } from "lucide-react";
import { ROUTES } from "@/lib/routes";

const EMAIL = "contacto@renaceatacama.com";

function TiktokIcon({ className }: { className?: string }) {
  return (
    <svg viewBox="0 0 24 24" fill="currentColor" className={className} aria-hidden>
      <path d="M19.59 6.69a4.83 4.83 0 0 1-3.77-4.25V2h-3.45v13.67a2.89 2.89 0 0 1-5.2 1.74 2.89 2.89 0 0 1 2.31-4.64 2.93 2.93 0 0 1 .88.13V9.4a6.84 6.84 0 0 0-1-.05A6.33 6.33 0 0 0 5 20.1a6.34 6.34 0 0 0 10.86-4.43v-7a8.16 8.16 0 0 0 4.77 1.52v-3.4a4.85 4.85 0 0 1-1-.1z" />
    </svg>
  );
}

const SOCIAL = [
  { label: "Instagram", href: "https://instagram.com/renaceatacama", icon: Instagram },
  { label: "TikTok", href: "https://tiktok.com/@renaceatacama", icon: TiktokIcon },
  { label: "YouTube", href: "https://youtube.com/@renaceatacama", icon: Youtube },
];

export function Footer() {
  const { t } = useTranslation();
  const quickLinks = [
    { label: t("footer.elProyecto"), to: ROUTES.elProyecto },
    { label: t("footer.quienesSomos"), to: ROUTES.quienesSomos },
    { label: t("footer.contacto"), to: ROUTES.contacto },
  ];

  return (
    <footer className="bg-black text-white">
      <div className="container mx-auto px-6 lg:px-8 py-16">
        <div className="grid grid-cols-1 md:grid-cols-3 gap-12 lg:gap-16">
          {/* Columna 1: Logo + Descripción */}
          <div className="space-y-4">
            <Link to={ROUTES.home} className="inline-flex items-start">
              <img
                src="/logo-com-blanco.png"
                alt="Renace Atacama"
                className="h-[4.5rem] w-auto object-contain"
              />
            </Link>
            <p className="text-neutral-400 text-sm leading-relaxed max-w-xs">
              {t("footer.description")}
            </p>
          </div>

          {/* Columna 2: Enlaces rápidos */}
          <div>
            <h4 className="text-xs font-bold uppercase tracking-widest text-white mb-6">
              {t("footer.quickLinks")}
            </h4>
            <ul className="space-y-4">
              {quickLinks.map((link) => (
                <li key={link.to}>
                  <Link
                    to={link.to}
                    className="text-white/90 hover:text-white text-sm transition-colors"
                  >
                    {link.label}
                  </Link>
                </li>
              ))}
            </ul>
          </div>

          {/* Columna 3: Contáctanos + Email + Redes */}
          <div>
            <h4 className="text-xs font-bold uppercase tracking-widest text-white mb-6">
              {t("footer.contactUs")}
            </h4>
            <div className="space-y-4">
              <a
                href={`mailto:${EMAIL}`}
                className="inline-flex items-center gap-3 px-4 py-3 rounded-lg bg-neutral-800/80 hover:bg-neutral-700/80 transition-colors text-white text-sm"
              >
                <Mail className="w-5 h-5 text-white shrink-0" />
                {EMAIL}
              </a>
              <div className="flex gap-3">
                {SOCIAL.map((s) => {
                  const Icon = s.icon;
                  return (
                    <a
                      key={s.label}
                      href={s.href}
                      target="_blank"
                      rel="noopener noreferrer"
                      className="w-11 h-11 rounded-lg bg-neutral-800/80 hover:bg-neutral-700/80 flex items-center justify-center text-white transition-colors"
                      aria-label={s.label}
                    >
                      <Icon className="w-5 h-5" />
                    </a>
                  );
                })}
              </div>
            </div>
          </div>
        </div>
      </div>

      {/* Separador */}
      <div className="border-t border-neutral-700" />

      {/* Bottom: Ubicación */}
      <div className="container mx-auto px-6 lg:px-8 py-6">
        <p className="text-neutral-500 text-sm">{t("footer.location")}</p>
      </div>
    </footer>
  );
}
