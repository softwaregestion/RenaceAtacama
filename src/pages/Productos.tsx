import { useState } from "react";
import { useTranslation } from "react-i18next";
import { motion } from "framer-motion";
import {
  Factory,
  Store,
  Car,
  BedDouble,
  Footprints,
  ShoppingBag,
  CircleDot,
  Shirt,
  Sprout,
} from "lucide-react";
import { PageWrapper } from "@/components/PageWrapper";
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

const NEUMATICOS_ITEMS = [
  { key: "pisos", img: "/productos/bag-5.png" },
  { key: "deportivo", img: "/productos/bag-4.webp" },
  { key: "urbano", img: "/productos/bag-1.jpg" },
  { key: "topes", img: "/productos/bag-3.jpg" },
  { key: "jardin", img: "/productos/bag-2.webp" },
] as const;

const ZAPATOS_ITEMS = [
  { key: "deportivo" as const, img: "/productos/suela1.jpg" },
  { key: "laboral" as const, img: "/productos/suela2.jpg" },
  { key: "infantil" as const, img: "/productos/suela3.jpg" },
] as const;

const B2C_ITEMS = [
  { key: "ponchos", img: "/productos/poncho-escarabajos.jpg" },
  { key: "gorros", img: "/productos/jockey-escarabajo.jpg" },
  { key: "pecheras", img: "/productos/pechara-2.jpg" },
  { key: "chaquetas", img: "/productos/chaqueta-escarabajos.jpg" },
  { key: "peluches", img: "/productos/mono.jpg" },
] as const;

