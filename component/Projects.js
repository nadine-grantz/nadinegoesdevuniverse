import React from "react";
import styled from "styled-components";

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
export default function Home() {
  return (
    <SectionContainer id="projects">
      <StyledHeader>Projects</StyledHeader>
    </SectionContainer>
  );
}
