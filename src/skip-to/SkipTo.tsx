import React from 'react';
import './SkipTo.scss';

const SkipTo: React.FC<{
  skipTo: (section: string) => void;
}> = ({
  skipTo
}) => {

  return (
    <div className="skip-to">
      <div className="skip-to__category-cont">
        <div className="skip-to__category-cont__category">
          <p>Career Employment</p>
          <ul>
            <li onClick={() => skipTo("AMI")}>AMI</li>
            <li onClick={() => skipTo("AFS")}>AFS</li>
            <li onClick={() => skipTo("SGN")}>SGN</li>
          </ul>
        </div>

        <div className="skip-to__category-cont__category">
          <p>Projects</p>
          <ul>
            <li onClick={() => skipTo("FINANCE_TRACKER")}>Finance Tracker</li>
            <li onClick={() => skipTo("GAME_DEV")}>Game Development</li>
            <li onClick={() => skipTo("PVP")}>PvP Health</li>
            <li onClick={() => skipTo("POO_TIMER")}>Poo Timer</li>
          </ul>
        </div>

        <div className="skip-to__category-cont__category">
          <p>Education</p>
          <ul>
            <li onClick={() => skipTo("CODECLAN")}>CodeClan</li>
            <li onClick={() => skipTo("STEVENSON")}>Stevenson College</li>
            <li onClick={() => skipTo("SCHOOL")}>High School</li>
          </ul>
        </div>

        <div className="skip-to__category-cont__category">
          <p>General</p>
          <ul>
            <li onClick={() => skipTo("ABOUT_ME")}>About Me</li>
            <li onClick={() => skipTo("FIRE")}>Fire Service</li>
            <li onClick={() => skipTo("FAMILY")}>Family</li>
            <li onClick={() => skipTo("VARIOUS")}>Various</li>
            <li onClick={() => skipTo("BORN")}>Born</li>
          </ul>
        </div>
      </div>
    </div>
  )
}

export default SkipTo;