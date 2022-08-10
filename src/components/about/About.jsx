import React from "react";
import "./about.css";
import ME from "../../assets/me-about.jpg";
import {FaAward} from "react-icons/fa"
import {RiTeamLine} from "react-icons/ri"
import {IoLibraryOutline} from "react-icons/io5"

const About = () => {
  return (
    <section id="about">
      <h5>Get To Know</h5>
      <h2>About Me</h2>

      <div className="container about__container">
        <div className="about__me">
          <div className="about__me-image">
            <img src={ME} alt="Author Wearing Facemask" />
          </div>
        </div>
        <div className="about__content">
          <div className="about__cards">
            <article className="about__card">
              <FaAward className="about__icon" />
              <h5>Experience</h5>
              <small>6+ Years Working</small>
            </article>

            <article className="about__card">
              <RiTeamLine className="about__icon" />
              <h5>Clients</h5>
              <small>50+ Worldwide</small>
            </article>

            <article className="about__card">
              <IoLibraryOutline className="about__icon" />
              <h5>Projects</h5>
              <small>50+ Completed</small>
            </article>
          </div>
          <p>
            Lorem ipsum dolor sit amet consectetur adipisicing elit. Accusantium
            culpa perferendis commodi minima odio reprehenderit fugiat sapiente
            sunt ad quidem doloremque, ullam, repudiandae ut repellendus cumque
            tempore? Dolor, iste minima!
          </p>
          <a href='#contact' className="btn btn-primary">Let's Talk</a>
        </div>
      </div>
    </section>
  );
};

export default About;
