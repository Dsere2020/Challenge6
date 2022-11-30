import { ChangeEvent, useState } from 'react'
import styled from 'styled-components'
import background from './picture.png'
import { CheckCircle } from '@material-ui/icons'
import {ITask} from "./Interfaces"
import TodoTask from './TodoTask'

const Container = styled.div`
    height: 100vh;
    width: 100vw;
    display: flex;
    justify-content: center;
    align-items: center;
`
const Left = styled.div`
    flex:1;
    height: 100%;
    width: 100%;
    display: flex;
    justify-content: center;
    align-items: center;
    color:#007FDB ;
    font-size: 96px;
    font-weight: 700;
`
const Right = styled.div`
    flex:1;
    display: flex;
    justify-content: center;
    align-items: center;

`
const BigDiv = styled.div`
    height: 640px;
    width: 430px;
    display: flex;
    flex-direction: column;
    border-radius: 10px;
`
const Top = styled.div`
    flex:32%;
    border-radius: 10px 10px 0px 0px;
    background-image: url(${background});
    background-repeat: no-repeat;
    background-size: contain;
`
const DateDiv = styled.div`
  display: flex;
  width: 100%;
  justify-content: flex-end;
  padding-right: 28px;
  box-sizing: border-box;
  margin-top: 114px;
  gap: 10px;
  font-size: 18px;
  color: white;
  font-weight: 600;
`
const ClockDiv = styled.div`
  width: 100%;
  display: flex;
  justify-content: flex-end;
  padding-right: 28px;
  box-sizing: border-box;
  font-size: 48px;
  font-weight: 600;
  color: white;
`
const Bottom = styled.div`
    flex:68%;
    box-sizing: border-box;
    padding:23px 29px;
    background-color: lightcyan;
    display: flex;
    flex-direction: column;
`
const Input = styled.div`
  width: 100%;
  display: flex;
  gap: 10px;
  height: 50px;
`
const Inp = styled.input`
  flex:4;
  background-color: #EBEFF2;
  padding-left: 48px;
  color:#888888;
  font-size: 16px;
  font-weight: 400;
  border: none;
  border-radius: 5px;
  :focus{
    outline: none;
  }
`
const Add = styled.button`
  flex:1;
  background-color: #20EEB0;
  display: flex;
  justify-content: center;
  align-items: center;
  color: white;
  font-size: 40px;
  cursor: pointer;
  border-radius: 5px;
  transition: all 300ms ease;
  border: none;
  &:hover{
    background-color: #158162;
    outline: none;
  }
`
const Check = styled(CheckCircle)`
    height: 20px;
    width: 20px;
    position: absolute;
    margin-top: 14px;
    margin-left: 16px;
    color: #20EEB0;
`



const Page = () => {
  
  
  const today = new Date();
  const res = ()=>{
    return <div>{today.getDay()===1 ? "Mon" : ""}</div>;
  }

  const [task,setTask] = useState<string>("");
  const [todoList,setTodoList] = useState([]);

  const handleChange = (event: ChangeEvent<HTMLInputElement>): void=>{
    setTask(event.target.value);
  }
  const addTask =(): void=>{
    const newTask = {taskName:task};
     setTodoList([...todoList, newTask]);
     setTask('');
  };
  const completeTask = (taskNameToDelete: string)=>{
    setTodoList(todoList.filter((task)=>{
      return task.taskName !== taskNameToDelete;
    }))
  };
 
  return (
    <Container>
      <Left>Todo</Left>
      <Right>
        <BigDiv>
          <Top>
          <DateDiv>
           {res()} {new Date().toLocaleString("en-US", { day : '2-digit'})}

          </DateDiv>
            <ClockDiv >
            {new Date().toLocaleTimeString("en-US", {
              hour: '2-digit',
              minute: '2-digit'
            })}
            </ClockDiv>

          </Top>
          <Bottom>
            <Input>
              <Check/>
              <Inp 
                value={task}
                onChange={handleChange}
                placeholder='Write something here'></Inp>

              <Add onClick={addTask}>+</Add>
            </Input> 
          <div>
          {todoList.map((task, key)=>{
             return <TodoTask completeTask={completeTask} task={task} key={key}/>             
            })}
          </div>
          </Bottom>
           
        </BigDiv>
        </Right>

    </Container>

  )
}

export default Page
