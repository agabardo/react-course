import React, { useState } from "react";
import "./ExpenseForm.css";
const ExpenseForm = (props) => {
    // const [enteredTitle, setEnteredTitle] = useState('');
    // const [enteredAmount, setEnteredAmount] = useState('');
    // const [enteredDate, setEnteredDate] = useState('');


    const [userInput, setUserInput] = useState({
        enteredTitle: '',
        enteredAmount: '',
        enteredDate: ''
    });

    const titleChangeHandler = (event) => {
        setUserInput((prevState) => {
            return {
                ...prevState,
                enteredTitle: event.target.value
            }
        })
    };

    const amountChangeHandler = (event) => {
        setUserInput((prevState) => {
            return {
                ...prevState,
                enteredAmount: event.target.value
            }
        })
    };

    const dateChangeHandler = (event) => {
        setUserInput((prevState) => {
            return {
                ...prevState,
                enteredDate: event.target.value
            }
        })
    };

    const formSubmitHandler = (event) => {
        event.preventDefault();
        const expenseData = {
            title: userInput.enteredTitle,
            amount: parseFloat(userInput.enteredAmount).toFixed(2),
            date:  new Date(userInput.enteredDate)
        };
        props.onSaveExpenseData(expenseData);
        setUserInput({
            enteredTitle: '',
            enteredAmount: '',
            enteredDate: ''
        })
    };


    return <form onSubmit={formSubmitHandler}>
        <div className="input-group">
            <label>Title</label>
            <input value={userInput.enteredTitle} onChange={titleChangeHandler}/>
        </div>

        <div className="input-group">
            <label>Amount</label>
            <input type="number" min="0.01" step="0.01" value={userInput.enteredAmount} onChange={amountChangeHandler} />
        </div>

        <div className="input-group">
            <label>Date</label>
            <input type="date" min="2019-01-01" max="2023-12-31" value={userInput.enteredDate} onChange={dateChangeHandler} />
        </div>
        <button type="submit">Add expense</button>
    </form>
}

export default ExpenseForm;