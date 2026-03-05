import React, { useState, useEffect } from "react";
import { supabase } from "../../supabase";

const Trainers = () => {
  const [trainers, setTrainers] = useState([]);

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

  return (
    <section id="team" className="bg-gym-base py-24 px-6 overflow-hidden">
      {/* Tohle je malé CSS kouzlo, které na mobilu skryje ten ošklivý posuvník dole, aby to vypadalo jako čistá aplikace */}
      <style>
        {`
          .hide-scrollbar::-webkit-scrollbar { display: none; }
          .hide-scrollbar { -ms-overflow-style: none; scrollbar-width: none; }
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

        {/* ZDE JE TA MAGIE: 
          Na mobilu: flex (vedle sebe), overflow-x-auto (dovolí scrollovat), snap-x (přitahuje karty) 
          Na PC (sm a výš): flex-wrap (zalomí je pod sebe) a justify-center (vycentruje je)
        */}
        <div className="flex sm:flex-wrap sm:justify-center gap-6 sm:gap-10 overflow-x-auto sm:overflow-visible snap-x snap-mandatory sm:snap-none pb-8 sm:pb-0 hide-scrollbar -mx-6 px-6 sm:mx-0 sm:px-0">
          {trainers.map((trainer) => (
            <div
              key={trainer.id}
              // Šířka: Na mobilu 85vw (aby kousek další vykukoval), na PC matematika pro centrování
              // flex-none brání smrsknutí karet na mobilu, snap-center zajistí přicvaknutí doprostřed
              className="w-[85vw] sm:w-[calc(50%-1.25rem)] lg:w-[calc(33.333%-1.666rem)] flex-none snap-center sm:snap-align-none group relative flex flex-col h-full"
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
                <h3 className="text-2xl font-heading font-bold text-white uppercase tracking-tight">
                  {trainer.name}
                </h3>

                <div className="flex flex-col items-start gap-2">
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
                      className="text-white font-heading font-bold hover:text-brand-red transition-colors"
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
    </section>
  );
};

export default Trainers;
