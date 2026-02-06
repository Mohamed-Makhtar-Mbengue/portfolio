import "./globals.css";
import type { Metadata } from "next";
import Navbar from "@/components/Navbar";
import Footer from "@/components/Footer"; 

export const metadata: Metadata = {
  title: "Portfolio - Mbengue Mohamed",
  description: "Portfolio professionnel de Mbengue Mohamed"
};

export default function RootLayout({ children }: { children: React.ReactNode }) {
  return (
    <html lang="fr" className="dark">
      <body className="bg-gray-900 text-white">
        <Navbar />

        <main className="max-w-5xl mx-auto px-4">
          {children}
        </main>

        <Footer /> 
      </body>
    </html>
  );
}
