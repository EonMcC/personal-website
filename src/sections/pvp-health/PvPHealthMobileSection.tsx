import React, { useEffect, useState } from 'react';
import pvpHealth from '../../assets/images/pvpHealth.png';

const PvpHealthMobileSection: React.FC<{startToHide: boolean}> = ({startToHide}) => {

  const [classList, setClassList] = useState('mobile-section');

  useEffect(() => {
      if (!startToHide) setClassList('mobile-section mobile-section--visible');
      else setClassList('mobile-section');
  }, [startToHide])

  return (
    <section className={classList}>
      <h2 style={{color: "var(--primary)"}}>PvP Health</h2>

      <h3 style={{color: "var(--primary)"}}>Personal Project</h3>
      
      <img
        src={pvpHealth}
        alt="PvpHealth"
      />

      <div className="mobile-section__text">
        <p><strong>PvP Health</strong> is my largest personal project to date and my first distributed app utilising Firebase.</p>
        <p>The idea behind PvP Health is to host battles between friends, encouraging each other to achieve their fitness and health goals.</p>
        <p>I began developing this app to improve my skills as a developer and because I believe it's a useful tool. The project required me to learn various new skills and really helped push me to become a better developer.</p>
        <p><a href="https://www.pvphealth.app/" target="_blank" rel="noreferrer">www.pvphealth.app</a></p>
        <p>React | TypeScript | Redux | Firebase | Cloud Messaging | Cloud Functions | Pixel Art | Project Planning</p>
      </div>

    </section>
  )
}

export default PvpHealthMobileSection;