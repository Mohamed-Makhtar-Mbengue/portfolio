"use client";

import { motion } from "framer-motion";
import Image from "next/image";
import SectionTitle from "@/components/SectionTitle";

export default function Home() {
  return (
    <main>

      {/* 1 SECTION HERO */}
      <section className="pt-28 pb-20 px-6 text-center flex flex-col items-center">
        <motion.h1
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.5 }}
          className="text-4xl font-bold text-white mb-4"
        >
          Bienvenue sur mon portfolio
        </motion.h1>

        <motion.p
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.5, delay: 0.2 }}
          className="text-gray-300 max-w-2xl text-lg"
        >
          Je suis <span className="text-white font-semibold">Mbengue Mohamed</span>, 
          développeur passionné par la création d’expériences numériques modernes, 
          performantes et élégantes.
        </motion.p>
      </section>

      {/* 2 SECTION À PROPOS */}
        <section className="pb-20 px-6 flex flex-col items-center text-center">
          <SectionTitle>À propos</SectionTitle>

          <motion.div
            initial={{ opacity: 0, scale: 0.9 }}
            whileInView={{ opacity: 1, scale: 1 }}
            transition={{ duration: 0.5 }}
            className="
              max-w-4xl w-full bg-gray-800/40 backdrop-blur-xl
              border border-white/10 rounded-2xl shadow-xl p-10
            "
          >
            <div className="flex flex-col md:flex-row items-center gap-10 text-left">

              {/* PHOTO */}
              <motion.div
                initial={{ opacity: 0, scale: 0.8 }}
                whileInView={{ opacity: 1, scale: 1 }}
                transition={{ duration: 0.5 }}
              >
                <Image
                  src="/document/profile.jpg"
                  alt="Photo de Mohamed"
                  width={540}
                  height={540}
                  className="rounded-2xl border border-white/10 shadow-lg object-cover"
                />
              </motion.div>

              {/* TEXTE */}
              <motion.div
                initial={{ opacity: 0, x: 30 }}
                whileInView={{ opacity: 1, x: 0 }}
                transition={{ duration: 0.5 }}
                className="space-y-4 text-gray-300"
              >
                <p className="text-lg leading-relaxed">
                  Développeur Full Stack passionné, je mets mon expertise au service de projets innovants et ambitieux. 
                  Mon parcours m’a permis d’acquérir une solide maîtrise de technologies telles que 
                  <span className="text-white font-semibold"> JavaScript, Python, PHP, Java</span>, ainsi que des frameworks modernes comme 
                  <span className="text-white font-semibold"> React, Node.js, Angular, Vue.js, Symfony</span> ou <span className="text-white font-semibold">Django</span>.
                </p>

                <p className="text-lg leading-relaxed">
                  Certifié Scrum Master, j’accorde une importance particulière aux méthodologies Agile et à la collaboration au sein des équipes. 
                  J’aime travailler dans des environnements dynamiques où l’échange d’idées, la communication et l’efficacité collective sont essentiels.
                </p>

                <p className="text-lg leading-relaxed">
                  Curieux, rigoureux et motivé, je suis toujours prêt à relever de nouveaux défis techniques. 
                  Contribuer à la croissance et à l’innovation d’une entreprise est pour moi une véritable source d’inspiration.
                </p>
              </motion.div>
            </div>

            {/* BADGES */}
            <div className="flex flex-wrap justify-center gap-3 mt-10">
              {["Full Stack", "Agile", "Scrum", "Merise", "Low-code" ,"DevOps"].map((badge) => (
                <span
                  key={badge}
                  className="px-4 py-2 rounded-full bg-blue-600/20 text-blue-300 border border-blue-600/30 text-sm"
                >
                  {badge}
                </span>
              ))}
            </div>
          </motion.div>
        </section>

      {/* 3 BOUTONS (PLACÉS APRÈS À PROPOS) */}
      <section className="pb-20 px-6 flex justify-center">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.5 }}
          className="flex gap-4"
        >
          {/* Bouton CV */}
              {/* Voir en ligne */}
          <a 
            href="/document/Mbengue-Mohamed-FullStack_CV.pdf"
            target="_blank" 
            className=" px-6 py-3 rounded-xl border
              border-blue-600 text-blue-300 hover:bg-blue-600
              hover:text-white transition shadow-lg " >
              Voir mon CV
          </a>

          <a
            href="/document/Mbengue-Mohamed-FullStack_CV.pdf"
            download
            className="
              px-6 py-3 rounded-xl
              bg-blue-600 text-white font-semibold
              hover:bg-blue-700 transition
              shadow-lg
            "
          >
            Télécharger mon CV
          </a>

          {/* Bouton Projets */}
          <a
            href="/projects"
            className="
              px-6 py-3 rounded-xl
              border border-blue-600 text-blue-300
              hover:bg-blue-600 hover:text-white transition
              shadow-lg
            "
          >
            Voir mes projets
          </a>
        </motion.div>
      </section>

    </main>
  );
}
