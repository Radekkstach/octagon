import React from "react";
// Import tvého loga - uprav si název souboru, pokud se jmenuje jinak
import myLogo from "../../assets/logo2.svg";

const Contact = () => {
  return (
    <footer
      id="contact"
      className="bg-[#050505] pt-24 pb-10 border-t border-white/10"
    >
      <div className="max-w-7xl mx-auto px-6">
        <div className="grid lg:grid-cols-2 gap-16 items-start">
          {/* LEVÝ SLOUPEC - Textové info */}
          <div>
            <span className="text-brand-red font-heading font-bold uppercase tracking-widest text-sm">
              Kontakt
            </span>
            <h2 className="text-4xl md:text-6xl font-heading font-bold text-white uppercase mt-2 mb-8">
              Kde nás{" "}
              <span className="text-transparent bg-clip-text bg-gradient-to-r from-brand-red to-white">
                najdeš?
              </span>
            </h2>

            {/* KONTAKTNÍ ÚDAJE */}
            <div className="space-y-8 mb-12">
              {/* Adresa */}
              <div className="flex group items-start">
                <div className="shrink-0 mr-5 mt-1">
                  <div className="w-10 h-10 bg-white/5 rounded-sm flex items-center justify-center border border-white/10 group-hover:border-brand-red/50 group-hover:bg-brand-red/10 transition-colors">
                    <svg
                      className="w-5 h-5 text-brand-red"
                      fill="none"
                      stroke="currentColor"
                      viewBox="0 0 24 24"
                    >
                      <path
                        strokeLinecap="round"
                        strokeLinejoin="round"
                        strokeWidth="2"
                        d="M17.657 16.657L13.414 20.9a1.998 1.998 0 01-2.827 0l-4.244-4.243a8 8 0 1111.314 0z"
                      ></path>
                      <path
                        strokeLinecap="round"
                        strokeLinejoin="round"
                        strokeWidth="2"
                        d="M15 11a3 3 0 11-6 0 3 3 0 016 0z"
                      ></path>
                    </svg>
                  </div>
                </div>
                <div>
                  <h4 className="text-lg font-heading font-bold text-white uppercase mb-1">
                    Posilovna Octagon
                  </h4>
                  <p className="text-gray-400 font-body leading-relaxed">
                    Františka Hrubína 1105
                    <br />
                    674 01 Třebíč
                  </p>
                </div>
              </div>

              {/* Telefon */}
              <a href="tel:+420774347023" className="flex group items-start">
                <div className="shrink-0 mr-5 mt-1">
                  <div className="w-10 h-10 bg-white/5 rounded-sm flex items-center justify-center border border-white/10 group-hover:border-brand-red/50 group-hover:bg-brand-red/10 transition-colors">
                    <svg
                      className="w-5 h-5 text-brand-red"
                      fill="none"
                      stroke="currentColor"
                      viewBox="0 0 24 24"
                    >
                      <path
                        strokeLinecap="round"
                        strokeLinejoin="round"
                        strokeWidth="2"
                        d="M3 5a2 2 0 012-2h3.28a1 1 0 01.948.684l1.498 4.493a1 1 0 01-.502 1.21l-2.257 1.13a11.042 11.042 0 005.516 5.516l1.13-2.257a1 1 0 011.21-.502l4.493 1.498a1 1 0 01.684.949V19a2 2 0 01-2 2h-1C9.716 21 3 14.284 3 6V5z"
                      ></path>
                    </svg>
                  </div>
                </div>
                <div>
                  <h4 className="text-lg font-heading font-bold text-white uppercase mb-1">
                    Zavolej nám
                  </h4>
                  <p className="text-gray-400 font-body group-hover:text-white transition-colors">
                    +420 774 347 023
                  </p>
                </div>
              </a>

              {/* Email */}
              <a
                href="mailto:shopoctagon@gmail.com"
                className="flex group items-start"
              >
                <div className="shrink-0 mr-5 mt-1">
                  <div className="w-10 h-10 bg-white/5 rounded-sm flex items-center justify-center border border-white/10 group-hover:border-brand-red/50 group-hover:bg-brand-red/10 transition-colors">
                    <svg
                      className="w-5 h-5 text-brand-red"
                      fill="none"
                      stroke="currentColor"
                      viewBox="0 0 24 24"
                    >
                      <path
                        strokeLinecap="round"
                        strokeLinejoin="round"
                        strokeWidth="2"
                        d="M3 8l7.89 5.26a2 2 0 002.22 0L21 8M5 19h14a2 2 0 002-2V7a2 2 0 00-2-2H5a2 2 0 00-2 2v10a2 2 0 002 2z"
                      ></path>
                    </svg>
                  </div>
                </div>
                <div>
                  <h4 className="text-lg font-heading font-bold text-white uppercase mb-1">
                    Napiš email
                  </h4>
                  <p className="text-gray-400 font-body group-hover:text-white transition-colors">
                    shopoctagon@gmail.com
                  </p>
                </div>
              </a>

              {/* Facebook */}
              <a
                href="https://www.facebook.com/KRUHACEoctagon/?locale=cs_CZ"
                target="_blank"
                rel="noopener noreferrer"
                className="flex group items-start"
              >
                <div className="shrink-0 mr-5 mt-1">
                  <div className="w-10 h-10 bg-white/5 rounded-sm flex items-center justify-center border border-white/10 group-hover:border-brand-red/50 group-hover:bg-brand-red/10 transition-colors">
                    <svg
                      className="w-5 h-5 text-brand-red"
                      fill="currentColor"
                      viewBox="0 0 24 24"
                    >
                      <path d="M24 12.073c0-6.627-5.373-12-12-12s-12 5.373-12 12c0 5.99 4.388 10.954 10.125 11.854v-8.385H7.078v-3.47h3.047V9.43c0-3.007 1.792-4.669 4.533-4.669 1.312 0 2.686.235 2.686.235v2.953H15.83c-1.491 0-1.956.925-1.956 1.874v2.25h3.328l-.532 3.47h-2.796v8.385C19.612 23.027 24 18.062 24 12.073z" />
                    </svg>
                  </div>
                </div>
                <div>
                  <h4 className="text-lg font-heading font-bold text-white uppercase mb-1">
                    Sleduj nás
                  </h4>
                  <p className="text-gray-400 font-body group-hover:text-white transition-colors">
                    Octagon CZ posilovna a kruháče
                  </p>
                </div>
              </a>
            </div>

            {/* OTEVÍRACÍ DOBA - BOX */}
            <div className="bg-white/5 border-l-4 border-brand-red p-6 rounded-r-sm backdrop-blur-sm">
              <h3 className="text-xl font-heading font-bold text-white uppercase mb-4 flex items-center gap-2">
                <svg
                  className="w-5 h-5 text-brand-red"
                  fill="none"
                  stroke="currentColor"
                  viewBox="0 0 24 24"
                >
                  <path
                    strokeLinecap="round"
                    strokeLinejoin="round"
                    strokeWidth="2"
                    d="M12 8v4l3 3m6-3a9 9 0 11-18 0 9 9 0 0118 0z"
                  ></path>
                </svg>
                Otevírací doba
              </h3>
              <ul className="space-y-3 text-sm">
                <li className="flex justify-between border-b border-white/10 pb-2">
                  <span className="text-gray-300">Pondělí - Pátek</span>
                  <span className="text-white font-bold tracking-wider">
                    07:30 - 21:00
                  </span>
                </li>
                <li className="flex justify-between border-b border-white/10 pb-2">
                  <span className="text-gray-300">Sobota</span>
                  <span className="text-white font-bold tracking-wider">
                    09:00 - 20:00
                  </span>
                </li>
                <li className="flex justify-between">
                  <span className="text-gray-300">Neděle</span>
                  <span className="text-white font-bold tracking-wider">
                    09:00 - 21:00
                  </span>
                </li>
              </ul>
            </div>
          </div>

          {/* PRAVÝ SLOUPEC - Mapa */}
          <div className="h-full min-h-[500px] w-full relative rounded-sm overflow-hidden border border-white/10 group shadow-2xl">
            <iframe
              src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d2613.565860472489!2d15.890696976891636!3d49.20879207604354!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x470d10e527d216f9%3A0x6b4c106979685a22!2sOctagon%20Gym!5e0!3m2!1scs!2scz!4v1709123456789!5m2!1scs!2scz"
              width="100%"
              height="100%"
              style={{
                border: 0,
                filter: "grayscale(100%) invert(90%) contrast(1.2)",
              }}
              allowFullScreen=""
              loading="lazy"
              referrerPolicy="no-referrer-when-downgrade"
              className="absolute inset-0 w-full h-full opacity-80 group-hover:opacity-100 transition-opacity duration-500"
              title="Mapa Octagon Gym"
            ></iframe>
            <div className="absolute inset-0 bg-brand-red/10 pointer-events-none group-hover:bg-transparent transition-colors duration-500"></div>
          </div>
        </div>

        {/* COPYRIGHT FOOTER - UPRAVENÁ ČÁST S LOGEM */}
        <div className="border-t border-white/10 mt-16 pt-8 flex flex-col md:flex-row justify-between items-center text-gray-500 text-sm">
          <p>
            &copy; {new Date().getFullYear()} Octagon Gym Třebíč. Všechna práva
            vyhrazena.
          </p>

          <div className="flex items-center gap-4 mt-6 md:mt-0">
            <span className="text-gray-600 text-[10px] uppercase tracking-[0.2em]">
              Designed & Developed by
            </span>
            <a
              href="https://stchstudio.cz/"
              target="_blank"
              rel="noopener noreferrer"
              className="group flex items-center transition-all"
              title="Radek Stach Studio"
            >
              <img
                src={myLogo}
                alt="Radek Stach"
                className="h-7 w-auto opacity-50 group-hover:opacity-100 transition-opacity duration-300"
              />
            </a>
          </div>
        </div>
      </div>
    </footer>
  );
};

export default Contact;
