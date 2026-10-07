import type { Metadata, Viewport } from "next";
import "./globals.css";
import { Plus_Jakarta_Sans, Bricolage_Grotesque } from "next/font/google";

const body = Plus_Jakarta_Sans({ subsets: ["latin"], weight: ["400", "500", "600", "700", "800"] });
const display = Bricolage_Grotesque({ subsets: ["latin"], variable: "--font-display" });

export const metadata: Metadata = {
  title: "Portfolio | Alwan Rafa Fadilah",
  description:
    "Portfolio Alwan Rafa Fadilah, pelajar RPL yang fokus pada Mobile Development (Flutter, Dart) dan Front-End Development (Next.js).",
  openGraph: {
    title: "Portfolio | Alwan Rafa Fadilah",
    description: "Mobile Developer dan Front-End Developer. Lihat project Flutter dan Next.js saya.",
    type: "website",
    locale: "id_ID",
  },
};

export const viewport: Viewport = { width: "device-width", initialScale: 1, themeColor: "#F4F0FF" };

export default function RootLayout({ children }: { children: React.ReactNode }) {
  return (
    <html lang="id">
      <body className={`${body.className} ${display.variable} text-ink antialiased`}>{children}</body>
    </html>
  );
}
