import React, { useEffect, useState } from 'react'
import { useDispatch, useSelector } from 'react-redux';
import {  useParams } from 'react-router-dom'
import { setSelectedProduct } from '../redux/slices/productSlice';
import { CiCirclePlus } from "react-icons/ci";
import { CiCircleMinus } from "react-icons/ci";
import { addToBasket, calculateBasket } from '../redux/slices/basketSlice';

function ProductDetails() {
    const { id } = useParams();
    const { products,selectedProduct} = useSelector((store) => store.product);
    const dispatch = useDispatch()

    const {price,image,description,title} = selectedProduct;

    //Adetler
    const [count,setCount] = useState(0);

    const getProductById = () => {
        var selectedProductArr = products.filter((e) => { return e.id == id })
        if (selectedProductArr.length) {
            var selectedProduct = selectedProductArr[0];
            dispatch(setSelectedProduct(selectedProduct))
        }else{
            console.log(id + " id li ürün bulunmadı!");
        }
    }

    //urun sayısı artırma - azaltma
    const increase = () =>{
        setCount(count+1);
    }

    const decrease = () =>{
       if(count>0)
            setCount(count-1);
        
    }

    const addBasket = () => {
        const payload  ={
            id,
            price,
            image,
            title,
            description,
            count
        }
        dispatch(addToBasket(payload));
        dispatch(calculateBasket());
    }

    useEffect(()=>{
        getProductById();
    },[])

    return (
        <div style={{marginTop:'30px',display:"flex",flexDirection:'row',justifyContent:'center'}}>
            <div style={{marginRight:'40px'}}>
                <img src={image} width={300} height={500} alt={description}/>
            </div>
            <div>
                <h1 style={{fontFamily:'arial'}}>{title}</h1>
                <h3 style={{fontFamily:'arial',fontSize:'20px'}}>{description}</h3>
                <h1 style={{color:'seagreen'}}>{price}₺</h1>
                <div style={{display:'flex',alignItems:'center'}}>
                    <CiCircleMinus style={{fontSize:'40px',cursor:'pointer'}} onClick={decrease}/><span style={{fontSize:'35px'}}>{count}</span> <CiCirclePlus style={{fontSize:'40px',cursor:'pointer'}} onClick={increase}/>
                </div>
                <div>
                    <button onClick={addBasket} style={{marginTop:'15px',border:'none',padding:'20px',backgroundColor:'orange',borderRadius:'10px',cursor:'pointer'}}>Sepete Ekle</button>
                </div>
            </div>
        </div>
    )
}

export default ProductDetails