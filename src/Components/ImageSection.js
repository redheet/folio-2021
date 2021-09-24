import React from 'react';
import about from '../img/about.jpg';

function ImageSection() {
  return (
    <div className="ImageSection">
      <div className="img">
        <img src={about} alt="" />
      </div>
      <div className="about-info">
        <h4>
          I am<span> Zidane</span>
        </h4>
        <p className="about-text">
          Lorem ipsum dolor sit amet consectetur adipisicing elit. Voluptatum
          necessitatibus perferendis numquam dolorem cumque facilis. Desir per
          po la ta doso vi slone ve?
        </p>
        <div className="about-details">
          <div className="left-section">
            <p>Full Name</p>
            <p>Age</p>
            <p>Gender</p>
            <p>Countries</p>
            <p>Languages</p>
            <p>Religion</p>
            <p>Address</p>
            {/* <p>Education</p> */}
          </div>
          <div className="right-section">
            <p>: Noufal Z. Zidane</p>
            <p>: 22</p>
            <p>: Male</p>
            <p>: Indonesia</p>
            <p>: Arab, Indo, English</p>
            <p>: Islam</p>
            <p>: Perum Griya Sakinah 2 Mampang, Depok</p>
            {/* <p>
              : Universitas Pamulang (2020 - Sekarang), Pondok Pesantren Sirojan
              Muniro
            </p> */}
          </div>
        </div>
        <button className="btn">Download Cv</button>
      </div>
    </div>
  );
}

export default ImageSection;
