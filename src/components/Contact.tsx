import React from "react";
import { motion } from "framer-motion";
import { Container } from "./Container"; // ajuste o caminho se necessário
import { Phone, Mail, MapPin } from "lucide-react"; // ou outro pacote de ícones

export const Contact: React.FC = () => {
  return (
    <section className="py-16 mb-20 md:mb-10 bg-white">
      <Container>
        <h2 className="text-3xl font-serif text-[#B19763]">Contato</h2>
        <div className="mt-6 grid grid-cols-1 md:grid-cols-2 gap-8">
          {/* Informações de contato */}
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
                <Mail className="w-5 h-5" /> alexandresdosreisadv@gmail.com
              </div>
              <div className="flex items-center gap-3 text-gray-700">
                <MapPin className="w-5 h-5" /> Rua Alberto Bins, 551 - São João Batista - São Leopoldo/RS
              </div>
            </div>
          </div>

          {/* Formulário */}
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
};
