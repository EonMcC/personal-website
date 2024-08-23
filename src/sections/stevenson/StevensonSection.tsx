import React from 'react';
import stevenson from '../../assets/images/stevenson.png';

const StevensonSection: React.FC<{isVisible: boolean}> = ({isVisible}) => {

  return (
    <section
      className={
        isVisible
          ? "section section--large section--visible"
          : "section"
      }
    >
      <div className="section__text">
        <p>I spent two stints at Stevenson College and thoroughly enjoyed both.</p>
        <p>The first time, I studied <strong>Photography</strong>, a hobby I still dabble in to this day.</p>
        <p>For my second stint, I switched to Accounts and progressed to obtain an <strong>HNC in Accounts</strong>.</p>
        <p>HNC Accounts | NQ Photography</p>
      </div>

      <img src={stevenson} alt="PvP Health" />
    </section>
  )
}

export default StevensonSection;