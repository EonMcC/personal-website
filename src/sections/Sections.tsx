import React from 'react';
import './Sections.scss';
import AboutMeSection from './about-me/AboutMe';
import FinanceTrackerSection from './finance-tracker/FinanceTrackerSection';
import GameDevelopmentSection from './game-development/GameDevelopmentPage';
import PvPHealthSection from './pvp-health/PvPHealthSection';
import AmiSection from './ami/AmiSection';
import PooTimerSection from './poo-timer/PooTimer';
import AfsSection from './afs/AfsSection';
import CodeclanSection from './codeclan/CodeclanSection';
import FireServiceSection from './fire-service/FireServiceSection';
import FamilySection from './family/FamilySection';
import SgnSection from './sgn/SgnSection';
import VariousSection from './various/VariousSection';
import StevensonSection from './stevenson/StevensonSection';
import SchoolSection from './school/SchoolSections';
import BornSection from './born/Born';

const Sections: React.FC<{visibleSection: string}> = ({visibleSection}) => {

  return (
    <>
      <AboutMeSection isVisible={visibleSection === "ABOUT_ME"} />
      <FinanceTrackerSection isVisible={visibleSection === "FINANCE_TRACKER"} />
      <GameDevelopmentSection isVisible={visibleSection === "GAME_DEV"} />
      <PvPHealthSection isVisible={visibleSection === "PVP"} />
      <AmiSection isVisible={visibleSection === "AMI"} />
      <PooTimerSection isVisible={visibleSection === "POO_TIMER"} />
      <AfsSection isVisible={visibleSection === "AFS"} />
      <CodeclanSection isVisible={visibleSection === "CODECLAN"} />
      <FireServiceSection isVisible={visibleSection === "FIRE"} />
      <FamilySection isVisible={visibleSection === "FAMILY"} />
      <SgnSection isVisible={visibleSection === "SGN"} />
      <VariousSection isVisible={visibleSection === "VARIOUS"} />
      <StevensonSection isVisible={visibleSection === "STEVENSON"} />
      <SchoolSection isVisible={visibleSection === "SCHOOL"} />
      <BornSection isVisible={visibleSection === "BORN"} />
    </>
  )
}

export default Sections;