import React, { useEffect } from "react";
import Head from "next/head";
import "@/styles/globals.css";

export default function App({ Component, pageProps }) {
  useEffect(() => {
    // Detect the user's preferred color scheme (light or dark)
    const prefersDarkMode = window.matchMedia(
      "(prefers-color-scheme: dark)"
    ).matches;

    // Set the theme-color meta tag based on the preferred color scheme
    const themeColor = prefersDarkMode ? "#000000" : "#ffffff";
    const metaThemeColor = document.querySelector("meta[name=theme-color]");
    metaThemeColor.setAttribute("content", themeColor);
  }, []);
  return (
    <>
      <Head>
        {/* Other meta tags and head content */}
        <meta name="theme-color" id="theme-color" content="#0099ad" />
      </Head>
      <Component {...pageProps} />
    </>
  );
}
