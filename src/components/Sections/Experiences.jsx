import React from "react";
import Experience from "../Items/Experience";

const experiencesData = [
  {
    id: 0,
    year: "July 2022 - Jan 2024",
    degree: "47 TECH - Russia",
    position: "Operations Manager",
    content:
      "I Led a dynamic team in product sales, managing purchasing logistics and implementing effective sales  strategies. Oversaw inventory management, ensuring  optimal stock levels. Collaborated with cross-functional teams to optimize supply chain operations and reduce costs. Utilized Jira for project management and Power BI for data analysis. Implemented data-driven decision-making processes to enhance sales performance. ",
  },
  {
    id: 1,
    year: "Sept 2020 - July 2022",
    degree: "FREELANCER - RUSSIA",
    position: "Web Development",
    content:
      "I worked on several freelancer web development projects. Using the MERN knowledge stack (MongoDB, Express, React and Node.js.) more focused on the front end and using NextJs I developed landing pages for companies in the medical sector, commerce, the art of NFT and small business. I also worked on Search Engine Optimization (SEO) projects designing and developing strategies for better internet positioning.",
  },
  {
    id: 2,
    year: "Sept 2020 - July 2022",
    degree: "FREELANCER - RUSSIA",
    position: "Designer",
    content:
      "During my Master's studies I worked as a freelancer graphic designer working with the Adobe suite, I carried out Branding projects creating the corporate identity of small businesses for which I also designed graphic elements (logos, banners, business cards, brochures, billboards, posters, etc. )",
  },
  {
    id: 3,
    year: "Sept 2019 - July 2020",
    degree: "IT GENIUS - RUSSIA",
    position: "Teacher",
    content:"I worked as Python Teacher & Chess Instructor. I Designed and delivered Python programming courses tailored for children aged from 10 to 16 years, fostering a fun and interactive learning environment. Teaching fundamental programming concepts through games, interactive projects. I also teach chess and Organized chess workshops, cultivating strategic thinking and  problem-solving skills among students. ",
  },
  {
    id: 4,
    year: "July 2018 - Aug 2019",
    degree: "CITMA - CUBA",
    position: "Web Development",
    content: "I was assigned to a team of 5 people to develop an internal web solution for managers that shows statistical results. The software shows gadgets in a dashboard with updated information of science results, environmental issues, and other information.  I was involved in the front end layer, using ReactJS, Redux, HTML5, Bootstrap, Sass and GIT. This was a very interesting project that made me focus on web frontend technologies.",
  },
  {
    id: 5,
    year: " Sept 2017 - July 2018",
    degree: "CITMA - CUBA",
    position: "Web Development",
    content:
      "I started giving support to a human resources software suite. This was developed with MongoDB, ExpressJS, React, NodeJS. My responsibilities there were solving small issues  and giving data support to the users.",
  },
  {
    id: 6,
    year: " July 2016 - July 2017",
    degree: "CITMA - CUBA",
    position: "Web Development",
    content:
      "I started at the Ministry of Science, Technology, and Environment of the Republic of Cuba (CITMA) developing institutional websites. The websites of the ministry were developed in WordPress with a small team of 3 people. I made some graphic designs for the webs using Illustrator and Photoshop and added to the web page created with wordpress new functionalities using HTML, Javascript and CSS ",
  },
  {
    id: 7,
    year: "July 2016 - Sept 2016",
    degree: "UCI - CUBA",
    position: ".NET Development",
    content:
      "My first professional work was after graduated from the university. This was a small project part of a video-vigilance solution developed in Visual Studio and C#. My responsibility in this project was the front end development of the client application using Windows Forms.",
  },
  {
    id: 8,
    year: "Sept 2019 - June 2022 ",
    degree: "MISIS - MOSCOW",
    position: "Student",
    content:
      "Master's Degree in Informatics Applied to Design in The National University of Science and Technology MISiS",
  },
  {
    id: 9,
    year: "Sept 2011 - June 2016",
    degree: "UCI - Havana",
    position: "Student",
    content:
      "Bachelor of Computer Science in The University of Informatics Sciences of Cuba.",
  },
];

function Experiences() {
  return (
    <div className="timeline">
      {experiencesData.map((experience) => (
        <Experience experience={experience} key={experience.id} />
      ))}
      <span className="timeline-line"></span>
    </div>
  );
}

export default Experiences;
