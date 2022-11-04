import React from "react";
import Experience from "../Items/Experience";

const experiencesData = [
  {
    id: 1,
    year: "2020 - Present",
    degree: "FRELANCER WEB DEVELOPMENT",
    content:
      "I worked on several freelancer web development projects. Using the MERN knowledge stack (MongoDB, Express, React and Node.js.) although more focused on the front end and using NextJs I developed landing pages for companies in the medical sector, commerce and the art of NFT. I also worked on Search Engine Optimization (SEO) projects designing and developing strategies for better internet positioning",
  },
  {
    id: 2,
    year: "2020 - Present",
    degree: "FRELANCER GRAPHIC DESIGNER",
    content:
      "During my Master's studies I worked as a freelancer graphic designer working with the Adobe suite, I carried out Branding projects creating the corporate identity of small businesses for which I also designed graphic elements (logos, banners, business cards, brochures, billboards, posters, etc. )",
  },
  {
    id: 3,
    year: "2019 - 2020",
    degree: "BIT2ME - RUSSIA",
    content:
      "I worked as customer support agent in the area of cryptocurrencies. My responsibilities were respond in spanish to users via designated support interface and via phone calls. Search for incoming transactions, Сarrying out stuck transactions. Stay updated with the company's product, its features and functionality and how our users experience it to provide professional support to users.",
  },
  {
    id: 4,
    year: "2018 - 2019",
    degree: "CITMA - CUBA",
    content:
      "I was assigned to a team of 5 people to develop an internal web solution for managers that shows statistical results. The software shows gadgets in a dashboard with updated information of science results, environmental issues, and other information. I was involved in the front end layer, using ReactJS, Redux, HTML5, Bootstrap, Sass and GIT. This was a very interesting project that made me focus on web frontend technologies.",
  },
  {
    id: 5,
    year: "2017 - 2018",
    degree: "CITMA - CUBA",
    content:
      "I started giving support to a human resources software suite. This was developed with MongoDB, ExpressJS, AngularJS, NodeJS. My responsibilities there were solving small issues and giving data support to the users.",
  },
  {
    id: 6,
    year: "2016 - 2017",
    degree: "CITMA - CUBA",
    content:
      "I started at the Ministry of Science, Technology, and Environment of the Republic of Cuba (CITMA) developing institutional websites. The websites of the ministry were developed in WordPress with a small team of 3 people. I made some graphic designs for the webs using Illustrator and Photoshop and added to the web page created with wordpress new functionalities using HTML, Javascript andCSS",
  },
  {
    id: 7,
    year: "2016 - 2016",
    degree: "UCI - CUBA",
    content:
      "My first professional work was after graduated from the university. This was a small project part of a video-vigilance solution developed in Visual Studio and c#. My responsibility in this project was the front end development of the client application using Windows Form..",
  },
  {
    id: 8,
    year: "2019 - 2022",
    degree: "MISIS - MOSCOW",
    content:
      "Master's Degree in Informatics Applied to Design in The National University of Science and Technology MISiS",
  },
  {
    id: 9,
    year: "2011 - 2016",
    degree: "UCI - Havana",
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
