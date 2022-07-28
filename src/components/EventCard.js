import React from 'react'
import styled, { StyledComponent } from 'styled-components'

import { ReactComponent as ExtLink } from '../assets/icons/external-link.svg';

const Card = styled.div`
    color: white;
    max-width: 500px;
    display: flex;
    margin-bottom: 4rem;
`

const DateInfo = styled.div`
    display: flex;
    flex-direction: column;
    color: white;
    //position: absolute;
    width: 100px;
    height: 100px;

    //Day
    span{
      position: relative;
      font-size: 2rem;
    }

    //Separator
    span:nth-child(2){
      font-size: 4rem;
      left: 25px;
      bottom: 20px;
      font-weight: 100;
      transform: rotate(15deg);
    }

    //Month
    span:last-child{
      left: 48px;
      bottom: 60px;
    }
`

const Description = styled.div`

  margin-left: 2rem;

  h2 {
    font-size: 1.5rem;
    font-weight: 400;
  }

  a {
    color: #ffffff;
  }

  svg {
    width: 20px;
    height: 20px;
  }
`

const EventCard = ({data}) => {

  return (
    <Card>
      <DateInfo>

        <span>{data.day}</span> <span>/</span> <span>{data.month}</span>

      </DateInfo>
      <Description>
        <h2>{data.city} • {data.location} {data.time && <span>• {data.time} </span>}</h2>
        {data.description && <p>{data.description}</p>}

        {data.eventlink && <a href={data.eventlink}><ExtLink /></a>}
      </Description>

    </Card>
  )
}

export default EventCard