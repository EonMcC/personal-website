import React from 'react';
import './MobileHeader.scss';

const MobileHeader: React.FC<{isVisible: boolean}> = ({isVisible}) => {

  return (
    <>
      <section
        className={isVisible ? "header" : "header header--hidden"}
      >
        <h1>they</h1>
        <h1>call</h1>
        <h1>me</h1>
        <h1 className="header__underline">Iain</h1>

        <h2 className="sub-header">
          Developer | Designer | Storyteller
        </h2>
      </section>
    </>
  )
}

export default MobileHeader;