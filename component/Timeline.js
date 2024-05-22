import React from "react";
import {
  VerticalTimeline,
  VerticalTimelineElement,
} from "react-vertical-timeline-component";
import "react-vertical-timeline-component/style.min.css";

export default function Timeline() {
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

  return (
    <section id="cv">
      <h1 class="text-4xl flex items-center justify-center mt-8">Timeline</h1>
      <div className="mx-auto">
        <VerticalTimeline>
          {timelineItems.map((item, index) => (
            <VerticalTimelineElement
              key={index}
              date={<div className="mx-4">{item.date}</div>}
              contentStyle={{
                background: index % 2 == 0 ? "#00ffe2" : "white",
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
      </div>
    </section>
  );
}
