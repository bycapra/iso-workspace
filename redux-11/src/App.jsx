import { useEffect, useState } from 'react'

import './App.css'
import { useSelector, useDispatch } from 'react-redux'
import { getAllUsers } from './redux/userSlice';
import UserList from './UserList';
import User from './User';


function App() {

  const dispatch = useDispatch(); //disatch ile fonksiyon cagirmak icin
  const {users} = useSelector(store=>store.user);

  console.log("users:" + JSON.stringify(users))
 

  useEffect(()=>{
    dispatch(getAllUsers())
  },[])

  return (
    <div>
      {
        users && users.map((user)=>(
          <User key={user.id} user={user}/>
        ))
      }
    </div>
  )
}
export default App 
