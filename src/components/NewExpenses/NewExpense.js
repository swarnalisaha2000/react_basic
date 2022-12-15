import React from 'react'
import ExpenseForm from './ExpenseForm'
import './NewExpenses.css'

function NewExpense(props) {

  const saveExpenseHandler = (enteredExpense) => {
    const expenseData = {
      ...enteredExpense,
      id: Math.random().toString()
    };
    props.onAddExpense(expenseData);
  };
  

  return (
    <div className='new-expense'>
      <ExpenseForm onSaveExpenseData={saveExpenseHandler}/>
    </div>
  )
}

export default NewExpense
