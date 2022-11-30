import React from 'react'
import cvvStyle from 'react-input-mask'
import styled from 'styled-components'
import cardBackgroundBack from "../bg-card-back.png"


const Container = styled.div`
    width: 450px;
    height: 245px;
    background-image: url(${cardBackgroundBack});
    background-repeat: no-repeat;
    background-size: cover;
    position: absolute;
    right: 120px;
    bottom: 0;
    @media(max-width:1000px) {
      top: 32px;
      right: 16px;
      height: 158px;
      width: 286px;
      background-size: contain;
      max-width: 100%;

    }
`
const Cvv = styled.div`
  position: absolute;
  right: 57px;
  top: 110px;
  letter-spacing: 2px;
  font-size: 14px;
  font-weight: 500;
  text-transform: uppercase;
  text-align: right;
  @media(max-width:1000px) {
    top: 68px;
    right: 37px;
  }
`
const Card2 = ({cvv}) => {
  return (
    <Container>
      <Cvv>{cvv || "000"}</Cvv>
    </Container>
  )
}

export default Card2