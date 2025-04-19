import React from 'react';
import { Link } from 'react-router-dom';

import 'about.css'




const About = () => {
  return (
    <>
    {/* ABOUT Section */}
    <section id="about" className="about container section">
      <div className="imgage_content">
        <Link to='/hello'>
          <h2 className="abut__title">About</h2>
        </Link>
        <p className="about__description">
          Lorem ipsum dolor sit amet consectetur adipisicing elit. Perspiciatis
          explicabo provident repellendus in facere natus. Molestiae aut sit
          corporis explicabo.
        </p>
        <p className="about__description">
          Lorem ipsum dolor, sit amet consectetur adipisicing elit. Amet rem
          tempora sunt ipsum pariatur <strong>cumque veritatis dolor</strong> ,
          laborum distinctio maiores!
        </p>
        <p className="about__description">
          Lorem, ipsum dolor sit amet consectetur adipisicing elit. Nostrum illum
          eius voluptatum assumenda aperiam quo
          <a href="#">vitae eveniet</a> alias suscipit natus!
        </p>
        <hr className="about__hr" />
        <h3 className="about__subtitle">Responsibility</h3>
        <div className="about__ul-container">
          <ul className="about__ul">
            <li className="about__list">survey</li>
            <li className="about__list">Excavations</li>
            <li className="about__list">Reacharch</li>
          </ul>
          <ul className="about__ul">
            <li className="about__list">Protections</li>
            <li className="about__list">Education</li>
            <li className="about__list">Planning</li>
          </ul>
        </div>
      </div>
      <div className="about__img-wrapper">
        <iframe
          className="frame"
          src="https://www.youtube.com/embed/xVE37tNyvGA?si=Y2GXlInmidMVsdr_"
          title="YouTube video player"
          frameBorder={0}
          allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture; web-share"
          referrerPolicy="strict-origin-when-cross-origin"
          allowFullScreen=""
        />
      </div>
    </section>
    {/* ABOUT Section */}
  </>
  );
}

export default About;
