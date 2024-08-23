import React from 'react';
import school from '../../assets/images/school.png';

const SchoolSection: React.FC<{
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
        <p>Before I was me, I was a kid.</p>
        <p>That kid went to Deans Community High School and Carmondean Primary before that.</p>
        <p>There were good times and bad times and they all helped to shape the person I am today.</p>
        <p>That was school.</p>
        <p>Various High School grades</p>
      </div>
      <img
        src={school}
        alt="School"
        style={{transform: "translateY(-40px)"}}
      />
    </section>
  )
}

export default SchoolSection;