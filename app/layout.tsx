import type { Metadata } from "next";
import { Poppins } from "next/font/google";
import "./globals.css";
import Navbar from "@/components/layout/NavbarComponents";
import Footer from "@/components/layout/FooterComponents";
import ServiceWorkerRegister from "@/components/ServiceWorkerReg";

const poppins = Poppins({
  variable: "--font-poppins",
  subsets: ["latin"],
  weight: ["400"],
});

export const metadata: Metadata = {
  title: {
    template: "%s | Qur'an Web",
    default: "Qur'an Web",
  },
  description: "Qur'an Web by Lucid Dreamworks Dev ✨.",
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="id">
      <head>
        {/* PWA */}
        <link rel="icon" href="/favicon.ico" />
        <link
          rel="apple-touch-icon"
          href="/img/apple-touch-icon.png"
          sizes="180x180"
        />
        <link
          rel="mask-icon"
          href="/img/web-app-manifest-512x512.png"
          color="#FFFFFF"
        />
        <meta name="theme-color" content="#ffffff" />
        <link rel="manifest" href="/manifest.json" />
        <meta name="viewport" content="width=device-width, initial-scale=1" />
        <meta name="mobile-web-app-capable" content="yes" />
        <meta name="apple-mobile-web-app-capable" content="yes" />
      </head>
      <body className={`${poppins.className} antialiased`}>
        <ServiceWorkerRegister />
        <div className="html-wrapper flex flex-col min-h-screen box-border">
          <Navbar />
          {children}
          <Footer />
        </div>
      </body>
    </html>
  );
}
