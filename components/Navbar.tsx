"use client";

import { useEffect, useState } from "react";

export default function Navbar() {
  const [scrolled, setScrolled] = useState(false);
  const [menuOpen, setMenuOpen] = useState(false);

  useEffect(() => {
    const onScroll = () => setScrolled(window.scrollY > 16);
    window.addEventListener("scroll", onScroll, { passive: true });
    return () => window.removeEventListener("scroll", onScroll);
  }, []);

  return (
    <header
      className={`fixed top-0 inset-x-0 z-50 transition-all duration-300 ${
        scrolled
          ? "bg-[#FEFCF8]/95 backdrop-blur border-b border-[#E9E4D8] shadow-sm"
          : "bg-transparent"
      }`}
    >
      <nav className="max-w-5xl mx-auto px-6 h-16 flex items-center justify-between">
        {/* Logo */}
        <a href="#" className="flex items-center gap-2 shrink-0">
          <span
            className="text-xl font-medium text-[#1B4332]"
            style={{ fontFamily: "DM Serif Display, Georgia, serif" }}
          >
            Fanihy<span className="text-[#D97706]">.</span>
          </span>
        </a>

        {/* Desktop links */}
        <div className="hidden md:flex items-center gap-8">
          {["Fonctionnalités", "Tarifs", "Témoignages"].map((label) => (
            <a
              key={label}
              href={`#${label.toLowerCase().replace("é", "e").replace("î", "i")}`}
              className="text-sm text-[#6B7280] hover:text-[#1C1C1C] transition-colors"
            >
              {label}
            </a>
          ))}
        </div>

        {/* CTA */}
        <div className="hidden md:flex items-center gap-3">
          <a
            href="#tarifs"
            className="text-sm text-[#1B4332] font-medium hover:underline"
          >
            Se connecter
          </a>
          <a
            href="#essai"
            className="text-sm font-medium bg-[#1B4332] text-[#D4F1E4] px-4 py-2 rounded-lg hover:bg-[#2D6A4F] transition-colors"
          >
            Essai gratuit ↗
          </a>
        </div>

        {/* Mobile hamburger */}
        <button
          className="md:hidden p-2 rounded-md text-[#1B4332]"
          onClick={() => setMenuOpen(!menuOpen)}
          aria-label={menuOpen ? "Fermer le menu" : "Ouvrir le menu"}
        >
          <span className="block w-5 h-0.5 bg-current mb-1.5 transition-transform" />
          <span className="block w-5 h-0.5 bg-current mb-1.5 transition-all" />
          <span className="block w-5 h-0.5 bg-current transition-transform" />
        </button>
      </nav>

      {/* Mobile menu */}
      {menuOpen && (
        <div className="md:hidden bg-[#FEFCF8] border-b border-[#E9E4D8] px-6 pb-6 pt-2 flex flex-col gap-4">
          {["Fonctionnalités", "Tarifs", "Témoignages"].map((label) => (
            <a
              key={label}
              href={`#${label.toLowerCase()}`}
              className="text-sm text-[#6B7280]"
              onClick={() => setMenuOpen(false)}
            >
              {label}
            </a>
          ))}
          <a
            href="#essai"
            className="text-sm font-medium bg-[#1B4332] text-[#D4F1E4] px-4 py-2 rounded-lg text-center"
            onClick={() => setMenuOpen(false)}
          >
            Essai gratuit ↗
          </a>
        </div>
      )}
    </header>
  );
}
