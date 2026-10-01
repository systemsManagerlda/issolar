import type { Metadata } from "next";
import "./globals.css";

export const metadata: Metadata = {
  title: "IS Solar Moçambique | Energia Solar Fotovoltaica",
  description: "Soluções de energia solar para residências, empresas, indústrias, instituições e comunidades em Moçambique.",
  keywords: ["energia solar", "painéis solares", "inversores", "baterias", "Moçambique", "IS Solar"],
  openGraph: {
    title: "IS Solar Moçambique | Empresa de energia solar",
    description: "Soluções de energia solar para residências, empresas, indústrias e comunidades.",
    type: "website"
  },
};

export default function RootLayout({ children }: Readonly<{ children: React.ReactNode }>) {
  return <html lang="pt-MZ"><body>{children}</body></html>;
}