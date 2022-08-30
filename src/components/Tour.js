import React, { useState } from 'react'
import styled from "styled-components"
import EventCard from './EventCard'
import dataDates from '../assets/data/data-dates.json'

import { AnimatePresence, motion } from "framer-motion";

const EventCardsContainer = styled(motion.div)`
  flex: 1;
  display: flex;
  flex-direction: column;

   > div {
    display: flex;
    flex-direction: column;
    align-items: center;
  }

  h2 {
    text-align: center;
    margin-bottom: 1rem;
  }

  .previousGigs {
    display: flex;
    justify-content: center;
    align-items: center;
    gap: 15px;
    margin-bottom: 2rem;
  }

  
`
const ButtonMore = styled.button`
  width: 30px;
  height: 30px;
  border-radius: 50%;
  border: 2px white solid;
  background: none;
  position: relative;
  //margin: 0 auto;
  //margin-bottom: 3rem;
  transition: all 0.5s ease-in-out;

  &::before {
    content: '';
    position: absolute;
    width: 15px;
    height: 2px;
    background-color: white;
    left: 22.5%;
    bottom: 48%;
  }
  &::after {
    content: '';
    position: absolute;
    width: 15px;
    height: 2px;
    background-color: white;
    left: 22.5%;
    rotate: 90deg;
    transition: all 0.6s ease-in-out;
    bottom: 48%;
  }
 
  &.opened {
    &::after {
    content: '';
    rotate: 180deg;
  }
  }

  &:hover {
    transform: rotate(180deg);
  }
`


const pageVariants = {
  initial: {
    opacity: 0,
    y: 0,
    scale: 0.8
  },
  in: {
    opacity: 1,
    x: 0,
    scale: 1
  },
  out: {
    opacity: 0,
    x: "-0vw",
    scale: 1.2
  }
};

const pageTransition = {
  type: "tween",
  ease: "easeInOut",
  duration: 0.8
};

let currentYear = new Date().getFullYear().toString();
let currentMonth = (new Date().getMonth() + 1).toString();
let currentDay = new Date().getDate().toString();
let passedGig = [];
let nextGig = [];

// eslint-disable-next-line no-lone-blocks
{ dataDates.map( (data) => {
  let gigYear = data.year.toString();
  let gigMonth = parseInt(data.month.toString(), 10);
  let gigDay = parseInt(data.day.toString(), 10);

  if(gigYear === currentYear){

    if(gigMonth > currentMonth){

      return nextGig.push(data);
    } 
    
    if (gigMonth == currentMonth){

      if(gigDay >= currentDay){

        return nextGig.push(data);
      }
      return passedGig.push(data);
    }

  } else if (gigYear > currentYear){

      return nextGig.push(data);
  }

  return passedGig.push(data);
  })
}

passedGig.reverse();

const Tour = () => {

  const [isShown, setIsShown] = useState(false);

  const handleClick = event => {
    setIsShown(current => !current);
    console.log(event.target);
    event.target.classList.toggle('opened');
  };

  return (

    <EventCardsContainer 
      as={motion.div}
      key="1"
      initial="initial"
      animate="in"
      exit={{ opacity: 0 }}
      variants={pageVariants}
      transition={pageTransition}
    >

      <h1>Prochaines dates</h1>

      <div>
        { nextGig.map( (data) => {
    
          return <EventCard data={data} key={data.id}/>

          })
        }
      </div>

      <h2 className="previousGigs"><span>Dates précédentes</span> <ButtonMore onClick={(handleClick)} /></h2>

      
      {isShown && (
        <div>
          { passedGig.map((data) => {

            return <EventCard data={data} key={data.id}/>
            })
          }
        </div>
      )}

    </EventCardsContainer>
  )
}

export default Tour