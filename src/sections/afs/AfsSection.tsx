import React from 'react';
import afs from '../../assets/images/afs.png';

const AfsSection: React.FC<{isVisible: boolean}> = ({isVisible}) => {

  return (
    <section
      className={
        isVisible
          ? "section section section--visible"
          : "section"
      }
    >
      <div className="section__text">
        <p><strong>AFS</strong> gave me my first opportunity to work as a developer, and it's a company I will always be extremely grateful to.</p>
        <p>I started as a Junior Developer and quickly advanced to Developer. I also took on design responsibilities, learning how to use Figma and conducting UI reviews before merging work.</p>
        <p>At AFS, I significantly improved as both a developer and designer while learning how development teams operate.</p>
        <p>Angular | Ionic | Figma | AWS | GitHub</p>
      </div>

      <img
        src={afs}
        alt="AFS Logo"
        style={{translate: "0 -35%", maxWidth: "25%"}}
      />
    </section>
  )
}

export default AfsSection;