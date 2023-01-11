import NewBudget from './NewBudget'
import BudgetControl from './BudgetControl'
import Filters from './Filters'

const Header = ({
  budget,
  setBudget,
  isValidBudget,
  setIsValidBudget,
  expenses,
  handleResetApp
}) => {
  return (
      <header>
          <h1>Expense Tracker</h1>

          {
            !isValidBudget ? (
              <NewBudget
              budget={budget}
              setBudget={setBudget}
              setIsValidBudget={setIsValidBudget}
              />
            ) : (
              <>
                <BudgetControl
                budget={budget}
                expenses={expenses}
                handleResetApp={handleResetApp}
                />
              </>
            )
          }      
      </header>
  )
}

export default Header