import { Link } from "react-router-dom";
import { useTranslation } from "react-i18next";
import { motion } from "framer-motion";
import { ArrowRight, Leaf, Zap, Users, Briefcase, Play, MapPin, Megaphone } from "lucide-react";
import { Button } from "@/components/ui/button";
import { ROUTES } from "@/lib/routes";
import {
  SectionAccent,
  GradientBand,
  FrostedCard,
  FeatureCard,
  CTABand,
  KeywordDivider,
  StatsBlock,
  PageSection,
} from "@/components/shared";
import { PageWrapper } from "@/components/PageWrapper";

const HERO_SHAPE_PATH =
  "M560.78.5H202.22c-13.66,0-24.72,11.07-24.72,24.72v41.71c0,14.12-11.45,25.57-25.57,25.57H25.22c-13.66,0-24.72,11.07-24.72,24.72v445.55c0,13.66,11.07,24.72,24.72,24.72h450.34c13.66,0,24.72-11.07,24.72-24.72v-48.17c0-10.55,8.56-19.11,19.11-19.11h41.38c13.66,0,24.72-11.07,24.72-24.72V25.22c0-13.66-11.07-24.72-24.72-24.72Z";

const ESCARABAJOS_CARD_KEYS = [
  { key: "workByArea", icon: Briefcase },
  { key: "collaborateField", icon: MapPin },
  { key: "ambassador", icon: Megaphone },
] as const;

