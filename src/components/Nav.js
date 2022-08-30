import React from 'react';
import styled from "styled-components";
import { NavLink } from 'react-router-dom';
import * as Scroll from 'react-scroll';
import { device } from '../global/Breakpoints'

import waterDropSvg from '../assets/icons/water-drop.svg'
import karabalogo from '../assets/icons/KarabaFC-logo-white.png';

const NavBarContainer = styled.nav`
  height: 600px;
  width: 30%;
  position: sticky;
  top: 10px;

  @media ${device.tabletL} { 
    position: relative;
    height: auto;
    display: flex;
    justify-content: space-between;
    align-items: center;
    width: 100%;
  }

  //PHONE
  @media ${device.mobileL} { 
    flex-direction: row;
    justify-content: space-evenly;
    z-index: 20;
    position: sticky;
    background-image: linear-gradient(180deg, rgba(0,0,26,1) 0%, rgba(0,0,26,0.8421052631578947) 64%, rgba(0,0,26,0.6666666666666667) 83%, rgba(0,0,26,0) 100%);
    top: 0;
    bottom: 0;
    padding-top: 10px;
  }
`
const NavBar = styled.div`
  display: flex;
  flex-direction: column;
  justify-content: center;
  position: relative;
  padding: 2rem;

  @media ${device.tabletL} { 
    flex-direction: row;
    justify-content: space-between;
    gap: 10px;
    width: 70%;
  }

  @media ${device.mobileL} { 
    padding: 0rem;
    align-items: center;
  }

  &::after{
    content: '';
    width: 1px;
    height: 300px;
    color: white;
    position: absolute;
    background: white;
    left: 225px;

    //PHONE
    @media ${device.tabletL} { 
    display: none;
    }
  }
`
const NavLinkStyled = styled(NavLink)`
  color: #ffffff;
  text-decoration: none;
  margin: 1rem 2rem;
  -webkit-transition: all 0.2s ease-in-out;
  transition: all 0.2s ease-in-out;
  font-size: 1.2rem;
  font-family: 'League Spartan', sans-serif;
  font-weight: 600;
  position: relative;
  width: 135px;

  @media ${device.tabletL} { 
    width: auto;
    margin: 0rem;
    font-size: 1rem;
  }

  //PHONE

  @media ${device.mobileXL} { 
    text-align: center;
    font-size: 0.8rem;
  }
  @media ${device.mobileL} { 
    text-align: center;
    font-size: 0.8rem;
  }


  //When the page is active
  &[class*="active"] {

    &::after{
      background-image: url(${waterDropSvg});
      width: 15px; 
      height: 15px;
      background-size: contain;
      background-repeat: none;
      position: absolute;
      right: 150px;
      bottom: 3px;
      content:'';

      
      @media ${device.mobileXL} { 
        width: 10px; 
        height: 10px;
      }

      @media ${device.tabletL} { 
        left: calc(50% - 5px);
        top: 15px;
        width: 10px; 
        height: 10px;
        display: none;
      }

      @media ${device.mobileL} { 
        width: 8px; 
        height: 8px;
      }
    }
  }

  &::before{
    content: "";
    background-image: url(${waterDropSvg});
    background-size: contain;
    background-repeat: none;
    width: 15px; 
    height: 15px;
    position: absolute;
    right: 150px;
    opacity: 0;
    -webkit-transition: all 0.2s ease-in-out;
    transition: all 0.2s ease-in-out;
    bottom: 123px;


    @media ${device.mobileXL} { 
        width: 10px; 
        height: 10px;
    }

    @media ${device.tabletL} { 
      width: 10px; 
      height: 10px;
      left: calc(50% - 5px);
      bottom: 109px;
    }

    @media ${device.mobileL} { 
      width: 8px; 
      height: 8px;
    }
  } 

  &:hover {
    &::before{
      -webkit-animation: fade-in-top 0.6s cubic-bezier(0.390, 0.575, 0.565, 1.000) both;
	    animation: fade-in-top 0.6s cubic-bezier(0.390, 0.575, 0.565, 1.000) both;
      opacity: 0;
    }
  }

  @-webkit-keyframes fade-in-top {
    0% {
      -webkit-transform: translateY(0px);
              transform: translateY(0px);
      opacity: 0;
    }
    100% {
      -webkit-transform: translateY(120px);
              transform: translateY(120px);
      opacity: 1;
    }
  }
  @keyframes fade-in-top {
    0% {
      -webkit-transform: translateY(0px);
              transform: translateY(0px);
      opacity: 0;
    }
    100% {
      -webkit-transform: translateY(120px);
              transform: translateY(120px);
      opacity: 1;
    }
  }

`
const Logo = styled.img`
  width: 100px;
  padding: 1rem 0 2rem 3rem;
  @media ${device.tabletL} { 
    padding: 0 0 0 1rem;
    width: 25px;
  }

  @media ${device.mobileS} { 
    padding: 0rem;
    width: 20px;
  }


`


export default function Nav() {

  const Element = Scroll.Element;

  return (
    <NavBarContainer>
      
      <Element name="anchor">
        <a href="https://karabafc.com"><Logo src={karabalogo} alt='KARABA FC' /></a>
      </Element>
      
      <NavBar>

        <NavLinkStyled to="/tour">TOUR</NavLinkStyled>
        <NavLinkStyled to="/musique">MUSIQUE</NavLinkStyled>
        <NavLinkStyled to="/merch">MERCH</NavLinkStyled>
        <NavLinkStyled to="/contact">CONTACT</NavLinkStyled>

      </NavBar>

      

    </NavBarContainer>

  )
}
