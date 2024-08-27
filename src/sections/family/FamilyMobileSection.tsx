import React, { useEffect, useState } from 'react';
import family from '../../assets/images/family.png';

const FamilyMobileSection: React.FC<{
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
      <h2 style={{color: "var(--primary)"}}>Family</h2>
      <h3> </h3>

      <img
        src={family}
        alt="My family"
        style={{width: "60%"}}
      />

      <div className="mobile-section__text">
        <p><strong>My family :)</strong></p>
        <p>In 2017 I re-connected with my college crush, and we started our little family.</p>
        <p>Soon after, Noah came along, and shortly after that, we moved into our first proper family home.</p>
        <p>We all have a lot of growing up and family life to enjoy, and I'm excited to see where we all go from here.</p>
        <p>Straight up being a dad</p>
      </div>
    </section>
  )
}

export default FamilyMobileSection;