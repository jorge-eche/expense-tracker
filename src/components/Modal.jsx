import { useState, useEffect } from 'react'
import BtnExitModal from '../img/cerrar.svg'
import Message from './Message'

const Modal = ({
  setModal,
  animateModal,
  addExpense,
  setAnimateModal,
  expenseEdit,
  setExpenseEdit,
}) => {

const [name, setName] = useState('')
const [amount, setAmount] = useState('')
const [category, setCategory] = useState('')
const [id, setId] = useState('')
const [date, setDate] = useState('')

const [message, setMessage] = useState('')

useEffect(() => {
  if (Object.keys(expenseEdit).length > 0) {
    setName(expenseEdit.name)
    setAmount(expenseEdit.amount)
    setCategory(expenseEdit.category)
    setId(expenseEdit.id)
    setDate(expenseEdit.date)
  }
}, [])


const hideModal = () => {
  setAnimateModal(false)
  setExpenseEdit({})
  setTimeout(() => {
    setModal(false)
  }, 500);
  
}

const handleSubmit = e => {
  e.preventDefault()
  if ([name, amount, category].includes('')) {
    setMessage('All fields are required')
    
    setTimeout(() => {
      setMessage('')
    }, 3000);
    return
  } 

  const expenseModal = {
    name,
    amount,
    category,
    id,
    date
  }

  addExpense(expenseModal)
  hideModal()
}


  return (
    <div className="modal">

      <div className='cerrar-modal'>
        <img 
        src={BtnExitModal} 
        alt="Icon Exit Modal" 
        onClick={hideModal}
        />
      </div>

      <form 
      className={`formulario ${animateModal ? 'animar' : 'cerrar' }`}
      onSubmit={handleSubmit}
      >
        <legend>{expenseEdit.name ? 'Edit Expense' : 'New Expense'}</legend>

        {message && <Message type="error">{message}</Message>}

        <div className='campo'>
          <label htmlFor="name">Name Expense</label>
          <input 
          type="text" 
          id="name" 
          placeholder='Add the name of the expense'
          value={name}
          onChange={e => setName(e.target.value)}
          />
        </div>        
        
        <div className='campo'>
          <label htmlFor="amount">Amount</label>
          <input 
          type="number" 
          id="amount" 
          placeholder='Add the amount. E.g. 300'
          value={amount}
          onChange={e => setAmount(Number(e.target.value))}
          />
        </div>
        
        <div className='campo'>
          <label htmlFor="category">Category</label>
          <select 
          id="category"
          value={category}
          onChange={e => setCategory(e.target.value)}
          >
            <option value="">-- Select --</option>
            <option value="savings">Savings</option>
            <option value="food">Food</option>
            <option value="home">Home</option>
            <option value="miscellaneous">Miscellaneous</option>
            <option value="leisure">Leisure</option>
            <option value="health">Health</option>
            <option value="subscriptions">Subscriptions</option>
          </select>

          <input 
          type="submit" 
          value={expenseEdit.name ? 'Save Changes' : 'Add Expense'} 
          />
        </div>

      </form>
    </div>
  )
}

export default Modal