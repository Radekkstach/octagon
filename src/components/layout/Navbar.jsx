import React, { useState, useEffect, useRef } from "react";
import gsap from "gsap";

const navLinks = [
  { name: "Domů", href: "#home" },
  { name: "O nás", href: "#about" },
  { name: "Zóny", href: "#zones" },
  { name: "Trenéři", href: "#team" },
  { name: "Služby", href: "#programs" },
  { name: "Kontakt", href: "#contact" },
];

const Navbar = () => {
  const [isScrolled, setIsScrolled] = useState(false);
  const [isMobileMenuOpen, setIsMobileMenuOpen] = useState(false);
  const menuItemsRef = useRef([]);

  // 1. Detekce scrollu - OPRAVENO (Přidán throttling)
  useEffect(() => {
    let timeoutId = null;

    const handleScroll = () => {
      // Pokud už běží časovač, ignorujeme další scrollovací eventy
      if (timeoutId) return;

      // Nastavíme časovač na cca 60fps (16ms)
      timeoutId = setTimeout(() => {
        setIsScrolled(window.scrollY > 20);
        timeoutId = null; // Uvolníme časovač pro další kontrolu
      }, 16);
    };

    window.addEventListener("scroll", handleScroll, { passive: true }); // passive: true je důležité pro výkon scrollu

    return () => {
      window.removeEventListener("scroll", handleScroll);
      if (timeoutId) clearTimeout(timeoutId);
    };
  }, []);

  // 2. Animace otevření mobilního menu
  useEffect(() => {
    if (isMobileMenuOpen) {
      document.body.style.overflow = "hidden";

      menuItemsRef.current = menuItemsRef.current.slice(0, navLinks.length + 1);

      gsap.fromTo(
        menuItemsRef.current,
        { y: 50, opacity: 0 },
        { y: 0, opacity: 1, duration: 0.4, stagger: 0.1, ease: "power2.out" },
      );
    } else {
      document.body.style.overflow = "auto";
    }
  }, [isMobileMenuOpen]);

  return (
    <>
      <nav
        // OPRAVENO: Odstraněno backdrop-blur-md
        className={`fixed top-0 left-0 w-full z-[999] transition-all duration-300 ${
          isScrolled
            ? "bg-gym-base border-b border-white/10 py-3 shadow-lg" // Změněno na bg-gym-base (plná barva)
            : "bg-transparent py-6"
        }`}
      >
        {/* ... Zbytek kódu Navbaru (loga, linky, atd.) zůstává stejný ... */}
        <div className="max-w-7xl mx-auto px-6 flex justify-between items-center relative">
          <a
            href="#"
            className="group relative z-[1000] text-2xl md:text-3xl font-heading font-bold uppercase tracking-tighter text-white"
          >
            Octagon{" "}
            <span className="text-brand-red group-hover:text-white transition-colors duration-300">
              .
            </span>
          </a>

          <div className="hidden md:flex items-center gap-8">
            {navLinks.map((link) => (
              <a
                key={link.name}
                href={link.href}
                className="text-sm font-heading font-bold uppercase tracking-wider text-gray-300 hover:text-brand-red transition-colors duration-200"
              >
                {link.name}
              </a>
            ))}
            <a
              href="#membership"
              className="bg-brand-red hover:bg-brand-dark text-white text-sm font-heading font-bold uppercase py-2 px-5 rounded-sm transition-colors hover:scale-105 transform duration-200"
            >
              Ceník
            </a>
          </div>

          <button
            onClick={() => setIsMobileMenuOpen(!isMobileMenuOpen)}
            className="md:hidden text-white focus:outline-none relative z-[1000]"
          >
            {isMobileMenuOpen ? (
              <svg
                className="w-8 h-8"
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
            ) : (
              <svg
                className="w-8 h-8"
                fill="none"
                stroke="currentColor"
                viewBox="0 0 24 24"
              >
                <path
                  strokeLinecap="round"
                  strokeLinejoin="round"
                  strokeWidth="2"
                  d="M4 6h16M4 12h16M4 18h16"
                ></path>
              </svg>
            )}
          </button>
        </div>
      </nav>

      <div
        className={`fixed inset-0 z-[998] bg-[#050505] flex flex-col items-center justify-center space-y-8 md:hidden transition-opacity duration-300 ${
          isMobileMenuOpen
            ? "opacity-100 visible pointer-events-auto"
            : "opacity-0 invisible pointer-events-none"
        }`}
      >
        {navLinks.map((link, index) => (
          <a
            key={link.name}
            ref={(el) => (menuItemsRef.current[index] = el)}
            href={link.href}
            onClick={() => setIsMobileMenuOpen(false)}
            className="text-3xl font-heading font-bold uppercase text-white hover:text-brand-red transition-colors"
          >
            {link.name}
          </a>
        ))}
        <a
          ref={(el) => (menuItemsRef.current[navLinks.length] = el)}
          href="#membership"
          onClick={() => setIsMobileMenuOpen(false)}
          className="text-xl font-heading font-bold uppercase text-brand-red border border-brand-red py-3 px-10 mt-4 rounded-sm hover:bg-brand-red hover:text-white transition-colors"
        >
          Ceník
        </a>
      </div>
    </>
  );
};

export default Navbar;
