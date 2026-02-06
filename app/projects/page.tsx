"use client";

import { useEffect, useState } from "react";
import { motion } from "framer-motion";


type GitHubRepo = {
  id: number; name: string; description: string | null; language: string | null; html_url: string; updated_at: string; fork: boolean;};

export default function ProjectsPage() {
  const [repos, setRepos] = useState<GitHubRepo[]>([]);

  useEffect(() => {
    async function fetchRepos() {
      const response = await fetch(
        "https://api.github.com/users/Mohamed-Makhtar-Mbengue/repos"
      );
      const data: GitHubRepo[] = await response.json();

      // Filtrer les forks et trier par date
      const filtered = data
        .filter((repo) => !repo.fork)
        .sort(
          (a, b) =>
            new Date(b.updated_at).getTime() -
            new Date(a.updated_at).getTime()
        );

      setRepos(filtered);
    }

    fetchRepos();
  }, []);

  return (
    <section className="pt-28 pb-20 px-6 flex flex-col items-center text-center">

      <h2 className="text-4xl font-bold text-white mb-10">Projets GitHub</h2>

      <div className="grid md:grid-cols-3 gap-8 max-w-6xl w-full">
        {repos.map((repo, index) => (
          <motion.div
            key={repo.id}
            initial={{ opacity: 0, y: 30 }}
            whileInView={{ opacity: 1, y: 0 }}
            whileHover={{ scale: 1.05 }}
            viewport={{ once: true }}
            transition={{ duration: 0.5, delay: index * 0.1 }}
            className="
              bg-gray-800/40 backdrop-blur-xl
              border border-white/10
              rounded-2xl shadow-xl
              p-6 text-left
              hover:bg-gray-800/60
              transition-all
            "
          >
            {/* Titre */}
            <h3 className="text-2xl font-bold text-white">
              {repo.name}
            </h3>

            {/* Description */}
            <p className="text-gray-300 mt-2">
              {repo.description || "Aucune description disponible."}
            </p>

            {/* Technologies */}
            <div className="flex flex-wrap gap-2 mt-4">
              {repo.language && (
                <span className="px-3 py-1 text-sm rounded-full bg-blue-600/20 text-blue-300 border border-blue-600/30">
                  {repo.language}
                </span>
              )}
            </div>

            {/* Lien GitHub */}
            <a
              href={repo.html_url}
              target="_blank"
              className="inline-block mt-4 text-blue-400 hover:text-blue-300 underline"
            >
              Voir sur GitHub →
            </a>
          </motion.div>
        ))}
      </div>

    </section>
  );
}
