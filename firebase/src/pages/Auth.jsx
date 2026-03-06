import React from 'react'
import { FaGoogle } from "react-icons/fa";

function Auth() {
  return (
    <div className='auth'>
        <h3 className='auth-header'>Giriş Yap / Kayıt ol </h3>
      <div className='input-div'>
        <input type='text' placeholder='Email adresinizi giriniz'/> 
        <input type='password' placeholder='parolanızı girin'/>
      </div>
      <div>
        <button className='google-button'><FaGoogle style={{marginTop:"2px"}} /> Google ile Giriş Yap</button>
        <button className='login-button'>Giriş Yap</button>
        <button className='register-button'>Kaydol</button>
      </div>
    </div>
  )
}

export default Auth
