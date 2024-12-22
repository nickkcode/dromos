import type { Metadata } from "next";
import "./globals.css";

export const metadata: Metadata = {
  title: "Dromos",
  description: "AI powered study assistant",
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en">
      <body
        className={`antialiased`}
      >
        {children}
      </body>
    </html>
  );
}
