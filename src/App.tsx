import React, { useEffect, useRef, useState } from 'react';
import './App.scss';
import { isBetween } from './helpers/helperFunctions';
import { Section, sections } from './data/sections';
import { ReactComponent as FinanceTrackerIcon } from './assets/timeline-icons/financeTracker.svg';
import { ReactComponent as GameDevIcon } from './assets/timeline-icons/gameDev.svg';
import { ReactComponent as PvpIcon } from './assets/timeline-icons/pvp.svg';
import { ReactComponent as HiIcon } from './assets/timeline-icons/hi.svg';
import { ReactComponent as AmiIcon } from './assets/timeline-icons/ami.svg';
import { ReactComponent as PooTimerIcon } from './assets/timeline-icons/pooTimer.svg';
import { ReactComponent as AfsIcon } from './assets/timeline-icons/afs.svg';
import { ReactComponent as CodeclanIcon } from './assets/timeline-icons/codeclan.svg';
import { ReactComponent as FireServiceIcon } from './assets/timeline-icons/fireService.svg';
import { ReactComponent as FamilyIcon } from './assets/timeline-icons/family.svg';
import { ReactComponent as SgnIcon } from './assets/timeline-icons/sgn.svg';
import { ReactComponent as ShipIcon } from './assets/timeline-icons/ship.svg';
import { ReactComponent as PhotographyIcon } from './assets/timeline-icons/photography.svg';
import { ReactComponent as EducationIcon } from './assets/timeline-icons/education.svg';
import { ReactComponent as BornIcon } from './assets/timeline-icons/born.svg';
import useScreenSize from './hooks/useScreenSize';
import SkipTo from './skip-to/SkipTo';
import Sections from './sections/Sections';

