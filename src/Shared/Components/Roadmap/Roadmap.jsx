import React from "react";
import "../../../assets/styles/Roadmap.module.css"

const roadmapItems = [
  {
    quarter: "02 - Q1",
    title: "Launch",
    description:
      "Lorem ipsum commodo ac in sed tristique sit felis interdum nisl odio congue consequat dolor sagittis diam senectus imperdiet justo morbi nibh vel.",
  },
  {
    quarter: "02 - Q1",
    title: "Development",
    description:
      "Lorem ipsum commodo ac in sed tristique sit felis interdum nisl odio congue consequat dolor sagittis diam senectus imperdiet justo morbi nibh vel.",
  },
  {
    quarter: "02 - Q1",
    title: "Testing",
    description:
      "Lorem ipsum commodo ac in sed tristique sit felis interdum nisl odio congue consequat dolor sagittis diam senectus imperdiet justo morbi nibh vel.",
  },
  {
    quarter: "02 - Q1",
    title: "Release",
    description:
      "Lorem ipsum commodo ac in sed tristique sit felis interdum nisl odio congue consequat dolor sagittis diam senectus imperdiet justo morbi nibh vel.",
  },
];

export default function RoadmapPage() {
  return (
    <div className="roadmap-page">
      <div className="roadmap-header">
        <h1>
          Our <span>RoadMap</span>
        </h1>
        <p>
          Lorem ipsum nulla vestibulum imperdiet viverra habitant ultrices ac
          nisl sed varius
        </p>
      </div>

      <div className="roadmap-container">
        <div className="roadmap-line"></div>
        {roadmapItems.map((item, idx) => (
          <div className="roadmap-card" key={idx}>
            <div className="quarter">{item.quarter}</div>
            <h2>{item.title}</h2>
            <p>{item.description}</p>
          </div>
        ))}
      </div>
    </div>
  );
}
