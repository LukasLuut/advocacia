import React, { useState } from "react";
import { Container } from "./Container";
import { motion, AnimatePresence } from "framer-motion";
import logoIcon from "../assets/LogoAdv2.png";

interface HeaderProps {
  onNavigate: (to: string) => void;
  current: string;
}

export const Header: React.FC<HeaderProps> = ({ onNavigate, current }) => {
  const [menuOpen, setMenuOpen] = useState(false);

  const navItems: [string, string][] = [
    ["home", "Home"],
    ["about", "Sobre"],
    ["areas", "Área"],
    ["team", "Equipe"],
    ["contact", "Contato"],
  ];

  const navigateHandle=()=>{
     onNavigate('contact')
  }

  return (
    <header className="fixed w-full top-0 left-0 bg-gray-900 backdrop-blur z-40 shadow-[0_0_15px_#0a0a0a] border-b border-gray-800">
      <Container>
        <nav className="flex items-center relative z-60 justify-between py-4">
          {/* Logo */}
          <div className="flex items-center gap-3">
            <div className="flex flex-row items-center text-2xl font-serif text-[#B19763]">
              <img src={logoIcon} alt="logo" className="h-10 mr-3" />
              Dr. Alexandre Reis
            </div>
            <div className="text-xs text-gray-400">Advocacia</div>
          </div>

          {/* Links Desktop */}
          <div className="hidden md:flex items-center gap-6 text-sm">
            {navItems.map(([id, label]) => (
              <button
                key={id}
                onClick={() => onNavigate(id)}
                className={`py-2 px-3 rounded transition-colors ${
                  current === id
                    ? `bg-[#B19763] text-black`
                    : "text-gray-300 hover:text-[#B19763]"
                }`}
              >
                {label}
              </button>
            ))}
          </div>

          {/* Botões à direita */}
          <div className="flex items-center gap-3">
            <button
              onClick={()=>navigateHandle()}
              className="hidden md:inline-block px-4 py-2 rounded text-black bg-[#B19763]"
            >
              Agendar Consulta
            </button>

            {/* Botão Hamburger */}
            <button
              className="md:hidden"
              onClick={() => setMenuOpen((prev) => !prev)}
            >
              <svg width="24" height="24" viewBox="0 0 24 24" fill="none">
                <path
                  d="M3 6h18M3 12h18M3 18h18"
                  stroke="#E5E5E5"
                  strokeWidth="2"
                  strokeLinecap="round"
                />
              </svg>
            </button>
          </div>
        </nav>
      </Container>

      {/* Overlay + Menu Mobile */}
      <AnimatePresence>
        {menuOpen && (
          <>
            {/* Overlay escurecido */}
            <motion.div
              key="overlay"
              className="fixed inset-0 h-screen bg-black/60 backdrop-blur-sm z-30"
              initial={{ opacity: 0 }}
              animate={{ opacity: 1 }}
              exit={{ opacity: 0 }}
              transition={{ duration: 0.25 }}
              onClick={() => setMenuOpen(false)}
            />

            {/* Menu Mobile */}
            <motion.div
              key="mobileMenu"
              initial={{ x: 100, opacity: 0 }}
              animate={{ x: 0, opacity: 1 }}
              exit={{ x: 100, opacity: 0 }}
              transition={{
                type: "spring",
                stiffness: 180,
                damping: 28,
              }}
              className="absolute top-18 right-0 w-50  bg-gray-950 border-t border-gray-700 rounded-b-2xl z-40 shadow-2xl overflow-hidden"
            >
              {navItems.map(([id, label]) => (
                <button
                  key={id}
                  onClick={() => {
                    onNavigate(id);
                    setMenuOpen(false);
                  }}
                  className={`block w-full text-left py-3 px-5 border-b border-gray-800 transition-colors ${
                    current === id
                      ? "bg-[#B19763] text-black"
                      : "text-gray-200 hover:bg-gray-800 hover:text-[#B19763]"
                  }`}
                >
                  {label}
                </button>
              ))}
              <div className="p-4">
                <button
                  onClick={()=>navigateHandle()}
                  className="block w-full text-center py-3 rounded-md bg-[#B19763] text-black font-semibold hover:bg-[#c5ac6b] transition-colors"
                >
                  Agendar Consulta
                </button>
              </div>
            </motion.div>
          </>
        )}
      </AnimatePresence>
    </header>
  );
};
