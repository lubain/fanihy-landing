"use client";

import { useEffect, useState } from "react";

const ROOMS = [
  { name: "Chambre 1", pattern: [1, 1, 1, 0, 0, 2, 2] },
  { name: "Chambre 2", pattern: [0, 1, 1, 1, 1, 0, 0] },
  { name: "Bungalow A", pattern: [1, 1, 0, 3, 3, 1, 1] },
  { name: "Suite Mer",  pattern: [0, 0, 1, 1, 1, 2, 0] },
  { name: "Suite Forêt",pattern: [3, 0, 0, 1, 1, 1, 0] },
];

const DAYS = ["Lu", "Ma", "Me", "Je", "Ve", "Sa", "Di"];

const STATUS = {
  0: { bg: "bg-[#EDE9DE]", text: "" },
  1: { bg: "bg-[#1B4332]", text: "✓" },
  2: { bg: "bg-[#FDE68A]", text: "?" },
  3: { bg: "bg-[#D3D1C7]", text: "↓" },
};

export default function Hero() {
  const [rooms, setRooms] = useState(ROOMS);

  useEffect(() => {
    const id = setInterval(() => {
      setRooms((prev) =>
        prev.map((r) => ({
          ...r,
          pattern: r.pattern.map((d) =>
            Math.random() < 0.07 ? ([0, 1, 2, 3] as const)[Math.floor(Math.random() * 4)] : d
          ),
        }))
      );
    }, 2800);
    return () => clearInterval(id);
  }, []);

  return (
    <section className="relative pt-28 pb-20 px-6 overflow-hidden">
      {/* Sable background blob */}
      <div className="absolute inset-0 -z-10">
        <div className="absolute top-0 right-0 w-1/2 h-full bg-[#F5EDD6]/50 rounded-bl-[80px]" />
      </div>

      <div className="max-w-5xl mx-auto grid md:grid-cols-2 gap-12 items-center">
        {/* Left — copy */}
        <div>
          <p className="text-xs font-medium tracking-widest uppercase text-[#D97706] mb-4">
            Pour hôtels · lodges · guides malgaches
          </p>
          <h1
            className="text-4xl md:text-5xl leading-[1.12] text-[#1B4332] mb-5"
            style={{ fontFamily: "DM Serif Display, Georgia, serif" }}
          >
            Gérez vos réservations.{" "}
            <em className="not-italic text-[#D97706]">Développez</em>{" "}
            votre lodge.
          </h1>
          <p className="text-base text-[#6B7280] leading-relaxed mb-8 max-w-md">
            Planning, paiements MVola & Orange Money, communication client — un
            seul outil conçu pour la réalité du tourisme à Madagascar.
          </p>

          <div className="flex flex-wrap gap-3">
            <a
              href="#essai"
              className="inline-flex items-center gap-2 bg-[#1B4332] text-[#D4F1E4] text-sm font-medium px-6 py-3 rounded-xl hover:bg-[#2D6A4F] transition-colors"
            >
              Démarrer gratuitement ↗
            </a>
            <a
              href="#fonctionnalites"
              className="inline-flex items-center gap-2 border border-[#1B4332] text-[#1B4332] text-sm font-medium px-6 py-3 rounded-xl hover:bg-[#EAF3DE] transition-colors"
            >
              Voir la démo
            </a>
          </div>

          {/* Trust badges */}
          <div className="flex flex-wrap gap-4 mt-8 text-xs text-[#6B7280]">
            {["30 jours d'essai gratuit", "Aucune carte requise", "Support en malgache"].map(
              (b) => (
                <span key={b} className="flex items-center gap-1.5">
                  <span className="w-1.5 h-1.5 rounded-full bg-[#1B4332]" />
                  {b}
                </span>
              )
            )}
          </div>
        </div>

        {/* Right — live planning dashboard */}
        <div className="bg-[#F0EDE5] rounded-2xl p-5 border border-[#E9E4D8] shadow-sm">
          <div className="flex justify-between items-center mb-4">
            <span className="text-xs font-medium text-[#1B4332]">
              Planning — Semaine du 16 juin
            </span>
            <span
              className="text-[10px] text-[#6B7280]"
              style={{ fontFamily: "JetBrains Mono, monospace" }}
            >
              Lodge Baobab · Morondava
            </span>
          </div>

          {/* KPI row */}
          <div className="grid grid-cols-3 gap-2 mb-4">
            {[
              { label: "Chambres", value: "8/12" },
              { label: "Revenus sem.", value: "2,4M Ar" },
              { label: "Arrivées demain", value: "3" },
            ].map((k) => (
              <div
                key={k.label}
                className="bg-white rounded-lg p-2.5 border border-[#E9E4D8]"
              >
                <p className="text-[9px] text-[#6B7280] mb-1">{k.label}</p>
                <p
                  className="text-sm font-medium text-[#1B4332]"
                  style={{ fontFamily: "JetBrains Mono, monospace" }}
                >
                  {k.value}
                </p>
              </div>
            ))}
          </div>

          {/* Day headers */}
          <div className="flex gap-1 ml-[60px] mb-1">
            {DAYS.map((d) => (
              <div
                key={d}
                className="flex-1 text-center text-[9px] text-[#6B7280]"
                style={{ fontFamily: "JetBrains Mono, monospace" }}
              >
                {d}
              </div>
            ))}
          </div>

          {/* Planning grid */}
          <div className="flex flex-col gap-1">
            {rooms.map((room) => (
              <div key={room.name} className="flex gap-1 items-center">
                <div className="w-[60px] text-[9px] text-[#6B7280] shrink-0 truncate">
                  {room.name}
                </div>
                <div className="flex gap-1 flex-1">
                  {room.pattern.map((d, i) => {
                    const s = STATUS[d as keyof typeof STATUS];
                    return (
                      <div
                        key={i}
                        className={`flex-1 h-5 rounded-sm flex items-center justify-center text-[8px] font-medium transition-all duration-500 ${s.bg} ${
                          d === 1 ? "text-[#D4F1E4]" : d === 2 ? "text-[#92400E]" : "text-[#888]"
                        }`}
                      >
                        {s.text}
                      </div>
                    );
                  })}
                </div>
              </div>
            ))}
          </div>

          {/* Legend */}
          <div className="flex gap-3 mt-3 flex-wrap">
            {[
              { color: "bg-[#1B4332]", label: "Confirmé" },
              { color: "bg-[#FDE68A] border border-[#D97706]", label: "En attente" },
              { color: "bg-[#D3D1C7]", label: "Check-out" },
            ].map((l) => (
              <div key={l.label} className="flex items-center gap-1.5">
                <div className={`w-2.5 h-2.5 rounded-sm ${l.color}`} />
                <span className="text-[9px] text-[#6B7280]">{l.label}</span>
              </div>
            ))}
          </div>
        </div>
      </div>
    </section>
  );
}
