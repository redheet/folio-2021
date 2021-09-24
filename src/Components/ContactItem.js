import React from 'react';

function ContactItem({ icon, text1, text2, title, link }) {
  return (
    <div className="ContactItem">
      <div className="contact">
        <img src={icon} alt="" />
        <div className="right-items">
          <h6>{title}</h6>
          <a href={link}>
            <p>{text1}</p>
            <p>{text2}</p>
          </a>
        </div>
      </div>
    </div>
  );
}

export default ContactItem;
