// _app.js
import React from "react";
import { createGlobalStyle } from "styled-components";
import Navigation from "../component/navigation";
import CV from "../component/cv";
import AboutMe from "../component/AboutMe";
import Header from "../component/header";

// Globale Styles
const GlobalStyles = createGlobalStyle`
  body {
    margin: 0;
    padding: 0;
    font-family: sans-serif;
  }
`;

export default function App({ Component, pageProps }) {
  return (
    <>
      <GlobalStyles />
      <Navigation />
      <Header />
      <AboutMe />
      <CV />
      <Component {...pageProps} />
    </>
  );
}
