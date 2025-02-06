import { Geist, Geist_Mono } from "next/font/google";
import "./globals.css";

import Header from "../components/ui/Header";
import Footer from "../components/ui/Footer";

const geistSans = Geist({
  variable: "--font-geist-sans",
  subsets: ["latin"],
});

const geistMono = Geist_Mono({
  variable: "--font-geist-mono",
  subsets: ["latin"],
});

export const metadata = {
  title: "Dossie",
  description: "Your efficient record management platform",
};

export default function RootLayout({ children }) {
  return (
    <html lang="en">
      <body
        className={`${geistSans.variable} ${geistMono.variable} antialiased`}
      >
 <Header />
        <main>{children}</main>
        <Footer />      </body>
    </html>
  );
}
