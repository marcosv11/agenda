import React from 'react'
import Task from './Task'

const Tasks = ({tasks, handleTaskClick, handleTasnkDeletion}) => {
  return (
    <>
      {tasks.map((task) => (
       <Task task={task} handleTaskClick={handleTaskClick} handleTasnkDeletion={handleTasnkDeletion} />
      ))}
     
    </>
  )
}

export default Tasks
