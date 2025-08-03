import React from 'react';
import {
  LuWallet,
  LuCalendar,
  LuGauge,
  LuTrendingUp
} from 'react-icons/lu';

function SummaryCards({ expenses }) {
  const total = expenses.reduce((sum, e) => sum + Number(e.amount), 0);

  const monthly = expenses
    .filter((e) => new Date(e.date).getMonth() === new Date().getMonth())
    .reduce((sum, e) => sum + Number(e.amount), 0);

  const average =
    expenses.length > 0 ? (total / expenses.length).toFixed(2) : 0;

  const topCategory = (() => {
    const counts = {};
    expenses.forEach((e) => {
      counts[e.category] = (counts[e.category] || 0) + Number(e.amount);
    });
    const sorted = Object.entries(counts).sort((a, b) => b[1] - a[1]);
    return sorted[0] ? sorted[0][0] : 'N/A';
  })();

  return (
    <div className="summary-cards">
      <div className="glass-card">
        <p><LuWallet className="icon" /> Total Spent</p>
        <h2>₹ {total}</h2>
      </div>
      <div className="glass-card">
        <p><LuCalendar className="icon" /> This Month</p>
        <h2>₹ {monthly}</h2>
      </div>
      <div className="glass-card">
        <p><LuGauge className="icon" /> Average Spend</p>
        <h2>₹ {average}</h2>
      </div>
      <div className="glass-card">
        <p><LuTrendingUp className="icon" /> Top Category</p>
        <h2>{topCategory}</h2>
      </div>
    </div>
  );
}

export default SummaryCards;
