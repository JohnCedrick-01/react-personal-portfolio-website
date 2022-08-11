import React from 'react'
import './services.css'
import {HiOutlineArrowCircleRight} from 'react-icons/hi'

function Services() {
  return (
    <section id='services'>
      <h5>What I offer</h5>
      <h2>Services</h2>

      <div className="container services__container">
        <article className="service">
            <div className="service__head">
              <h3>Graphic Design</h3>
            </div>
            <ul className='service__list'>
              <li>
                <HiOutlineArrowCircleRight className='service__list-icon'/>
                <p>UI/UX Design</p>
              </li>
              <li>
                <HiOutlineArrowCircleRight className='service__list-icon'/>
                <p>Premiere Pro / After Effects</p>
              </li>
              <li>
                <HiOutlineArrowCircleRight className='service__list-icon'/>
                <p>High-end Presentation</p>
              </li>
              <li>
                <HiOutlineArrowCircleRight className='service__list-icon'/>
                <p>Offset Print Design</p>
              </li>
              <li>
                <HiOutlineArrowCircleRight className='service__list-icon'/>
                <p>Branding</p>
              </li>
              <li>
                <HiOutlineArrowCircleRight className='service__list-icon'/>
                <p>InDesign</p>
              </li>
            </ul>
        </article>

        <article className="service">
            <div className="service__head">
              <h3>Web Development</h3>
            </div>
            <ul className='service__list'>
              <li>
                <HiOutlineArrowCircleRight className='service__list-icon'/>
                <p>Responsive Web Design</p>
              </li>
              <li>
                <HiOutlineArrowCircleRight className='service__list-icon'/>
                <p>Shopify Store</p>
              </li>
              <li>
                <HiOutlineArrowCircleRight className='service__list-icon'/>
                <p>WordPress Site</p>
              </li>
              <li>
                <HiOutlineArrowCircleRight className='service__list-icon'/>
                <p>HubSpot CMS</p>
              </li>
              <li>
                <HiOutlineArrowCircleRight className='service__list-icon'/>
                <p>Dynamic Frontend Design</p>
              </li>
              <li>
                <HiOutlineArrowCircleRight className='service__list-icon'/>
                <p>Web Application</p>
              </li>
            </ul>
        </article>

        <article className="service">
            <div className="service__head">
              <h3>Other Services</h3>
            </div>
            <ul className='service__list'>
              <li>
                <HiOutlineArrowCircleRight className='service__list-icon'/>
                <p>Artificial Intelligence / IOT</p>
              </li>
              <li>
                <HiOutlineArrowCircleRight className='service__list-icon'/>
                <p>SEO Services</p>
              </li>
              <li>
                <HiOutlineArrowCircleRight className='service__list-icon'/>
                <p>Software Development</p>
              </li>
              <li>
                <HiOutlineArrowCircleRight className='service__list-icon'/>
                <p>Network Admin</p>
              </li>
              <li>
                <HiOutlineArrowCircleRight className='service__list-icon'/>
                <p>TypeScripting</p>
              </li>
              <li>
                <HiOutlineArrowCircleRight className='service__list-icon'/>
                <p>Hardware Services</p>
              </li>
            </ul>
        </article>

      </div>
    </section>
  )
}

export default Services