export default function Index() {
  const { t } = useTranslation();
  const escarabajosCards = ESCARABAJOS_CARD_KEYS.map(({ key, icon }) => ({
    icon,
    title: t(`index.escarabajosSection.${key}`),
    description: t(`index.escarabajosSection.${key}Desc`),
  }));

  return (
    <PageWrapper noTopPadding>
      {/* Hero */}
      <section className="pt-32 pb-16 lg:pt-40 lg:pb-24 bg-background overflow-hidden">
        <svg width="0" height="0" className="absolute" aria-hidden>
          <defs>
            <clipPath id="hero-shape" clipPathUnits="objectBoundingBox">
              <path
                transform="scale(0.00171 0.00170)"
                d={HERO_SHAPE_PATH}
              />
            </clipPath>
          </defs>
        </svg>
        <div className="container mx-auto px-6 lg:px-8">
          <div className="grid lg:grid-cols-2 gap-12 lg:gap-16 items-center">
            <motion.div
              initial={{ opacity: 0, x: -30 }}
              animate={{ opacity: 1, x: 0 }}
              transition={{ duration: 0.6 }}
              className="space-y-8"
            >
              <span className="inline-flex items-center gap-2 text-primary text-sm font-medium uppercase">
                <span className="w-2 h-2 rounded-full bg-primary shrink-0" />
                {t("index.hero.tagline")}
              </span>
              <h1 className="text-4xl md:text-5xl lg:text-6xl xl:text-7xl font-bold text-foreground leading-[1.1]">
                {t("index.hero.titlePart1")} <span className="font-script text-primary italic font-normal">{t("index.hero.titlePart2")}</span>
                <br />
                {t("index.hero.titlePart3")}
              </h1>
              <p className="text-muted-foreground text-lg md:text-xl max-w-lg leading-relaxed">
                {t("index.hero.subtitle")}
              </p>
              <div className="flex flex-wrap items-center gap-4">
                <Button asChild variant="hero" size="lg" className="gap-2 rounded-full px-8">
                  <Link to={ROUTES.elProyecto}>
                    {t("index.hero.cta")}
                    <ArrowRight className="w-4 h-4" />
                  </Link>
                </Button>
                <Button
                  asChild
                  variant="ghost"
                  size="lg"
                  className="rounded-full px-8 gap-2 text-foreground hover:bg-primary/10 hover:text-primary border-0"
                >
                  <a
                    href="https://www.youtube.com/watch?v=dBz9LYR3d8Q"
                    target="_blank"
                    rel="noopener noreferrer"
                  >
                    <Play className="w-4 h-4 fill-current" />
                    {t("index.hero.video")}
                  </a>
                </Button>
              </div>
            </motion.div>
            <motion.div
              initial={{ opacity: 0, x: 30 }}
              animate={{ opacity: 1, x: 0 }}
              transition={{ duration: 0.6, delay: 0.2 }}
              className="relative"
            >
              <div
                className="relative w-full aspect-[586/588] max-h-[520px] overflow-hidden shadow-2xl"
                style={{ clipPath: "url(#hero-shape)" }}
              >
                <img
                  src="/header-rectangle.jpg"
                  alt={t("index.hero.alt")}
                  className="w-full h-full object-cover"
                />
              </div>
              <img
                src="/icon-blanco.png"
                alt=""
                aria-hidden
                className="absolute -top-[2%] left-[88%] w-[22%] max-h-[22%] object-contain object-center pointer-events-none -translate-x-1/2 z-10"
              />
              <div className="absolute -top-6 -right-6 w-40 h-40 bg-primary/20 rounded-full blur-3xl" />
              <div className="absolute -bottom-8 -left-8 w-56 h-56 bg-amber-200/30 rounded-full blur-3xl" />
              <motion.div
                initial={{ opacity: 0, y: 20 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.5, delay: 0.5 }}
                className="absolute -bottom-6 -left-4 lg:-left-8 bg-card rounded-3xl shadow-xl p-5 z-20 border border-border"
              >
                <div className="flex items-center gap-4">
                  <div className="relative shrink-0">
                    <img
                      src="/alto-hospicio.jpg"
                      alt="Alto Hospicio"
                      className="w-20 h-20 rounded-2xl object-cover"
                    />
                    <span
                      className="absolute -top-1.5 -right-1.5 w-7 h-7 rounded-full bg-primary flex items-center justify-center text-primary-foreground shadow-md"
                      aria-hidden
                    >
                      <MapPin className="w-3.5 h-3.5" />
                    </span>
                  </div>
                  <div>
                    <p className="font-bold text-foreground">{t("index.hero.altoHospicio")}</p>
                    <p className="text-sm text-muted-foreground">{t("index.hero.territory")}</p>
                  </div>
                </div>
              </motion.div>
            </motion.div>
          </div>
        </div>
      </section>

      {/* Los Vertederos de Alto Hospicio */}
      <GradientBand className="py-24 lg:py-36 -mt-2">
        <div className="container mx-auto px-6 lg:px-8 relative">
          <img
            src="/renace-logo-blanco.png"
            alt="Renace Atacama"
            className="absolute left-6 lg:left-8 -top-6 lg:-top-4 z-20 h-[4.2rem] lg:h-[6rem] w-auto object-contain pointer-events-none"
          />
          <div className="relative -mt-12 lg:-mt-16 pt-24 lg:pt-14 pb-4 z-10">
            {/* Right Card - Impactos (Top Right, Higher) */}
            <motion.div
              initial={{ opacity: 0, y: 24 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.5, delay: 0.2 }}
              className="lg:absolute lg:top-0 lg:right-0 lg:w-[32%] mb-6 lg:mb-0"
            >
              <div className="rounded-3xl bg-white shadow-2xl p-6 lg:p-8 border border-orange-200/50">
                <span className="inline-block text-xs font-bold text-primary uppercase tracking-wider mb-4">
                  {t("index.impactos.label")}
                </span>
                <h3 className="text-2xl lg:text-3xl font-bold text-foreground mb-8 leading-tight">
                  {t("index.impactos.title")}
                </h3>
                
                <div className="space-y-6">
                  <div>
                    <h4 className="text-lg font-bold text-foreground mb-2">{t("index.impactos.ambiental.title")}</h4>
                    <p className="text-muted-foreground text-sm leading-relaxed">
                      {t("index.impactos.ambiental.text")}
                    </p>
                  </div>
                  <div>
                    <h4 className="text-lg font-bold text-foreground mb-2">{t("index.impactos.social.title")}</h4>
                    <p className="text-muted-foreground text-sm leading-relaxed">
                      {t("index.impactos.social.text")}
                    </p>
                  </div>
                  <div>
                    <h4 className="text-lg font-bold text-foreground mb-2">{t("index.impactos.economico.title")}</h4>
                    <p className="text-muted-foreground text-sm leading-relaxed">
                      {t("index.impactos.economico.text")}
                    </p>
                  </div>
                </div>
              </div>
            </motion.div>

            {/* Left Side - Title Card (Lower Left) */}
            <motion.div
              initial={{ opacity: 0, y: 24 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.5 }}
              className="lg:w-[38%] lg:mt-32 mb-6 lg:mb-0"
            >
              <FrostedCard className="p-6 lg:p-8">
                <div className="flex items-center gap-3 mb-4">
                  <div className="w-10 h-10 bg-white rounded-lg flex items-center justify-center shrink-0">
                    <Leaf className="w-5 h-5 text-primary" />
                  </div>
                  <h3 className="text-2xl lg:text-3xl font-bold text-black">
                    {t("index.vertederos.title")}
                  </h3>
                </div>
                <p className="text-white/90 text-sm leading-relaxed">
                  {t("index.vertederos.text")}
                </p>
              </FrostedCard>
            </motion.div>

            {/* Center-Right - Statistics Cards (Staggered) */}
            <div className="lg:absolute lg:right-[34%] lg:top-0 lg:w-[30%] space-y-6">
              {/* 300ha Stat - Top, shifted left */}
              <motion.div
                initial={{ opacity: 0, y: 24 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ duration: 0.5, delay: 0.1 }}
                className="lg:-ml-8"
              >
                <FrostedCard className="p-0 overflow-hidden">
                  <div className="relative h-48">
                    <img 
                      src="/impactosa-mbientales-2.jpg" 
                      alt="Área afectada" 
                      className="w-full h-full object-cover object-center"
                    />
                    <div className="absolute inset-0 bg-gradient-to-br from-[#9b734c]/70 to-transparent" />
                    <div className="absolute top-4 left-4 right-4">
                      <p className="text-4xl lg:text-5xl font-bold text-white mb-1">300ha</p>
                      <p className="text-white/95 text-xs font-medium">{t("index.stats.area")}</p>
                    </div>
                  </div>
                </FrostedCard>
              </motion.div>

              {/* 15+ Stat - Middle, shifted right */}
              <motion.div
                initial={{ opacity: 0, y: 24 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ duration: 0.5, delay: 0.15 }}
                className="lg:ml-6 lg:mt-8"
              >
                <FrostedCard className="p-0 overflow-hidden">
                  <div className="relative h-40">
                    <img 
                      src="/impactos-sociales.jpg" 
                      alt="Comunidades" 
                      className="w-full h-full object-cover object-left"
                    />
                    <div className="absolute inset-0 bg-gradient-to-tl from-[#9b734c]/75 via-transparent to-[#5b2500]/20" />
                    <div className="absolute bottom-4 right-4 left-4 text-right">
                      <p className="text-4xl lg:text-5xl font-bold text-white mb-1">15+</p>
                      <p className="text-white/95 text-xs font-medium">{t("index.stats.communities")}</p>
                    </div>
                  </div>
                </FrostedCard>
              </motion.div>

              {/* 39k Stat - Bottom, shifted left, overlaps slightly */}
              <motion.div
                initial={{ opacity: 0, y: 24 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ duration: 0.5, delay: 0.2 }}
                className="lg:-ml-4 lg:-mt-4 relative z-10"
              >
                <FrostedCard className="p-0 overflow-hidden">
                  <div className="relative h-52">
                    <img 
                      src="/nina-recogiendo.jpg" 
                      alt="Toneladas al año" 
                      className="w-full h-full object-cover object-right"
                    />
                    <div className="absolute inset-0 bg-gradient-to-tr from-[#9b734c]/80 to-transparent" />
                    <div className="absolute bottom-6 left-4 right-4">
                      <p className="text-4xl lg:text-5xl font-bold text-white mb-1">39k</p>
                      <p className="text-white/95 text-xs font-medium">{t("index.stats.tonsPerYear")}</p>
                    </div>
                  </div>
                </FrostedCard>
              </motion.div>
            </div>
          </div>
        </div>
      </GradientBand>

      {/* Acción Social y Comunitaria */}
      <PageSection variant="cream">
        <div className="grid lg:grid-cols-2 gap-16 items-start">
          <motion.div
            initial={{ opacity: 0, x: -20 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.6 }}
            className="space-y-8"
          >
            <div className="inline-flex items-center gap-2 text-primary text-sm font-medium uppercase">
              <span className="w-2 h-2 rounded-full bg-primary shrink-0" />
              {t("index.accionSocial.tag")}
            </div>
            <h2 className="text-3xl md:text-4xl lg:text-5xl font-bold text-foreground leading-tight">
              {t("index.accionSocial.title")}
            </h2>
            <p className="text-muted-foreground text-lg leading-relaxed max-w-lg">
              {t("index.accionSocial.subtitle")}
            </p>
          </motion.div>
          <div className="grid sm:grid-cols-1 gap-6">
            {/* Card 1 */}
            <motion.div
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.4, delay: 0.1 }}
            >
              <div className="rounded-2xl border border-primary bg-card p-6 hover:border-primary hover:shadow-lg transition-all h-full">
                <div className="w-14 h-14 rounded-2xl flex items-center justify-center mb-4 shrink-0 overflow-hidden">
                  <img 
                    src="/terreno-2.jpg" 
                    alt="Sanar el desierto" 
                    className="w-full h-full object-cover rounded-2xl"
                  />
                </div>
                <h3 className="text-xl font-bold text-foreground mb-3">
                  {t("index.accionSocial.card1Title")}
                </h3>
                <p className="text-base font-medium text-muted-foreground leading-relaxed">
                  {t("index.accionSocial.card1Text")}
                </p>
              </div>
            </motion.div>

            {/* Card 2 */}
            <motion.div
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.4, delay: 0.2 }}
            >
              <div className="rounded-2xl border border-primary bg-card p-6 hover:border-primary hover:shadow-lg transition-all h-full">
                <div className="w-14 h-14 rounded-2xl flex items-center justify-center mb-4 shrink-0 overflow-hidden">
                  <img 
                    src="/artistic-woman-studio.jpg" 
                    alt="Crisis" 
                    className="w-full h-full object-cover rounded-2xl"
                  />
                </div>
                <h3 className="text-xl font-bold text-foreground mb-3">
                  {t("index.accionSocial.card2Title")}
                </h3>
                <p className="text-base font-medium text-muted-foreground leading-relaxed">
                  {t("index.accionSocial.card2Text")}
                </p>
              </div>
            </motion.div>
          </div>
        </div>
      </PageSection>

      <KeywordDivider />

      {/* Partners */}
      <section className="py-12 lg:py-16 bg-white">
        <div className="container mx-auto px-6 lg:px-8">
          <div className="text-center mb-8">
            <h2 className="text-3xl md:text-4xl lg:text-5xl font-bold text-foreground">
              {t("index.partners")}
            </h2>
          </div>
          <div className="relative overflow-hidden">
            <div className="flex animate-scroll-left gap-8 lg:gap-12">
              {/* Primera fila de logos */}
              {[
                "/logo-beginns-1.jpg",
                "/logo-conexion-mrkt.jpg",
                "/logo-normadi-1.jpg",
                "/revibe.png",
                "/hymenophyllym-logo.jpg",
                "/iscatex-logo.jpg",
                "/labeltrana-logo-ver.jpg",
                "/proche-logo.png",
                "/logo-hotel.jpg",
                "/unap.jpg",
              ].map((logo, i) => (
                <img
                  key={`logo-1-${i}`}
                  src={logo}
                  alt={`Logo ${i + 1}`}
                  className="flex-shrink-0 w-40 h-40 lg:w-52 lg:h-52 object-contain transition-all duration-300 hover:scale-110"
                />
              ))}
              {/* Segunda fila duplicada para el loop infinito */}
              {[
                "/logo-beginns-1.jpg",
                "/logo-conexion-mrkt.jpg",
                "/logo-normadi-1.jpg",
                "/revibe.png",
                "/hymenophyllym-logo.jpg",
                "/iscatex-logo.jpg",
                "/labeltrana-logo-ver.jpg",
                "/proche-logo.png",
                "/logo-hotel.jpg",
                "/unap.jpg",
              ].map((logo, i) => (
                <img
                  key={`logo-2-${i}`}
                  src={logo}
                  alt={`Logo ${i + 1}`}
                  className="flex-shrink-0 w-40 h-40 lg:w-52 lg:h-52 object-contain transition-all duration-300 hover:scale-110"
                />
              ))}
            </div>
          </div>
        </div>
      </section>

      {/* Patrocinadores */}
      <section className="py-12 lg:py-16 bg-white">
        <div className="container mx-auto px-6 lg:px-8">
          <div className="text-center mb-8">
            <h2 className="text-3xl md:text-4xl lg:text-5xl font-bold text-foreground">
              {t("index.patrocinadores")}
            </h2>
          </div>
          <div className="relative overflow-hidden">
            <div className="flex animate-scroll-left gap-8 lg:gap-12">
              {[
                "/logo-gore-tarapaca.png",
                "/alto-hospicio-logo.png",
                "/logo-muni-iquique.png",
                "/camara-verde-chile.png",
              ].map((logo, i) => (
                <img
                  key={`patro-1-${i}`}
                  src={logo}
                  alt={`Patrocinador ${i + 1}`}
                  className="flex-shrink-0 w-40 h-40 lg:w-52 lg:h-52 object-contain transition-all duration-300 hover:scale-110"
                />
              ))}
              {[
                "/logo-gore-tarapaca.png",
                "/alto-hospicio-logo.png",
                "/logo-muni-iquique.png",
                "/camara-verde-chile.png",
              ].map((logo, i) => (
                <img
                  key={`patro-2-${i}`}
                  src={logo}
                  alt={`Patrocinador ${i + 1}`}
                  className="flex-shrink-0 w-40 h-40 lg:w-52 lg:h-52 object-contain transition-all duration-300 hover:scale-110"
                />
              ))}
            </div>
          </div>
        </div>
      </section>

      {/* Resultados esperados: Escarabajos del Desierto */}
      <PageSection variant="cream" className="!py-14 lg:!py-20">
        <div className="grid lg:grid-cols-2 gap-10 lg:gap-14 items-stretch">
          {/* Left: imagen (blog-1 + overlay) con forma hero; misma altura que panel derecho */}
          <motion.div
            initial={{ opacity: 0, x: -24 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true }}
            className="relative flex-1 min-w-0 w-full h-full min-h-0"
          >
            <div
              className="relative w-full h-full min-h-[280px] overflow-hidden shadow-xl"
              style={{ clipPath: "url(#hero-shape)" }}
            >
              <div
                className="absolute inset-0 bg-cover bg-center"
                style={{ backgroundImage: "url(/productos/escarabajo-final.jpg)" }}
              />
              <div className="absolute inset-0 bg-[#6F4E37]/70" aria-hidden />
            </div>
            <img
              src="/escarabajos-logo.png"
              alt="Escarabajos del Desierto"
              className="absolute top-2 right-4 lg:top-4 z-10 w-[8rem] h-[8rem] lg:w-[9.5rem] lg:h-[9.5rem] object-contain mix-blend-lighten pointer-events-none rotate-[20deg]"
            />
          </motion.div>

          {/* Right: panel blanco, borde naranja; cards sin borde, sombra paralela */}
          <motion.div
            initial={{ opacity: 0, x: 24 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true }}
            className="rounded-2xl lg:rounded-3xl bg-white border-2 border-primary p-6 lg:p-10 flex flex-col justify-center"
          >
            <h2 className="text-2xl md:text-3xl lg:text-4xl font-bold text-foreground leading-tight mb-4">
              {t("index.escarabajosSection.title")}
            </h2>
            <p className="text-muted-foreground text-sm lg:text-base leading-relaxed mb-2">
              {t("index.escarabajosSection.intro1")}
            </p>
            <p className="text-muted-foreground text-sm lg:text-base leading-relaxed mb-6">
              {t("index.escarabajosSection.intro2")}
            </p>
            <div className="space-y-4">
              {escarabajosCards.map((c, i) => {
                const Icon = c.icon;
                return (
                  <motion.div
                    key={c.title}
                    initial={{ opacity: 0, y: 12 }}
                    whileInView={{ opacity: 1, y: 0 }}
                    viewport={{ once: true }}
                    transition={{ duration: 0.35, delay: i * 0.08 }}
                    className="flex gap-4 rounded-2xl bg-card p-4 lg:p-5 shadow-[3px_3px_8px_rgba(0,0,0,0.06)] hover:shadow-[4px_4px_10px_rgba(0,0,0,0.08)] transition-shadow"
                  >
                    <div className="w-12 h-12 rounded-full flex items-center justify-center bg-primary text-primary-foreground shrink-0">
                      <Icon className="w-5 h-5" />
                    </div>
                    <div>
                      <h3 className="text-base font-bold text-foreground mb-1">{c.title}</h3>
                      <p className="text-sm text-muted-foreground leading-relaxed">{c.description}</p>
                    </div>
                  </motion.div>
                );
              })}
            </div>
          </motion.div>
        </div>
      </PageSection>

      {/* Cómo sumarte: two-column + CTA - OCULTA */}
      {/* <PageSection variant="light">
        <div className="grid lg:grid-cols-2 gap-16 items-center">
          <motion.div
            initial={{ opacity: 0, x: -20 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true }}
            className="space-y-8"
          >
            <SectionAccent>Cómo sumarte</SectionAccent>
            <h2 className="text-3xl md:text-4xl lg:text-5xl font-bold text-foreground leading-tight">
              Tu historia{" "}
              <span className="font-script text-primary italic font-normal">puede</span> ser la
              siguiente
            </h2>
            <ul className="space-y-5">
              {COMO_SUMARTE.map((c, i) => (
                <li key={c.title} className="flex items-start gap-4">
                  <span className="w-8 h-8 rounded-full bg-primary/10 flex items-center justify-center shrink-0 mt-0.5">
                    <Check className="w-4 h-4 text-primary" />
                  </span>
                  <div>
                    <p className="font-bold text-foreground">{c.title}</p>
                    <p className="text-muted-foreground text-sm">{c.text}</p>
                  </div>
                </li>
              ))}
            </ul>
            <Button asChild variant="hero" size="lg" className="gap-2 rounded-full px-10 mt-4">
              <Link to={ROUTES.contacto}>
                Quiero unirme
                <ArrowRight className="w-4 h-4" />
              </Link>
            </Button>
          </motion.div>
          <motion.div
            initial={{ opacity: 0, x: 20 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true }}
            className="grid sm:grid-cols-3 gap-6"
          >
            {COMO_SUMARTE.map((c, i) => (
              <div
                key={c.title}
                className="rounded-3xl border border-border bg-card p-6 hover:border-primary hover:shadow-lg transition-all"
              >
                <div className="w-12 h-12 rounded-2xl bg-primary/10 flex items-center justify-center mb-4 text-primary font-bold">
                  {String(i + 1).padStart(2, "0")}
                </div>
                <h3 className="font-bold text-foreground mb-2">{c.title}</h3>
                <p className="text-sm text-muted-foreground">{c.text}</p>
              </div>
            ))}
          </motion.div>
        </div>
      </PageSection>

      <KeywordDivider /> */}

      {/* CTA Band */}
      <CTABand
        headline={t("index.cta.headline")}
        cta={
          <Button asChild size="lg" className="rounded-full bg-white text-navy hover:bg-white/90 px-10 gap-2">
            <Link to={ROUTES.contacto}>
              {t("index.cta.button")}
              <ArrowRight className="w-4 h-4" />
            </Link>
          </Button>
        }
      />
    </PageWrapper>
  );
}
