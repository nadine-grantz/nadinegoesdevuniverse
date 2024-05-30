import React from "react";
import styled from "styled-components";
import Link from "next/link";
import plantWorldPicture from "../assets/plantWorldPicture.png";
import budgetBuddy from "../assets/budgetBuddy.png";

const projects = [
  {
    title: "plant-World",
    link: "https://plant-world-flame.vercel.app/",
    image: { src: plantWorldPicture.src, alt: "Zimmerpflanze" },
    description:
      " Die App ist der ideale Begleiter für neue und erfahrene Pflanzenliebhaber. Sie bietet Pflegetipps für viele Pflanzen in deiner Sammlung. Benutzer können ihre eigenen Pflanzen hinzufügen. Eine intuitive Benutzeroberfläche macht es einfach,den Überblick über die Pflanzenpflege zu behalten. Mit dieser App wird dein Zuhause zum grünen Paradies!",
    projectFrameworks: ["React", "Next.js", "Styled Components"],
  },
  {
    title: "Budget Buddy",
    link: "https://capstone-project-budget-buddy.vercel.app/",
    image: { src: budgetBuddy.src, alt: "Transaktionen in einer Finanzapp" },
    description:
      "Entdecke unsere intuitive Finanz-App für eine mühelose Verfolgung deiner Einnahmen und Ausgaben. Setze dir Sparziele und beobachte,wie du sie erreichst! Ideal auch für junge Menschen, um ihre Finanzplanung zu beginnen und ein solides Fundament aufzubauen.",
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
  display: flex;
  flex-wrap: wrap;
  gap: 20px;
  justify-content: center;
`;

const ProjectWrapper = styled.div`
  width: 300px;
  padding: 20px;
  border: 1px solid #ccc;
  border-radius: 10px;
  background-color: white;
`;

const Title = styled.h2`
  margin-bottom: 10px;
  color: #81accf;
`;

const Image = styled.img`
  width: 100%;
  border-radius: 10px;
  border: 2px solid #81accf;
`;

const Description = styled.p`
  margin-bottom: 10px;
  position: absolut;
  display-inline-block;
`;

const FrameworksContainer = styled.div`
  display: flex;
  flex-wrap: wrap;
  gap: 5px;
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

export default function Home() {
  return (
    <>
      <StyledHeader>Projetcs</StyledHeader>
      <ProjectsContainer id="projects">
        {projects.map((project) => (
          <ProjectWrapper key={project.title}>
            <Title>{project.title}</Title>
            <Link href={project.link}>
              <Image src={project.image.src} alt={project.image.alt} />
            </Link>
            <Description>{project.description}</Description>
            <FrameworksContainer>
              {project.projectFrameworks.map((framework, index) => (
                <Framework key={index}>{framework}</Framework>
              ))}
            </FrameworksContainer>
          </ProjectWrapper>
        ))}
      </ProjectsContainer>
    </>
  );
}
