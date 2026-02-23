import { motion } from "framer-motion";
import { useTranslation } from "react-i18next";
import { PageHeader } from "@/components/PageHeader";
import { PageWrapper } from "@/components/PageWrapper";
import { SectionAccent } from "@/components/shared";
import heroMeeting from "@/assets/hero-meeting.jpg";
import teamMeeting from "@/assets/team-meeting.jpg";
import businessPerson from "@/assets/business-person-1.jpg";
import presentation from "@/assets/presentation.jpg";
import coaching from "@/assets/coaching.jpg";
import handshake from "@/assets/handshake.jpg";
import workspace from "@/assets/workspace.jpg";
import ceoPortrait from "@/assets/ceo-portrait.jpg";

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

export default function Galeria() {
  const { t } = useTranslation();
  return (
    <PageWrapper>
      <div className="container mx-auto px-6 lg:px-8">
        <PageHeader
          title={t("galeria.title")}
          text={t("galeria.subtitle")}
          className="mb-12"
        />
        <SectionAccent className="mb-10">{t("galeria.evidence")}</SectionAccent>

        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-4">
          {IMAGES.map((img, i) => (
            <motion.div
              key={i}
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ delay: Math.min(i * 0.05, 0.4) }}
              className="aspect-[4/3] rounded-3xl overflow-hidden border border-border hover:border-primary hover:shadow-xl transition-all group"
            >
              <img
                src={img.src}
                alt={img.alt}
                className="w-full h-full object-cover group-hover:scale-105 transition-transform duration-500"
              />
            </motion.div>
          ))}
        </div>
      </div>
    </PageWrapper>
  );
}
