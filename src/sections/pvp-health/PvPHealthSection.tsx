import React from 'react';
import pvpHealth from '../../assets/images/pvpHealth.png';

const PvPHealthSection: React.FC<{isVisible: boolean}> = ({isVisible}) => {

  return (
    <section
      className={
        isVisible
          ? "section section--large section--visible"
          : "section"
      }
    >
      <div className="section__text">
        <p><strong>PvP Health</strong> is my largest personal project to date and my first distributed app utilising Firebase.</p>
        <p>The idea behind PvP Health is to host battles between friends, encouraging each other to achieve their fitness and health goals.</p>
        <p>I began developing this app to improve my skills as a developer and because I believe it's a useful tool. The project required me to learn various new skills and really helped push me to become a better developer.</p>
        <p>React | TypeScript | Redux | Firebase | Cloud Messaging | Cloud Functions | Pixel Art | Project Planning</p>
      </div>

      <img src={pvpHealth} alt="PvP Health" />
    </section>
  )
}

export default PvPHealthSection;