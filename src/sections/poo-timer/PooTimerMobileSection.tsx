import React, { useEffect, useState } from 'react';
import pooTimer from '../../assets/images/pooTimer.png';

const PooTimerMobileSection: React.FC<{
  startToHide: boolean;
}> = ({
  startToHide
}) => {

  const [classList, setClassList] = useState('mobile-section');

  useEffect(() => {
      if (!startToHide) setClassList('mobile-section mobile-section--visible');
      else setClassList('mobile-section');
  }, [startToHide])


  return (
    <section className={classList}>
      <h2 style={{color: "var(--primary)"}}>Poo Timer</h2>
      <h3 style={{color: "var(--primary)"}}>Personal Project</h3>

      <img
        src={pooTimer}
        alt="Poo Timer"
        style={{width: "80%"}}
      />

      <div className="mobile-section__text">
        <p>My first personal project beyond a simple to-do app (though just barely) was <strong>Poo Timer!</strong></p>
        <p>This was a fun app to create and, to date, the only one I've released on the <strong>Play Store</strong>.</p>
        <p>While Poo Timer was a basic concept, it taught me a lot about turning an idea into a fully functional app.</p>
        <p>I look back on this project with fond memories and maybe one day I'll resurrect it.</p>
        <p>Angular | Ionic | Figma | Android Studio </p>
      </div>
    </section>
  )
}

export default PooTimerMobileSection;