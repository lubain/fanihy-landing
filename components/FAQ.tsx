"use client";

import { useState } from "react";

const FAQS = [
  {
    q: "Faut-il une connexion internet permanente ?",
    a: "Non. Fanihy fonctionne hors-ligne pour le planning et les fiches clients. Les données se synchronisent automatiquement dès que la connexion est rétablie. Idéal pour les lodges en zone rurale.",
  },
  {
    q: "Comment fonctionne l'intégration MVola et Orange Money ?",
    a: "Vos clients reçoivent un lien de paiement par SMS ou WhatsApp. Ils règlent depuis leur téléphone et vous recevez une confirmation instantanée dans Fanihy. Aucune manipulation supplémentaire.",
  },
  {
    q: "Mes données Booking.com sont-elles importées automatiquement ?",
    a: "Oui. La synchronisation iCal avec Booking.com et Airbnb importe toutes vos réservations et bloque automatiquement les disponibilités pour éviter les doublons.",
  },
  {
    q: "Combien de temps pour être opérationnel ?",
    a: "15 minutes en moyenne pour créer votre compte, configurer vos chambres et ajouter vos premières réservations. Un conseiller Fanihy basé à Antananarivo vous appelle sous 24h pour vous accompagner.",
  },
  {
    q: "Peut-on migrer nos réservations existantes ?",
    a: "Oui, notre équipe migre gratuitement vos données existantes (cahier, Excel, ou ancien logiciel) lors de l'onboarding. Cette prestation est incluse dans tous les plans.",
  },
  {
    q: "Que se passe-t-il après les 30 jours d'essai ?",
    a: "Vous choisissez votre plan et renseignez votre mode de paiement. Si vous décidez de ne pas continuer, vos données vous sont envoyées par email en format Excel. Aucune facturation surprise.",
  },
];

export default function FAQ() {
  const [open, setOpen] = useState<number | null>(null);

  return (
    <section className="py-20 px-6 bg-[#F5EDD6]">
      <div className="max-w-2xl mx-auto">
        <div className="text-center mb-12">
          <p className="text-xs font-medium tracking-widest uppercase text-[#D97706] mb-3">
            Questions fréquentes
          </p>
          <h2
            className="text-3xl md:text-4xl text-[#1B4332]"
            style={{ fontFamily: "DM Serif Display, Georgia, serif" }}
          >
            Tout ce que vous voulez savoir
          </h2>
        </div>

        <div className="flex flex-col gap-2">
          {FAQS.map((faq, i) => (
            <div
              key={i}
              className="bg-white border border-[#E9E4D8] rounded-xl overflow-hidden"
            >
              <button
                onClick={() => setOpen(open === i ? null : i)}
                className="w-full flex items-center justify-between px-5 py-4 text-left text-sm font-medium text-[#1C1C1C] hover:bg-[#F5EDD6] transition-colors"
                aria-expanded={open === i}
              >
                <span>{faq.q}</span>
                <span
                  className={`text-[#1B4332] text-lg shrink-0 ml-4 transition-transform duration-200 ${
                    open === i ? "rotate-45" : ""
                  }`}
                  aria-hidden="true"
                >
                  +
                </span>
              </button>
              {open === i && (
                <div className="px-5 pb-4 text-sm text-[#6B7280] leading-relaxed border-t border-[#E9E4D8] pt-4">
                  {faq.a}
                </div>
              )}
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
