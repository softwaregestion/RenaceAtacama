import { useState } from "react";
import { motion, AnimatePresence } from "framer-motion";
import { ChevronDown, ChevronUp } from "lucide-react";
import { PageHeader } from "@/components/PageHeader";
import { PageWrapper } from "@/components/PageWrapper";
import { SectionAccent } from "@/components/shared";
import { Avatar, AvatarImage, AvatarFallback } from "@/components/ui/avatar";
import ceoPortrait from "@/assets/ceo-portrait.jpg";
import businessPerson from "@/assets/business-person-1.jpg";
import handshake from "@/assets/handshake.jpg";
import teamMeeting from "@/assets/team-meeting.jpg";
import presentation from "@/assets/presentation.jpg";
import coaching from "@/assets/coaching.jpg";
import workspace from "@/assets/workspace.jpg";

const TEAM = [
  {
    name: "Marco Bedoya",
    role: "Consultor senior en medio ambiente y sustentabilidad",
    image: ceoPortrait,
    bio: "Experiencia en gestión ambiental y proyectos de regeneración territorial.",
  },
  {
    name: "Bruno Alfaro",
    role: "Ingeniero Civil Metalúrgico",
    image: businessPerson,
    bio: "Especialista en procesos industriales y economía circular.",
  },
  {
    name: "Diego Albalgy",
    role: "Sociólogo, máster en Medioambiente y Desarrollo Territorial",
    image: handshake,
    bio: "Enfoque en desarrollo comunitario y sostenibilidad social.",
  },
  {
    name: "Mario Pino",
    role: "Arquitecto (DPLG)",
    image: teamMeeting,
    bio: "Diseño territorial y espacios para la innovación comunitaria.",
  },
  {
    name: "Christian Matamala",
    role: "Consultor y coach socioambiental",
    image: coaching,
    bio: "Facilitación de procesos de cambio organizacional y comunitario.",
  },
  {
    name: "Miguel Angel Curihuinca",
    role: "Geógrafo y Magíster en Urbanismo",
    image: presentation,
    bio: "Planificación territorial y análisis espacial.",
  },
  {
    name: "Ricardo Quiroz",
    role: "Ingeniero Civil en Metalurgia",
    image: workspace,
    bio: "Procesos productivos y optimización de recursos.",
  },
  {
    name: "Roberto Fuentes",
    role: "Director creativo en publicidad y comunicación",
    image: ceoPortrait,
    bio: "Estrategia de comunicación y posicionamiento de marca.",
  },
  {
    name: "María José Cáceres",
    role: "Partner (Co-founder & CEO de Normandi Media)",
    image: businessPerson,
    bio: "Liderazgo en medios y comunicación de impacto.",
  },
  {
    name: "César Guzmán Torrico",
    role: "Ingeniero Civil Químico (Procesos metalúrgicos y sostenibilidad)",
    image: handshake,
    bio: "Innovación en procesos industriales sostenibles.",
  },
  {
    name: "Paula Castillo",
    role: "Arquitecta (evaluación de impacto ambiental)",
    image: teamMeeting,
    bio: "Evaluación ambiental y diseño sustentable.",
  },
  {
    name: "Ashley Castillo",
    role: "Trabajadora social",
    image: coaching,
    bio: "Trabajo comunitario y derechos sociales.",
  },
];

function TeamCard({
  member,
  index,
}: {
  member: (typeof TEAM)[number];
  index: number;
}) {
  const [expanded, setExpanded] = useState(false);
  const initial = member.name.split(" ").map((n) => n[0]).join("").slice(0, 2);

  return (
    <motion.div
      initial={{ opacity: 0, y: 20 }}
      whileInView={{ opacity: 1, y: 0 }}
      viewport={{ once: true }}
      transition={{ delay: Math.min(index * 0.05, 0.4) }}
      className="bg-card rounded-3xl border border-border hover:border-primary hover:shadow-xl transition-all overflow-hidden"
    >
      <div className="p-6 flex flex-col sm:flex-row gap-4">
        <Avatar className="h-20 w-20 rounded-2xl flex-shrink-0 ring-1 ring-black/5">
          <AvatarImage src={member.image} alt={member.name} className="object-cover rounded-2xl" />
          <AvatarFallback className="rounded-2xl bg-primary/10 text-primary font-bold">
            {initial}
          </AvatarFallback>
        </Avatar>
        <div className="flex-1 min-w-0">
          <h3 className="text-lg font-bold text-foreground">{member.name}</h3>
          <p className="text-sm text-primary font-medium mb-1">{member.role}</p>
          <AnimatePresence>
            {expanded && (
              <motion.p
                initial={{ opacity: 0, height: 0 }}
                animate={{ opacity: 1, height: "auto" }}
                exit={{ opacity: 0, height: 0 }}
                className="text-sm text-muted-foreground mt-2"
              >
                {member.bio}
              </motion.p>
            )}
          </AnimatePresence>
          <button
            onClick={() => setExpanded(!expanded)}
            className="mt-2 inline-flex items-center gap-1 text-sm font-semibold text-primary hover:underline"
          >
            {expanded ? (
              <>
                Ver menos <ChevronUp className="w-4 h-4" />
              </>
            ) : (
              <>
                Ver más <ChevronDown className="w-4 h-4" />
              </>
            )}
          </button>
        </div>
      </div>
    </motion.div>
  );
}

export default function Equipo() {
  return (
    <PageWrapper>
      <div className="container mx-auto px-6 lg:px-8">
        <PageHeader
          title="Equipo interdisciplinario"
          text="Un grupo de profesionales que combina sostenibilidad, industria, comunidad, comunicación y territorio."
          className="mb-12"
        />
        <SectionAccent className="mb-10">Conoce al equipo</SectionAccent>

        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
          {TEAM.map((member, i) => (
            <TeamCard key={member.name} member={member} index={i} />
          ))}
        </div>
      </div>
    </PageWrapper>
  );
}
