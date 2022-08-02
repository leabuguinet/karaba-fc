import React, { useState, useCallback } from 'react'
import styled, { StyledComponent } from 'styled-components'
import { CSSTransitionGroup, Transition, CSSTransition } from 'react-transition-group'

import { ReactComponent as ExtLink } from '../assets/icons/external-link.svg';

const Card = styled.div`
    color: white;
    max-width: 500px;
    display: flex;
    align-items: center;
    margin-bottom: 5rem;
`

const DateInfo = styled.div`
    display: inline;
    //flex-direction: column;
    color: white;
    //position: absolute;
    width: auto;
    //height: 100px;

    //Day
    span{
      position: relative;
      font-size: 2rem;
      top: -23px;
    }

    //Separator
    span:nth-child(2){
      font-size: 4rem;
      left: 0px;
      top: 4px;
      font-weight: 100;
      transform: rotate(15deg);
    }

    //Month
    span:last-child{
      left: -1px;
      top: 13px;
    }
`

const Description = styled.div`

  margin-left: 2rem;

  h2 {
    font-size: 1.5rem;
    font-weight: 400;
    margin: 0;
  }

  a {
    color: #ffffff;
    fill: #ffffff;
    text-decoration: none;
  }

  svg {
    width: 25px;
    height: 25px;
  }
`

const EventCard = ({data}) => {


    const [animate, setAnimate] = useState(false)
  
    // Animate on click button and revert after 3000ms.
    const doAnimate = useCallback(() => {
      setAnimate(true)
      setTimeout(() => {
        setAnimate(false)
      }, 3000)
    }, [])


  return (

    <Transition in={animate} timeout={500}>
    <Card>
      <DateInfo>

        <span>{data.day}</span> <span>/</span> <span>{data.month}</span>

      </DateInfo>
      <Description>

        <h2>{data.city} • {data.location} {data.time && <span>• {data.time} </span>} {data.eventlink && <a href={data.eventlink}> • <ExtLink /></a>}</h2>
        
        {data.description && <p>{data.description}</p>}

      </Description>

    </Card>
    </Transition>
  )
}

export default EventCard