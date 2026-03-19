import { Link } from "react-router-dom";
import { useRef, useState } from "react";
import { useTranslation } from "react-i18next";
import { motion } from "framer-motion";
import { ArrowRight, Briefcase, MapPin, Megaphone, Leaf, Bug, Car, Shirt, BedDouble, Building2, ChevronLeft, ChevronRight } from "lucide-react";
import { Button } from "@/components/ui/button";
import { PageWrapper } from "@/components/PageWrapper";
import { ROUTES } from "@/lib/routes";
import { SectionAccent, CTABand } from "@/components/shared";
import {
  Dialog,
  DialogContent,
  DialogHeader,
  DialogTitle,
  DialogDescription,
} from "@/components/ui/dialog";

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
  const productsScrollRef = useRef<HTMLDivElement | null>(null);
  const [selectedProduct, setSelectedProduct] = useState<{
    name: string;
    tag: string;
    img: string;
  } | null>(null);

  const handleProductsScroll = (direction: "left" | "right") => {
    const container = productsScrollRef.current;
    if (!container) return;
    const amount = container.clientWidth * 0.8;
    container.scrollBy({
      left: direction === "left" ? -amount : amount,
      behavior: "smooth",
    });
  };

  const comoSumarte = COMO_SUMARTE_KEYS.map(({ key, icon, image }) => ({
    title: t(`escarabajos.${key}`),
    description: t(`escarabajos.${key}Desc`),
    icon,
    image,
  }));

  return (
    <PageWrapper noTopPadding>
      <section id="escarabajos" className="pt-32 pb-16 lg:pt-40 lg:pb-24 bg-[#F5F2EC]">
        <div className="container mx-auto px-4 sm:px-6 lg:px-10">
          <div className="max-w-6xl mx-auto">
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

          {/* Modal producto seleccionado */}
          <Dialog open={!!selectedProduct} onOpenChange={() => setSelectedProduct(null)}>
            <DialogContent className="max-w-lg sm:max-w-2xl border-0 bg-[#391800] text-white rounded-3xl p-0 overflow-hidden">
              {selectedProduct && (
                <div>
                  <div className="h-56 sm:h-72 w-full overflow-hidden">
                    <img
                      src={selectedProduct.img}
                      alt={selectedProduct.name}
                      className="w-full h-full object-cover"
                    />
                  </div>
                  <div className="p-6 sm:p-7 space-y-2">
                    <DialogHeader className="space-y-2">
                      <DialogTitle className="text-lg sm:text-xl font-semibold text-white">
                        {selectedProduct.name}
                      </DialogTitle>
                      <DialogDescription className="text-xs sm:text-sm text-white/80">
                        {selectedProduct.tag}
                      </DialogDescription>
                    </DialogHeader>
                  </div>
                </div>
              )}
            </DialogContent>
          </Dialog>
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
                  src="/img-escarabajos-2.jpg"
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

      {/* Cómo sumarte - imagen + textos al lado, CTA integrado como mini-vitrina */}
      <section className="py-16 lg:py-24 bg-background">
        <div className="container mx-auto px-6 lg:px-8">
          <div className="flex items-center gap-3 mb-12">
            <img
              src="/escarabajos-logo-color.png"
              alt={t("escarabajos.title")}
              className="h-12 w-auto object-contain"
            />
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

          {/* Logo + CTA como parte de la composición */}
          <div className="mt-10 flex flex-col items-center gap-4">
            <Button
              asChild
              size="lg"
              className="rounded-full bg-primary text-white hover:bg-primary/90 px-8"
            >
              <Link to={ROUTES.contacto}>Contáctanos</Link>
            </Button>
          </div>
        </div>
      </section>

      {/* Productos Escarabajos del Desierto */}
      <section className="py-24 lg:py-32 bg-[#391800] text-white relative overflow-hidden">
        <div className="absolute top-0 left-0 right-0 h-8 bg-[#F5F2EC] rounded-b-3xl" />
        <div className="container mx-auto px-6 sm:px-10 lg:px-20">
          <div className="max-w-5xl mx-auto">
          {/* Header tipo "Resultados esperados" */}
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.6 }}
            className="text-center mb-16 lg:mb-20"
          >
            <div className="inline-flex items-center gap-2 text-xs font-semibold uppercase tracking-[0.18em] text-white/80 mb-3">
              <span className="w-2 h-2 rounded-full bg-primary shrink-0"></span>
              <span>EL PRODUCTO</span>
            </div>
            <h2 className="text-3xl md:text-4xl lg:text-5xl font-bold leading-tight text-white mb-3">
              <span className="mr-2">
                Productos
              </span>
              <span className="font-script text-primary/70 italic font-normal">
                Escarabajos del Desierto
              </span>
            </h2>
            <p className="text-white/80 text-sm md:text-base max-w-2xl mx-auto">
              Transformamos residuos textiles y neumáticos en líneas industriales y textiles que devuelven valor al territorio.
            </p>
          </motion.div>

          {/* Imagen izquierda + 3 cards en columna al lado derecho */}
          <div className="grid lg:grid-cols-[1.1fr,0.9fr] gap-10 lg:gap-14 items-stretch">
            <motion.div
              initial={{ opacity: 0, x: -30 }}
              whileInView={{ opacity: 1, x: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.6 }}
              className="flex justify-center lg:justify-start relative h-full"
            >
              <div className="absolute -inset-3 lg:-inset-5 w-full max-w-xl aspect-[4/3] rounded-3xl bg-white/10 backdrop-blur-xl border border-white/20 shadow-2xl" />
              <div className="relative z-10 w-full max-w-xl aspect-[4/3] rounded-2xl overflow-hidden shadow-xl">
                <img
                  src="/recliclaje.webp"
                  alt="Productos Escarabajos del Desierto"
                  className="w-full h-full object-cover"
                />
              </div>
            </motion.div>

            <div className="flex flex-col gap-5 lg:gap-6 h-full">
              {/* Card 1: Línea Industrial */}
              <motion.div
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ duration: 0.5, delay: 0.1 }}
                className="relative overflow-hidden rounded-3xl bg-white/5 backdrop-blur-sm border border-white/10 flex-1"
                whileHover={{ y: -4, scale: 1.01 }}
                transition={{ duration: 0.25 }}
              >
                <div className="px-5 py-4 lg:px-6 lg:py-5 h-full flex flex-col justify-center">
                  <div>
                    <div className="mb-3">
                      <div className="w-12 h-12 rounded-full overflow-hidden bg-white/10 flex items-center justify-center">
                        <img
                          src="/recliclaje.webp"
                          alt="Línea Industrial"
                          className="w-full h-full object-cover"
                        />
                      </div>
                    </div>
                    <h3 className="text-lg font-semibold mb-1">
                      Línea Industrial (B2B)
                    </h3>
                    <p className="text-sm text-white/80">
                      Materiales reciclados para aislación, fieltros técnicos y componentes que se integran a nuevas cadenas productivas.
                    </p>
                  </div>
                </div>
              </motion.div>

              {/* Card 2: Línea Textil */}
              <motion.div
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ duration: 0.5, delay: 0.2 }}
                className="relative overflow-hidden rounded-3xl bg-white/5 backdrop-blur-sm border border-white/10 flex-1"
                whileHover={{ y: -4, scale: 1.01 }}
                transition={{ duration: 0.25, delay: 0.02 }}
              >
                <div className="px-5 py-4 lg:px-6 lg:py-5 h-full flex flex-col justify-center">
                  <div>
                    <div className="mb-3">
                      <div className="w-12 h-12 rounded-full overflow-hidden bg-white/10 flex items-center justify-center">
                        <img
                          src="/fast-fashion.jpg"
                          alt="Línea Textil"
                          className="w-full h-full object-cover"
                        />
                      </div>
                    </div>
                    <h3 className="text-lg font-semibold mb-1">
                      Línea Textil (B2C)
                    </h3>
                    <p className="text-sm text-white/80">
                      Ponchos, chaquetas, bolsos y accesorios creados a partir de textiles recuperados y oficios locales.
                    </p>
                  </div>
                </div>
              </motion.div>

              {/* Card 3: Industrias */}
              <motion.div
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ duration: 0.5, delay: 0.3 }}
                className="relative overflow-hidden rounded-3xl bg-white/5 backdrop-blur-sm border border-white/10 flex-1"
                whileHover={{ y: -4, scale: 1.01 }}
                transition={{ duration: 0.25, delay: 0.04 }}
              >
                <div className="px-5 py-4 lg:px-6 lg:py-5 h-full flex flex-col justify-center">
                  <div className="space-y-2">
                    <div className="mb-1">
                      <div className="w-12 h-12 rounded-full overflow-hidden bg-white/10 flex items-center justify-center">
                        <img
                          src="/terreno-2.jpg"
                          alt="Industrias y aliados"
                          className="w-full h-full object-cover"
                        />
                      </div>
                    </div>
                    <h3 className="text-lg font-semibold">
                      Industrias y aliados
                    </h3>
                    <p className="text-sm text-white/80">
                      Productos pensados para integrarse a cadenas productivas y proyectos con impacto territorial.
                    </p>
                  </div>
                </div>
              </motion.div>
            </div>
          </div>

          {/* Vitrina de productos: carrusel horizontal con scroll manual + botones de navegación sobre las cards */}
          <div className="mt-20 lg:mt-24">
            <div className="flex items-center justify-center mb-4">
              <div className="inline-flex items-center gap-2 text-white/80 text-xs font-semibold uppercase tracking-[0.18em]">
                <span className="w-2 h-2 rounded-full bg-primary shrink-0" />
                <span>PRODUCTOS</span>
              </div>
            </div>
            <div className="relative mt-2">
              <button
                type="button"
                onClick={() => handleProductsScroll("left")}
                className="hidden sm:inline-flex items-center justify-center w-8 h-8 rounded-full bg-white/10 border border-white/30 text-white hover:bg-white/20 transition-colors absolute -left-8 top-1/2 -translate-y-1/2 z-20"
                aria-label="Ver productos anteriores"
              >
                <ChevronLeft className="w-4 h-4" />
              </button>
              <button
                type="button"
                onClick={() => handleProductsScroll("right")}
                className="hidden sm:inline-flex items-center justify-center w-8 h-8 rounded-full bg-white/10 border border-white/30 text-white hover:bg-white/20 transition-colors absolute -right-8 top-1/2 -translate-y-1/2 z-20"
                aria-label="Ver más productos"
              >
                <ChevronRight className="w-4 h-4" />
              </button>
              <div
                ref={productsScrollRef}
                className="overflow-x-auto overflow-y-visible snap-x snap-mandatory [scrollbar-width:none] [-ms-overflow-style:none] [&::-webkit-scrollbar]:hidden px-8 sm:px-14"
              >
                <motion.div
                  className="inline-flex gap-4 md:gap-6 pb-2 min-w-max"
                  initial={{ opacity: 0, y: 12 }}
                  whileInView={{ opacity: 1, y: 0 }}
                  viewport={{ once: true }}
                  transition={{ duration: 0.5 }}
                >
                  {[
                // B2B
                    { name: "Aislación térmica", tag: "Soluciones B2B", img: "/productos/fibra-3.jpg" },
                    { name: "Fieltros para colchones", tag: "Industria colchones", img: "/productos/fibra-1.jpg" },
                    { name: "Fieltros industria automotriz", tag: "Sector automotriz", img: "/productos/fibra-2.jpg" },
                    { name: "Carteras de neumáticos", tag: "Neumáticos en desuso", img: "/productos/cartera-escarabajo.jpg" },
                // Textiles
                    { name: "Hilos / lana / telas", tag: "Textil reciclado", img: "/productos/hilolada-escarabajo.jpg" },
                    { name: "Ponchos de lana", tag: "Pequeñas tejedoras", img: "/productos/poncho-escarabajos.jpg" },
                    { name: "Gorros de jeans", tag: "Upcycling textil", img: "/productos/jockey-escarabajo.jpg" },
                    { name: "Pecheras de jeans", tag: "Trabajo en terreno", img: "/productos/pechera-escarabjo.png" },
                    { name: "Chaquetas", tag: "Moda sostenible", img: "/productos/chaqueta-escarabajos.jpg" },
                { name: "Bolsos", tag: "Incluye neumáticos reciclados", img: "/productos/bolso-escarabajo.jpg" },
                  ].map((item, index) => (
                    <motion.button
                      key={`${item.name}-${index}`}
                      type="button"
                      onClick={() => setSelectedProduct(item)}
                      className="w-[220px] sm:w-[240px] flex-shrink-0 rounded-2xl overflow-hidden bg-white/5 border border-white/10 backdrop-blur-sm snap-start text-left hover:bg-white/10 hover:border-white/40 transition-all focus:outline-none focus:ring-2 focus:ring-white/60"
                      whileHover={{ y: -4, scale: 1.02 }}
                      transition={{ type: 'spring', stiffness: 260, damping: 20 }}
                    >
                      <div className="bg-black/20">
                        <div className="w-full aspect-[4/3]">
                          <img
                            src={item.img}
                            alt={item.name}
                            className="w-full h-full object-cover"
                          />
                        </div>
                      </div>
                      <div className="p-3">
                        <p className="text-xs font-semibold text-white line-clamp-2">{item.name}</p>
                        <p className="text-[11px] text-white/70 line-clamp-1">{item.tag}</p>
                      </div>
                    </motion.button>
                  ))}
                </motion.div>
              </div>
            </div>
          </div>

          {/* Industrias (cards pequeñas con iconos) */}
          <div className="mt-16 lg:mt-20">
            <div className="flex items-center justify-center gap-2 text-white/80 text-xs font-semibold mb-6 uppercase tracking-[0.18em]">
              <span className="w-2 h-2 rounded-full bg-primary shrink-0"></span>
              <span>INDUSTRIAS</span>
            </div>
            <div className="grid grid-cols-2 md:grid-cols-4 gap-4">
              {[
                { label: "Automotriz", icon: Car },
                { label: "Retail", icon: Shirt },
                { label: "Colchones", icon: BedDouble },
                { label: "Construcción", icon: Building2 },
              ].map((item, index) => {
                const Icon = item.icon;
                return (
                  <motion.div
                    key={item.label}
                    className="group flex items-center gap-3 rounded-2xl bg-white border border-primary/15 p-4 shadow-sm hover:shadow-md transition-shadow"
                    initial={{ opacity: 0, y: 16 }}
                    whileInView={{ opacity: 1, y: 0 }}
                    viewport={{ once: true }}
                    transition={{ duration: 0.4, delay: index * 0.05 }}
                    whileHover={{ y: -4 }}
                  >
                    <div className="w-10 h-10 rounded-xl bg-primary/10 flex items-center justify-center flex-shrink-0">
                      <Icon className="w-5 h-5 text-primary" />
                    </div>
                    <div className="min-w-0">
                      <p className="text-sm font-semibold text-[#391800] leading-tight">
                        {item.label}
                      </p>
                      <p className="text-[11px] text-muted-foreground leading-tight">
                        Uso de materiales reciclados
                      </p>
                    </div>
                  </motion.div>
                );
              })}
            </div>
          </div>
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
