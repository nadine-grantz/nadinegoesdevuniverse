import React from "react";
import { createGlobalStyle } from "styled-components";
import Navigation from "../component/navigation";
import CV from "../component/cv";
import AboutMe from "../component/aboutMe";
import Home from "../component/home";

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
      <Component {...pageProps} />
    </>
  );
}
