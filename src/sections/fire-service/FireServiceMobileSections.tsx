import React, { useEffect, useState } from 'react';
import fireService from '../../assets/images/fireService.svg';

const FireServiceMobileSection: React.FC<{
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
      <h2 style={{color: "var(--primary)"}}>Fire Service</h2>
      <h3 style={{color: "var(--primary)"}}>Employment</h3>

      <img
        src={fireService}
        alt="SFRS Logo"
      />

      <div className="mobile-section__text">
      <p>For about 2 years I worked as a retained Fire Fighter in the <strong>Scottish Fire and Rescue Service</strong>.</p>
        <p>This was an amazing experience that helped keep me active during the COVID pandemic.</p>
        <p>I acquired many valuable life skills and am proud to have been a part of this service.</p>
        <p>Fire fighting | Team work</p>
      </div>
    </section>
  )
}

export default FireServiceMobileSection;