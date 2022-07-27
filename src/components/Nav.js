import React, { useState, useRef, useEffect } from 'react';
import styled from "styled-components";
import { NavLink } from 'react-router-dom';
import * as Scroll from 'react-scroll';


import waterDropSvg from '../assets/images/water-drop.svg'
import karabalogo from '../assets/images/KarabaFC-logo-white.png';

/* const [hovered, setHovered] = useState(false);
const toggleHover = () => setHovered(!hovered); */

const NavBarContainer = styled.nav`
  //height: calc(100vh - 300px);
  height: 200px;
  min-width: 20%;
  //max-width: 30%;
  position: sticky;
  top: 10px;
  margin-bottom: 20rem;
  
`
const NavBar = styled.div`
  display: flex;
  flex-direction: column;
  justify-content: center;
  height: calc(100vh - 300px);
  position: relative;
  padding: 2rem;
  //border-right: white solid 1px;

  &::after{
    content: '';
    width: 1px;
    height: 350px;
    color: white;
    position: absolute;
    background: white;
    left: 225px;
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
  width: 135px;

  //When the page is active
  &[class*="active"] {

    &::after{
      content: url(${waterDropSvg});
      position: absolute;
      right: 150px;
      bottom: 0;
    }
  }

  &::before{
    content: url(${waterDropSvg});
    position: absolute;
    right: 150px;
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
  padding: 4rem 0 2rem 0;
`

export default function Nav() {

/*   function dropDownActive(e){
    e.target.classList.add('test')
  }

  function dropDownDisable(e){
    e.target.classList.remove('test')
  } */

/*   const navRef = useRef();
  const [ navPosition, setNavPosition ] = useState(true);

  const scrollHandler = () => {
    //console.log(navRef.current.getBoundingClientRect().top);

    if(navRef.current.getBoundingClientRect().top >= 0){
      return setNavPosition(false);
    }
    
    if(navRef.current.getBoundingClientRect().top < 0){
      return setNavPosition(true);
      
    }
    
  };

  console.log(navPosition);

  useEffect(() => {
    window.addEventListener("scroll", scrollHandler, true);
    return () => {
      window.removeEventListener("scroll", scrollHandler, true);
    };
  }, []); */

  const Element = Scroll.Element;


  return (

    <NavBarContainer id="navbar" /* ref={navRef} */>
      
      <Element name="anchor">
        <Logo src={karabalogo} alt='KARABA FC' />
      </Element>
      
      <NavBar className=''>

        <NavLinkStyled to="/" /* onMouseLeave={dropDownActive} onMouseEnter={dropDownDisable} */>TOUR</NavLinkStyled>
        <NavLinkStyled to="/music" >MUSIC</NavLinkStyled>
        <NavLinkStyled to="/merchandise" >MERCHANDISE</NavLinkStyled>
        <NavLinkStyled to="/contact" >BIO & CONTACT</NavLinkStyled>

      </NavBar>

    </NavBarContainer>
  )
}
