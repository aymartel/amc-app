import React from "react";
import { Link } from "react-router-dom";
import {
  FaTwitter,
  FaInstagram,
  FaLinkedin,
  FaGithub,
} from "react-icons/fa";

const headerData = {
  name: "Andy Martel",
  designation: "Master in Applied Informatics",
  imageThumb: "/images/favicon.png",
  imageFavicon: "/images/favicon.png",
  social: {
    github: "https://github.com/aymartel",
    twitter: "https://twitter.com/andyymartel",
    instagram: "https://www.instagram.com/andy.martel",
    linkedin: "https://www.linkedin.com/in/andy-yonnie-martel-carpio-a28559134",
  },
};

function Header({ toggleHeader, toggleHandler }) {
  return (
    <>
      <div
        className={
          toggleHeader
            ? "mobile-header py-2 px-3 mt-4 push"
            : "mobile-header py-2 px-3 mt-4"
        }
      >
        <button className="menu-icon mr-2" onClick={toggleHandler}>
          <span></span>
          <span></span>
          <span></span>
        </button>
        <Link to="/" className="logo">
          <img src={headerData.imageFavicon} alt={headerData.name} />
        </Link>
        <Link to="/" className="site-title dot ml-2">
          {headerData.name}
        </Link>
      </div>

      <header
        className={
          toggleHeader
            ? "left float-left shadow-dark open"
            : "left float-left shadow-dark"
        }
      >
        <button
          type="button"
          className="close"
          aria-label="Close"
          onClick={toggleHandler}
        >
          <span aria-hidden="true">&times;</span>
        </button>
        <div className="header-inner d-flex align-items-start flex-column">
          <Link to="/">
            <img src={headerData.imageThumb} alt={headerData.name} />
          </Link>
          <Link to="/multipage" className="site-title dot mt-3">
            {headerData.name}
          </Link>

          <span className="site-slogan">{headerData.designation}</span>

          <nav>
            <ul className="vertical-menu scrollspy">
              <li>
                <Link to="/">
                  <i className="icon-home"></i>Home
                </Link>
              </li>
              <li>
                <Link to="/about">
                  <i className="icon-user"></i>About
                </Link>
              </li>
              {/* <li>
                <Link to="/services">
                  <i className="icon-bulb"></i>Services
                </Link>
              </li> */}
              <li>
                <Link to="/resume">
                  <i className="icon-graduation"></i>Resume
                </Link>
              </li>
              <li>
                <Link to="/works">
                  <i className="icon-grid"></i>Works
                </Link>
              </li>
              <li>
                <Link to="/contact">
                  <i className="icon-phone"></i>Contact
                </Link>
              </li>
            </ul>
          </nav>

          <div className="footer mt-auto">
          <ul className="social-icons list-inline">
              {!headerData.social.github ? null : (
                <li className="list-inline-item">
                  <a href={headerData.social.github}>
                    <FaGithub />
                  </a>
                </li>
              )}
              {!headerData.social.twitter ? null : (
                <li className="list-inline-item">
                  <a href={headerData.social.twitter}>
                    <FaTwitter />
                  </a>
                </li>
              )}
              {!headerData.social.instagram ? null : (
                <li className="list-inline-item">
                  <a href={headerData.social.instagram}>
                    <FaInstagram />
                  </a>
                </li>
              )}
              {!headerData.social.linkedin ? null : (
                <li className="list-inline-item">
                  <a href={headerData.social.linkedin}>
                    <FaLinkedin />
                  </a>
                </li>
              )}
              
            </ul>

            <span className="copyright">
              &copy; {new Date().getFullYear()} Andy Martel
            </span>
          </div>
        </div>
      </header>
    </>
  );
}

export default Header;
