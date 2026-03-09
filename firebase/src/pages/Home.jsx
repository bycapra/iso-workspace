import React, { useEffect, useState } from 'react'
import { onAuthStateChanged } from "firebase/auth";
import { auth } from '../Firebase';

function Home() {

  const [user,setUser] = useState('');

  useEffect(()=>{
    onAuthStateChanged(auth,(u)=>{
      if(u){
        setUser(u.displayName || u.email);
      }
    });

  },[]);

  return (
    <div>
      Merhaba, {user}
    </div>
  )
}

export default Home
