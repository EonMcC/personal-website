import React from 'react';
import './SkipToMobile.scss';
import { ReactComponent as BurgerIcon } from '../../assets/burger.svg';

const SkipToMobile: React.FC<{
  isVisible: boolean, 
  skipTo: (index: number) => void,
  close: () => void
}> = ({
  isVisible, 
  skipTo,
  close
}) => {

  return (
    <div className={
      isVisible
        ? "skip-to-mobile mobile-section skip-to-mobile mobile-section--visible"
        : "skip-to-mobile mobile-section"
    }>
      <BurgerIcon
        stroke="var(--background)"
        onClick={close}
      />
      <p>Career Employment</p>
        <h2 onClick={() => skipTo(5)}>AMI</h2>
        <h2 onClick={() => skipTo(7)}>AFS</h2>
        <h2 onClick={() => skipTo(11)}>SGN</h2>

      <p>Projects</p>
        <h2 onClick={() => skipTo(2)}>Finance Tracker</h2>
        <h2 onClick={() => skipTo(3)}>Game Development</h2>
        <h2 onClick={() => skipTo(4)}>PvP Health</h2>
        <h2 onClick={() => skipTo(6)}>Poo Timer</h2>
      
      <p>Education</p>
        <h2 onClick={() => skipTo(8)}>CodeClan</h2>
        <h2 onClick={() => skipTo(13)}>Stevenson College</h2>
        <h2 onClick={() => skipTo(14)}>High School</h2>
      
      <p>General</p>
        <h2 onClick={() => skipTo(1)}>About Me</h2>
        <h2 onClick={() => skipTo(9)}>Fire Service</h2>
        <h2 onClick={() => skipTo(10)}>Family</h2>
        <h2 onClick={() => skipTo(12)}>Various</h2>
        <h2 onClick={() => skipTo(15)}>Born</h2>

    </div>
  )
}

export default SkipToMobile;