import React from 'react';
import './AboutMe.scss';
import me from '../../assets/images/me.png';

const AboutMeSection: React.FC<{ isVisible: boolean }> = ({ isVisible }) => {

  return (
    <section
      className={
        isVisible
          ? "section section--large section--visible"
          : "section"
      }
    >
      <div className="section__text">
        <p>That over there --&gt;</p>
        <p>is me, hello!</p>
        <p>I am a talented <strong>developer</strong> passionate about design and all things <strong>UI/UX</strong>.</p>
        <p>I have experience with React, Angular, NextJS, React Native, Node.JS, AWS and Firebase.</p>
        <p>This website is a timeline of my key milestones. If you want to know more about me then feel free to scroll on through.</p>
        <p>All the best - Iain</p>
        <div className="contact-details">
          <p>Contact details:</p>
          <a href="mailto: iain2eyes@gmail.com">iain2eyes@gmail.com</a>
          <a
            href="https://www.linkedin.com/in/iain-mcclafferty"
            target="_blank"
            rel="noreferrer"
          >linkedin.com/in/iain-mcclafferty</a>
        </div>
      </div>

      <img
        src={me}
        alt="Me"
        style={{ maxHeight: "450px", visibility: isVisible ? "visible" : "hidden" }}
        loading="lazy"
        width="491"
        height="450"
      />
    </section>
  )
}

export default AboutMeSection;
