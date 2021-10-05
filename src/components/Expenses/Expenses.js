import React, { useState } from 'react';

import ExpenseItem from './ExpenseItem';
import Card from '../UI/Card';
import ExpensesFilter from './ExpensesFilter';
import './Expenses.css';
import ExpensesChart from './ExpensesChart';

const Expenses = (props) => {
  

  const [filteredYear, setFilteredYear] = useState('2020');

  const filterChangeHandler = (year) => {
    setFilteredYear(year)
  }

  const filteredExpenses = props.items.filter((expense) => {
    return new Date(expense.date).getFullYear() === parseInt(filteredYear)
  });

  return (
    <div>
      <Card className='expenses'>
        <ExpensesChart expenses={filteredExpenses} />
        <ExpensesFilter selected={filteredYear} onChangeFilter={filterChangeHandler} />
        {filteredExpenses.length === 0 ? (
        <h5>No expenses to show</h5>
        ) :
         (filteredExpenses.map(expense => 
          <ExpenseItem
            key={expense.id}
            title={expense.title}
            amount={expense.amount}
            date={expense.date}
          />)
        )}
      </Card>
    </div>
  );
};

export default Expenses;
