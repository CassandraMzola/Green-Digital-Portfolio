// src/components/TechStack.js
import React from "react";
import { motion } from "framer-motion";
import { SiReact, SiTailwindcss, SiPostgresql, SiPython, SiTableau,SiMicrosoftpowerpoint, // we'll use Power BI logo workaround below
  SiMicrosoftexcel  } from "react-icons/si";
  

const icons = [
  { id: 1, Icon: SiReact, name: "React.js", color: "#61DAFB" },
  { id: 2, Icon: SiTailwindcss, name: "Tailwind", color: "#38BDF8" },
  { id: 3, Icon: SiPostgresql, name: "PostgreSQL", color: "#336791" },
  { id: 4, Icon: SiPython, name: "Python", color: "#3776AB" },
  { id: 5, Icon: SiTableau, name: "Tableau", color: "#E97627" },
  { id: 6, Icon: SiTableau, name: "PowerBI", color: "#E97627" },
  { id: 7, Icon: SiTableau, name: "Excel", color: "#E97627" },
];

function TechStack() {
  return (
    <div className="py-16 text-center bg-gray-50">
      <h2 className="section-heading">Tech Stack</h2>
      <div className="flex flex-wrap justify-center gap-10">
        {icons.map(({ id, Icon, name, color }) => (
          <motion.div
            key={id}
            className="p-6 rounded-2xl shadow-lg bg-white"
            whileHover={{ scale: 1.2, rotate: 5 }}
            animate={{ y: [0, -10, 0] }}
            transition={{ repeat: Infinity, duration: 2, ease: "easeInOut" }}
          >
            <Icon size={60} color={color} />
            <p className="mt-2 text-sm font-medium">{name}</p>
          </motion.div>
        ))}
      </div>
    </div>
  );
}

export default TechStack;
