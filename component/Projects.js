import React from "react";
import styled from "styled-components";
import Link from "next/link";
import plantWorld from "../assets/plantWorld.png";
import capstoneBudgetBuddy from "../assets/capstoneBudgetBuddy.png";

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
    link: "https://capstone-project-budget-buddy.vercel.app/",
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
      "useSWR",
      "Chart.js",
    ],
  },
];

const ProjectsContainer = styled.div`
  // display: flex;
  // flex-wrap: wrap;
  // gap: 20px;
  // flex-direction: column;
  // align-items: center;
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
  width: 600px;
  padding: 20px;
  border: 1px solid #ccc;
  border-radius: 10px;
  background-color: white;
  // margin-right: 1rem;
  // margin-left: 1rem;
  margin: 1rem;
`;

const ProjectTitle = styled.h2`
  margin-bottom: 10px;
  color: #81accf;
`;

const Image = styled.img`
  max-width: 215px;
  height: auto;
  border-radius: 10px;
  border: 2px solid #81accf;
`;

const Description = styled.p`
  margin: 0;
`;

const TextContainer = styled.div``;

const FrameworksContainer = styled.div`
  display: flex;
  flex-wrap: wrap;
  gap: 5px;
  margin-top: 10px;
`;

const Framework = styled.div`
  background-color: #f0f0f0;
  border-radius: 10%;
  padding: 5px 10px;
  text-align: center;
`;

const StyledHeader = styled.h2`
  text-align: center;
  color: #39556c;
`;

const ContentWrapper = styled.div`
  display: flex;
  gap: 20px;
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
                  <p>{project.note}</p>
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