export default function Productos() {
  const { t } = useTranslation();
  const [selectedProduct, setSelectedProduct] = useState<{
    name: string;
    tag: string;
    img?: string;
  } | null>(null);

  const ps = (k: string) => `productosPage.${k}`;

  const placeholderLabel = t(ps("placeholders.imageSoon"));

  return (
    <PageWrapper noTopPadding>
      <section className="pt-32 pb-24 lg:pt-40 lg:pb-32 bg-[#391800] text-white min-h-screen overflow-x-hidden">
        <div className="container mx-auto px-4 sm:px-10 lg:px-20">
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
              <h1 className="text-4xl md:text-5xl lg:text-6xl font-bold leading-tight text-white">
                {t(ps("titleProducts"))}
              </h1>
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
                <div className="inline-flex flex-wrap items-center justify-center gap-2 mb-6 max-w-full px-4 sm:px-5 py-2.5 rounded-full border border-white/20 bg-white/10 backdrop-blur-md text-white shadow-lg text-center">
                  <Factory className="w-4 h-4 text-[#e8b67d] shrink-0" />
                  <span className="text-xs sm:text-sm font-bold uppercase tracking-widest text-[#e8b67d] text-balance">{t(ps("b2b.title"))}</span>
                </div>
                <h2 className="text-3xl md:text-5xl font-bold mb-6 tracking-tight bg-gradient-to-r from-[#e8b67d] via-[#f9dca8] to-white bg-clip-text text-transparent">
                  Desarrollo Industrial
                </h2>
                <p className="text-white/80 leading-relaxed md:text-xl font-light">
                  {t(ps("b2b.desc"))}
                </p>

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
                      <div className="p-4 sm:p-5 flex-1 flex items-center justify-center">
                        <p className="text-sm font-semibold text-white/90 leading-tight text-center text-balance break-words px-1">{name}</p>
                      </div>
                    </motion.button>
                  );
                })}
              </div>
            </motion.div>

            {/* Neumáticos */}
            <motion.div
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.6 }}
              className="mb-24 lg:mb-32"
            >
              <div className="text-center mb-16 max-w-4xl mx-auto">
                <div className="inline-flex flex-wrap items-center justify-center gap-2 mb-6 max-w-full px-4 sm:px-5 py-2.5 rounded-full border border-white/20 bg-white/10 backdrop-blur-md text-white shadow-lg">
                  <CircleDot className="w-4 h-4 text-[#e8b67d] shrink-0" />
                  <span className="text-xs sm:text-sm font-bold uppercase tracking-widest text-[#e8b67d]">Neumáticos</span>
                </div>
                <h2 className="text-3xl md:text-5xl font-bold mb-6 tracking-tight bg-gradient-to-r from-[#e8b67d] via-[#f9dca8] to-white bg-clip-text text-transparent">
                  {t(ps("tires.title"))}
                </h2>
                <p className="text-white/80 leading-relaxed md:text-xl font-light">{t(ps("tires.desc"))}</p>
              </div>

              <div className="grid grid-cols-2 md:grid-cols-6 gap-3 sm:gap-4 lg:gap-6 max-w-5xl mx-auto">
                {NEUMATICOS_ITEMS.map((item, index) => {
                  const name = t(ps(`tires.items.${item.key}`));
                  const spanClass =
                    index === 0 ? "col-span-2 md:col-span-2 md:row-span-2" : "col-span-1 md:col-span-2";

                  const isFeature = index === 0;

                  return (
                    <div
                      key={item.key}
                      className={`${spanClass} min-h-0 ${isFeature ? "h-full" : "w-full self-start"}`}
                    >
                      <motion.button
                        type="button"
                        aria-label={name}
                        initial={{ opacity: 0, y: 20 }}
                        whileInView={{ opacity: 1, y: 0 }}
                        viewport={{ once: true }}
                        transition={{ delay: index * 0.08 }}
                        onClick={() =>
                          setSelectedProduct({ name, tag: t(ps("tires.title")), img: item.img })
                        }
                        className={`group rounded-3xl overflow-hidden bg-black/20 border border-white/5 transition-all focus:outline-none focus:ring-2 focus:ring-[#e8b67d]/60 w-full hover:-translate-y-1 hover:shadow-2xl hover:shadow-[#e8b67d]/10 hover:border-[#e8b67d]/40 ${
                          isFeature ? "h-full min-h-[280px] md:min-h-[380px] flex flex-col" : ""
                        }`}
                      >
                        {isFeature ? (
                          <div
                            className="bg-black/40 w-full relative overflow-hidden flex items-center justify-center aspect-[5/4] min-h-[200px] flex-1 md:aspect-auto md:min-h-[240px]"
                          >
                            <img
                              src={item.img}
                              alt=""
                              className="absolute inset-0 w-full h-full object-cover transition-transform duration-700 group-hover:scale-105"
                            />
                            <div className="absolute inset-0 z-[1] bg-gradient-to-t from-black/70 via-black/15 to-transparent opacity-50 group-hover:opacity-35 transition-opacity pointer-events-none" />
                          </div>
                        ) : (
                          <div className="w-full relative overflow-hidden bg-black/40">
                            <img
                              src={item.img}
                              alt=""
                              className="w-full h-auto block transition-transform duration-700 group-hover:scale-[1.02]"
                            />
                            <div className="absolute inset-0 z-[1] bg-gradient-to-t from-black/55 via-transparent to-transparent opacity-45 group-hover:opacity-30 transition-opacity pointer-events-none" />
                          </div>
                        )}
                      </motion.button>
                    </div>
                  );
                })}
              </div>
            </motion.div>

            {/* Zapatos / suelas */}
            <motion.div
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.6 }}
              className="mb-24 lg:mb-32"
            >
              <div className="text-center mb-16 max-w-4xl mx-auto">
                <div className="inline-flex flex-wrap items-center justify-center gap-2 mb-6 max-w-full px-4 sm:px-5 py-2.5 rounded-full border border-white/20 bg-white/10 backdrop-blur-md text-white shadow-lg">
                  <Footprints className="w-4 h-4 text-[#e8b67d] shrink-0" />
                  <span className="text-xs sm:text-sm font-bold uppercase tracking-widest text-[#e8b67d]">Calzado</span>
                </div>
                <h2 className="text-3xl md:text-5xl font-bold mb-6 tracking-tight bg-gradient-to-r from-[#e8b67d] via-[#f9dca8] to-white bg-clip-text text-transparent">
                  {t(ps("shoes.title"))}
                </h2>
                <p className="text-white/80 leading-relaxed md:text-xl font-light">{t(ps("shoes.desc"))}</p>
              </div>

              <div className="grid grid-cols-1 min-[420px]:grid-cols-2 lg:grid-cols-3 gap-4 sm:gap-5 lg:gap-8 max-w-4xl mx-auto">
                {ZAPATOS_ITEMS.map((item, index) => {
                  const name = t(ps(`shoes.items.${item.key}`));
                  const isLast = index === ZAPATOS_ITEMS.length - 1;
                  const img = "img" in item ? item.img : undefined;
                  return (
                    <div
                      key={item.key}
                      className={`min-w-0 ${isLast ? "min-[420px]:col-span-2 min-[420px]:flex min-[420px]:justify-center lg:col-span-1 lg:block" : ""}`}
                    >
                      <motion.button
                        type="button"
                        aria-label={name}
                        initial={{ opacity: 0, y: 20 }}
                        whileInView={{ opacity: 1, y: 0 }}
                        viewport={{ once: true }}
                        transition={{ delay: index * 0.1 }}
                        onClick={() =>
                          setSelectedProduct({ name, tag: t(ps("shoes.title")), img })
                        }
                        className={`group rounded-3xl overflow-hidden bg-white/5 border border-white/10 hover:bg-white/10 hover:border-white/40 transition-all focus:outline-none focus:ring-2 focus:ring-white/60 text-left w-full flex flex-col hover:-translate-y-1 hover:shadow-2xl hover:shadow-black/20 ${
                          isLast ? "min-[420px]:max-w-sm lg:max-w-none" : ""
                        }`}
                      >
                        <div className="bg-black/30 w-full aspect-square flex-shrink-0 relative overflow-hidden border-b border-white/10">
                          {img ? (
                            <>
                              <img
                                src={img}
                                alt=""
                                className="absolute inset-0 w-full h-full object-cover transition-transform duration-700 group-hover:scale-105"
                              />
                              <div className="absolute inset-0 z-[1] bg-gradient-to-t from-black/60 via-transparent to-transparent opacity-50 group-hover:opacity-35 transition-opacity pointer-events-none" />
                            </>
                          ) : (
                            <span className="absolute inset-0 flex items-center justify-center text-xs sm:text-sm text-white/40 px-3 text-center leading-snug z-[1]">
                              {placeholderLabel}
                            </span>
                          )}
                        </div>
                        <div className="p-3 sm:p-4 flex-1 flex items-center justify-center min-h-[4rem] sm:min-h-[4.5rem]">
                          <p className="text-xs sm:text-sm font-semibold text-white/90 leading-tight text-center text-balance break-words px-1">
                            {name}
                          </p>
                        </div>
                      </motion.button>
                    </div>
                  );
                })}
              </div>
            </motion.div>

            {/* B2C — Textiles */}
            <motion.div
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.6 }}
              className="mt-8"
            >
              <div className="bg-gradient-to-br from-[#4c2605] to-[#2d1200] rounded-2xl sm:rounded-[2rem] lg:rounded-[3rem] p-5 sm:p-8 lg:p-14 border border-[#e8b67d]/20 shadow-[0_30px_60px_-15px_rgba(0,0,0,0.6)] relative overflow-hidden flex flex-col xl:flex-row gap-8 sm:gap-10 xl:gap-12 items-center">
                <div className="absolute top-0 right-0 p-8 opacity-5">
                  <ShoppingBag className="w-96 h-96 -rotate-12 transform translate-x-32 -translate-y-24" />
                </div>

                <div className="xl:w-1/3 relative z-10 text-center xl:text-left flex flex-col items-center xl:items-start">
                  <div className="inline-flex flex-wrap items-center justify-center gap-2 mb-6 max-w-full px-4 sm:px-5 py-2.5 rounded-full border border-[#e8b67d]/30 bg-[#e8b67d]/10 backdrop-blur-md shadow-lg xl:justify-start">
                    <Shirt className="w-4 h-4 text-[#e8b67d] shrink-0" />
                    <span className="text-xs sm:text-sm font-bold uppercase tracking-widest text-[#e8b67d] text-balance text-center xl:text-left">{t(ps("b2c.badge"))}</span>
                  </div>
                  <h2 className="text-3xl md:text-5xl font-bold mb-6 text-balance tracking-tight bg-gradient-to-r from-[#e8b67d] to-white bg-clip-text text-transparent">
                    {t(ps("b2c.title"))}
                  </h2>
                  <p className="text-white/80 leading-relaxed md:text-lg font-light lg:mb-0 text-balance lg:max-w-md">
                    {t(ps("b2c.desc"))}
                  </p>
                </div>

                <div className="xl:w-2/3 relative z-10 w-full min-w-0">
                  <div className="grid grid-cols-2 md:grid-cols-6 gap-3 sm:gap-4 lg:gap-6">
                    {B2C_ITEMS.map((item, index) => {
                      const name = t(ps(`b2c.items.${item.key}`));
                      const isLastRow = index >= 3;
                      const spanClass = isLastRow ? "md:col-span-3" : "md:col-span-2";
                      const isLastOddMobile =
                        index === B2C_ITEMS.length - 1 && B2C_ITEMS.length % 2 === 1;
                      return (
                        <div
                          key={item.key}
                          className={`col-span-1 min-w-0 ${spanClass} ${
                            isLastOddMobile
                              ? "max-md:col-span-2 max-md:flex max-md:justify-center"
                              : ""
                          }`}
                        >
                          <motion.button
                            initial={{ opacity: 0, y: 20 }}
                            whileInView={{ opacity: 1, y: 0 }}
                            viewport={{ once: true }}
                            transition={{ delay: index * 0.1 }}
                            onClick={() => setSelectedProduct({ name, tag: t(ps("b2c.title")), img: item.img })}
                            className={`group rounded-2xl sm:rounded-3xl overflow-hidden bg-black/20 border border-white/5 hover:border-[#e8b67d]/40 transition-all focus:outline-none focus:ring-2 focus:ring-[#e8b67d]/60 text-left w-full h-full min-w-0 flex flex-col hover:-translate-y-2 hover:shadow-2xl hover:shadow-[#e8b67d]/10 ${
                              isLastOddMobile ? "max-md:max-w-md" : ""
                            }`}
                          >
                            <div className="bg-black/40 w-full aspect-[4/3] flex-shrink-0 relative overflow-hidden">
                              <img
                                src={item.img}
                                alt={name}
                                className="w-full h-full object-cover transition-transform duration-700 group-hover:scale-110"
                              />
                              <div className="absolute inset-0 bg-gradient-to-t from-black/80 via-black/20 to-transparent opacity-60 group-hover:opacity-40 transition-opacity" />
                            </div>
                            <div className="p-3 sm:p-5 flex-1 flex items-center justify-center bg-black/40 backdrop-blur-md">
                              <p className="text-xs sm:text-sm md:text-base font-semibold text-[#e8b67d] group-hover:text-white transition-colors leading-tight text-center text-balance break-words px-0.5">
                                {name}
                              </p>
                            </div>
                          </motion.button>
                        </div>
                      );
                    })}
                  </div>
                </div>
              </div>
            </motion.div>

            {/* Compost */}
            <motion.div
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.6 }}
              className="mt-24 lg:mt-32 mb-8"
            >
              <div className="text-center mb-10 max-w-3xl mx-auto">
                <div className="inline-flex flex-wrap items-center justify-center gap-2 mb-6 max-w-full px-4 sm:px-5 py-2.5 rounded-full border border-white/20 bg-white/10 backdrop-blur-md text-white shadow-lg">
                  <Sprout className="w-4 h-4 text-[#e8b67d] shrink-0" />
                  <span className="text-xs sm:text-sm font-bold uppercase tracking-widest text-[#e8b67d]">Compost</span>
                </div>
                <h2 className="text-3xl md:text-5xl font-bold mb-6 tracking-tight bg-gradient-to-r from-[#e8b67d] via-[#f9dca8] to-white bg-clip-text text-transparent">
                  {t(ps("compost.title"))}
                </h2>
                <p className="text-white/80 leading-relaxed md:text-lg font-light">{t(ps("compost.desc"))}</p>
              </div>
              <div className="grid grid-cols-1 lg:grid-cols-12 gap-6 lg:gap-8 items-stretch">
                <div className="lg:col-span-5 rounded-3xl border border-white/10 bg-black/25 backdrop-blur-md p-6 sm:p-8 flex flex-col justify-between">
                  <div className="space-y-4">
                    <h3 className="text-lg sm:text-xl font-semibold text-white tracking-tight">
                      {t(ps("compost.subtitle"))}
                    </h3>
                    <p className="text-white/75 leading-relaxed text-sm sm:text-base">
                      {t(ps("compost.detail"))}
                    </p>
                  </div>
                </div>

                <div className="lg:col-span-7 grid grid-cols-1 sm:grid-cols-2 gap-4 h-full">
                  <div className="group relative rounded-3xl overflow-hidden border border-white/10 bg-black/30 h-[260px] sm:h-full">
                    <img
                      src="/compost-1.png"
                      alt={t(ps("compost.imageAlt1"))}
                      className="absolute inset-0 w-full h-full object-cover transition-transform duration-700 group-hover:scale-105"
                      loading="lazy"
                    />
                    <div className="absolute inset-0 bg-gradient-to-t from-black/45 via-black/10 to-transparent pointer-events-none" />
                  </div>
                  <div className="group relative rounded-3xl overflow-hidden border border-white/10 bg-black/30 h-[260px] sm:h-full">
                    <img
                      src="/compost-2.png"
                      alt={t(ps("compost.imageAlt2"))}
                      className="absolute inset-0 w-full h-full object-cover transition-transform duration-700 group-hover:scale-105"
                      loading="lazy"
                    />
                    <div className="absolute inset-0 bg-gradient-to-t from-black/45 via-black/10 to-transparent pointer-events-none" />
                  </div>
                </div>
              </div>
            </motion.div>
          </div>
        </div>

        <Dialog open={!!selectedProduct} onOpenChange={() => setSelectedProduct(null)}>
          <DialogContent className="max-w-[calc(100vw-1.5rem)] sm:max-w-lg md:max-w-2xl max-h-[min(92dvh,880px)] overflow-y-auto overflow-x-hidden border-0 bg-[#391800]/95 backdrop-blur-xl text-white rounded-2xl sm:rounded-3xl p-0 shadow-[0_0_60px_-15px_rgba(0,0,0,1)]">
            {selectedProduct && (
              <div>
                <div className="h-64 sm:h-80 w-full overflow-hidden relative bg-black/40 flex items-center justify-center px-4 py-5 sm:px-6 sm:py-6">
                  {selectedProduct.img ? (
                    <>
                      <img
                        src={selectedProduct.img}
                        alt={selectedProduct.name}
                        className="max-h-full max-w-full object-contain object-center"
                      />
                      <div className="absolute inset-0 z-[1] bg-gradient-to-t from-[#391800]/90 via-[#391800]/10 to-transparent pointer-events-none" />
                    </>
                  ) : (
                    <div className="w-full h-full flex items-center justify-center text-white/45 text-sm sm:text-base px-8 text-center">
                      {placeholderLabel}
                    </div>
                  )}
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
