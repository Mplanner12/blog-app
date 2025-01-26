import type { Metadata } from "next";
import { Nunito, Nunito_Sans } from "next/font/google";
import "./globals.css";
import Header from "@/components/Header";
import Footer from "@/components/Footer";
import Subscribe from "@/components/Subscribe";

const nunito = Nunito({
  subsets: ["latin"],
  variable: "--font-nunito",
});

const nunitoSans = Nunito_Sans({
  subsets: ["latin"],
  variable: "--font-nunito-sans", // Use a different variable name
});
export const metadata: Metadata = {
  title: "Tobams Group - Empowering Tech Talent in Africa", // Update title
  description:
    "Tobams Group is an innovative tech talent development firm in Africa, specializing in training, internships, and recruitment.", // Update description
};

export default function RootLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return (
    <html lang="en">
      <head>
        <link rel="icon" href="/tobams-logo.png" />
      </head>
      <body
        className={`${nunito.variable} ${nunitoSans.variable} font-nunito antialiased`} // Use correct font variables and base font
      >
        <Header />
        <main className="max-w-7xl w-full h-fit mx-auto px-5 md:px-16">
          {" "}
          {/* Added max-width and responsive padding */}
          {children}
        </main>
        <Subscribe />
        <Footer />
      </body>
    </html>
  );
}
