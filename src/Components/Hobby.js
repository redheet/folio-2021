import React from 'react';
import { Icon } from '@iconify/react';

function Hobby() {
  return (
    <div className="about-details">
      <div className="left-section">
        <ul className="dev-icons">
          <li>
            <Icon
              icon="entypo:code"
              style={{
                width: '45',
                height: '45',
                marginLeft: '20px',
                marginBottom: '15px',
              }}
            />
          </li>
          <li>
            <Icon
              icon="clarity:video-gallery-solid"
              style={{
                width: '45',
                height: '45',
                marginLeft: '20px',
                marginBottom: '15px',
              }}
            />
          </li>
          <li>
            <Icon
              icon="emojione:video-game"
              style={{
                width: '45',
                height: '45',
                marginLeft: '20px',
                marginBottom: '15px',
              }}
            />
          </li>
          <li>
            <Icon
              icon="flat-color-icons:music"
              style={{
                width: '45',
                height: '45',
                marginLeft: '20px',
                marginBottom: '15px',
              }}
            />
          </li>
        </ul>
      </div>
      <div className="right-section">
        <p className="hobbies">Coding</p>
        <p className="hobbies">Watching Anime</p>
        <p className="hobbies">Game</p>
        <p className="hobbies">Listening Music</p>
      </div>
    </div>
  );
}

export default Hobby;
