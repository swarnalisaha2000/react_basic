import React, {useState} from 'react'
import './ExpenseForm.css'
function ExpenseForm() {

// const [enteredtitle, setenteredtitle] = useState('');
// const [enteredamount, setenteredamount] = useState('');
// const [entereddate, setentereddate] = useState('');
const [userinput,setuserinput] = useState({
  title: '',
  amount: '',
  date: '',
});

  const titleChangeHandler=(event)=>{
    setuserinput(
      {
        ...userinput,
        title: event.target.value
      }
    );
  };
  const amountChangeHandler=(event)=>{
    setuserinput(
      {
        ...userinput,
        amount: event.target.value
      }
    );
  };
  const dateChangeHandler=(event)=>{
    setuserinput((prevState)=>{
      return {...prevState, date: event.target.value};
    });
  };

  const submitHandler = (event)=>{ 
    event.preventDefault();
    const expenseData ={
      title: userinput.title,
      amount: userinput.amount,
      date:new Date(userinput.date)
    }
    console.log(expenseData);
   }
  return (
    <form onSubmit={submitHandler}>
    <div className='new-expense__controls'>
        <div className='new-expense__control'>
            <label>Title</label>
            <input type="text" name="title" value={userinput.title} onChange={titleChangeHandler}/>
        </div>
        <div className='new-expense__control'>
            <label>Amount</label>
            <input type="number" name="amount" value={userinput.amount} min="0.01" step="0.01" onChange={amountChangeHandler}/>
        </div>
        <div className='new-expense__control'>
            <label>Date</label>
            <input type="date" name="date" min="2019-01-01" value={userinput.title}  max="2022-12-31" onChange={dateChangeHandler}/>
        </div>
        <div className='new-expense__actions'>
          <button type="submit">Add Expense</button>
        </div>
    </div>
    </form>
  )
}

export default ExpenseForm
