"use client";
import { Roboto } from "next/font/google";
import { Black_Han_Sans } from "next/font/google";
import { createTheme } from "@mui/material/styles";

const roboto = Roboto({
  weight: ["300", "400", "500", "700"],
  subsets: ["latin"],
  display: "swap",
});
const blackHanSans = Black_Han_Sans({
  weight: ["400"],
  subsets: ["latin"],
  display: "swap",
});
declare module "@mui/material/styles" {
  // You can change "subtitle3" name with that you defined in your "theme.js" named of variant's name.
  interface TypographyVariants {
    accent: React.CSSProperties;
  }

  // Allow configuration using `createTheme`
  interface TypographyVariantsOptions {
    accent?: React.CSSProperties;
  }
}

// Update the Typography's variant prop options
declare module "@mui/material/Typography" {
  interface TypographyPropsVariantOverrides {
    accent: true;
  }
}

declare module "@mui/material/Button" {
  interface ButtonPropsVariantOverrides {
    uBYellow: true;
  }
}

const theme = createTheme({
  typography: {
    fontFamily: roboto.style.fontFamily,
    accent: { fontFamily: blackHanSans.style.fontFamily },
  },
  components: {
    MuiButton: {
      variants: [
        {
          props: { variant: "uBYellow" },
          style: {
            textTransform: "none",
            borderRadius: "25px",
            fontSize: "1rem",
            fontFamily: blackHanSans.style.fontFamily,
            backgroundColor: "#E2B164",
            " &:hover": {
              backgroundColor: "#D59F5A",

              boxShadow: "rgba(0, 0, 0, 0.35) 0px 5px 15px",
            },
          },
        },
      ],
    },
  },
});

export default theme;
