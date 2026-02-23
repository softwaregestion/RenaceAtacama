import { Link } from "react-router-dom";
import { useTranslation } from "react-i18next";
import { motion } from "framer-motion";
import { ArrowRight, Briefcase, MapPin, Megaphone, Leaf, Bug } from "lucide-react";
import { Button } from "@/components/ui/button";
import { PageWrapper } from "@/components/PageWrapper";
import { ROUTES } from "@/lib/routes";
import { SectionAccent, CTABand } from "@/components/shared";

/** Misma forma que forma imagen.svg (viewBox 586 588) para clip-path */
const SHAPE_PATH =
  "M560.78.5H202.22c-13.66,0-24.72,11.07-24.72,24.72v41.71c0,14.12-11.45,25.57-25.57,25.57H25.22c-13.66,0-24.72,11.07-24.72,24.72v445.55c0,13.66,11.07,24.72,24.72,24.72h450.34c13.66,0,24.72-11.07,24.72-24.72v-48.17c0-10.55,8.56-19.11,19.11-19.11h41.38c13.66,0,24.72-11.07,24.72-24.72V25.22c0-13.66-11.07-24.72-24.72-24.72Z";

const COMO_SUMARTE_KEYS = [
  { key: "workByArea", icon: Briefcase, image: "/fast-fashion.jpg" },
  { key: "collaborateField", icon: MapPin, image: "/desierto-solo.jpg" },
  { key: "ambassador", icon: Megaphone, image: "/recliclaje.webp" },
] as const;

export default function Escarabajos() {
  const { t } = useTranslation();
  const comoSumarte = COMO_SUMARTE_KEYS.map(({ key, icon, image }) => ({
    title: t(`escarabajos.${key}`),
    description: t(`escarabajos.${key}Desc`),
    icon,
    image,
  }));

  return (
    <PageWrapper noTopPadding>
      <section id="escarabajos" className="pt-32 pb-16 lg:pt-40 lg:pb-24 bg-[#F5F2EC]">
        <div className="container mx-auto px-6 lg:px-8">
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6 }}
            className="text-center max-w-4xl mx-auto space-y-8"
          >
            <div className="inline-flex items-center gap-2 text-[#9b734c] text-sm font-medium mb-2 uppercase">
              <span className="w-2 h-2 rounded-full bg-[#9b734c] shrink-0" />
              {t("escarabajos.badge")}
            </div>
            <div className="flex justify-center bg-transparent">
              <img
                src="/escarabajos-logo-color.png"
                alt={t("escarabajos.title")}
                className="h-20 lg:h-28 w-auto object-contain"
              />
            </div>
            <h1 className="text-4xl md:text-5xl lg:text-6xl xl:text-7xl font-bold text-foreground leading-tight">
              {t("escarabajos.title")}
            </h1>
            <p className="text-muted-foreground text-base md:text-lg max-w-5xl mx-auto leading-relaxed">
              {t("escarabajos.subtitle")}
            </p>
          </motion.div>
        </div>
      </section>

      {/* Símbolo del proyecto - imagen blog-1 con forma SVG + card camion-2 encima */}
      <section className="py-16 lg:py-20 bg-gradient-to-br from-[#9b734c]/5 via-background to-[#5b2500]/5">
        <svg width="0" height="0" className="absolute" aria-hidden>
          <defs>
            <clipPath id="escarabajos-shape" clipPathUnits="objectBoundingBox">
              <path
                transform="scale(0.00171 0.00170)"
                d={SHAPE_PATH}
              />
            </clipPath>
          </defs>
        </svg>
        <div className="container mx-auto px-6 lg:px-8">
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.6 }}
            className="flex flex-col lg:flex-row items-center gap-10 lg:gap-16 max-w-6xl mx-auto"
          >
            <div className="relative flex-shrink-0 w-full max-w-md aspect-[586/588]">
              <div
                className="relative w-full h-full overflow-hidden shadow-2xl"
                style={{ clipPath: "url(#escarabajos-shape)" }}
              >
                <img
                  src="/blog-1.webp"
                  alt=""
                  className="w-full h-full object-cover"
                />
              </div>
              <div className="absolute -top-8 -right-2 lg:-top-6 lg:right-4 w-36 h-36 lg:w-44 lg:h-44 rounded-2xl overflow-hidden shadow-xl border-2 border-white bg-card z-10">
                <img
                  src="/camion-2.jpg"
                  alt={t("escarabajos.logisticsAlt")}
                  className="w-full h-full object-cover"
                />
              </div>
            </div>
            <div className="flex-1 text-center lg:text-left space-y-4">
              <div className="inline-flex items-center gap-2 text-primary">
                <Bug className="w-5 h-5" />
                <span className="text-sm font-semibold uppercase tracking-wide">{t("escarabajos.symbolLabel")}</span>
              </div>
              <p className="text-xl md:text-2xl font-bold text-foreground font-display max-w-2xl">
                {t("escarabajos.symbolQuote")}
              </p>
              <p className="text-muted-foreground text-sm leading-relaxed">
                {t("escarabajos.symbolDesc")}
              </p>
            </div>
          </motion.div>
        </div>
      </section>

      {/* Cómo sumarte - imagen + textos al lado, sin botones ni enlaces */}
      <section className="py-16 lg:py-24 bg-background">
        <div className="container mx-auto px-6 lg:px-8">
          <div className="flex items-center gap-3 mb-12">
            <div className="w-10 h-10 rounded-xl bg-primary/10 flex items-center justify-center">
              <Leaf className="w-5 h-5 text-primary" />
            </div>
            <SectionAccent className="mb-0">{t("escarabajos.howToJoin")}</SectionAccent>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-3 gap-10">
            {comoSumarte.map((item, i) => {
              const Icon = item.icon;
              return (
                <motion.div
                  key={item.title}
                  initial={{ opacity: 0, y: 20 }}
                  whileInView={{ opacity: 1, y: 0 }}
                  viewport={{ once: true }}
                  transition={{ delay: i * 0.1 }}
                  className="flex flex-col sm:flex-row gap-6 rounded-2xl bg-card border border-border p-6 hover:shadow-lg transition-shadow"
                >
                  <div className="flex-shrink-0 w-full sm:w-40 h-48 sm:h-36 rounded-xl overflow-hidden bg-muted">
                    <img
                      src={item.image}
                      alt=""
                      className="w-full h-full object-cover"
                    />
                  </div>
                  <div className="flex-1 min-w-0 flex flex-col justify-center">
                    <div className="w-10 h-10 rounded-xl bg-primary/10 flex items-center justify-center mb-3">
                      <Icon className="w-5 h-5 text-primary" />
                    </div>
                    <h3 className="text-lg font-bold text-foreground mb-2">{item.title}</h3>
                    <p className="text-sm text-muted-foreground leading-relaxed">{item.description}</p>
                  </div>
                </motion.div>
              );
            })}
          </div>
        </div>
      </section>

      <CTABand
        headline={t("escarabajos.ctaHeadline")}
        cta={
          <Button asChild size="lg" className="rounded-full bg-white text-navy hover:bg-white/90 px-10 gap-2">
            <Link to={ROUTES.contacto}>
              {t("escarabajos.ctaButton")}
              <ArrowRight className="w-4 h-4" />
            </Link>
          </Button>
        }
      />
    </PageWrapper>
  );
}
