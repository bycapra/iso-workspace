import React from 'react'

function TodoCreate() {
  return (
    <div className='todo-create'>
      <input type='text' placeholder='Alışverişe çık' className='todo-input'/>
      <button className='todo-create-button'>Todo ekle</button>
    </div>
  )
}

export default TodoCreate
