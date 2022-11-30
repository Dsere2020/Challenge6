import React, { useState } from 'react'
import styled from 'styled-components'
import inpt from 'react-input-mask'
import tickIcon from '../icon-complete.png'
const Container = styled.div`
    height: 400px;
    width: 382px;
    margin-right: 227px;
    display: flex;
    flex-direction: column;
    justify-content: center;
    @media(max-width:1000px) {
    }
`
const Topic = styled.div`
    width: 100%;
    font-size: 12px;
    font-weight: 500;
    letter-spacing: 2px;
    text-transform: uppercase;

`
const Inp = styled(inpt)`
    margin-top: 9px;
    width: 100%;
    border: 1px solid #DFDEE0;
    border-radius: 8px;
    font-size: 18px;
    font-weight: 500;
    color:#21092F;
    padding-top: 11px;
    padding-left: 16px;
    padding-right: 16px;
    padding-bottom: 11px;
    :focus{
        outline: none;
    };
    @media(max-width:1000px) {
        width: 90%;

    }
`
const BottomTopic = styled.div`
    width: 100%;
    display: flex;
    justify-content: space-between;
    gap: 10px;
    margin-top: 26px;
    @media(max-width:1000px){
        width: 100%;
    }

`
const BottomTopicLeftRight = styled.div`
    flex:1;
    text-align: left;
    text-transform: uppercase;
    font-size: 12px;
    font-weight: 500;
    letter-spacing: 2px;
    @media(max-width:1000px){
        width: 100%;
    }
`
const BottomInps = styled.div`
    height: 45px;
    width: 416px;
    display: flex;
    justify-content: space-between;
    gap: 20px;
    margin-top: 10px;
    @media(max-width:1000px){
        width: 100%;
    }
`
const LeftInps = styled.div`
    display: flex;
    flex:1;
    justify-content: center;
    gap: 10px;
`
const LeftInpsInp = styled(inpt)`
    flex:1;
    width: 100%;
    border-radius: 8px;
    border: 1px solid #DFDEE0;
    :focus{
        outline: none;
    };
    padding: 16px 11px;
    font-size: 18px;
    text-align: center;
 
`
const RightInps = styled(inpt)`
    flex:1;
    width: 100%;
    border-radius: 8px;
    border: 1px solid #DFDEE0;
    :focus{
        outline: none;
    };
    padding: 16px 11px;
    font-size: 18px;
    text-align: left;
    
`
const Confirm = styled.button`
    height: 54px;
    width: 420PX;
    background-color: #21092F;
    border-radius: 8px;
    display: flex;
    justify-content: center;
    align-items: center;
    color: white;
    margin-top: 55px;
    font-weight: 500;
    cursor: pointer;
    font-size: 18px;
    @media(max-width:1000px){
        width: 328px;
    }
`
const ThankYouContainer = styled.div`
    width: 381px;
    display: flex;
    align-items: center;
    flex-direction: column;
    @media(max-width:1000px) {
        position: absolute;
        right: 4px;

    }
`
const TopPic = styled.div`
    background-image: url(${tickIcon});
    height: 80px;
    width: 80px;
    border-radius: 50%;
`
const MiddleTopic = styled.div`
    font-size: 28px;
    letter-spacing: 3.42222px;
    font-weight: 500;
    color: #21092F;
    text-align: center;
    margin-top: 35px;

`
const MiddleText = styled.div`
    font-size: 18px;
    text-align: center;
    font-weight: 500;
    color:#8F8694;
    margin-top: 16px;
    
`
const ContinueButton = styled.button`
    height: 54px;
    width: 381px;
    background-color: #21092F;
    border-radius: 8px;
    display: flex;
    justify-content: center;
    align-items: center;
    color: white;
    margin-top: 48px;
    font-weight: 500;
    cursor: pointer;
    font-size: 18px;
    @media(max-width:1000px){
        width: 328px;
    }
`
const Inputs = ({name,nameChange, numberChange, yearChange, month, active, monthChange,cvvChange, handleClick,numErr}) => {
 console.log(month)
  
  return (
        <Container>
            {active===0 ?(<div>
            <Topic>cardholder name</Topic>
            <Inp maxLength={20} value={name} onChange={nameChange} placeholder='e.g Jane Appleseed'></Inp>
            <Topic style={{marginTop:"26px"}}>card number</Topic>
            <Inp  maskChar={null}  onChange={numberChange} mask={"**** **** **** ****"} placeholder='eg.1234 5678 9123 0000'></Inp>
            <div style={{color:"red"}}>
                {numErr && <p>Your Input is Invalid</p>}
            </div>
            <BottomTopic>
                <BottomTopicLeftRight>exp.date (mm/yy)</BottomTopicLeftRight>
                <BottomTopicLeftRight>cvc</BottomTopicLeftRight>
            </BottomTopic>
            <BottomInps>
                <LeftInps>
                    <LeftInpsInp value={month} onChange={monthChange} placeholder='MM' maskChar={null} mask={"99"}/>
                    <LeftInpsInp onChange={yearChange} placeholder='YY' maskChar={null} mask={"99"}/>

                </LeftInps>
                <RightInps onChange={cvvChange} maskChar={null} placeholder='e.g. 123' mask={"999"}></RightInps>
            </BottomInps>
            <Confirm onClick={()=>{handleClick(1)}} >Confirm</Confirm>
            </div>) : 
            (
                <ThankYouContainer>
                    <TopPic></TopPic>
                    <MiddleTopic>THANK YOU!</MiddleTopic>
                    <MiddleText>We've added your card details</MiddleText>
                    <ContinueButton onClick={()=>{handleClick(1)}} >Continue</ContinueButton>
                </ThankYouContainer>
            )}
        </Container>

    )
}

export default Inputs