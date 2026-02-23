import { createSlice } from '@reduxjs/toolkit'


const getBasketFromStorage = () => {
    var basketValue = localStorage.getItem('basket');
    if (basketValue)
        return JSON.parse(basketValue);
    else
        return [];
}

const initialState = {
    products: getBasketFromStorage(),
    drawer:false,
    totalAmount:0,
    isDeleted:false
}

const writeFromBasketToStorage = (basket) => {
    localStorage.setItem('basket', JSON.stringify(basket));
}

export const basketSlice = createSlice({
    name: 'basket',
    initialState,
    reducers: {
        addToBasket :(state,action)=>{
            const findProduct = state.products && state.products.find((product)=>product.id === action.payload.id);
            if(findProduct){
                //Onceden eklenen urun
                const extractedProducts = state.products.filter((product)=>product.id !== action.payload.id);
                findProduct.count += action.payload.count;
                state.products = [...extractedProducts,findProduct];
                writeFromBasketToStorage(state.products);
            }else{
                state.products = [...state.products,action.payload];
                writeFromBasketToStorage(state.products);
            }
        },
        setDrawer: (state)=>{
            state.drawer = !state.drawer
        },
        calculateBasket : (state) => { 
           state.totalAmount = 0;          
           state.products && state.products.map((e)=>{
            state.totalAmount += (e.price * e.count);
           })
        },
        removeFromBasket:(state,action) => {
            var productId = action.payload;            
            const findProduct = state.products && state.products.find((product)=>product.id === productId);
            if(findProduct){
                const extractedProducts = state.products.filter((product)=>product.id !== productId);
                state.products = [...extractedProducts];                
                writeFromBasketToStorage(state.products);
                state.isDeleted = true;                
            }else{   
                state.isDeleted = false;             
                return productId + "id li ürün bulunamadı"
            }
        }
    }    
})

export const { addToBasket,setDrawer,calculateBasket,removeFromBasket} = basketSlice.actions
export default basketSlice.reducer