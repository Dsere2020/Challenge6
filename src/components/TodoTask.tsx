import { Button } from '@material-ui/core';
import { useState } from 'react'
import styled from 'styled-components';
import { ITask } from './Interfaces';
import { CheckCircle } from '@material-ui/icons'
import DeleteOutlineIcon from '@mui/icons-material/DeleteOutline';
const Container = styled.div`
  width: 100%;
  display: flex;
  justify-content: space-between;
  margin-top: 36px;

`
const List = styled.div <{completed : boolean}>` 
    width: 100%;
    display: flex;
    justify-content: space-between;
    text-decoration: ${props=>props.completed ? "line-through" : "none"};

`
const Buttons = styled.div`
  display: flex;
  align-items: center;
  gap: 18px;
`
const ButtonDel = styled(DeleteOutlineIcon)`
  color: #FF4545;
  cursor: pointer;
`
const ButtonDone = styled(CheckCircle)<{completed : boolean}>`
  height: 20px;
  width: 20px;
  padding: 0;
  color: ${props=>props.completed? "#20EEB0" : "transparent"};
  border: 2px solid black;
  border-radius: 50%;
  border-color: ${props=>props.completed? "transparent": "#20EEB0"} ;
  cursor: pointer;
  box-sizing: border-box;
` 
const TodoTask = ({task, completeTask}) => {
  const [completed,setCompleted] = useState<boolean>(false);
  const handleComplete = ()=>{
    setCompleted(current=>!current)
  }  
  return (
    <Container>
      <List completed = {completed} >{task.taskName}</List>
      {task.taskName && 
      <Buttons>
        <ButtonDone completed={completed} onClick={handleComplete}>Done</ButtonDone>
        <ButtonDel onClick={()=>{completeTask(task.taskName)}}>X</ButtonDel>
      
      </Buttons> }
     
    </Container>
  )
}   

export default TodoTask;
