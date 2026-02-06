"use client";

import { useState } from "react";
import Link from "next/link";

export default function Navbar() {
  const [open, setOpen] = useState(false);

  const links = [
    { label: "Accueil", href: "/" },
    { label: "Compétences & Expériences", href: "/competences-experiences" },
    { label: "Projets", href: "/projects" },
    { label: "Contact", href: "/contact" },
  ];

  return (
    <nav
      className="
        fixed top-2 left-1/2 -translate-x-1/2
        w-[95%] md:w-[70%]
        bg-gray-900/70 backdrop-blur-xl
        border border-white/10
        rounded-xl shadow-lg
        z-50
        px-4 py-2
        flex items-center justify-between
      "
    >
      {/* Nom raccourci pour mobile */}
      <h1 className="text-sm md:text-lg font-semibold text-white whitespace-nowrap">
        M. M. Maktar
      </h1>

      {/* Hamburger */}
      <button
        className="md:hidden text-white"
        onClick={() => setOpen(!open)}
      >
        <svg width="26" height="26" fill="currentColor">
          <path d="M4 7h18M4 14h18M4 21h18" />
        </svg>
      </button>

      {/* Menu desktop */}
      <div className="hidden md:flex gap-6 text-sm">
        {links.map((item) => (
          <Link
            key={item.href}
            href={item.href}
            className="relative text-gray-300 font-medium group hover:text-white transition"
          >
            {item.label}
            <span className="absolute left-0 -bottom-1 w-0 h-[2px] bg-blue-500 transition-all duration-300 group-hover:w-full"></span>
          </Link>
        ))}
      </div>

      {/* Menu mobile */}
      {open && (
        <div
          className="
            absolute top-full mt-2 left-0 w-full
            bg-gray-900/90 backdrop-blur-xl
            border border-white/10 rounded-xl
            flex flex-col gap-4 p-4 md:hidden
          "
        >
          {links.map((item) => (
            <Link
              key={item.href}
              href={item.href}
              onClick={() => setOpen(false)}
              className="text-gray-300 font-medium hover:text-white transition"
            >
              {item.label}
            </Link>
          ))}
        </div>
      )}
    </nav>
  );
}
