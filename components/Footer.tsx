"use client";

export default function Footer() {
  return (
    <footer
      className="
        mt-20
        w-full
        bg-gray-900/60 backdrop-blur-xl
        border-t border-white/10
        py-6
        text-center
        text-gray-400
      "
    >
      <p className="text-sm">
        © {new Date().getFullYear()} Mbengue Mohamed — Tous droits réservés.
      </p>

      <div className="flex justify-center gap-6 mt-3 text-sm">
        <a
          href="https://github.com/Mohamed-Makhtar-Mbengue"
          target="_blank"
          className="hover:text-white transition"
        >
          GitHub
        </a>

        <a
          href="https://gitlab.com/mmmbengue77"
          target="_blank"
          className="hover:text-white transition"
        >
          GitLab
        </a>

        <a
          href="/contact"
          className="hover:text-white transition"
        >
          Contact
        </a>
      </div>
    </footer>
  );
}
