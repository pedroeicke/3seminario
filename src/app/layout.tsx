import type { Metadata } from "next";
import { Navbar } from "@/components/layout/Navbar";
import "./globals.css";

export const metadata: Metadata = {
  title: "3º Seminário Nacional de Contratações Públicas",
  description: "O maior evento de contratações públicas.",
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="pt-BR" suppressHydrationWarning>
      <body
        className="font-inter antialiased bg-black text-white selection:bg-[#FBB03B] selection:text-white"
        suppressHydrationWarning
      >
        <Navbar />
        {children}
      </body>
    </html>
  );
}
