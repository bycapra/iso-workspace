import { createSlice } from '@reduxjs/toolkit'


const getBasketFromStorage = () => {
    var basketValue = localStorage.getItem('basket');
    if (basketValue)
        return JSON.parse(basketValue);
    else
        return [];
}

const initialState = {
    products: getBasketFromStorage()

}

const writeFromBasketToStorage = (basket) => {
    localStorage.setItem('basket', JSON.stringify(basket));
}

export const basketSlice = createSlice({
    name: 'basket',
    initialState,
    reducers: {
        addToBasket :(state,action)=>{
            const findProduct = products && products.find((product)=>product.id === action.payload.id);
            if(findProduct){
                //Onceden eklenen urun
            }else{
                state.products = [...state.products,action.payload];
                writeFromBasketToStorage(state.products);
            }
        }
    },
    extraReducers: (builder) => {

    }
})

export const { addToBasket} = basketSlice.actions
export default basketSlice.reducer