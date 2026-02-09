import { useState } from 'react'

import './App.css'
import { useSelector, useDispatch } from 'react-redux'
import  {decrement,increment} from './redux/counterSlice'

function App() {
  const state = useSelector((store)=>store.counter);
  const dispatch = useDispatch()

  return (
    <div>
      <div>{state.value}</div>
      <div><button onClick={()=>{dispatch(decrement())}}>Azalt</button><button onClick={()=>{dispatch(increment())}}>Artır</button></div>      
    </div>
  )
}
export default App 
