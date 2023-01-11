import Expense from "./Expense"

const ExpenseList = ({
    expenses,
    setExpenseEdit,
    filter,
    filteredExpenses,
    deleteExpense
}) => {
  return (
    <div className="listado-gastos contenedor">

      { filter ? (
        <>
          <h2>{ filteredExpenses.length ? 'Expenses' : 'No expenses in this category'}</h2>
          {filteredExpenses.map( expense => (
            <Expense
            key={expense.id}
            expense={expense}
            setExpenseEdit={setExpenseEdit}
            deleteExpense={deleteExpense}
            />
            ))}
        </>
      
      ) : (
        <>
          <h2>{ expenses.length ? 'Expenses' : 'No expenses yet'}</h2>
          {expenses.map( expense => (
            <Expense
            key={expense.id}
            expense={expense}
            setExpenseEdit={setExpenseEdit}
            deleteExpense={deleteExpense}
            />
          ))}
        </>      
      )
      }     
    </div>
  )}

export default ExpenseList