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
            Hallo, schön dass du vorbei schaust! Ich starte ein neues Kapitel
            und tausche nach über einem Jahrzehnt im Vertrieb im Bankensektor
            Anzug gegen Kreativität.
            <br />
            <br />
            Während meiner Zeit im Bankwesen habe ich vielfältige Erfahrungen im
            Umgang mit unterschiedlichen Kunden gesammelt und meinen
            wirtschaftlichen Horizont durch eine Weiterbildung zur geprüften
            Wirtschaftsfachwirtin erweitert. Diese Qualifikation hat meine
            Fähigkeit gestärkt, komplexe Zusammenhänge zu verstehen und zu
            strukturieren. Anschließend habe ich meine IT-Kenntnisse ausgebaut
            und ein Web-Development-Bootcamp absolviert, um meine Leidenschaft
            für das Programmieren zu verwirklichen und meiner Kreativität freien
            lauf zu lassen.
            <br />
            <br />
            Neben meiner Begeisterung für das digitale Handwerk restauriere ich
            gerne alte Möbel und bringe sie mit Liebe zum Detail wieder zum
            Leben. Hier wie da ist Geduld gefragt – ob beim Debuggen oder beim
            Abschleifen von Holz – und ich genieße die Belohnung, wenn etwas
            Neues entsteht.
            <br />
            Jetzt möchte ich meine Kreativität, meine Kommunikationsstärke und
            mein Interesse an der Frontend-Welt vereinen, um benutzerfreundliche
            und ästhetisch ansprechende Lösungen zu entwickeln. Es begeistert
            mich, komplexe Ideen in klare, zugängliche Designs umzusetzen und
            dabei in engem Austausch mit Teams und Nutzer*innen innovative
            Projekte voranzutreiben.
            <br />
          </p>
        </StyledText>
      </AboutMeContainer>
    </SectionContainer>
  );
}
