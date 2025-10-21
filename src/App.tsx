import React, { useState } from "react";
import { AnimatePresence, motion } from "framer-motion";

import { Header } from "./components/Navbar";
import { Hero } from "./components/Hero";
import { About } from "./components//About";
import { Areas } from "./components/Areas";
import { Team } from "./components/Team";
import { Contact } from "./components/Contact";
import { Footer } from "./components/Footer";

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

      {/* Botão WhatsApp flutuante */}
      <motion.a
        href="https://wa.me/5551995185222"
        className="fixed sm:bottom-20 md:bottom-5 right-6 bg-green-500 text-white rounded-full p-4 shadow-lg"
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
