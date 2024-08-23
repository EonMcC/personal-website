import React from 'react';
import various from '../../assets/images/various.png';

const VariousSection: React.FC<{
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
        <p>Between education and starting at SGN, I held various roles in different companies.</p>
        <p>Most notably, I was the <strong>assistant manager</strong> at TOG 24 and spent a year working on a <strong>cruise ship</strong>.</p>
        <p>Each of these jobs helped me gain valuable life skills, meet many new people, and travel the world.</p>
        <p>Life Skills | People Management</p>
      </div>
      <img
        src={various}
        alt="Shanghai Collage"
        style={{transform: "translateY(-40px)"}}
      />
    </section>
  )
}

export default VariousSection;