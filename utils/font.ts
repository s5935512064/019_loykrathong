import localFont from "next/font/local";
import { Noto_Sans_Thai } from "next/font/google";

export const notoSanThai = Noto_Sans_Thai({
  subsets: ["thai"],
  weight: ["300", "400", "500", "600", "700"],
  variable: "--font-notosanthai",
  display: "swap",
});

export const fc_ekaluckbold = localFont({
  src: [
    {
      path: "../public/fonts/fc_ekaluck_bold_ver_1.01-webfont.woff2",
      weight: "400",
      style: "normal",
    },
  ],
  variable: "--font-fc_ekaluckbold",
  display: "swap",
});

export const fc_ekaluckregular = localFont({
  src: [
    {
      path: "../public/fonts/FC_Ekaluck_Light.ttf",
      weight: "300",
      style: "normal",
    },
    {
      path: "../public/fonts/FC_Ekaluck_Regular.ttf",
      weight: "400",
      style: "normal",
    },
    {
      path: "../public/fonts/FC_Ekaluck_Bold.ttf",
      weight: "600",
      style: "normal",
    },
  ],
  variable: "--font-fc_ekaluckregular",
  display: "swap",
});

export const Helvetica = localFont({
  src: [
    {
      path: "../public/fonts/helvetica_400_normal.woff2",
      weight: "400",
      style: "normal",
    },
    {
      path: "../public/fonts/helvetica_400_italic.woff2",
      weight: "400",
      style: "italic",
    },

    {
      path: "../public/fonts/helvetica_700_normal.woff2",
      weight: "700",
      style: "normal",
    },

    {
      path: "../public/fonts/helvetica_700_italic.woff2",
      weight: "700",
      style: "italic",
    },
  ],
  variable: "--font-helventica",
  display: "swap",
});
