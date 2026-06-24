import type { Metadata } from "next";
import "./globals.css";

export const metadata: Metadata = {
  title: "Fanihy · Gestion touristique pour lodges malgaches",
  description:
    "Planning, paiements MVola & Orange Money, communication client — l'outil tout-en-un conçu pour les opérateurs touristiques de Madagascar.",
  openGraph: {
    title: "Fanihy",
    description: "Digitalisez votre lodge en 15 minutes.",
    locale: "fr_MG",
    type: "website",
  },
};

export default function RootLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return (
    <html lang="fr" className="h-full scroll-smooth antialiased">
      <body className="min-h-full flex flex-col bg-[#FEFCF8] text-[#1C1C1C]">
        {children}
      </body>
    </html>
  );
}
