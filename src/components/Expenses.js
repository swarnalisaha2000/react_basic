import React, {useState} from 'react'
import Card from './Card'
import ExpenseItem from './ExpenseItem'
import './Expenses.css'
import ExpensesFilter from './NewExpenses/ExpensesFilter'


function Expenses(props) {
  const [filteredYear, setFilteredYear]= useState('2020');
  const filterchangeHandler = (selectedYear)=>{
    setFilteredYear(selectedYear);
  }

  const filteredExpenses = props.items.filter((expense) => {
    return expense.date.getFullYear().toString() === filteredYear;
  });

  return (
    <div>
    <Card className='expenses'>
      <ExpensesFilter selected={filteredYear} onChangeFilter={filterchangeHandler}/>

      {filteredExpenses.length === 0 ? (<p className='expenses-list__fallback'>No expenses present.</p>) : (
        filteredExpenses.map((expense)=>( 
          <ExpenseItem 
          key={expense.id}
          title={expense.title}
          amount={expense.amount}
          date={expense.date}
          />))
      )}
      
    </Card>
    </div>
  )
}

export default Expenses
