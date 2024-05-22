import React from "react";
import styled from "styled-components";
import Link from "next/link";
import { GithubIcon } from "../icons/github";

const SectionContainer = styled.section`
  display: flex;
  flex-direction: column;
  justify-content: center;
  align-items: center;
`;

const StyledHeader = styled.h1`
  text-align: center;
`;

const StyledText = styled.p`
  text-align: center;
`;

const LinksContainer = styled.div`
  display: flex;
  flex-direction: row;
  justify-content: center;
  align-items: center;
  margin: 1rem;
`;

const StyledLink = styled(Link)`
  margin: 0 1rem;
`;

const StyledImg = styled.img`
  width: 50px;
  height: auto;
`;

export default function Home() {
  return (
    <SectionContainer id="home">
      <StyledHeader>Welcome to my Website</StyledHeader>
      <StyledText>
        As you can see, the website is not ready, still working on it
      </StyledText>
      <LinksContainer>
        <StyledLink href="https://github.com/nadine-grantz">
          <GithubIcon />
        </StyledLink>
        <StyledLink href="https://www.linkedin.com/in/nadine-grantz-36a03a1ba/">
          <StyledImg
            src="https://upload.wikimedia.org/wikipedia/commons/c/ca/LinkedIn_logo_initials.png"
            alt="LinkedIn Logo"
          />
        </StyledLink>
      </LinksContainer>
    </SectionContainer>
  );
}
