import React from "react";
import { createGlobalStyle } from "styled-components";
import AboutMe from "../component/AboutMe";
import Home from "../component/Home";
import Navigation from "../component/Navigation";
import Footer from "../component/Footer";
import Timeline from "../component/Timeline";
import Projects from "../component/Projects";
import { useState } from "react";

const GlobalStyles = createGlobalStyle`
  #__next {
    width: 100vw;
    padding: 15px;
  }

  body {
    margin: 0;
    font-family: sans-serif;
    background: var(--color-background-gradient);
  }

  :root {
 --color-primary: #A4B494; 
    --color-white: #E2D6B5; 
    --color-black: #3B3B3B; 
    --color-header: #8C9A86; 
    --color-outline-border: #D4C4A8; 
    --color-hover-border: rgba(100, 85, 72, 0.2); 
    --color-background-light: #F3E9D2; 
    --color-background-gradient: #F3E9D2; 
    --color-framework-bg: #C9B798; 
    --color-text: #4B5D4A; 
  }

  [data-theme="dark"] {
    --color-primary: #ba2d44;
    --color-white: #7D0633;
    --color-black: #d96c7e;
    --color-header: #595B83;
    --color-outline-border: #D94F70;
    --color-hover-border: rgba(233, 69, 96, 0.2);
    --color-background-light: rgba(255, 255, 255, 0.9);
    --color-background-gradient: radial-gradient(circle, rgba(40,40,69,1) 40%, rgba(22,33,62,1) 56%);;
    --color-framework-bg: #0F3460;
    --color-text: #FBDCC4;
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
  return (
    <div>
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
