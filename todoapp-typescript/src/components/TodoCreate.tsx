import React, { useState } from 'react'
import { useDispatch } from 'react-redux'
import { createTodo } from '../redux/todoSlice';
import type { TodoType } from '../types/types';

function TodoCreate() {

  const [newTodo,setNewTodo] = useState<string>("");
  const dispatch = useDispatch();

  const handleCreateTodo = () => {
    if(!newTodo.trim().length){
      alert("Lütfen bir todo giriniz!");
      return;
    }

    const payload:TodoType = {
      id: Math.floor(Math.random()*99999999),
      content:newTodo
    }

    dispatch(createTodo(payload));

    //İçeriği temizle
    setNewTodo("");
  }

  return (
    <div className='todo-create'>
        <input type='text' className='todo-input' value={newTodo} onChange={(e:React.ChangeEvent<HTMLInputElement, HTMLInputElement>)=>{setNewTodo(e.target.value)}} placeholder="Bir şeyler yazın.. "/>
        <button className='todo-create-button' onClick={handleCreateTodo}>Oluştur</button>
    </div>
  )
}

export default TodoCreate