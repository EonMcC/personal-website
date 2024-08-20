import React from 'react';
import godotIcon from '../../assets/timeline-icons/godotIcon.png';

const GameDevelopmentSection: React.FC<{className: string}> = ({className}) => {

  return (
    <section className={className}>
      <header><h1>Game Development</h1></header>
      <img src={godotIcon} alt="Godot icon" />
      <div>
        <p>An explanation of this space blah blah blah</p>
        <p>An explanation of this space blah blah</p>
      </div>
    </section>
  )
}

export default GameDevelopmentSection;