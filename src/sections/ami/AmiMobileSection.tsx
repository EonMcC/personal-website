import React, { useEffect, useState } from 'react';
import ami from '../../assets/images/ami.png';

const AmiMobileSection: React.FC<{ startToHide: boolean }> = ({ startToHide }) => {

  const [classList, setClassList] = useState('mobile-section');

  useEffect(() => {
    window.scrollTo(0, 0);
    if (!startToHide) setClassList('mobile-section mobile-section--visible');
    else setClassList('mobile-section');
  }, [startToHide])

  return (
    <section className={classList}>
      <h2 style={{ color: "var(--primary)" }}>AMI - Air Menzies International</h2>

      <h3 style={{ color: "var(--primary)" }}>Career Employment</h3>

      <img src={ami} alt="AMI Logo" />

      <div className="mobile-section__text">
        <p><strong>AMI</strong> is where I have honed many of my developer skills.</p>
        <p>I was hired at AMI to <strong>design and build a new booking platform</strong>.</p>
        <p>Using Figma for designs and React with TypeScript for the front end, I developed a booking platform that is used to ship parcels across the globe.</p>
        <p>React | Redux | Figma | AWS | Self built UI library</p>
      </div>

    </section>
  )
}

export default AmiMobileSection;