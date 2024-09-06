import React, { useEffect, useState } from 'react';
import './AboutMe.scss';
import me from '../../assets/images/me.png';

const AboutMeMobileSection: React.FC<{ startToHide: boolean }> = ({ startToHide }) => {

  const [classList, setClassList] = useState('mobile-section');

  useEffect(() => {
    window.scrollTo(0, 0);
    if (!startToHide) setClassList('mobile-section mobile-section--visible');
    else setClassList('mobile-section');
  }, [startToHide])

  return (
    <section className={classList}>

      <h2 style={{ color: "var(--primary)" }}>About me</h2>
      <h3> </h3>

      <img src={me} alt="Me" style={{ width: "100%" }} />

      <div className="mobile-section__text">
        <p>That up there is me, hello!</p>
        <p>I am a talented front-end <strong>developer</strong> passionate about design and all things <strong>UI/UX</strong>.</p>
        <p>I currently work for AMI and develop my own projects whenever I can.</p>
        <p>I am mainly proficient in React, Angular, and Figma, but I'm always eager to learn new technologies.</p>
        <p>This website is a timeline of my key life milestones. If you want to know more about me then feel free to scroll on through.</p>
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


    </section>
  )
}

export default AboutMeMobileSection;
