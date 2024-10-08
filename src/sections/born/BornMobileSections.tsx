import React, { useEffect, useState } from 'react';
import { ReactComponent as BornIcon } from '../../assets/timeline-icons/born.svg';

const BornMobileSection: React.FC<{
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
      <h2 style={{color: "var(--primary)"}}>Born</h2>
      <h3> </h3>

      <BornIcon
        style={{
          height: "150px",
          width: "150px",
          marginLeft: "50%",
          transform: "translateX(-50%)",
          marginBottom: "24px"
        }}
      />

      <div className="mobile-section__text">
        <p>Before I was a kid, I was a baby.</p>
        <p>That baby came into existence in May 1988 at Elsie Inglis Hospital in Edinburgh.</p>
        <p>I was born a happy healthy baby on a scorcher of a Sunday.</p>
        <p>And I've been here ever since.</p>
        <p>Breathing</p>
      </div>
    </section>
  )
}

export default BornMobileSection;