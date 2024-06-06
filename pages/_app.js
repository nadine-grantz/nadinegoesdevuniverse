import React from "react";
import { createGlobalStyle } from "styled-components";
import AboutMe from "../component/AboutMe";
import Home from "../component/Home";
import Navigation from "../component/Navigation";
import Footer from "../component/Footer";
import Timeline from "../component/Timeline";
import Projects from "../component/Projects";

const GlobalStyles = createGlobalStyle`
  #__next {
    width: 100vw;
  }

  body {
    margin: 0;
    padding: 0;
    font-family: sans-serif;
    background: radial-gradient(circle, rgba(255,115,0,0.8379726890756303) 0%, rgba(255,227,188,1) 81%);
  }

  :root{
    -- StyledBackground:radial-gradient(circle, rgba(255,115,0,0.8379726890756303) 0%, rgba(255,227,188,1) 81%);
    --StyledHeader:#39556c;
    -- StyledVerticalTimelineElementEvenContent:#81ACCF;
    -- StyledVerticalTimelineElementUnEvenContent: #FFFFFF;
    -- StyledBlack: #000000;
    -- StyledWhite: #FFFFFF;
    -- StyledVerticalTimelineElementEvenArrow:#81ACCF;
    -- StyledVerticalTimelineElementUnEvenArrow:#FFFFFF;
    -- StyledVerticalTimelineElementIconBorder:#81acccf;
    -- StyledProjectTitleHeader: #81ACCF;
    -- StyledProjectImageBorder:#81ACCF;
    -- StyledImageHoverBorder: rgba(0, 0, 0, 0.2);
    -- StyledFrameWorkBackground:#f0f0f0;
    -- StyledNavigationBackground:rgba(255, 255, 255, 0.9);
    -- StyledNavigationOutlineBorder:#bfd5e7;
    -- StyledNavigationInlineBorder:#81accf;
    -- StyledNavigationActiveItem:#bfd5e7;
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
    <>
      <GlobalStyles />
      <Navigation />
      <Home />
      <AboutMe />
      <Projects />
      <Timeline />
      <Footer />
      <Component {...pageProps} />
    </>
  );
}
