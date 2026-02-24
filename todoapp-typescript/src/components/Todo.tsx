import React from 'react'
import { IoIosRemoveCircleOutline } from "react-icons/io";
import { FaCheck } from "react-icons/fa";
import { FaRegEdit } from "react-icons/fa";
import type { TodoType } from '../types/types';
import { useDispatch } from 'react-redux';
import { removeTodo } from '../redux/todoSlice';

interface TodoProps {
    todoProps:TodoType
}
function Todo({todoProps}:TodoProps) {

    const {id,content} = todoProps;
    const dispatch = useDispatch()
    return (
        <div className='flex-row-space-between' style={{border:"1px solid lightgrey",padding:"12px 0px", marginTop:'25px', backgroundColor:'lightskyblue',borderRadius:'5px'}}>
            <div>{content}</div>
            <div>
                <IoIosRemoveCircleOutline className='icons' onClick={()=>{dispatch(removeTodo(id))}} />                
                <FaRegEdit className='icons'/>
            </div>
        </div>

    )
}

export default Todo