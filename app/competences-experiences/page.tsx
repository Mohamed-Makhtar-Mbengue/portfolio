"use client";

import SectionTitle from "@/components/SectionTitle";
import SkillsTable from "@/components/SkillsTable";
import ExperienceTable from "@/components/ExperienceTable";
import { motion } from "framer-motion";

export default function CompetencesExperiencesPage() {
  return (
    <section className="pt-28 pb-20 px-6">

      {/* TITRE GLOBAL */}
      <div className="text-center mb-12">
        <SectionTitle>Compétences & Expériences</SectionTitle>
        <h2 className="text-3xl font-bold text-white">
          Mon expertise technique & mon parcours
        </h2>
      </div>

      {/* GRID 2 COLONNES */}
      <div className="grid md:grid-cols-2 gap-10 max-w-6xl mx-auto">

        {/* GAUCHE : COMPÉTENCES */}
        <motion.div
          initial={{ opacity: 0, x: -20 }}
          whileInView={{ opacity: 1, x: 0 }}
          transition={{ duration: 0.5 }}
          className="
            bg-gray-800/40 backdrop-blur-xl
            border border-white/10 rounded-2xl shadow-xl
            p-10
          "
        >
          <h3 className="text-2xl font-semibold text-white mb-6">Compétences</h3>
          <SkillsTable />
        </motion.div>

        {/* DROITE : EXPÉRIENCES */}
        <motion.div
          initial={{ opacity: 0, x: 20 }}
          whileInView={{ opacity: 1, x: 0 }}
          transition={{ duration: 0.5 }}
          className="
            bg-gray-800/40 backdrop-blur-xl
            border border-white/10 rounded-2xl shadow-xl
            p-10
          "
        >
          <h3 className="text-2xl font-semibold text-white mb-6">Expériences</h3>
          <ExperienceTable />
        </motion.div>

      </div>
    </section>
  );
}
