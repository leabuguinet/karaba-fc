import React from 'react'
import styled from "styled-components"
import { AnimatePresence, motion } from "framer-motion"

import KarabaK7 from '../assets/images/Karaba-F.C-k7.jpeg';
import KarabaTshirt from '../assets/images/Karaba-F.C-tshirt.jpeg';

const MerchandiseContainer = styled(motion.div)`
  width: 70%;
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


const Merchandise = () => {
  return (

    <MerchandiseContainer
      as={motion.div}
      key="2"
      initial="initial"
      animate="in"
      exit={{ opacity: 0 }}
      variants={pageVariants}
      transition={pageTransition}
    >
      <h1>Marchandise</h1>

      <div className='merchandise-list'>

        <div className='merchandise-item'>

          <img className='merchandise-img' src={KarabaK7}></img>
          <div className='merchandise-description'>
            <h2>Empty Rooms K7</h2>
            <p>2ème édition, orange transparent, 30 copies</p>
            <p>Édition Limitée</p>
            <p>
              Comprend l’écoute en continu illimitée de Empty Rooms au moyen de l’appli gratuite de Bandcamp, ainsi que le téléchargement de haute qualité aux formats MP3, FLAC et plus.
            </p>
            <a href="https://karabafc.bandcamp.com/album/empty-rooms">Acheter via BandCamp</a>
          </div>

        </div>

        <div className='merchandise-item'>

          <img className='merchandise-img' src={KarabaTshirt}></img>
          <div className='merchandise-description'>
            <h2>Karaba F.C t-shirt</h2>
            <p>Imprimé sur Stanley/Stella organic cotton</p>
            <a href="https://karabafc.bandcamp.com/album/empty-rooms">Acheter via BandCamp</a>
          </div>

        </div>

      </div>

    </MerchandiseContainer>
  )
}

export default Merchandise