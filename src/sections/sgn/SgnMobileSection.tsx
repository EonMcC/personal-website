import React, { useEffect, useState } from 'react';
import sgn from '../../assets/images/sgn.png';

const SgnMobileSection: React.FC<{
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
      <h2 style={{color: "var(--primary)"}}>SGN</h2>
      <h3 style={{color: "var(--primary)"}}>Career Employment</h3>

      <img
        src={sgn}
        alt="SGN Logo"
        style={{width: '50%'}}
      />

      <div className="mobile-section__text">
        <p><strong>SGN</strong> provided my first real experience of what a career could be.</p>
        <p>I joined in an admin role and quickly worked my way up to become a <strong>Gas Analyst</strong>.</p>
        <p>I met some great people here, and it helped shape the proactive work ethic that I hold to this day.</p>
        <p>SGN served me well until I decided to follow my dream and move into the tech industry.</p>
        <p>Gas Network Analysis | Interview Skills</p>
      </div>
    </section>
  )
}

export default SgnMobileSection;