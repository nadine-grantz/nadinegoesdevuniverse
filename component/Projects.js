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
  padding: 1rem;
`;
export default function Home() {
  return (
    <SectionContainer id="projects">
      <StyledHeader>Projects</StyledHeader>
      <img
        src="/home/danielbechler/Pictures/Bildschirmfotos/Bildschirmfoto%20von%202024-04-30%2015.50.34_ver%C3%A4ndert.png"
        alt="plant-World App Picture"
      />
      <div>
        Die App ist der ideale Begleiter für neue und erfahrene
        Pflanzenliebhaber. Sie bietet Pflegetipps für viele Pflanze in deiner
        Sammlung. Benutzer können ihre eigenen Pflanzen hinzufügen. Eine
        intuitive Benutzeroberfläche macht es einfach, den Überblick über die
        Pflanzenpflege zu behalten. Mit dieser App wird Ihr Zuhause zum grünen
        Paradies! Die App ist noch im Aufbau, schließlich gibt es immer etwas zu
        verbessern.
      </div>
    </SectionContainer>
  );
}
