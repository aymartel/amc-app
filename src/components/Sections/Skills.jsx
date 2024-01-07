import React from "react";
import TrackVisibility from "react-on-screen";
import Skill from "../Items/Skill";

const skillData = {
  skillContent:
    "I have 3 years of experience in web development working with REACT and Angular technologies using Javascript, HTML, CSS languages. I also have experience as a graphic designer working with Adobe Creative Suite specifically Illustrator and Photoshop. I’m very proactive and I'm always trying to learn new skills.",
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
  ],
};

function Skills() {
  return (
    <>
      <p className="mb-0">{skillData.skillContent}</p>
      <div className="mt-5">
        <div className="row -mt-50">
          {skillData.progressData.map((progress) => (
            <div className="col-md-6 mt-50" key={progress.id}>
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
