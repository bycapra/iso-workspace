import { useState } from 'react'
import reactLogo from './assets/react.svg'
import viteLogo from '/vite.svg'
import './App.css'
import MuiButton from './components/MuiButton'
import MuiTextFields from './components/MuiTextFields'
import MuiSelect from './components/MuiSelect'

function App() {
  

  return (
    <div>
      <MuiButton/>
      <MuiTextFields/>
      <MuiSelect/>
    </div>
  )
}

export default App
