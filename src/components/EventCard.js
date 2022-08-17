import React, { useState, useCallback } from 'react'
import styled, { StyledComponent } from 'styled-components'
import { CSSTransitionGroup, Transition, CSSTransition } from 'react-transition-group'
import { device } from "../global/Breakpoints";

import { ReactComponent as ExtLink } from '../assets/icons/external-link.svg'

const Card = styled.div`
    color: white;
    max-width: 500px;

    display: flex;
    align-items: center;
    margin-bottom: 3rem;
    padding: 30px;

    border-radius: 20px;
    backdrop-filter: blur(20px);
    -webkit-backdrop-filter: blur(20px);
    box-shadow: inset -1px 0px 2px rgba(0,27,92,0.35),
                inset 0px 1px 2px rgba(0,27,92,0.35),
                inset 0px 0px 0px 1px rgba(255, 255, 255, 0.03);
    background: rgba(255, 255, 255, 0.05);
    transition: background-color ease-in-out 0.5s;

    @media ${device.mobileL} { 
      padding: 20px;
    }

    &::before{
      z-index: -1;
      position: absolute;
      content: "";
      top: 0;
      right: 0;
      bottom: 0;
      left: 0;
      border-radius: 20px;
      background: rgb(0,0,26);
      background: linear-gradient(130deg, rgba(0,0,26,0) 0%, rgba(0,27,92,0) 42%, rgba(0,51,153,0.6012780112044818) 100%);
      opacity: 0;
      transition: opacity 0.4s linear;
    }

    &:hover::before{
      opacity: 0.5;
    }
`

const DateInfo = styled.div`
    display: inline;
    color: white;
    width: auto;
    min-width: 60px;

    //Day
    span{
      position: relative;
      font-size: 2rem;
      font-weight: 600;
      top: -23px;
      left: 10px;
      @media ${device.mobileXL} { 
        top: 0;
        left: 0;
        font-weight: 400;
      }
      font-size: clamp(1rem, 0.8333333333333334rem + 0.8333333333333334vw, 1.5rem);
    }

    //Separator
    span:nth-child(2){
      //font-size: 4rem;
      left: 0px;
      top: 4px;
      font-weight: 100;
      transform: rotate(15deg);
      font-size: 4rem;
      @media ${device.mobileXL} { 
        top: 2px;
        left: 0;
        font-size: 1.5rem;
      }
    }

    //Month
    span:last-child{
      left: -10px;
      top: 13px;

      @media ${device.mobileXL} { 
        top: 0;
        left: 0;
      }
    }
`

const Description = styled.div`

  margin-left: 2rem;

  h2 {
    font-weight: 400;
    margin: 0;
  }

  a {
    color: #ffffff;
    fill: #ffffff;
    text-decoration: none;

    &:hover svg .link-arrow {
      transform: translate(30px, -30px);
    }
  }

  svg {
    width: 20px;
    height: 20px;
    @media ${device.mobileXL} { 
      width: 15px;
      height: 15px;
    }

    & .link-arrow {
      transition:  ease 0.5s ;
    }
  }
`

const EventCard = ({data}) => {

  return (

    <Card>
      <DateInfo>

        <span>{data.day}</span> <span>/</span> <span>{data.month}</span>

      </DateInfo>
      <Description>

        <h2>{data.city} • {data.location} {data.time && <span>• {data.time} </span>} {data.eventlink && <a href={data.eventlink}> • <ExtLink /></a>}</h2>
        
        {data.description && <p>{data.description}</p>}

      </Description>

    </Card>

  )
}

export default EventCard