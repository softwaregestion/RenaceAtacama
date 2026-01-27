import { Link } from "react-router-dom";
import { motion } from "framer-motion";
import { ArrowRight, Globe, Users, Film, Play } from "lucide-react";
import { Button } from "@/components/ui/button";
import { PageWrapper } from "@/components/PageWrapper";
import { ROUTES } from "@/lib/routes";
import { CTABand, PageSection } from "@/components/shared";
import heroMeeting from "@/assets/hero-meeting.jpg";
import teamMeeting from "@/assets/team-meeting.jpg";
import businessPerson from "@/assets/business-person-1.jpg";
import presentation from "@/assets/presentation.jpg";
import coaching from "@/assets/coaching.jpg";
import handshake from "@/assets/handshake.jpg";
import workspace from "@/assets/workspace.jpg";
import ceoPortrait from "@/assets/ceo-portrait.jpg";

/** Reemplaza con el ID de tu video de YouTube (ej: "dQw4w9WgXcQ" de https://www.youtube.com/watch?v=dQw4w9WgXcQ) */
const YOUTUBE_VIDEO_ID = "";

const DOCS = [
  {
    title: "Documental para Streaming",
    text: "Orientado a plataformas de streaming, divulgará la problemática, las causas y las soluciones propuestas con alcance internacional.",
    icon: Globe,
  },
  {
    title: "Documental Comunitario",
    text: "En colaboración con nuestro canal asociado, seguirá la experiencia en terreno, la organización comunitaria y el impacto real de las acciones.",
    icon: Users,
  },
  {
    title: "Impacto y visibilidad",
    text: "Contenido para campañas y movilización, posicionando a Renace Atacama como referente en innovación y sustentabilidad.",
    icon: Film,
  },
];

const IMAGES = [
  { src: heroMeeting, alt: "Terreno y vertederos en Alto Hospicio" },
  { src: teamMeeting, alt: "Trabajo comunitario" },
  { src: businessPerson, alt: "Operativos en terreno" },
  { src: presentation, alt: "Charlas y talleres" },
  { src: coaching, alt: "Formación y colaboración" },
  { src: handshake, alt: "Alianzas locales" },
  { src: workspace, alt: "Centro de innovación" },
  { src: ceoPortrait, alt: "Liderazgo del proyecto" },
];

/** Posiciones asimétricas para cada imagen dentro del contenedor (object-position) */
const OBJECT_POSITIONS = [
  "15% 10%",
  "85% 88%",
  "50% 15%",
  "8% 75%",
  "92% 25%",
  "25% 72%",
  "78% 55%",
  "35% 42%",
];

