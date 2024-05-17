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
          <StyledImg src="https://github.githubassets.com/images/modules/logos_page/GitHub-Mark.png" />
        </StyledLink>
        <StyledLink href="https://www.linkedin.com/in/nadine-grantz-36a03a1ba/">
          <StyledImg src="data:image/png;base64,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" />
        </StyledLink>
      </LinksContainer>
    </SectionContainer>
  );
}
