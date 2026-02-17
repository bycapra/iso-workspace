import { createAsyncThunk, createSlice } from '@reduxjs/toolkit'
import axios from 'axios'

const initialState = {
    products:[],
    selectedProduct : {},
    loading:false
}

const BASE_URL = 'https://fakestoreapi.com'

export const getAllProducts = createAsyncThunk(
  'getAllProducts',
   async ()=>{
     var response  = await axios.get(`${BASE_URL}/products`);
     return response.data
   }  
)

export const productSlice = createSlice({
    name:'product',
    initialState,
    reducers:{

    },
    extraReducers: (builder)=>{

        //yükleniyor.
        builder.addCase(getAllProducts.pending,(state)=>{
            state.loading=true;
        })
        builder.addCase(getAllProducts.fulfilled,(state,action)=>{
            state.products = action.payload;
            state.loading = false;
        });
    }
})

export const {  } = productSlice.actions

export default productSlice.reducer
