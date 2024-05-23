import React from "react";
import { createGlobalStyle } from "styled-components";
import AboutMe from "../component/AboutMe";
import Home from "../component/Home";
import Navigation from "../component/Navigation";
import Footer from "../component/Footer";
import Timeline from "../component/Timeline";

const GlobalStyles = createGlobalStyle`
  body {
    margin: 0;
    padding: 0;
    font-family: sans-serif;
    background: rgb(238,174,202);
    background: radial-gradient(circle, rgba(238,174,202,1) 33%, rgba(148,187,233,1) 100%);
  }
`;

export default function App({ Component, pageProps }) {
  return (
    <>
      <GlobalStyles />
      <Navigation />
      <Home />
      <AboutMe />
      <Timeline />
      <Footer />
      <Component {...pageProps} />
    </>
  );
}
