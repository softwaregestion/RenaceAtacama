import { motion } from "framer-motion";
import { Mail, Instagram, Youtube } from "lucide-react";
import { Button } from "@/components/ui/button";
import { PageHeader } from "@/components/PageHeader";
import { PageWrapper } from "@/components/PageWrapper";
import { SectionAccent } from "@/components/shared";

const EMAIL = "contacto@renaceatacama.cl";

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
  return (
    <PageWrapper>
      <div className="container mx-auto px-6 lg:px-8">
        <PageHeader
          title="Contáctanos"
          text="Si quieres sumarte, colaborar o impulsar alianzas con Renace Atacama, conversemos."
          className="mb-16"
        />

        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6 }}
          className="max-w-2xl"
        >
          <div className="p-8 lg:p-12 rounded-3xl bg-cream-dark border border-border shadow-sm hover:shadow-xl transition-all mb-10">
            <SectionAccent className="mb-6">Escríbenos</SectionAccent>
            <div className="flex flex-wrap items-center gap-4 mb-8">
              <span className="w-12 h-12 rounded-2xl bg-primary/10 flex items-center justify-center shrink-0">
                <Mail className="w-6 h-6 text-primary" />
              </span>
              <a
                href={`mailto:${EMAIL}`}
                className="text-lg font-semibold text-foreground hover:text-primary transition-colors underline underline-offset-4"
              >
                {EMAIL}
              </a>
            </div>
            <Button
              asChild
              variant="hero"
              size="lg"
              className="gap-2 rounded-full px-10"
            >
              <a href={`mailto:${EMAIL}?subject=Quiero colaborar con Renace Atacama`}>
                Contáctanos para colaborar
              </a>
            </Button>
          </div>

          <SectionAccent className="mb-4">Síguenos</SectionAccent>
          <div className="flex flex-wrap gap-4">
            {SOCIAL.map((s) => {
              const Icon = s.icon;
              return (
                <a
                  key={s.label}
                  href={s.href}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="w-14 h-14 rounded-2xl bg-card border border-border flex items-center justify-center text-primary hover:border-primary hover:shadow-lg transition-all"
                  aria-label={s.label}
                >
                  <Icon className="w-6 h-6" />
                </a>
              );
            })}
          </div>
        </motion.div>
      </div>
    </PageWrapper>
  );
}
