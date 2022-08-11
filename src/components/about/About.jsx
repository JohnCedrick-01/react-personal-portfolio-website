import React from "react";
import "./about.css";
import ME from "../../assets/me-about.jpg";
import { FaAward } from "react-icons/fa";
import { RiTeamLine } from "react-icons/ri";
import { IoLibraryOutline } from "react-icons/io5";

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
        
              I’m a Full Stack Developer located in Philippines. I have a
              serious passion in learning UI effects, animations and creating
              intuitive, dynamic user experiences.
              <br />
              <br />
              Well-organised person, problem solver, independent employee with
              high attention to detail. Fan of MMA, outdoor activities, TV
              series and English literature. A family person and father of two
              fractious boys
              <br />
              <br />
              Interested in the entire frontend spectrum and working on
              ambitious projects with positive people.
          </p>
          <a href="#contact" className="btn btn-primary">
            Let's Talk
          </a>
        </div>
      </div>
    </section>
  );
};

export default About;
