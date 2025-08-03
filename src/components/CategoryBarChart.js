import React from 'react';
import { Bar } from 'react-chartjs-2';
import {
    Chart as ChartJS,
    CategoryScale,
    LinearScale,
    BarElement,
    Tooltip,
    Legend
} from 'chart.js';

ChartJS.register(CategoryScale, LinearScale, BarElement, Tooltip, Legend);

function CategoryBarChart({ expenses }) {
    const categoryTotals = {};
    expenses.forEach((e) => {
        categoryTotals[e.category] =
            (categoryTotals[e.category] || 0) + Number(e.amount);
    });

    const data = {
        labels: Object.keys(categoryTotals),
        datasets: [
            {
                label: 'Total Spent',
                data: Object.values(categoryTotals),
                backgroundColor: '#ff7b00',
                borderRadius: 8,
            },
        ],
    };

    const options = {
        responsive: true,
        animation: {
            duration: 1200,
            easing: 'easeOutQuart',
        },
        scales: {
            y: {
                ticks: {
                    color: '#fff',
                },
                grid: {
                    color: '#333',
                },
            },
            x: {
                ticks: {
                    color: '#fff',
                },
                grid: {
                    display: false,
                },
            },
        },
        plugins: {
            legend: {
                labels: {
                    color: '#fff',
                },
            },
        },
    };

    return (
        <div className="glass-card chart-card">
            <h3>Category-wise Spend (Bar Chart)</h3>
            <Bar data={data} options={options} />
        </div>
    );
}

export default CategoryBarChart;
