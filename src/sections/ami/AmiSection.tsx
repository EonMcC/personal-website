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
          <p><strong>AMI</strong> is where I have honed many of my front end development skills.</p>
          <p>I was hired at AMI to <strong>design and build a new booking platform</strong>.</p>
          <p>Using Figma for designs and React for the front end, I developed a booking platform that is used to ship parcels across the globe.</p>
          <p>React | Redux | Figma | AWS | Self built UI library</p>
        </div>

        {isVisible && (
          <img
            src={ami}
            alt="AMI Logo"
            style={{ transform: "translateY(-85px)", maxWidth: "25%" }}
          />
        )}
      </section>
    )
  }

export default AmiSection;