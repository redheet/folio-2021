import React from 'react';
import Tittle from './Tittle';
// import {
//   faReact,
//   faNodeJs,
//   faYarn,
//   faSass,
//   faHtml5,
//   faCss3,
//   faJava,
// } from '@fortawesome/free-brands-svg-icons';
// import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
// import { Link } from 'react-router-dom';
import { Icon } from '@iconify/react';

function IconBrand() {
  return (
    <div className="skill-icon">
      <div className="title">
        <Tittle title={'Front End Development'} span={'Front End '} />
      </div>
      {/* <Link to="#" className="icon-holder">
        <FontAwesomeIcon icon={faReact} className="icon fb" />
      </Link>
      <Link to="#" className="icon-holder">
        <FontAwesomeIcon icon={faSass} className="icon in" />
      </Link>
      <Link to="#" className="icon-holder">
        <FontAwesomeIcon icon={faHtml5} className="icon gh" />
      </Link>
      <Link to="#" className="icon-holder">
        <FontAwesomeIcon icon={faCss3} className="icon tg" />
      </Link>
      <Link to="#" className="icon-holder">
        <FontAwesomeIcon icon={faNodeJs} className="icon tg" />
      </Link>
      <Link to="#" className="icon-holder">
        <FontAwesomeIcon icon={faYarn} className="icon tg" />
      </Link>
      <Link to="#" className="icon-holder">
        <FontAwesomeIcon icon={faJava} className="icon tg" />
      </Link>
      <Link to="#" className="icon-holder">
        <FontAwesomeIcon icon={faJava} className="icon tg" />
      </Link>
      <Link to="#" className="icon-holder">
        <FontAwesomeIcon icon={faJava} className="icon tg" />
      </Link>
      <Link to="#" className="icon-holder">
        <FontAwesomeIcon icon={faJava} className="icon tg" />
      </Link>
      <Link to="#" className="icon-holder">
        <FontAwesomeIcon icon={faJava} className="icon tg" />
      </Link>
      <Link to="#" className="icon-holder">
        <FontAwesomeIcon icon={faJava} className="icon tg" />
      </Link>
      <Link to="#" className="icon-holder">
        <FontAwesomeIcon icon={faJava} className="icon tg" />
      </Link> */}

      {/* front-end-skill  */}
      <Icon
        icon="logos:javascript"
        style={{
          width: '45',
          height: '45',
          marginLeft: '25px',
          marginBottom: '15px',
        }}
      />
      <Icon
        icon="logos:react"
        style={{
          width: '45',
          height: '45',
          marginLeft: '25px',
          marginBottom: '15px',
        }}
      />
      <Icon
        icon="vscode-icons:file-type-html"
        style={{
          width: '45',
          height: '45',
          marginLeft: '25px',
          marginBottom: '15px',
        }}
      />
      <Icon
        icon="vscode-icons:file-type-css"
        style={{
          width: '45',
          height: '45',
          marginLeft: '25px',
          marginBottom: '15px',
        }}
      />
      <Icon
        icon="logos:sass"
        style={{
          width: '45',
          height: '45',
          marginLeft: '25px',
          marginBottom: '15px',
        }}
      />
      <Icon
        icon="logos:nodejs"
        style={{
          width: '45',
          height: '45',
          marginLeft: '25px',
          marginBottom: '15px',
        }}
      />
      <Icon
        icon="logos:yarn"
        style={{
          width: '45',
          height: '45',
          marginLeft: '25px',
          marginBottom: '15px',
        }}
      />
      <Icon
        icon="logos:java"
        style={{
          width: '45',
          height: '45',
          marginLeft: '25px',
          marginBottom: '15px',
        }}
      />

      {/* icon-description  */}
      {/* <div className="about-details">
        <div className="left-section">
          <ul className="icons-list">
            <li>
              <Icon
                icon="emojione-v1:lightning-mood"
                style={{
                  width: '30',
                  height: '30',
                  marginLeft: '25px',
                  marginBottom: '15px',
                  marginTop: '20px',
                }}
              />
            </li>
            <li>
              <Icon
                icon="emojione-v1:lightning-mood"
                style={{
                  width: '30',
                  height: '30',
                  marginLeft: '25px',
                  marginBottom: '15px',
                  marginTop: '20px',
                }}
              />
            </li>
            <li>
              <Icon
                icon="emojione-v1:lightning-mood"
                style={{
                  width: '30',
                  height: '30',
                  marginLeft: '25px',
                  marginBottom: '15px',
                  marginTop: '20px',
                }}
              />
            </li>
          </ul>
        </div>
        <div className="right-section">
          <p className="text-icons">Building website using framework react</p>
          <p className="text-icons">Watching Anime</p>
          <p className="text-icons">Game</p>
        </div>
      </div> */}

      {/* other-skills */}
      <div className="other-skill">
        <div className="title">
          <Tittle title={'Other Skill'} span={'Other Skill'} />
        </div>
        <Icon
          icon="logos:cpanel"
          style={{
            width: '45',
            height: '45',
            marginLeft: '25px',
            marginBottom: '15px',
          }}
        />
        <Icon
          icon="logos:vercel"
          style={{
            width: '45',
            height: '45',
            marginLeft: '25px',
            marginBottom: '15px',
          }}
        />
        <Icon
          icon="logos:firebase"
          style={{
            width: '45',
            height: '45',
            marginLeft: '25px',
            marginBottom: '15px',
          }}
        />
        <Icon
          icon="logos:google-cloud"
          style={{
            width: '45',
            height: '45',
            marginLeft: '25px',
            marginBottom: '15px',
          }}
        />
        <Icon
          icon="fa-brands:github"
          style={{
            width: '45',
            height: '45',
            marginLeft: '25px',
            marginBottom: '15px',
          }}
        />
        <Icon
          icon="logos:bash"
          style={{
            width: '45',
            height: '45',
            marginLeft: '25px',
            marginBottom: '15px',
          }}
        />
        <Icon
          icon="simple-icons:obsstudio"
          style={{
            width: '45',
            height: '45',
            marginLeft: '25px',
            marginBottom: '15px',
          }}
        />
      </div>

      {/* UI/UX Design */}
      <div className="other-skill">
        <div className="title">
          <Tittle title={'UI/UX Design'} span={'UI/UX Design'} />
        </div>
        <Icon
          icon="simple-icons:adobexd"
          style={{
            width: '45',
            height: '45',
            marginLeft: '25px',
            marginBottom: '15px',
            color: 'white',
          }}
        />
        <Icon
          icon="vscode-icons:file-type-ai"
          style={{
            width: '45',
            height: '45',
            marginLeft: '25px',
            marginBottom: '15px',
          }}
        />
        <Icon
          icon="simple-icons:inkscape"
          style={{
            width: '45',
            height: '45',
            marginLeft: '25px',
            marginBottom: '15px',
          }}
        />
      </div>

      {/* experience */}
      {/* <div className="about-details">
        <div className="left-section">
          <p>
            <Icon
              icon="emojione-v1:lightning-mood"
              style={{
                width: '15',
                height: '15',
              }}
            />
            &nbsp;I Have experience using linux in 3 years
          </p>
          <p>
            <Icon
              icon="emojione-v1:lightning-mood"
              style={{
                width: '15',
                height: '15',
              }}
            />
            &nbsp;I Have experience using linux in 3 years
          </p>
          <p>
            <Icon
              icon="emojione-v1:lightning-mood"
              style={{
                width: '15',
                height: '15',
              }}
            />
            &nbsp;I Have experience using linux in 3 years
          </p>
        </div>
      </div> */}
    </div>
  );
}

export default IconBrand;
