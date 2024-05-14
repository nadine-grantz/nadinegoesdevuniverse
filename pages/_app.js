import React from "react";
import { createGlobalStyle } from "styled-components";
import AboutMe from "../component/AboutMe";
import CV from "../component/Cv";
import Home from "../component/Home";
import Navigation from "../component/Navigation";
import Footer from "../component/Footer";

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
      <Home />
      <AboutMe />
      <CV />
      <Footer />
      <Component {...pageProps} />
    </>
  );
}
