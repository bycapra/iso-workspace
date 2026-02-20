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
    totalAmount:0

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
        }
    }    
})

export const { addToBasket,setDrawer,calculateBasket} = basketSlice.actions
export default basketSlice.reducer