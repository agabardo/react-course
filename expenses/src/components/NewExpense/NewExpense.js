import React, { useState } from 'react';

import ExpenseForm from './ExpenseForm';
import './NewExpense.css';

const NewExpense = (props) => {

  const [showForm, setFormVisibilty] = useState(false)
  

  const saveExpenseDataHandler = (enteredExpenseData) => {
    const expenseData = {
      ...enteredExpenseData,
      id: Math.random().toString()
    };
    props.onAddExpense(expenseData);
  };

  const handleFormVisibilty = () => {
    setFormVisibilty((currState) => {
      return !Boolean(currState)
    })
  };

  if (Boolean(showForm) === false) {
    return (<div className='new-expense'>
      <button onClick={handleFormVisibilty}>Add new expense</button>
      </div>)
  }

  return (
    <div className='new-expense'>
      <ExpenseForm onChangeVisibility={handleFormVisibilty} onSaveExpenseData={saveExpenseDataHandler} />
    </div>
  );
};

export default NewExpense;
