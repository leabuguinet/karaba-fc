import React from 'react'
import styled from "styled-components"
import { AnimatePresence, motion } from "framer-motion";

import KarabaFCGig from '../assets/images/Karaba-F.C-gig.jpg';

import bonusFile from "../assets/images/Karaba-FC-BONUS.zip";

const ContactContainer = styled(motion.div)`
  flex: 1;
  display: flex;
  flex-direction: column;

  .contact-content {
    display: flex;
    flex-direction: column;
    justify-content: center;
    align-items: center;
    margin-bottom: 3rem;

    div {
      width: 80%;
      display: flex;
      flex-direction: column;
      
      span {
        color: #81aecb;
        font-weight: 400;
        font-size: 0.7rem;
        margin-top: 5px;
      }

      img {
        width: 100%;
      }
    }

    a {
      color: #ffffff;
      margin-top: 2rem;

      padding: 1rem;
      border: #ffffff solid 1px;
      border-radius: 5px;
    }

    

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


const Contact = () => {
  return (

    <ContactContainer
      as={motion.div}
      key="2"
      initial="initial"
      animate="in"
      exit={{ opacity: 0 }}
      variants={pageVariants}
      transition={pageTransition}
    >

      <h1 name="up">BONUS</h1>

      

      <div className='contact-content'>
      
        <h2>Merci pour votre soutien ♡</h2>
     

        <a href={bonusFile} download={bonusFile}>Télécharger</a>

      </div>


    </ContactContainer>

  )
}

export default Contact