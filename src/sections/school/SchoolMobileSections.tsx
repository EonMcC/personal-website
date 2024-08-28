import React, { useEffect, useState } from 'react';
import { ReactComponent as EducationIcon } from '../../assets/timeline-icons/education.svg';

const SchoolMobileSection: React.FC<{
  startToHide: boolean;
}> = ({
  startToHide
}) => {

  const [classList, setClassList] = useState('mobile-section');

  useEffect(() => {
    window.scrollTo(0, 0);
    if (!startToHide) setClassList('mobile-section mobile-section--visible');
    else setClassList('mobile-section');
  }, [startToHide])


  return (
    <section className={classList}>
      <h2 style={{color: "var(--primary)"}}>School</h2>
      <h3 style={{color: "var(--primary)"}}>Education</h3>

      <EducationIcon
        style={{
          height: "150px",
          width: "150px",
          marginLeft: "50%",
          transform: "translateX(-50%)",
          marginBottom: "24px"
        }}
      />

      <div className="mobile-section__text">
        <p>Before I was me, I was a kid.</p>
        <p>That kid went to Deans Community High School and Carmondean Primary before that.</p>
        <p>There were good times and bad times and they all helped to shape the person I am today.</p>
        <p>That was school.</p>
        <p>Various High School grades</p>
      </div>
    </section>
  )
}

export default SchoolMobileSection;