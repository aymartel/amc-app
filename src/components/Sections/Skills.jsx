import React from "react";
import TrackVisibility from "react-on-screen";
import Skill from "../Items/Skill";

const skillData = {
  skillContent:
    "Enthusiastic and detail oriented frontend programmer with 4 years of experience in web development working with REACT technologies using Javascript, HTML, CSS languages. I also have experience as a graphic designer working with Adobe Creative Suite specifically Illustrator and Photoshop. I also worked as a programming and chess teacher for teenagers. I worked as operations manager for Latin American countries in a Russian company, improving the product sales area and managing the company's logistics in the country. Adept at collaborating with cross-functional teams to drive project success. Seeking to contribute technical expertise and creative skills to a dynamic development team.",
  progressData: [
    {
      id: 1,
      name: "Javascript  ",
      percentage: 75,
    },
    {
      id: 2,
      name: "Python",
      percentage: 80,
    },
    {
      id: 3,
      name: "Typescript  ",
      percentage: 60,
    },
    {
      id: 4,
      name: "Data base",
      percentage: 85,
    },
    {
      id: 5,
      name: "HTML",
      percentage: 75,
    },
    {
      id: 6,
      name: "CSS ",
      percentage: 80,
    },
    {
      id: 7,
      name: "Figma",
      percentage: 60,
    },
    {
      id: 8,
      name: "React",
      percentage: 85,
    },
    {
      id: 9,
      name: "Javascript",
      percentage: 75,
    },
    {
      id: 10,
      name: "NextJs",
      percentage: 80,
    },
    {
      id: 11,
      name: "Container",
      percentage: 60,
    },
    {
      id: 12,
      name: "Bootstrap",
      percentage: 85,
    },
    {
      id: 13,
      name: "MaterialUI",
      percentage: 75,
    },
    {
      id: 14,
      name: "Git",
      percentage: 80,
    },
    {
      id: 15,
      name: "Jira ",
      percentage: 60,
    },
    {
      id: 16,
      name: "Creative ",
      percentage: 85,
    },
    {
      id: 17,
      name: "Adobe suite",
      percentage: 85,
    },
    {
      id: 18,
      name: "Time Management",
      percentage: 75,
    },
    {
      id: 19,
      name: "O.O.P.",
      percentage: 80,
    },
    {
      id: 20,
      name: "Detailed",
      percentage: 60,
    },
    {
      id: 21,
      name: "Teamwork",
      percentage: 85,
    }
  ],
};

function Skills() {
  return (
    <>
      <p className="mb-0">{skillData.skillContent}</p>
      <div className="mt-5">
        <div className="row -mt-50">
          {skillData.progressData.map((progress) => (
            <div className="col-sm-6 col-md-4 col-xl-3 mt-20" key={progress.id}>
              <TrackVisibility once>
                <Skill progress={progress} />
              </TrackVisibility>
            </div>
          ))}
        </div>
      </div>
    </>
  );
}

export default Skills;
