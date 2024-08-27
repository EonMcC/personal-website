import React, { useEffect, useState } from 'react';
import afs from '../../assets/images/afs.png';

const AfsMobileSection: React.FC<{
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
      <h2 style={{color: "var(--primary)"}}>AFS</h2>
      <h3 style={{color: "var(--primary)"}}>Career Employment</h3>

      <img
        src={afs}
        alt="AFS Logo"
        style={{width: '50%'}}
      />

      <div className="mobile-section__text">
      <p><strong>AFS</strong> gave me my first opportunity to work as a developer, and it's a company I will always be extremely grateful to.</p>
        <p>I started as a Junior Developer and quickly advanced to Developer. I also took on design responsibilities, learning how to use Figma and conducting UI reviews before merging work.</p>
        <p>At AFS, I significantly improved as both a developer and designer while learning how development teams operate.</p>
        <p>Angular | Ionic | Figma | AWS | GitHub</p>
      </div>
    </section>
  )
}

export default AfsMobileSection;