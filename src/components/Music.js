import React from 'react'
import styled from "styled-components"
import YoutubeEmbed from './YoutubeEmbed'

import { ReactComponent as YtIcon } from '../assets/icons/icon-youtube.svg';
import { ReactComponent as AmIcon } from '../assets/icons/icon-applemusic.svg';
import { ReactComponent as BcIcon } from '../assets/icons/icon-bandcamp.svg';
import { ReactComponent as SpoIcon } from '../assets/icons/icon-spotify.svg';

import { AnimatePresence, motion } from "framer-motion";

const KarabaClipUrl = "zPwLwzbASlk"


const pageVariants = {
  initial: {
    opacity: 0,
    y: 200,
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


const Music = ( { pageStyle } ) => {


  return (

    <motion.div
    key="2"
    style={pageStyle}
    className="row"
    initial="initial"
    animate={{ opacity: 1 }}
    exit={{ opacity: 0 }}
    variants={pageVariants}
    transition={pageTransition}
    >

 
      <h1>Music</h1>
      <YoutubeEmbed embedId={KarabaClipUrl}/>



    </motion.div>
  )
}

export default Music