import { Link } from "react-router-dom";
import { useTranslation } from "react-i18next";
import { motion } from "framer-motion";
import { ArrowRight, Shirt, Cog, Leaf, Users, Zap, Briefcase, Recycle, Sparkles, RefreshCw, Network } from "lucide-react";
import { Button } from "@/components/ui/button";
import { PageWrapper } from "@/components/PageWrapper";
import { ROUTES } from "@/lib/routes";
import { SectionAccent, FeatureCard, StatsBlock, CTABand, StepCard, PageSection, GradientBand, FrostedCard } from "@/components/shared";

const HERO_SHAPE_PATH =
  "M560.78.5H202.22c-13.66,0-24.72,11.07-24.72,24.72v41.71c0,14.12-11.45,25.57-25.57,25.57H25.22c-13.66,0-24.72,11.07-24.72,24.72v445.55c0,13.66,11.07,24.72,24.72,24.72h450.34c13.66,0,24.72-11.07,24.72-24.72v-48.17c0-10.55,8.56-19.11,19.11-19.11h41.38c13.66,0,24.72-11.07,24.72-24.72V25.22c0-13.66-11.07-24.72-24.72-24.72Z";

const RESULTADOS_ICONS = [RefreshCw, Sparkles, Leaf, Network] as const;
const RESULTADOS_KEYS = ["transformar", "crear", "restaurar", "conectar"] as const;

const YOUTUBE_VIDEO_ID = "dBz9LYR3d8Q";

