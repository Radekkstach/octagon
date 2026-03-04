import React from 'react';

const Pricing = () => {
  return (
    <section id="membership" className="bg-gym-base py-24 relative">
      
      <div className="max-w-7xl mx-auto px-6">
        
        {/* HEADER */}
        <div className="text-center mb-16">
          <span className="text-brand-red font-heading font-bold uppercase tracking-widest text-sm">Investice do sebe</span>
          <h2 className="text-4xl md:text-6xl font-heading font-bold text-white uppercase mt-2 mb-6">
            Ceník <span className="text-transparent bg-clip-text bg-gradient-to-r from-brand-red to-white">Vstupů</span>
          </h2>
          
          {/* BONUS BANNER */}
          <div className="inline-block bg-brand-red/10 border border-brand-red/30 rounded-full px-6 py-2 mb-8">
            <p className="text-brand-red font-bold uppercase text-sm md:text-base flex items-center gap-2">
              <span className="text-xl">🎁</span> 
              Ke každému vstupu Iontový nápoj + Voda s citrónkem ZDARMA
            </p>
          </div>

          <p className="text-gray-400 text-sm max-w-xl mx-auto">
            Platba možná <strong>hotově</strong> nebo <strong>Pluxee kartou</strong> (od 500 Kč).
          </p>
        </div>

        {/* PRICING GRID WRAPPER */}
        <div className="grid lg:grid-cols-2 gap-12 items-start">

          {/* 1. SLOUPEC - VSTUPOVÉ PERMANENTKY (Pípací) */}
          <div className="space-y-6">
            <h3 className="text-2xl font-heading font-bold text-white uppercase mb-6 flex items-center gap-3">
              <span className="w-8 h-1 bg-brand-red"></span> Vstupy
            </h3>

            {/* Jednorázový */}
            <div className="bg-gym-surface p-6 rounded-sm border border-white/5 flex justify-between items-center group hover:border-brand-red/50 transition-colors">
              <div>
                <h4 className="text-xl font-heading font-bold text-white uppercase">Jednorázový vstup</h4>
                <p className="text-gray-500 text-sm mt-1">Platnost 1 den</p>
              </div>
              <div className="text-right">
                <span className="block text-3xl font-heading font-bold text-white group-hover:text-brand-red transition-colors">100 Kč</span>
                <span className="block text-sm text-gray-400">Student: 90 Kč</span>
              </div>
            </div>

            {/* 10 Vstupů */}
            <div className="bg-gym-surface p-6 rounded-sm border border-white/5 flex justify-between items-center group hover:border-brand-red/50 transition-colors">
              <div>
                <h4 className="text-xl font-heading font-bold text-white uppercase">10 Vstupů</h4>
                <p className="text-gray-500 text-sm mt-1">Přenosná permice</p>
              </div>
              <div className="text-right">
                <span className="block text-3xl font-heading font-bold text-white group-hover:text-brand-red transition-colors">950 Kč</span>
                <span className="block text-sm text-gray-400">Student: 850 Kč</span>
              </div>
            </div>

            {/* 20 Vstupů */}
            <div className="bg-gym-surface p-6 rounded-sm border border-white/5 flex justify-between items-center group hover:border-brand-red/50 transition-colors">
              <div>
                <h4 className="text-xl font-heading font-bold text-white uppercase">20 Vstupů</h4>
                <p className="text-gray-500 text-sm mt-1">Pro pravidelné návštěvníky</p>
              </div>
              <div className="text-right">
                <span className="block text-3xl font-heading font-bold text-white group-hover:text-brand-red transition-colors">1 800 Kč</span>
                <span className="block text-sm text-gray-400">Student: 1 600 Kč</span>
              </div>
            </div>
            
            <p className="text-xs text-gray-500 italic mt-2">* Vstupové permanentky platí 1 rok od zakoupení.</p>
          </div>

          {/* 2. SLOUPEC - ČASOVÉ PERMANENTKY */}
          <div className="space-y-6">
            <h3 className="text-2xl font-heading font-bold text-white uppercase mb-6 flex items-center gap-3">
              <span className="w-8 h-1 bg-brand-red"></span> Členství
            </h3>

            {/* 1 Měsíc */}
            <div className="bg-gym-surface p-6 rounded-sm border border-white/5 flex justify-between items-center group hover:border-brand-red/50 transition-colors">
              <div>
                <h4 className="text-xl font-heading font-bold text-white uppercase">1 Měsíc</h4>
                <p className="text-gray-500 text-sm mt-1">Neomezený vstup</p>
              </div>
              <div className="text-right">
                <span className="block text-3xl font-heading font-bold text-white group-hover:text-brand-red transition-colors">1 390 Kč</span>
                <span className="block text-sm text-gray-400">Student: 1 290 Kč</span>
              </div>
            </div>

            {/* 3 Měsíce */}
            <div className="bg-gym-surface p-6 rounded-sm border border-white/5 flex justify-between items-center group hover:border-brand-red/50 transition-colors">
              <div>
                <h4 className="text-xl font-heading font-bold text-white uppercase">3 Měsíce</h4>
                <p className="text-gray-500 text-sm mt-1">Výhodnější cena</p>
              </div>
              <div className="text-right">
                <span className="block text-3xl font-heading font-bold text-white group-hover:text-brand-red transition-colors">3 590 Kč</span>
                <span className="block text-sm text-gray-400">Student: 3 090 Kč</span>
              </div>
            </div>

            {/* 6 Měsíců */}
            <div className="bg-gym-surface p-6 rounded-sm border border-white/5 flex justify-between items-center group hover:border-brand-red/50 transition-colors">
              <div>
                <h4 className="text-xl font-heading font-bold text-white uppercase">6 Měsíců</h4>
                <p className="text-gray-500 text-sm mt-1">Půlroční závazek</p>
              </div>
              <div className="text-right">
                <span className="block text-3xl font-heading font-bold text-white group-hover:text-brand-red transition-colors">5 990 Kč</span>
                <span className="block text-sm text-gray-400">Student: 5 190 Kč</span>
              </div>
            </div>

            {/* 1 ROK - Zvýrazněné */}
            <div className="relative bg-gradient-to-r from-brand-red/20 to-gym-surface p-6 rounded-sm border border-brand-red/50 flex justify-between items-center group hover:bg-brand-red/10 transition-colors shadow-lg shadow-brand-red/10">
              <div className="absolute -top-3 left-6 bg-brand-red text-white text-xs font-bold px-2 py-1 uppercase tracking-wider">
                Nejvýhodnější
              </div>
              <div>
                <h4 className="text-xl font-heading font-bold text-white uppercase">1 Rok</h4>
                <p className="text-gray-300 text-sm mt-1">Pro ty, co to myslí vážně</p>
              </div>
              <div className="text-right">
                <span className="block text-3xl font-heading font-bold text-white">8 990 Kč</span>
                <span className="block text-sm text-gray-300">Student: 7 390 Kč</span>
              </div>
            </div>
            
            <p className="text-xs text-gray-500 italic mt-2">* Zakoupené permanentky se v případě nemoci nevrací.</p>
          </div>
        </div>

        {/* EXTRA SLUŽBY & BAR (Grid 3 sloupce) */}
        <div className="mt-20 grid md:grid-cols-3 gap-8">
            
            {/* Vouchery */}
            <div className="bg-gym-surface p-8 border border-white/5 text-center">
                <div className="text-brand-red mb-4 text-4xl">🎁</div>
                <h4 className="text-xl font-heading font-bold text-white uppercase mb-2">Dárkové Vouchery</h4>
                <p className="text-gray-400 text-sm mb-4">Daruj pohyb a sílu.</p>
                <div className="flex flex-wrap justify-center gap-2">
                    <span className="bg-white/10 px-3 py-1 text-sm font-bold text-white">500 Kč</span>
                    <span className="bg-white/10 px-3 py-1 text-sm font-bold text-white">1000 Kč</span>
                    <span className="bg-white/10 px-3 py-1 text-sm font-bold text-white">2000 Kč</span>
                </div>
            </div>

            {/* Bar & Suplementy */}
            <div className="bg-gym-surface p-8 border border-white/5 text-center">
                <div className="text-brand-red mb-4 text-4xl">⚡</div>
                <h4 className="text-xl font-heading font-bold text-white uppercase mb-2">Bar & Suplementy</h4>
                <p className="text-gray-400 text-sm">
                    Proteiny, Nakopávače (Extrifit, Beast Virus, Pump), Creatine, BCAA, Tyčinky.
                </p>
                <div className="mt-4 pt-4 border-t border-white/10">
                    <span className="block text-white font-bold">Espresso: 35 Kč</span>
                </div>
            </div>

             {/* Ručník */}
             <div className="bg-gym-surface p-8 border border-white/5 text-center">
                <div className="text-brand-red mb-4 text-4xl">💧</div>
                <h4 className="text-xl font-heading font-bold text-white uppercase mb-2">Půjčení ručníku</h4>
                <p className="text-gray-400 text-sm mb-4">Zapomněl jsi? Nevadí.</p>
                <span className="text-2xl font-bold text-white">15 Kč</span>
            </div>

        </div>

        {/* GYM RULES - Zabaleno do tmavšího boxu dole */}
        <div className="mt-16 bg-[#0a0a0a] p-8 md:p-12 border-t border-brand-red/20 rounded-sm">
          <h4 className="text-xl font-heading font-bold text-white uppercase mb-6 flex items-center gap-2">
            <svg className="w-6 h-6 text-brand-red" fill="none" stroke="currentColor" viewBox="0 0 24 24"><path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M13 16h-1v-4h-1m1-4h.01M21 12a9 9 0 11-18 0 9 9 0 0118 0z"></path></svg>
            Gym Etiketa
          </h4>
          <div className="grid md:grid-cols-2 gap-x-12 gap-y-4 text-sm md:text-base text-gray-400 font-body">
            <ul className="list-disc list-inside space-y-2">
              <li>Nutností je <strong>ručník</strong> (pod sebe na stroje) a <strong>čistá obuv</strong>.</li>
              <li>Používejte desinfekční sprej na stroje po cvičení.</li>
              <li>Kotouče vracejte na svá místa (stejné váhy k sobě).</li>
              <li>Buďte ohleduplní vůči ostatním cvičícím.</li>
            </ul>
            <ul className="list-disc list-inside space-y-2">
              <li className="text-brand-red font-bold">Zákaz používání Magnesia v celé posilovně.</li>
              <li>Prosím, necvičte v ponožkách na kobercích.</li>
              <li>V šatnách jsou k dispozici sprchy i fén.</li>
              <li>Vezměte si s sebou hlavně chuť cvičit! 💪</li>
            </ul>
          </div>
        </div>

      </div>
    </section>
  );
};

export default Pricing;