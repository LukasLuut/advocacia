import React, { useState } from "react";
import { AnimatePresence, motion } from "framer-motion";

import { Header } from "./components/Navbar";
import { Hero } from "./components/Hero";
import { About } from "./components//About";
import { Areas } from "./components/Areas";
import { Team } from "./components/Team";
import { Contact } from "./components/Contact";
import { Footer } from "./components/Footer";
import FloatingWhatsApp from "./components/FloatingWhatsApp";

export default function App() {
  const [page, setPage] = useState<string>("home");

  const navigate = (to: string) => {
    if (to === "menu") {
      return setPage((p) => (p === "home" ? "menu" : "home"));
    }
    setPage(to);
    window.scrollTo({ top: 0, behavior: "smooth" });
  };

  return (
    <div className="min-h-full bg-gradient-to-b from-[#fffaf6] to-[#f3efe7] text-gray-900">
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
              <Hero onContact={() => setPage("contact")} areaContainer={() => setPage('areas')} />
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

      {/* Botão WhatsApp flutuante */}
     <FloatingWhatsApp></FloatingWhatsApp>
    </div>
  );
}
