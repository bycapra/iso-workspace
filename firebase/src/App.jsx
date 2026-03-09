import { useState } from 'react'
import reactLogo from './assets/react.svg'
import viteLogo from '/vite.svg'
import './App.css'
import RouterConfig from './config/RouterConfig'
import Navbar from './components/Navbar'
import {ToastContainer} from 'react-toastify'
import 'react-toastify/dist/ReactToastify.css'

function App() {
  const [count, setCount] = useState(0)

  return (
    <div>
      <Navbar/>
      <RouterConfig/>
      <ToastContainer position='top-right' autoClose={3000}/>
    </div>
  )
}

export default App
