import React, { useEffect, useRef } from 'react';
import gsap from 'gsap';
import { ScrollTrigger } from 'gsap/ScrollTrigger';

// IMPORTY FOTEK
import cinkyImg from '../../assets/cinky.jpg';
import fightzoneImg from '../../assets/fightzone.jpg';
import strojeImg from '../../assets/stroje.jpg';
import cardioImg from '../../assets/cardio.jpg';

gsap.registerPlugin(ScrollTrigger);

const zones = [
  {
    id: 1,
    title: "Free Weights Zóna",
    subtitle: "Jednoručky až do 60kg. Pro ty, co se nebojí železa.",
    size: "md:col-span-2 md:row-span-2", 
    img: cinkyImg
  },
  {
    id: 2,
    title: "Fight Club",
    subtitle: "Pytle a prostor pro reálný boj.",
    size: "md:col-span-1 md:row-span-1", 
    img: fightzoneImg
  },
  {
    id: 3,
    title: "Endurance",
    subtitle: "Buduj kondici a spaluj tuky na moderních trenažérech.",
    size: "md:col-span-1 md:row-span-2", 
    img: cardioImg
  },
  {
    id: 4,
    title: "Profi Stroje",
    subtitle: "Biomechanika, která zacílí sval přesně tam, kde má.",
    size: "md:col-span-1 md:row-span-1", 
    img: strojeImg
  }
];

const Zones = () => {
  const containerRef = useRef(null);

  useEffect(() => {
    if (!containerRef.current) return;
    const cards = containerRef.current.children;
    
    gsap.fromTo(cards, 
      { y: 30, opacity: 0 },
      {
        y: 0,
        opacity: 1,
        duration: 0.6,
        stagger: 0.1,
        ease: "power2.out",
        scrollTrigger: {
          trigger: containerRef.current,
          start: "top 90%",
        }
      }
    );
  }, []);

  return (
    <section className="bg-gym-base py-24 px-6" id="zones">
      <div className="max-w-7xl mx-auto">
        
        <div className="mb-12 text-center md:text-left">
          <span className="text-brand-red font-heading font-bold uppercase tracking-widest text-sm">Prozkoumej prostor</span>
          <h2 className="text-4xl md:text-5xl font-heading font-bold text-white uppercase mt-2">
            Tréninkové <span className="text-transparent bg-clip-text bg-gradient-to-r from-brand-red to-white">Zóny</span>
          </h2>
        </div>

        {/* OPRAVA 1: Rodičovský kontejner má na PC fixní výšku 600px */}
        <div ref={containerRef} className="grid grid-cols-1 md:grid-cols-4 md:grid-rows-2 gap-4 md:h-[600px]">
          
          {zones.map((zone) => (
            <div 
              key={zone.id} 
              // OPRAVA 2: h-[300px] pro mobil, ale md:h-full pro PC (aby vyplnil mřížku)
              className={`relative group overflow-hidden rounded-sm cursor-pointer border border-white/5 h-[300px] md:h-full ${zone.size}`}
            >
              <div 
                className="absolute inset-0 bg-cover bg-center transition-transform duration-700 group-hover:scale-110"
                style={{ backgroundImage: `url(${zone.img})` }} 
              ></div>
              
              <div className="absolute inset-0 bg-gradient-to-t from-black/90 via-black/30 to-transparent opacity-80 group-hover:opacity-95 transition-opacity duration-300"></div>

              <div className="absolute bottom-0 left-0 p-6 z-10">
                <h3 className="text-2xl md:text-3xl font-heading font-bold text-white uppercase leading-none mb-2">
                  {zone.title}
                </h3>
                {/* Texty: na mobilu viditelné vždy (opacity-100), na PC až po najetí (md:opacity-0 -> md:group-hover:opacity-100) */}
                <p className="text-gray-300 font-body text-sm opacity-100 md:opacity-0 md:group-hover:opacity-100 transition-opacity duration-300 pr-4">
                  {zone.subtitle}
                </p>
                <div className="w-12 h-1 bg-brand-red mt-3 origin-left scale-x-100 md:scale-x-0 md:group-hover:scale-x-100 transition-transform duration-300"></div>
              </div>
            </div>
          ))}

        </div>
      </div>
    </section>
  );
};

export default Zones;