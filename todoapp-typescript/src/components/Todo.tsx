import React, { useState } from 'react'
import { IoIosRemoveCircleOutline } from "react-icons/io";
import { FaCheck } from "react-icons/fa";
import { FaRegEdit } from "react-icons/fa";
import type { TodoType } from '../types/types';
import { useDispatch } from 'react-redux';
import { removeTodo, updateTodo } from '../redux/todoSlice';

interface TodoProps {
    todoProps:TodoType
}
function Todo({todoProps}:TodoProps) {   
 
    const {id,content} = todoProps;
    const dispatch = useDispatch();

     const [editable,setEditable]  = useState<boolean>(false);
    const [newTodo, setNewTodo] = useState<string>(content);

    //Update
    const handleUpdateTodo = () =>{
        const payload:TodoType = {
            id:id,
            content:newTodo
        }
        dispatch(updateTodo(payload));
        setEditable(false);
    }

    return (
        <div className='flex-row-space-between' style={{border:"1px solid lightgrey",padding:"12px 0px", marginTop:'25px', backgroundColor:'lightskyblue',borderRadius:'5px'}}>
            {editable ? <input type='text' value={newTodo} onChange={(e)=>setNewTodo(e.target.value)} style={{width:"450px",border:"none",borderBottom:"1px solid lightgrey", outline:"none"}}/> : <div>{content}</div>}
            <div>
                <IoIosRemoveCircleOutline className='icons' onClick={()=>{dispatch(removeTodo(id))}} />                
                {editable ? <FaCheck className='icons' onClick={handleUpdateTodo}/>: <FaRegEdit className='icons' onClick={()=>setEditable(true)}/> }
            </div>
        </div>

    )
}

export default Todo