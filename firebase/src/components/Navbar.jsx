import { signOut } from 'firebase/auth'
import React from 'react'
import { auth } from '../Firebase'
import { useNavigate } from 'react-router-dom'
import { toast } from 'react-toastify';

function Navbar() {

  const navigator = useNavigate();

  const logout = async () => {
    var result  =await signOut(auth);
    toast.success("Oturum sonlandırıldı.");
    navigator('/auth');
  }

  return (
    <div className='navbar'>
      <div className='navbar-left'>Navbar</div>
      <div className='navbar-right' onClick={logout}>Çıkış Yap</div>
    </div>
  )
}

export default Navbar
