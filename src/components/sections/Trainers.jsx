import React, { useState, useEffect } from "react";
import { supabase } from "../../supabase";

const Trainers = () => {
  const [trainers, setTrainers] = useState([]);
  const [currentIndex, setCurrentIndex] = useState(0);

  useEffect(() => {
    const fetchTrainers = async () => {
      const { data, error } = await supabase
        .from("trainers")
        .select("*")
        .order("created_at", { ascending: true });

      if (error) {
        console.error("Chyba při stahování trenérů:", error);
      } else {
        setTrainers(data);
      }
    };

    fetchTrainers();
  }, []);

  const nextSlide = () => {
    setCurrentIndex((prev) => (prev === trainers.length - 1 ? 0 : prev + 1));
  };

  const prevSlide = () => {
    setCurrentIndex((prev) => (prev === 0 ? trainers.length - 1 : prev - 1));
  };

  if (trainers.length === 0) return null;

  return (
    <section id="team" className="bg-gym-base py-24 px-6 overflow-hidden">
      <style>
        {`
          @media (min-width: 640px) {
            .trainers-mobile-slider {
              transform: none !important;
            }
          }
        `}
      </style>

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

        {/* Hlavní wrapper pro mobilní slider */}
        <div className="relative overflow-visible sm:overflow-visible">
          {/* TOHLE JE TA NOVÁ MAGIE:
            Neviditelná vrstva se stejným poměrem stran jako fotka (aspect-[3/4]).
            Zajistí, že šipky budou VŽDY naprosto přesně vycentrované jen vůči obrázku.
            pointer-events-none zaručí, že vrstva neblokuje klikání na fotku pod ní.
          */}
          {trainers.length > 1 && (
            <div className="absolute top-0 left-0 w-full aspect-[3/4] pointer-events-none z-20 sm:hidden">
              {/* Šipka doleva - pointer-events-auto vrací možnost kliknout na samotné tlačítko */}
              <button
                onClick={prevSlide}
                className="absolute left-0 top-1/2 -translate-y-1/2 pointer-events-auto bg-black/50 border border-white/10 hover:bg-brand-red text-white p-3 rounded-full backdrop-blur-md transition-all shadow-xl active:scale-95"
                aria-label="Předchozí trenér"
              >
                <svg
                  xmlns="http://www.w3.org/2000/svg"
                  fill="none"
                  viewBox="0 0 24 24"
                  strokeWidth={2.5}
                  stroke="currentColor"
                  className="w-5 h-5"
                >
                  <path
                    strokeLinecap="round"
                    strokeLinejoin="round"
                    d="M15.75 19.5L8.25 12l7.5-7.5"
                  />
                </svg>
              </button>

              {/* Šipka doprava */}
              <button
                onClick={nextSlide}
                className="absolute right-0 top-1/2 -translate-y-1/2 pointer-events-auto bg-black/50 border border-white/10 hover:bg-brand-red text-white p-3 rounded-full backdrop-blur-md transition-all shadow-xl active:scale-95"
                aria-label="Další trenér"
              >
                <svg
                  xmlns="http://www.w3.org/2000/svg"
                  fill="none"
                  viewBox="0 0 24 24"
                  strokeWidth={2.5}
                  stroke="currentColor"
                  className="w-5 h-5"
                >
                  <path
                    strokeLinecap="round"
                    strokeLinejoin="round"
                    d="M8.25 4.5l7.5 7.5-7.5 7.5"
                  />
                </svg>
              </button>
            </div>
          )}

          {/* Kontejner s trenéry */}
          <div
            className="trainers-mobile-slider flex sm:flex-wrap sm:justify-center gap-4 sm:gap-10 transition-transform duration-500 ease-in-out"
            style={{
              transform: `translateX(calc(-${currentIndex * 100}% - ${currentIndex * 1}rem))`,
            }}
          >
            {trainers.map((trainer) => (
              <div
                key={trainer.id}
                className="w-full sm:w-[calc(50%-1.25rem)] lg:w-[calc(33.333%-1.666rem)] flex-none group relative flex flex-col h-full"
              >
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
                <div className="space-y-3 flex flex-col flex-1">
                  <div className="flex justify-between items-start gap-4">
                    <h3 className="text-2xl font-heading font-bold text-white uppercase tracking-tight">
                      {trainer.name}
                    </h3>
                  </div>

                  {/* Vložené indikátory (tečky) přímo pod jménem na mobilu */}
                  {trainers.length > 1 && (
                    <div className="flex gap-1.5 sm:hidden py-1">
                      {trainers.map((_, idx) => (
                        <div
                          key={idx}
                          className={`h-1.5 rounded-full transition-all duration-300 ${
                            currentIndex === idx
                              ? "w-5 bg-brand-red"
                              : "w-1.5 bg-white/20"
                          }`}
                        />
                      ))}
                    </div>
                  )}

                  <div className="flex flex-col items-start gap-2 pt-2">
                    <div className="inline-block bg-brand-red/10 border border-brand-red/20 px-3 py-1 text-[10px] uppercase font-bold text-brand-red tracking-widest">
                      {trainer.role}
                    </div>

                    {trainer.specialization && (
                      <span className="text-white/90 text-sm font-heading tracking-wider uppercase">
                        {trainer.specialization}
                      </span>
                    )}
                  </div>

                  <p className="text-gray-400 text-sm font-body leading-relaxed line-clamp-3 group-hover:text-gray-200 transition-colors flex-1 mt-2">
                    {trainer.description}
                  </p>

                  {/* Kontakt */}
                  {trainer.contact && (
                    <div className="pt-4 mt-auto flex flex-col gap-1 border-t border-white/5">
                      <span className="text-[10px] text-gray-500 uppercase font-bold tracking-widest">
                        Kontakt
                      </span>
                      <a
                        href={`tel:${trainer.contact.replace(/\s/g, "")}`}
                        className="text-white font-heading font-bold hover:text-brand-red transition-colors inline-block"
                      >
                        {trainer.contact}
                      </a>
                    </div>
                  )}
                </div>
              </div>
            ))}
          </div>
        </div>
      </div>
    </section>
  );
};

export default Trainers;
