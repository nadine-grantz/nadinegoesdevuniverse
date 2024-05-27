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
  padding: 1rem;
`;

const Description = styled.div`
  max-width: 600px;
  text-align: center;
  padding: 1rem;
`;

const StyledContainer = styled.div`
  display: flex;
  flex-direction: row;
  justify-content: center;
  align-items: center;
`;

const StyledImage = styled.img`
  display: flex;
  justify-content: center;
  align-items: center;
  width: 10rem;
  height: 10rem;
  background-color: white;
  border-radius: 20%;
`;

export default function Home() {
  return (
    <SectionContainer id="projects">
      <StyledHeader>Projects</StyledHeader>
      <StyledContainer>
        <Link href="https://plant-world-flame.vercel.app/">
          <StyledImage
            src="https://www.cambridgebee.com/cdn/shop/articles/tillandsia_selection_display_2_1024x.png?v=1682037202"
            alt="Beispielbild von Pflanzen in Wohnung"
          />
        </Link>
        <Description>
          Die App ist der ideale Begleiter für neue und erfahrene
          Pflanzenliebhaber. Sie bietet Pflegetipps für viele Pflanzen in deiner
          Sammlung. Benutzer können ihre eigenen Pflanzen hinzufügen. Eine
          intuitive Benutzeroberfläche macht es einfach, den Überblick über die
          Pflanzenpflege zu behalten. Mit dieser App wird dein Zuhause zum
          grünen Paradies! Die App ist noch im Aufbau, schließlich gibt es immer
          etwas zu verbessern.
        </Description>
      </StyledContainer>
    </SectionContainer>
  );
}
