import { useState } from "react";
import { Link } from "react-router-dom";
import { useTranslation } from "react-i18next";
import { motion } from "framer-motion";
import { ChevronRight, Factory, Store, Car, BedDouble, Footprints, ShoppingBag, Leaf } from "lucide-react";
import { PageWrapper } from "@/components/PageWrapper";
import { ROUTES } from "@/lib/routes";
import {
  Dialog,
  DialogContent,
  DialogHeader,
  DialogTitle,
  DialogDescription,
} from "@/components/ui/dialog";

const B2B_ITEMS = [
  { key: "aislacion", img: "/productos/fibra-3.jpg" },
  { key: "colchones", img: "/productos/fibra-1.jpg" },
  { key: "automotriz", img: "/productos/fibra-2.jpg" },
] as const;

const B2C_ITEMS = [
  { key: "hilos", img: "/productos/poncho-escarabajos.jpg" },
  { key: "gorros", img: "/productos/jockey-escarabajo.jpg" },
  { key: "pecheras", img: "/productos/pechera-escarabjo.png" },
  { key: "chaquetas", img: "/productos/chaqueta-escarabajos.jpg" },
  { key: "bolsos", img: "/productos/bolso-2.jpg" },
  { key: "peluches", img: "/productos/peluche-escaabajkos.jpg" },
] as const;

