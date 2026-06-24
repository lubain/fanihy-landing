import Image from "next/image";

const FEATURES = [
  {
    icon: "/icons/calendar.svg",
    alt: "Icône planning et calendrier de réservations",
    title: "Planning & Réservations",
    desc: "Vue semaine ou mois, disponibilités temps réel, blocage rapide et réservations directes depuis votre site.",
    tags: ["Booking.com sync", "Airbnb sync", "Site direct"],
    accent: true,
  },
  {
    icon: "/icons/payment.svg",
    alt: "Icône paiement et carte bancaire",
    title: "Paiements & Facturation",
    desc: "Acceptez les virements Orange Money, MVola et carte bancaire. Factures en ariary et en euros automatiques.",
    tags: ["Orange Money", "MVola", "Carte bancaire"],
    accent: false,
  },
  {
    icon: "/icons/chat.svg",
    alt: "Icône bulle de message communication client",
    title: "Communication client",
    desc: "Confirmations automatiques par SMS et WhatsApp. Rappels d'arrivée et enquêtes de satisfaction post-séjour.",
    tags: ["SMS automatique", "WhatsApp", "Email"],
    accent: false,
  },
  {
    icon: "/icons/chart.svg",
    alt: "Icône graphique tableau de bord et rapports",
    title: "Tableau de bord & Rapports",
    desc: "Taux d'occupation, revenus par période, nationalités clients, saisons de pointe — tout pour décider.",
    tags: ["Export Excel", "Rapport mensuel", "Statistiques"],
    accent: false,
  },
];

export default function Features() {
  return (
    <section id="fonctionnalites" className="py-20 px-6">
      <div className="max-w-5xl mx-auto">
        <div className="text-center mb-12">
          <p className="text-xs font-medium tracking-widest uppercase text-[#D97706] mb-3">
            Ce que vous gérez aujourd'hui en carnets
          </p>
          <h2
            className="text-3xl md:text-4xl text-[#1B4332]"
            style={{ fontFamily: "DM Serif Display, Georgia, serif" }}
          >
            Tout digitalisé, enfin pensé pour ici
          </h2>
        </div>

        <div className="grid md:grid-cols-2 gap-5">
          {FEATURES.map((f) => (
            <div
              key={f.title}
              className={`rounded-2xl p-6 border transition-shadow hover:shadow-md ${
                f.accent
                  ? "bg-[#1B4332] border-[#1B4332]"
                  : "bg-white border-[#E9E4D8]"
              }`}
            >
              {/* Icon wrapper — white pill on accent card, pale green on others */}
              <div
                className={`inline-flex items-center justify-center w-12 h-12 rounded-xl mb-4 ${
                  f.accent ? "bg-white/15" : "bg-[#EAF3DE]"
                }`}
              >
                <Image
                  src={f.icon}
                  alt={f.alt}
                  width={32}
                  height={32}
                  className={f.accent ? "brightness-[10]" : ""}
                />
              </div>

              <h3
                className={`text-lg font-medium mb-2 ${
                  f.accent ? "text-[#D4F1E4]" : "text-[#1C1C1C]"
                }`}
              >
                {f.title}
              </h3>
              <p
                className={`text-sm leading-relaxed mb-4 ${
                  f.accent ? "text-[#9DC8B5]" : "text-[#6B7280]"
                }`}
              >
                {f.desc}
              </p>

              <div className="flex flex-wrap gap-2">
                {f.tags.map((tag) => (
                  <span
                    key={tag}
                    className={`text-[11px] font-medium px-2.5 py-1 rounded-full border ${
                      f.accent
                        ? "bg-white/10 text-[#D4F1E4] border-white/20"
                        : "bg-[#F5EDD6] text-[#1B4332] border-[#E9E4D8]"
                    }`}
                  >
                    {tag}
                  </span>
                ))}
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
