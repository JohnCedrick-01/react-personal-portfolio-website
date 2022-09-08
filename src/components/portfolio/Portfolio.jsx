import React from "react";
import "./portfolio.css";
import IMG1 from "../../assets/portfolio1.png";
import IMG2 from "../../assets/portfolio2.jpg";
import IMG3 from "../../assets/portfolio3.jpg";
import IMG4 from "../../assets/portfolio4.png";
import IMG5 from "../../assets/portfolio5.png";
import IMG6 from "../../assets/portfolio6.jpg";


// Array for Portfolio //
const data = [
  {
    id: 1,
    image: IMG1,
    title: 'Resto',
    github: 'https://github.com/JohnCedrick-01/resto_wp',
    demo: 'https://github.com/'

  },
  {
    id: 2,
    image: IMG2,
    title: 'Inka Athlete',
    github: 'https://github.com/',
    demo: 'https://github.com/'

  },

  {
    id: 3,
    image: IMG3,
    title: 'Town Seat Experts {123}',
    github: 'https://github.com/JohnCedrick-01/TownSeat_Experts',
    demo: 'https://town-seat-experts.myshopify.com/'

  },
  {
    id: 4,
    image: IMG4,
    title: 'Gallery Page',
    github: 'https://github.com/',
    demo: 'http://johncedrickmagtibay.rf.gd/'

  },
  {
    id: 5,
    image: IMG5,
    title: 'Inka Ver 3.0',
    github: '#portfolio',
    demo: '#portfolio'

  },
  {
    id: 6,
    image: IMG6,
    title: 'Personal Portfolio',
    github: 'https://github.com/JohnCedrick-01/react-personal-portfolio-website',
    demo: 'https://john-cedrick.000webhostapp.com/'

  }



]


const Portfolio = () => {
  return (
    <section id="portfolio">
      <h5>My Recent Works</h5>
      <h2>Portfolio</h2>
      <div className="container portfolio__container">
      {
        data.map(({id, image, title, github, demo}) => {
          return(
            <article key={id} className="portfolio__item">
            <div className="portfolio__item-image">
              <img src={image} alt={title} />
            </div>
            <h3>{title}</h3>
            <div className="portfolio__item-cta">
            <a href={github} className="btn" target="_blank">
              Github
            </a>
            <a href={demo}
              className="btn btn-primary"
              target="_blank"
            >
              Live Demo
            </a>
            </div>
          </article>
          )
        })
      }
      </div>
    </section>
  );
};

export default Portfolio;
