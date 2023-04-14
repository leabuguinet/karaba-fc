import React from 'react'
import styled from "styled-components"
import arrowDown from '../assets/icons/down-arrow.svg'
import { device } from "../global/Breakpoints";
import {useRef, useEffect} from 'react';

import { ReactComponent as ExtLink } from '../assets/icons/external-link.svg'

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
  padding: 0px 25px;
  //background-color: #00001acc;

  background-color: rgb(26 15 24 / 80%);
  -webkit-transition: all 0.35s ease;
  transition: all 0.5s ease-in-out;
  top: 87%;
  width: 100%;
  padding-right: 3rem;

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


const Album = ({data}) => {

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


  return (
/*     <AlbumSquare cover={data.cover} buy={data.buy}>
      
      <img src={data.cover}></img>

      <Info className="albumhover closed" ref={ref}>
        <h3>{data.title} </h3> 

        <div>
          <p><span>Enregistrement :</span> {data.recording} </p>
          <p><span>Mixage :</span> {data.mix} </p>
          <p><span>Masterisé par :</span> {data.mastering}</p>
          <p><span>Musique et textes :</span> {data.authors}</p>
          <p><a href={data.label1Link}>{data.label1}</a> <a href={data.label2Link}>{data.label2}</a></p>
          <p><a className="buybutton" href={data.buyLink}>Acheter <ExtLink /></a></p>
        </div>
      </Info>

    </AlbumSquare> */


    <AlbumSquare cover={data.cover} buy={data.buy}>
      
      <img src={data.cover}></img>

      <Info className="albumhover closed" ref={ref}>
        <h3>{data.title} </h3> 

        <div>
          <p><span>Enregistrement :</span> {data.recording} </p>
          <p><span>Mixage :</span> {data.mix} </p>
          <p><span>Masterisé par :</span> {data.mastering}</p>
          <p><span>Musique et textes :</span> {data.authors}</p>
          <p><a href={data.label1Link}>{data.label1}</a> <a href={data.label2Link}>{data.label2}</a></p>
          <p><a className="buybutton" href={data.buyLink}>Acheter <ExtLink /></a></p>
        </div>
      </Info>

    </AlbumSquare>
  )
}

export default Album