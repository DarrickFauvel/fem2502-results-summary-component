import type { Metadata } from "next";
import { Hanken_Grotesk } from "next/font/google";
import "./globals.css";



const hankenGrotesk = Hanken_Grotesk({
  variable: "--font-hanken-grotesk",
  subsets: ["latin"],
});

export const metadata: Metadata = {
  title: "Create Next App",
  description: "Generated by create next app",
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en">
      <body
        className={`${hankenGrotesk.variable} antialiased`}
      >
        {children}
      </body>
    </html>
  );
}
