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
        fixed top-4 left-1/2 -translate-x-1/2
        w-full mx-2 md:w-[70%]
        bg-gray-900/60 backdrop-blur-xl
        border border-white/10
        rounded-2xl shadow-lg
        z-50
        px-4 py-3
        flex items-center justify-between
        overflow-hidden
      "
    >
      {/* Branding */}
      <h1 className="text-sm md:text-lg font-semibold text-white whitespace-nowrap">
        Mbengue Mohamed Maktar
      </h1>

      
      <button
        className="md:hidden text-white"
        onClick={() => setOpen(!open)}
      >
        <svg width="28" height="28" fill="currentColor">
          <path d="M4 7h20M4 14h20M4 21h20" />
        </svg>
      </button>

      {/* Desktop menu */}
      <div className="hidden md:flex gap-6 text-sm">
        {links.map((item) => (
          <Link
            key={item.href}
            href={item.href}
            className="
              relative text-gray-300 font-medium group
              hover:text-white transition
            "
          >
            {item.label}
            <span
              className="
                absolute left-0 -bottom-1 w-0 h-[2px]
                bg-blue-500 transition-all duration-300
                group-hover:w-full
              "
            ></span>
          </Link>
        ))}
      </div>

      {/* Mobile dropdown */}
      {open && (
        <div
          className="
            absolute top-full mt-3 left-0 w-full
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
