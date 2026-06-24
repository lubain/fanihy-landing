const TESTIMONIALS = [
  {
    quote:
      "Avant, je gérais tout dans un cahier. Maintenant mes réservations Airbnb et Booking arrivent directement dans le planning. Je ne rate plus aucune arrivée.",
    name: "Ravo Rakoto",
    role: "Lodge Allée des Baobabs, Morondava",
    initials: "RR",
    color: "bg-[#EAF3DE] text-[#27500A]",
    stars: 5,
  },
  {
    quote:
      "Le paiement MVola intégré a tout changé. Les clients règlent depuis leur téléphone, je reçois la confirmation immédiatement. Fini les allers-retours.",
    name: "Soa Nirina",
    role: "Hôtel Ylang-Ylang, Nosy Be",
    initials: "SN",
    color: "bg-[#FDE68A] text-[#92400E]",
    stars: 5,
  },
  {
    quote:
      "Le rapport mensuel PDF me permet d'envoyer un bilan à mon comptable en un clic. J'ai enfin une vision claire de mon activité sur l'année.",
    name: "Lova Rasolofo",
    role: "Écolodge Ranomafana",
    initials: "LR",
    color: "bg-[#E1F5EE] text-[#085041]",
    stars: 5,
  },
  {
    quote:
      "Fanihy parle malgache. C'est bête à dire mais c'est ce qui a tout changé pour mon équipe. Ils utilisent l'outil sans formation.",
    name: "Hery Andriamisa",
    role: "Bungalows Sainte-Marie",
    initials: "HA",
    color: "bg-[#E6F1FB] text-[#0C447C]",
    stars: 5,
  },
];

export default function Testimonials() {
  return (
    <section id="temoignages" className="py-20 px-6">
      <div className="max-w-5xl mx-auto">
        <div className="text-center mb-12">
          <p className="text-xs font-medium tracking-widest uppercase text-[#D97706] mb-3">
            Ils utilisent Fanihy
          </p>
          <h2
            className="text-3xl md:text-4xl text-[#1B4332]"
            style={{ fontFamily: "DM Serif Display, Georgia, serif" }}
          >
            Des opérateurs malgaches qui gèrent mieux
          </h2>
        </div>

        <div className="grid md:grid-cols-2 gap-5">
          {TESTIMONIALS.map((t) => (
            <div
              key={t.name}
              className="bg-white border border-[#E9E4D8] rounded-2xl p-6 hover:shadow-md transition-shadow"
            >
              {/* Stars */}
              <div className="flex gap-0.5 mb-4" aria-label={`${t.stars} étoiles sur 5`}>
                {Array.from({ length: t.stars }).map((_, i) => (
                  <span key={i} className="text-[#D97706] text-sm" aria-hidden="true">
                    ★
                  </span>
                ))}
              </div>

              {/* Quote */}
              <blockquote
                className="text-base leading-relaxed text-[#1B4332] mb-5 italic"
                style={{ fontFamily: "DM Serif Display, Georgia, serif" }}
              >
                "{t.quote}"
              </blockquote>

              {/* Author */}
              <div className="flex items-center gap-3">
                <div
                  className={`w-9 h-9 rounded-full flex items-center justify-center text-xs font-medium shrink-0 ${t.color}`}
                  aria-hidden="true"
                >
                  {t.initials}
                </div>
                <div>
                  <p className="text-sm font-medium">{t.name}</p>
                  <p className="text-xs text-[#6B7280]">{t.role}</p>
                </div>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
