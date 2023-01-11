import { useState, useEffect } from 'react'
import Header from './components/Header'
import Filters from './components/Filters'
import ExpenseList from './components/ExpenseList'
import Modal from './components/Modal'
import NewExpenseIcon from './img/nuevo-gasto.svg'
import { generateId, formatDate } from './helpers'



function App() {

  const [budget, setBudget] = useState(
    Number(localStorage.getItem('budget')) ?? 0
    )
  const [isValidBudget, setIsValidBudget] = useState(false)
  
  const [modal, setModal] = useState(false)
  const [animateModal, setAnimateModal] = useState(false)

  const [expenses, setExpenses] = useState(
    JSON.parse(localStorage.getItem('expenses')) ?? []
  )
  const [expenseEdit, setExpenseEdit] = useState({})

  const [filter, setFilter] = useState('')
  const [filteredExpenses, setFilteredExpenses] = useState([])

  useEffect(() => {
    const budgetLS = Number(localStorage.getItem('budget')) ?? 0
    
    if (budgetLS > 0) {
      setIsValidBudget(true)
    }
  }, [])

  useEffect(() => {
    localStorage.setItem('budget', JSON.stringify(budget) ?? 0);
  }, [budget])

  useEffect(() => {
    localStorage.setItem('expenses', JSON.stringify(expenses) ?? []);
  }, [expenses])

  useEffect(() => {
    if (Object.keys(expenseEdit).length > 0) {
      handleNewExpense()
    }
  }, [expenseEdit])

  useEffect(() => {
    if (filter) {
    const filteringExpenses = expenses.filter(expense => expense.category === filter)
    setFilteredExpenses(filteringExpenses)
    }
  }, [filter])

  const handleNewExpense = () => {
    setModal(true)
    setTimeout(() => {
      setAnimateModal(true)
    }, 500);
  }
  
  const addExpense = expenseModal => {
    if (expenseModal.id) {
      //Editing expense
      const updatedExpenses = expenses.map( expenseState => expenseState.id === expenseModal.id ? expenseModal : expenseState)    
      setExpenses(updatedExpenses)
      
    } else {
      //Adding a new expense
      expenseModal.id = generateId()
      expenseModal.date = Date.now()
      setExpenses([...expenses, expenseModal])
  }}

  //Deleting Expense
  const deleteExpense = expense => {
    const updatedExpenses = expenses.filter( expenseState => expenseState.id !== expense.id)
    setExpenses(updatedExpenses)
  }

  //Reset App
  const handleResetApp = ()=> {
    const question = confirm('Do you want to reset the App?')
    if(question) {
      setBudget(0)
      setIsValidBudget(false)
      setExpenses([])
    }        
  }

  return (
    <div className={ modal ? 'fijar' : ''}>
      <Header
      budget={budget}
      setBudget={setBudget}
      isValidBudget={isValidBudget}
      setIsValidBudget={setIsValidBudget}
      expenses={expenses}
      handleResetApp={handleResetApp}
      />

      {isValidBudget && (
        <>
        <main>
          <Filters
          filter={filter}
          setFilter={setFilter}
          />
          <ExpenseList
          expenses={expenses}
          setExpenseEdit={setExpenseEdit}
          filter={filter}
          filteredExpenses={filteredExpenses}
          deleteExpense={deleteExpense}
          />
        </main>
          <div className='nuevo-gasto'>
            <img 
            src={NewExpenseIcon} 
            alt="Icono Nuevo Gasto"
            onClick={handleNewExpense}
            />
          </div>
        </>
      )}

      { modal && (
        <Modal
        setModal={setModal}
        animateModal={animateModal}
        addExpense={addExpense}
        setAnimateModal={setAnimateModal}
        expenseEdit={expenseEdit}
        setExpenseEdit={setExpenseEdit}
        />
      
      )}
      
      
    </div>

  )
}

export default App
