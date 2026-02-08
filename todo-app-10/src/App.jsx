import { useState } from "react";
import "./App.css";
import TodoCreate from "./components/TodoCreate";
import TodoList from "./components/TodoList";

function App() {
  const [todos, setTodos] = useState([]);

  //todo ekle
  const createTodo = (newTodo) => {
    setTodos([...todos, newTodo]);
  };

  //sil
  const removeTodo = (todoId)=>{
    if(!todoId) return;
    const filteredTodos = todos.filter((e)=>{return e.id !== todoId});
    setTodos([...filteredTodos])
  }

  //guncelle
  const updateTodo = (newTodo) => {
    const updatedTodos = todos.map((e)=>{
      if(e.id !==newTodo.id)
          return e;
      else
        return newTodo;
    });
    setTodos([...updatedTodos]);
  }

  console.log("dizi:" + JSON.stringify(todos));

  return (
    <div className="App">
      <div className="main">
        <TodoCreate onCreateTodo = {createTodo} />
        <TodoList todos={todos} onRemoveTodo={removeTodo} onUpdateTodo={updateTodo} />
      </div>
    </div>
  );
}

export default App;
