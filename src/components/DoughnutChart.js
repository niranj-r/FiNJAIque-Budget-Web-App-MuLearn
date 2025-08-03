import React from 'react';
import { Doughnut } from 'react-chartjs-2';
import { Chart as ChartJS, ArcElement, Tooltip, Legend } from 'chart.js';

ChartJS.register(ArcElement, Tooltip, Legend);

function DoughnutChart({ expenses }) {
    const categoryTotals = {};
    expenses.forEach((e) => {
        categoryTotals[e.category] =
            (categoryTotals[e.category] || 0) + Number(e.amount);
    });

    const data = {
        labels: Object.keys(categoryTotals),
        datasets: [
            {
                data: Object.values(categoryTotals),
            },
        ],
    };

    return (
        <div className="glass-card chart-card">
            <h3>Spending by Category</h3>
            <Doughnut data={data} />
        </div>
    );
}

export default DoughnutChart;
