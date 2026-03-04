import React, { useLayoutEffect, useRef } from "react";
import gsap from "gsap";
import { ScrollTrigger } from "gsap/ScrollTrigger";

gsap.registerPlugin(ScrollTrigger);

const features = [
  {
    title: "Profi Vybavení",
    desc: "Špičkové stroje a volné váhy. Žádné kompromisy, jen čistá biomechanika.", // Zkrátil jsem text pro lepší čitelnost na mobilu
    icon: (
      <svg
        className="w-6 h-6 md:w-8 md:h-8 text-brand-red"
        fill="none"
        stroke="currentColor"
        viewBox="0 0 24 24"
      >
        <path
          strokeLinecap="round"
          strokeLinejoin="round"
          strokeWidth="1.5"
          d="M19 11H5m14 0a2 2 0 012 2v6a2 2 0 01-2 2H5a2 2 0 01-2-2v-6a2 2 0 012-2m14 0V9a2 2 0 00-2-2M5 11V9a2 2 0 012-2m0 0V5a2 2 0 012-2h6a2 2 0 012 2v2M7 7h10"
        ></path>
      </svg>
    ),
  },
  {
    title: "Fight & Funkční Zóna",
    desc: "Octagon klec a pytle. Ideální na zpestření tréninku nebo vypuštění páry.",
    icon: (
      <svg
        className="w-6 h-6 md:w-8 md:h-8 text-brand-red"
        fill="none"
        stroke="currentColor"
        viewBox="0 0 24 24"
      >
        <path
          strokeLinecap="round"
          strokeLinejoin="round"
          strokeWidth="1.5"
          d="M13 10V3L4 14h7v7l9-11h-7z"
        ></path>
      </svg>
    ),
  },
  {
    title: "Komunita",
    desc: "Nejsme korporát. Jsme klub, kde se lidé znají jménem a navzájem se motivují.",
    icon: (
      <svg
        className="w-6 h-6 md:w-8 md:h-8 text-brand-red"
        fill="none"
        stroke="currentColor"
        viewBox="0 0 24 24"
      >
        <path
          strokeLinecap="round"
          strokeLinejoin="round"
          strokeWidth="1.5"
          d="M17 20h5v-2a3 3 0 00-5.356-1.857M17 20H7m10 0v-2c0-.656-.126-1.283-.356-1.857M7 20H2v-2a3 3 0 015.356-1.857M7 20v-2c0-.656.126-1.283.356-1.857m0 0a5.002 5.002 0 019.288 0M15 7a3 3 0 11-6 0 3 3 0 016 0zm6 3a2 2 0 11-4 0 2 2 0 014 0zM7 10a2 2 0 11-4 0 2 2 0 014 0z"
        ></path>
      </svg>
    ),
  },
];

