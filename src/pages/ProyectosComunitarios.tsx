import { Link } from "react-router-dom";
import { useTranslation } from "react-i18next";
import { motion } from "framer-motion";
import { ArrowRight, Briefcase, MapPin, Megaphone, Bug , TreesIcon, MapIcon, RecycleIcon } from "lucide-react";
import { Button } from "@/components/ui/button";
import { PageWrapper } from "@/components/PageWrapper";
import { ROUTES } from "@/lib/routes";
import { SectionAccent, CTABand } from "@/components/shared";


/** Misma forma que forma imagen.svg (viewBox 586 588) para clip-path */
const SHAPE_PATH =
  "M560.78.5H202.22c-13.66,0-24.72,11.07-24.72,24.72v41.71c0,14.12-11.45,25.57-25.57,25.57H25.22c-13.66,0-24.72,11.07-24.72,24.72v445.55c0,13.66,11.07,24.72,24.72,24.72h450.34c13.66,0,24.72-11.07,24.72-24.72v-48.17c0-10.55,8.56-19.11,19.11-19.11h41.38c13.66,0,24.72-11.07,24.72-24.72V25.22c0-13.66-11.07-24.72-24.72-24.72Z";

const COMO_SUMARTE_KEYS = [
  { key: "project1", icon: RecycleIcon, image: "/compost.jpeg" },
  { key: "project2", icon: TreesIcon, image: "/reforestation.jpeg" },
  { key: "project3", icon: MapIcon, image: "/comunitarios2.jpg" },
] as const;

export default function ProyectosComunitarios() {
  const { t } = useTranslation();

  const comoSumarte = COMO_SUMARTE_KEYS.map(({ key, icon, image }) => ({
    title: t(`proyectosComunitarios.${key}`),
    description: t(`proyectosComunitarios.${key}Desc`),
    icon,
    image,
  }));

  return (
    <PageWrapper noTopPadding>
      <section id="proyectosComunitarios" className="pt-32 pb-16 lg:pt-40 lg:pb-24 bg-[#F5F2EC]">
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
                {t("proyectosComunitarios.badge")}
              </div>       
              <h1 className="text-4xl md:text-5xl lg:text-6xl xl:text-7xl font-bold text-foreground leading-tight">
                {t("proyectosComunitarios.title")}
              </h1>
              <p className="text-muted-foreground text-base md:text-lg max-w-5xl mx-auto leading-relaxed">
                {t("proyectosComunitarios.subtitle")}
              </p>
            </motion.div>
          </div>
        </div>
      </section>
      {/* Imagen + textos al lado*/}
      <section className="py-16 lg:py-24 bg-background">
        <div className="container mx-auto px-6 lg:px-8">    
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
                  <div className="flex-shrink-0 w-full sm:w-40 h-48 sm:h-60 rounded-xl overflow-hidden bg-muted">
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
     <div className="flex items-center justify-start mb-5">               
              </div>
              <div className="flex items-center justify-start mb-5">               
              </div>
              <p></p>
                   <p className="text-muted-foreground text-base md:text-lg max-w-7xl mx-auto leading-relaxed font-style: italic">
                {t("proyectosComunitarios.text")}
              </p>
     </div>
      </section>
      {/* Bottom Banner */}
      <section className="py-12 bg-[#391800] text-white">
        <div className="container mx-auto px-6 lg:px-8">
          <div className="text-center">
            <p className="text-2xl md:text-3xl lg:text-4xl font-bold uppercase tracking-wide">
              {t("proyectosComunitarios.banner")}
            </p>
          </div>
        </div>
      </section>
    </PageWrapper>
  );
}
