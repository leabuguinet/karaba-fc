import React, { useState } from 'react';
import styled from "styled-components";
import { NavLink } from 'react-router-dom';
import * as Scroll from 'react-scroll';


import waterDropSvg from '../assets/images/water-drop.svg'
import karabalogo from '../assets/images/KarabaFC-logo-white.png';

/* const [hovered, setHovered] = useState(false);
const toggleHover = () => setHovered(!hovered); */

const NavBarContainer = styled.nav`
  height: calc(100vh - 300px);
  width: 30%;
`
const NavBar = styled.div`
  display: flex;
  flex-direction: column;
  justify-content: center;
  height: calc(100vh - 300px);
  position: absolute;
  padding: 2rem;
  //border-right: white solid 1px;

  &::after{
    content: '';
    width: 1px;
    height: 350px;
    color: white;
    position: absolute;
    background: white;
    right: 14px;
  }
`
const NavLinkStyled = styled(NavLink)`
  color: #ffffff;
  text-decoration: none;
  margin: 1rem 2rem;
  -webkit-transition: all 0.2s ease-in-out;
  transition: all 0.2s ease-in-out;
  font-family: 'League Spartan', sans-serif;
  font-weight: 600;
  position: relative;

  //When the page is active
  &[class*="active"] {

    &::after{
      content: url(${waterDropSvg});
      position: absolute;
      right: 120px;
      bottom: 0;
    }
  }

  &::before{
    content: url(${waterDropSvg});
    position: absolute;
    right: 120px;
    opacity: 0;
    -webkit-transition: all 0.2s ease-in-out;
    transition: all 0.2s ease-in-out;
    bottom: 120px;
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
  width: 180px;
  padding-bottom: 2rem;
`

export default function Nav() {

  function dropDownActive(e){
    e.target.classList.add('test')
  }

  function dropDownDisable(e){
    e.target.classList.remove('test')
  }

  const Element = Scroll.Element;


  return (

    <NavBarContainer id="navbar">

      

      <NavBar className=''>
      <Element name="anchor">
        <Logo src={karabalogo} alt='KARABA FC' />
      </Element>
        <NavLinkStyled to="/" onMouseLeave={dropDownActive} onMouseEnter={dropDownDisable}>TOUR</NavLinkStyled>
        <NavLinkStyled to="/music" >MUSIC</NavLinkStyled>
        <NavLinkStyled to="/merchandise" >MERCHANDISE</NavLinkStyled>
        <NavLinkStyled to="/contact" >BIO & CONTACT</NavLinkStyled>

      </NavBar>

    </NavBarContainer>
  )
}
