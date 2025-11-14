import React, { useState } from "react";
import { motion } from "framer-motion";
import { Container } from "./Container";
import { Phone, Mail, Loader2 } from "lucide-react";
import emailjs from "emailjs-com";
import toast, { Toaster } from "react-hot-toast";

export const Contact: React.FC = () => {
  const [form, setForm] = useState({
    name: "",
    email: "",
    phone: "",
    message: "",
  });
  const [loading, setLoading] = useState(false);

  const handleChange = (
    e: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement>
  ) => {
    setForm({ ...form, [e.target.name]: e.target.value });
  };

  // validação básica de e-mail e telefone
  const validateForm = () => {
    const emailRegex = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;
    const phoneRegex = /^\(?\d{2}\)?[\s-]?\d{4,5}-?\d{4}$/;

    if (!form.name.trim()) return "O nome é obrigatório.";
    if (!form.email.trim() || !emailRegex.test(form.email))
      return "Digite um e-mail válido.";
    if (form.phone && !phoneRegex.test(form.phone))
      return "Digite um telefone válido (ex: (51) 99999-9999).";
    if (!form.message.trim()) return "A mensagem é obrigatória.";

    return null;
  };

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault();
    const error = validateForm();

    if (error) {
      toast.error(error);
      return;
    }

    setLoading(true);

    try {
      await emailjs.send(
        "service_21wm11a", // ex: service_abc123
        "template_ro9xklh", // ex: template_xyz456
        {
          name: form.name,
          email: form.email,
          message: form.message,
          phone: form.phone,
          title: "Contato via site",
        },
        "G7Yz8VdCD1EO9JRF2" // ex: V5GJkA2xZ7wLq3bPB
      );

      toast.success("Mensagem enviada com sucesso!");
      setForm({ name: "", email: "", phone: "", message: "" });
    } catch (error) {
      console.error(error);
      toast.error("Erro ao enviar a mensagem. Tente novamente mais tarde.");
    } finally {
      setLoading(false);
    }
  };

  return (
    <section className="py-16 mb-20 md:mb-10 bg-white ">
      <Toaster position="top-center" />

      <Container>
        <motion.h2
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.4 }}
          className="text-3xl font-serif text-[#B19763] mb-3"
        >
          Contato
        </motion.h2>

        <motion.p
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.5, delay: 0.1 }}
          className="text-gray-700 mb-8"
        >
          Agende uma consulta ou envie sua mensagem. Responderemos em até 24
          horas úteis.
        </motion.p>

        <div className="grid grid-cols-1 md:grid-cols-2 gap-10">
          {/* Informações */}
          <motion.div
            initial={{ opacity: 0, x: -30 }}
            whileInView={{ opacity: 1, x: 0 }}
            transition={{ duration: 0.4 }}
            className="space-y-5 text-gray-700"
          >
            
            <div className="flex items-center gap-3">
              <Phone className="w-5 h-5 text-[#B19763]" /> +55 (48) 9 8806-5502
            </div>
            <div className="flex items-center gap-3">
              <Phone className="w-5 h-5 text-[#B19763]" /> +55 (51) 9 9518-5222
            </div>
            <div className="flex items-center gap-3">
              <Mail className="w-5 h-5 text-[#B19763]" /> alexandresdosreisadv@gmail.com
            </div>
            
          </motion.div>

          {/* Formulário */}
          <motion.form
            onSubmit={handleSubmit}
            initial={{ opacity: 0, y: 30 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.4 }}
            className="space-y-4 bg-gray-50 p-6 rounded-xl shadow-md"
          >
            <input
              name="name"
              value={form.name}
              onChange={handleChange}
              placeholder="Nome *"
              className="w-full p-3 rounded border border-gray-300 focus:outline-none focus:ring-2 focus:ring-[#B19763]"
            />
            <input
              name="email"
              type="email"
              value={form.email}
              onChange={handleChange}
              placeholder="E-mail *"
              className="w-full p-3 rounded border border-gray-300 focus:outline-none focus:ring-2 focus:ring-[#B19763]"
            />
            <input
              name="phone"
              value={form.phone}
              onChange={handleChange}
              placeholder="Telefone (opcional)"
              className="w-full p-3 rounded border border-gray-300 focus:outline-none focus:ring-2 focus:ring-[#B19763]"
            />
            <textarea
              name="message"
              value={form.message}
              onChange={handleChange}
              rows={5}
              placeholder="Mensagem *"
              className="w-full p-3 rounded border border-gray-300 focus:outline-none focus:ring-2 focus:ring-[#B19763]"
            />

            <button
              type="submit"
              disabled={loading}
              className={`flex items-center justify-center gap-2 w-full bg-[#B19763] text-white px-4 py-3 rounded transition ${
                loading
                  ? "opacity-70 cursor-not-allowed"
                  : "hover:bg-[#9e8756] hover:scale-[1.01]"
              }`}
            >
              {loading ? (
                <>
                  <Loader2 className="animate-spin w-5 h-5" /> Enviando...
                </>
              ) : (
                "Enviar Mensagem"
              )}
            </button>
          </motion.form>
        </div>
      </Container>
    </section>
  );
};
