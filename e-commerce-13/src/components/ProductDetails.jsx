import React, { useEffect } from 'react'
import { useDispatch, useSelector } from 'react-redux';
import { useFetcher, useParams } from 'react-router-dom'
import { setSelectedProduct } from '../redux/slices/productSlice';

function ProductDetails() {
    const { id } = useParams();
    const { products,selectedProduct} = useSelector((store) => store.product);
    const dispatch = useDispatch()

    const {price,image,description,title} = selectedProduct;

    const getProductById = () => {
        var selectedProductArr = products.filter((e) => { return e.id == id })
        if (selectedProductArr.length) {
            var selectedProduct = selectedProductArr[0];
            dispatch(setSelectedProduct(selectedProduct))
        }else{
            console.log(id + " id li ürün bulunmadı!");
        }
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
                <h1 style={{fontFamily:'arial'}}>{title}</h2>
                <h3 style={{fontFamily:'arial',fontSize:'20px'}}>{description}</h3>
                <h1>{price}₺</h1>
            </div>
        </div>
    )
}

export default ProductDetails