/*
Advogado Site Prototype (TypeScript + React + Tailwind + Framer Motion)
------------------------------------------------------
Install:
  npm install framer-motion lucide-react
Ensure Tailwind is configured (https://tailwindcss.com/docs/guides/vite)
*/
import { motion, AnimatePresence } from "framer-motion";
import React, { useState } from "react";
import imgAlex from "./assets/Alexandre-Reis.png"
import imgAlex2 from "./assets/Alexandre-Reis-md.png"
import imgAlex3 from "./assets/Alexandre-Reis-sm.png"
import logoIcon from "./assets/logoAdv2.png"

import { Phone, Mail, MapPin, Linkedin, Calendar, Award, LucideIcon, Wrench, ShoppingBag } from "lucide-react";

// --- Paleta de cores elegante
const COLORS = {
  primary: "#B19763",     // dourado elegante
  dark: "#1F1F1F",        // fundo escuro (gray-900)
  light: "#F6F3EE",       // cinza claro para contraste
  textDark: "#E5E5E5",    // texto claro sobre fundo escuro
  whiteSoft: "#FFF8F0",
};
// --- Types
interface Area {
  title: string;
  desc: string;
  icon: LucideIcon;
}

interface TeamMember {
  name: string;
  oab: string;
  description: string;
  photoUrl: any;
  bgUrl: string;
  linkedin?: string;
  facebook?: string;
}

interface ContainerProps {
  children: React.ReactNode;
}

interface HeaderProps {
  onNavigate: (to: string) => void;
  current: string;
}

interface HeroProps {
  onContact: () => void;
}

// --- Data //ESSE FOI
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
    title: "Trabalista",
    desc: "Acordos, inventários, separações e tutela nos momentos delicados.",
    icon: Wrench,
  },
];

const SAMPLE_TEAM: TeamMember[] = [
  {
    name: "Dr. Alexandre Reis",
    oab: "OAB/SP 123456",
    description:
      "Advogado especializado em Direito Civil e Empresarial — estratégia e ética.",
    photoUrl:imgAlex2,
    bgUrl: "https://images.pexels.com/photos/7876050/pexels-photo-7876050.jpeg",
  },
];

