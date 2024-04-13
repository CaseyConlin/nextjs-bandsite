"use client";
import { AppRouterCacheProvider } from "@mui/material-nextjs/v14-appRouter";

import { createContext, useContext } from "react";
import { NavMenuContextProvider } from "@/components/context/navMenuContext";

const ThemeContext = createContext(null);
import { ThemeProvider } from "@mui/material/styles";
import theme from "../theme";
import type { Metadata } from "next";
import Head from "next/head";

import "./globals.css";
import { ContactFooter } from "@/components/ContactFooter";
import { Footer } from "@/components/Footer";
import { NavBar } from "@/components/ui/NavBar";

// export const dynamic = "force-static";

// export const metadata: Metadata = {
//   title: "Mark Brown",
//   description:
//     "Mark Brown is an American musician based in Ulster County, NY, performing and recording Americana, folk, country, & indie music.",
// };

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  // const hideNav = useContext(NavMenuContext);

  // console.log(hideNav);
  return (
    <html lang="en">
      <Head>
        <link rel="shortcut icon" href="/favicon.ico" />
      </Head>
      <body>
        <AppRouterCacheProvider>
          <ThemeProvider theme={theme}>
            <NavMenuContextProvider>
              <NavBar />
              {children}
              <ContactFooter />
              <Footer />
            </NavMenuContextProvider>
          </ThemeProvider>
        </AppRouterCacheProvider>
      </body>
    </html>
  );
}
