import type { Metadata } from "next";
import "./globals.css";

export const metadata: Metadata = {
  title: "XI-MP-4 Class Website",
  description: "Website kelas XI-MP-4 SMAGA",
};

export default function RootLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return (
    <html lang="id">
      <body>{children}</body>
    </html>
  );
}
