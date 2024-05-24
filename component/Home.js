import React from "react";
import styled from "styled-components";
import Link from "next/link";
import { GithubIcon } from "../icons/github";
import { LinkedinIcon } from "../icons/linkedin";

const SectionContainer = styled.section`
  display: flex;
  flex-direction: column;
  justify-content: center;
  align-items: center;
`;

const StyledHeader = styled.h1`
  text-align: center;
  padding: 2rem;
`;

const StyledText = styled.p`
  text-align: center;
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
  background-color: white;
  border-radius: 50%;
`;

export default function Home() {
  return (
    <SectionContainer id="home">
      <StyledHeader>Hello World!</StyledHeader>
      <StyledText>
        Willkommen auf meiner Website, wie du siehst ist sie noch nicht fertig,
        man darf gespannt sein
      </StyledText>
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
