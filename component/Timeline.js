import React from "react";
import styled from "styled-components";
import {
  VerticalTimeline,
  VerticalTimelineElement,
} from "react-vertical-timeline-component";
import "react-vertical-timeline-component/style.min.css";
import { Easycircular } from "../icons/easycircular";
import { SantanderIcon } from "../icons/santander";
import { NeueFischeIcon } from "../icons/neuefische";
import { IHKIcon } from "../icons/ihk";
import { StudyIcon } from "../icons/study";
import { TargobankIcon } from "../icons/targobank";

const timelineItems = [
  {
    date: "since Aug. 2024",
    title: "Product Owner / Product Manager",
    company: "Easycircular Umweltmanagement GmbH",
    location: "Hamburg Wandsbek",
    content:
      "In meiner aktuellen Rolle bin ich verantwortlich für die Weiterentwicklung unseres intern entwickelten digitalen Waste Management-Portals sowie für unseren Easy Recycle Shop, einen Shop für nachhaltige Rücknahmesysteme und Entsorgungslösungen. Ich manage das Product Backlog, priorisiere Features und entwickle gemeinsam mit meinem Team und unseren Kundinnen neue Funktionen und Erweiterungen. Zudem schule ich Mitarbeitende und Kundinnen, sobald neue Funktionen implementiert werden, und sorge dafür, dass beide Plattformen praxisnah und benutzerfreundlich bleiben.",
  },
  {
    date: "Mar. 2024 - Aug. 2024",
    title: "self learning",
    location:
      "In den letzten Monaten habe ich die Zeit genutzt, um meine Programmierkenntnisse weiter auszubauen. Ich habe an eigenen Projekten wie der BohnenBar-App und meiner persönlichen Website gearbeitet. Dabei habe ich mich intensiv mit React, Next.js sowie den Basics wie HTML und CSS beschäftigt. Diese Projekte haben mir geholfen, meine Skills in der Webentwicklung zu vertiefen und praktische Erfahrungen zu sammeln.",
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
    date: "Jan. 2020 - Sep. 2023",
    title: "Privatkundenberaterin",
    company: "Targobank",
    location: "Hamburg Altona",
    content:
      "Verantwortlichkeit bei unterschiedlichen filialinternen Qualitätsmessgrößen und internen Projektarbeiten, Organisation/ Administration des Filialalltags, eigenständige Organisation zur Erreichung vertrieblicher Ziele",
  },
  {
    date: "Aug 2019 - Feb. 2021",
    title: "Geprüfte Wirtschaftsfachwirtin",
    company: "HKBiS, Handelskammer",
    location: "Hamburg",
    content: [
      "Betriebliches Management",
      "Personalmanagement",
      "Führung und Zusammenarbeit",
      "Unternehmensführung",
      "Volks- und Betriebswirtschaft",
      "Investition",
      "Finanzierung",
      "Betriebliches Rechnungswesen",
      "Controlling",
    ],
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
  <Easycircular />,
  <StudyIcon />,
  <NeueFischeIcon />,
  <TargobankIcon />,
  <IHKIcon />,
  <SantanderIcon />,
  <SantanderIcon />,
];

const StyledTitleCompany = styled.div`
  h3,
  h4 {
    margin: 0.5rem 0;
    font-weight: bold;
    color: var(--color-text);
  }
`;

const StyledList = styled.ul`
  color: var(--color-text);
`;

const StyledParagraph = styled.p`
  color: var(--color-text);
`;

const StyledHeader = styled.h2`
  text-align: center;
  color: var(--color-header);
  margin: 3rem 2rem 3rem;
`;

const StyledVerticalTimelineElement = styled(VerticalTimelineElement)`
  .vertical-timeline-element-content {
    background: ${(props) =>
      props.isEven ? "var(--color-primary)" : "var(--color-white)"};
    color: var(--color-black);
    box-shadow: none;
  }

  .vertical-timeline-element-content-arrow {
    border-right: 7px solid
      ${(props) =>
        props.isEven ? "var(--color-primary)" : "var(--color-white)"};
  }

  .vertical-timeline-element-icon {
    background: var(--color-white);
    // color: var(--color-black);
    // border: 2px solid var(--color-primary);
    // padding: 16px;
    // margin-right: 4px;
  }

  ul {
    padding-left: 1.5rem;
    margin-top: 0.5rem;
    margin-bottom: 0.5rem;
  }
`;

function RenderItemContent(item) {
  const isArray = Array.isArray(item.content);

  if (isArray) {
    return (
      <StyledList>
        {item.content.map((point, id) => (
          <li key={id}>{point}</li>
        ))}
      </StyledList>
    );
  } else {
    return <StyledParagraph>{item.content}</StyledParagraph>;
  }
}

export default function Timeline() {
  return (
    <section id="cv">
      <StyledHeader>CV</StyledHeader>
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
              {RenderItemContent(item)}
              <p>{item.location}</p>
            </StyledVerticalTimelineElement>
          ))}
        </VerticalTimeline>
      </div>
    </section>
  );
}
