import React from "react";
import styled from "styled-components";
import {
  VerticalTimeline,
  VerticalTimelineElement,
} from "react-vertical-timeline-component";
import "react-vertical-timeline-component/style.min.css";

const Section = styled.section`
  #cv {
    padding: 20px;
  }
`;

const Title = styled.h1`
  font-size: 2.25rem; /* entspricht text-4xl */
  display: flex;
  align-items: center;
  justify-content: center;
  margin-top: 2rem; /* entspricht mt-8 */
`;

const Container = styled.div`
  max-width: 900px;
  margin: 0 auto;
`;

const StyledDate = styled.div`
  margin: 0 1rem; /* entspricht mx-4 */
`;

const timelineItems = [
  {
    date: "Januar 2011 - Oct. 2021",
    title: "Jobtitle",
    location: "Hamburg",
  },
  {
    date: "Januar 2011 - Oct. 2021",
    title: "Jobtitle",
    location: "Hamburg",
  },
  {
    date: "Januar 2011 - Oct. 2021",
    title: "Jobtitle",
    location: "Hamburg",
  },
  {
    date: "Januar 2011 - Oct. 2021",
    title: "Jobtitle",
    location: "Hamburg",
    content: "Hier der Content",
  },
];

const icons = [
  <img
    src="https://www.santander.de/ressourcen/img/svg/santander-logo-2018.svg"
    alt="Santander Logo"
  />,
  <img
    src="https://www.targobank.de/de/amc-content/svg/assets/icon-tab.svg"
    alt="Targobank Logo"
  />,
];

const color = "#00ffe2";

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
                color: "#3498db",
                border: "2px solid #3498db",
                padding: "16px",
                marginRight: "4px",
              }}
              icon={icons[index % icons.length]}
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
