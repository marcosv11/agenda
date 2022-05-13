import React from 'react'
import './AddTask.css'
import Button from './Button'

const AddTask = ({handleTaskAddition}) => {
  const [inputData, setInputData] = React.useState(' ');

  const handleInputChances = (e) => {
    setInputData(e.target.value);
  }

  const handleAddTaskClick = () => {
    handleTaskAddition(inputData)
    setInputData(" ")
  }

  return (
    <div className="add-task-container">
      <input onChange={handleInputChances}
      value={inputData}
      className="add-task-input" type="text" />
      <div className="add-task-button-container">
         <Button onClick={handleAddTaskClick}>Adicionar</Button>
      </div>
     
    </div>
    
  )
}

export default AddTask
