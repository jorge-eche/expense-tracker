import { useState, useEffect } from "react"
import { CircularProgressbar, buildStyles } from 'react-circular-progressbar';
import 'react-circular-progressbar/dist/styles.css';

const BudgetControl = ({
    budget,
    expenses,
    handleResetApp
}) => {
    
  const [ available, setAvailable ] = useState(0)
  const [ spent, setSpent ] = useState(0)
  const [percentage, setPercentage] = useState(0)

useEffect(() => {
  const totalSpent = expenses.reduce((total, expense) => total + expense.amount, 0)

  const totalAvailable = budget - totalSpent

  const newPercentage = ((totalSpent * 100) / budget).toFixed(2)
  
  
  setSpent(totalSpent)
  setAvailable(totalAvailable)
  setPercentage(newPercentage)
}, [expenses])


  const formatAmount = amount => {
    return amount.toLocaleString('en-US', {
      style:'currency',
      currency:'USD'
    })
  }

  return (    
    <div className=' contenedor contenedor-presupuesto sombra dos-columnas'>
        <div>
          <CircularProgressbar
          value={percentage} 
          text={`${percentage}% Spent`}
          styles={buildStyles({
            pathColor: percentage >= 100 ? '#c71465' : '#3b82f6',
            trailColor: '#94a3b8',
            textColor: percentage >= 100 ? '#c71465' : '#3b82f6'
          })}
          
          />
        </div>


        <div className="contenido-presupuesto">
            <button
            className= 'reset-app'
            type='button'
            onClick={handleResetApp}
            >              
                Reset App
            </button>
            <p>
            <span>Budget: </span> {formatAmount(budget)}
            </p>

            <p>
            <span>Available: </span> {formatAmount(available)}
            </p>

            <p>
            <span>Total Spent: </span> {formatAmount(spent)}
            </p>
        </div>
    </div>
  )
}

export default BudgetControl