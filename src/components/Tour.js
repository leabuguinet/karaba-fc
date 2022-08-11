import React, { useState } from 'react'
import styled from "styled-components"
import EventCard from './EventCard'
import data from '../assets/data/data.json'

import { AnimatePresence, motion } from "framer-motion";


const EventCardsContainer = styled.div`
  display: flex;
  flex-direction: column;
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


const Tour = ( { pageStyle } ) => {

  return (

    <motion.div
    key="1"
    style={pageStyle}
    initial="initial"
    animate="in"
    exit={{ opacity: 0 }}
    variants={pageVariants}
    transition={pageTransition}
    >

      <h1>Tour</h1>

        <EventCardsContainer>

          { data.map( (data) => {
              return <EventCard data={data} key={data.id}/>
            })
          }
        </EventCardsContainer>

    </motion.div>
  )
}

export default Tour