// --- Small reusable components ///ESSE FOI
function Container({ children }: ContainerProps) {
  return <div className="max-w-6xl mx-auto px-4">{children}</div>;
}
// --- Header//ESSE FOI
function Header({ onNavigate, current }: HeaderProps) {
  return (
    <header className="fixed w-full top-0 left-0 bg-black/80 backdrop-blur z-40 shadow-[0_0_15px_#0a0a0a]  border-b border-gray-800">
      <Container>
        <nav className="flex items-center justify-between py-4">
          <div className="flex items-center gap-3">
            <div className="flex flex-row items-center text-2xl  font-serif text-[#B19763]">
              <img src={logoIcon} alt="logo" className="h-10 mr-3" />
              Dr. Alexandre Reis
            </div>
            <div className="text-xs text-gray-400">Advocacia</div>
          </div>

          <div className="hidden md:flex items-center gap-6 text-sm">
            {[
              ["home", "Home"],
              ["about", "Sobre"],
              ["areas", "Áreas"],
              ["team", "Equipe"],
              ["contact", "Contato"],
            ].map(([id, label]) => (
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
                  stroke={COLORS.textDark}
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
}
//ESSE FOI
function Hero({ onContact }: HeroProps) {
  return (
    <section className="min-h-[60vh] flex items-center pt-2 pb-4">
      <Container>
        <div className="grid grid-cols-1 md:grid-cols-2 gap-8 items-center">
          <motion.div
            initial={{ opacity: 0, x: -20 }}
            animate={{ opacity: 1, x: 0 }}
            transition={{ duration: 0.6 }}
            
          >
            <div className="flex flex-row">
            
              <h1 className="text-4xl md:text-5xl font-serif leading-tight text-[#0b0b0b]">
                Dr. Alexandre Reis
              </h1>
            </div>
           
            <p className="mt-4 text-lg text-gray-600 max-w-xl">
              Defendendo seus direitos com ética, estratégia e excelência
              jurídica.
            </p>

            <div className="mt-6 flex gap-3">
              <button
                onClick={onContact}
                className="bg-[#B19763]  text-white px-5 py-3 rounded-md  shadow-md"
              >
                Agende uma consulta
              </button>
              <a
                href="#areas"
                className="px-5 py-3 rounded-md border border-gray-200"
              >
                Áreas de atuação
              </a>
            </div>

            <div className="flex flex-col sm:flex-row mt-3  gap-3 sm:gap-6 items-start sm:items-center text-gray-600">
              <div className="flex items-center  gap-2">
                <Phone className="w-4 h-4" /> <span>+55 (51) 3592-4545
</span>
              </div>
              <div className="flex items-center gap-2">
                <Mail className="w-4 h-4" /> <span>contato@advogado.com</span>
              </div>
            </div>
          </motion.div>

          <motion.div
            initial={{ opacity: 0, x: 20 }}
            animate={{ opacity: 1, x: 0 }}
            transition={{ duration: 0.6 }}
            className="relative"
          >
            <div className="rounded-2xl sm:w-90  overflow-hidden border-2 border-[#B19763] shadow-xl ">
              <img
                src={imgAlex}
                alt="advogado"
                className="w-md  "
              />
            </div>
          </motion.div>
        </div>
      </Container>
    </section>
  );
}
//ESSE FOI
function About() {
  return (
    <section className="py-16">
      <Container>
        <div className="md:flex gap-8 items-center">
          <div className="md:w-1/2">
            <h2 className="text-3xl font-serif text-[#B19763]">Sobre</h2>
            <p className="mt-4 text-gray-700">
             Sou Alexandre Reis, advogado trabalhista formado desde 1997. Ao longo de mais de duas décadas de atuação, especializei-me na defesa dos direitos de trabalhadores, com foco em casos envolvendo grandes redes de fast food, como Burger King e McDonald’s.

Minha experiência me permite oferecer um atendimento estratégico e personalizado, garantindo que cada cliente tenha seus direitos respeitados e sua voz ouvida. Acredito que a advocacia trabalhista vai além da lei: é sobre justiça, compromisso e proteção de quem confia no meu trabalho.
            </p>

            <ul className="mt-6 text-gray-700 space-y-2">
              <li>• OAB/RS 123456</li>
              <li>• Formado em Direito Empresarial</li>
              <li>• Mais de 25 anos de experiência defendendo trabalhadores e seus direitos em empresas de grande porte.</li>
            </ul>
          </div>

          <div className="md:w-1/2 mt-8 md:mt-0">
            <div className="rounded-xl overflow-hidden shadow-[0_0_15px_#0a0a0a]">
              <img
                src={imgAlex3}
                alt="profile"
                className="w-full object-comtain  "
              />
            </div>
          </div>
        </div>
      </Container>
    </section>
  );
}

//ESSE FOI
function Areas() {
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
}

//ESSE FOI
function Team() {
  return (
    <section className="py-16 ">
      <Container>
        <h2 className="text-3xl font-serif text-[#B19763]">Equipe</h2>
        <div className="mt-6 space-y-8  ">
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
                    className="w-32 h-32 md:w-40 md:h-40 rounded-full object-cover border-4 border-[#B19763]/80"
                  />
                  <div className="text-left text-white">
                    <h3 className="text-2xl font-serif">{m.name}</h3>
                    <p className="text-[#B19763] italic mt-1">{m.oab}</p>
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
}

//ESSE FOI
function Contact() {
  return (
    <section className="py-16 bg-white">
      <Container>
        <h2 className="text-3xl font-serif text-[#B19763]">Contato</h2>
        <div className="mt-6 grid grid-cols-1 md:grid-cols-2 gap-8">
          <div>
            <p className="text-gray-700">
              Agende uma consulta ou envie sua mensagem. Responderemos em até 24
              horas úteis.
            </p>

            <div className="mt-6 space-y-4">
              <div className="flex items-center gap-3 text-gray-700">
                <Phone className="w-5 h-5" /> +55 (51) 3592-4545

              </div>
              <div className="flex items-center gap-3 text-gray-700">
                <Mail className="w-5 h-5" /> contato@advogado.com
              </div>
              <div className="flex items-center gap-3 text-gray-700">
                <MapPin className="w-5 h-5" /> Rua Alberto Bins, 551 - São João Batista - São Leopoldo/RS
              </div>
            </div>
          </div>

          <motion.form
            initial={{ opacity: 0, y: 10 }}
            animate={{ opacity: 1, y: 0 }}
            className="space-y-3 bg-gray-50 p-6 rounded"
          >
            <input className="w-full p-3 rounded border" placeholder="Nome" />
            <input className="w-full p-3 rounded border" placeholder="E-mail" />
            <input className="w-full p-3 rounded border" placeholder="Telefone" />
            <textarea
              className="w-full p-3 rounded border"
              rows={5}
              placeholder="Mensagem"
            />
            <button
              type="button"
              className="bg-[#B19763] text-white px-4 py-3 rounded"
            >
              Enviar
            </button>
          </motion.form>
        </div>
      </Container>
    </section>
  );
}

function Footer() {
  return (
    <footer className="py-8 mt-12 fixed bottom-0 w-screen  bg-black/80 backdrop-blur shadow-[0_0_15px_#0a0a0a]  border-b border-gray-800 ">
      <Container>
        <div className=" flex flex-col md:flex-row items-center justify-between gap-4">
          <div className="text-sm text-[#E5E5E5]">
            © {new Date().getFullYear()} Dr. Alexandre Reis — Todos os direitos
            reservados
          </div>
 
          <div className="flex items-center gap-4 text-[#B19763]">
            <a href="#">LinkedIn</a>
            <a href="#">OAB</a>
          </div>
        </div>
      </Container>
    </footer>
  );
}

// --- Main App
export default function AdvogadoSitePrototype() {
  const [page, setPage] = useState<string>("home");

  const navigate = (to: string) => {
    if (to === "menu")
      return setPage((p) => (p === "home" ? "menu" : "home"));
    setPage(to);
    window.scrollTo({ top: 0, behavior: "smooth" });
  };
 return (
    <div className="min-h-screen bg-gradient-to-b from-[#fffaf6] to-[#f3efe7] text-gray-900">
      <Header onNavigate={navigate} current={page} />

      <main className="pt-20">
        <AnimatePresence mode="wait">
          {page === "home" && (
            <motion.div
              key="home"
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              exit={{ opacity: 0, y: -20 }}
              transition={{ duration: 0.5 }}
            >
              <Hero onContact={() => setPage("contact")} />
              <Areas />
              <Team />
              <Contact />
            </motion.div>
          )}

          {page === "about" && (
            <motion.div
              key="about"
              initial={{ opacity: 0, x: 20 }}
              animate={{ opacity: 1, x: 0 }}
              exit={{ opacity: 0, x: -20 }}
              transition={{ duration: 0.5 }}
            >
              <About />
            </motion.div>
          )}

          {page === "areas" && (
            <motion.div
              key="areas"
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              exit={{ opacity: 0, y: -20 }}
              transition={{ duration: 0.5 }}
            >
              <Areas />
            </motion.div>
          )}

          {page === "team" && (
            <motion.div
              key="team"
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              exit={{ opacity: 0, y: -20 }}
              transition={{ duration: 0.5 }}
            >
              <Team />
            </motion.div>
          )}

          {page === "contact" && (
            <motion.div
              key="contact"
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              exit={{ opacity: 0, y: -20 }}
              transition={{ duration: 0.5 }}
            >
              <Contact />
            </motion.div>
          )}
        </AnimatePresence>
      </main>

      <Footer />

      <motion.a
        href="https://wa.me/5511999999999"
        className="fixed bottom-6 right-6 bg-green-500 text-white rounded-full p-4 shadow-lg"
        aria-label="WhatsApp"
        animate={{
          scale: [1, 1.1, 1],
          rotate: [0, 5, -5, 0],
        }}
        transition={{ repeat: Infinity, duration: 2 }}
      >
        <svg width="20" height="20" viewBox="0 0 24 24" fill="none">
          <path
            d="M21 12.1c0 4.9-4 8.9-8.9 8.9a8.8 8.8 0 01-4-.95L3 21l1.9-5.1A8.9 8.9 0 012.1 12C2.1 7.1 6 3.1 11 3.1S21 7.1 21 12.1z"
            stroke="white"
            strokeWidth="1.2"
            strokeLinecap="round"
            strokeLinejoin="round"
          />
        </svg>
      </motion.a>
    </div>
  );
}
