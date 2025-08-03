import { useState } from 'react'
import './App.css'

function App() {
  const [count, setCount] = useState(0);

  const setCounter = (type) =>{
    if (type=='+')
        setCount(count + 1)
    else if(type=="-"){
      let value = (count -1 > 0) ? count -1 : 0
      setCount(value);
    }        
    else
      throw "Hatalı parametre! Parametre Degeri: " + type;
  }

  return (
    <>
      <div>
        Hooks - Test | Counter = {count}
      </div>
      <div>
        <button onClick={()=>{setCounter('+')}}>Artır (+)</button>
        <button onClick={()=>{setCounter('-')}}>Azalt (-)</button>
      </div>
    </>
  )
}

export default App