export default function ElProyecto() {
  const { t } = useTranslation();
  const impactos = [
    { title: t("elProyecto.economiaRegenerativa"), text: t("elProyecto.economiaText"), icon: Recycle },
    { title: t("elProyecto.nodoInnovacion"), text: t("elProyecto.nodoText"), icon: Sparkles },
    { title: t("elProyecto.modeloCircular"), text: t("elProyecto.modeloText"), icon: RefreshCw },
  ];
  const modalidades = [
    { text: t("elProyecto.modalidad1"), icon: Shirt },
    { text: t("elProyecto.modalidad2"), icon: Cog },
    { text: t("elProyecto.modalidad3"), icon: Sparkles },
  ];
  const ejes = [
    { title: t("elProyecto.ejes.ambiental"), icon: Leaf, description: t("elProyecto.ejeAmbientalDesc") },
    { title: t("elProyecto.ejes.social"), icon: Users, description: t("elProyecto.ejeSocialDesc") },
    { title: t("elProyecto.ejes.comunitario"), icon: Zap, description: t("elProyecto.ejeComunitarioDesc") },
    { title: t("elProyecto.ejes.economico"), icon: Briefcase, description: t("elProyecto.ejeEconomicoDesc") },
  ];
  const resultados = RESULTADOS_KEYS.map((key, i) => ({
    title: t(`elProyecto.resultados.${key}`),
    text: t(`elProyecto.resultados.${key}Text`),
    icon: RESULTADOS_ICONS[i],
  }));

  return (
    <PageWrapper>
      {/* Hero Section */}
      <section className="relative pt-32 pb-16 lg:pt-40 lg:pb-24 overflow-hidden">
        {/* Background Image */}
        <div className="absolute inset-0 z-0">
          <img
            src="/desierto-imagen-1.jpg"
            alt="Desierto de Atacama"
            className="w-full h-full object-cover"
          />
          {/* Overlay with 80% opacity */}
          <div className="absolute inset-0 bg-background/80" />
        </div>
        
        {/* Content */}
        <div className="relative z-10 container mx-auto px-6 lg:px-8">
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6 }}
            className="text-center max-w-4xl mx-auto space-y-8"
          >
            <div className="inline-flex items-center gap-2 text-primary text-sm font-medium mb-6">
              <span className="w-2 h-2 rounded-full bg-primary shrink-0" />
              {t("elProyecto.badge")}
            </div>
            <h1 className="text-4xl md:text-5xl lg:text-6xl xl:text-7xl font-bold text-foreground leading-tight">
              {t("elProyecto.title")}
            </h1>
            <p className="text-muted-foreground text-lg md:text-xl max-w-2xl mx-auto leading-relaxed">
              {t("elProyecto.subtitle")}
            </p>
          </motion.div>

          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            className="mt-16 max-w-4xl mx-auto"
          >
            <div className="rounded-2xl overflow-hidden bg-gray-900 border border-border shadow-2xl aspect-video">
              <iframe
                title="Video El Proyecto"
                src={`https://www.youtube.com/embed/${YOUTUBE_VIDEO_ID}?rel=0`}
                allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture"
                allowFullScreen
                className="w-full h-full"
              />
            </div>
          </motion.div>
        </div>
      </section>

      {/* Logo Marquee Band */}
      <GradientBand className="py-8 lg:py-12">
        <div className="container mx-auto px-6 lg:px-8">
          <div className="flex justify-center items-center gap-8 lg:gap-12 text-white/90 text-sm font-medium flex-wrap">
            {t("elProyecto.band")}
          </div>
        </div>
      </GradientBand>

      {/* El Problema Section - Two Column Layout */}
      <PageSection variant="light">
        <div className="grid lg:grid-cols-2 gap-16 items-start">
          {/* Left Column */}
          <motion.div
            initial={{ opacity: 0, x: -30 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.6 }}
            className="space-y-8"
          >
            <div className="inline-flex items-center gap-2 text-primary text-sm font-medium mb-6">
              <span className="w-2 h-2 rounded-full bg-primary shrink-0" />
              {t("elProyecto.problemLabel")}
            </div>
            <h2 className="text-3xl md:text-4xl lg:text-5xl font-bold text-foreground leading-tight">
              {t("elProyecto.problemTitle")}
            </h2>
            <p className="text-muted-foreground text-lg leading-relaxed">
              {t("elProyecto.problemText")}
            </p>
            <div className="grid grid-cols-3 gap-6 pt-6">
              <div>
                <p className="text-4xl lg:text-5xl font-bold text-foreground">
                  300ha
                </p>
                <p className="text-muted-foreground mt-2 text-sm">{t("elProyecto.area")}</p>
              </div>
              <div>
                <p className="text-4xl lg:text-5xl font-bold text-foreground">
                  15<span className="text-primary">+</span>
                </p>
                <p className="text-muted-foreground mt-2 text-sm">{t("elProyecto.communities")}</p>
              </div>
              <div>
                <p className="text-4xl lg:text-5xl font-bold text-foreground">
                  39k
                </p>
                <p className="text-muted-foreground mt-2 text-sm">{t("elProyecto.tonsYear")}</p>
              </div>
            </div>
          </motion.div>

          {/* Right Column - Impact Cards */}
          <div className="grid grid-cols-1 sm:grid-cols-2 gap-6">
            {impactos.map((item, index) => {
              const Icon = item.icon;
              return (
                <motion.div
                  key={item.title}
                  initial={{ opacity: 0, y: 20 }}
                  whileInView={{ opacity: 1, y: 0 }}
                  viewport={{ once: true }}
                  transition={{ duration: 0.4, delay: index * 0.1 }}
                  className="group p-6 rounded-2xl bg-card border border-border hover:border-primary hover:shadow-lg transition-all cursor-pointer"
                >
                  <div className="w-14 h-14 rounded-xl bg-primary/10 flex items-center justify-center mb-4 group-hover:bg-primary group-hover:text-primary-foreground transition-all">
                    <Icon className="w-6 h-6 text-primary group-hover:text-primary-foreground" />
                  </div>
                  <h3 className="text-sm font-bold text-foreground mb-2 uppercase tracking-wide">
                    {item.title}
                  </h3>
                  <p className="text-sm text-muted-foreground leading-relaxed">
                    {item.text}
                  </p>
                </motion.div>
              );
            })}
          </div>
        </div>
        
        {/* Banner Image */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.6, delay: 0.2 }}
          className="mt-16 rounded-2xl overflow-hidden shadow-xl"
        >
          <img
            src="/terreno-2.jpg"
            alt="Terreno afectado en Alto Hospicio"
            className="w-full h-[150px] md:h-[200px] object-cover"
          />
        </motion.div>
      </PageSection>

      {/* Guidance/Process Section - Dark Background */}
      <section className="py-20 lg:py-28 bg-[#391800] text-white relative overflow-hidden">
        <div className="absolute top-0 left-0 right-0 h-8 bg-background rounded-b-3xl" />
        <div className="container mx-auto px-6 lg:px-8">
          {/* First Row: Label + Title + GIF */}
          <div className="grid lg:grid-cols-2 gap-12 items-center mb-12">
            {/* Left: Label + Title */}
            <motion.div
              initial={{ opacity: 0, x: -30 }}
              whileInView={{ opacity: 1, x: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.6 }}
            >
              <div className="inline-flex items-center gap-2 text-white text-sm font-medium mb-6">
                <span className="w-2 h-2 rounded-full bg-primary shrink-0"></span>
                {t("elProyecto.projectLabel")}
              </div>
              <h2 className="text-3xl md:text-4xl lg:text-5xl font-bold leading-tight text-white">
                {t("elProyecto.projectTitle")}
              </h2>
            </motion.div>

            {/* Right: Video with Glass Effect */}
            <motion.div
              initial={{ opacity: 0, x: 30 }}
              whileInView={{ opacity: 1, x: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.6, delay: 0.2 }}
              className="flex justify-center lg:justify-end relative"
            >
              {/* Glass Layer - Behind */}
              <div className="absolute -inset-4 lg:-inset-6 w-full max-w-2xl lg:max-w-3xl aspect-[16/9] rounded-3xl bg-white/10 backdrop-blur-xl border border-white/20 shadow-2xl" />
              
              {/* Video Container - On Top */}
              <div className="relative z-10 w-full max-w-2xl lg:max-w-3xl aspect-[16/9] rounded-2xl overflow-hidden shadow-xl">
                <video
                  src="/el-proyecto-renace.mp4"
                  autoPlay
                  loop
                  muted
                  playsInline
                  className="w-full h-full object-cover"
                />
              </div>
            </motion.div>
          </div>

          {/* Second Row: 3 Cards in 3 Columns */}
          <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
            {modalidades.map((modalidad, index) => {
              const Icon = modalidad.icon;
              return (
                <motion.div
                  key={index}
                  initial={{ opacity: 0, y: 20 }}
                  whileInView={{ opacity: 1, y: 0 }}
                  whileHover={{ 
                    scale: 1.03, 
                    y: -8,
                    transition: { duration: 0.3, ease: "easeOut" }
                  }}
                  viewport={{ once: true }}
                  transition={{ duration: 0.5, delay: index * 0.1 }}
                  className="relative group overflow-hidden rounded-3xl bg-white/5 backdrop-blur-sm border border-white/10 cursor-pointer"
                  style={{ boxShadow: "0 4px 6px -1px rgba(0, 0, 0, 0.1)" }}
                >
                  <motion.div
                    whileHover={{ 
                      boxShadow: "0 20px 25px -5px rgba(0, 0, 0, 0.3), 0 10px 10px -5px rgba(0, 0, 0, 0.2)",
                      borderColor: "rgba(251, 146, 60, 0.5)"
                    }}
                    transition={{ duration: 0.3 }}
                    className="h-full"
                  >
                    <div className="p-8">
                      <motion.div
                        whileHover={{ 
                          scale: 1.1,
                          rotate: 5
                        }}
                        transition={{ duration: 0.3, ease: "easeOut" }}
                        className="w-10 h-10 rounded-xl bg-primary/20 flex items-center justify-center mb-6 group-hover:bg-primary group-hover:text-primary-foreground transition-all"
                      >
                        <Icon className="w-5 h-5 text-primary group-hover:text-primary-foreground" />
                      </motion.div>
                      <motion.p
                        whileHover={{ 
                          color: "rgba(255, 255, 255, 0.95)"
                        }}
                        transition={{ duration: 0.2 }}
                        className="text-white text-sm leading-relaxed"
                      >
                        {modalidad.text}
                      </motion.p>
                    </div>
                  </motion.div>
                </motion.div>
              );
            })}
          </div>
        </div>
      </section>

      {/* La Propuesta Section - Two Column */}
      <PageSection variant="light">
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
        <div className="grid lg:grid-cols-2 gap-16 items-center">
          {/* Left Column - Image with hero shape */}
          <motion.div
            initial={{ opacity: 0, x: -30 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.6 }}
            className="relative flex-1 min-w-0 w-full h-full min-h-0"
          >
            <div
              className="relative w-full h-full min-h-[400px] lg:min-h-[500px] overflow-hidden shadow-xl"
              style={{ clipPath: "url(#hero-shape)" }}
            >
              <img
                src="/valorizacion-energetica.jpg"
                alt="Valorización energética"
                className="w-full h-full object-cover"
              />
            </div>
          </motion.div>

          {/* Right Column - Content */}
          <motion.div
            initial={{ opacity: 0, x: 30 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.6 }}
            className="space-y-8"
          >
            <div className="inline-flex items-center gap-2 text-primary text-sm font-medium mb-6">
              <span className="w-2 h-2 rounded-full bg-primary shrink-0" />
              RECICLAJE CONSCIENTE
            </div>
            <h2 className="text-3xl md:text-4xl lg:text-5xl font-bold text-foreground leading-tight">
              Modalidades de{" "}
              <span className="font-script text-primary italic font-normal">Reciclaje</span>
            </h2>
            <p className="text-muted-foreground text-lg leading-relaxed">
              Renace Atacama impulsa distintas modalidades de reciclaje para dar nueva vida a los residuos, transformándolos en productos, energía y oportunidades de desarrollo local, reduciendo así su impacto ambiental y social.
            </p>

            {/* Feature Cards */}
            <div className="space-y-4">
              <div className="bg-card rounded-2xl p-6 border border-border">
                <div className="flex items-start gap-4">
                  <div className="w-12 h-12 rounded-xl bg-primary/10 flex items-center justify-center shrink-0">
                    <Recycle className="w-6 h-6 text-primary" />
                  </div>
                  <div>
                    <h3 className="text-lg font-bold text-foreground mb-2">
                      Segunda vida & Reciclaje mecánico
                    </h3>
                    <p className="text-sm text-muted-foreground leading-relaxed">
                      Textiles en buen estado se restauran para su reutilización y los restantes se transforman en materia prima para nuevos productos.
                    </p>
                  </div>
                </div>
              </div>
              <div className="bg-card rounded-2xl p-6 border border-border">
                <div className="flex items-start gap-4">
                  <div className="w-12 h-12 rounded-xl bg-primary/10 flex items-center justify-center shrink-0">
                    <Cog className="w-6 h-6 text-primary" />
                  </div>
                  <div>
                    <h3 className="text-lg font-bold text-foreground mb-2">
                      Reciclaje mecánico para otros residuos
                    </h3>
                    <p className="text-sm text-muted-foreground leading-relaxed">
                      Residuos textiles y otros materiales se procesan mecánicamente para reintegrarlos a cadenas productivas locales.
                    </p>
                  </div>
                </div>
              </div>
              <div className="bg-card rounded-2xl p-6 border border-border">
                <div className="flex items-start gap-4">
                  <div className="w-12 h-12 rounded-xl bg-primary/10 flex items-center justify-center shrink-0">
                    <Zap className="w-6 h-6 text-primary" />
                  </div>
                  <div>
                    <h3 className="text-lg font-bold text-foreground mb-2">
                      Valorización energética de residuos
                    </h3>
                    <p className="text-sm text-muted-foreground leading-relaxed">
                      Residuos no reutilizables se convierten en energía y subproductos de valor mediante tecnologías limpias.
                    </p>
                  </div>
                </div>
              </div>
            </div>
          </motion.div>
        </div>
      </PageSection>

      {/* Ejes de Acción Section */}
      <PageSection variant="cream">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.6 }}
          className="text-center mb-16"
        >
          <div className="inline-flex items-center gap-2 text-primary text-sm font-medium mb-6">
            <span className="w-2 h-2 rounded-full bg-primary shrink-0" />
            {t("laPropuesta.ejes")}
          </div>
          <h2 className="text-3xl md:text-4xl lg:text-5xl font-bold text-foreground leading-tight mb-6">
            {t("elProyecto.ejesSectionTitle")}
          </h2>
          <p className="text-muted-foreground text-lg leading-relaxed max-w-4xl mx-auto">
            {t("elProyecto.ejesSectionSub")}
          </p>
        </motion.div>

        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-6 mb-16">
          {ejes.map((e, i) => {
            const Icon = e.icon;
            return (
              <motion.div
                key={e.title}
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ delay: i * 0.1 }}
                className="group p-6 rounded-2xl bg-card border border-border hover:border-primary hover:shadow-lg transition-all text-center"
              >
                <div className="w-16 h-16 rounded-xl bg-primary/10 flex items-center justify-center mx-auto mb-4 group-hover:bg-primary group-hover:text-primary-foreground transition-all">
                  <Icon className="w-8 h-8 text-primary group-hover:text-primary-foreground" />
                </div>
                <h3 className="text-lg font-bold text-foreground uppercase tracking-wide mb-3">
                  {e.title}
                </h3>
                <p className="text-sm text-muted-foreground leading-relaxed">
                  {e.description}
                </p>
              </motion.div>
            );
          })}
        </div>
      </PageSection>

      {/* Resultados Esperados Section - Dark Brown Background */}
      <section className="py-20 lg:py-28 bg-[#391800] text-white relative overflow-hidden">
        <div className="absolute top-0 left-0 right-0 h-8 bg-cream-dark rounded-b-3xl" />
        <div className="container mx-auto px-6 lg:px-8">
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.6 }}
            className="text-center mb-16"
          >
            <div className="inline-flex items-center gap-2 text-white text-sm font-medium mb-6">
              <span className="w-2 h-2 rounded-full bg-primary shrink-0"></span>
              EL COMPROMISO
            </div>
            <h2 className="text-3xl md:text-4xl lg:text-5xl font-bold leading-tight mb-4">
              <span className="font-script text-primary italic font-normal">Resultados</span>{" "}
              ESPERADOS
            </h2>
          </motion.div>

          <div className="grid lg:grid-cols-2 gap-12 items-stretch">
            {/* Left Column - Image */}
            <motion.div
              initial={{ opacity: 0, x: -30 }}
              whileInView={{ opacity: 1, x: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.6 }}
              className="relative h-full"
            >
              <div className="relative rounded-3xl overflow-hidden shadow-2xl h-full">
                <img
                  src="/segunda-vida.jpg"
                  alt="Segunda vida"
                  className="w-full h-full object-cover"
                />
              </div>
            </motion.div>

            {/* Right Column - Cards in 2 columns */}
            <div className="grid grid-cols-1 md:grid-cols-2 gap-6 h-full">
              {resultados.map((r, i) => {
                const Icon = r.icon;
                return (
                  <motion.div
                    key={r.title}
                    initial={{ opacity: 0, y: 20 }}
                    whileInView={{ opacity: 1, y: 0 }}
                    viewport={{ once: true }}
                    transition={{ delay: i * 0.1 }}
                    className="relative group overflow-hidden rounded-3xl bg-white/5 backdrop-blur-sm border border-white/10 p-6 hover:bg-white/10 transition-all flex flex-col"
                  >
                    <div className="w-12 h-12 rounded-xl bg-white flex items-center justify-center mb-4 group-hover:bg-primary group-hover:text-primary-foreground transition-all">
                      <Icon className="w-6 h-6 text-primary group-hover:text-primary-foreground" />
                    </div>
                    <h3 className="text-lg font-bold mb-3 uppercase tracking-wide">
                      {r.title}
                    </h3>
                    <p className="text-white/80 text-sm leading-relaxed flex-grow">
                      {r.text}
                    </p>
                  </motion.div>
                );
              })}
            </div>
          </div>
        </div>
      </section>


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
