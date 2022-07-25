import React from 'react'
import styled from "styled-components";
import EventCard from './EventCard';
import data from './data/data.json';


const TourContainer = styled.div`
  height: 80vh;
  max-width: 70%;
  margin-top: 5rem;
`

const Title = styled.h1`
  color: #ffffff;
  text-transform: uppercase;
  margin-bottom: 5rem;
`
const EventCardsContainer = styled.div`
  display: flex;
  flex-direction: column;

`

const Tour = () => {
  return (
    <TourContainer>

      <Title>Tour</Title>

      <EventCardsContainer>

        { data.map( (data) => {
            return <EventCard data={data} key={data.id}/>
          })
        }
      </EventCardsContainer>

    </TourContainer>
  )
}

export default Tour