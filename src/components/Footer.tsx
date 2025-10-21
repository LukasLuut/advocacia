import React from "react";
import { Container } from "./Container"; // ajuste o caminho se necessário

export const Footer: React.FC = () => {
  return (
    <footer className="md:py-8 py-2 mt-12 fixed bottom-0 w-full bg-gray-900 backdrop-blur shadow-[0_0_15px_#0a0a0a] border-b border-gray-800">
      <Container>
        <div className="flex flex-col md:flex-row items-center justify-between gap-2 sm:gap-2">
          <div className="text-sm text-[#E5E5E5]">
            © {new Date().getFullYear()} Dr. Alexandre Reis — Todos os direitos reservados
          </div>

          <div className="flex items-center gap-4 text-[#B19763]">
            <a href="#">LinkedIn</a>
            <a href="#">OAB</a>
          </div>
        </div>
      </Container>
    </footer>
  );
};
