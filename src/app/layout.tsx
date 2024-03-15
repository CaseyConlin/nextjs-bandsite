import type { Metadata } from "next";
// import { Inter } from "next/font/google";
// import { roboto, blackHanSans } from "./fonts";
import { Black_Han_Sans } from "next/font/google";

// export const roboto = Roboto({
//   weight: ["400", "500", "700", "900"],
//   subsets: ["latin"],
//   // display: "block",
//   // preload: false,
// });
const blackHanSans = Black_Han_Sans({
  weight: "400",
  subsets: ["latin"],
  display: "swap",
  // preload: false,
});

import "./globals.css";
import NavBar from "@/components/NavBar";
import { ContactFooter } from "@/components/ContactFooter";
import { Footer } from "@/components/Footer";

// const inter = Inter({ subsets: ["latin"] });

export const metadata: Metadata = {
  title: "Mark Brown",
  description: "Folk Americana Country Indie Musician in Ulster County, NY",
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en">
      <body>
        <NavBar />
        {children}
        <ContactFooter />
        <Footer />
      </body>
    </html>
  );
}
