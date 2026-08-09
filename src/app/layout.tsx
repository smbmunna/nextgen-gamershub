import "./globals.css";
import { Analytics } from "@vercel/analytics/next";
import ToastProvider from "../components/ToastProvider";

export default async function RootLayout({
  children,
}: Readonly<{ children: React.ReactNode }>) {
  return (
    <html lang="en">
      <body className="min-h-full flex flex-col p-4">
        <ToastProvider>{children}</ToastProvider>
        <Analytics />
      </body>
    </html>
  );
}
