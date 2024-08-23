import React from 'react';
import pooTimer from '../../assets/images/pooTimer.png';

const PooTimerSection: React.FC<{isVisible: boolean}> = ({isVisible}) => {

  return (
    <section
      className={
        isVisible
          ? "section section--large section--visible"
          : "section"
      }
    >
      <div className="section__text">
        <p>My first personal project beyond a simple to-do app (though just barely) was <strong>Poo Timer!</strong></p>
        <p>This was a fun app to create and, to date, the only one I've released on the <strong>Play Store</strong>.</p>
        <p>While Poo Timer was a basic concept, it taught me a lot about turning an idea into a fully functional app.</p>
        <p>I look back on this project with fond memories and maybe one day I'll resurrect it.</p>
        <p>Angular | Ionic | Figma | Android Studio </p>
      </div>

      <img
        src={pooTimer}
        alt="Poo Timer"
        style={{transform: "translateY(-40px)"}}
      />
    </section>
  )
}

export default PooTimerSection;