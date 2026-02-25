
import './App.css'
import useCounter from './hooks/useCounter'

function App() {  
  const {counter,increase,decrease} = useCounter();

  return (
   <div>
    <div>
      <button onClick={decrease}>Azalt</button><span>{counter}</span><button onClick={increase}>Artır</button>
    </div>
   </div>
  )
}

export default App
