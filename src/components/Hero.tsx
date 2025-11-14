import React from "react";
import { motion } from "framer-motion";
import { Container } from "./Container"; // ajuste o caminho se necessário
import imgAlex from "../assets/Alexandre-Reis.png"; // ajuste conforme a imagem do advogado
import { Phone, Mail } from "lucide-react"; // ou outro pacote de ícones

interface HeroProps {
  onContact: () => void;
  areaContainer: () => void;
}

export const Hero: React.FC<HeroProps> = ({ onContact, areaContainer }) => {
  return (
    <section className="min-h-[60vh] flex items-center pt-2 pb-4">
      <Container>
        <div className="grid grid-cols-1 md:grid-cols-2 gap-8 items-center">
          {/* Texto */}
          <motion.div
            initial={{ opacity: 0, x: -20 }}
            animate={{ opacity: 1, x: 0 }}
            transition={{ duration: 0.6 }}
          >
            <h1 className="text-4xl md:text-5xl font-serif leading-tight text-[#0b0b0b]">
              Dr. Alexandre Reis
            </h1>

            <p className="mt-4 text-lg text-gray-600 max-w-xl">
              Defendendo seus direitos com ética, estratégia e excelência jurídica.
            </p>

            <div className="mt-6 flex gap-3">
              <button
                onClick={onContact}
                className="bg-[#B19763] text-white px-5 py-3 rounded-md shadow-md"
              >
                Agende uma consulta
              </button>
              <button
                onClick={areaContainer}
                className="px-5 py-3 rounded-md border border-gray-200"
              >
                Área de atuação
              </button>
            </div>

            <div className="flex flex-col sm:flex-row mt-3 gap-3 sm:gap-6 items-start sm:items-center text-gray-600">
              <div className="flex items-center flex-col gap-2">
                <div className="flex flex-row items-center">
                  <Phone className="w-4 h-4 mr-2" /> <span>+55 (51) 9 9518-5222</span>
                </div>
                <div className="flex flex-row  items-center">
                   <Phone className="w-4 h-4 mr-2" /> <span>+55 (48) 9 8806-5502</span>
                </div>
               
              </div>
              <div className="flex items-center gap-2">
                <Mail className="w-4 h-4" /> <span>alexandresdosreisadv@gmail.com</span>
              </div>
            </div>
          </motion.div>

          {/* Imagem */}
          <motion.div
            initial={{ opacity: 0, x: 20 }}
            animate={{ opacity: 1, x: 0 }}
            transition={{ duration: 0.6 }}
            className="relative"
          >
            <div className="rounded-2xl sm:w-90 overflow-hidden border-2 border-[#B19763] shadow-xl">
              <img src={imgAlex} alt="advogado" className="w-full" />
            </div>
          </motion.div>
        </div>
      </Container>
    </section>
  );
};
