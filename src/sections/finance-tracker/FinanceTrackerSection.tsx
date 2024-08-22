import React from 'react';
import './FinanceTrackerSection.scss';
import financeTrackerPhone from '../../assets/images/financeTrackerPhone.png';
import { Section, sections } from '../../data/sections';

const FinanceTrackerSection: React.FC<{
  isVisible: boolean
}> = ({
  isVisible
}) => {

  const section: Section | undefined = sections.find(el => el.name === 'FINANCE_TRACKER');

  return (
    <section
      className={
        isVisible
          ? "finance-tracker-section finance-tracker-section--visible"
          : "finance-tracker-section"
      }
    >
      {/* <header>
        <h1>{section!.title}</h1>
        <h2>{section!.subTitle}</h2>
      </header> */}
      <div className="section__text">
        <p><strong>Finance Tracker</strong> is a mobile web app I developed to simplify managing my family finances.</p>
        <p>By integrating with the Monzo API, it provides real-time updates on transactions from my current account. The app calculates my adjusted balance, shows my balance on any given day, and compares my balance to the previous month.</p>
        <p>For the design, I opted for a minimalistic approach to contrast with Monzo's busier interface.</p>
        <p>React | TypeScript | Firebase | Monzo API</p>
      </div>
      <img src={financeTrackerPhone} alt="Finance Tracker" />
    </section>
  )
}

export default FinanceTrackerSection;