import React from "react";
import { Link } from "react-router-dom";

const aboutData = {
  cvpath: "media/cv-andymartel.pdf",
  image: "images/about.png",
  name: "Andy Martel",
  location: "Moscow, Russia",
  birthday: "08 December, 1992",
  email: "aymartel@gmail.com",
  aboutMe1:"I’m Andy Martel an enthusiastic detail-oriented Master in Applied Informatics who graduated from The National University of Science and Technology of Russia (MISIS) I am also Software Engineer from the University of Computer Science of Cuba (UCI).",
};

function About() {
  return (
    <div className="row">
      <div className="col-md-3">
        <img src={aboutData.image} alt={aboutData.name} />
      </div>
      <div className="col-md-9">
        <h2 className="mt-4 mt-md-0 mb-4">Hello!</h2>
        <p className="mb-0">{aboutData.aboutMe1}</p>
        <div className="row my-4">
          <div className="col-md-6">
            <p className="mb-2">
              Name: <span className="text-dark">{aboutData.name}</span>
            </p>
            <p className="mb-0">
              Birthday: <span className="text-dark">{aboutData.birthday}</span>
            </p>
          </div>
          <div className="col-md-6 mt-2 mt-md-0 mt-sm-2">
            <p className="mb-2">
              Location: <span className="text-dark">{aboutData.location}</span>
            </p>
            <p className="mb-0">
              Email: <span className="text-dark">{aboutData.email}</span>
            </p>
          </div>
        </div>
        <a href={aboutData.cvpath} className="btn btn-default mr-3">
          <i className="icon-cloud-download"></i>Download CV
        </a>
        <Link to="/contact"
          className="btn btn-alt mt-2 mt-md-0 mt-xs-2"
        >
          <i className="icon-envelope"></i>Hire me
        </Link>
      </div>
    </div>
  );
}

export default About;
