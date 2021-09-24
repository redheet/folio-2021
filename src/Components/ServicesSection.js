// import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { Icon } from '@iconify/react';
import React from 'react';

function ServicesSection({ icon, title, text }) {
  return (
    <div className="ServicesSection">
      <div className="service">
        <div className="service-content">
          <Icon icon={icon} alt="" style={{ width: '60px', height: '60px' }} />
          <h5 className="s-title">{title}</h5>
          <p className="s-text">{text}</p>
        </div>
      </div>
    </div>
  );
}

export default ServicesSection;
