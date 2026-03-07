import "./globals.css";

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
        {children}
      </body>
    </html>
  );
}
