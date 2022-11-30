import React from 'react'
import styled from 'styled-components'
import CardInp from 'react-input-mask'
import cardBackground from '../bg-card-front.png'
const Container = styled.div`
    height: 245px;
    width: 450px;
    background-image: url(${cardBackground});
    background-repeat: no-repeat;
    background-size: cover;
    padding-left: 32px;
    padding-right: 32px;
    padding-top: 28px;
    padding-bottom: 28px;
    box-sizing: border-box;
    @media(max-width:1000px) {
        height: 158px;
        width: 286px;
        background-size: contain;
        left: 18px;
        top: 122px;
        position: absolute;
        z-index: 2;
    }
`
const TopCircles = styled.div`
    position: relative;
    width:100px;
    box-sizing: border-box;
    height: 50px;
    display: flex;
    gap: 15px;
    @media(max-width:1000px){
        scale: 0.85;
        position: absolute;
        left: 19px;
        top: 18px;
        gap: 12px;
    }
`
const LeftCircle = styled.div`
    border-radius: 50%;
    background-color: white;
    height: 100%;
    width:50% ;
`
const RightCircle = styled.div`
    box-sizing: border-box;
    border-radius: 50%;
    border: 1px solid white;
    height: 22px ;
    width: 22px;
    margin-top: 13px;
`
const CardNumberDiv = styled.div`
    height: 50px;
    width: 100%;
    margin-top: 60px;
    @media(max-width:1000px) {
        height: 24px;
    }
`
const CardInpST = styled(CardInp)`
    height: 100%;
    width: 100%;
    font-size: 28px;
    font-weight: 500;
    letter-spacing: 3.42222px;
    text-align: center;
    color: white;
    background: none;
    border: none;
    :focus{
        outline: none;
    }
    @media(max-width:1000px) {
        font-size: 18px;
        letter-spacing: 2.6px;
    }

`
const CardBottomDiv = styled.div`
    width: 100%;
    height: 18px;
    margin-top: 25px;
    display: flex;
    justify-content: space-between;
    @media(max-width:1000px) {
        margin-top: 17px;
    }
`
const NamePart = styled.div`
    color: black;
    height: 100%;
    display: flex;
    justify-content: center;
    align-items: center;
    color: white;
    font-size: 14px;
    font-weight: 500;
    letter-spacing: 2px;
    text-transform: uppercase;
    @media(max-width:1000px) {
        font-size: 9px ;
        letter-spacing: 1.2px;
    }
`
const DatePlace = styled(CardInp)`
    height: 18px;
    width: 50px;
    position: relative;
    :focus{
        outline: none;
    }
    border: none;
    text-align: center;
    font-size: 14px;
    font-weight: 500;
    letter-spacing: 2px;
    color: white;
    background: none;
    @media(max-width:1000px) {
        font-size: 9px ;
        letter-spacing: 1.2px;
    }
`

const Card = ({name,number,month,year}) => {
  return (
    <Container>
        <TopCircles>
            <LeftCircle></LeftCircle>
            <RightCircle></RightCircle>
        </TopCircles>

        <CardNumberDiv>
           <CardInpST maskChar={null} value={number|| "0000000000000000"} mask="9999 9999 9999 9999"/>
        </CardNumberDiv>
        <CardBottomDiv>
            <NamePart>{name || "Jane Appleseed"}</NamePart>
            <DatePlace maskChar={null} value={month  + year || "0000"} mask={"99/99"} />

        </CardBottomDiv>
        </Container>
    )
}

export default Card