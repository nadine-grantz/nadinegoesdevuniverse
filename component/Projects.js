import React from "react";
import styled from "styled-components";
import Link from "next/link";
import plantWorldPicture from "../icons/plant-World-picture.png";

const SectionContainer = styled.section`
  display: flex;
  flex-direction: column;
  justify-content: center;
  align-items: center;
  padding: 2rem;
`;

const StyledHeader = styled.h1`
  text-align: center;
  padding: 1rem;
`;

const ProjectsWrapper = styled.div`
  display: flex;
  justify-content: center;
  align-items: flex-start;
  flex-wrap: wrap;
  gap: 2rem;
`;

const ProjectContainer = styled.div`
  position: relative;
  display: flex;
  flex-direction: column;
  align-items: flex-start;
  padding: 1rem;
  background-color: white;
  border-radius: 20px;
  max-width: 28rem;
`;

const ProjectTitle = styled.h3`
  position: absolute;
  top: 1rem;
  right: 1rem;
  margin: 0;
  font-size: 1.2rem;
  color: #333;
`;

const ContentWrapper = styled.div`
  display: flex;
  align-items: center;
  margin-top: 2rem;
`;

const StyledImage = styled.img`
  width: 10rem;
  height: 10rem;
  background-color: white;
  border-radius: 20%;
  margin-right: 1rem;
`;

const ProjectDescription = styled.div`
  max-width: 15rem;
  padding: 1rem;
`;

const ProjectFrameworks = styled.div`
  display: block;
  margin-top: 1rem;
  font-size: 0.9rem;
  color: #666;
`;

export default function Home() {
  return (
    <SectionContainer id="projects">
      <StyledHeader>Projects</StyledHeader>
      <ProjectsWrapper>
        <ProjectContainer>
          <ProjectTitle>plant-World</ProjectTitle>
          <ContentWrapper>
            <Link href="https://plant-world-flame.vercel.app/">
              <StyledImage
                src={plantWorldPicture}
                alt="Beispielbild von Pflanzen in Wohnung"
              />
            </Link>
            <ProjectDescription>
              Die App ist der ideale Begleiter für neue und erfahrene
              Pflanzenliebhaber. Sie bietet Pflegetipps für viele Pflanzen in
              deiner Sammlung. Benutzer können ihre eigenen Pflanzen hinzufügen.
              Eine intuitive Benutzeroberfläche macht es einfach, den Überblick
              über die Pflanzenpflege zu behalten. Mit dieser App wird dein
              Zuhause zum grünen Paradies! Die App ist noch im Aufbau,
              schließlich gibt es immer etwas zu verbessern.
            </ProjectDescription>
          </ContentWrapper>
          <ProjectFrameworks>
            React / Next.js / Styled Components
          </ProjectFrameworks>
        </ProjectContainer>

        <ProjectContainer>
          <ProjectTitle>Budget Buddy</ProjectTitle>
          <ContentWrapper>
            <Link href="https://beispiel.com">
              <StyledImage
                src="https://beispiel.com/"
                alt="Beispielbild der Finanz App"
              />
            </Link>
            <ProjectDescription>
              Entdecke unsere intuitive Finanz-App für eine mühelose Verfolgung
              deiner Einnahmen und Ausgaben. Setze dir Sparziele und beobachte,
              wie du sie erreichst! Ideal auch für junge Menschen, um ihre
              Finanzplanung zu beginnen und ein solides Fundament aufzubauen.
            </ProjectDescription>
          </ContentWrapper>
          <ProjectFrameworks>
            React / Next.js / Styled Components / Node.js / MongoDB Atlas /
            Mongoose / useSWR / Chart.js
          </ProjectFrameworks>
        </ProjectContainer>
      </ProjectsWrapper>
    </SectionContainer>
  );
}
