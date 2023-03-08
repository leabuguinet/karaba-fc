import React from 'react'
import styled from "styled-components"
import YoutubeEmbed from './YoutubeEmbed'

import dataAlbums from '../assets/data/data-albums.json'

import Album from './Album';
import { device } from "../global/Breakpoints";

import { ReactComponent as AmIcon } from '../assets/icons/icon-applemusic.svg';
import { ReactComponent as BcIcon } from '../assets/icons/icon-bandcamp.svg';
import { ReactComponent as SpoIcon } from '../assets/icons/icon-spotify.svg';
import { ReactComponent as DeeIcon } from '../assets/icons/icon-deezer.svg';

import { AnimatePresence, motion } from "framer-motion";

const KarabaClipUrl = "zPwLwzbASlk";


const MusicContainer = styled(motion.div)`
  flex: 1;
  display: flex;
  flex-direction: column;

`

const AlbumList = styled.div`
  display: flex;
  flex-direction: column;
  flex-wrap: wrap;
  justify-content: space-around;
  gap: 10px;
  align-items: center;
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

const Music = () => {


  return (

      <MusicContainer 
          as={motion.div}
          key="2"
          initial="initial"
          animate="in"
          exit={{ opacity: 0 }}
          variants={pageVariants}
          transition={pageTransition}
      >
        <h1 name="up">Musique</h1>

        <h2></h2>

          <AlbumList>
            { dataAlbums.map( (data) => {
              return <Album data={data} key={data.id}/>
              })
            }
          </AlbumList>

          <Icons>
            <a href='https://open.spotify.com/album/5iB0BwdGPSTp2HwSPpp3YD'><SpoIcon /></a>
            <a href='https://music.apple.com/fr/album/empty-rooms-ep/1594184709?uo=4'><AmIcon /></a>
            <a href='https://karabafc.bandcamp.com/album/empty-rooms'><BcIcon /></a>
            <a href='https://www.deezer.com/fr/album/271193162'><DeeIcon /></a>
          </Icons>

        <h2>Vidéos</h2>

        <YoutubeEmbed embedId={KarabaClipUrl}/>

      </MusicContainer>
  )
}

export default Music