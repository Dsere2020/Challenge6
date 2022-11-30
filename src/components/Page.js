import React, { useState } from 'react'
import styled from 'styled-components'
import Cards from './Cards'
import background from '../bg-main-desktop.png'
import mobileBackground from '../bg-main-mobile.png'
import Inputs from './Inputs'
import { validCard } from './RegEx'

const Container  = styled.div`
  margin: 0;
  height: 100vh;
  width: 100vw;
  /* background: linear-gradient(163.95deg, #6348FE 4.74%, #610595 88.83%); */
  display: flex;
  overflow: hidden;
  @media(max-width:1000px){
    flex-direction: column;
    margin: 0;
    max-width: 100%;

    
}
`
const Left = styled.div`
  height: 100vh;
  flex:1;
  display: flex;
  position: relative;
  @media(max-width:1000px){
    display: none;
  }
 
`
const LeftMiniL = styled.div`
  height: 100%;
  z-index: -1;
  flex:50%;
  background-image : url(${background});
  background-size: cover;
  background-repeat: no-repeat;
  
` 
const LeftMiniR = styled.div`
  height: 100%;
  flex:50%;
  z-index: -1;
  @media(max-width:1000px){
    display: none;
    
}
`
const MainLeftDiv = styled.div`
  position: absolute;
  width: 670px;
  height: 540px;
  margin-top: 187px;
  margin-bottom: 187px;
  margin-left: 164px;
`


const Right = styled.div`
  height: 100vh;
  flex:1;
  display: flex;
  justify-content: center;
  align-items: center;
  @media(max-width:1000px){
    display: none;
}
`
//Phone////////////////////
const TopDiv = styled.div`
  display: none;
  @media(max-width:1000px){
    height: 320px;
    width: 100vw;
    display: flex;
    flex-direction: column;
    max-width: 100%;

  }
`
const TopTop = styled.div`
  @media(max-width:1000px){
    height: 240px;
    background-image: url(${mobileBackground});
    background-size: cover;
    background-repeat: no-repeat;
    max-width: 100%;

  }
`
const TopBottom = styled.div`
    height: 40px;
    
`
const BottomDiv = styled.div`
  display: none;
  @media(max-width:1000px) {
    z-index: +3;
    height: 100vh;
    margin-top: 48px;
    display: flex;
    padding: 32px;
    justify-content: flex-start;
  }
`
const Page = () => {
  const [name,setName] = useState();
    const nameChange =(e) =>{
        setName(e.target.value);
    };
  const[number,setNumber] = useState("0000000000000000");
  const[numErr, setNumErr] = useState(false);
  const numberChange =(e)=>{
    setNumber(e.target.value);
    console.log(e.target.value)
    if(!validCard.test(number)){
      setNumErr(true);

    }else {setNumErr(false)}
   
  };

  const[month,setMonth] = useState();
  const monthChange = (e)=>{
    setMonth(e.target.value);
  };
  const[year,setYear] = useState();
  const yearChange = (e)=>{
    setYear(e.target.value);
  };
  const [cvv,setCvv] = useState();
  const cvvChange = (e) =>{
    setCvv(e.target.value);
  };
  const[active,setActive] = useState(0);
  const handleClick= (n)=>{
    if(active===n){
      setActive(0)
    }else setActive(n)
  }

  console.log(active)
  return (
    <Container>
      <TopDiv>
        <TopTop>
        <Cards 
         name={name}
         number={number}
         month={month}
         year={year}
         cvv ={cvv}

      />
        </TopTop>
        <TopBottom></TopBottom>
      </TopDiv>
      <BottomDiv>
      <Inputs
          nameChange={nameChange}
          name={name}
          number={number}
          numberChange={numberChange}
          month ={month}
          monthChange={monthChange}
          year={year}
          yearChange={yearChange}
          cvv ={cvv}
          cvvChange = {cvvChange}
          active={active}
          handleClick={handleClick}
          numErr={numErr}
    />
      </BottomDiv>

        <Left>
        <MainLeftDiv>
          <Cards 
            name={name}
            number={number}
            month={month}
            year={year}
            cvv ={cvv}

          />
        </MainLeftDiv>
        <LeftMiniL></LeftMiniL>

        <LeftMiniR></LeftMiniR>
        </Left>
        <Right>
          <Inputs
            nameChange={nameChange}
            name={name}
            number={number}
            numberChange={numberChange}
            month ={month}
            monthChange={monthChange}
            year={year}
            yearChange={yearChange}
            cvv ={cvv}
            cvvChange = {cvvChange}
            active={active}
            handleClick={handleClick}
            numErr={numErr}
          />
        </Right>

    </Container>
    
  )
}

export default Page