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
            Hallo und schön, dass du hier bist!
            <br />
            <br />
            Nach über einem Jahrzehnt im Bankvertrieb habe ich den Anzug gegen
            digitale Projekte eingetauscht und arbeite heute als Product Owner,
            um Ideen in funktionierende und nutzerfreundliche Produkte zu
            verwandeln.
            <br />
            <br />
            Meine Zeit im Bankwesen hat mir gezeigt, wie wichtig klare
            Kommunikation und strukturiertes Arbeiten sind. Gleichzeitig habe
            ich mich stetig weitergebildet unter anderem zur geprüften
            Wirtschaftsfachwirtin und so meine Fähigkeit gestärkt, komplexe
            Zusammenhänge zu verstehen und klar zu kommunizieren. Anschließend
            habe ich meine IT-Kenntnisse erweitert und ein
            Web-Development-Bootcamp absolviert, um meine Leidenschaft für
            digitale Lösungen gezielt einzusetzen.
            <br />
            <br />
            Als Product Owner ist es mir wichtig, Teams gut zu begleiten,
            Anforderungen klar zu priorisieren und Produkte zu entwickeln, die
            wirklich einen Unterschied machen. Mit meiner Kreativität, meiner
            strukturierten Arbeitsweise und meiner Kommunikationsstärke sorge
            ich dafür, dass Projekte erfolgreich vorankommen und Lösungen
            entstehen, die Nutzer*innen, Support und Vertrieb gleichermaßen
            begeistern.
            <br />
            <br />
            Neben meiner Begeisterung für digitale Produkte liebe ich es, alte
            Möbel zu restaurieren – manchmal inklusive kreativer
            Transportlösungen, wie Sessel in der U-Bahn oder Schränke auf der
            Sackkarre durch den Park. Dabei sind Geduld, Präzision und ein Auge
            für Details gefragt – ganz ähnlich wie beim Beheben von Bugs in der
            Software. Außerdem packt mich oft das Fernweh: Ich reise gerne in
            andere Länder, entdecke neue Kulturen und lasse mich von ihnen
            inspirieren.
            <br />
          </p>
        </StyledText>
      </AboutMeContainer>
    </SectionContainer>
  );
}
