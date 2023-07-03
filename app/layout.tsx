import Navbar from "@/components/Navbar";
import "./globals.css";
import Footer from "@/components/Footer";
import {
  SharpSans500,
  SharpSans700,
  SharpSans800,
  nunito400,
  nunito700,
  nunito800,
} from "@/styles/fonts";
import { Metadata } from "next";
import CookieBanner from "@/components/CookieBanner";

export const metadata: Metadata = {
  title: "Cargo",
  description: "developed by msiraj"
};

export default function RootLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return (
    <html
      lang="en"
      className={`${nunito400.variable} ${nunito700.variable} ${nunito800.variable} ${SharpSans800.variable} ${SharpSans500.variable} ${SharpSans700.variable}`}
    >
      <body suppressHydrationWarning={true} className="relative">
        <Navbar />
        <main>{children}</main>
        <Footer />
        <CookieBanner />
      </body>
    </html>
  );
}
