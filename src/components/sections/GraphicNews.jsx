import React, { useState, useEffect } from "react";
import { supabase } from "../../supabase";

const GraphicNews = () => {
  const [banners, setBanners] = useState([]);

  useEffect(() => {
    const fetchBanners = async () => {
      const { data, error } = await supabase
        .from("graphic_news")
        .select("*")
        .eq("is_active", true)
        .order("order_index", { ascending: true });

      if (error) {
        console.error("Chyba při stahování bannerů:", error);
      } else {
        setBanners(data);
      }
    };

    fetchBanners();
  }, []);

  if (banners.length === 0) return null;

  return (
    // Změněno pozadí na bg-gym-base, aby to sedělo se zbytkem webu
    <section id="aktuality" className="bg-gym-base py-24 px-6 overflow-hidden">
      <style>
        {`
          .hide-scrollbar::-webkit-scrollbar { display: none; }
          .hide-scrollbar { -ms-overflow-style: none; scrollbar-width: none; }
        `}
      </style>

      <div className="max-w-7xl mx-auto">
        <div className="text-center mb-16">
          <span className="text-brand-red font-heading font-bold uppercase tracking-widest text-sm">
            Co se děje
          </span>
          <h2 className="text-4xl md:text-6xl font-heading font-bold text-white uppercase mt-2">
            Aktuálně v{" "}
            <span className="text-transparent bg-clip-text bg-gradient-to-r from-brand-red to-white">
              Gymu
            </span>
          </h2>
        </div>

        <div className="flex md:flex-wrap md:justify-center gap-8 overflow-x-auto md:overflow-visible snap-x snap-mandatory pb-8 md:pb-0 hide-scrollbar -mx-6 px-6 md:mx-0 md:px-0">
          {banners.map((banner) => (
            <div
              key={banner.id}
              // TADY JE TA MAGIE:
              // Mobil: 85vw (pořádná šířka)
              // Tablet/Malý PC: 50% (2 vedle sebe, obrovské)
              // Velký PC: 33.3% (3 vedle sebe, krásně čitelné)
              className="w-[85vw] md:w-[calc(50%-1rem)] lg:w-[calc(33.333%-1.5rem)] flex-none snap-center group relative overflow-hidden rounded-sm cursor-pointer"
            >
              <div className="aspect-[3/4] relative overflow-hidden border border-white/5 transition-all duration-500 group-hover:border-brand-red group-hover:shadow-2xl group-hover:shadow-brand-red/20">
                <img
                  src={banner.img_url}
                  alt={banner.title}
                  className="w-full h-full object-cover transition-transform duration-700 group-hover:scale-105"
                />

                <div className="absolute inset-0 bg-gradient-to-t from-black/90 via-black/30 to-transparent opacity-100 md:opacity-0 md:group-hover:opacity-100 transition-opacity duration-500"></div>

                <div className="absolute bottom-0 left-0 right-0 p-8 transform translate-y-0 md:translate-y-4 md:group-hover:translate-y-0 transition-all duration-500 opacity-100 md:opacity-0 md:group-hover:opacity-100 flex items-end">
                  <h3 className="text-white font-heading font-bold text-2xl md:text-3xl uppercase leading-tight drop-shadow-md border-l-4 border-brand-red pl-4">
                    {banner.title}
                  </h3>
                </div>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default GraphicNews;
