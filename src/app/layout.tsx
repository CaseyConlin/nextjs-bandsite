import { AppRouterCacheProvider } from "@mui/material-nextjs/v14-appRouter";

import { ThemeProvider } from "@mui/material/styles";
import theme from "../theme";
import type { Metadata } from "next";
import Head from "next/head";

import "./globals.css";
import NavBar from "@/components/ui/NavBar";
import { ContactFooter } from "@/components/ContactFooter";
import { Footer } from "@/components/Footer";
// import { Inter } from "next/font/google";
// import { roboto, blackHanSans } from "./fonts";
// import { Black_Han_Sans } from "next/font/google";

// export const roboto = Roboto({
//   weight: ["400", "500", "700", "900"],
//   subsets: ["latin"],
//   // display: "block",
//   // preload: false,
// });
// const blackHanSans = Black_Han_Sans({
//   weight: "400",
//   subsets: ["latin"],
//   display: "swap",
//   // preload: false,
// });

// const inter = Inter({ subsets: ["latin"] });

export const dynamic = "force-static";

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
      <Head>
        <link rel="shortcut icon" href="/favicon.ico" />
      </Head>
      <body>
        <AppRouterCacheProvider>
          <ThemeProvider theme={theme}>
            <NavBar />
            {children}
            <ContactFooter />
            <Footer />
          </ThemeProvider>
        </AppRouterCacheProvider>
      </body>
    </html>
  );
}
