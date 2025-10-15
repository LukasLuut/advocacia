import React from "react";
import { motion } from "framer-motion";
import { Container } from "./Container"; // ajuste o caminho se necessário
import { Award, ShoppingBag, Wrench } from "lucide-react"; // ícones

interface Area {
  title: string;
  desc: string;
  icon: React.ElementType;
}

export const Areas: React.FC = () => {
  // --- Data
  const AREAS: Area[] = [
    {
      title: "Direito Civil",
      desc: "Atuação em contratos, responsabilidade civil, e tutelas de direitos individuais.",
      icon: Award,
    },
    {
      title: "Direito Empresarial",
      desc: "Planejamento societário, contratos comerciais e compliance empresarial.",
      icon: ShoppingBag,
    },
    {
      title: "Trabalhista",
      desc: "Acordos, inventários, separações e tutela nos momentos delicados.",
      icon: Wrench,
    },
  ];

  return (
    <section id="areas" className="py-16 bg-white">
      <Container>
        <h2 className="text-3xl font-serif text-[#B19763]">Áreas de Atuação</h2>
        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-6 mt-6">
          {AREAS.map((a) => (
            <motion.div
              key={a.title}
              whileHover={{ y: -6 }}
              className="p-6 rounded-xl border border-gray-100 shadow-sm bg-gradient-to-tr from-white to-gray-50"
            >
              <div className="flex items-center gap-4">
                <div className="p-3 rounded bg-[#f3efe7]">
                  <a.icon className="w-6 h-6 text-[#B19763]" />
                </div>
                <div>
                  <h3 className="font-semibold text-lg">{a.title}</h3>
                  <p className="text-sm text-gray-600 mt-1">{a.desc}</p>
                </div>
              </div>
            </motion.div>
          ))}
        </div>
      </Container>
    </section>
  );
};
