import { Roboto, Black_Han_Sans } from "next/font/google";

export const roboto = Roboto({
  weight: ["400", "500", "700", "900"],
  subsets: ["latin"],
  display: "block",
  preload: false,
});
export const blackHanSans = Black_Han_Sans({
  weight: "400",
  subsets: ["latin"],
  display: "block",
  preload: false,
});
