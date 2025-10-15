import React from "react";
import { Container } from "./Container"; // ajuste o caminho se necessário
import logoIcon from "../assets/LogoAdv2.png"; // caminho da sua logo

interface HeaderProps {
  onNavigate: (to: string) => void;
  current: string;
}

export const Header: React.FC<HeaderProps> = ({ onNavigate, current }) => {
  const navItems: [string, string][] = [
    ["home", "Home"],
    ["about", "Sobre"],
    ["areas", "Áreas"],
    ["team", "Equipe"],
    ["contact", "Contato"],
  ];

  return (
    <header className="fixed w-full top-0 left-0 bg-gray-900 backdrop-blur z-40 shadow-[0_0_15px_#0a0a0a] border-b border-gray-800">
      <Container>
        <nav className="flex items-center justify-between py-4">
          <div className="flex items-center gap-3">
            <div className="flex flex-row items-center text-2xl font-serif text-[#B19763]">
              <img src={logoIcon} alt="logo" className="h-10 mr-3" />
              Dr. Alexandre Reis
            </div>
            <div className="text-xs text-gray-400">Advocacia</div>
          </div>

          <div className="hidden md:flex items-center gap-6 text-sm">
            {navItems.map(([id, label]) => (
              <button
                key={id}
                onClick={() => onNavigate(id)}
                className={`py-2 px-3 rounded ${
                  current === id
                    ? `bg-[#B19763] text-black`
                    : "text-gray-300 hover:text-[#B19763]"
                }`}
              >
                {label}
              </button>
            ))}
          </div>

          <div className="flex items-center gap-3">
            <a
              href="#"
              className="hidden md:inline-block px-4 py-2 rounded text-black bg-[#B19763]"
            >
              Agendar Consulta
            </a>
            <button className="md:hidden" onClick={() => onNavigate("menu")}>
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
    </header>
  );
};
