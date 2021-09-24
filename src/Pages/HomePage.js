import React from 'react';
import { faFacebook } from '@fortawesome/free-brands-svg-icons';
import { faLinkedin } from '@fortawesome/free-brands-svg-icons';
import { faGithub } from '@fortawesome/free-brands-svg-icons';
import { faTelegram } from '@fortawesome/free-brands-svg-icons';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
// import { Link } from 'react-router-dom';
import TypewriterComponent from 'typewriter-effect';

function HomePage() {
  return (
    <div className="HomePage">
      <header className="hero">
        <h1 className="hero-text">
          Hi, I'm
          <span> Naufal Z. Zidane</span>
          <TypewriterComponent
            options={{
              strings: ['Front End Developer', 'UI/UX Design', 'Gamers'],
              loop: true,
              autoStart: true,
            }}
          />
        </h1>
        <p className="h-sub-text">
          A passionate individual who always thrive to work on end to end
          products which develop sustainable and scalable social and technical
          systems to create impact.
        </p>
        <div className="icons">
          <a href="https://www.facebook.com/RedHeet/" className="icon-holder">
            <FontAwesomeIcon icon={faFacebook} className="icon fb" />
          </a>
          <a
            href="https://linkedin.com/in/naufal-zidane-a52a49174"
            className="icon-holder"
          >
            <FontAwesomeIcon icon={faLinkedin} className="icon in" />
          </a>
          <a href="https://github.com/redheet" className="icon-holder">
            <FontAwesomeIcon icon={faGithub} className="icon gh" />
          </a>
          <a href="https://t.me/redheet" className="icon-holder">
            <FontAwesomeIcon icon={faTelegram} className="icon tg" />
          </a>
        </div>
      </header>
    </div>
  );
}

export default HomePage;
