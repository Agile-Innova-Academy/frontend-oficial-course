import React from 'react'
import useCounter from '../Hooks/useCounter'

function Counter() {
 const {count, handleAdd, handleReset, handleSubtract} = useCounter(5)
    
  return (
    <div>
        <br></br>
           <h1>Contador: {count}</h1>
        <hr></hr>
      <button onClick={handleAdd}>+</button>
      <button onClick={handleReset}>Reset</button>
      <button onClick={handleSubtract}>-</button>
    </div>
  )
}

export default Counter
