import React from 'react';
import stop from '../../assets/images/stop.png';

const StopSection: React.FC<{
  isVisible: boolean;
}> = ({
  isVisible
}) => {

  return (
    <section
      className={
        isVisible
          ? "section section--visible"
          : "section"
      }
    >
      <div className="section__text">
        <p>My story isn't over, but my coding needs to catch up...</p>
        <p>Check back soon for the rest.</p>
        <p>Career Jobs, CodeClan and Projects still to come!</p>
        <p></p>
      </div>
      <img
        src={stop}
        alt="Stop Sign"
        style={{transform: "translateY(-40px)"}}
      />
    </section>
  )
}

export default StopSection;