export default function Productos() {
  const { t } = useTranslation();
  const [selectedProduct, setSelectedProduct] = useState<{
    name: string;
    tag: string;
    img: string;
  } | null>(null);

  const ps = (k: string) => `productosPage.${k}`;

  return (
    <PageWrapper noTopPadding>
      <section className="pt-32 pb-24 lg:pt-40 lg:pb-32 bg-[#391800] text-white min-h-screen">
        <div className="container mx-auto px-6 sm:px-10 lg:px-20">
          <div className="max-w-6xl mx-auto">
            {/* Header */}
            <motion.div
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.6 }}
              className="text-center mb-16 lg:mb-24"
            >
              <div className="inline-flex items-center gap-2 text-xs font-semibold uppercase tracking-[0.18em] text-white/80 mb-3">
                <span className="w-2 h-2 rounded-full bg-primary shrink-0"></span>
                <span>{t(ps("badge"))}</span>
              </div>
              <h2 className="text-4xl md:text-5xl lg:text-6xl font-bold leading-tight text-white mb-3">
                <span className="mr-2">{t(ps("titleProducts"))}</span>
                <span className="font-script text-primary/70 italic font-normal">
                  {t(ps("titleBrand"))}
                </span>
              </h2>
            </motion.div>

            {/* B2B Section */}
            <motion.div
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.6 }}
              className="mb-24 lg:mb-32"
            >
              <div className="text-center mb-16 max-w-4xl mx-auto">
                <div className="inline-flex items-center gap-2 mb-6 px-5 py-2.5 rounded-full border border-white/20 bg-white/10 backdrop-blur-md text-white shadow-lg">
                  <Factory className="w-4 h-4 text-[#e8b67d]" />
                  <span className="text-sm font-bold uppercase tracking-widest text-[#e8b67d]">{t(ps("b2b.title"))}</span>
                </div>
                <h3 className="text-3xl md:text-5xl font-bold mb-6 tracking-tight bg-gradient-to-r from-[#e8b67d] via-[#f9dca8] to-white bg-clip-text text-transparent">
                  Desarrollo Industrial
                </h3>
                <p className="text-white/80 leading-relaxed md:text-xl font-light">
                  {t(ps("b2b.desc"))}
                </p>
                
                {/* Visual Industries representation */}
                <div className="flex flex-wrap items-center justify-center gap-6 md:gap-12 mt-12 bg-black/20 p-6 md:p-8 rounded-3xl border border-[#e8b67d]/10 shadow-[0_0_40px_-15px_rgba(232,182,125,0.15)]">
                  <div className="flex flex-col items-center gap-3 opacity-80 hover:opacity-100 transition-opacity hover:-translate-y-1 transform">
                    <Store className="w-10 h-10 text-[#e8b67d]" />
                    <span className="text-xs uppercase tracking-widest font-bold text-[#e8b67d]">Retail</span>
                  </div>
                  <div className="flex flex-col items-center gap-3 opacity-80 hover:opacity-100 transition-opacity hover:-translate-y-1 transform">
                    <Car className="w-10 h-10 text-[#e8b67d]" />
                    <span className="text-xs uppercase tracking-widest font-bold text-[#e8b67d]">Automotriz</span>
                  </div>
                  <div className="flex flex-col items-center gap-3 opacity-80 hover:opacity-100 transition-opacity hover:-translate-y-1 transform">
                    <BedDouble className="w-10 h-10 text-[#e8b67d]" />
                    <span className="text-xs uppercase tracking-widest font-bold text-[#e8b67d]">Colchones</span>
                  </div>
                  <div className="flex flex-col items-center gap-3 opacity-80 hover:opacity-100 transition-opacity hover:-translate-y-1 transform">
                    <Footprints className="w-10 h-10 text-[#e8b67d]" />
                    <span className="text-xs uppercase tracking-widest font-bold text-[#e8b67d]">Marcas</span>
                  </div>
                </div>
              </div>

              <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 gap-6 lg:gap-10 max-w-5xl mx-auto mt-12">
                {B2B_ITEMS.map((item, index) => {
                  const name = t(ps(`b2b.items.${item.key}`));
                  return (
                    <motion.button
                      key={item.key}
                      initial={{ opacity: 0, y: 20 }}
                      whileInView={{ opacity: 1, y: 0 }}
                      viewport={{ once: true }}
                      transition={{ delay: index * 0.1 }}
                      onClick={() => setSelectedProduct({ name, tag: t(ps("b2b.title")), img: item.img })}
                      className="group rounded-3xl overflow-hidden bg-white/5 border border-white/10 hover:bg-white/10 hover:border-white/40 transition-all focus:outline-none focus:ring-2 focus:ring-white/60 text-left w-full h-full flex flex-col hover:-translate-y-1 hover:shadow-2xl hover:shadow-black/20"
                    >
                      <div className="bg-black/20 w-full aspect-[4/3] flex-shrink-0">
                        <img
                          src={item.img}
                          alt={name}
                          className="w-full h-full object-cover transition-transform duration-700 group-hover:scale-105"
                        />
                      </div>
                      <div className="p-5 flex-1 flex items-center justify-center">
                        <p className="text-sm font-semibold text-white/90 leading-tight text-center">{name}</p>
                      </div>
                    </motion.button>
                  );
                })}
              </div>
            </motion.div>

            {/* B2C Section */}
            <motion.div
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.6 }}
              className="mt-32"
            >
              <div className="bg-gradient-to-br from-[#4c2605] to-[#2d1200] rounded-[3rem] p-8 lg:p-14 border border-[#e8b67d]/20 shadow-[0_30px_60px_-15px_rgba(0,0,0,0.6)] relative overflow-hidden flex flex-col xl:flex-row gap-12 items-center">
                <div className="absolute top-0 right-0 p-8 opacity-5">
                  <ShoppingBag className="w-96 h-96 -rotate-12 transform translate-x-32 -translate-y-24" />
                </div>
                
                <div className="xl:w-1/3 relative z-10 text-center xl:text-left flex flex-col items-center xl:items-start">
                  <div className="inline-flex items-center gap-2 mb-6 px-5 py-2.5 rounded-full border border-[#e8b67d]/30 bg-[#e8b67d]/10 backdrop-blur-md shadow-lg">
                    <Leaf className="w-4 h-4 text-[#e8b67d]" />
                    <span className="text-sm font-bold uppercase tracking-widest text-[#e8b67d]">B2C & Comunidad</span>
                  </div>
                  <h3 className="text-3xl md:text-5xl font-bold mb-6 text-balance tracking-tight bg-gradient-to-r from-[#e8b67d] to-white bg-clip-text text-transparent">
                    {t(ps("b2c.title"))}
                  </h3>
                  <p className="text-white/80 leading-relaxed md:text-lg font-light lg:mb-0 text-balance lg:max-w-md">
                    {t(ps("b2c.desc"))}
                  </p>
                  {/* Botón de la tienda oculto por ahora
                  <Link
                    to={ROUTES.escarabajos}
                    className="inline-flex items-center gap-3 px-8 py-4 rounded-full bg-gradient-to-r from-[#e8b67d] to-[#d49653] text-[#2d1200] hover:from-[#f9dca8] hover:to-[#e8b67d] transition-all font-bold shadow-[0_0_40px_-5px_rgba(232,182,125,0.3)] hover:shadow-[0_0_60px_-5px_rgba(232,182,125,0.5)] hover:scale-105"
                  >
                    <ShoppingBag className="w-5 h-5" />
                    {t(ps("b2c.linkStore"))}
                  </Link>
                  */}
                </div>

                <div className="xl:w-2/3 relative z-10 w-full">
                  <div className="grid grid-cols-2 md:grid-cols-3 gap-4 lg:gap-6">
                    {B2C_ITEMS.map((item, index) => {
                      const name = t(ps(`b2c.items.${item.key}`));
                      return (
                        <motion.button
                          key={item.key}
                          initial={{ opacity: 0, y: 20 }}
                          whileInView={{ opacity: 1, y: 0 }}
                          viewport={{ once: true }}
                          transition={{ delay: index * 0.1 }}
                          onClick={() => setSelectedProduct({ name, tag: t(ps("b2c.title")), img: item.img })}
                          className="group rounded-3xl overflow-hidden bg-black/20 border border-white/5 hover:border-[#e8b67d]/40 transition-all focus:outline-none focus:ring-2 focus:ring-[#e8b67d]/60 text-left w-full h-full flex flex-col hover:-translate-y-2 hover:shadow-2xl hover:shadow-[#e8b67d]/10"
                        >
                          <div className="bg-black/40 w-full aspect-[4/3] flex-shrink-0 relative overflow-hidden">
                            <img
                              src={item.img}
                              alt={name}
                              className="w-full h-full object-cover transition-transform duration-700 group-hover:scale-110"
                            />
                            <div className="absolute inset-0 bg-gradient-to-t from-black/80 via-black/20 to-transparent opacity-60 group-hover:opacity-40 transition-opacity" />
                          </div>
                          <div className="p-4 sm:p-5 flex-1 flex items-center justify-center bg-black/40 backdrop-blur-md">
                            <p className="text-sm sm:text-base font-semibold text-[#e8b67d] group-hover:text-white transition-colors leading-tight text-center">{name}</p>
                          </div>
                        </motion.button>
                      );
                    })}
                  </div>
                </div>
              </div>
            </motion.div>
          </div>
        </div>

        {/* Modal producto seleccionado */}
        <Dialog open={!!selectedProduct} onOpenChange={() => setSelectedProduct(null)}>
          <DialogContent className="max-w-lg sm:max-w-2xl border-0 bg-[#391800]/95 backdrop-blur-xl text-white rounded-3xl p-0 overflow-hidden shadow-[0_0_60px_-15px_rgba(0,0,0,1)]">
            {selectedProduct && (
              <div>
                <div className="h-64 sm:h-80 w-full overflow-hidden relative bg-black/40">
                  <img
                    src={selectedProduct.img}
                    alt={selectedProduct.name}
                    className="w-full h-full object-cover object-top"
                  />
                  <div className="absolute inset-0 bg-gradient-to-t from-[#391800] via-[#391800]/20 to-transparent" />
                </div>
                <div className="p-6 sm:p-8 space-y-2 relative -mt-8">
                  <DialogHeader className="space-y-2">
                    <DialogDescription className="text-xs sm:text-sm text-primary uppercase font-bold tracking-widest mb-1">
                      {selectedProduct.tag}
                    </DialogDescription>
                    <DialogTitle className="text-2xl sm:text-3xl font-bold text-white tracking-tight leading-tight">
                      {selectedProduct.name}
                    </DialogTitle>
                  </DialogHeader>
                </div>
              </div>
            )}
          </DialogContent>
        </Dialog>
      </section>
    </PageWrapper>
  );
}
