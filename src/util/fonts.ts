import localFont from "next/font/local";
const garamond = localFont({
  src: "../../public/fonts/GaramondPremrPro.otf",
});

const futuraStd = localFont({
  src: [
    {
      path: "../../public/fonts/FuturaStd-Light.otf",
      weight: "200",
      style: "normal",
    },
    {
      path: "../../public/fonts/FuturaStd-Book.otf",
      weight: "400",
      style: "normal",
    },
    {
      path: "../../public/fonts/FuturaStd-Heavy.otf",
      weight: "700",
      style: "normal",
    },
  ],
});

export { futuraStd, garamond };
