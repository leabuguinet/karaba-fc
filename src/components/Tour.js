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

{ dataDates.map( (data) => {
  let gigYear = data.year.toString();
  let gigMonth = parseInt(data.month.toString(), 10);
  let gigDay = parseInt(data.day.toString(), 10);

  if(gigYear === currentYear){

    if(gigMonth > currentMonth){

      return nextGig.push(data)
    } 
    
    if (gigMonth == currentMonth){

      if(gigDay >= currentDay){

        return nextGig.push(data)
      }
      return passedGig.push(data)
    }

  } else if (gigYear > currentYear){

      return nextGig.push(data)
  }

  return passedGig.push(data)
})
}

const Tour = () => {

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

      <h1>Dates passées</h1>

      <div>
        { passedGig.map( (data) => {
    
          return <EventCard data={data} key={data.id}/>

          })
        }
      </div>

    </EventCardsContainer>
  )
}

export default Tour