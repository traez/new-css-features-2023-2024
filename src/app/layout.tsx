import type { Metadata } from "next";
/* import localFont from "next/font/local"; */
import "./globals.css";
import Header from "@/components/Header";
import Footer from "@/components/Footer";

/* const geistSans = localFont({
  src: "./fonts/GeistVF.woff",
  variable: "--font-geist-sans",
  weight: "100 900",
});
const geistMono = localFont({
  src: "./fonts/GeistMonoVF.woff",
  variable: "--font-geist-mono",
  weight: "100 900",
}); */

export const metadata: Metadata = {
  title: "New CSS features 2023-2024",
  description: "Created by Trae Zeeofor",
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en">
      <body className="antialiased font-trebuchetMs flex flex-col min-h-screen">
        <Header />
        <main className="flex-grow bg-[#F0FFFF]">{children}</main>
        <Footer />
      </body>
    </html>
  );
}

{
  /* <body
className={`${geistSans.variable} ${geistMono.variable} antialiased`}
> */
}
