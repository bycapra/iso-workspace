import React from 'react'
import {Route,Routes} from 'react-router-dom'
import Home from '../pages/Home'
import Auth from '../pages/Auth'

function RouterConfig() {
  return (
    <Routes>
        <Route path='/' element={<Home/>}></Route>
        <Route path='/auth' element={<Auth/>}></Route>
    </Routes>
  )
}

export default RouterConfig
