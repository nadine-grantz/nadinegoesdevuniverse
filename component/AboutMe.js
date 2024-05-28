import React from "react";
import styled from "styled-components";

const SectionContainer = styled.section`
  display: flex;
  flex-direction: column;
  justify-content: center;
`;

const StyledHeader = styled.h2`
  text-align: center;
`;

const StyledText = styled.div`
  text-align: center;
`;

export default function AboutMe() {
  return (
    <SectionContainer id="about_me">
      <StyledHeader>About Me</StyledHeader>
      <StyledText>
        <p>
          Hallo zusammen! 👋 Ich schlage ein neues, aufregendes Kapitel auf,
          indem ich nach mehreren Jahren im Vertrieb im Bankensektor nun
          kopfüber in die Welt der Webentwicklung eintauche.
          <br />
          <br />
          Hintergrund: Ich habe mehrere Jahre im Vertrieb bei verschiedenen
          Banken gearbeitet und konnte dabei viele Erfahrungen in verschiedenen
          Kundenbereichen sammeln. Außerdem habe ich eine Weiterbildung zur
          geprüften Wirtschaftsfachwirtin absolviert, um komplexe
          betriebswirtschaftliche Konzepte zu verstehen.
          <br />
          <br />
          Interessen: Neben dem Programmieren reise ich gerne und lasse mich von
          neuen Kulturen und Erfahrungen inspirieren. Außerdem habe ich einen
          grünen Daumen und finde Freude an der Pflege von Pflanzen -
          Rückschläge inbegriffen, denn es gibt nichts Schöneres, als neues
          Wachstum zu beobachten.
          <br />
          <br />
          Aktueller Fokus: Jeden Tag arbeite ich daran, meine Fähigkeiten in
          HTML, CSS und JavaScript zu verbessern und die endlosen Möglichkeiten
          der Webentwicklung zu erkunden. Fazit: Begleite mich auf dieser Reise
          des Wachstums und der Entdeckung, bei der jede Herausforderung eine
          Chance ist. 🌱💻
        </p>
      </StyledText>
    </SectionContainer>
  );
}
