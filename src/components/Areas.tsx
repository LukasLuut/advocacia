import React from "react";
import { motion } from "framer-motion";
import { Container } from "./Container";
import { Scale, Users, FileCheck, Handshake } from "lucide-react";

export const Areas: React.FC = () => {
  const SERVICOS = [
    {
      title: "Reclamações Trabalhistas",
      desc: "Representação completa em ações de vínculo, horas extras, adicionais e verbas rescisórias.",
      icon: Scale,
    },
    {
      title: "Acordos e Rescisões",
      desc: "Condução estratégica de acordos e rescisões, buscando soluções equilibradas e rápidas.",
      icon: Handshake,
    },
    {
      title: "Consultoria Preventiva",
      desc: "Orientação para empresas e profissionais na prevenção de passivos trabalhistas.",
      icon: FileCheck,
    },
    {
      title: "Assédio Moral e Sexual",
      desc: "Atuação sensível e assertiva em casos de assédio, garantindo proteção e justiça ao trabalhador.",
      icon: Users,
    },
  ];

  return (
    <section
      id="direito-trabalhista"
      className="py-20 bg-white "
    >
      <Container>
        <div className="text-center  mb-12">
          <h2 className="text-3xl md:text-4xl font-serif text-[#B19763]">
            Direito Trabalhista
          </h2>
          <p className="text-gray-600 mt-4 max-w-2xl mx-auto">
            Especialização em Direito Trabalhista, com atuação dedicada à defesa
            de empregados e empregadores, assegurando soluções eficazes,
            humanas e estratégicas em cada caso.
          </p>
        </div>

        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-2 gap-8 max-w-5xl mx-auto">
          {SERVICOS.map((s) => (
            <motion.div
              key={s.title}
              whileHover={{ y: -6 }}
              transition={{ type: "spring", stiffness: 200 }}
              className="p-6 rounded-xl  border border-gray-100 shadow-sm bg-gradient-to-tr from-white to-gray-50"
            >
              <div className="flex  items-start gap-4">
                <div className="p-3 rounded bg-[#f3efe7]">
                  <s.icon className="w-6 h-6 text-[#B19763]" />
                </div>
                <div>
                  <h3 className="font-semibold text-lg">{s.title}</h3>
                  <p className="text-sm text-gray-600 dark:text-gray-600 mt-2">
                    {s.desc}
                  </p>
                </div>
              </div>
            </motion.div>
          ))}
        </div>
      </Container>
    </section>
  );
};
