import { Github, Linkedin, Phone, Mail } from "lucide-react";

export default function Header() {
  return (
    <header className="flex flex-col md:flex-row justify-between items-center p-6 bg-[#0a0a0a] text-white shadow-lg">
      <h1 className="text-3xl font-bold font-poppins">Meu Portfólio</h1>
      <nav className="flex gap-6 mt-4 md:mt-0">
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
    </header>
  );
}
