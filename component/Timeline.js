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

const CompanyLocation = styled.h4`
  display: flex;
  flex-direction: row;
  justify-content: space-between;
  margin: 0.5rem 0;
`;

const timelineItems = [
  {
    date: "since Mar. 2024",
    title: "self learning",
    location: "remote",
  },
  {
    date: "Nov. 2023 - Mar. 2024",
    title: "Trainee Web Development",
    company: "NeueFische",
    location: "remote",
    content: "Bootcamp - Web Development",
  },
  {
    date: "Aug 2019 - Feb. 2021",
    title: "Geprüfte Wirtschaftsfachwirtin",
    company: "HKBiS, Handelskammer Hamburg",
    location: "Hamburg",
    content:
      "Zertifikat der Handelskammer Hamburg in den Bereichen Betriebliches Management, Unternehmensführung, Volks- und Betriebswirtschaft, Personalmanagement, Führung und ZusammenarbeitInvestition, Finanzierung, betriebliches Rechnungswesen, Controlling",
  },
  {
    date: "Jan. 2020 - Sep. 2023",
    title: "Privatkundenberaterin",
    company: "Targobank",
    location: "Hamburg Altona",
    content:
      " Verantwortlichkeit bei unterschiedlichen filialinternen Qualitätsmessgrößen und internen Projektarbeiten, Organisation/ Administration des Filialalltags eigenständige Organistation zur Erreichung vertrieblicher Zielen",
  },
  {
    date: "Jan. 2017 - Dec. 2019",
    title: "Privatkundenberaterin",
    company: "Santander",
    location: "Hamburg Altona und Dammtor",
    content:
      "Beratungstätigkeit in den Bereichen Investment, Kredit, Konten und Kreditkarten",
  },
  {
    date: "Aug 2014 - Jan. 2017",
    title: "Ausbildung Bankkauffrau",
    company: "Santander",
    location: "Hamburg Dammtor",
    content: "Ausbildung zur Bankkaufrau bei der Santander Bank",
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

const color = "#81ACCF";

const HEADER_OFFSET = -100;

export default function Timeline() {
  return (
    <Section id="cv">
      <Title offset={HEADER_OFFSET}>Timeline</Title>
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
              contentArrowStyle={{ borderRight: "7px solid #81ACCF" }}
              iconStyle={{
                background: "white",
                color: "black",
                border: "2px solid #81ACCF",
                padding: "16px",
                marginRight: "4px",
              }}
              icon={icons[index]}
            >
              <h3 className="vertical-timeline-element-title">{item.title}</h3>
              <CompanyLocation>
                <span>{(item.location, item.company)}</span>
              </CompanyLocation>
              <p>{item.content}</p>
            </VerticalTimelineElement>
          ))}
        </VerticalTimeline>
      </Container>
    </Section>
  );
}
