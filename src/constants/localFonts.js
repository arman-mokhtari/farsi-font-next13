import LocalFont from "next/font/local";
const shabnamFont = LocalFont({
  src: [
    {
      path: "../../public/font/shabnam/Shabnam-Thin.woff2",
      weight: "100",
      style: "normal",
    },
    {
      path: "../../public/font/shabnam/Shabnam-Light.woff2",
      weight: "200",
      style: "normal",
    },
    {
      path: "../../public/font/shabnam/Shabnam.woff2",
      weight: "400",
      style: "normal",
    },
    {
      path: "../../public/font/shabnam/Shabnam-Medium.woff2",
      weight: "800",
      style: "normal",
    },
    {
      path: "../../public/font/shabnam/Shabnam-Bold.woff2",
      weight: "900",
      style: "normal",
    },
  ],
  variable: "--font-shabnam",
  style: "normal",
  display: "block",
});

export default shabnamFont;
