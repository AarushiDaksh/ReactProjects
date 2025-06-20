import { useState } from 'react'
import './App.css'

function App() {
  const [count, setCount] = useState(0)

  return (
    <>
      <h1 className="h-40 text-pink-500 text-4xl font-bold">Stupid</h1>
      <h2> {count} </h2>
      <button onClick={()=>setCount(count + 1)}></button>
    </>
  )
}

export default App
