import React from "react";
import TrackVisibility from "react-on-screen";
import Skill from "../Items/Skill";

const skillData = {
  skillContent:
    "Enthusiastic and detail oriented frontend programmer with 4 years of experience in web development working with REACT technologies using Javascript, HTML, CSS languages. I also have experience as a graphic designer working with Adobe Creative Suite specifically Illustrator and Photoshop. I also worked as a programming and chess teacher for teenagers. I worked as operations manager for Latin American countries in a Russian company, improving the product sales area and managing the company's logistics in the country. Adept at collaborating with cross-functional teams to drive project success. Seeking to contribute technical expertise and creative skills to a dynamic development team.",
  progressData: [
    {
      id: 1,
      name: "Javascript",
      percentage: 75,
    },
    {
      id: 2,
      name: "HTML & CSS",
      percentage: 80,
    },
    {
      id: 3,
      name: "Database",
      percentage: 60,
    },
    {
      id: 4,
      name: "O.O.P",
      percentage: 85,
    },
    {
      id: 5,
      name: "Javascript",
      percentage: 75,
    },
    {
      id: 6,
      name: "HTML & CSS",
      percentage: 80,
    },
    {
      id: 7,
      name: "Database",
      percentage: 60,
    },
    {
      id: 8,
      name: "O.O.P",
      percentage: 85,
    },
    {
      id: 9,
      name: "Javascript",
      percentage: 75,
    },
    {
      id: 10,
      name: "HTML & CSS",
      percentage: 80,
    },
    {
      id: 11,
      name: "Database",
      percentage: 60,
    },
    {
      id: 12,
      name: "O.O.P",
      percentage: 85,
    },
    {
      id: 13,
      name: "Javascript",
      percentage: 75,
    },
    {
      id: 14,
      name: "HTML & CSS",
      percentage: 80,
    },
    {
      id: 15,
      name: "Database",
      percentage: 60,
    },
    {
      id: 16,
      name: "O.O.P",
      percentage: 85,
    },
    {
      id: 17,
      name: "O.O.P",
      percentage: 85,
    },
    {
      id: 18,
      name: "Javascript",
      percentage: 75,
    },
    {
      id: 19,
      name: "HTML & CSS",
      percentage: 80,
    },
    {
      id: 20,
      name: "Database",
      percentage: 60,
    },
    {
      id: 21,
      name: "O.O.P",
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
            <div className="col-md-3 mt-20" key={progress.id}>
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
