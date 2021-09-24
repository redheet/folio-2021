import React from 'react';
import ContactItem from '../Components/ContactItem';
import phone from '../img/phone.svg';
import email from '../img/emailme.svg';
import location from '../img/location.svg';
import Tittle from '../Components/Tittle';

function ContactPage() {
  return (
    <div>
      <div className="title">
        <Tittle title={'About Me'} span={'About Me'} />
      </div>
      <div className="ContactPage">
        <div className="map-sect">
          <iframe
            title="mapsgoogle"
            src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d3965.016531499036!2d106.78987401418891!3d-6.391868095375005!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x2e69e939c894a57f%3A0x3241754b3808a16f!2sPerumahan%20Gria%20Sakinah%202!5e0!3m2!1sid!2sid!4v1631859015465!5m2!1sid!2sid            "
            width="600"
            height="450"
            frameBorder="0"
            style={{ border: 0 }}
            allowFullScreen=""
            aria-hidden="false"
            tabIndex="0"
          />
        </div>
        <div className="contact-sect">
          <ContactItem
            icon={phone}
            link={'https://wa.me/6281932611409'}
            text1={'+6281932611409'}
            title={'Phone'}
          />
          <ContactItem
            icon={email}
            link={'mailto:zidanroedal@gmail.com'}
            text1={'zidanroedal@gmail.com'}
            title={'Email'}
          />
          <ContactItem
            icon={location}
            text1={'Perumahan Griya Sakinah 2 Mampang, Depok'}
            text2={'Jawa Barat'}
            title={'Address'}
          />
        </div>
      </div>
    </div>
  );
}

export default ContactPage;
