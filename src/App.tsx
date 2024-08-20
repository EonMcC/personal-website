import React, { useEffect, useRef, useState } from 'react';
import './App.scss';
import gamePad from './assets/timeline-icons/gamePad.png';
import plane from './assets/timeline-icons/plane.png';
import GameDevelopmentPage from './sections/game-development/GameDevelopmentPage';
import GameDevelopmentSection from './sections/game-development/GameDevelopmentPage';


function App() {

  const appRef = useRef<HTMLDivElement>(null);
  const [timelinePositionX, setTimelinePositionX] = useState(450);
  const [timelinePositionY, setTimelinePositionY] = useState(55);
  const [appHeaderClass, setAppHeaderClass] = useState('app-header');
  const [gameBoxClass, setGameBoxClass] = useState('game-box');
  const [multiBoxClass, setMultiBoxClass] = useState('multi-box');
  const [firstFullPageClass, setFirstFullPageClass] = useState('first-full-page');

  useEffect(() => {
    if (timelinePositionX <= 400 && timelinePositionX >= 325) {
      setGameBoxClass('game-box game-box--visible');
    } else {
      setGameBoxClass('game-box');
    }

    if (timelinePositionX <= -25 && timelinePositionX >= -150) {
      setMultiBoxClass('multi-box multi-box--visible');
    } else {
      setMultiBoxClass('multi-box');
    }

    if (timelinePositionX <= -375 && timelinePositionX >= -425) {
      setFirstFullPageClass('first-full-page first-full-page--visible');
      setAppHeaderClass('app-header app-header--hidden');
      setTimelinePositionY(80);
    } else {
      setFirstFullPageClass('first-full-page');
      setAppHeaderClass('app-header');
      setTimelinePositionY(55);
    }
  }, [timelinePositionX])

  const onWheel = (e: any) => {
    console.log('timelinePositionX', timelinePositionX)
    if (e) {
      if (e.deltaY < 0 && timelinePositionX < 450) setTimelinePositionX(timelinePositionX + 25);
      else if (e.deltaY > 0) setTimelinePositionX(timelinePositionX - 25);
    }
    console.log('onWheel')

  };

  function skipTo(area: string) {
    if (area === "GAME_DEV") {
      setTimelinePositionX(-375);
    }
  }


  return (
    <div id="app" ref={appRef} onWheel={onWheel}>
      <header className={appHeaderClass}>
        <h1>Iain McClafferty</h1>
        <h2>Developer | Designer | Storyteller</h2>
      </header>

      <div
        className="timeline"
        style={{
          transform: `translateX(${timelinePositionX}px)`,
          top: `${timelinePositionY}vh`
        }}
      >
        <div className="timeline__entry">
          <img src={gamePad} alt="GamePad" />
          <p>Jun '24</p>
        </div>
        <div className={gameBoxClass}>I am the game box</div>

        <div className="timeline__entry">
          <img src={plane} alt="Plane" />
          <p>Jan '24</p>
        </div>
        
        <div className={multiBoxClass}>
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
          top: `calc(${timelinePositionY}vh - 16px)`
        }}
      />

      <GameDevelopmentSection className={firstFullPageClass} />

      {timelinePositionX > 400 && <p className="scroll-to-begin">Scroll to begin</p>}

      <div className="skip-to">
        <h2>Skip To</h2>
        <button onClick={() => skipTo("GAME_DEV")}>Game Dev</button>
      </div>
    </div>
  );
}

export default App;
