import React from 'react';
import fireService from '../../assets/images/fireService.svg'

const FireServiceSection: React.FC<{
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
        <p>For about 2 years I worked as a retained Fire Fighter in the <strong>Scottish Fire and Rescue Service</strong>.</p>
        <p>This was an amazing experience that helped keep me active during the COVID pandemic.</p>
        <p>I acquired many valuable life skills and am proud to have been a part of this service.</p>
        <p>Fire fighting | Team work</p>
      </div>
      <img
        src={fireService}
        alt="Scottish Fire & Rescue Service"
        style={{transform: "translateY(-85px)"}}
      />
    </section>
  )
}

export default FireServiceSection;