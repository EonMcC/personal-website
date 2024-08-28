import React, { useState } from 'react';
import './MobileHeader.scss';
import chevronLeft from '../../assets/chevronLeft.png';

const MobileHeader: React.FC<{isVisible: boolean}> = ({isVisible}) => {

  const [showSwipe, setShowSwipe] = useState(false);

  setTimeout(() => setShowSwipe(true), 1500)

  return (
    <>
      <section className={isVisible ? "header" : "header header--hidden"}>
        <h1>they</h1>
        <h1>call</h1>
        <h1>me</h1>
        <h1 className="header__underline">Iain</h1>

        <div
          className="swipe-to-begin"
          style={showSwipe ? {right: -96} : {right: "-100vw"}}
        >
          <img src={chevronLeft} alt="Chevron" />
          <p>Swipe to begin</p>
          <img src={chevronLeft} alt="Chevron" />
        </div>
      </section>
    </>
  )
}

export default MobileHeader;