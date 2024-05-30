import React from "react";
import styled from "styled-components";

const SectionContainer = styled.section`
  display: flex;
  flex-direction: column;
  align-items: center;
`;

export default function Footer() {
  return (
    <SectionContainer>
      <p>Built in 2024 by Nadine</p>
      <p>Find more information about me in the links above</p>
    </SectionContainer>
  );
}
