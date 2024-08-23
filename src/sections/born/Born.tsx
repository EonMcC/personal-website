import React from 'react';
import hospital from '../../assets/images/hospital.png';

const BornSection: React.FC<{
  isVisible: boolean;
}> = ({
  isVisible
}) => {

  return (
    <section
      className={
        isVisible
          ? "section section--visible"
          : "section"
      }
    >
      <div className="section__text">
        <p>Before I was a kid, I was a baby.</p>
        <p>That baby came into existence in May 1988 at Elsie Inglis Hospital in Edinburgh.</p>
        <p>I was born a happy healthy baby on a scorcher of a Sunday.</p>
        <p>And I've been here ever since.</p>
        <p>Breathing</p>
      </div>
      <img
        src={hospital}
        alt="Hospital logo"
        style={{transform: "translateY(-40px)"}}
      />
    </section>
  )
}

export default BornSection;