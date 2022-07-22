import React from 'react'
import styled from "styled-components";
import EventCard from './EventCard';
import data from './data/data.json';


const TourContainer = styled.div`
  height: 80vh;
  width: 70%;
`

const Tour = () => {
  return (
    <TourContainer>

    { data.map( (data) => {
        return <EventCard data={data} key={data.id}/>
      })
    }

    </TourContainer>
  )
}

export default Tour