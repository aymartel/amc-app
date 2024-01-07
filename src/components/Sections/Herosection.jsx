import React from "react";
import { Link } from "react-router-dom";

const herosectionData = {
  name: "Andy Martel",
  aboutMe:
    "He lay on his armour-like back, and if he lifted his head a little he could see his brown belly, slightly domed and divided by arches into stiff sections.",
};

function Herosection() {
  const myStyleBackground = {
    'backgroundImage': "url(/images/hero.jpg)",
    'backgroundRepeat': "no-repeat",
    'backgroundAttachment': "fixed",
    'backgroundPosition': "center center",
    'backgroundSize': "cover",
    'marginLeft': "0 auto",
    'marginRight': "0 auto"
  };
  return (
    <section
      className="hero background parallax shadow-dark d-flex align-items-center my-style-background"
      style={myStyleBackground}
    >
      <div className="cta mx-auto mt-2">
        <h1 className="mt-0 mb-4">
          I’m {herosectionData.name}
          <span className="dot"></span>
        </h1>
        <p className="mb-4">Cuban Master in Applied Informatics, Amateur Baseball Player.<br></br><strong>"Keep your eyes on the stars and your feet on the ground"</strong> </p>
        <p className="mb-4"></p>
        {/* <Link to="/works"
          className="btn btn-default btn-lg mr-3"
        >
          <i className="icon-grid"></i>View Portfolio
        </Link> */}
        <Link to="/resume"
          className="btn btn-default btn-lg mr-3"
        >
          <i className="icon-graduation"></i>Resume
        </Link>
        <div
          className="spacer d-md-none d-lg-none d-sm-none"
          data-height="10"
        ></div>
        <Link to="/contact"
          className="btn btn-border-light btn-lg"
        >
          <i className="icon-envelope"></i>Hire me
        </Link>
      </div>
      <div className="overlay"></div>
    </section >
  );
}

export default Herosection;
