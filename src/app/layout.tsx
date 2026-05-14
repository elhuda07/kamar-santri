import type { Metadata } from "next";
import { Plus_Jakarta_Sans } from "next/font/google";
import "./globals.css";

const plusJakarta = Plus_Jakarta_Sans({
  subsets: ["latin"],
  variable: "--font-plus-jakarta",
});

export const metadata: Metadata = {
  title: "Kamar Santri — Platform Pesantren Digital",
  description:
    "Platform pembelajaran modern untuk pesantren. Menghubungkan santri, ustadz, dan ilmu dalam satu tempat.",
  keywords: ["pesantren", "santri", "pembelajaran", "islam", "edtech"],
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="id" className={`${plusJakarta.variable} h-full`}>
      <body className="min-h-full antialiased">{children}</body>
    </html>
  );
}
