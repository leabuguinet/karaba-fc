import React from 'react';
import styled from "styled-components";
import { NavLink } from 'react-router-dom';
import * as Scroll from 'react-scroll';
import { device } from '../global/Breakpoints'

import waterDropSvg from '../assets/icons/water-drop.svg'
import karabalogo from '../assets/icons/KarabaFC-logo-white-light.png';



const NavBarContainer = styled.nav`
  display: block;
  width: 100%;
  height: 100vh;
  position: absolute;
  background-color: #4b3b46;
  z-index: -100;
  top: 0;
  opacity: 0;
  transition: all 0.6s ease-in-out;

  &.openMenu {
    position: sticky;
    overflow: hidden;
    opacity: 1;
    z-index: 100;
  }

`
const NavBar = styled.div`
  position: relative;
  display: flex;
  flex-direction: column;
  align-items: center;
  justify-items: center;
  justify-content: center;
  align-content: center;
  gap: 50px;
  height: 100%;
`

const Logo = styled.img`
  width: 100px;
  height: 100px;
  position: relative;
  //color: #ffffff;
  
`

const NavLinkStyled = styled(NavLink)`
  color: #ffffff;
  text-decoration: none;
  -webkit-transition: all 0.2s ease-in-out;
  transition: all 0.2s ease-in-out;
  font-size: 1.2rem;
  font-family: 'League Spartan', sans-serif;
  font-weight: 600;
  position: relative;
`

const CloseButton = styled.span`

  @media ${device.tablet} { 
    display: flex;
  }
  //margin: 1rem;
  cursor: pointer;
  z-index: 150;
  //width: 100%;
  display: none;
  position: sticky;
  //margin-top: 50px;
  top: 30px;
  bottom: 0;
  left: 88%;
  width: 20px;
  height: 2px;
  background-color: white;
  transition: all 0.6s ease-in-out;
  
  &::before  {
    content: "";
    width: 20px;
    height: 2px;
    position: absolute;
    background-color: white;
    color: white;
    right: 0px;
    top: 5px;
    transition: all 0.6s ease-in-out;
  }
  &::after  {
    content: "";
    width: 20px;
    height: 2px;
    position: absolute;
    background-color: white;
    //color: white;
    left: 0px;
    top: -5px;
    transition: all 0.6s ease-in-out;
  }



&.openMenu-arrow {
  transition: all 0.6s ease-in-out;

  &::after{
    transform: rotate(90deg) translate(5px, -0px);
    transform-origin: center;

  }
  &::before{
    //transform: rotate(45deg);
    transform-origin: 0;
    opacity: 0;

  }

  transform: rotate(45deg);

  
}
`  

export default function BurgerNav() {

  const Element = Scroll.Element;
  

  const handleClick = event => {
    event.currentTarget.classList.toggle('openMenu-arrow');
    let NavBarContainer = document.querySelector('.burgerNav');
    NavBarContainer.classList.toggle('openMenu');
    document.body.classList.toggle('no-scroll')
  
  };

  return (
    <>
    <CloseButton onClick={handleClick} className='testt'><Element name="anchor"></Element></CloseButton>
    <NavBarContainer className="burgerNav">
      
     {/*  <Element name="">
        <a href="https://karabafc.com"><Logo src={karabalogo} alt='KARABA FC' /></a>
      </Element> */}


      
      <NavBar>
        <Logo src={karabalogo} alt='' />
        <NavLinkStyled onClick={handleClick} to="/tour">TOUR</NavLinkStyled>
        <NavLinkStyled onClick={handleClick} to="/musique">MUSIQUE</NavLinkStyled>
        <NavLinkStyled onClick={handleClick} to="/merch">MERCH</NavLinkStyled>
        <NavLinkStyled onClick={handleClick} to="/contact">CONTACT</NavLinkStyled>

      </NavBar>

      

    </NavBarContainer>
    </>
  )
}