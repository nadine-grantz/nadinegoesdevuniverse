import React from "react";
import styled from "styled-components";
import Link from "next/link";

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

const StyledLink = styled(Link)`
  text-align: center;
  margin: 1rem;
`;

export default function Home() {
  return (
    <SectionContainer id="home">
      <StyledHeader>Welcome to my Website</StyledHeader>
      <StyledText>
        As you can see, the website is not ready, still working on it
      </StyledText>
      <StyledLink href="https://github.com/nadine-grantz">github</StyledLink>
      <StyledLink href="https://www.linkedin.com/in/nadine-grantz-36a03a1ba/">
        Linkedin
      </StyledLink>
    </SectionContainer>
  );
}
