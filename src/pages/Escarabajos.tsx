import { Link } from "react-router-dom";
import { useTranslation } from "react-i18next";
import { motion } from "framer-motion";
import { ArrowRight, Briefcase, MapPin, Megaphone, Bug , ExternalLink} from "lucide-react";
import { Button } from "@/components/ui/button";
import { PageWrapper } from "@/components/PageWrapper";
import { ROUTES } from "@/lib/routes";
import { SectionAccent, CTABand } from "@/components/shared";
import type { TFunction } from "i18next";
import { useState, useRef, useEffect } from "react";
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
  { key: "ambassador", icon: Megaphone, image: "/recliclaje.jpg" },
] as const;

function getI18nStringArray(t: TFunction, key: string): string[] | undefined {
  const v = t(key, { returnObjects: true });
  return Array.isArray(v) ? (v as string[]) : undefined;
}

const NAME_LINE_SPLIT_OVERRIDES: Record<string, { first: string; second: string }> = {
  'María José Cáceres': { first: 'María José', second: 'Cáceres' },
  'Miguel Angel Curihuinca': { first: 'Miguel Angel', second: 'Curihuinca' },
  'Marce La Recicladora': { first: 'Marce La', second: 'Recicladora' },
};

/** Perfiles a ocultar temporalmente en la sección COLABORADORES/EMBAJADORES */
const HIDDEN_COLABORADORES = ["Celeste Giardinelli"];

interface Colaborador {
  id: string;
  name: string;
  linkedin?: string;
  image: string;
}

const COLABORADORES: Colaborador[] = [
  {
    id: "mateoBarrenengoa",
    name: "Mateo Barrenengoa",
    linkedin: "https://www.mateobarrenengoa.cl",
    image: "/mateobarrenengoadiegofuentes.jpg",
  },
  {
    id: "tomasMunita",
    name: "Tomás Munita",
    linkedin: "https://www.tomasmunita.com",
    image: "/tomas-munita.jpg",
  },
  {
    id: "felipeBraun",
    name: "Felipe Braun",
    linkedin: "",
    image: "/felipe-braun.jpg",
  },
  {
    id: "solLeyton",
    name: "Sol Leyton",
    linkedin: "https://www.instagram.com/solleyton/",
    image: "/sol-leyton.png",
  },
  {
    id: "saraSamaniegoMarce",
    name: "Marce La Recicladora",
    linkedin: "",
    image: "/gente/mrce-larecicladora.jpg",
  },
  {
    id: "celesteGiardinelli",
    name: "Celeste Giardinelli",
    linkedin: "https://www.instagram.com/giardinelliceleste?igsh=MTQyZjIzaWI1emsxbg==",
    image: "/gente/celeste.jpg",
  },
  /*{
    id: "agustinaGrasso",
    name: "Agustina Grasso",
    linkedin: "https://www.instagram.com/cronistamillennial?igsh=MWRtN2FnbjdjeTlvcA%3D%3D",
    image: "/gente/agustina.jpg",
  },*/
  {
    id: "claudiaValdes",
    name: "Claudia Valdés",
    linkedin: "https://www.instagram.com/claudiavaldesoficial/reels/",
    image: "/gente/claudia.jpg",
  },
];

