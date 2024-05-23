import React from "react";
import styled from "styled-components";
import {
  VerticalTimeline,
  VerticalTimelineElement,
} from "react-vertical-timeline-component";
import "react-vertical-timeline-component/style.min.css";
import { SantanderIcon } from "../icons/santander";
import { NeueFischeIcon } from "../icons/neuefische";
import { IHKIcon } from "../icons/ihk";

const Section = styled.section`
  #cv {
    padding: 20px;
  }
`;

const Title = styled.h1`
  font-size: 2.25rem; /* text-4xl */
  display: flex;
  align-items: center;
  justify-content: center;
  margin-top: 2rem; /* mt-8 */
`;

const Container = styled.div`
  max-width: 900px;
  margin: 0 auto;
`;

const StyledDate = styled.div`
  margin: 0 1rem; /* mx-4 */
`;

const timelineItems = [
  {
    date: "since Mar. 2024",
    title: "self learning",
    location: "remote",
  },
  {
    date: "Nov. 2013 - Mar. 2024",
    title: "Trainee Web Development",
    location: "remote",
    content: "Bootcamp in Bereich Web Development",
  },
  {
    date: "Aug 2019 - Feb. 2021",
    title: "Geprüfte Wirtschaftsfachwirtin",
    location: "Hamburg",
    content:
      "Zertifikat der Handelskammer Hamburg in den Bereichen Betriebliches Management, Unternehmensführung, Volks- und Betriebswirtschaft, Personalmanagement, Führung und ZusammenarbeitInvestition, Finanzierung, betriebliches Rechnungswesen, Controlling",
  },
  {
    date: "Januar 2020 - Sep. 2023",
    title: "Privatkundenberaterin",
    location: "Hamburg Altona",
    content:
      " Verantwortlichkeit bei unterschiedlichen filialinternen Qualitätsmessgrößen und internen Projektarbeiten, Organisation/ Administration des Filialalltags eigenständige Organistation zur Erreichung vertrieblicher Zielen",
  },
  {
    date: "Januar 2017 - Dez. 2019",
    title: "Privatkundenberaterin",
    location: "Hamburg Altona und Dammtor",
    content:
      "Beratungstätigkeit in den Bereichen Investment, Kredit, Konten und Kreditkarten",
  },
  {
    date: "Aug 2014 - Jan. 2017",
    title: "Ausbildung Bankkauffrau",
    location: "Hamburg Dammtor",
    content: "Ausbildung zur Bankkauffrau bei der Santander Bank",
  },
];

const icons = [
  <SantanderIcon />,
  <NeueFischeIcon />,
  <IHKIcon />,
  <SantanderIcon />,
  <SantanderIcon />,
  <SantanderIcon />,
];

const color = "light grey";

export default function Timeline() {
  return (
    <Section id="cv">
      <Title>Timeline</Title>
      <Container>
        <VerticalTimeline>
          {timelineItems.map((item, index) => (
            <VerticalTimelineElement
              key={index}
              date={<StyledDate>{item.date}</StyledDate>}
              contentStyle={{
                background: index % 2 === 0 ? color : "white",
                color: "black",
              }}
              contentArrowStyle={{ borderRight: "7px solid #3498db" }}
              iconStyle={{
                background: "transparent",
                color: "yellow",
                border: "2px solid green",
                padding: "16px",
                marginRight: "4px",
              }}
              icon={icons[index]}
            >
              <h3 className="vertical-timeline-element-title">{item.title}</h3>
              <h4 className="vertical-timeline-element-subtitle">
                {item.location}
              </h4>
              <p>{item.content}</p>
            </VerticalTimelineElement>
          ))}
        </VerticalTimeline>
      </Container>
    </Section>
  );
}
