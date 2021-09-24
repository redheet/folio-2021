import React from 'react';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faGithub } from '@fortawesome/free-brands-svg-icons';
import { faGlobe } from '@fortawesome/free-solid-svg-icons';

function MenuItems({ menuItem }) {
  return (
    <div className="portfolis">
      {menuItem.map((item) => {
        return (
          <div className="portfolio" key={item.id}>
            <div className="image-data">
              <img src={item.image} alt="" />
              <ul className="hover-items">
                <li>
                  <a
                    href={item.link1}
                    title="GitHub"
                    target="_blank"
                    rel="noopener noreferrer"
                  >
                    <FontAwesomeIcon icon={faGithub} />
                  </a>
                  <a href={item.link2} title="Website">
                    <FontAwesomeIcon icon={faGlobe} />
                  </a>
                </li>
              </ul>
            </div>
            <h5>{item.title}</h5>
            <p>Placeholder paragraph</p>
          </div>
        );
      })}
    </div>
  );
}

export default MenuItems;
