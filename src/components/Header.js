import React from "react";
import styled from "styled-components";
import * as Scroll from "react-scroll";

/* Images */

import karabalogo from "../assets/icons/KarabaFC-logo-white.png";
import headerBg from "../assets/images/alex-lerum.jpg";
import arrowDown from "../assets/icons/down-arrow.svg";

const HeaderDiv = styled.header`
  &.header {
    background-image: linear-gradient(0deg, rgba(0,0,26,1), rgba(0,0,0,0) 15%), url(${headerBg});
    background: -webkit-linear-gradient(90deg, rgba(0,0,26,1),rgba(0,0,0,0) 15%), url(${headerBg});
    background-repeat: no-repeat;
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
  max-width: 200px;
  width: 70%;
`;

const ButtonScroll = styled.div`
  position: absolute;
  bottom: 100px;
  background-image: url(${arrowDown});
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
      <ButtonScroll onClick={scrollToAnchor}></ButtonScroll>
    </HeaderDiv>
  );
}
