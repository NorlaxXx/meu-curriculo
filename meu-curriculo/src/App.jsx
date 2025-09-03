import { useState } from "react";
import { Github, Linkedin, Phone, Mail, Menu, X } from "lucide-react";
import { motion } from "framer-motion";

export default function App() {
  const [menuOpen, setMenuOpen] = useState(false);

  return (
    <div className="min-h-screen flex flex-col bg-gradient-to-b from-[#070707] to-[#111] text-white">
      {/* Header */}
      <header className="flex justify-between items-center p-6 bg-black/50 backdrop-blur-md shadow-lg sticky top-0 z-50">
        <h1 className="text-3xl font-bold font-poppins">Meu Portfólio</h1>

        {/* Menu Desktop */}
        <nav className="hidden md:flex gap-6">
          <a href="tel:+5571992989940" className="flex items-center gap-2 hover:text-blue-400 transition">
            <Phone size={20} /> (71) 99298-9940
          </a>
          <a href="mailto:seuemail@gmail.com" className="flex items-center gap-2 hover:text-blue-400 transition">
            <Mail size={20} /> Email
          </a>
          <a href="https://github.com/seuusuario" target="_blank" className="flex items-center gap-2 hover:text-blue-400 transition">
            <Github size={20} /> GitHub
          </a>
          <a href="https://linkedin.com/in/seuusuario" target="_blank" className="flex items-center gap-2 hover:text-blue-400 transition">
            <Linkedin size={20} /> LinkedIn
          </a>
        </nav>

        {/* Botão Mobile */}
        <button
          className="md:hidden p-2 rounded-lg bg-black/40 hover:bg-black/60 transition"
          onClick={() => setMenuOpen(!menuOpen)}
        >
          {menuOpen ? <X size={24} /> : <Menu size={24} />}
        </button>
      </header>

      {/* Menu Mobile */}
      {menuOpen && (
        <motion.nav
          initial={{ opacity: 0, y: -20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.3 }}
          className="flex flex-col items-center gap-6 bg-black/90 p-6 md:hidden"
        >
          <a href="tel:+5571992989940" className="flex items-center gap-2 hover:text-blue-400 transition">
            <Phone size={20} /> (71) 99298-9940
          </a>
          <a href="mailto:seuemail@gmail.com" className="flex items-center gap-2 hover:text-blue-400 transition">
            <Mail size={20} /> Email
          </a>
          <a href="https://github.com/seuusuario" target="_blank" className="flex items-center gap-2 hover:text-blue-400 transition">
            <Github size={20} /> GitHub
          </a>
          <a href="https://linkedin.com/in/seuusuario" target="_blank" className="flex items-center gap-2 hover:text-blue-400 transition">
            <Linkedin size={20} /> LinkedIn
          </a>
        </motion.nav>
      )}

      {/* Conteúdo */}
      <main className="flex-1 container mx-auto px-6 py-12 space-y-24">
        {/* Sobre */}
        <section className="text-center space-y-6">
          <motion.h2
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6 }}
            className="text-4xl font-bold font-poppins"
          >
            Sobre Mim
          </motion.h2>
          <p className="max-w-2xl mx-auto text-lg leading-relaxed text-gray-300">
            Sou um desenvolvedor apaixonado por criar soluções modernas e responsivas.
            Tenho experiência em React, Tailwind, Node.js e outros frameworks que ajudam
            empresas a crescer no digital.
          </p>
        </section>

        {/* Serviços */}
        <section>
          <h2 className="text-3xl font-bold font-poppins text-center mb-12">Serviços</h2>
          <div className="grid md:grid-cols-3 gap-8">
            {["Websites Modernos", "Chatbots Inteligentes", "Cartões Digitais"].map((service, i) => (
              <motion.div
                key={i}
                whileHover={{ scale: 1.05 }}
                className="p-6 rounded-2xl bg-black/40 shadow-lg text-center transition"
              >
                <h3 className="text-xl font-semibold mb-4">{service}</h3>
                <p className="text-gray-400">Descrição rápida do serviço oferecido.</p>
              </motion.div>
            ))}
          </div>
        </section>

        {/* Projetos */}
        <section>
          <h2 className="text-3xl font-bold font-poppins text-center mb-12">Projetos</h2>
          <div className="grid md:grid-cols-2 gap-8">
            {[1, 2].map((proj) => (
              <motion.div
                key={proj}
                whileHover={{ scale: 1.03 }}
                className="rounded-2xl overflow-hidden shadow-lg bg-black/40"
              >
                <img
                  src={`https://placehold.co/600x400?text=Projeto+${proj}`}
                  alt={`Projeto ${proj}`}
                  className="w-full h-56 object-cover"
                />
                <div className="p-6">
                  <h3 className="text-xl font-semibold mb-2">Projeto {proj}</h3>
                  <p className="text-gray-400">Breve descrição do projeto {proj}.</p>
                </div>
              </motion.div>
            ))}
          </div>
        </section>

        {/* Contato */}
        <section className="text-center space-y-6">
          <h2 className="text-3xl font-bold font-poppins">Contato</h2>
          <p className="text-gray-300">Entre em contato para trabalharmos juntos!</p>
          <a
            href="mailto:seuemail@gmail.com"
            className="inline-block px-6 py-3 bg-blue-600 rounded-xl shadow-lg hover:bg-blue-500 transition"
          >
            Enviar Email
          </a>
        </section>
      </main>

      {/* Footer */}
      <footer className="bg-black/70 p-6 text-center text-gray-400">
        © {new Date().getFullYear()} - Desenvolvido por Você 🚀
      </footer>
    </div>
  );
}
