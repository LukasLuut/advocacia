import React from "react";
import { Container } from "./Container"; // ajuste o caminho se necessário
import imgAlex3 from "../assets/Alexandre-Reis-sm.png"; // ajuste conforme a imagem do advogado

export const About: React.FC = () => {
  return (
    <section className="lg:py-16 py-6 ">
      <Container>
        <div className="md:flex gap-8 items-center">
          {/* Texto */}
          <div className="md:w-1/2">
            <h2 className="text-3xl font-serif text-[#B19763]">Sobre</h2>
            <p className="mt-4 text-gray-700">
              Sou Alexandre Reis, advogado trabalhista formado desde 1997. Ao longo de mais de duas décadas de atuação, especializei-me na defesa dos direitos de trabalhadores, com foco em casos envolvendo grandes redes de fast food, como Burger King e McDonald’s.
            </p>
            <p className="mt-4 text-gray-700">
              Minha experiência me permite oferecer um atendimento estratégico e personalizado, garantindo que cada cliente tenha seus direitos respeitados e sua voz ouvida. Acredito que a advocacia trabalhista vai além da lei: é sobre justiça, compromisso e proteção de quem confia no meu trabalho.
            </p>

            <ul className="mt-6 text-gray-700 space-y-2">
              <li>• OAB/RS 42617 <br/> 
                • OAB/SP 522297 <br/>
                • OAB/RJ 262746 <br/>
                • OAB/PR 125780 <br/>
                • OAB/SC 70346-A <br/>
                • OAB/BA  88795
                    
              </li>
              <li>• Formado em Direito Empresarial</li>
              <li>• Mais de 25 anos de experiência defendendo trabalhadores e seus direitos em empresas de grande porte.</li>
            </ul>
          </div>

          {/* Imagem */}
          <div className="md:w-1/2 mt-8 md:mt-0">
            <div className="rounded-xl overflow-hidden shadow-[0_0_15px_#0a0a0a]">
              <img
                src={imgAlex3}
                alt="profile"
                className="w-full object-contain"
              />
            </div>
          </div>
        </div>
      </Container>
    </section>
  );
};
