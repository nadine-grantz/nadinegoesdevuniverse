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
      <StyledLink href="https://github.com/nadine-grantz">
        <StyledImg src="https://github.githubassets.com/assets/GitHub-Mark-ea2971cee799.png" />
      </StyledLink>
      <StyledLink href="https://www.linkedin.com/in/nadine-grantz-36a03a1ba/">
        <StyledImg src="data:image/png;base64,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" />
      </StyledLink>
    </SectionContainer>
  );
}
