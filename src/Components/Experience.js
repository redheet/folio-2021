import React from 'react';
import { Chrono } from 'react-chrono';

const Experience = () => {
  const items = [
    {
      title: 'May 2011 - Des 2019',
      cardTitle: 'Pondok Pesantren',
      cardSubtitle: 'Sirojan Muniro',
      cardDetailedText:
        'Since 2 May 2011, Im started learn to know about islam, about one year I was taught fiqih and how to make a good people in there, I found the teacher very kindly and patient while he was teaching ',
    },
    {
      title: 'Feb 2017 - Present',
      cardTitle: 'Coding & OS',
      cardSubtitle: 'StackOverFlow, Discord, Telegram',
      cardDetailedText:
        'Since Feb 2017, Im new learning about language program like bash, python, html and making new project using language bash or commonlly called shell, my project collaborate with my friend, combination bash with python, I called my tools  autoinstaller. Im also learn know about LINUX Os like Kali Linux, Parrot Os, Ubuntu, I learned how to use the terminal and basic commands from linux.',
    },
    {
      title: 'Apr 2020',
      cardTitle: 'Android Development',
      cardSubtitle: 'Youngscientist Association',
      cardDetailedText:
        'Making application android for online learning, the apps called rumah riset, Im collaborate with my friend for their backend',
    },
    {
      title: 'Jul 2020 - Present',
      cardTitle: 'React Js & NodeJs',
      cardSubtitle: 'Internet & StackOverFlow',
      cardDetailedText:
        'I learned the React js programming language from various forums by self-taught, and I started making personal portfolio .',
    },
  ];

  return (
    <div className="section-education">
      <Chrono
        items={items}
        mode="VERTICAL_ALTERNATING"
        theme={{
          cardBgColor: 'rgb(237, 249, 254)',
          secondary: 'blue',
          titleColor: 'rgb(237, 249, 254)',
        }}
        useReadMore={false}
        hideControls
      />
    </div>
  );
};

export default Experience;
