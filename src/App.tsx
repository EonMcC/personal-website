import React, { useEffect, useRef, useState } from 'react';
import './App.scss';
import gamePad from './assets/timeline-icons/gamePad.png';
import plane from './assets/timeline-icons/plane.png';
import GameDevelopmentSection from './sections/game-development/GameDevelopmentPage';
import { ReactComponent as FinanceTrackerIcon } from './assets/timeline-icons/financeTracker.svg';
import FinanceTrackerSection from './sections/finance-tracker/FinanceTrackerSection';
import { isBetween } from './helpers/helperFunctions';
import { Section, sections } from './data/sections';

function App() {

  const appRef = useRef<HTMLDivElement>(null);

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
        changeHeader(section);
        if (section.offsetY) setYVH('80vh');
        else setYVH('55vh');        
        break;
      }
      changeHeader();
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
        setHeaderClass('app-header');
      }, 500)
    }
  }

  function resetVisuals() {
    setCurrentColor('var(--text)');
    setVisibleSection('');
  }

  const onWheel = (e: any) => {
    console.log('x', x)
    if (e) {
      if (e.deltaY < 0 && x < 450) setX(x + 25);
      else if (e.deltaY > 0) setX(x - 25);
    }
  };

  function skipTo(area: string) {
    for (const section of sections) {
      if (section.name === area) {
        setX(section.xRange[0])
        break;
      };
    }
  }

  return (
    <div id="app" ref={appRef} onWheel={onWheel}>
      <header className={headerClass}>
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
          <FinanceTrackerIcon className="timeline__entry__icon" stroke={currentColor}/>
          <p>Aug '24</p>
        </div>
        <FinanceTrackerSection isVisible={visibleSection === "FINANCE_TRACKER"} />
        {/* <div className={visibleSection === "FINANCE_TRACKER" ? "game-box game-box--visible" : "game-box"}>I am the game box</div> */}

        <div className="timeline__entry">
          <img src={plane} alt="Plane" />
          <p>Jan '24</p>
        </div>
        
        <div>
          <div></div>
          <div></div>
        </div>

        <div className="timeline__entry">
          <img src={gamePad} alt="GamePad" />
          <p>Aug '23</p>
        </div>
      </div>
      
      <div
        className="timeline-pointer"
        style={{
          top: `calc(${yVH} - 16px)`,
          borderColor: currentColor
        }}
      />

      <GameDevelopmentSection isVisible={visibleSection === "GAME_DEV"} />

      {x > 400 && <p className="scroll-to-begin">Scroll to begin</p>}

      <div className="skip-to">
        <h2>Skip To</h2>
        <button onClick={() => skipTo("FINANCE_TRACKER")}>Finance Tracker</button>
        <button onClick={() => skipTo("GAME_DEV")}>Game Dev</button>
      </div>
    </div>
  );
}

export default App;
