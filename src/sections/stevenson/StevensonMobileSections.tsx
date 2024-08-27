import React, { useEffect, useState } from 'react';
import stevenson from '../../assets/images/stevenson.png';

const StevensonMobileSection: React.FC<{
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
      <h2 style={{color: "var(--primary)"}}>Stevenson College</h2>
      <h3 style={{color: "var(--primary)"}}>Education</h3>

      <img
        src={stevenson}
        alt="Stevenson college"
        style={{width: '50%'}}
      />

      <div className="mobile-section__text">
        <p>I spent two stints at Stevenson College and thoroughly enjoyed both.</p>
        <p>The first time, I studied <strong>Photography</strong>, a hobby I still dabble in to this day.</p>
        <p>For my second stint, I switched to Accounts and progressed to obtain a <strong>HNC in Accounts</strong>.</p>
        <p>HNC Accounts | NQ Photography</p>
      </div>
    </section>
  )
}

export default StevensonMobileSection;