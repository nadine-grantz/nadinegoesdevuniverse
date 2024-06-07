import React from "react";
import { createGlobalStyle } from "styled-components";
import AboutMe from "../component/AboutMe";
import Home from "../component/Home";
import Navigation from "../component/Navigation";
import Footer from "../component/Footer";
import Timeline from "../component/Timeline";
import Projects from "../component/Projects";
import { useState } from "react";
import ToggleButtonDarkMode from "../component/ToggleDarkModeButton";

const GlobalStyles = createGlobalStyle`
  #__next {
    width: 100vw;
  }

  body {
    margin: 0;
    padding: 0;
    font-family: sans-serif;
    background: var(--color-background-gradient);
  }

  :root {
    --color-primary: #81ACCF;
    --color-white: #FFFFFF;
    --color-black: #000000;
    --color-header: #39556c;
    --color-outline-border: #bfd5e7;
    --color-hover-border: rgba(0, 0, 0, 0.2);
    --color-background-light: rgba(255, 255, 255, 0.9);
    --color-background-gradient: radial-gradient(circle, rgba(255, 115, 0, 0.837) 0%, rgba(255, 227, 188, 1) 81%);
    --color-framework-bg: #f0f0f0;
    --color-text: #000000;;
  }

  [data-theme="dark"] {
    --color-primary: pink;
    --color-white: blue;
    --color-black: grey;
    --color-header: yellow;
    --color-outline-border: red;
    --color-hover-border: green;
    --color-background-light: black;
    --color-background-gradient: red;
    --color-framework-bg: brown;
    --color-text: white;
  }

  ul {
    padding-inline-start: 0;
  }

  @media only screen and (max-width: 1169px) {
    .vertical-timeline--animate .vertical-timeline-element-content.bounce-in {
      visibility: visible;
      animation: timeline-slide 0.8s;
    }
  }

  @keyframes timeline-slide {
    0% {
      opacity: 0;
      transform: translateY(-50px);
    }


`;

export default function App({ Component, pageProps }) {
  const [isDark, setIsDark] = useState(false);

  return (
    <div data-theme={isDark ? "dark" : "light"}>
      <ToggleButtonDarkMode handleChange={() => setIsDark(!isDark)} />
      <GlobalStyles />
      <Navigation />
      <Home />
      <AboutMe />
      <Projects />
      <Timeline />
      <Footer />
      <Component {...pageProps} />
    </div>
  );
}
