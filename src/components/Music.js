import React from 'react'
import styled from "styled-components"
import YoutubeEmbed from './YoutubeEmbed'

import { device } from "../global/Breakpoints";

import { ReactComponent as YtIcon } from '../assets/icons/icon-youtube.svg';
import { ReactComponent as AmIcon } from '../assets/icons/icon-applemusic.svg';
import { ReactComponent as BcIcon } from '../assets/icons/icon-bandcamp.svg';
import { ReactComponent as SpoIcon } from '../assets/icons/icon-spotify.svg';

import { AnimatePresence, motion } from "framer-motion";

const KarabaClipUrl = "zPwLwzbASlk";

const MusicContainer = styled.div`
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

const Icons = styled.div`
  display: flex;
  justify-content: center;
  padding: 2rem 0 4rem 0;
  gap: 40px;

  svg:hover{
      transform: scale(1.08);
  }

  svg{
    transition: 1s ease-in-out;
  }

  @media ${device.mobileM} { 
    svg {
      width: 40px;
    }
  }
  
`

const Music = ( { pageStyle } ) => {


  return (

    <motion.div
    key="2"
    style={pageStyle}
    initial="initial"
    animate="in"
    exit={{ opacity: 0 }}
    variants={pageVariants}
    transition={pageTransition}
    >
      <h1>Music</h1>

      <h2>Streaming</h2>

      <p>L'EP <span>Empty Rooms</span> est disponible sur les plateformes de streaming suivantes :</p>

      <Icons>
        <a href='#'><SpoIcon /></a>
        <a href='#'><AmIcon /></a>
        <a href='#'><BcIcon /></a>
        <a href='#'><YtIcon /></a>
      </Icons>

      <h2>Vidéos</h2>
      <MusicContainer>
        
        <YoutubeEmbed embedId={KarabaClipUrl}/>

      </MusicContainer>

    </motion.div>
  )
}

export default Music