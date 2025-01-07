import React from "react";
import styled from "styled-components";
import Link from "next/link";
import plantWorld from "../assets/plantWorld.png";
import capstoneBudgetBuddy from "../assets/capstoneBudgetBuddy.png";
import BohnenBar from "../assets/BohnenBar.png";

const projects = [
  {
    title: "plantWorld",
    link: "https://plant-world-flame.vercel.app/",
    image: { src: plantWorld.src, alt: "Zimmerpflanzen" },
    description:
      " Die App ist der ideale Begleiter für neue und erfahrene Pflanzenliebhaber. Sie bietet Pflegetipps für viele Pflanzen in deiner Sammlung. Benutzer können ihre eigenen Pflanzen hinzufügen. Eine intuitive Benutzeroberfläche macht es einfach,den Überblick über die Pflanzenpflege zu behalten. Mit dieser App wird dein Zuhause zum grünen Paradies!",
    note: "Die plantWorld wird kontinuierlich verbessert, wenn du also wieder reinschaust kann sie schon wieder anders aussehen",
    projectFrameworks: ["React", "Next.js", "Styled Components"],
  },
  {
    title: "Budget Buddy",
    link: "https://capstone-project-budget-buddy-liart.vercel.app/",
    image: {
      src: capstoneBudgetBuddy.src,
      alt: "Transaktionen in einer Finanzapp",
    },
    description:
      "Entdecke unsere intuitive Finanz-App für eine mühelose Verfolgung deiner Einnahmen und Ausgaben. Setze dir Sparziele und beobachte,wie du sie erreichst! Ideal auch für junge Menschen, um ihre Finanzplanung zu beginnen und ein solides Fundament aufzubauen.",
    note: "Diese App ist das Abschlussprojekt aus dem Bootcamp",
    projectFrameworks: [
      "React",
      "Next.js",
      "Styled Components",
      "Node.js",
      "MongoDB Atlas",
      "Mongoose",
      "SWR",
      "Chart.js",
    ],
  },
  {
    title: "BohnenBar",
    link: "https://bohnen-bar.vercel.app/",
    image: { src: BohnenBar.src, alt: "Webpage of a Cafe" },
    description:
      " Die BohnenBar ist mein Cafe. Ihr könnt hier verantwortungsbewusst euren Kaffee genießen, frühstücken gehen oder einen Workshop in angesagter Umgebung buchen. All das könnt ihr vorab schon online auf der Homepage entdecken. Viel Spaß beim Stöbern",
    note: "Die BohnenBar ist neu, und dient dazu Grundlagen zu stärken",
    projectFrameworks: ["HTML", "CSS", "JavaScript"],
  },
];

const ProjectsContainer = styled.div`
  display: flex;
  flex-direction: column;
  align-items: center;
  gap: 20px;
  padding: 20px;
`;

const ProjectsRow = styled.div`
  display: flex;
  flex-wrap: wrap;
  justify-content: center;
  gap: 20px;
`;

const ProjectWrapper = styled.div`
  display: flex;
  flex-direction: column;
  justify-content: space-between;
  min-width: 200px;
  max-width: 600px;
  padding: 20px;
  border-radius: 10px;
  background-color: var(--color-white);
  margin: 1rem;
`;

const ProjectTitle = styled.h2`
  margin-bottom: 10px;
  color: var(--color-header);
`;

const Image = styled.img`
  max-width: 215px;
  height: auto;
  border-radius: 10px;
  border: 2px solid var(--color-primary);

  &:hover {
    transform: scale(1.05);
    box-shadow: 5px 5px 5px rgba(0, 0, 0, 0.2);
    cursor: pointer;
  }
`;

const Description = styled.p`
  margin: 0;
  color: var(--color-text);
`;

const TextContainer = styled.div``;

const FrameworksContainer = styled.div`
  display: flex;
  flex-wrap: wrap;
  gap: 5px;
  margin-top: 10px;
`;

const Framework = styled.div`
  background-color: var(--color-framework-bg);
  border-radius: 10%;
  padding: 5px 10px;
  text-align: center;
  color: var(--color-text);
`;

const StyledHeader = styled.h2`
  text-align: center;
  color: var(--color-header);
`;

const ContentWrapper = styled.div`
  display: flex;
  gap: 20px;
  flex-direction: column;
  align-items: center;

  @media (min-width: 700px) {
    flex-direction: row;
  }
`;

const NoteWrapper = styled.p`
  color: var(--color-text);
`;

export default function Home() {
  return (
    <>
      <ProjectsContainer id="projects">
        <StyledHeader>Projects</StyledHeader>
        <ProjectsRow>
          {projects.map((project) => (
            <ProjectWrapper key={project.title}>
              <ProjectTitle>{project.title}</ProjectTitle>
              <ContentWrapper>
                <Link href={project.link}>
                  <Image src={project.image.src} alt={project.image.alt} />
                </Link>
                <TextContainer>
                  <Description>{project.description}</Description>
                  <NoteWrapper>{project.note}</NoteWrapper>
                </TextContainer>
              </ContentWrapper>
              <FrameworksContainer>
                {project.projectFrameworks.map((framework, id) => (
                  <Framework key={id}>{framework}</Framework>
                ))}
              </FrameworksContainer>
            </ProjectWrapper>
          ))}
        </ProjectsRow>
      </ProjectsContainer>
    </>
  );
}
