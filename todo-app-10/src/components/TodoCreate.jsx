import React, { use, useState } from "react";

function TodoCreate({ onCreateTodo }) {
  const [newTodo, setNewTodo] = useState("");

  const clearInput = ()=>{
    setNewTodo('');
  }

  const createTodo = () => {
      if(!newTodo)
        return;
      const request = {
        id:Math.floor(Math.random()*9999999),
        content:newTodo
      }
      onCreateTodo(request);
      clearInput();
  };

  const keydown = (e) =>{
    if(e.key === 'Enter')
        createTodo();    
  }

  return (
    <div className="todo-create">
      <input type="text" value={newTodo} onChange={(e)=>setNewTodo(e.target.value)} onKeyDown={(e)=>keydown(e)} placeholder="Alışverişe çık" className="todo-input" />
      <button className="todo-create-button" onClick={createTodo} >Todo ekle</button>
    </div>
  );
}

export default TodoCreate;
