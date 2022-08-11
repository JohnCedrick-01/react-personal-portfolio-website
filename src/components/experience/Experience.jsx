import React from "react";
import "./experience.css";
import { FaReact } from "react-icons/fa";

const Experience = () => {
  return (
    <section id="experience">
      <h5>Skills I have</h5>
      <h2>My Experience</h2>

      <div className="container experience__container">
        <div className="experience__frontend">
          <h3>Frontend Development</h3>
          <div className="experience__content">
            <article className="experience__details">
              <FaReact className='experience__details-icon' />
              <div>
                <h4>HTML</h4>
                <small className="text-light">Expert</small>
              </div>
            </article>

            <article className="experience__details">
              <FaReact className='experience__details-icon' />
              <div>
                <h4>CSS</h4>
                <small className="text-light">Expert</small>
              </div>
            </article>

            <article className="experience__details">
              <FaReact className='experience__details-icon' />
              <div>
                <h4>React/JS</h4>
                <small className="text-light">Proficient</small>
              </div>
            </article>

            <article className="experience__details">
              <FaReact className='experience__details-icon' />
              <div>
                <h4>Tailwind</h4>
                <small className="text-light">Competent</small>
              </div>
            </article>
          </div>
        </div>

        <div className="experience__backend">
          <h3>Backend Development</h3>
          <div className="experience__content">
            <article className="experience__details">
              <FaReact className='experience__details-icon' />
              <div>
              <h4>PHP</h4>
              <small className="text-light">Competent</small>
              </div>
            </article>

            <article className="experience__details">
              <FaReact className='experience__details-icon' />
              <div>
              <h4>MySQL</h4>
              <small className="text-light">Competent</small>
              </div>
            </article>

            <article className="experience__details">
              <FaReact className='experience__details-icon' />
              <div>
              <h4>Python</h4>
              <small className="text-light">Novice</small>
              </div>
            </article>

            <article className="experience__details">
              <FaReact className='experience__details-icon' />
              <div>
              <h4>C++</h4>
              <small className="text-light">PRoficient</small>
              </div>
            </article>

          </div>
        </div>
        <div className="experience__content-management">
          <h3>Content Management</h3>
          <div className="experience__content">
            <article className="experience__details">
              <FaReact className='experience__details-icon' />
              <div>
              <h4>Shopify</h4>
              <small className="text-light">Proficient</small>
              </div>
            </article>

            <article className="experience__details">
              <FaReact className='experience__details-icon' />
              <div>
              <h4>WordPress</h4>
              <small className="text-light">Proficient</small>
              </div>
            </article>

            <article className="experience__details">
              <FaReact className='experience__details-icon' />
              <div>
              <h4>HubL</h4>
              <small className="text-light">Competent</small>
              </div>
            </article>

            <article className="experience__details">
              <FaReact className='experience__details-icon' />
              <div>
              <h4>Git</h4>
              <small className="text-light">Expert</small>
              </div>
            </article>
          </div>
        </div>
      </div>
    </section>
  );
};

export default Experience;
