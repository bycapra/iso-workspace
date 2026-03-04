import React from 'react'

function Auth() {
  return (
    <div className='auth'>
        <h3 className='auth-header'>Giriş Yap / Kayıt ol </h3>
      <div className='input-div'>
        <input type='text' placeholder='Email adresinizi giriniz'/> 
        <input type='password' placeholder='parolanızı girin'/>
      </div>
      <div>
        <button className='login-button'>Giriş Yap</button>
        <button>Kaydol</button>
      </div>
    </div>
  )
}

export default Auth
