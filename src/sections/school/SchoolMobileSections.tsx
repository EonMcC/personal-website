import React, { useEffect, useState } from 'react';
import school from '../../assets/images/school.png';

const SchoolMobileSection: React.FC<{
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
      <h2 style={{color: "var(--primary)"}}>School</h2>
      <h3 style={{color: "var(--primary)"}}>Education</h3>

      <img
        src={school}
        alt="School"
        style={{width: '50%'}}
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