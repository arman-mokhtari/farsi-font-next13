"use client";

import { ThemeProvider } from "@mui/material/styles";
import rtlPlugin from "stylis-plugin-rtl";
import { CacheProvider } from "@emotion/react";
import createCache from "@emotion/cache";
import { prefixer } from "stylis";
import { darkTheme, lightTheme } from "../theme/themeRegistry";
import { CssBaseline } from "@mui/material";
import "./globals.css";
import shabnamFont from "@/constants/localFonts";

const cacheRTL = createCache({
  key: "muirtl",
  stylisPlugins: [prefixer, rtlPlugin],
});

export const metadata = {
  title: "workfolio by Arman Mokhtari",
  description: "اضافه کردن فونت فارسی به همراه تم های متفاوت در نکست جی اس",
};
const myFont = shabnamFont;
export default function RootLayout({ children, mode }) {
  const theme = mode === "dark" ? darkTheme : lightTheme;

  return (
    <html lang="fa" dir="rtl">
      <body className={myFont.className}>
        <CacheProvider value={cacheRTL}>
          <ThemeProvider theme={theme}>
            <CssBaseline />
            {children}
          </ThemeProvider>
        </CacheProvider>
      </body>
    </html>
  );
}
