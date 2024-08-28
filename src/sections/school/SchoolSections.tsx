import React from 'react';
import { ReactComponent as EducationIcon } from '../../assets/timeline-icons/education.svg';

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
      <EducationIcon
        style={{
          scale: "5",
          marginLeft: "40px",
          transform: "translateY(-10px)"
        }}
      />
    </section>
  )
}

export default SchoolSection;