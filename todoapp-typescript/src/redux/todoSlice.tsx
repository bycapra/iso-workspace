import { createSlice } from '@reduxjs/toolkit'
import type { PayloadAction } from '@reduxjs/toolkit'
import type { TodoInitialState, TodoType } from '../types/types';


const initialState:TodoInitialState = {
    todos:[]
}

export const todoSlice = createSlice({
    name:"todo",
    initialState,
    reducers:{
        createTodo: (state:TodoInitialState,action:PayloadAction<TodoType>) =>{
            state.todos = [...state.todos,action.payload];
        },
        removeTodo: (state:TodoInitialState,action:PayloadAction<number>)=>{
            if(confirm(action.payload + " nolu todo silinecek. Emin misiniz? "))
                state.todos = [...state.todos.filter((e:TodoType)=>{return e.id !== action.payload})]
        },
        updateTodo: (state:TodoInitialState,action:PayloadAction<TodoType>) =>{
            state.todos = [...state.todos.map((todo:TodoType)=>todo.id !== action.payload.id ? todo:action.payload)]
        }

    }
});

export const { createTodo,removeTodo,updateTodo } = todoSlice.actions
export default todoSlice.reducer