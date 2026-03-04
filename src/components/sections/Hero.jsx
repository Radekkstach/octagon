import React, { useLayoutEffect, useRef } from "react";
import gsap from "gsap";
import { ScrollTrigger } from "gsap/ScrollTrigger";
import heroImage from "../../assets/octagonhero.jpg";
// ⚠️ ZKONTROLUJ SI CESTU K LOGU (nebo .png)
import logo from "../../assets/logotransparent.png";

gsap.registerPlugin(ScrollTrigger);

const Hero = () => {
  const containerRef = useRef(null);
  const imageRef = useRef(null);

  useLayoutEffect(() => {
    let mm = gsap.matchMedia();

    let ctx = gsap.context(() => {
      // 1. ROTACE LOGA (WATERMARK) - Běží všude
      // Velmi pomalá rotace (120s), lineární, nekonečná

      // 2. PARALLAX - Pouze Desktop (nad 768px)
      mm.add("(min-width: 768px)", () => {
        if (imageRef.current) {
          gsap.to(imageRef.current, {
            yPercent: 20,
            ease: "none",
            scrollTrigger: {
              trigger: containerRef.current,
              start: "top top",
              end: "bottom top",
              scrub: true,
            },
          });
        }
      });

      // 3. TEXTY A TLAČÍTKA
      const tl = gsap.timeline({ delay: 0.2 });

      tl.from(".hero-text", {
        y: 30,
        opacity: 0,
        duration: 1,
        stagger: 0.2,
        ease: "power3.out",
        clearProps: "all",
      }).from(
        ".hero-btn",
        {
          y: 20,
          opacity: 0,
          duration: 0.8,
          stagger: 0.1,
          ease: "power3.out",
          clearProps: "all",
        },
        "-=0.9", // Tlačítka vyjíždí skoro hned s textem
      );
    }, containerRef);

    return () => ctx.revert();
  }, []);

  return (
    <section
      ref={containerRef}
      className="relative h-[100dvh] w-full overflow-hidden flex items-center justify-center bg-gray-900"
    >
      {/* --- POZADÍ A WATERMARK --- */}
      <div className="absolute inset-0 z-0">
        {/* Hlavní fotka - PŘIDÁNO: will-change-transform pro plynulejší GSAP Parallax */}
        <div
          ref={imageRef}
          className="absolute inset-0 bg-cover bg-center w-full h-full scale-110 will-change-transform"
          style={{ backgroundImage: `url(${heroImage})` }}
        ></div>

        {/* Černý překryv */}
        <div className="absolute inset-0 bg-black/50 z-10"></div>

        {/* --- NOVINKA: WATERMARK LOGO --- */}
        {/* ODEBRÁNO: mix-blend-overlay a blur-[1px] - To byl největší zabiják výkonu! */}
        <div className="absolute inset-0 z-10 flex items-center justify-center overflow-hidden pointer-events-none">
          <img
            src={logo}
            alt="Watermark"
            className="hero-watermark w-[80vw] md:w-[600px] opacity-[0.08] md:opacity-[0.15]"
          />
        </div>

        {/* Gradient dole */}
        <div className="absolute bottom-0 left-0 w-full h-32 md:h-32 bg-gradient-to-t from-gym-base to-transparent z-10"></div>
      </div>

      {/* --- OBSAH --- */}
      {/* Vracím pt-32, aby to na mobilu nelezlo pod menu */}
      <div className="relative z-20 container mx-auto px-4 md:px-6 text-center flex flex-col items-center justify-center h-full pt-32 md:pt-0">
        {/* 1. MĚSTO */}
        <span className="hero-text block text-brand-red font-bold tracking-[0.3em] uppercase mb-2 text-xs md:text-base">
          Třebíč
        </span>

        {/* 2. HLAVNÍ NADPIS */}
        <h1 className="hero-text text-5xl sm:text-7xl md:text-8xl lg:text-9xl font-heading font-extrabold text-white uppercase tracking-tighter mb-4 md:mb-6">
          OCTAGON{" "}
          <span className="text-transparent bg-clip-text bg-gradient-to-r from-brand-red to-red-600">
            GYM
          </span>
        </h1>

        {/* 3. ODSTAVEC */}
        <p className="hero-text text-gray-200 drop-shadow-sm text-sm sm:text-base md:text-lg max-w-xl mb-8 md:mb-10 font-normal leading-relaxed px-2">
          Nejmodernější gym ve městě. Kruháče, solárko a komunita, která tě
          nenechá padnout.
        </p>

        {/* 4. TLAČÍTKA */}
        <div className="flex flex-col sm:flex-row gap-3 sm:gap-4 w-full sm:w-auto justify-center px-4 sm:px-0">
          <a
            href="#contact"
            className="hero-btn w-full sm:w-auto group bg-brand-red hover:bg-brand-dark text-white font-heading font-bold py-3 md:py-4 px-8 md:px-10 rounded-sm uppercase tracking-wider transition-all duration-300 shadow-lg shadow-brand-red/20 hover:shadow-brand-red/40 hover:-translate-y-1 text-center text-sm md:text-base"
          >
            Chci začít makat
          </a>

          <a
            href="#programs"
            className="hero-btn w-full sm:w-auto group border border-white/30 hover:border-white hover:bg-white/10 text-white font-heading font-bold py-3 md:py-4 px-8 md:px-10 rounded-sm uppercase tracking-wider transition-all duration-300 backdrop-blur-sm flex items-center justify-center gap-2 text-center text-sm md:text-base"
          >
            Co nabízíme
          </a>
        </div>
      </div>
    </section>
  );
};

export default Hero;
