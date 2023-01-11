import {
    LeadingActions,
    SwipeableList,
    SwipeableListItem,
    SwipeAction,
    TrailingActions,
  } from 'react-swipeable-list'
import 'react-swipeable-list/dist/styles.css'

import { formatDate } from "../helpers"

import SavingsIcon from "../img/icono_ahorro.svg"
import FoodIcon from "../img/icono_comida.svg"
import HomeIcon from "../img/icono_casa.svg"
import MiscellaneousIcon from "../img/icono_gastos.svg"
import LeisureIcon from "../img/icono_ocio.svg"
import HealthIcon from "../img/icono_salud.svg"
import SuscriptionsIcon from "../img/icono_suscripciones.svg"


const Expense = ({
    expense,
    setExpenseEdit,
    deleteExpense
}) => {

    const {category, name, amount, date} = expense

    console.log(date)

    const iconDictionary = {
        savings: SavingsIcon,
        food: FoodIcon,
        home: HomeIcon,
        miscellaneous: MiscellaneousIcon,
        leisure: LeisureIcon,
        health: HealthIcon,
        subscriptions: SuscriptionsIcon
    }

    const leadingActions = () => (
        <LeadingActions>
          <SwipeAction onClick={() => setExpenseEdit(expense)}>
            Edit
          </SwipeAction>
        </LeadingActions>
      )
      
      const trailingActions = () => (
        <TrailingActions>
          <SwipeAction
            destructive={true}
            onClick={() => deleteExpense(expense)}
          >
            Delete
          </SwipeAction>
        </TrailingActions>
      )

  return (    
    <SwipeableList>
        <SwipeableListItem
            leadingActions={leadingActions()}
            trailingActions={trailingActions()}
        >
                <div className='gasto sombra'>
                    <div className="contenido-gasto">
                        <img 
                        src={iconDictionary[category]}
                        alt="Expense Icon" 
                        />

                        <div className="descripcion-gasto">
                            <p className="categoria">{category}</p>
                            <p className="nombre-gasto">{name}</p>
                            <p className="fecha-gasto">
                                Added:{''}
                                <span>{formatDate(date)}</span>
                            </p>
                        </div>
                    </div>
                    <p className="cantidad-gasto">${amount}</p>
                </div>
        </SwipeableListItem>
    </SwipeableList>

  )
}

export default Expense