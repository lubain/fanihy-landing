const PLANS = [
  {
    name: "Débutant",
    price: "89 000",
    period: "Ar / mois",
    sub: "jusqu'à 5 chambres",
    featured: false,
    features: [
      "Planning réservations",
      "Confirmations SMS",
      "Paiements Orange Money",
      "1 utilisateur",
      "Support par email",
    ],
    cta: "Commencer",
  },
  {
    name: "Professionnel",
    price: "189 000",
    period: "Ar / mois",
    sub: "jusqu'à 20 chambres",
    featured: true,
    badge: "Le plus choisi",
    features: [
      "Tout du plan Débutant",
      "Sync Booking.com & Airbnb",
      "MVola + carte bancaire",
      "Rapports avancés",
      "5 utilisateurs",
    ],
    cta: "Commencer ↗",
  },
  {
    name: "Opérateur",
    price: "Sur devis",
    period: "",
    sub: "Plusieurs établissements",
    featured: false,
    features: [
      "Gestion multi-sites",
      "API partenaires tours",
      "Intégration comptable",
      "Utilisateurs illimités",
      "Accompagnement dédié",
    ],
    cta: "Nous contacter ↗",
  },
];

export default function Pricing() {
  return (
    <section id="tarifs" className="py-20 px-6 bg-[#F5EDD6]">
      <div className="max-w-5xl mx-auto">
        <div className="text-center mb-12">
          <p className="text-xs font-medium tracking-widest uppercase text-[#D97706] mb-3">
            Tarification
          </p>
          <h2
            className="text-3xl md:text-4xl text-[#1B4332]"
            style={{ fontFamily: "DM Serif Display, Georgia, serif" }}
          >
            Simple. Transparent. En ariary.
          </h2>
        </div>

        <div className="grid md:grid-cols-3 gap-5">
          {PLANS.map((plan) => (
            <div
              key={plan.name}
              className={`rounded-2xl p-6 flex flex-col bg-white ${
                plan.featured
                  ? "border-2 border-[#1B4332] shadow-lg"
                  : "border border-[#E9E4D8]"
              }`}
            >
              {plan.badge && (
                <span className="self-start text-[10px] font-medium bg-[#1B4332] text-[#D4F1E4] px-3 py-1 rounded-full mb-3">
                  {plan.badge}
                </span>
              )}

              <p className="text-sm text-[#6B7280] mb-1">{plan.name}</p>
              <p
                className="text-3xl font-medium text-[#1C1C1C] mb-0.5"
                style={{ fontFamily: "JetBrains Mono, monospace" }}
              >
                {plan.price}
              </p>
              {plan.period && (
                <p className="text-xs text-[#6B7280] mb-1">{plan.period}</p>
              )}
              <p className="text-xs text-[#6B7280] mb-5">{plan.sub}</p>

              <div className="h-px bg-[#E9E4D8] mb-5" />

              <ul className="flex flex-col gap-2.5 flex-1 mb-6">
                {plan.features.map((f) => (
                  <li key={f} className="flex items-start gap-2 text-sm text-[#1C1C1C]">
                    <span className="text-[#1B4332] mt-0.5 shrink-0">✓</span>
                    {f}
                  </li>
                ))}
              </ul>

              <button
                className={`w-full py-2.5 rounded-xl text-sm font-medium transition-colors ${
                  plan.featured
                    ? "bg-[#1B4332] text-[#D4F1E4] hover:bg-[#2D6A4F]"
                    : "border border-[#1B4332] text-[#1B4332] hover:bg-[#EAF3DE]"
                }`}
              >
                {plan.cta}
              </button>
            </div>
          ))}
        </div>

        <p className="text-center text-xs text-[#6B7280] mt-6">
          Essai gratuit 30 jours · Sans engagement · Annulation à tout moment
        </p>
      </div>
    </section>
  );
}
