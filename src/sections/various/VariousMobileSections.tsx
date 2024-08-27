import React, { useEffect, useState } from 'react';
import various from '../../assets/images/various.png';

const VariousMobileSection: React.FC<{
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
      <h2 style={{color: "var(--primary)"}}>Various Jobs</h2>
      <h3 style={{color: "var(--primary)"}}>Employment</h3>

      <img
        src={various}
        alt="Shanghai Collage"
        style={{width: '50%'}}
      />

      <div className="mobile-section__text">
        <p>Between education and starting at SGN, I held various roles in different companies.</p>
        <p>Most notably, I was the <strong>assistant manager</strong> at TOG 24 and spent a year working on a <strong>cruise ship</strong>.</p>
        <p>Each of these jobs helped me gain valuable life skills, meet many new people, and travel the world.</p>
        <p>Life Skills | People Management</p>
      </div>
    </section>
  )
}

export default VariousMobileSection;