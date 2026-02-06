"use client";

import { motion } from "framer-motion";

const experiences = [
  {
    title: "Alternant Full Stack & Support Projet – Hydronext",
    period: "Mars 2023 – Janvier 2025",
    tasks: [
      "Développement et optimisation d’applications de gestion clients",
      "Analyse et résolution d’anomalies applicatives",
      "Migration vers des technologies récentes",
    ],
  },
  {
    title: "Stagiaire Chef de Projet IT – Avancial (SNCF)",
    period: "Juin 2022 – Décembre 2022",
    tasks: [
      "Suivi des incidents et anomalies",
      "Coordination avec les équipes techniques",
      "Planification et priorisation des actions",
    ],
  },
  {
    title: "Apprenti Développeur Full Stack – ESTIAM",
    period: "Septembre 2021 – Juin 2022",
    tasks: [
      "Analyse des besoins fonctionnels",
      "Développement React, Node, NestJS, Next.js",
      "Collaboration en Agile (Scrum)",
    ],
  },
  {
    title: "Développeur Full Stack – Digital Brain",
    period: "Janvier 2021 – Août 2021",
    tasks: [
      "Développement de fonctionnalités front-end et back-end",
      "Intégration d’API et optimisation des performances",
      "Participation à la conception technique et aux revues de code",
    ],
  },
];


export default function ExperienceTable() {
  return (
    <div className="relative border-l border-white/20 pl-8 space-y-10">

      {experiences.map((exp, index) => (
        <motion.div
          key={exp.title}
          initial={{ opacity: 0, x: -30 }}
          whileInView={{ opacity: 1, x: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.5, delay: index * 0.1 }}
          className="relative"
        >
          {/* Point de timeline */}
          <div className="absolute -left-4 top-2 w-3 h-3 bg-blue-500 rounded-full shadow-lg"></div>

          <div
            className="
              bg-gray-800/40 backdrop-blur-xl
              border border-white/10
              rounded-2xl shadow-xl
              p-6
            "
          >
            <h3 className="text-2xl font-bold text-white">{exp.title}</h3>
            <p className="text-gray-400 mb-3">{exp.period}</p>

            <ul className="space-y-1 text-gray-300">
              {exp.tasks.map((task) => (
                <li key={task}>• {task}</li>
              ))}
            </ul>
          </div>
        </motion.div>
      ))}

    </div>
  );
}
