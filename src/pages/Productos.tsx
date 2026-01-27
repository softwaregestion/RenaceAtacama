import { motion } from "framer-motion";
import { PageHeader } from "@/components/PageHeader";
import { PageWrapper } from "@/components/PageWrapper";
import { SectionAccent } from "@/components/shared";

const CATEGORIAS = [
  {
    title: "Textiles planos y tejidos",
    items: [
      "Bolsos, mochilas, estuches",
      "Delantales, individuales, manteles",
      "Tapices, banderines decorativos",
      "Fundas de cojín, cortinas",
      "Telas para patchwork y quilting",
    ],
  },
  {
    title: "Accesorios y vestuario",
    items: [
      "Gorros, bufandas, chalecos, chaquetas",
      "Scrunchies, turbantes, cintillos",
      "Prendas para muñecos",
      "Ropa para mascotas",
    ],
  },
  {
    title: "Textiles suaves y rellenos",
    items: [
      "Cojines, zafús, peluches",
      "Camas para mascotas",
      "Aislantes térmicos/acústicos artesanales",
    ],
  },
  {
    title: "Material para productos duros",
    items: ["Fieltros prensados", "Plantillas para muebles", "Revestimientos ecológicos"],
  },
  {
    title: "Arte y decoración",
    items: ["Collages y obras", "Muralismo con retazos", "Artesanías con identidad local"],
  },
  {
    title: "Productos de bienestar",
    items: [
      "Antifaces y saquitos térmicos",
      "Almohadas de lactancia/yoga",
      "Accesorios de meditación",
    ],
  },
  {
    title: "Bioinnovación y sostenibilidad",
    items: [
      "Fibras mezcladas con reciclados para paneles",
      "Prototipos ecotextiles biodegradables",
    ],
  },
];

export default function Productos() {
  return (
    <PageWrapper>
      <div className="container mx-auto px-6 lg:px-8">
        <PageHeader
          title="¿Qué se puede obtener de la ropa reciclada?"
          text="Una amplia variedad de productos útiles, creativos y sostenibles que dan nueva vida a los textiles recuperados."
          className="mb-12"
        />
        <SectionAccent className="mb-10">Categorías</SectionAccent>

        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
          {CATEGORIAS.map((cat, i) => (
            <motion.div
              key={cat.title}
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ delay: Math.min(i * 0.05, 0.3) }}
              className="p-6 rounded-3xl bg-card border border-border hover:border-primary hover:shadow-xl transition-all"
            >
              <h3 className="text-lg font-bold text-foreground mb-4">{cat.title}</h3>
              <ul className="space-y-2">
                {cat.items.map((item, j) => (
                  <li key={j} className="flex items-start gap-2 text-sm text-muted-foreground">
                    <span className="w-1.5 h-1.5 rounded-full bg-primary mt-2 flex-shrink-0" />
                    {item}
                  </li>
                ))}
              </ul>
            </motion.div>
          ))}
        </div>
      </div>
    </PageWrapper>
  );
}
