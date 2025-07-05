import type { Metadata } from "next";
import { Poppins } from "next/font/google";
import "./globals.css";
import Navbar from "@/components/layout/NavbarComponents";
import Footer from "@/components/layout/FooterComponents";

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
  description: "Qur'an Web by DreamWeavers Devs ✨.",
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="id">
      <body className={`${poppins.className} antialiased`}>
        <div className="html-wrapper flex flex-col min-h-screen box-border">
          <Navbar />
          {children}
          <Footer />
        </div>
      </body>
    </html>
  );
}
