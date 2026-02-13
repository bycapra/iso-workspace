import React from 'react'
import { useNavigate } from 'react-router-dom';


function SingleProduct({product}) {
    const {id,name,price} = product;
    const navigate =useNavigate();  //Url yonlendirmek için kullanılır. Window.navigator.navigate gibi 
    
  return (
    <div style={{marginBottom:'40px'}}>
      <div>Ürün Detay</div>
      <h3>İsim: {name}</h3>
      <h3>Fiyat: {price}</h3>
      <button onClick={()=>{navigate('/product-details/' + id)}}>Detaya Git</button>      
    </div>
  )
}

export default SingleProduct
