import React from 'react';
import gameDev from '../../assets/images/gameDev.png';

const GameDevelopmentSection: React.FC<{isVisible: boolean}> = ({isVisible}) => {

  return (
    <section
      className={
        isVisible
          ? "section section--large section--visible"
          : "section"
      }
    >
      <div className="section__text">
        <p>2024 brought an exciting new hobby into my life - game development!</p>
        <p>I'm working with my partner (artist) to create a game using the Godot game engine called <strong>Barista Turnbasta</strong></p>
        <p>Barista Turnbasta is a turn-based-style clicker game set in a fantasy land, where the coffee bean has just been discovered, where players manage a coffee store.</p>
        <p>This project is a stepping stone towards my dream game, <strong>Coffee Co</strong>. More on that later!</p>
        <p>Godot | OOP | Project Management | Project Planning</p>
      </div>

      <img
        src={gameDev}
        alt="Barista Turnbasta"
        style={{translate: "0 -35%"}}
      />
    </section>
  )
}

export default GameDevelopmentSection;