import Image from "next/image";

const ITEMS = [
  {
    icon: "/icons/mobile.svg",
    alt: "Icône téléphone mobile",
    label: "Application mobile incluse",
  },
  {
    icon: "/icons/offline.svg",
    alt: "Icône mode hors-connexion",
    label: "Fonctionne hors connexion",
  },
  {
    icon: "/icons/language.svg",
    alt: "Icône langue mondiale",
    label: "Malgache · Français · Anglais",
  },
  {
    icon: "/icons/support.svg",
    alt: "Icône support client",
    label: "Support basé à Tana",
  },
];

export default function TrustStrip() {
  return (
    <div className="bg-[#F5EDD6] border-y border-[#E9E4D8] py-3">
      <div className="max-w-5xl mx-auto px-6 flex flex-wrap justify-center gap-x-8 gap-y-2">
        {ITEMS.map((item) => (
          <div
            key={item.label}
            className="flex items-center gap-2 text-sm text-[#1B4332]"
          >
            <Image
              src={item.icon}
              alt={item.alt}
              width={20}
              height={20}
              className="shrink-0"
            />
            {item.label}
          </div>
        ))}
      </div>
    </div>
  );
}
