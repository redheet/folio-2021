import React from 'react';
import Tittle from '../Components/Tittle';
// import { faGlobe } from '@fortawesome/free-solid-svg-icons';
import ImageSection from '../Components/ImageSection';
import SkillsSection from '../Components/SkillsSection';
import ServicesSection from '../Components/ServicesSection';
// import design from '../img/design.svg';
// import intelligence from '../img/intelligence.svg';
// import gamedev from '../img/game-dev.svg';
import IconBrand from '../Components/IconBrand';
import Hobby from '../Components/Hobby';
// import { Timeline, Event } from 'react-trivial-timeline';
import Education from '../Components/Education';
import Experience from '../Components/Experience';

function AboutPage() {
  return (
    <div className="AboutPage">
      <Tittle title={'About Me'} span={'About Me'} />
      <ImageSection />
      <Tittle title={'OS Skill'} span={'System Skill'} />
      <div className="skillsContainer">
        <SkillsSection skill={'Linux'} progress={'60%'} width={'60%'} />
        <SkillsSection skill={'Windows'} progress={'85%'} width={'85%'} />
        <SkillsSection skill={'ParrotOS'} progress={'60%'} width={'60%'} />
        <SkillsSection skill={'Ubuntu'} progress={'60%'} width={'60%'} />
        <SkillsSection skill={'GarudaOS'} progress={'50%'} width={'50%'} />
        <SkillsSection skill={'Kali Linux'} progress={'50%'} width={'50%'} />
        {/* <SkillsSection skill={'Cpanel'} progress={'65%'} width={'65%'} />
        <SkillsSection skill={'Vercel'} progress={'35%'} width={'35%'} />
        <SkillsSection skill={'Firebase'} progress={'35%'} width={'35%'} />
        <SkillsSection skill={'Google Cloud'} progress={'45%'} width={'45%'} /> */}
      </div>
      <IconBrand />
      <div className="section-hobby">
        <Tittle title={'Hobby'} span={'Hobby'} />
        <Hobby />
      </div>

      <div className="education">
        <Tittle title={'Education'} span={'Education'} />
        <Education />
        {/* <Timeline lineColor="rgb(45,156,219)">
          <Event interval="2020" title="Java Programer Android" subtitle="subs">
            Content About java program
          </Event>
        </Timeline> */}
      </div>

      <div className="experience">
        <Tittle title={'Experience'} span={'Experience'} />
        <Experience />
      </div>

      <Tittle title={'Services'} span={'Services'} />
      <div className="servives-container">
        <ServicesSection
          icon={'pepicons:internet-print'}
          title={'Web Design'}
          text={'Building resposive website front end using framework React'}
        />
        <ServicesSection
          icon={'emojione-v1:laptop-computer'}
          title={'Computer'}
          text={'Can repair a broken computer or upgrade it'}
        />
        <ServicesSection
          icon={'flat-color-icons:android-os'}
          title={'Android Development'}
          text={'Building application android using Java and XML'}
        />
      </div>
    </div>
  );
}

export default AboutPage;
