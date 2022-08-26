import React, { useState, useCallback } from 'react'
import styled, { StyledComponent } from 'styled-components'
import { CSSTransitionGroup, Transition, CSSTransition } from 'react-transition-group'
import { device } from "../global/Breakpoints";

import { ReactComponent as ExtLink } from '../assets/icons/external-link.svg'

const Card = styled.div`
    color: white;
    width: 60%;
    //min-width: 400px;

    display: flex;
    align-items: center;
    margin-bottom: 3rem;
    padding: 30px;

    border-radius: 20px;
    backdrop-filter: blur(20px);
    -webkit-backdrop-filter: blur(20px);
    /* box-shadow: inset -1px 0px 2px rgba(0,27,92,0.35),
                inset 0px 1px 2px rgba(0,27,92,0.35),
                inset 0px 0px 0px 1px rgba(255, 255, 255, 0.03); */
    background: rgba(255, 255, 255, 0.05);
    transition: background-color ease-in-out 0.5s;
    
    @media ${device.tabletL} { 
      width: 90%;
    }
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
    display: flex;
    flex-direction: column;
    align-items: center;
    color: white;
    width: auto;
    min-width: 90px;


    //Day
    span{
      line-height: 1.2;
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

    span:last-child{
      color: #81aecb;
      letter-spacing: 2px
    }

`

const Description = styled.div`

  margin-left: 2rem;

  h2 {
    margin: 0;

    @media ${device.mobileL} {

      display: flex;
      flex-wrap: wrap;
      align-items: baseline;
      flex-direction: column;

      span {
        margin-top: 10px;
      }
      span.point {
        display: none;
      }
    }

    span {
      margin-right: 4px;
      font-weight: 400;
        
      .location {
          font-size: 0.8rem;
          font-size: clamp(0.8rem, 0.9333333333333333rem + 1.3333333333333335vw, 1.5rem);
      }

    }
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

        <span>{data.day}/{data.month}</span>
        <span>{data.year}</span>

      </DateInfo>
      <Description>

        <h2>
          <span>{data.city}</span><span className='point'>•</span>
          <span className="location">{data.location}</span><span className='point'>•</span>
          <span>{data.eventlink && <a href={data.eventlink}>   <ExtLink /></a>}</span>
          
        </h2>
        
        {data.description && <p>{data.description}</p>}

      </Description>

    </Card>

  )
}

export default EventCard