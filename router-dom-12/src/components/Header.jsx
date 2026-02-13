import React from 'react'
import {Link} from 'react-router-dom'

function Header() {
  return (
    <div className='header'>
        <Link to="/" className='link'>Ana Sayfa</Link>
        <Link to="/about" className='link'>Hakkında</Link>
        <Link to="/product" className='link'>Ürünler</Link>
        <Link to="/contact" className='link'>İletişim</Link>
    </div>
  )
}

export default Header
