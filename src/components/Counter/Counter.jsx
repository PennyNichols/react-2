import React, {useState} from 'react'

const Counter = () => {
    const[num, setNum] = useState(55);
  return (
    <div>
      <h1>{num}</h1>
      <button onClick={() => setNum(num + 1)}>+</button>
      <button onClick={() => setNum(num - 1)}>-</button>
    </div>
  )
}

export default Counter
