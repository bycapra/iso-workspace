import React from 'react'
import '../css/product.css'

function Product({product}) {
    
    const {id,price,image,description,title} = product;

  return (
    <div className='card'>
        <img src={image} alt={title} className='image'/>
        <div>
            <p style={{textAlign:'center',height:'50px'}}>{title}</p>
            <h3 style={{textAlign:'center'}}>{price}₺</h3>
        </div>
        <div className='flex-row'>
            <button className='detail-button'>Ürün Detayı</button>
        </div>
    </div>
  )
}

export default Product