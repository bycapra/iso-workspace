import React from 'react'
import { useParams } from 'react-router-dom';
import { products } from "../data/ProductData";
import Product from './Product';
import SingleProduct from '../components/SingleProduct';

function ProductDetails() {

  const {id} = useParams(); //urlden dolayı içinde id:1 gibi bir bilgi tutan obje dönecek. (Routelarda id degiskeni adı verdik)
  
 return(
  <div>
      <h1>Ürün detayları</h1>
      <hr/>
      {
        products && products.map((product)=>{
          if(product.id == id){
            return <SingleProduct product={product}/>
          }
        })
      }
  </div>
 )

}

export default ProductDetails