function ColabCard({
  member,
  index,
  t,
}: {
  member: Colaborador;
  index: number;
  t: TFunction;
}) {
  const [isOpen, setIsOpen] = useState(false);
  const cm = `nosotros.colaboradoresMembers.${member.id}`;
  const title = t(`${cm}.title`);
  const summary = t(`${cm}.summary`);
  const role = t(`${cm}.role`);
  const experience = getI18nStringArray(t, `${cm}.experience`);
  const nameOverride = NAME_LINE_SPLIT_OVERRIDES[member.name];
  const nameParts = member.name.split(" ");
  const firstName = nameOverride ? nameOverride.first : nameParts[0];
  const lastName = nameOverride ? nameOverride.second : nameParts.slice(1).join(" ");

  const LinkedInIcon = () => (
    <svg
      className="w-5 h-5"
      fill="currentColor"
      viewBox="0 0 24 24"
      xmlns="http://www.w3.org/2000/svg"
    >
      <path d="M20.447 20.452h-3.554v-5.569c0-1.328-.027-3.037-1.852-3.037-1.853 0-2.136 1.445-2.136 2.939v5.667H9.351V9h3.414v1.561h.046c.477-.9 1.637-1.85 3.37-1.85 3.601 0 4.267 2.37 4.267 5.455v6.286zM5.337 7.433c-1.144 0-2.063-.926-2.063-2.065 0-1.138.92-2.063 2.063-2.063 1.14 0 2.064.925 2.064 2.063 0 1.139-.925 2.065-2.064 2.065zm1.782 13.019H3.555V9h3.564v11.452zM22.225 0H1.771C.792 0 0 .774 0 1.729v20.542C0 23.227.792 24 1.771 24h20.451C23.2 24 24 23.227 24 22.271V1.729C24 .774 23.2 0 22.222 0h.003z" />
    </svg>
  );

  const InstagramIcon = () => (
    <svg
      className="w-5 h-5"
      fill="currentColor"
      viewBox="0 0 24 24"
      xmlns="http://www.w3.org/2000/svg"
    >
      <path d="M7 2C4.243 2 2 4.243 2 7v10c0 2.757 2.243 5 5 5h10c2.757 0 5-2.243 5-5V7c0-2.757-2.243-5-5-5H7zm10 2a3 3 0 0 1 3 3v10a3 3 0 0 1-3 3H7a3 3 0 0 1-3-3V7a3 3 0 0 1 3-3h10z" />
      <path d="M12 7.5A4.5 4.5 0 1 0 12 16a4.5 4.5 0 0 0 0-8.5z" />
      <circle cx="17.5" cy="6.5" r="1.25" />
    </svg>
  );

  const isInstagram = (member.linkedin ?? "").toLowerCase().includes("instagram.com");

  return (
    <>
      <motion.div
        initial={{ opacity: 0, y: 20 }}
        whileInView={{ opacity: 1, y: 0 }}
        viewport={{ once: true }}
        transition={{ delay: index * 0.1 }}
        className="relative group overflow-hidden cursor-pointer"
        onClick={() => setIsOpen(true)}
      >
        {/* Image: un poco más alta en móvil para que la barra tape menos */}
        <div className="aspect-[4/5.6] sm:aspect-[3/4] overflow-hidden bg-gray-200">
          <img
            src={member.image}
            alt={member.name}
            className={`w-full h-full object-cover ${member.name === 'Tomás Munita' ? 'object-bottom' : ''}`}
            onError={(e) => {
              (e.target as HTMLImageElement).src = '/placeholder.svg';
            }}
          />
        </div>
        {/* Button with white background: menos alto en móvil para dejar más foto visible */}
        <div className="absolute bottom-0 left-0 right-0">
          <div className="w-full bg-white py-2 sm:py-3 px-3 sm:px-4 rounded-t-2xl hover:opacity-95 transition-opacity h-[78px] sm:h-auto overflow-hidden sm:overflow-visible">
            <div className="text-left flex flex-col justify-end h-full">
              <div className="font-bold text-[11px] sm:text-sm uppercase tracking-wide text-orange-500 leading-tight">
                {firstName}
              </div>
              <div className="font-bold text-[11px] sm:text-sm uppercase tracking-wide text-orange-500 leading-tight">
                {lastName || ""}
              </div>
              <div className="text-[10px] sm:text-xs font-medium mt-0.5 sm:mt-1 text-[#391800] truncate sm:whitespace-normal sm:overflow-visible sm:text-clip">
                {title}
              </div>
            </div>
          </div>
        </div>
      </motion.div>

      {/* Modal */}
      <Dialog open={isOpen} onOpenChange={setIsOpen}>
        <DialogContent className="max-w-2xl max-h-[90vh] overflow-y-auto">
          <DialogHeader>
            <div className="flex items-start gap-4 mb-4">
              <img
                src={member.image}
                alt={member.name}
                className="w-24 h-24 rounded-lg object-cover flex-shrink-0 bg-gray-200"
                onError={(e) => {
                  (e.target as HTMLImageElement).src = '/placeholder.svg';
                }}
              />
              <div className="flex-1">
                <DialogTitle className="text-2xl mb-1">{member.name}</DialogTitle>
                <DialogDescription className="text-base font-medium text-foreground">
                  {title}
                </DialogDescription>
                {member.linkedin && (
                  <a
                    href={member.linkedin.startsWith("http") ? member.linkedin : `https://${member.linkedin}`}
                    target="_blank"
                    rel="noopener noreferrer"
                    className="inline-flex items-center gap-2 mt-3 text-primary hover:text-primary/80 transition-colors"
                  >
                    {isInstagram ? <InstagramIcon /> : <LinkedInIcon />}
                    <span className="text-sm">{t("nosotros.viewProfile")}</span>
                    <ExternalLink className="w-3 h-3" />
                  </a>
                )}
              </div>
            </div>
          </DialogHeader>
          
          <div className="space-y-4 mt-4">
            <div>
              <h4 className="font-semibold text-sm text-muted-foreground uppercase tracking-wide mb-2">{t("nosotros.summary")}</h4>
              <p className="text-sm leading-relaxed">{summary}</p>
            </div>

            {role && (
              <div>
                <h4 className="font-semibold text-sm text-muted-foreground uppercase tracking-wide mb-2">{t("nosotros.role")}</h4>
                <p className="text-sm leading-relaxed">{role}</p>
              </div>
            )}

            {experience && experience.length > 0 && (
              <div>
                <h4 className="font-semibold text-sm text-muted-foreground uppercase tracking-wide mb-2">{t("nosotros.experience")}</h4>
                <ul className="space-y-2">
                  {experience.map((exp, idx) => (
                    <li key={idx} className="text-sm leading-relaxed flex items-start gap-2">
                      <span className="text-primary mt-1.5">•</span>
                      <span>{exp}</span>
                    </li>
                  ))}
                </ul>
              </div>
            )}
          </div>
        </DialogContent>
      </Dialog>
    </>
  );
}

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
                  src="/productos/escarabajo-final.jpg"
                  alt=""
                  className="w-full h-full object-cover"
                />
              </div>
              <div className="absolute -top-9 -right-3 lg:-top-6 lg:right-4 w-36 h-36 lg:w-44 lg:h-44 rounded-2xl overflow-hidden shadow-xl border-2 border-white bg-card z-20">
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
          <div className="mt-12 flex items-center gap-4 justify-center ">
             {/* <Button asChild size="lg" className="bg-[#391800] hover:bg-[#391800]/90 text-white rounded-full px-10 gap-4">
              <Link to="https://escarabajosdeldesierto.lovable.app" target="_blank">
                {t("escarabajos.BtnFoundation")}
                <ArrowRight className="w-4 h-4" />
              </Link>
            </Button> */}
            <Button
              asChild
              size="lg"
              className="rounded-full bg-primary text-white hover:bg-primary/90 px-8"
            >
              <Link to={ROUTES.contacto}>{t("nav.contact")}</Link>
            </Button>
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
    
     <section className="py-20 lg:py-28 bg-gradient-to-r from-[#9b734c] to-[#5b2500] text-white relative overflow-hidden">
          <div className="absolute top-0 left-0 right-0 h-8 bg-[#F5F2EC] rounded-b-3xl" />
          <div className="container mx-auto px-6 lg:px-8">
            <motion.div
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.6 }}
              className="text-center mb-16"
            >
              <div className=" text-3xl md:text-4xl lg:text-5xl font-bold leading-tight text-white mb-6">
                <span className="w-2 h-2 rounded-full bg-white shrink-0"></span>
                {t("nosotros.collaborators")}
              </div>
              <h2 className="inline-flex items-center gap-2 text-white text-m font-medium mb-6">
                {t("nosotros.collaboratorsTitle")}
              </h2>
            </motion.div>
  
            {/* Colaboradores Grid */}
            <div id="colaboradores" className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6">
              {COLABORADORES.filter((member) => !HIDDEN_COLABORADORES.includes(member.name)).map((member, i) => (
                <ColabCard key={member.id} member={member} index={i} t={t} />
              ))}
            </div>
          </div>
        </section>
    
    </PageWrapper>
  );
}
