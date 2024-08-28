import React from 'react';
import { ReactComponent as BornIcon } from '../../assets/timeline-icons/born.svg';

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
      <BornIcon
        style={{
          scale: "5",
          marginLeft: "40px",
          transform: "translateY(-10px)"
        }}
      />
    </section>
  )
}

export default BornSection;