import { motion } from "framer-motion";
import { useTranslation } from "react-i18next";
import { Mail, Instagram, Youtube, MapPin } from "lucide-react";
import { PageWrapper } from "@/components/PageWrapper";

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

export default function Contacto() {
  const { t } = useTranslation();
  return (
    <PageWrapper noTopPadding>
      <section id="contacto" className="pt-32 pb-16 lg:pt-40 lg:pb-24 bg-[#F5F2EC]">
        <div className="container mx-auto px-6 lg:px-8">
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6 }}
            className="text-center max-w-4xl mx-auto space-y-8"
          >
            <div className="inline-flex items-center gap-2 text-[#9b734c] text-sm font-medium mb-2 uppercase">
              <span className="w-2 h-2 rounded-full bg-[#9b734c] shrink-0" />
              {t("contacto.badge")}
            </div>
            <h1 className="text-4xl md:text-5xl lg:text-6xl xl:text-7xl font-bold text-foreground leading-tight">
              <span className="font-script text-primary italic font-normal">{t("contacto.title")}</span>
            </h1>
            <p className="text-muted-foreground text-base md:text-lg max-w-3xl mx-auto leading-relaxed">
              {t("contacto.subtitle")}
            </p>
          </motion.div>
        </div>
      </section>

      {/* Contenido: contacto + imágenes */}
      <section className="py-16 lg:py-24 bg-background">
        <div className="container mx-auto px-6 lg:px-8 max-w-6xl">
          <div className="grid lg:grid-cols-2 gap-10 lg:gap-14 items-start">
            {/* Columna izquierda: una sola card con Escríbenos y Síguenos */}
            <motion.div
              initial={{ opacity: 0, x: -20 }}
              whileInView={{ opacity: 1, x: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.6 }}
              className="lg:sticky lg:top-28 w-full"
            >
              <div className="p-8 lg:p-10 rounded-3xl bg-card border border-border shadow-lg">
                <h2 className="text-sm font-bold text-primary uppercase tracking-wider mb-6">
                  {t("contacto.writeUs")}
                </h2>
                <div className="flex items-center gap-4 mb-6">
                  <div className="w-12 h-12 rounded-2xl bg-primary/10 flex items-center justify-center shrink-0">
                    <Mail className="w-6 h-6 text-primary" />
                  </div>
                  <a
                    href={`mailto:${EMAIL}`}
                    className="text-lg font-semibold text-foreground hover:text-primary transition-colors underline underline-offset-4"
                  >
                    {EMAIL}
                  </a>
                </div>
                <div className="border-t border-border mt-8 pt-8">
                  <h2 className="text-sm font-bold text-primary uppercase tracking-wider mb-4">
                    {t("contacto.follow")}
                  </h2>
                  <div className="flex gap-3">
                    {SOCIAL.map((s) => {
                      const Icon = s.icon;
                      return (
                        <a
                          key={s.label}
                          href={s.href}
                          target="_blank"
                          rel="noopener noreferrer"
                          className="w-12 h-12 rounded-xl bg-muted flex items-center justify-center text-primary hover:bg-primary/10 transition-colors"
                          aria-label={s.label}
                        >
                          <Icon className="w-5 h-5" />
                        </a>
                      );
                    })}
                  </div>
                </div>
              </div>
            </motion.div>

            {/* Columna derecha: imágenes limitadas a la altura de la card */}
            <motion.div
              initial={{ opacity: 0, x: 20 }}
              whileInView={{ opacity: 1, x: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.6 }}
              className="w-full max-h-[320px] lg:max-h-[360px] flex flex-col gap-3 min-h-0"
            >
              <div className="relative rounded-2xl overflow-hidden shadow-lg flex-1 min-h-0">
                <img
                  src="/header-rectangle.jpg"
                  alt="Territorio Renace Atacama"
                  className="w-full h-full object-cover"
                />
                <div className="absolute inset-0 bg-gradient-to-t from-black/60 to-transparent" />
                <div className="absolute bottom-2 left-2 right-2 flex items-center gap-2 text-white text-xs sm:text-sm">
                  <MapPin className="w-3.5 h-3.5 shrink-0" />
                  <span className="font-medium">{t("contacto.location")}</span>
                </div>
              </div>
              <div className="grid grid-cols-2 gap-3 flex-shrink-0 h-20 sm:h-24">
                <div className="rounded-xl overflow-hidden shadow-md h-full">
                  <img
                    src="/desierto-imagen-1.jpg"
                    alt="Desierto de Atacama"
                    className="w-full h-full object-cover"
                  />
                </div>
                <div className="rounded-xl overflow-hidden shadow-md h-full">
                  <img
                    src="/nina-recogiendo.jpg"
                    alt="Trabajo en territorio"
                    className="w-full h-full object-cover"
                  />
                </div>
              </div>
            </motion.div>
          </div>
        </div>
      </section>

      {/* Banda de cierre */}
      <section className="py-16 lg:py-20 bg-gradient-to-br from-[#9b734c]/10 via-background to-[#5b2500]/10">
        <div className="container mx-auto px-6 lg:px-8 text-center">
          <motion.p
            initial={{ opacity: 0, y: 12 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            className="text-xl md:text-2xl font-bold text-foreground max-w-2xl mx-auto"
          >
            {t("contacto.ctaTitle")}
          </motion.p>
          <motion.p
            initial={{ opacity: 0, y: 12 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ delay: 0.1 }}
            className="text-muted-foreground mt-3"
          >
            {t("contacto.ctaSub")}
          </motion.p>
        </div>
      </section>
    </PageWrapper>
  );
}
