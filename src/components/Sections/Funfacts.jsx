import React from "react";
import TrackVisibility from "react-on-screen";
import Funfact from "../Items/Funfact";

const funfactData = [
  {
    id: 1,
    title: "Javascript",
    count: 20,
    icon: "icon-like",
  },
  {
    id: 2,
    title: "Python",
    count: 2765,
    icon: "icon-cup",
  },
  {
    id: 3,
    title: "Typescript",
    count: 15,
    icon: "icon-emotsmile",
  },
  {
    id: 4,
    title: "Data base",
    count: 9,
    icon: "icon-trophy",
  },
  {
    id: 5,
    title: "HTML",
    count: 20,
    icon: "icon-like",
  },
  {
    id: 6,
    title: "CSS",
    count: 2765,
    icon: "icon-cup",
  },
  {
    id: 7,
    title: "Figma",
    count: 15,
    icon: "icon-emotsmile",
  },
  {
    id: 8,
    title: "React",
    count: 9,
    icon: "icon-trophy",
  },
  
  {
    id: 5,
    title: "NextJs",
    count: 20,
    icon: "icon-like",
  },
  {
    id: 6,
    title: "Container",
    count: 2765,
    icon: "icon-cup",
  },
  {
    id: 7,
    title: "Bootstrap",
    count: 15,
    icon: "icon-emotsmile",
  },
  {
    id: 8,
    title: "Material UI",
    count: 9,
    icon: "icon-trophy",
  },
  {
    id: 1,
    title: "Git",
    count: 20,
    icon: "icon-like",
  },
  {
    id: 2,
    title: "Jira",
    count: 2765,
    icon: "icon-cup",
  },
  {
    id: 3,
    title: "Creative",
    count: 15,
    icon: "icon-emotsmile",
  },
  {
    id: 4,
    title: "Adobe Suite",
    count: 9,
    icon: "icon-trophy",
  },
  {
    id: 5,
    title: "HTML",
    count: 20,
    icon: "icon-like",
  },
  {
    id: 6,
    title: "Time Management",
    count: 2765,
    icon: "icon-cup",
  },
  {
    id: 8,
    title: "O.O.P.",
    count: 9,
    icon: "icon-trophy",
  },
  
  {
    id: 5,
    title: "HTML",
    count: 20,
    icon: "icon-like",
  },
  {
    id: 6,
    title: "Detailed",
    count: 2765,
    icon: "icon-cup",
  },
  {
    id: 7,
    title: "Teamwork",
    count: 15,
    icon: "icon-emotsmile",
  }
];

function Funfacts() {
  return (
    <section className="shadow-dark color-white background parallax padding-50">
      <div className="row relative z-1 -mt-50">
        {funfactData.map((funfact) => (
          <div className="col-md-3 col-sm-6 mt-50" key={funfact.id}>
            <TrackVisibility once>
              <Funfact funfact={funfact} />
            </TrackVisibility>
          </div>
        ))}
      </div>
      <div className="overlay"></div>
    </section>
  );
}

export default Funfacts;
