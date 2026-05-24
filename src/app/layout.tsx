import type { Metadata } from "next";
import "./globals.css";


export default function RootLayout({children,}: Readonly<{children: React.ReactNode;}>) {
  return (
    <html
      lang="en"
    >
      <body className="min-h-full flex flex-col p-4">{children}</body>
    </html>
  );
}
