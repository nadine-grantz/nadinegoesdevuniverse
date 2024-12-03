import React from "react";
import styled from "styled-components";

const SectionContainer = styled.section`
  display: flex;
  flex-direction: column;
  justify-content: center;
`;

const AboutMeContainer = styled.div`
  max-width: 40rem;
  margin: auto;
`;

const StyledHeader = styled.h2`
  text-align: center;
  color: var(--color-header);
`;

const StyledText = styled.div`
  text-align: center;
  color: var(--color-text);
`;

export default function AboutMe() {
  return (
    <SectionContainer id="about_me">
      <StyledHeader>About Me</StyledHeader>
      <AboutMeContainer>
        <StyledText>
          <p>
            Hallo zusammen! Ich starte ein neues Kapitel und tausche nach über einem Jahrzehnt 
            im Vertrieb im Bankensektor Anzug gegen Codezeilen und Kreativität.
            <br />
            <br />
            Während meiner Zeit im Bankwesen habe ich vielfältige Erfahrungen im Umgang 
            mit unterschiedlichen Kunden gesammelt und meinen wirtschaftlichen Horizont 
            durch eine Weiterbildung zur geprüften Wirtschaftsfachwirtin erweitert. 
            Diese Qualifikation hat meine Fähigkeit gestärkt, komplexe Zusammenhänge zu 
            verstehen und zu strukturieren. Anschließend habe ich meine IT-Kenntnisse 
            ausgebaut und ein intensives Web-Development-Bootcamp absolviert, um meine 
            Leidenschaft für das Programmieren zu verwirklichen.
            <br />
            <br />
            Neben meiner Begeisterung für das digitale Handwerk restauriere ich gerne 
            alte Möbel und bringe sie mit Liebe zum Detail wieder zum Leben. Hier wie 
            da ist Geduld gefragt – ob beim Debuggen oder beim Abschleifen von Holz – 
            und ich genieße die Belohnung, wenn etwas Neues entsteht.
            <br />
            <br />
            HTML, CSS und JavaScript sind mein tägliches Werkzeug, mit dem ich innovative 
            Lösungen erschaffe und meiner Kreativität freien Lauf lasse. Begleite mich auf 
            dieser spannenden Reise – ich freue mich darauf, mit dir die nächsten Schritte zu gehen! 
          </p>
        </StyledText>
      </AboutMeContainer>
    </SectionContainer>
  );
}
