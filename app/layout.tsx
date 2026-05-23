import type { Metadata } from "next";
import "./globals.css";

export const metadata: Metadata = {
  title: "Writing Coach — 60-second diagnostic",
  description:
    "Paste three emails you sent. Get two patterns weakening your writing — with quoted lines — plus a five-minute drill.",
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en">
      <body className="min-h-screen font-sans">{children}</body>
    </html>
  );
}
