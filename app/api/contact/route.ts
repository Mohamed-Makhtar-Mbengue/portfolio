import { NextResponse } from "next/server";

export async function POST(req: Request) {
  const data = await req.formData();

  // Anti-spam honeypot
  if (data.get("website")) {
    return NextResponse.json({ success: true });
  }

  const email = data.get("email")?.toString();
  if (!email || !email.includes("@")) {
    return NextResponse.json({ success: false, error: "Email invalide" });
  }

  try {
    // Envoi vers Formspree
    const formspreeRes = await fetch("https://formspree.io/f/xojnabwa", {
      method: "POST",
      body: data,
      headers: { Accept: "application/json" },
    });

    if (!formspreeRes.ok) {
      return NextResponse.json({ success: false, error: "Erreur Formspree" });
    }

    return NextResponse.json({ success: true });
  } catch (error) {
    return NextResponse.json({ success: false, error });
  }
}
