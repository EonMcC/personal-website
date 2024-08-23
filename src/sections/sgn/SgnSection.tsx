import React from 'react';
import sgn from '../../assets/images/sgn.png';

const SgnSection: React.FC<{
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
        <p><strong>SGN</strong> provided my first real experience of what a career could be.</p>
        <p>I joined in an admin role and quickly worked my way up to become a <strong>Gas Analyst</strong>.</p>
        <p>I met some great people here, and it helped shape the proactive work ethic that I hold to this day.</p>
        <p>SGN served me well until I decided to follow my dream and move into the tech industry.</p>
        <p>Gas Network Analysis | Interview Skills</p>
      </div>
      <img
        src={sgn}
        alt="SGN Logo"
        style={{transform: "translateY(-40px)"}}
      />
    </section>
  )
}

export default SgnSection;