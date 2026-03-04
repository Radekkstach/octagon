import React, { useEffect } from "react";
import Navbar from "./components/layout/Navbar";
import Hero from "./components/sections/Hero";
import Concept from "./components/sections/Concept";
import Zones from "./components/sections/Zones";
import Trainers from "./components/sections/Trainers";
import Programs from "./components/sections/Programs"; // <--- Nový import
import Pricing from "./components/sections/Pricing";
import Contact from "./components/sections/Contact";
import Lenis from "@studio-freight/lenis";

function App() {
  useEffect(() => {
    if (window.innerWidth < 768) return;

    const lenis = new Lenis({
      duration: 1.2,
      easing: (t) => Math.min(1, 1.001 - Math.pow(2, -10 * t)),
      direction: "vertical",
      gestureDirection: "vertical",
      smooth: true,
      mouseMultiplier: 1,
      smoothTouch: false,
      touchMultiplier: 2,
    });

    let rafId; // Proměnná pro uložení ID animace

    function raf(time) {
      lenis.raf(time);
      rafId = requestAnimationFrame(raf); // Uložení ID při každém dalším snímku
    }

    rafId = requestAnimationFrame(raf); // Prvotní spuštění a uložení ID

    // Kotvy
    const anchors = document.querySelectorAll('a[href^="#"]');
    const handleAnchorClick = function (e) {
      e.preventDefault();
      lenis.scrollTo(this.getAttribute("href"));
    };

    anchors.forEach((anchor) => {
      anchor.addEventListener("click", handleAnchorClick);
    });

    // Úklidová funkce (Cleanup)
    return () => {
      lenis.destroy();
      cancelAnimationFrame(rafId); // MOC DŮLEŽITÉ: Zastaví smyčku!

      // Správná praxe: odebrání event listenerů
      anchors.forEach((anchor) => {
        anchor.removeEventListener("click", handleAnchorClick);
      });
    };
  }, []);
  return (
    <main className="bg-gym-base min-h-screen text-white selection:bg-brand-red selection:text-white">
      <Navbar />

      <div id="home">
        <Hero />
      </div>

      <div id="about">
        <Concept />
      </div>

      <div id="services">
        <Zones />
      </div>

      <div id="team">
        <Trainers />
      </div>

      {/* Nová sekce Programy (Kruháče + Solárko) */}
      <div id="programs">
        <Programs />
      </div>

      <div id="membership">
        <Pricing />
      </div>

      <div id="contact">
        <Contact />
      </div>
    </main>
  );
}

export default App;
