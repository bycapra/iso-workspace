import React from 'react'
import { IoIosRemoveCircleOutline } from "react-icons/io";
import { FaCheck } from "react-icons/fa";
import { FaRegEdit } from "react-icons/fa";

function Todo() {
    return (
        <div className='flex-row-space-between' style={{border:"1px solid lightgrey",padding:"12px 0px", marginTop:'25px', backgroundColor:'lightskyblue',borderRadius:'5px'}}>
            <div>Ben bir todoyum!</div>
            <div>
                <IoIosRemoveCircleOutline className='icons' />                
                <FaRegEdit className='icons'/>
            </div>
        </div>

    )
}

export default Todo