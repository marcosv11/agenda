import React from 'react'
import Button from './Button'
import { useParams } from 'react-router';
import { useHistory } from 'react-router-dom'

import './TaskDetails.css'



const TaskDetails = () => {

   

  const params = useParams();
  const history = useHistory();

  const handleBackClick = () => {
    history.goBack();
  }
  

  return (
    <>
        <div className="back-button-container">
          <Button onClick={handleBackClick}>Voltar</Button>
        </div>
        <div className="task-details-container">
          <h2>{params.taskTitle}</h2>
          <p>
            lorem ipsum dolor sit amet,lorem ipsum dolor sit amet,lorem ipsum dolor sit amet,lorem ipsum dolor sit amet,
          </p>
        </div>
    </>
  )
}

export default TaskDetails
