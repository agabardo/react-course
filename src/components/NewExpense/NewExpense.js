import React from "react";
import './NewExpense.css'
import './ExpenseForm';
import ExpenseForm from "./ExpenseForm";

const NewExpense = () => {
    const saveExpenseData = (expenseData) => {
        console.log(expenseData);
    }

    return <div className="new-Expense">
        <ExpenseForm onSaveExpenseData={saveExpenseData} />
    </div>
}

export default NewExpense;