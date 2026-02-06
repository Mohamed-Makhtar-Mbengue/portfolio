"use client";

import { motion } from "framer-motion";
import { Repo } from "@/lib/github";

export default function ProjectList({ repos }: { repos: Repo[] }) {
  return (
    <div className="grid md:grid-cols-2 gap-4">
      {repos.map((repo, index) => (
        <motion.a
          key={repo.id}
          href={repo.html_url}
          target="_blank"
          rel="noopener noreferrer"
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          whileHover={{ scale: 1.03 }}
          viewport={{ once: true, amount: 0.2 }}
          transition={{ duration: 0.5, delay: index * 0.1 }}
          className="p-4 border rounded bg-white dark:bg-gray-800 shadow-sm hover:shadow-lg transition-all"
        >
          <h3 className="font-semibold text-lg text-gray-800 dark:text-white">
            {repo.name}
          </h3>

          {repo.description && (
            <p className="text-sm text-gray-600 dark:text-gray-300 mt-1">
              {repo.description}
            </p>
          )}

          <p className="text-xs text-gray-500 dark:text-gray-400 mt-2">
            Langage : {repo.language ?? "Non spécifié"}
          </p>
        </motion.a>
      ))}
    </div>
  );
}
