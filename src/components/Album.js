import React from 'react'
import styled from "styled-components"
import arrowDown from '../assets/icons/down-arrow.svg'

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
  background-color: #00001acc;
  -webkit-transition: all 0.35s ease;
  transition: all 0.35s ease;
  top: 87%;

  h3 {
    margin-bottom: 2rem;
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
    background-image: -webkit-linear-gradient(top, transparent 0%, #00001acc 100%);
    background-image: linear-gradient(to bottom, transparent 0%, #00001acc 100%);
  }

  div {
    //display: none;
  }

  &:hover {
    top: 80px;
    h3::after {
      transform: rotate(180deg);
    }
  }

  a {
    text-decoration: none;
    color: white; 
    font-weight: 600;
  }
`



const Album = ({data}) => {

  return (
    <AlbumSquare cover={data.cover}>
      
      <img src={data.cover}></img>

      <Info>
        <h3>{data.title} </h3> 

        <div>
          <p><span>Enregistrement :</span> {data.recording} </p>
          <p><span>Mixage :</span> {data.mix} </p>
          <p><span>Masterisé par :</span> {data.mastering}</p>
          <p><span>Musique et textes :</span> {data.authors}</p>
          <a href={data.label1Link}>{data.label1}</a> - <a href={data.label2Link}>{data.label2}</a>
          <br />
          <a href={data.buyLink}>Acheter</a>
        </div>
      </Info>

    </AlbumSquare>
  )
}

export default Album