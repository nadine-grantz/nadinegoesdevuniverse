import React from "react";
import styled from "styled-components";
import Link from "next/link";
import { GithubIcon } from "../icons/github";
import { LinkedinIcon } from "../icons/linkedin";
import pictureOfMyself from "../assets/pictureOfMyself.png";

const SectionContainer = styled.section`
  display: flex;
  flex-direction: column;
  justify-content: center;
  align-items: center;
  margin-top: 7em;
`;

const StyledHeader = styled.h1`
  max-width: 28rem;
  margin: auto;
  color: var(--color-header);
  white-space: nowrap;
`;

const StyledText = styled.p`
  text-align: center;
  max-width: 40rem;
  margin: auto;
  margin-top: 2em;
  color: var(--color-text);
`;

const LinksContainer = styled.div`
  display: flex;
  margin: 1rem;
`;

const StyledLink = styled(Link)`
  margin: 0 1rem;
`;

const IconContainer = styled.div`
  display: flex;
  justify-content: center;
  align-items: center;
  width: 60px;
  height: 60px;
  background-color: var(--color-white);
  border-radius: 50%;
`;

const StyledImage = styled.img`
  width: 200px;
  height: 200px;
  margin-top: 2em;
  border-radius: 50%;
  object-fit: cover;
`;

export default function Home() {
  return (
    <SectionContainer id="home">
      <StyledHeader>Willkommen auf meiner Website!</StyledHeader>
      <StyledImage src={pictureOfMyself.src} alt="Picture of me" />
      <LinksContainer>
        <StyledLink href="https://github.com/nadine-grantz">
          <IconContainer>
            <GithubIcon />
          </IconContainer>
        </StyledLink>
        <StyledLink href="https://www.linkedin.com/in/nadine-grantz-36a03a1ba/">
          <IconContainer>
            <LinkedinIcon />
          </IconContainer>
        </StyledLink>
      </LinksContainer>
    </SectionContainer>
  );
}
