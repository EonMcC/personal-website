import React, { useEffect, useState } from 'react';
import './MobileApp.scss';
import { ReactComponent as HiIcon } from '../assets/timeline-icons/hi.svg';
import { ReactComponent as FinanceTrackerIcon } from '../assets/timeline-icons/financeTracker.svg';
import { ReactComponent as BurgerIcon } from '../assets/burger.svg';
import { ReactComponent as PvpIcon } from '../assets/timeline-icons/pvp.svg';
import { ReactComponent as GameDevIcon } from '../assets/timeline-icons/gameDev.svg';
import { ReactComponent as AmiIcon } from '../assets/timeline-icons/ami.svg';
import { ReactComponent as PooTimerIcon } from '../assets/timeline-icons/pooTimer.svg';
import { ReactComponent as AfsIcon } from '../assets/timeline-icons/afs.svg';
import { ReactComponent as CodeclanIcon } from '../assets/timeline-icons/codeclan.svg';
import { ReactComponent as FireServiceIcon } from '../assets/timeline-icons/fireService.svg';
import { ReactComponent as FamilyIcon } from '../assets/timeline-icons/family.svg';
import { ReactComponent as SgnIcon } from '../assets/timeline-icons/sgn.svg';
import { ReactComponent as ShipIcon } from '../assets/timeline-icons/ship.svg';
import { ReactComponent as PhotographyIcon } from '../assets/timeline-icons/photography.svg';
import { ReactComponent as EducationIcon } from '../assets/timeline-icons/education.svg';
import { ReactComponent as BornIcon } from '../assets/timeline-icons/born.svg';
import { sections } from '../data/sections';
import AboutMeMobileSection from '../sections/about-me/AboutMeMobile';
import FinanceTrackerMobileSection from '../sections/finance-tracker/FinanceTrackerMobileSection';
import MobileHeader from '../sections/mobile-header/MobileHeader';
import SkipToMobile from './skip-to-mobile/SkipToMobile';

