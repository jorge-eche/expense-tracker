import { useState } from 'react'
import Message from './Message'

const NewBudget = ({
  budget,
  setBudget,
  setIsValidBudget
}) => {

  const [ message, setMessage ] = useState('')

  const handleBudget = e => {
    e.preventDefault()
    if (budget <= 0) {
      setMessage('Invalid Budget')
    } else {
      setMessage('')
      setIsValidBudget(true)
    }
  }

  return (
    <div className=' contenedor contenedor-presupuesto sombra'>
      <form className='formulario' onSubmit={handleBudget}>
        <div className='campo'>
          <label>Define Budget</label> 

          <input
          className='nuevo-presupuesto'
          type="number"
          placeholder='Add your Budget'
          value={budget}
          onChange={e => setBudget(Number(e.target.value))}
          />

          <input 
          type="submit"
          value='Add'
          />

          {message && <Message type='error'>{message}</Message>}


        </div>
      </form>
    </div>
  )
}

export default NewBudget