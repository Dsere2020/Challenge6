import React from 'react'
import styled from 'styled-components'
import Card from './Card'
import Card2 from './Card2'

const Container = styled.div`
    height: 100%;
    width: 100%;
    display: flex;
    flex-direction: column;
    gap: 40px;
    position: absolute;
    @media(max-width:1000px) {
        max-width: 100%;
    }
`
const TopCard = styled.div`
        flex: 1;
`
const BottomCard = styled.div`
        flex: 1;

`
const Cards = ({name,number,month,year, cvv}) => {
    
  return (
    <Container>
        <TopCard 
        name={name}
        number={number}
        month={month}
        year={year}
        >
            <Card 
            name={name}
            number={number}
            month={month}
            year={year}
            
            />
        </TopCard>
        <BottomCard cvv={cvv}>
            <Card2 cvv={cvv}/>
        </BottomCard>
    </Container>
    )
}

export default Cards