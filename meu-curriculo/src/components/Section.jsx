import { motion } from "framer-motion";

export default function Section({ title, children }) {
  return (
    <motion.section
      initial={{ opacity: 0, y: 30 }}
      whileInView={{ opacity: 1, y: 0 }}
      transition={{ duration: 0.6 }}
      className="bg-white p-6 rounded-2xl shadow"
    >
      <h2 className="text-2xl font-semibold mb-4 text-green-700">{title}</h2>
      {children}
    </motion.section>
  );
}
