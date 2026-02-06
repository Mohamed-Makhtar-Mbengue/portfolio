"use client";

import { motion } from "framer-motion";
import {FaHtml5,FaCss3Alt,FaJs,FaReact,FaNodeJs,FaPhp,FaJava,FaPython,FaGitAlt,} from "react-icons/fa";
import { SiC, SiCplusplus, SiSharp, SiScrumalliance, SiGitlab,} from "react-icons/si";


const iconMap: Record<string, JSX.Element> = {
  HTML: <FaHtml5 className="text-orange-500" />,
  CSS: <FaCss3Alt className="text-blue-500" />,
  JavaScript: <FaJs className="text-yellow-400" />,
  React: <FaReact className="text-blue-400" />,
  "Node.js": <FaNodeJs className="text-green-500" />,
  PHP: <FaPhp className="text-indigo-400" />,
  Java: <FaJava className="text-red-500" />,
  Python: <FaPython className="text-yellow-300" />,
  C: <SiC className="text-blue-300" />,
  "C++": <SiCplusplus className="text-blue-400" />,
  "C#": <SiSharp className="text-purple-400" />,
  Agile: <SiScrumalliance className="text-green-400" />,
  Scrum: <SiScrumalliance className="text-green-400" />,
  Git: <FaGitAlt className="text-orange-500" />,
  GitLab: <SiGitlab className="text-orange-600" />,
};

const skills = [
  {
    category: "Développement Web",
    items: ["HTML", "CSS", "JavaScript", "React", "Node.js", "PHP"],
  },
  {
    category: "Programmation Orientée Objet",
    items: ["Java", "Python", "C", "C++", "C#"],
  },
  {
    category: "Gestion de Projet",
    items: ["Agile", "Scrum", "Git", "GitLab"],
  },
  {
    category: "Frameworks", items: ["React", "Next.js", "Angular", "Vue.js", "Symfony", "Django"],
  },
  {
    category: "Langues",
    items: ["Français (natif)", "Anglais (courant)", "Arabe (débutant)"],
  },
];

export default function SkillsTable() {
  return (
    <div className="space-y-6">
      {skills.map((skill, index) => (
        <motion.div
          key={skill.category}
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          whileHover={{ scale: 1.03 }}
          viewport={{ once: true }}
          transition={{ duration: 0.5, delay: index * 0.1 }}
          className="
            p-6 rounded-2xl
            bg-gray-800/40 backdrop-blur-xl
            border border-white/10
            shadow-xl
            hover:bg-gray-800/60
            transition-all
          "
        >
          <h3 className="text-2xl font-bold text-white mb-3">
            {skill.category}
          </h3>

          <ul className="space-y-2">
            {skill.items.map((item) => (
              <li
                key={item}
                className="flex items-center gap-3 text-gray-300 text-lg"
              >
                {iconMap[item] ?? "•"} {item}
              </li>
            ))}
          </ul>
        </motion.div>
      ))}
    </div>
  );
}
