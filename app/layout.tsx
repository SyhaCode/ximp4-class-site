import type { Metadata } from "next";
import "./globals.css";
import Script from "next/script"; // <-- 1. INI TAMBAHAN PENTING

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
      <body>
        {children}

        {/* 2. INI KODE ERUDA NYA */}
        {/* Script ini cuma jalan di browser */}
        <Script id="eruda-debug" strategy="lazyOnload">
          {`
            if (typeof window !== 'undefined') {
              const urlParams = new URLSearchParams(window.location.search);
              if (urlParams.get('debug') === 'true') {
                var script = document.createElement('script');
                script.src = "//cdn.jsdelivr.net/npm/eruda";
                document.body.appendChild(script);
                script.onload = function () { eruda.init() };
              }
            }
          `}
        </Script>
      </body>
    </html>
  );
}
