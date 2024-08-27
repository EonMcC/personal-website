import React, { useEffect, useState } from 'react';
import financeTracker from '../../assets/images/financeTracker.png';

const FinanceTrackerMobileSection: React.FC<{
  startToHide: boolean;
}> = ({
  startToHide
}) => {

  const [classList, setClassList] = useState('mobile-section');

  useEffect(() => {
      if (!startToHide) setClassList('mobile-section mobile-section--visible');
      else setClassList('mobile-section');
  }, [startToHide])


  return (
    <section className={classList}>
      <h2 style={{color: "var(--primary)"}}>Finance Tracker</h2>
      <h3 style={{color: "var(--primary)"}}>Personal Project</h3>

      <img
        src={financeTracker}
        alt="Finance Tracker"
        style={{width: '30%'}}
      />

      <div className="mobile-section__text">
        <p><strong>Finance Tracker</strong> is a mobile web app I developed to simplify managing my family finances.</p>
        <p>By integrating with the <strong>Monzo API</strong>, it provides real-time updates on transactions from my current account. The app calculates my adjusted balance, shows my balance on any given day, and compares my balance to the previous month.</p>
        <p>For the design, I opted for a minimalistic approach to contrast with Monzo's busier interface.</p>
        <p>React | TypeScript | Firebase | Monzo API</p>
      </div>
    </section>
  )
}

export default FinanceTrackerMobileSection;