const Concept = () => {
  const comp = useRef(null);
  const marqueeRef = useRef(null);

  useLayoutEffect(() => {
    let ctx = gsap.context(() => {
      // 1. Marquee Animation
      gsap.to(marqueeRef.current, {
        xPercent: -50,
        repeat: -1,
        duration: 20,
        ease: "linear",
      });

      // 2. Reveal Animation
      gsap.from(".concept-reveal", {
        scrollTrigger: {
          trigger: ".concept-section",
          start: "top 85%", // Spouští se trochu dřív, aby na mobilu nebylo prázdno
        },
        y: 30, // Menší posun pro plynulejší pocit na mobilu
        opacity: 0,
        duration: 0.8,
        stagger: 0.15,
        ease: "power3.out",
        clearProps: "all",
      });
    }, comp);
    return () => ctx.revert();
  }, []);

  return (
    <section
      ref={comp}
      className="relative bg-gym-surface concept-section pb-16 md:pb-20 overflow-hidden"
    >
      {/* --- MARQUEE STRIP --- */}
      {/* py-3 na mobilu (menší), py-4 na desktopu */}
      <div className="bg-brand-red py-3 md:py-4 rotate-1 md:rotate-2 scale-105 border-y-2 md:border-y-4 border-black relative z-10 shadow-xl">
        <div className="overflow-hidden whitespace-nowrap flex">
          <div
            ref={marqueeRef}
            className="flex gap-8 items-center text-black font-heading font-bold uppercase tracking-tighter w-max"
          >
            {/* Text je na mobilu menší (text-xl), aby nebyl tak agresivní */}
            {[...Array(3)].map((_, i) => (
              <span key={i} className="text-xl md:text-4xl">
                Train Hard • Fight Easy • Octagon Třebíč • Discipline • Strength
                • Community • No Pain No Gain •{" "}
              </span>
            ))}
          </div>
        </div>
      </div>

      {/* --- CONTENT --- */}
      {/* mt-12 na mobilu (méně místa), px-4 (více obsahu do šířky) */}
      <div className="max-w-7xl mx-auto px-4 md:px-6 mt-12 md:mt-20">
        <div className="flex flex-col lg:flex-row gap-10 md:gap-16 items-start">
          {/* LEVÁ STRANA - Manifesto */}
          <div className="lg:w-1/2 concept-reveal w-full">
            <span className="text-brand-red font-heading font-bold tracking-widest uppercase mb-2 block text-xs md:text-sm">
              O nás
            </span>

            {/* Nadpis optimalizovaný pro mobilní zlomy */}
            <h2 className="text-3xl sm:text-4xl md:text-6xl font-heading font-bold text-white uppercase leading-tight mb-4 md:mb-6">
              Nejsme jen <br />
              další{" "}
              <span className="inline-block text-transparent bg-clip-text bg-gradient-to-r from-brand-red to-orange-600">
                fitko.
              </span>
            </h2>

            <p className="text-gray-400 font-body text-base md:text-lg leading-relaxed mb-8">
              Octagon Gym je moderní posilovna v Třebíči. Zakládáme si na
              špičkovém vybavení a atmosféře, kde se maká na 100 %. Ať už jsi
              kulturista, trojbojař nebo si chceš jen zlepšit kondici, tady
              najdeš vše.
            </p>

            {/* Statistiky - na mobilu menší mezery */}
            <div className="flex gap-6 md:gap-8 border-t border-white/10 pt-6 md:pt-8">
              <div>
                <span className="block text-2xl md:text-3xl font-heading font-bold text-white">
                  500m²
                </span>
                <span className="text-xs md:text-sm text-gray-500 uppercase font-bold tracking-wider">
                  Plochy
                </span>
              </div>
              <div>
                <span className="block text-2xl md:text-3xl font-heading font-bold text-white">
                  50+
                </span>
                <span className="text-xs md:text-sm text-gray-500 uppercase font-bold tracking-wider">
                  Strojů
                </span>
              </div>
            </div>
          </div>

          {/* PRAVÁ STRANA - Features Grid */}
          <div className="lg:w-1/2 grid grid-cols-1 gap-4 md:gap-6 w-full">
            {features.map((feature, index) => (
              <div
                key={index}
                // p-4 na mobilu, p-6 na desktopu
                className="concept-reveal bg-gym-base/50 p-4 md:p-6 rounded-sm border border-white/5 hover:border-brand-red/50 transition-colors duration-300 group"
              >
                <div className="flex items-start gap-4">
                  {/* Ikonka se nesmrskne (shrink-0) a je menší na mobilu */}
                  <div className="shrink-0 p-2 md:p-3 bg-gym-highlight rounded-sm group-hover:bg-brand-red group-hover:text-white transition-colors duration-300">
                    {feature.icon}
                  </div>
                  <div>
                    <h3 className="text-lg md:text-xl font-heading font-bold text-white uppercase mb-1 md:mb-2 group-hover:text-brand-red transition-colors">
                      {feature.title}
                    </h3>
                    <p className="text-gray-400 text-xs md:text-sm font-body leading-relaxed">
                      {feature.desc}
                    </p>
                  </div>
                </div>
              </div>
            ))}
          </div>
        </div>
      </div>
    </section>
  );
};

export default Concept;
