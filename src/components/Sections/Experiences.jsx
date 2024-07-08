import React from "react";
import Experience from "../Items/Experience";

const experiencesData = [
  {
    id: 0,
    year: "July 2022 - Jan 2024",
    degree: "BairesDev",
    position: "React & TypeScript Engineer",
    content:
      "As a React & TypeScript Engineer at BairesDev, I worked on the frontend development of an internal ERP system using React, TypeScript, Figma, GraphQL, Jest, React Testing Library, and Git. I developed dynamic and scalable web applications, collaborated with multidisciplinary teams to integrate frontend components with backend systems, and optimized application performance. Utilizing agile methodologies like Scrum for task planning and execution, I implemented best development practices and ensured the quality and robustness of the code. My role involved creating seamless and efficient user interfaces, contributing to the success of innovative and highly complex projects.",
  },
  {
    id: 1,
    year: "Sept 2020 - Jan 2024",
    degree: "FREELANCER - RUSSIA",
    position: "Graphic Designer & Web Developer",
    content:
      "I worked as a freelancer, combining roles in graphic design and web development. As a graphic designer, I utilized the Adobe suite to carry out branding projects, creating corporate identities for small businesses. This involved designing various graphic elements such as logos, banners, business cards, brochures, billboards, and posters. In web development, I focused on projects using the MERN stack (MongoDB, Express, React, Node.js) and Next.js, primarily concentrating on front-end development. I developed landing pages for companies in diverse sectors, including medical, commerce, NFT art, and small businesses. Additionally, I worked on Search Engine Optimization (SEO) projects, designing and implementing strategies to enhance internet visibility and search engine ranking. Throughout these projects, I collaborated closely with colleagues and clients to ensure the successful delivery of high-quality results.",
  },
  {
    id: 2,
    year: "Sept 2019 - Jul 2020",
    degree: "IT GENIUS - RUSSIA",
    position: "Teacher",
    content:
      "I worked as a Python Teacher and Chess Instructor. I designed and delivered Python programming courses specifically tailored for children aged 10 to 16, creating a fun and interactive learning environment. My teaching approach included fundamental programming concepts through games and interactive projects to engage students effectively. Additionally, I taught chess and organized chess workshops, helping students develop strategic thinking and problem-solving skills. This dual role allowed me to foster both technical and cognitive abilities in young learners.",
  },
  {
    id: 3,
    year: "July 2018 - Aug 2019",
    degree: "CITMA - CUBA",
    position: "Frontend Developer",
    content: "Throughout my employment at the Ministry of Science, Technology, and Environment of the Republic of Cuba (CITMA) from September 2016 to August 2019, I worked on a variety of web development projects. Initially, I developed institutional websites using WordPress, where I also created graphic designs with Illustrator and Photoshop and enhanced web functionalities with HTML, JavaScript, and CSS. From September 2017 to July 2018, I supported a human resources software suite built with MongoDB, ExpressJS, React, and NodeJS, focusing on troubleshooting and data support. Later, from July 2018 to August 2019, I joined a team to develop an internal web solution for managers, displaying statistical results on a dashboard. My role concentrated on the frontend layer using ReactJS, Redux, HTML5, Bootstrap, Sass, and GIT. These experiences allowed me to deepen my expertise in web frontend technologies and collaborative project development.",
  },
  {
    id: 4,
    year: "Jan 2016 - Aug 2016",
    degree: "Universidad de las Ciencias Informáticas - CUBA",
    position: ".NET Developer",
    content:
      "My first professional role was as a .NET Developer at the University of Informatics Sciences (UCI) in Cuba from July 2016 to September 2016. I was part of a team developing a video surveillance solution using Visual Studio and C#. My primary responsibility was the frontend development of the client application using Windows Forms. This involved creating intuitive and functional user interfaces, integrating these with the backend services, and ensuring a seamless user experience. I designed and implemented user-friendly UI layouts, conducted thorough testing and debugging to ensure application stability and performance, and documented the development process for future maintenance. Additionally, I collaborated closely with other developers and team members to meet project deadlines and objectives. This project was a valuable opportunity for me to hone my skills in desktop application development and gain practical experience with Visual Studio and C#.",
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
