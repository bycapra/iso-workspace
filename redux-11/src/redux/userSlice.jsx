import { createAsyncThunk, createSlice } from "@reduxjs/toolkit";
import axios from 'axios'

const initialState = {
  users: [],
  loading: false,
};

export const getAllUsers = createAsyncThunk('users',async ()=>{
    const response = await axios.get('https://jsonplaceholder.typicode.com/users');    
    return response.data;    
})

export const userSlice = createSlice({
  name: "user",
  initialState,
  reducers: {
    //Http istekleri yoksa burada kullan
  },
  extraReducers: (builder) => {
    //Http istekleri varsa burayı kullan
    //http isteklerinden dönen veriyi state e  doldurmak için burayı kullan
    //state bizim statimiz  (users) action ise parametredeki fonksiyon calıstıgında dönen sonucu alır. (payload = response.data)
    builder.addCase(getAllUsers.fulfilled,(state,action)=>{ 
        state.users=action.payload
    })

  },
});

//içeride bir sey yapmıyoruz. Bu yuzden burada fonksiyon yollamıyoruz (http istekleri için buradan yollanmaz)
export const {} = userSlice.actions;
export default userSlice.reducer;
