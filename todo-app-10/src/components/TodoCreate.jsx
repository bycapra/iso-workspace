import React, { use, useState } from "react";

function TodoCreate({ onCreateTodo }) {
  const [newTodo, setNewTodo] = useState("");

  const createTodo = () => {
      if(!newTodo)
        return;
      const request = {
        id:Math.floor(Math.random()*9999999),
        content:newTodo
      }
      onCreateTodo(request);
  };

  return (
    <div className="todo-create">
      <input type="text" value={newTodo} onChange={(e)=>setNewTodo(e.target.value)} placeholder="Alışverişe çık" className="todo-input" />
      <button className="todo-create-button" onClick={createTodo}>Todo ekle</button>
    </div>
  );
}

export default TodoCreate;
