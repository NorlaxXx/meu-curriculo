import { motion } from "framer-motion";
import Header from "./components/Header";
import Section from "./components/Section";
import Footer from "./components/Footer";

export default function App() {
    return (
        <div className="min-h-screen bg-gray-100 text-gray-800 font-sans">
            <Header />

            <main className="max-w-3xl mx-auto p-6 space-y-12">
                <Section title="Objetivo">
                    <p>
                        Em busca do meu primeiro estágio na área de Desenvolvimento de Sistemas.
                    </p>
                </Section>

                <Section title="Experiência">
                    <ul className="list-disc list-inside space-y-2">
                        <li>
                            <b>Moura Dubeux</b> – Aprendiz Auxiliar Administrativo (atualmente)
                        </li>
                    </ul>
                </Section>

                <Section title="Formação">
                    <ul className="list-disc list-inside space-y-2">
                        <li>Ensino Médio Completo</li>
                        <li>Técnico em Desenvolvimento de Sistemas – SENAI (em formação)</li>
                    </ul>
                </Section>

                <Section title="Habilidades">
                    <div className="flex gap-2 flex-wrap">
                        {["Python", "Java", "Node.js", "JavaScript", "SQL", "Docker"].map((skill) => (
                            <motion.span
                                key={skill}
                                whileHover={{ scale: 1.1 }}
                                className="bg-green-600 text-white px-3 py-1 rounded-full shadow"
                            >
                                {skill}
                            </motion.span>
                        ))}
                    </div>
                </Section>
            </main>

            <Section title="Currículo em PDF">
                <a
                    href="/curriculo.pdf"
                    download="Curriculo-Eliel-Santos.pdf"
                    className="inline-block bg-green-700 text-white px-4 py-2 rounded-lg shadow hover:bg-green-800 transition"
                >
                    📄 Baixar PDF
                </a>
            </Section>


            <Footer />
        </div>
    );
}
