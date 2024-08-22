import React from 'react';
import financeTracker from '../../assets/images/financeTracker.png';

const FinanceTrackerSection: React.FC<{
  isVisible: boolean;
}> = ({
  isVisible
}) => {

  return (
    <section
      className={
        isVisible
          ? "section section--visible"
          : "section"
      }
    >
      <div className="section__text">
        <p><strong>Finance Tracker</strong> is a mobile web app I developed to simplify managing my family finances.</p>
        <p>By integrating with the <strong>Monzo API</strong>, it provides real-time updates on transactions from my current account. The app calculates my adjusted balance, shows my balance on any given day, and compares my balance to the previous month.</p>
        <p>For the design, I opted for a minimalistic approach to contrast with Monzo's busier interface.</p>
        <p>React | TypeScript | Firebase | Monzo API</p>
      </div>
      <img src={financeTracker} alt="Finance Tracker" />
    </section>
  )
}

export default FinanceTrackerSection;