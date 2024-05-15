import React from "react";
import styled from "styled-components";

const SectionContainer = styled.section`
  display: flex;
  flex-direction: column;
  justify-content: center;
`;

const StyledHeader = styled.h1`
  text-align: center;
`;

const StyledText = styled.p`
  text-align: center;
  margin: 2rem;
`;

export default function Home() {
  return (
    <SectionContainer id="home">
      <StyledHeader>Welcome to my Website </StyledHeader>
      <StyledText>
        As you can see, the website is not ready, still working on it
      </StyledText>
    </SectionContainer>
  );
}
