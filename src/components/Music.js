import React from 'react'
import {useRef, useEffect} from 'react';

import styled from "styled-components"
import YoutubeEmbed from './YoutubeEmbed'

//import dataAlbums from '../assets/data/data-albums.json'

//import Album from './Album';
import { device } from "../global/Breakpoints";
import arrowDown from '../assets/icons/down-arrow.svg'

import { ReactComponent as AmIcon } from '../assets/icons/icon-applemusic.svg';
import { ReactComponent as BcIcon } from '../assets/icons/icon-bandcamp.svg';
import { ReactComponent as SpoIcon } from '../assets/icons/icon-spotify.svg';
import { ReactComponent as DeeIcon } from '../assets/icons/icon-deezer.svg';

import { AnimatePresence, motion } from "framer-motion";
import { ReactComponent as ExtLink } from '../assets/icons/external-link.svg';

import emptyRooms from "../assets/images/Karaba-F.C-Empty-Rooms_Cover_Discogs.jpg";
import aprilDancer from "../assets/images/aprildancer-artwork.jpeg";

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

const AlbumSquare = styled.div`
  background-size: contain;
  overflow: hidden;
  position: relative;
  margin-bottom: 2rem;

  img {
    width: 100%;
    height: 100%;
    max-width: 440px;
  }
`
const Info = styled.div`
  position: absolute;
  bottom: 0px;
  //width: 100%;
  //padding: 0px 25px;
  //background-color: #00001acc;

  background-color: rgb(26 15 24 / 80%);
  -webkit-transition: all 0.35s ease;
  transition: all 0.5s ease-in-out;
  top: 87%;
  width: 100%;
  //padding-right: 3rem;

  h3 {
    margin-bottom: 2rem;
    text-transform: uppercase;
    font-weight: 400;
  }

  h3::after {
    content: '';
    background: url(${arrowDown});
    width: 15px;
    height: 15px;
    position: absolute;
    margin-left: 10px;
  }

  h3, p {
    padding: 0 1.5rem;
  }

  &:before {
    position: absolute;
    content: '';
    z-index: 2;
    bottom: 100%;
    left: 0;
    width: 100%;
    height: 80px;
    //background-image: -webkit-linear-gradient(top, transparent 0%, #00001acc 100%);
    //background-image: linear-gradient(to bottom, transparent 0%, #00001acc 100%);
    background-image: -webkit-linear-gradient(top, transparent 0%, #1a0f18cc 100%);
    background-image: linear-gradient(to bottom, transparent 0%, #1a0f18cc 100%);
  }

  //If the user uses a touch 
  &.closed{
    top: 87%
  }
  @media (pointer: coarse) {
    &.active {
      top: 80px;
      h3::after {
        transform: rotate(180deg);
      }
      @media ${device.mobileXL} {
        top: 55px;
      }
      @media ${device.mobileL} { 
        top: 0;
      }
    }  
  } 

  //If the user uses a mouse 
  @media (hover: hover) and (pointer: fine) {
    &:hover{
      top: 80px;
      h3::after {
        transform: rotate(180deg);
      }
    }
  }

  p {
    @media ${device.mobileM} { 
      line-height: 1;
    }
  }

  a {
    text-decoration: none;
    color: white; 
    font-weight: 600;
  }
  
  p:last-child{
    text-align: center;
  }

  a.buybutton {

    text-transform: uppercase;
    font-weight: 400;
    font-size: 1rem;
    font-size: clamp(1rem, 0.9333333333333333rem + 1.3333333333333335vw, 1rem);

    svg {
    fill: #ffffff;
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

  //ALBUM HOVER 
    const ref = useRef(null);

    useEffect(() => {
      const handleClick = event => {
        element.classList.toggle('active')
        element.classList.toggle('closed')
      };

      const element = ref.current;

      element.addEventListener('click', handleClick);

      return () => {
        element.removeEventListener('click', handleClick);
      };
    }, []);


    const ref2 = useRef(null);

    useEffect(() => {
      const handleClick = event => {
        element.classList.toggle('active')
        element.classList.toggle('closed')
      };

      const element = ref2.current;

      element.addEventListener('click', handleClick);

      return () => {
        element.removeEventListener('click', handleClick);
      };
    }, []);

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

        <h2>EP</h2>

{/*           <AlbumList>
            { dataAlbums.map( (data) => {
              return <Album data={data} key={data.id}/>
              })
            }
          </AlbumList> */}

          <AlbumList>

          <AlbumSquare>
            
            <img alt="" src={aprilDancer} />

            <Info className="albumhover closed" ref={ref2}>
              <h3>APRIL DANCER</h3> 

              <div>
                <p><span>Enregistrement, mixage et mastering : </span>Serge Morattel  </p>
                <p><span>Musique et textes : </span>KARABA F.C. </p>
                <p></p>
                <p><a className="buybutton" href="https://karabafc.bandcamp.com/album/april-dancer">Acheter <ExtLink /></a></p>
              </div>
            </Info>

          </AlbumSquare>

          <AlbumSquare>
            
            <img alt="" src={emptyRooms} />

            <Info className="albumhover closed" ref={ref}>
              <h3>EMPTY ROOMS</h3> 

              <div>
                <p><span>Enregistrement :</span> Studio Firgun, Charles de Montalembert, Tom Fonty  </p>
                <p><span>Mixage : </span>Charles de Montalembert </p>
                <p><span>Masterisé par : </span>Serge Morattel à Rec Studio </p>
                <p><span>Musique et textes : </span>KARABA F.C. </p>
                <p></p>
                <p><a className="buybutton" href="https://karabafc.bandcamp.com/album/empty-rooms">Acheter <ExtLink /></a></p>
              </div>
            </Info>

          </AlbumSquare>

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