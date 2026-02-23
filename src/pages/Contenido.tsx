import { useState, useMemo } from "react";
import { Link } from "react-router-dom";
import { useTranslation } from "react-i18next";
import { motion } from "framer-motion";
import { ArrowRight, Globe, Users, Film, Play } from "lucide-react";
import { Button } from "@/components/ui/button";
import { PageWrapper } from "@/components/PageWrapper";
import { ROUTES } from "@/lib/routes";
import { CTABand, PageSection } from "@/components/shared";
import {
  Dialog,
  DialogContent,
  DialogTitle,
} from "@/components/ui/dialog";

/** ID del video de YouTube (https://www.youtube.com/watch?v=dBz9LYR3d8Q) */
const YOUTUBE_VIDEO_ID = "dBz9LYR3d8Q";

const DOC_ICONS = [Globe, Users, Film] as const;
const DOC_KEYS = ["doc1", "doc2", "doc3"] as const;
const IMAGE_SRCS = [
  "/galeria-vertedero.png",
  "/galeria-terreno-3.png",
  "/galeria-terreno-4.png",
  "/galeria-terreno-5.png",
  "/galeria-terreno-6.png",
  "/galeria-ninos.png",
  "/galeria-taller.png",
];
const IMAGE_ALT_KEYS = ["galleryAlt1", "galleryAlt2", "galleryAlt3", "galleryAlt4", "galleryAlt5", "galleryAlt6", "galleryAlt7"] as const;

/** Posiciones asimétricas para cada imagen dentro del contenedor (object-position) */
const OBJECT_POSITIONS = [
  "50% 50%",
  "50% 30%",
  "50% 50%",
  "50% 40%",
  "50% 50%",
  "50% 40%",
  "50% 50%",
];

/** Layout asimétrico: cada imagen define columnas y filas que ocupa (1 o 2) */
const GALLERY_LAYOUT = [
  { colSpan: 2, rowSpan: 2 }, // 0 - imagen destacada grande
  { colSpan: 1, rowSpan: 1 }, // 1
  { colSpan: 1, rowSpan: 1 }, // 2
  { colSpan: 1, rowSpan: 1 }, // 3
  { colSpan: 1, rowSpan: 1 }, // 4
  { colSpan: 1, rowSpan: 1 }, // 5
  { colSpan: 2, rowSpan: 1 }, // 6 - imagen ancha
];

