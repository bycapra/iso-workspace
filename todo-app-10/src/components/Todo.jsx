import React from 'react'
import { IoIosRemoveCircle } from "react-icons/io";
import { FaEdit } from "react-icons/fa";

function Todo() {
  return (
    <div style={{display:'flex',flexDirection:'row',alignItems:'center',justifyContent:'space-between',border:'1px solid lightgrey',padding:"10px",backgroundColor:'#d2d2f582',borderRadius:'5px'}}>
        <div>
            todo 1 
        </div>
        <div>
            <IoIosRemoveCircle className='todo-icons' />
            <FaEdit className='todo-icons' />
        </div>        
    </div>
  )
}

export default Todo
