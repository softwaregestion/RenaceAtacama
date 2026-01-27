import { useState } from "react";
import { motion, AnimatePresence } from "framer-motion";
import { ChevronDown, ChevronUp } from "lucide-react";
import { PageHeader } from "@/components/PageHeader";
import { PageWrapper } from "@/components/PageWrapper";
import { SectionAccent } from "@/components/shared";
import { Avatar, AvatarImage, AvatarFallback } from "@/components/ui/avatar";
import businessPerson from "@/assets/business-person-1.jpg";
import ceoPortrait from "@/assets/ceo-portrait.jpg";
import handshake from "@/assets/handshake.jpg";
import teamMeeting from "@/assets/team-meeting.jpg";

const COLABORADORES = [
  {
    name: "Mateo Barrengenoa",
    role: "Documentalista (National Geographic Explorer)",
    image: businessPerson,
    bio: "Documentación visual de la problemática y las soluciones en terreno.",
  },
  {
    name: "Tomás Munita",
    role: "Fotógrafo documental (colaborador del proyecto)",
    image: ceoPortrait,
    bio: "Registro fotográfico del territorio y las comunidades.",
  },
  {
    name: "Felipe Braun",
    role: "Actor, director y gestor cultural (Embajador del proyecto)",
    image: handshake,
    bio: "Difusión y posicionamiento cultural del proyecto.",
  },
  {
    name: "Sol Leyton",
    role: "Periodista y comunicadora (Embajadora del proyecto)",
    image: teamMeeting,
    bio: "Comunicación estratégica y visibilidad en medios.",
  },
];

function ColabCard({
  member,
  index,
}: {
  member: (typeof COLABORADORES)[number];
  index: number;
}) {
  const [expanded, setExpanded] = useState(false);
  const initial = member.name.split(" ").map((n) => n[0]).join("").slice(0, 2);

  return (
    <motion.div
      initial={{ opacity: 0, y: 20 }}
      whileInView={{ opacity: 1, y: 0 }}
      viewport={{ once: true }}
      transition={{ delay: index * 0.1 }}
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

export default function Colaboradores() {
  return (
    <PageWrapper>
      <div className="container mx-auto px-6 lg:px-8">
        <PageHeader
          title="Colaboradores y Embajadores"
          text="Profesionales que colaboran con Renace Atacama en distintas iniciativas."
          className="mb-12"
        />
        <SectionAccent className="mb-10">Quién nos apoya</SectionAccent>

        <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
          {COLABORADORES.map((member, i) => (
            <ColabCard key={member.name} member={member} index={i} />
          ))}
        </div>
      </div>
    </PageWrapper>
  );
}
