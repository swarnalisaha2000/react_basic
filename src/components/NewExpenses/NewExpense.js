import React,{ useState } from 'react'
import ExpenseForm from './ExpenseForm'
import './NewExpenses.css'

function NewExpense(props) {

    const[isEditing, setIsEditing] = useState(false)

  const saveExpenseHandler = (enteredExpense) => {
    const expenseData = {
      ...enteredExpense,
      id: Math.random().toString()
    };
    props.onAddExpense(expenseData);
  };
  const startEditHandler =()=>{
    setIsEditing(true);

  }
  const stopEditHandler =()=>{
    setIsEditing(false);

  }

  return (
    <div className='new-expense'>
      {!isEditing &&<button onClick={startEditHandler}>Add New Expense</button>}
      {isEditing &&<ExpenseForm onSaveExpenseData={saveExpenseHandler} onCancel={stopEditHandler}/>}
    </div>
  )
}

export default NewExpense
