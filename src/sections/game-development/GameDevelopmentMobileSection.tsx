import React, { useEffect, useState } from 'react';
import gameDevMobile from '../../assets/images/gameDevMobile.png';

const GameDevelopmentMobileSection: React.FC<{startToHide: boolean}> = ({startToHide}) => {

  const [classList, setClassList] = useState('mobile-section');

  useEffect(() => {
    if (!startToHide) setClassList('mobile-section mobile-section--visible');
    else setClassList('mobile-section');
  }, [startToHide])

  return (
    <section className={classList}>
      <h2 style={{color: "var(--primary)"}}>Game Development</h2>

      <h3 style={{color: "var(--primary)"}}>Hobby</h3>
      <img
        src={gameDevMobile}
        alt="Barista Turnbasta"
        style={{translate: "-40%", width: "80%"}}
      />

      <div className="mobile-section__text">
        <p>2024 brought an exciting new hobby into my life - game development!</p>
        <p>I'm working with my partner (artist) to create a game using the Godot game engine called <strong>Barista Turnbasta</strong></p>
        <p>Barista Turnbasta is a turn-based-style clicker game set in a fantasy land, where the coffee bean has just been discovered, where players manage a coffee store.</p>
        <p>This project is a stepping stone towards my dream game, <strong>Coffee Co</strong>. More on that later!</p>
        <p>Godot | OOP | Project Management | Project Planning</p>
      </div>

    </section>
  )
}

export default GameDevelopmentMobileSection;