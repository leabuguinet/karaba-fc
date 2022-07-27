import React from 'react'
import styled, { StyledComponent } from 'styled-components'

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

    span{
      position: relative;
      font-size: 2.5rem;
    }

    span:nth-child(2){
      font-size: 6rem;
      left: 20px;
      bottom: 30px;
      font-weight: 100;
      transform: rotate(15deg);
    }
    span:last-child{
      left: 48px;
      bottom: 80px;
    }
`

const Description = styled.div`

  margin-left: 2rem;

  h3{
    font-size: 1.5rem;
  }

  a{
    color: #ffffff;
  }
`

const EventCard = ({data}) => {

  return (
    <Card>
      <DateInfo>

        <span>{data.day}</span> <span>/</span> <span>{data.month}</span>

      </DateInfo>
      <Description>
        <h3>{data.city} • {data.location} {data.time && <span>• {data.time} </span>}</h3>
        {data.description && <p>{data.description}</p>}

        {data.eventlink && <a href={data.eventlink}>Lien vers l'évènement</a>}
      </Description>

    </Card>
  )
}

export default EventCard