const MobileApp = () => {

  const [visibleSection, setVisibleSection] = useState('MOBILE_HEADER');
  const [currentColor, setCurrentColor] = useState('var(--text)');
  const [x, setX] = useState(100);
  const [currentSectionIndex, setCurrentSectionIndex] = useState<any>(0);
  const [showSkipTo, setShowSkipTo] = useState(false);
  const [allowSwipe, setAllowSwipe] = useState(true);

  useEffect(() => {
    document.addEventListener('touchstart', handleTouchStart, false);        
    document.addEventListener('touchend', handleTouchEnd, false);
    
    var yDown: any = null;

    function handleTouchStart(evt:any) {
      yDown = evt.touches[0].clientY;                                
    };                                                

    function handleTouchEnd(e: any) {
      console.log('allowSwipe', allowSwipe)
      if (allowSwipe) {
        const yUp = e.changedTouches[0].clientY;
        const diff = yDown - yUp;
        if (diff > 20) setCurrentSectionIndex((prev: any) => prev < sections.length - 1 ? prev + 1 : prev);
        if (diff < -20) setCurrentSectionIndex((prev: any) => prev > 0 ? prev - 1 : prev);
      }
    }                                                                                                             

    return () => {
      document.removeEventListener("touchstart", handleTouchStart);
      document.removeEventListener("touchend", handleTouchEnd);
    }
  }, [allowSwipe])

  useEffect(() => {
    setTimeout(() => {
      setVisibleSection(sections[currentSectionIndex].name);
      setCurrentColor(sections[currentSectionIndex].color);
      setX(sections[currentSectionIndex].xPosition!);
      document.documentElement.style.setProperty('--strong', sections[currentSectionIndex].color);
    }, 300)
  }, [currentSectionIndex])

  function skipTo(index: number) {
    setCurrentSectionIndex(index);
    setShowSkipTo(false);
    setAllowSwipe(true);
  }

  function onBurgerClick() {
    setShowSkipTo(true);
    setAllowSwipe(false);
  }

  return (
    <div id="mobile-app">

      <header
        className={visibleSection === "MOBILE_HEADER"  ? "header2 header2--hidden" : "header2"}
        style={{color: currentColor}}
      >
        <h2>Iain McClafferty</h2>
        <BurgerIcon
          stroke={currentColor}
          onClick={onBurgerClick}
        />
      </header>

      <div
        className={visibleSection === "MOBILE_HEADER"  ? "mobile-timeline mobile-timeline--hidden" : "mobile-timeline"}
        style={{
          transform: `translateX(${x}px)`,
          backgroundColor: currentColor
        }}
      >

        <div className="mobile-timeline__entry">
          <HiIcon
            className={
              visibleSection === "ABOUT_ME"
              ? "mobile-timeline__entry__icon mobile-timeline__entry__icon--visible"
              : "mobile-timeline__entry__icon"
            }
            fill={currentColor}
          />
          <p>Today</p>
        </div>

        <div className="mobile-timeline__entry">
          <FinanceTrackerIcon
            className={
              visibleSection === "FINANCE_TRACKER"
              ? "mobile-timeline__entry__icon mobile-timeline__entry__icon--visible"
              : "mobile-timeline__entry__icon"
            }
            fill={currentColor}
          />
          <p>Aug '24</p>
        </div>

        <div
          className="timeline__entry"
        >
          <GameDevIcon
            className={
              visibleSection === "GAME_DEV"
              ? "mobile-timeline__entry__icon mobile-timeline__entry__icon--visible"
              : "mobile-timeline__entry__icon"
            }
            fill={currentColor}
          />
          <p>June '24</p>
        </div>

        <div
          className="timeline__entry"
        >
          <PvpIcon
            className={
              visibleSection === "PVP"
              ? "mobile-timeline__entry__icon mobile-timeline__entry__icon--visible"
              : "mobile-timeline__entry__icon"
            }
            fill={currentColor}
          />
          <p>Jan '24</p>
        </div>

        <div className="timeline__entry">
          <AmiIcon
            className={
              visibleSection === "AMI"
              ? "mobile-timeline__entry__icon mobile-timeline__entry__icon--visible"
              : "mobile-timeline__entry__icon"
            }
            fill={currentColor}
          />
          <p>Oct '21</p>
        </div>

        <div className="timeline__entry">
          <PooTimerIcon
            className={
              visibleSection === "POO_TIMER"
              ? "mobile-timeline__entry__icon mobile-timeline__entry__icon--visible"
              : "mobile-timeline__entry__icon"
            }
            fill={currentColor}
          />
          <p>Aug '20</p>
        </div>

        <div className="timeline__entry">
          <AfsIcon
            className={
              visibleSection === "AFS"
              ? "mobile-timeline__entry__icon mobile-timeline__entry__icon--visible"
              : "mobile-timeline__entry__icon"
            }
            fill={currentColor}
          />
          <p>May '20</p>
        </div>

        <div className="timeline__entry">
          <CodeclanIcon
            className={
              visibleSection === "CODECLAN"
              ? "mobile-timeline__entry__icon mobile-timeline__entry__icon--visible"
              : "mobile-timeline__entry__icon"
            }
            fill={currentColor}
          />
          <p>Aug '19</p>
        </div>

        <div className="timeline__entry">
          <FireServiceIcon
            className={
              visibleSection === "FIRE"
              ? "mobile-timeline__entry__icon mobile-timeline__entry__icon--visible"
              : "mobile-timeline__entry__icon"
            }
            fill={currentColor}
          />
          <p>May '19</p>
        </div>

        <div className="timeline__entry">
          <FamilyIcon
            className={
              visibleSection === "FAMILY"
              ? "mobile-timeline__entry__icon mobile-timeline__entry__icon--visible"
              : "mobile-timeline__entry__icon"
            }
            fill={currentColor}
          />
          <p>Aug '17</p>
        </div>

        <div className="timeline__entry">
          <SgnIcon
            className={
              visibleSection === "SGN"
              ? "mobile-timeline__entry__icon mobile-timeline__entry__icon--visible"
              : "mobile-timeline__entry__icon"
            }
            fill={currentColor}
          />
          <p>Jul '16</p>
        </div>

        <div className="timeline__entry">
          <ShipIcon
            className={
              visibleSection === "VARIOUS"
              ? "mobile-timeline__entry__icon mobile-timeline__entry__icon--visible"
              : "mobile-timeline__entry__icon"
            }
            fill={currentColor}
          />
          <p>2010</p>
        </div>

        <div className="timeline__entry">
          <PhotographyIcon
            className={
              visibleSection === "STEVENSON"
              ? "mobile-timeline__entry__icon mobile-timeline__entry__icon--visible"
              : "mobile-timeline__entry__icon"
            }
            fill={currentColor}
          />
          <p>2006</p>
        </div>

        <div className="timeline__entry">
          <EducationIcon
            className={
              visibleSection === "SCHOOL"
              ? "mobile-timeline__entry__icon mobile-timeline__entry__icon--visible"
              : "mobile-timeline__entry__icon"
            }
            fill={currentColor}
          />
          <p>1993</p>
        </div>

        <div className="timeline__entry">
          <BornIcon
            className={
              visibleSection === "BORN"
              ? "mobile-timeline__entry__icon mobile-timeline__entry__icon--visible"
              : "mobile-timeline__entry__icon"
            }
            fill={currentColor}
          />
          <p>May '88</p>
        </div>

      </div>

      <div
        className={visibleSection === "MOBILE_HEADER"
          ? "mobile-timeline-pointer mobile-timeline-pointer--hidden"
          : "mobile-timeline-pointer"
        }
        style={{borderColor: currentColor}}
      />

      <MobileHeader isVisible={visibleSection === "MOBILE_HEADER"} />
      <AboutMeMobileSection isVisible={visibleSection === "ABOUT_ME"} />
      <FinanceTrackerMobileSection isVisible={visibleSection === "FINANCE_TRACKER"} />

      <SkipToMobile
        isVisible={showSkipTo}
        skipTo={skipTo}
        close={() => setShowSkipTo(false)}
      />
    </div>
  )
}

export default MobileApp;