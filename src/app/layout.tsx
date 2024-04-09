import { AppRouterCacheProvider } from "@mui/material-nextjs/v14-appRouter";

import { ThemeProvider } from "@mui/material/styles";
import theme from "../theme";
import type { Metadata } from "next";
import Head from "next/head";

import "./globals.css";
import { ContactFooter } from "@/components/ContactFooter";
import { Footer } from "@/components/Footer";
import { NavBar } from "@/components/ui/NavBar";

// export const dynamic = "force-static";

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
