import React from 'react';
import family from '../../assets/images/family.png'

const FamilySection: React.FC<{
  isVisible: boolean;
}> = ({
  isVisible
}) => {

  return (
    <section
      className={
        isVisible
          ? "section section--large section--visible"
          : "section"
      }
    >
      <div className="section__text">
        <p><strong>My family :)</strong></p>
        <p>In 2017 I re-connected with my college crush, and we started our little family.</p>
        <p>Soon after, Noah came along, and shortly after that, we moved into our first proper family home.</p>
        <p>We all have a lot of growing up and family life to enjoy, and I'm excited to see where we all go from here.</p>
        <p>Straight up being a dad</p>
      </div>
      <img
        src={family}
        alt="My family"
      />
    </section>
  )
}

export default FamilySection;