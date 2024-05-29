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
      "Beratungstätigkeit in den Bereichen Investment, Kredit, Konten und Kreditkarten",
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
  <SantanderIcon />,
  <NeueFischeIcon />,
  <IHKIcon />,
  <SantanderIcon />,
  <SantanderIcon />,
  <SantanderIcon />,
];

const StyledHeader = styled.h1`
  text-align: center;
`;

const StyledVerticalTimelineElement = styled(VerticalTimelineElement)`
  .vertical-timeline-element-content {
    background: ${(props) => (props.isEven ? "#81ACCF" : "white")};
    color: black;
  }

  .vertical-timeline-element-arrow {
    border-right: 7px solid #81acccf;
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
      <StyledHeader offset={HEADER_OFFSET}>Timeline</StyledHeader>
      <div>
        <VerticalTimeline>
          {timelineItems.map((item, index) => (
            <StyledVerticalTimelineElement
              key={index}
              date={item.date}
              isEven={index % 2 === 0}
              icon={icons[index]}
            >
              <h3>{item.title}</h3>
              <h4>
                <span>
                  {item.company
                    ? `${item.location}, ${item.company}`
                    : item.location}
                </span>
              </h4>
              <p>{item.content}</p>
            </StyledVerticalTimelineElement>
          ))}
        </VerticalTimeline>
      </div>
    </section>
  );
}
