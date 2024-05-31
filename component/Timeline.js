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
import { StudyIcon } from "../icons/study";
import { TargobankIcon } from "../icons/targobank";

const timelineItems = [
  {
    date: "since Mar. 2024",
    title: "self learning",
    location: "remote",
  },
  {
    date: "Nov. 2023 - Mar. 2024",
    title: "Bootcamp -  Web Development",
    company: "neue fische",
    location: "remote",
    content:
      "Das Bootcamp war eine spannende Reise: In 720 Unterrichtseinheiten lernte ich HTML, CSS, JavaScript, React, Next.js und vieles mehr. Diese Herausforderung erweiterte nicht nur meine Fähigkeiten, sondern bestätigte mich in meinem neuen Lebensabschnitt.",
  },
  {
    date: "Aug 2019 - Feb. 2021",
    title: "Geprüfte Wirtschaftsfachwirtin",
    company: "HKBiS, Handelskammer",
    location: "Hamburg",
    content:
      "Zertifikat der Handelskammer Hamburg in den Bereichen Betriebliches Management, Unternehmensführung, Volks- und Betriebswirtschaft, Personalmanagement, Führung und Zusammenarbeit, Investition, Finanzierung, betriebliches Rechnungswesen, Controlling",
  },
  {
    date: "Jan. 2020 - Sep. 2023",
    title: "Privatkundenberaterin",
    company: "Targobank",
    location: "Hamburg Altona",
    content:
      "Verantwortlichkeit bei unterschiedlichen filialinternen Qualitätsmessgrößen und internen Projektarbeiten, Organisation/ Administration des Filialalltags, eigenständige Organisation zur Erreichung vertrieblicher Ziele",
  },
  {
    date: "Jan. 2017 - Dec. 2019",
    title: "Privatkundenberaterin",
    company: "Santander",
    location: "Hamburg Altona und Dammtor",
    content:
      "Umfassende Beratung in den Bereichen Investment, Kredite, Konten und Kreditkarten, um optimale finanzielle Lösungen für Kunden zu finden.",
  },
  {
    date: "Aug 2014 - Jan. 2017",
    title: "Ausbildung Bankkauffrau",
    company: "Santander",
    location: "Hamburg Dammtor",
    content: "Ausbildung zur Bankkauffrau bei der Santander Bank",
  },
];

const icons = [
  <StudyIcon />,
  <NeueFischeIcon />,
  <IHKIcon />,
  <TargobankIcon />,
  <SantanderIcon />,
  <SantanderIcon />,
];

const StyledTitleCompany = styled.div`
  h3,
  h4 {
    margin: 0.5rem 0;
    font-weight: bold;
  }
`;

const StyledHeader = styled.h1`
  text-align: center;
  color: #39556c;
  margin: 3rem 2rem 3rem;
`;

const StyledIcon = styled.div`
  // width: 100px;
  // height: 100px;
  // svg {
  //   width: 100%;
  //   height: 100%;
  // }
`;

const StyledVerticalTimelineElement = styled(VerticalTimelineElement)`
  .vertical-timeline-element-content {
    background: ${(props) => (props.isEven ? "#81ACCF" : "white")};
    color: black;
    box-shadow: none;
  }

  .vertical-timeline-element-content-arrow {
    border-right: 7px solid ${(props) => (props.isEven ? "#81ACCF" : "white")};
  }

  .vertical-timeline-element-icon {
    background: white;
    color: black;
    border: 2px solid #81acccf;
    padding: 16px;
    margin-right: 4px;
  }
`;

const HEADER_OFFSET = -100;

export default function Timeline() {
  return (
    <section id="cv">
      <StyledHeader offset={HEADER_OFFSET}>CV</StyledHeader>
      <div>
        <VerticalTimeline>
          {timelineItems.map((item, index) => (
            <StyledVerticalTimelineElement
              key={index}
              date={item.date}
              isEven={index % 2 === 0}
              icon={icons[index]}
            >
              <StyledTitleCompany>
                <h3>{item.title}</h3>
                <h4>{item.company}</h4>
              </StyledTitleCompany>
              <p>{item.content}</p>
              <p>{item.location}</p>
            </StyledVerticalTimelineElement>
          ))}
        </VerticalTimeline>
      </div>
    </section>
  );
}
