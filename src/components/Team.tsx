import React from "react";
import { motion } from "framer-motion";
import { Container } from "./Container"; // ajuste o caminho
import imgAlex2 from "../assets/Alexandre-Reis-md.png"; // foto do advogado

interface TeamMember {
  name: string;
  oab: string;
  description: string;
  photoUrl: string;
  bgUrl: string;
  linkedin?: string;
  facebook?: string;
}

export const Team: React.FC = () => {
  // --- Data
  const SAMPLE_TEAM: TeamMember[] = [
    {
      name: "Dr. Alexandre Reis",
      oab: " OAB/RS 42617 - OAB/SP 522297 - OAB/RJ 262746 - OAB/PR 125780 - OAB/SC 70346-A - OAB/BA  88795",
      description:
        "Advogado especializado em Direito Civil, Empresarial e Trabalhista — estratégia e ética.",
      photoUrl: imgAlex2,
      bgUrl: "https://images.pexels.com/photos/7876050/pexels-photo-7876050.jpeg",
    },
  ];

  return (
    <section className="py-16">
      <Container>
        <h2 className="text-3xl font-serif text-[#B19763]">Equipe</h2>
        <div className="mt-6 ">
          {SAMPLE_TEAM.map((m) => (
            <motion.div
              key={m.name}
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              className="w-full"
            >
              <div
                className="bg-cover bg-center shadow-[0_0_15px_#0a0a0a] rounded-xl overflow-hidden"
                style={{ backgroundImage: `url(${m.bgUrl})` }}
              >
                <div className="bg-black/70 p-6 md:p-10 rounded-xl flex flex-col md:flex-row items-center gap-6">
                  <img
                    src={m.photoUrl}
                    alt={m.name}
                    className="  w-32 h-62 md:w-35 md:h-50 rounded-t-full rounded-b-full shadow-[0_0_15px_#0a0a0a] object-cover border-4 border-[#B19763]/80"
                  />
                  <div className="text-left text-white">
                    <h3 className="text-2xl font-serif">{m.name}</h3>
                    <p className="text-[#B19763] italic mt-1 bg-black/40 px-5 rounded-2xl">{m.oab}</p>
                    <p className="mt-3 text-sm md:text-base">{m.description}</p>
                  </div>
                </div>
              </div>
            </motion.div>
          ))}
        </div>
      </Container>
    </section>
  );
};
