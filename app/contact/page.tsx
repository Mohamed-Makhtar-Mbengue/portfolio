"use client";

import { useState } from "react";
import { motion } from "framer-motion";

export default function Contact() {
  const [username, setUsername] = useState("");
  const [popup, setPopup] = useState(false);

  const handleSubmit = async (e: any) => {
    e.preventDefault();

    const form = e.target;
    const data = new FormData(form);

    const email = data.get("email")?.toString();
    if (!email || !email.includes("@")) {
      alert("Veuillez entrer une adresse email valide.");
      return;
    }

    const res = await fetch("/api/contact", {
      method: "POST",
      body: data,
    });

    const result = await res.json();

    if (result.success) {
      setPopup(true);
      form.reset();
      setTimeout(() => setPopup(false), 4000);
    } else {
      alert("Une erreur est survenue. Réessayez plus tard.");
    }
  };

  return (
    <section className="pt-28 pb-20 px-6 flex flex-col items-center text-center">
      {/* TITRE */}
      <motion.div
        initial={{ opacity: 0, y: 20 }}
        whileInView={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.5 }}
        className="mb-10"
      >
        <h2 className="text-3xl font-bold text-white">Contact</h2>
      </motion.div>

      <div className="grid md:grid-cols-2 gap-10 max-w-5xl w-full">

        {/* GAUCHE */}
        <motion.div
          initial={{ opacity: 0, x: -20 }}
          whileInView={{ opacity: 1, x: 0 }}
          transition={{ duration: 0.5 }}
          className="
            bg-gray-800/40 backdrop-blur-xl
            border border-white/10
            rounded-2xl shadow-xl
            p-10 space-y-6 text-left
          "
        >
          <h3 className="text-2xl font-semibold text-white mb-4">Mes coordonnées</h3>

          <p className="text-gray-300 text-lg">📍 8 Rue Jean Mermoz, 93160 Noisy-le-Grand</p>
          <p className="text-gray-300 text-lg">📞 07 61 94 13 96</p>
          <p className="text-gray-300 text-lg">📧 mohamedmbengue62@yahoo.fr</p>

          <div className="flex flex-col space-y-3 mt-6">
            <a href="https://github.com/Mohamed-Makhtar-Mbengue" target="_blank" className="flex items-center gap-2 text-gray-300 hover:text-green-400 transition">
              🐙 GitHub
            </a>
            <a href="https://gitlab.com/mmmbengue77" target="_blank" className="flex items-center gap-2 text-gray-300 hover:text-green-400 transition">
              🦊 GitLab
            </a>
          </div>
        </motion.div>

        {/* FORMULAIRE */}
        <motion.div
          initial={{ opacity: 0, x: 20 }}
          whileInView={{ opacity: 1, x: 0 }}
          transition={{ duration: 0.5 }}
          className="
            bg-gray-800/40 backdrop-blur-xl
            border border-white/10
            rounded-2xl shadow-xl
            p-10 text-left
          "
        >
          <p className="text-gray-300 text-lg mb-6">
            Une question, une opportunité, un projet ?  
            Je suis toujours ouvert à discuter.
          </p>

          <form onSubmit={handleSubmit} className="space-y-6">

            {/* Honeypot anti-spam */}
            <input
              type="text"
              name="website"
              className="hidden"
              tabIndex={-1}
              autoComplete="off"
            />

            <div>
              <label className="text-gray-300">Nom</label>
              <input 
                type="text" 
                name="name" 
                required onChange={(e) => setUsername(e.target.value)} 
                className="w-full mt-1 p-3 rounded-xl bg-gray-900/40 border border-white/10 text-white" />
            </div>

            <div>
              <label className="text-gray-300">Email</label>
              <input
                type="email"
                name="email"
                required
                className="w-full mt-1 p-3 rounded-xl bg-gray-900/40 border border-white/10 text-white"
              />
            </div>

            <div>
              <label className="text-gray-300">Message</label>
              <textarea
                name="message"
                rows={5}
                required
                className="w-full mt-1 p-3 rounded-xl bg-gray-900/40 border border-white/10 text-white"
              ></textarea>
            </div>

            <button
              type="submit"
              className="w-full py-3 rounded-xl bg-blue-600 text-white font-semibold hover:bg-blue-700 transition"
            >
              Envoyer
            </button>
          </form>

          {/* POPUP PREMIUM */}
          {popup && (
            <motion.div
              initial={{ opacity: 0, y: 10 }}
              animate={{ opacity: 1, y: 0 }}
              className="
                mt-6 p-4 rounded-xl shadow-xl
                bg-gradient-to-r from-blue-600 to-indigo-600
                text-white text-center font-semibold
              "
            >
              🚀 Merci pour votre message {username || "!"}  
              <br />
              Je reviens vers vous très rapidement.
            </motion.div>
          )}
        </motion.div>
      </div>
    </section>
  );
}
