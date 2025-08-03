import React, { useEffect, useState } from 'react';
import Header from './components/Header';
import SummaryCards from './components/SummaryCards';
import AddExpenseForm from './components/AddExpenseForm';
import ExpenseList from './components/ExpenseList';

import './App.css';

function App() {
  const [expenses, setExpenses] = useState(() => {
    const data = localStorage.getItem('budget_expenses');
    return data ? JSON.parse(data) : [];
  });

  const [theme, setTheme] = useState(() =>
    localStorage.getItem('theme') || 'dark'
  );

  useEffect(() => {
    document.body.className = theme === 'light' ? 'light-theme' : 'dark-theme';
    localStorage.setItem('theme', theme);
  }, [theme]);

  const toggleTheme = () => {
    setTheme((prev) => (prev === 'light' ? 'dark' : 'light'));
  };

  const addExpense = (expense) => {
    setExpenses([...expenses, { id: Date.now(), ...expense }]);
  };

  const deleteExpense = (id) => {
    setExpenses(expenses.filter((e) => e.id !== id));
  };

  return (
    <div className="app-container">
      <div className="theme-toggle">
        <button onClick={toggleTheme}>
          {theme === 'dark' ? '🌞 Light Mode' : '🌙 Dark Mode'}
        </button>
      </div>

      <Header />
      <div className="summary-wrapper">
        <SummaryCards expenses={expenses} />
      </div>

      <div className="main-wrapper">
        <AddExpenseForm onAdd={addExpense} />
        <ExpenseList expenses={expenses} onDelete={deleteExpense} />
      </div>

      {/*<div className="chart-wrapper">
        <DoughnutChart expenses={expenses} />
        <CategoryBarChart expenses={expenses} />
      </div>*/}
    </div>
  );
}

export default App;