export default function Contenido() {
  return (
    <PageWrapper noTopPadding>
      {/* Hero Section - similar a Nosotros */}
      <section id="contenido" className="pt-32 pb-16 lg:pt-40 lg:pb-24 bg-[#F5F2EC]">
        <div className="container mx-auto px-6 lg:px-8">
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6 }}
            className="text-center max-w-4xl mx-auto space-y-8"
          >
            <div className="inline-flex items-center gap-2 text-orange-500 text-sm font-medium mb-2 uppercase">
              <span className="w-2 h-2 rounded-full bg-orange-500 shrink-0" />
              Contenido
            </div>
            <h1 className="text-4xl md:text-5xl lg:text-6xl xl:text-7xl font-bold text-foreground leading-tight">
              El{" "}
              <span className="font-script text-primary italic font-normal">documental</span>
            </h1>
            <p className="text-muted-foreground text-base md:text-lg max-w-5xl mx-auto leading-relaxed">
              El proyecto contempla la producción de dos largometrajes documentales que evidenciarán la problemática en la región y el proceso de creación del polo de innovación y limpieza del desierto. Documentales y galería visual que dan cuenta del trabajo en terreno.
            </p>
            <Button asChild size="lg" className="bg-[#391800] hover:bg-[#391800]/90 text-white rounded-full px-10 gap-2">
              <Link to={ROUTES.contacto}>
                Contáctanos
                <ArrowRight className="w-4 h-4" />
              </Link>
            </Button>
          </motion.div>

          {/* Espacio para video de YouTube */}
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
                  <p className="text-sm font-medium">Video de YouTube</p>
                  <p className="text-xs max-w-xs text-center px-4">
                    Asigna <code className="bg-gray-200 px-1.5 py-0.5 rounded text-foreground">YOUTUBE_VIDEO_ID</code> en Contenido.tsx para mostrar el video.
                  </p>
                </div>
              )}
            </div>
          </motion.div>
        </div>
      </section>

      {/* Sección Dos documentales - mismo estilo que EJES DE ACCIÓN (El Proyecto) */}
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
            DOS DOCUMENTALES
          </div>
          <h2 className="text-3xl md:text-4xl lg:text-5xl font-bold text-foreground leading-tight mb-6">
            Dos documentales de la{" "}
            <span className="font-script text-primary italic font-normal">propuesta</span>
          </h2>
          <p className="text-muted-foreground text-lg leading-relaxed max-w-4xl mx-auto">
            Largometrajes que divulgarán la problemática, las causas y las soluciones propuestas, con alcance internacional y enfoque comunitario. Contenido para campañas y movilización, posicionando a Renace Atacama como referente en innovación y sustentabilidad.
          </p>
        </motion.div>

        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-6 mb-16">
          {DOCS.map((doc, i) => {
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

        {/* Banner delgado */}
        <motion.div
          initial={{ opacity: 0, y: 12 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.5 }}
          className="mt-16 w-full overflow-hidden rounded-2xl"
        >
          <img
            src="/terreno-1-banner.png"
            alt="Terreno y vertederos de ropa en Alto Hospicio"
            className="w-full h-32 sm:h-40 lg:h-48 object-cover"
            style={{ objectPosition: "50% 40%" }}
          />
        </motion.div>
      </PageSection>

      {/* Galería - Fondo #391800 */}
      <section className="py-20 lg:py-28 bg-[#391800] text-white">
        <div className="container mx-auto px-6 lg:px-8">
          <div className="max-w-7xl mx-auto">
            <div className="text-center mb-12">
              <div className="inline-flex items-center gap-2 text-primary text-sm font-medium mb-6 uppercase">
                <span className="w-2 h-2 rounded-full bg-primary shrink-0" />
                GALERÍA
              </div>
            <h2 className="text-3xl md:text-4xl lg:text-5xl font-bold text-white leading-tight mb-6">
              Evidencia <span className="font-script text-primary italic font-normal">visual</span> del territorio
            </h2>
            <p className="text-lg text-white/80 max-w-3xl mx-auto">
              Imágenes del terreno que evidencian la problemática de los vertederos y el trabajo de regeneración.
            </p>
          </div>

          <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-6">
            {IMAGES.map((img, i) => (
              <motion.div
                key={i}
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ delay: Math.min(i * 0.05, 0.4) }}
                className="group relative aspect-[4/3] rounded-2xl overflow-hidden border-2 border-primary/20 hover:border-primary transition-all"
              >
                <img
                  src={img.src}
                  alt={img.alt}
                  className="w-full h-full object-cover group-hover:scale-110 transition-transform duration-500"
                  style={{ objectPosition: OBJECT_POSITIONS[i % OBJECT_POSITIONS.length] }}
                />
                <div className="absolute inset-0 bg-gradient-to-t from-black/60 via-transparent to-transparent opacity-0 group-hover:opacity-100 transition-opacity">
                  <div className="absolute bottom-0 left-0 right-0 p-4">
                    <p className="text-white text-sm font-medium">{img.alt}</p>
                  </div>
                </div>
                <div className="absolute top-3 right-3 w-8 h-8 rounded-full bg-primary/90 flex items-center justify-center opacity-0 group-hover:opacity-100 transition-opacity">
                  <Play className="w-4 h-4 text-white" fill="currentColor" />
                </div>
              </motion.div>
            ))}
          </div>
          </div>
        </div>
      </section>

      <CTABand
        headline="¿Listo para sumarte? Juntos regeneramos el Desierto de Atacama."
        cta={
          <Button asChild size="lg" className="rounded-full bg-white text-navy hover:bg-white/90 px-10 gap-2">
            <Link to={ROUTES.contacto}>
              Contáctanos
              <ArrowRight className="w-4 h-4" />
            </Link>
          </Button>
        }
      />
    </PageWrapper>
  );
}
