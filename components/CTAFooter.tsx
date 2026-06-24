const FOOTER_LINKS = {
  Produit: ["Fonctionnalités", "Tarifs", "Application mobile", "Intégrations"],
  Ressources: ["Documentation", "Guide de démarrage", "Support", "Blog tourisme"],
  Entreprise: ["À propos", "Partenaires", "Mentions légales", "Confidentialité"],
};

export default function CTAFooter() {
  return (
    <>
      {/* CTA band */}
      <section
        id="essai"
        className="bg-[#1B4332] py-20 px-6 text-center"
      >
        <p
          className="text-3xl md:text-4xl text-[#D4F1E4] mb-3"
          style={{ fontFamily: "DM Serif Display, Georgia, serif" }}
        >
          Prêt à digitaliser votre lodge ?
        </p>
        <p className="text-[#9DC8B5] text-base mb-8 max-w-md mx-auto">
          Essai gratuit 30 jours · Sans engagement · Support en malgache
        </p>

        <div className="flex flex-wrap gap-3 justify-center">
          <button className="bg-[#F5EDD6] text-[#1B4332] text-sm font-medium px-7 py-3 rounded-xl hover:bg-[#EDE4C8] transition-colors">
            Démarrer gratuitement ↗
          </button>
          <button className="border border-white/30 text-[#D4F1E4] text-sm font-medium px-7 py-3 rounded-xl hover:bg-white/10 transition-colors">
            Demander une démo
          </button>
        </div>

        {/* Social proof */}
        <div className="mt-10 flex flex-wrap justify-center gap-6 text-sm text-[#9DC8B5]">
          <span>🏨 50+ lodges actifs</span>
          <span>⭐ 4,9 / 5 de satisfaction</span>
          <span>🇲🇬 Équipe à Antananarivo</span>
        </div>
      </section>

      {/* Footer */}
      <footer className="bg-[#1C1C1C] text-[#9DC8B5] px-6 pt-14 pb-8">
        <div className="max-w-5xl mx-auto">
          <div className="grid grid-cols-2 md:grid-cols-4 gap-8 mb-12">
            {/* Brand */}
            <div className="col-span-2 md:col-span-1">
              <p
                className="text-xl font-medium text-white mb-3"
                style={{ fontFamily: "DM Serif Display, Georgia, serif" }}
              >
                Fanihy<span className="text-[#D97706]">.</span>
              </p>
              <p className="text-sm leading-relaxed text-[#6B7280]">
                L'outil de gestion touristique conçu pour Madagascar.
              </p>
              <div className="flex gap-3 mt-4">
                {["Facebook", "WhatsApp", "LinkedIn"].map((s) => (
                  <a
                    key={s}
                    href="#"
                    className="text-xs text-[#6B7280] hover:text-white transition-colors"
                  >
                    {s}
                  </a>
                ))}
              </div>
            </div>

            {/* Links */}
            {Object.entries(FOOTER_LINKS).map(([category, links]) => (
              <div key={category}>
                <p className="text-xs font-medium tracking-widest uppercase text-[#6B7280] mb-4">
                  {category}
                </p>
                <ul className="flex flex-col gap-2">
                  {links.map((link) => (
                    <li key={link}>
                      <a
                        href="#"
                        className="text-sm text-[#9DC8B5] hover:text-white transition-colors"
                      >
                        {link}
                      </a>
                    </li>
                  ))}
                </ul>
              </div>
            ))}
          </div>

          <div className="border-t border-white/10 pt-6 flex flex-wrap justify-between gap-4 text-xs text-[#6B7280]">
            <p>© 2025 Fanihy · Antananarivo, Madagascar</p>
            <p>Tourisme & Réservations SaaS · 🇲🇬</p>
          </div>
        </div>
      </footer>
    </>
  );
}
