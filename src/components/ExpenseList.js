import React from 'react';
import { LuTrash2 } from 'react-icons/lu';

function ExpenseList({ expenses, onDelete }) {
    if (expenses.length === 0) return <p className="no-exp">No expenses yet.</p>;

    return (
        <div className="glass-card expense-list">
            <h3>Recent Expense List</h3>
            <table>
                <thead>
                    <tr>
                        <th>Title</th>
                        <th>Amount</th>
                        <th>Date</th>
                        <th>Category</th>
                        <th></th>
                    </tr>
                </thead>
                <tbody>
                    {expenses.map((e) => (
                        <tr key={e.id}>
                            <td>{e.title}</td>
                            <td>₹ {e.amount}</td>
                            <td>{new Date(e.date).toLocaleDateString()}</td>
                            <td>{e.category}</td>
                            <td>
                                <button className="delete-btn" onClick={() => onDelete(e.id)}>
                                    <LuTrash2 className="icon" />
                                </button>
                            </td>
                        </tr>
                    ))}
                </tbody>
            </table>
        </div>
    );
}

export default ExpenseList;
