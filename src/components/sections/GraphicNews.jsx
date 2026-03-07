import React, { useState, useEffect } from "react";
import { supabase } from "../../supabase";

const GraphicNews = () => {
  const [banners, setBanners] = useState([]);
  const [currentIndex, setCurrentIndex] = useState(0); // Nový state pro sledování aktuálního banneru na mobilu

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

  // Funkce pro posouvání dopředu
  const nextSlide = () => {
    setCurrentIndex((prev) => (prev === banners.length - 1 ? 0 : prev + 1));
  };

  // Funkce pro posouvání dozadu
  const prevSlide = () => {
    setCurrentIndex((prev) => (prev === 0 ? banners.length - 1 : prev - 1));
  };

  if (banners.length === 0) return null;

  return (
    <section id="aktuality" className="bg-gym-base py-24 px-6 overflow-hidden">
      <style>
        {`
          /* Vypnutí posouvání na PC přes !important, aby inline styly ovlivňovaly jen mobil */
          @media (min-width: 768px) {
            .mobile-slider-container {
              transform: none !important;
            }
          }
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

        {/* Hlavní wrapper - schováme přesahující obsah na mobilu, na PC to necháme viditelné pro flex-wrap */}
        <div className="overflow-hidden md:overflow-visible relative">
          {/* Kontejner s bannery. Na mobilu se posouvá přes 'transform', na PC se zalamuje (flex-wrap) */}
          <div
            className="mobile-slider-container flex md:flex-wrap md:justify-center gap-4 md:gap-8 transition-transform duration-500 ease-in-out"
            // Na mobilu to posuneme o 100% šířky + mezeru (gap-4 = 1rem)
            style={{
              transform: `translateX(calc(-${currentIndex * 100}% - ${currentIndex * 1}rem))`,
            }}
          >
            {banners.map((banner) => (
              <div
                key={banner.id}
                // TADY JE ÚPRAVA:
                // Mobil: w-full (teď je to na celou šířku, protože neswipujeme)
                // Tablet/Malý PC: 50%
                // Velký PC: 33.3%
                className="w-full md:w-[calc(50%-1rem)] lg:w-[calc(33.333%-1.5rem)] flex-none group relative overflow-hidden rounded-sm cursor-pointer"
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

        {/* Šipky a tečky - Zobrazí se POUZE na mobilu a jen pokud je více než 1 banner */}
        {banners.length > 1 && (
          <div className="flex justify-center items-center gap-6 mt-8 md:hidden">
            {/* Šipka doleva */}
            <button
              onClick={prevSlide}
              className="bg-white/10 hover:bg-brand-red active:scale-95 text-white p-3 rounded-full transition-all duration-300 flex items-center justify-center"
              aria-label="Předchozí"
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

            {/* Indikátory (tečky) */}
            <div className="flex gap-2">
              {banners.map((_, idx) => (
                <div
                  key={idx}
                  className={`h-2 rounded-full transition-all duration-300 ${
                    currentIndex === idx
                      ? "w-6 bg-brand-red"
                      : "w-2 bg-white/20"
                  }`}
                />
              ))}
            </div>

            {/* Šipka doprava */}
            <button
              onClick={nextSlide}
              className="bg-white/10 hover:bg-brand-red active:scale-95 text-white p-3 rounded-full transition-all duration-300 flex items-center justify-center"
              aria-label="Další"
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
      </div>
    </section>
  );
};

export default GraphicNews;
