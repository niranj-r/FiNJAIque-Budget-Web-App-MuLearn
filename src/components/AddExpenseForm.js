import React, { useState } from 'react';
import {
    LuFileText,
    LuIndianRupee,
    LuCalendarDays,
    LuListPlus,
    LuPlus
} from 'react-icons/lu';
import { defaultCategories } from '../utils/categories';

function AddExpenseForm({ onAdd }) {
    const [formData, setFormData] = useState({
        title: '',
        amount: '',
        date: '',
        category: defaultCategories[0],
    });
    const [newCategory, setNewCategory] = useState('');
    const [categories, setCategories] = useState(defaultCategories);
    const [errors, setErrors] = useState({});

    const handleChange = (e) => {
        setFormData({ ...formData, [e.target.name]: e.target.value });
    };

    const validate = () => {
        const errs = {};
        if (!formData.title) errs.title = 'Title is required';
        if (!formData.amount) errs.amount = 'Amount is required';
        if (!formData.date) errs.date = 'Date is required';
        setErrors(errs);
        return Object.keys(errs).length === 0;
    };

    const submitForm = (e) => {
        e.preventDefault();
        if (validate()) {
            onAdd(formData);
            setFormData({ ...formData, title: '', amount: '' });
            setErrors({});
        }
    };

    const addCategory = () => {
        if (!newCategory) return;
        setCategories([...categories, newCategory]);
        setFormData({ ...formData, category: newCategory });
        setNewCategory('');
    };

    return (
        <form className="glass-card add-form" onSubmit={submitForm}>
            <h3>Add New Expense</h3>
            <div className="form-group">
                <label><LuFileText className="icon" /> Title</label>
                <input
                    type="text"
                    name="title"
                    placeholder="Expense title"
                    value={formData.title}
                    onChange={handleChange}
                />
                {errors.title && <small className="error-text">{errors.title}</small>}
            </div>

            <div className="form-group">
                <label><LuIndianRupee className="icon" /> Amount</label>
                <input
                    type="number"
                    name="amount"
                    placeholder="₹"
                    value={formData.amount}
                    onChange={handleChange}
                />
                {errors.amount && <small className="error-text">{errors.amount}</small>}
            </div>

            <div className="form-group">
                <label><LuCalendarDays className="icon" /> Date</label>
                <input
                    type="date"
                    name="date"
                    value={formData.date}
                    onChange={handleChange}
                />
                {errors.date && <small className="error-text">{errors.date}</small>}
            </div>

            <div className="form-group">
                <label><LuListPlus className="icon" /> Category</label>
                <select
                    name="category"
                    value={formData.category}
                    onChange={handleChange}
                >
                    {categories.map((cat) => (
                        <option key={cat}>{cat}</option>
                    ))}
                </select>
            </div>

            <div className="form-group row">
                <input
                    type="text"
                    placeholder="Add new category"
                    value={newCategory}
                    onChange={(e) => setNewCategory(e.target.value)}
                />
                <button type="button" className="add-cat-btn" onClick={addCategory}>
                    <LuPlus />
                </button>
            </div>

            <button type="submit" className="submit-btn">
                Add Expense
            </button>
        </form>
    );
}

export default AddExpenseForm;
