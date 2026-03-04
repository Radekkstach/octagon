import React, { useState, useEffect } from "react";
import solarium from "../../assets/solarium.jpg";
import kruhac from "../../assets/kruhac.jpg";

const Programs = () => {
  const [activeModal, setActiveModal] = useState(null);

  // VYLEPŠENO: Zablokování scrollování hlavní stránky (BODY i HTML)
  useEffect(() => {
    if (activeModal) {
      document.body.style.overflow = "hidden";
      document.documentElement.style.overflow = "hidden"; // Přidáno uzamčení HTML
    } else {
      document.body.style.overflow = "unset";
      document.documentElement.style.overflow = "unset";
    }

    return () => {
      document.body.style.overflow = "unset";
      document.documentElement.style.overflow = "unset";
    };
  }, [activeModal]);

  return (
    <section
      id="programs"
      className="bg-gym-base py-24 relative border-t border-white/5"
    >
      <div className="max-w-7xl mx-auto px-6">
        {/* NADPIS SEKCE */}
        <div className="text-center mb-16">
          <span className="text-brand-red font-heading font-bold uppercase tracking-widest text-sm">
            Speciality
          </span>
          <h2 className="text-4xl md:text-6xl font-heading font-bold text-white uppercase mt-2">
            Makačka &{" "}
            <span className="text-transparent bg-clip-text bg-gradient-to-r from-brand-red to-white">
              Relax
            </span>
          </h2>
        </div>

        <div className="grid lg:grid-cols-2 gap-8">
          {/* 1. KARTA - KRUHÁČE */}
          <div
            className="relative group overflow-hidden rounded-sm h-[500px] border border-white/10 hover:border-brand-red transition-all duration-500 cursor-pointer"
            onClick={() => setActiveModal("circuit")}
          >
            <div
              className="absolute inset-0 bg-cover bg-center transition-transform duration-700 group-hover:scale-110"
              style={{ backgroundImage: `url(${kruhac})` }}
            ></div>
            <div className="absolute inset-0 bg-gradient-to-t from-black via-black/60 to-transparent opacity-90"></div>

            <div className="absolute bottom-0 left-0 p-8 w-full">
              <div className="flex items-center gap-3 mb-4">
                <span className="bg-brand-red text-white text-xs font-bold px-2 py-1 uppercase rounded-sm">
                  Kapacita 10 osob
                </span>
                <span className="text-gray-400 text-xs uppercase tracking-wider">
                  Coach: Lenka Foltýnová
                </span>
              </div>

              <h3 className="text-3xl md:text-4xl font-heading font-bold text-white uppercase mb-4">
                Kruhové Tréninky
              </h3>

              <p className="text-gray-300 font-body text-sm mb-6 max-w-md line-clamp-3">
                Intenzivní trénink s Tabatou a HIITem. Hudba, pot a skvělá
                parta. Vykroč ze své komfortní zóny.
              </p>

              <button className="flex items-center gap-2 text-brand-red font-bold uppercase tracking-wider text-sm group-hover:text-white transition-colors">
                Rozvrh & Detaily <span className="text-xl">→</span>
              </button>
            </div>
          </div>

          {/* 2. KARTA - SOLÁRIUM */}
          <div
            className="relative group overflow-hidden rounded-sm h-[500px] border border-white/10 hover:border-orange-500 transition-all duration-500 cursor-pointer"
            onClick={() => setActiveModal("solarium")}
          >
            <div
              className="absolute inset-0 bg-cover bg-center transition-transform duration-700 group-hover:scale-110"
              style={{ backgroundImage: `url(${solarium})` }}
            ></div>
            <div className="absolute inset-0 bg-gradient-to-t from-black via-black/60 to-orange-900/20 opacity-90"></div>

            <div className="absolute bottom-0 left-0 p-8 w-full">
              <div className="flex items-center gap-3 mb-4">
                <span className="bg-orange-500 text-white text-xs font-bold px-2 py-1 uppercase rounded-sm">
                  Ergoline 800
                </span>
                <span className="text-gray-400 text-xs uppercase tracking-wider">
                  Turbo Power
                </span>
              </div>

              <h3 className="text-3xl md:text-4xl font-heading font-bold text-white uppercase mb-4">
                Solárium & <br /> Kosmetika
              </h3>

              <p className="text-gray-300 font-body text-sm mb-6 max-w-md line-clamp-3">
                Doplň Vitamin D a získej perfektní barvu. Špičkový stroj s
                klimatizací, aroma a 3D zvukem.
              </p>

              <button className="flex items-center gap-2 text-orange-500 font-bold uppercase tracking-wider text-sm group-hover:text-white transition-colors">
                Ceník & Typy <span className="text-xl">→</span>
              </button>
            </div>
          </div>
        </div>
      </div>

      {/* ================= MODALS ================= */}

      {/* 1. MODAL - KRUHÁČE */}
      {activeModal === "circuit" && (
        <div className="fixed inset-0 z-[2000] flex items-center justify-center p-4">
          {/* Backdrop */}
          <div
            className="absolute inset-0 bg-black/95 backdrop-blur-md"
            onClick={() => setActiveModal(null)}
          ></div>

          {/* Content Card - VYLEPŠENO: přidáno overscroll-contain */}
          <div className="bg-[#111] border border-white/10 w-full max-w-3xl rounded-sm relative shadow-2xl animate-fadeIn z-10 max-h-[90vh] overflow-y-auto overscroll-contain custom-scrollbar">
            <button
              onClick={() => setActiveModal(null)}
              className="sticky top-4 right-4 float-right z-50 text-gray-400 hover:text-white bg-black/50 rounded-full p-2 transition-colors"
            >
              <svg
                className="w-6 h-6"
                fill="none"
                stroke="currentColor"
                viewBox="0 0 24 24"
              >
                <path
                  strokeLinecap="round"
                  strokeLinejoin="round"
                  strokeWidth="2"
                  d="M6 18L18 6M6 6l12 12"
                ></path>
              </svg>
            </button>

            <div className="p-6 md:p-12">
              <h3 className="text-3xl font-heading font-bold text-white uppercase mb-2">
                Kruhový Trénink
              </h3>
              <p className="text-brand-red font-bold uppercase tracking-wider text-sm mb-8">
                Vede: Lenka Foltýnová
              </p>

              {/* Zbytek obsahu modálu zůstává stejný... */}
              <div className="grid md:grid-cols-2 gap-12 mb-10">
                <div className="bg-white/5 p-6 rounded-sm">
                  <h4 className="text-xl font-heading font-bold text-white uppercase mb-4">
                    Ceník
                  </h4>
                  <div className="space-y-4">
                    <div className="flex justify-between border-b border-white/10 pb-2">
                      <span className="text-gray-300">Jednorázový vstup</span>
                      <span className="text-white font-bold">120 Kč</span>
                    </div>
                    <div className="flex justify-between border-b border-white/10 pb-2">
                      <span className="text-gray-300">Permice (10 vstupů)</span>
                      <span className="text-brand-red font-bold">1 150 Kč</span>
                    </div>
                  </div>
                  <p className="text-xs text-gray-500 mt-4">
                    * Max. kapacita 10 lidí. Nutná rezervace.
                  </p>
                </div>

                <div>
                  <h4 className="text-xl font-heading font-bold text-white uppercase mb-4">
                    Rezervace
                  </h4>
                  <ul className="space-y-3 text-gray-300 text-sm">
                    <li className="flex items-center gap-3">
                      <span className="text-brand-red font-bold">📞</span>{" "}
                      <a href="tel:+420774347023" className="hover:text-white">
                        +420 774 347 023
                      </a>
                    </li>
                    <li className="flex items-center gap-3">
                      <span className="text-brand-red font-bold">✉️</span>{" "}
                      <a
                        href="mailto:shopoctagon@gmail.com"
                        className="hover:text-white"
                      >
                        shopoctagon@gmail.com
                      </a>
                    </li>
                    <li className="flex items-center gap-3">
                      <span className="text-brand-red font-bold">f</span>{" "}
                      <a
                        href="https://www.facebook.com/KRUHACEoctagon/?locale=cs_CZ"
                        target="_blank"
                        rel="noreferrer"
                        className="hover:text-white"
                      >
                        FB: Octagon CZ
                      </a>
                    </li>
                  </ul>
                </div>
              </div>

              <div className="space-y-6 text-gray-400 font-body leading-relaxed">
                <p>
                  <strong className="text-white">Proč zvolit kruháč?</strong>
                  <br />
                  Kruhový trénink s tabatou a HIITem je skvělý jak pro úplné
                  začátečníky, tak pro sportovce. V doprovodu hudby procvičíte
                  všechny svalové partie na různém nářadí s prvky kardia.
                </p>
                <p>
                  Lidé ve skupině Vás často donutí podávat lepší výkony,
                  zažijete legraci a určitě se objeví více než jedna kapka potu
                  a červené tváře. 🥵
                </p>
                <div className="bg-brand-red/10 border-l-4 border-brand-red p-4 italic text-gray-300">
                  "Pokud máte obavy, že nikoho neznáte, nebojte se. Po jednom
                  tréninku je poznáte. Vykročte ze své komfortní zóny!"
                </div>
              </div>
            </div>
          </div>
        </div>
      )}

      {/* 2. MODAL - SOLÁRIUM */}
      {activeModal === "solarium" && (
        <div className="fixed inset-0 z-[2000] flex items-center justify-center p-4">
          {/* Backdrop */}
          <div
            className="absolute inset-0 bg-black/95 backdrop-blur-md"
            onClick={() => setActiveModal(null)}
          ></div>

          {/* Content Card - VYLEPŠENO: přidáno overscroll-contain */}
          <div className="bg-[#111] border border-white/10 w-full max-w-4xl rounded-sm relative shadow-2xl animate-fadeIn z-10 max-h-[90vh] overflow-y-auto overscroll-contain custom-scrollbar">
            <button
              onClick={() => setActiveModal(null)}
              className="sticky top-4 right-4 float-right z-50 text-gray-400 hover:text-white bg-black/50 rounded-full p-2 transition-colors"
            >
              <svg
                className="w-6 h-6"
                fill="none"
                stroke="currentColor"
                viewBox="0 0 24 24"
              >
                <path
                  strokeLinecap="round"
                  strokeLinejoin="round"
                  strokeWidth="2"
                  d="M6 18L18 6M6 6l12 12"
                ></path>
              </svg>
            </button>

            <div className="p-6 md:p-12">
              <div className="flex flex-col md:flex-row justify-between items-start gap-4 mb-8">
                <div>
                  <h3 className="text-3xl font-heading font-bold text-white uppercase mb-2">
                    Ergoline Excellence 800
                  </h3>
                  <p className="text-orange-500 font-bold uppercase tracking-wider text-sm">
                    Turbo Power Solárium
                  </p>
                </div>
                <div className="bg-orange-500/10 border border-orange-500/30 px-4 py-2 rounded-full">
                  <span className="text-orange-500 font-bold text-sm">
                    Od 11 Kč / min
                  </span>
                </div>
              </div>

              {/* Zbytek obsahu zůstává stejný... */}
              <div className="grid md:grid-cols-3 gap-4 mb-10 text-center">
                <div className="bg-white/5 p-4 rounded-sm border border-white/5">
                  <div className="text-gray-400 text-xs uppercase mb-1">
                    Jednorázově
                  </div>
                  <div className="text-2xl font-bold text-white">13 Kč</div>
                  <div className="text-xs text-gray-500">/ minuta</div>
                </div>
                <div className="bg-white/5 p-4 rounded-sm border border-white/5 relative overflow-hidden">
                  <div className="absolute top-0 right-0 bg-orange-500 w-3 h-3 rounded-bl-full"></div>
                  <div className="text-gray-400 text-xs uppercase mb-1">
                    10 Vstupů
                  </div>
                  <div className="text-2xl font-bold text-white text-orange-400">
                    12 Kč
                  </div>
                  <div className="text-xs text-gray-500">/ minuta</div>
                </div>
                <div className="bg-white/5 p-4 rounded-sm border border-white/5 relative overflow-hidden">
                  <div className="absolute top-0 right-0 bg-brand-red w-3 h-3 rounded-bl-full"></div>
                  <div className="text-gray-400 text-xs uppercase mb-1">
                    20 Vstupů
                  </div>
                  <div className="text-2xl font-bold text-white text-brand-red">
                    11 Kč
                  </div>
                  <div className="text-xs text-gray-500">/ minuta</div>
                </div>
              </div>

              <div className="grid md:grid-cols-2 gap-12 mb-10">
                <div>
                  <h4 className="text-lg font-heading font-bold text-white uppercase mb-4 border-b border-white/10 pb-2">
                    Technologie
                  </h4>
                  <ul className="space-y-2 text-sm text-gray-400">
                    <li className="flex items-start gap-2">
                      <span className="text-orange-500">✓</span> 51 x 160W Turbo
                      Power Trubice
                    </li>
                    <li className="flex items-start gap-2">
                      <span className="text-orange-500">✓</span> 4x 520W Ultra
                      VIT Max (Obličej)
                    </li>
                    <li className="flex items-start gap-2">
                      <span className="text-orange-500">✓</span> Opalovače šíje
                      a ramen
                    </li>
                    <li className="flex items-start gap-2">
                      <span className="text-orange-500">✓</span> Climatronic &
                      Aqua Fresh (Chlazení)
                    </li>
                    <li className="flex items-start gap-2">
                      <span className="text-orange-500">✓</span> 3D Stereo Sound
                    </li>
                  </ul>
                </div>

                <div>
                  <h4 className="text-lg font-heading font-bold text-white uppercase mb-4 border-b border-white/10 pb-2">
                    Kosmetika na baru
                  </h4>
                  <ul className="space-y-3 text-sm">
                    <li className="flex justify-between">
                      <span className="text-gray-400">
                        BROWN Super black (15ml)
                      </span>
                      <span className="text-white font-bold">39 Kč</span>
                    </li>
                    <li className="flex justify-between">
                      <span className="text-gray-400">
                        BROWN Intensity (125ml)
                      </span>
                      <span className="text-white font-bold">215 Kč</span>
                    </li>
                    <li className="flex justify-between">
                      <span className="text-gray-400">
                        SECRET RESERVE (400ml)
                      </span>
                      <span className="text-white font-bold">1 090 Kč</span>
                    </li>
                  </ul>
                </div>
              </div>

              <div className="bg-[#1a1a1a] p-6 rounded-sm text-sm text-gray-400">
                <h4 className="text-white font-bold uppercase mb-2">
                  Jak se opalovat?
                </h4>
                <ul className="list-disc list-inside space-y-1">
                  <li>Určete typ kůže a citlivost.</li>
                  <li>
                    Začněte pomalu (cca 5 min), postupně zvyšujte (+2 min).
                  </li>
                  <li>Používejte kvalitní solární kosmetiku pro hydrataci.</li>
                  <li>Vitamín D je bonus pro vaši imunitu! ☀️</li>
                </ul>
              </div>
            </div>
          </div>
        </div>
      )}
    </section>
  );
};

export default Programs;
