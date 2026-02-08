import React, { use, useState } from "react";
import { IoIosRemoveCircle } from "react-icons/io";
import { FaEdit } from "react-icons/fa";
import { FaCheck } from "react-icons/fa";

function Todo({ todo, onRemoveTodo,onUpdateTodo }) {
  const [editable, setEditable] = useState(false);
  const [newTodo, setNewTodo] = useState(todo.content);

  const removeTodo = () => {
    onRemoveTodo(todo.id);
  };

  const updateTodo = () => {
    const request = {
      id:todo.id,
      content:newTodo
    }
    onUpdateTodo(request);
    setEditable(false);
  }

  return (
    <div
      style={{
        display: "flex",
        flexDirection: "row",
        alignItems: "center",
        justifyContent: "space-between",
        border: "1px solid lightgrey",
        padding: "10px",
        backgroundColor: "#d2d2f582",
        borderRadius: "5px",
        marginTop: "10px",
      }}
    >
      <div>
        {editable ? (
          <input
            className="todo-input"
            type="text"
            value={newTodo}
            onChange={(e) => {
              setNewTodo(e.target.value);
            }}
          />
        ) : (
          todo.content
        )}
      </div>
      <div>
        <IoIosRemoveCircle className="todo-icons" onClick={removeTodo} />
        {editable ? (
          <FaCheck className="todo-icons" onClick={updateTodo}/>
        ) : (
          <FaEdit
            className="todo-icons"
            onClick={(e) => {
              setEditable(!editable);
            }}
          />
        )}
      </div>
    </div>
  );
}

export default Todo;
