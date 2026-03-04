import React from "react";

// IMPORT TVÝCH FOTEK
import magdalenaImg from "../../assets/magdalena.jpg";
import lenkaImg from "../../assets/lenka.jpg";
import jaroslavaImg from "../../assets/jaroslava.jpg";

const trainers = [
  {
    id: 1,
    name: "Bc. Magdalena Krejčí",
    role: "Certifikovaný fitness trenér",
    specialization: "Regenerace, výživa & kondiční trénink",
    description:
      "Bakalářské studium Regenerace a výživy ve sportu. Pokračující studium Kondičního tréninku na MU v Brně.",
    contact: "+420 774 998 780",
    img: magdalenaImg,
  },
  {
    id: 2,
    name: "Mgr. Lenka Foltýnová",
    role: "Certifikovaný fitness trenér",
    specialization: "Vedení osobních tréninků",
    description:
      "Absolventka Karlovy Univerzity (FTVS) s hlubokými znalostmi v oblasti pohybu a metodiky tréninku.",
    contact: "+420 774 347 023",
    img: lenkaImg,
  },
  {
    id: 3,
    name: "MgA. Jaroslava Dejlová",
    role: "Certifikovaný fitness trenér 3DFA",
    specialization: "Osobní tréninky & plány na míru",
    description:
      "Specializace na individuální přístup a tvorbu efektivních tréninkových plánů podle cílů klienta.",
    contact: "+420 725 212 623",
    img: jaroslavaImg,
  },
];

const Trainers = () => {
  return (
    <section id="team" className="bg-gym-base py-24 px-6">
      <div className="max-w-7xl mx-auto">
        <div className="text-center mb-16">
          <span className="text-brand-red font-heading font-bold uppercase tracking-widest text-sm">
            Naši trenéři
          </span>
          <h2 className="text-4xl md:text-6xl font-heading font-bold text-white uppercase mt-2">
            Tým{" "}
            <span className="text-transparent bg-clip-text bg-gradient-to-r from-brand-red to-white text-stroke-sm">
              Octagon
            </span>
          </h2>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-3 gap-10">
          {trainers.map((trainer) => (
            <div key={trainer.id} className="group relative">
              {/* Foto Container */}
              <div className="relative overflow-hidden aspect-[3/4] rounded-sm mb-6 border border-white/5 group-hover:border-brand-red transition-colors duration-500">
                <img
                  src={trainer.img}
                  alt={trainer.name}
                  className="w-full h-full object-cover transition-all duration-700 grayscale-0 md:grayscale md:group-hover:grayscale-0 md:group-hover:scale-105"
                />
                <div className="absolute inset-0 bg-gradient-to-t from-black via-transparent to-transparent opacity-60"></div>
              </div>

              {/* Info */}
              <div className="space-y-3">
                <h3 className="text-2xl font-heading font-bold text-white uppercase tracking-tight">
                  {trainer.name}
                </h3>
                <div className="inline-block bg-brand-red/10 border border-brand-red/20 px-3 py-1 text-[10px] uppercase font-bold text-brand-red tracking-widest">
                  {trainer.role}
                </div>
                <p className="text-gray-400 text-sm font-body leading-relaxed line-clamp-3 group-hover:text-gray-200 transition-colors">
                  {trainer.description}
                </p>

                <div className="pt-4 flex flex-col gap-1 border-t border-white/5">
                  <span className="text-[10px] text-gray-500 uppercase font-bold tracking-widest">
                    Kontakt
                  </span>
                  <a
                    href={`tel:${trainer.contact.replace(/\s/g, "")}`}
                    className="text-white font-heading font-bold hover:text-brand-red transition-colors"
                  >
                    {trainer.contact}
                  </a>
                </div>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default Trainers;
