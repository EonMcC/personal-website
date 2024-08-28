import React, { useState } from 'react';
import './MobileHeader.scss';
import { ReactComponent as Chevron } from '../../assets/chevron.svg';

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
          <Chevron className="swipe-to-begin__chevron" />
          <p>Swipe to begin</p>
          <Chevron className="swipe-to-begin__chevron" />
        </div>
      </section>
    </>
  )
}

export default MobileHeader;