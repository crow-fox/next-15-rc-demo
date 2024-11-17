import type { Metadata } from "next";
import "./globals.css";

export const metadata: Metadata = {
  title: "Next.js 15 RC Demo",
};

export const experimental_ppr = true;

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="ja">
      <body className="grid place-content-center min-h-svh bg-stone-800 text-stone-200">
        {children}
      </body>
    </html>
  );
}
