import React from 'react';
import codeclan from '../../assets/images/codeclan.png';
import codeclanLogo from '../../assets/images/codeclanLogo.png';

const CodeclanSection: React.FC<{isVisible: boolean}> = ({isVisible}) => {

  return (
    <section
      className={
        isVisible
          ? "section section--large section--visible"
          : "section"
      }
    >
      <div className="section__text">
        <img
          src={codeclanLogo}
          alt="CodeClan logo"
        />
        <p>What can I say about <strong>CodeClan</strong>? It changed my life and set me on a trajectory I never thought possible.</p>
        <p>I learned so much in such a short space of time and gained a career that I can be proud of.</p>
        <p>I completed three main projects, mastered a host of languages and skills, and participated in a post-graduation charity project. These are just some of the valuable experiences I took away from my time there.</p>
        <p>I was saddened to hear that CodeClan is no more — it was a great benefit to the Scottish tech scene.</p>
        <p>JavaScript | React | Vue | Java | Spring | Ruby |  HTML | CSS | Git | GitHub | OOP | Coding Best Practices | Teamwork | Code Reviews</p>
      </div>

      <img
        src={codeclan}
        alt="CodeClan projects"
      />
    </section>
  )
}

export default CodeclanSection;