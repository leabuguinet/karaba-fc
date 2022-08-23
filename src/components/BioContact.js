import React from 'react'
import styled from "styled-components"
import { AnimatePresence, motion } from "framer-motion";

import KarabaFCGig from '../assets/images/Karaba-F.C-gig.jpg';

const BioContactContainer = styled(motion.div)`
  width: 70%;
  display: flex;
  flex-direction: column;

  .bio-content {
    display: flex;
    flex-direction: row;
    flex-wrap: wrap;
    justify-content: center;
    margin-bottom: 3rem;

    img {
      width: 40%;
      object-fit: contain;
      min-width: 350px;
    }

    div {
      width: 60%;
      //margin: 0 2rem;
      p {
        padding: 0 3rem;
      }
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


const BioContact = () => {
  return (

    <BioContactContainer
      as={motion.div}
      key="2"
      initial="initial"
      animate="in"
      exit={{ opacity: 0 }}
      variants={pageVariants}
      transition={pageTransition}
    >

      <h1>Bio</h1>

      <div className='bio-content'>
      
        <img src={KarabaFCGig}></img>
        <div>
          <p>
            L'énergie du post-hardcore, la légèreté de l'indie rock des années 2000, la douce mélancolie du rock alternatif 90s : c'est ainsi qu'on pourrait tenter de résumer Karaba FC, jeune quatuor parisien au sens aigu du timing puisque formé fin 2019, pile à l'heure pour le grand nulle part musical de 2020. Peu importe : c'est entre les confinements que se construira leur premier EP Empty Rooms, mis en boîte début 2021 au studio Firgun de Fontainebleau et masterisé par Serge Morattel (Ventura, Untitled with drums). Et si vous les avez sûrement déjà croisés dans la fosse des salles de Paris ou d'ailleurs, c'est maintenant sur la scène qu'il faudra vous habituer à retrouver Karaba FC.
          </p>
        </div>

      </div>

      <h1>Contact</h1>

      <div className='contact-content'>
        <p>Contactez Karaba F.C à</p>
      </div>

    </BioContactContainer>

  )
}

export default BioContact