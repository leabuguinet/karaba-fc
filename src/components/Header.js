import React from "react";
import styled from "styled-components";
import * as Scroll from "react-scroll";

/* Images */

import karabalogo from "../assets/icons/KarabaFC-logo-white-light.png";
import headerBg from "../assets/images/bgpink.png";
import arrowDown from "../assets/icons/down-arrow.svg";
import singleCover from "../assets/images/RoundaboutArtworkSingle.001.jpeg";

const HeaderDiv = styled.header`
  &.header {
    //background-image: linear-gradient(0deg, rgba(0,0,26,1), rgba(0,0,0,0) 15%), url(${headerBg});
    //background: -webkit-linear-gradient(90deg, rgba(0,0,26,1),rgba(0,0,0,0) 15%), url(${headerBg});
    background: url(${headerBg});
    background-size: cover;
    background-position: bottom;
    //width: 100%;
    height: 100vh;
    display: flex;
    flex-direction: column;
    justify-content: center;
    align-items: center;
  }
`;

const Logo = styled.img`
  max-width: 20%;
  max-height: 20%;
  margin: 5vh 0;
  //position: absolute;

  @media screen and (max-height: 420px){
    max-width: 15%;
    max-height: 15%;
  }
  
`;

const SingleCover = styled.img`
  max-width: 50%;
  max-height: 50%;
  //margin-top:4rem;

  @media screen and (max-height: 420px){
    max-width: 50%;
    max-height: 50%;
  }


`;
const TitleSingle = styled.h1`
font-weight: 500;
`;

const ButtonScroll = styled.div`
  position: absolute;
  bottom: 5%;
  background-image: url(${arrowDown});
  background-repeat: no-repeat;
  width: 40px;
  height: 40px;
  cursor: pointer;
`;

export default function Header() {
  const scroller = Scroll.scroller;

  const scrollToAnchor = () => {
    scroller.scrollTo("anchor", {
      duration: 1500,
      delay: 100,
      smooth: true,
      //offset: -50
    });
  };

  return (
    <HeaderDiv id="header" className="header">
      <Logo src={karabalogo} alt="KARABA FC"></Logo>
      <SingleCover src={singleCover} alt="KARABA FC"></SingleCover>
      <TitleSingle>OUT NOW</TitleSingle>
      <ButtonScroll onClick={scrollToAnchor}></ButtonScroll>
    </HeaderDiv>
  );
}
