import React from 'react';
import ami from '../../assets/images/ami.png';

const AmiSection: React.FC<{
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
        <p><strong>AMI</strong> is my current employer, where I have honed many of my front end development skills.</p>
        <p>I was brought on board at AMI to <strong>design and build a new booking platform</strong>.</p>
        <p>Using Figma for the designs and React for the front end, I developed a booking platform that has completely replaced the old one and is now being expanded into new territories across the globe.</p>
        <p>React | Redux | Figma | AWS | Self built UI library</p>
      </div>
      <img
        src={ami}
        alt="AMI Logo"
        style={{transform: "translateY(-85px)", maxWidth: "25%"}}
      />
    </section>
  )
}

export default AmiSection;