function App() {

  const appRef = useRef<HTMLDivElement>(null);

  const {width, height} = useScreenSize();

  const [x, setX] = useState(450);
  const [yVH, setYVH] = useState('55vh');
  const [currentColor, setCurrentColor] = useState('var(--text)');
  const [visibleSection, setVisibleSection] = useState('');
  const [header, setHeader] = useState({
    title: 'Iain McClafferty',
    subTitle: 'Developer | Designer | Storyteller'
  });
  const [headerClass, setHeaderClass] = useState('app-header');

  useEffect(() => {
    for (const section of sections) {
      if (isBetween(x, section.xRange[0], section.xRange[1])) {
        setVisibleSection(section.name);
        setCurrentColor(section.color);
        document.documentElement.style.setProperty('--strong', section.color);
        changeHeader(section);
        if (section.offsetY) setYVH('80vh');
        else setYVH('55vh');        
        break;
      }
      changeHeader();
      setYVH('55vh');
      document.documentElement.style.setProperty('--strong', 'var(--text)');
      resetVisuals();
    }
  }, [x])

  function changeHeader({title, subTitle} = {title: 'Iain McClafferty', subTitle: 'Developer | Designer | Storyteller'}) {
    if (header.title !== title) {
      setHeaderClass('app-header app-header--hidden');
      setTimeout(() => {
        setHeader({
          title,
          subTitle
        })
        setHeaderClass('app-header app=header--hidden');
      }, 500)
    }
  }

  function resetVisuals() {
    setCurrentColor('var(--text)');
    setVisibleSection('');
  }

  const onWheel = (e: any) => {
    if (e) {
      if (x < -2050 && e.deltaY > 0) return;
      if (e.deltaY < 0 && x < 450) setX(x + 25);
      else if (e.deltaY > 0) setX(x - 25);
    }
  };

  function skipTo(area: string) {
    for (const section of sections) {
      if (section.name === area) {
        setX(section.xRange[0] + 25)
        break;
      };
    }
  }

  if (width < 965 || height < 800) {
    return (
      <div className="screen-too-small">
        <h2>Work in Progress</h2>
        <p>I'm sorry - this site is still a work in progress.</p>
        <p>Currently, smaller screen sizes are not supported.</p>
        <p>Please view this website on a screen size greater than <strong>965px x 800px</strong>.</p>
        <p>Sorry for the inconvenience. Mobile support coming soon!</p>
      </div>
    )
  }

  return (
    <div id="app" ref={appRef} onWheel={onWheel}>
      <header
        className={headerClass}
        style={{color: currentColor}}
      >
        <h1>{header.title}</h1>
        <h2>{header.subTitle}</h2>
      </header>

      <div
        className="timeline"
        style={{
          transform: `translateX(${x}px)`,
          top: yVH,
          backgroundColor: currentColor
        }}
      >

        <div className="timeline__entry">
          <HiIcon
            className={
              visibleSection === "ABOUT_ME"
              ? "timeline__entry__icon timeline__entry__icon--visible"
              : "timeline__entry__icon"
            }
            fill={currentColor}
          />
          <p>Today</p>
        </div>

        <div className="timeline__entry">
          <FinanceTrackerIcon
            className={
              visibleSection === "FINANCE_TRACKER"
              ? "timeline__entry__icon timeline__entry__icon--visible"
              : "timeline__entry__icon"
            }
            fill={currentColor}
          />
          <p>Aug '24</p>
        </div>

        <div className="timeline__entry">
          <GameDevIcon
            className={
              visibleSection === "GAME_DEV"
              ? "timeline__entry__icon timeline__entry__icon--visible"
              : "timeline__entry__icon"
            }
            fill={currentColor}
          />
          <p>June '24</p>
        </div>

        <div className="timeline__entry">
          <PvpIcon
            className={
              visibleSection === "PVP"
              ? "timeline__entry__icon timeline__entry__icon--visible"
              : "timeline__entry__icon"
            }
            fill={currentColor}
          />
          <p>Jan '24</p>
        </div>

        <div className="timeline__entry">
          <AmiIcon
            className={
              visibleSection === "AMI"
              ? "timeline__entry__icon timeline__entry__icon--visible"
              : "timeline__entry__icon"
            }
            fill={currentColor}
          />
          <p>Oct '21</p>
        </div>

        <div className="timeline__entry">
          <PooTimerIcon
            className={
              visibleSection === "POO_TIMER"
              ? "timeline__entry__icon timeline__entry__icon--visible"
              : "timeline__entry__icon"
            }
            fill={currentColor}
          />
          <p>Aug '20</p>
        </div>

        <div className="timeline__entry">
          <AfsIcon
            className={
              visibleSection === "AFS"
              ? "timeline__entry__icon timeline__entry__icon--visible"
              : "timeline__entry__icon"
            }
            fill={currentColor}
          />
          <p>May '20</p>
        </div>

        <div className="timeline__entry">
          <CodeclanIcon
            className={
              visibleSection === "CODECLAN"
              ? "timeline__entry__icon timeline__entry__icon--visible"
              : "timeline__entry__icon"
            }
            fill={currentColor}
          />
          <p>Aug '19</p>
        </div>

        <div className="timeline__entry">
          <FireServiceIcon
            className={
              visibleSection === "FIRE"
              ? "timeline__entry__icon timeline__entry__icon--visible"
              : "timeline__entry__icon"
            }
            fill={currentColor}
          />
          <p>May '19</p>
        </div>

        <div className="timeline__entry">
          <FamilyIcon
            className={
              visibleSection === "FIRE"
              ? "timeline__entry__icon timeline__entry__icon--visible"
              : "timeline__entry__icon"
            }
            fill={currentColor}
          />
          <p>Aug '17</p>
        </div>

        <div className="timeline__entry">
          <SgnIcon
            className={
              visibleSection === "SGN"
              ? "timeline__entry__icon timeline__entry__icon--visible"
              : "timeline__entry__icon"
            }
            fill={currentColor}
          />
          <p>Jul '16</p>
        </div>

        <div className="timeline__entry">
          <ShipIcon
            className={
              visibleSection === "VARIOUS"
              ? "timeline__entry__icon timeline__entry__icon--visible"
              : "timeline__entry__icon"
            }
            fill={currentColor}
          />
          <p>2010</p>
        </div>

        <div className="timeline__entry">
          <PhotographyIcon
            className={
              visibleSection === "STEVENSON"
              ? "timeline__entry__icon timeline__entry__icon--visible"
              : "timeline__entry__icon"
            }
            fill={currentColor}
          />
          <p>2006</p>
        </div>

        <div className="timeline__entry">
          <EducationIcon
            className={
              visibleSection === "SCHOOL"
              ? "timeline__entry__icon timeline__entry__icon--visible"
              : "timeline__entry__icon"
            }
            fill={currentColor}
          />
          <p>1993</p>
        </div>

        <div className="timeline__entry">
          <BornIcon
            className={
              visibleSection === "BORN"
              ? "timeline__entry__icon timeline__entry__icon--visible"
              : "timeline__entry__icon"
            }
            fill={currentColor}
          />
          <p>May '88</p>
        </div>


      </div>
      
      <div
        className="timeline-pointer"
        style={{
          top: `calc(${yVH} - 16px)`,
          borderColor: currentColor
        }}
      />

      <Sections visibleSection={visibleSection} />

      {x > 400 && <p className="scroll-to-begin">Scroll to begin</p>}

      <SkipTo skipTo={skipTo}/>
    </div>
  );
}

export default App;