export default function Contenido() {
  const { t } = useTranslation();
  const [lightboxIndex, setLightboxIndex] = useState<number | null>(null);

  const docs = useMemo(
    () =>
      DOC_KEYS.map((key, i) => ({
        title: t(`contenido.${key}Title`),
        text: t(`contenido.${key}Text`),
        icon: DOC_ICONS[i],
      })),
    [t]
  );
  const images = useMemo(
    () =>
      IMAGE_SRCS.map((src, i) => ({
        src,
        alt: t(`contenido.${IMAGE_ALT_KEYS[i]}`),
      })),
    [t]
  );

  return (
    <PageWrapper noTopPadding>
      <section id="contenido" className="pt-32 pb-16 lg:pt-40 lg:pb-24 bg-[#F5F2EC]">
        <div className="container mx-auto px-6 lg:px-8">
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6 }}
            className="text-center max-w-4xl mx-auto space-y-8"
          >
            <div className="inline-flex items-center gap-2 text-[#9b734c] text-sm font-medium mb-2 uppercase">
              <span className="w-2 h-2 rounded-full bg-[#9b734c] shrink-0" />
              {t("contenido.badge")}
            </div>
            <h1 className="text-4xl md:text-5xl lg:text-6xl xl:text-7xl font-bold text-foreground leading-tight">
              {t("contenido.title")}
            </h1>
            <p className="text-muted-foreground text-base md:text-lg max-w-5xl mx-auto leading-relaxed">
              {t("contenido.subtitle")}
            </p>
            <Button asChild size="lg" className="bg-[#391800] hover:bg-[#391800]/90 text-white rounded-full px-10 gap-2">
              <Link to={ROUTES.contacto}>
                {t("contenido.contactCta")}
                <ArrowRight className="w-4 h-4" />
              </Link>
            </Button>
          </motion.div>

          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            className="mt-16 max-w-4xl mx-auto"
          >
            <div className="rounded-2xl overflow-hidden bg-gray-900 border border-border shadow-xl aspect-video">
              {YOUTUBE_VIDEO_ID ? (
                <iframe
                  title="Video Renace Atacama"
                  src={`https://www.youtube.com/embed/${YOUTUBE_VIDEO_ID}?rel=0`}
                  allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture"
                  allowFullScreen
                  className="w-full h-full"
                />
              ) : (
                <div className="w-full h-full flex flex-col items-center justify-center gap-4 text-muted-foreground bg-gray-100">
                  <div className="w-20 h-20 rounded-full bg-primary/10 flex items-center justify-center">
                    <Play className="w-10 h-10 text-primary" />
                  </div>
                  <p className="text-sm font-medium">{t("contenido.videoLabel")}</p>
                  <p className="text-xs max-w-xs text-center px-4">
                    Asigna <code className="bg-gray-200 px-1.5 py-0.5 rounded text-foreground">YOUTUBE_VIDEO_ID</code> en Contenido.tsx para mostrar el video.
                  </p>
                </div>
              )}
            </div>
          </motion.div>
        </div>
      </section>

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
            {t("contenido.twoDocs")}
          </div>
          <h2 className="text-3xl md:text-4xl lg:text-5xl font-bold text-foreground leading-tight mb-6">
            {t("contenido.twoDocsTitle")}
          </h2>
          <p className="text-muted-foreground text-lg leading-relaxed max-w-4xl mx-auto">
            {t("contenido.twoDocsSub")}
          </p>
        </motion.div>

        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-6 mb-16">
          {docs.map((doc, i) => {
            const Icon = doc.icon;
            return (
              <motion.div
                key={doc.title}
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
                  {doc.title}
                </h3>
                <p className="text-sm text-muted-foreground leading-relaxed">
                  {doc.text}
                </p>
              </motion.div>
            );
          })}
        </div>

        <motion.div
          initial={{ opacity: 0, y: 12 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.5 }}
          className="mt-16 w-full overflow-hidden rounded-2xl"
        >
          <img
            src="/terreno-1-banner.png"
            alt={t("contenido.bannerAlt")}
            className="w-full h-32 sm:h-40 lg:h-48 object-cover"
            style={{ objectPosition: "50% 40%" }}
          />
        </motion.div>
      </PageSection>

      <section className="py-20 lg:py-28 bg-[#391800] text-white">
        <div className="container mx-auto px-6 lg:px-8">
          <div className="max-w-7xl mx-auto">
            <div className="text-center mb-12">
              <div className="inline-flex items-center gap-2 text-primary text-sm font-medium mb-6 uppercase">
                <span className="w-2 h-2 rounded-full bg-primary shrink-0" />
                {t("contenido.galleryLabel")}
              </div>
            <h2 className="text-3xl md:text-4xl lg:text-5xl font-bold text-white leading-tight mb-6">
              {t("contenido.galleryTitle")}
            </h2>
            <p className="text-lg text-white/80 max-w-3xl mx-auto">
              {t("contenido.gallerySub")}
            </p>
          </div>

          <div
            className="grid grid-cols-2 lg:grid-cols-4 gap-3 sm:gap-4 lg:gap-5 grid-auto-rows-[minmax(160px,1fr)] lg:grid-auto-rows-[minmax(200px,1fr)] grid-flow-dense"
          >
            {images.map((img, i) => {
              const layout = GALLERY_LAYOUT[i] ?? { colSpan: 1, rowSpan: 1 };
              const colSpan = layout.colSpan === 2 ? "lg:col-span-2" : "";
              const rowSpan = layout.rowSpan === 2 ? "lg:row-span-2" : "";
              return (
                <motion.button
                  type="button"
                  key={i}
                  initial={{ opacity: 0, y: 20 }}
                  whileInView={{ opacity: 1, y: 0 }}
                  viewport={{ once: true }}
                  transition={{ delay: Math.min(i * 0.05, 0.4) }}
                  onClick={() => setLightboxIndex(i)}
                  className={`group relative rounded-2xl overflow-hidden border-2 border-primary/20 hover:border-primary transition-all text-left cursor-pointer focus:outline-none focus:ring-2 focus:ring-primary focus:ring-offset-2 min-h-[160px] sm:min-h-[180px] ${colSpan} ${rowSpan}`}
                >
                  <img
                    src={img.src}
                    alt={img.alt}
                    className="w-full h-full object-cover group-hover:scale-105 transition-transform duration-500 min-h-[160px] sm:min-h-[180px]"
                    style={{ objectPosition: OBJECT_POSITIONS[i % OBJECT_POSITIONS.length] }}
                  />
                </motion.button>
              );
            })}
          </div>

          <Dialog open={lightboxIndex !== null} onOpenChange={(open) => !open && setLightboxIndex(null)}>
            <DialogContent className="max-w-[95vw] max-h-[95vh] w-auto h-auto p-3 border-0 bg-black/90 shadow-none [&>button]:text-white [&>button]:right-2 [&>button]:top-2">
              <DialogTitle className="sr-only">
                {lightboxIndex !== null ? images[lightboxIndex].alt : ""}
              </DialogTitle>
              {lightboxIndex !== null && (
                <img
                  src={images[lightboxIndex].src}
                  alt={images[lightboxIndex].alt}
                  className="max-w-full max-h-[85vh] w-auto h-auto object-contain rounded"
                />
              )}
            </DialogContent>
          </Dialog>
          </div>
        </div>
      </section>

      <CTABand
        headline={t("index.cta.headline")}
        cta={
          <Button asChild size="lg" className="rounded-full bg-white text-navy hover:bg-white/90 px-10 gap-2">
            <Link to={ROUTES.contacto}>
              {t("contenido.contactCta")}
              <ArrowRight className="w-4 h-4" />
            </Link>
          </Button>
        }
      />
    </PageWrapper>
  );
}
