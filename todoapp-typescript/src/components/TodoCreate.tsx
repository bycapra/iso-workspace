import React from 'react'

function TodoCreate() {
  return (
    <div className='todo-create'>
        <input type='text' className='todo-input' placeholder="Bir şeyler yazın.. "/>
        <button className='todo-create-button'>Oluştur</button>
    </div>
  )
}

export default TodoCreate