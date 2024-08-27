import React, { useEffect, useState } from 'react';
import codeclanMobile from '../../assets/images/codeclanMobile.png';

const CodeclanMobileSection: React.FC<{
  startToHide: boolean;
}> = ({
  startToHide
}) => {

  const [classList, setClassList] = useState('mobile-section');

  useEffect(() => {
    window.scrollTo(0, 0);
    if (!startToHide) setClassList('mobile-section mobile-section--visible');
    else setClassList('mobile-section');
  }, [startToHide])


  return (
    <section className={classList}>
      <h2 style={{color: "var(--primary)"}}>CodeClan</h2>
      <h3 style={{color: "var(--primary)"}}>Education</h3>

      <img
        src={codeclanMobile}
        alt="Codeclan projects"
      />

      <div className="mobile-section__text">
        <p>What can I say about <strong>CodeClan</strong>? It changed my life and set me on a trajectory I never thought possible.</p>
        <p>I learned so much in such a short space of time and gained a career that I can be proud of.</p>
        <p>I completed three main projects, mastered a host of languages and skills, and participated in a post-graduation charity project. These are just some of the valuable experiences I took away from my time there.</p>
        <p>I was saddened to hear that CodeClan is no more — it was a great benefit to the Scottish tech scene.</p>
        <p>JavaScript | React | Vue | Java | Spring | Ruby |  HTML | CSS | Git | GitHub | OOP | Coding Best Practices | Teamwork | Code Reviews</p>
      </div>
    </section>
  )
}

export default CodeclanMobileSection;