import React from "react";
import styled from "styled-components";
import {
  VerticalTimeline,
  VerticalTimelineElement,
} from "react-vertical-timeline-component";
import "react-vertical-timeline-component/style.min.css";
import { SantanderIcon } from "../icons/santander";

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
    date: "Januar 2011 - Oct. 2021",
    title: "Banker",
    location: "Hamburg",
  },
  {
    date: "Januar 2011 - Oct. 2021",
    title: "Banker",
    location: "Hamburg",
  },
  {
    date: "Januar 2011 - Oct. 2021",
    title: "Student",
    location: "Hamburg",
  },
  {
    date: "Januar 2011 - Oct. 2021",
    title: "Student",
    location: "Hamburg",
    content: "Hier der Content",
  },
];

const icons = [
  //   <img
  //     src="https://www.santander.de/ressourcen/img/svg/santander-logo-2018.svg"
  //     alt="Santander Logo"
  //   />,
  <SantanderIcon />,
  <img
    src="https://www.targobank.de/de/amc-content/svg/assets/icon-tab.svg"
    alt="Targobank Logo"
  />,
];

const color = "green";

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
