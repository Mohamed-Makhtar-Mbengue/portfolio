"use client";

import Link from "next/link";

export default function Navbar() {
  return (
    <nav
      className="
        fixed top-4 left-1/2 -translate-x-1/2
        w-[90%] md:w-[70%]
        bg-gray-900/60 backdrop-blur-xl
        border border-white/10
        rounded-2xl shadow-lg
        z-50
        px-6 py-3
        flex items-center justify-between
      "
    >
      {/* Branding */}
      <h1 className="text-lg font-semibold text-white">Mbengue Mohamed Maktar</h1>

      {/* Navigation */}
      <div className="flex gap-6 text-sm">
        {[
          { label: "Accueil", href: "/" },
          { label: "Compétences & Expériences", href: "/competences-experiences" },
          { label: "Projets", href: "/projects" },
          { label: "Contact", href: "/contact" },
        ].map((item) => (
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
    </nav>
  );
}
