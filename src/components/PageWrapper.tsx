import { ReactNode } from "react";

interface PageWrapperProps {
  children: ReactNode;
  /** Si es true, añade padding top para header fijo en páginas con contenido full-width (ej. Home hero) */
  noTopPadding?: boolean;
  /** Clases adicionales para el contenedor */
  className?: string;
}

export function PageWrapper({ children, noTopPadding, className = "" }: PageWrapperProps) {
  return (
    <div
      className={
        noTopPadding
          ? `min-h-screen ${className}`.trim()
          : `pt-24 lg:pt-28 pb-16 lg:pb-24 ${className}`.trim()
      }
    >
      {children}
    </div>
  );
}
