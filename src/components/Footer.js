import React from 'react'
import styled from "styled-components";
import { NavLink } from 'react-router-dom';
import { device } from "../global/Breakpoints";

import KarabaFooterImg3 from '../assets/images/marcos-paulo-prado.jpg'

import { ReactComponent as IgIcon } from '../assets/icons/icon-instagram.svg';
import { ReactComponent as FbIcon } from '../assets/icons/icon-facebook.svg';
import { ReactComponent as BcIcon } from '../assets/icons/icon-bandcamp.svg';
import { ReactComponent as YtIcon } from '../assets/icons/icon-youtube.svg';


const FooterContainer = styled.footer`
  color: white;
  width: 100%;
  //height: 200px;
  background: linear-gradient(180deg, rgba(0,0,26,1) 0%, rgba(0,0,26,0.5130427170868348) 53%, rgba(0,0,26,0.3029586834733894) 100%), url(${KarabaFooterImg3});
  background-size: cover;
  background-repeat: no-repeat;

  display: flex;
  flex-direction: column;
  justify-content: center;
  align-items: center;

  margin-top: 2rem;

`

const Icons = styled.div`
  display: flex;
  justify-content: center;
  padding: 8rem 0 4rem 0;
  gap: 40px;

  a svg.logo-1 path {
    fill: url(#logo-gradient1) #81aecb;
	}

  a svg.logo-2 path {
    fill: url(#logo-gradient2) #81aecb;
	}

  a svg.logo-3 path {
    fill: url(#logo-gradient3) #ffffff;
	}

  a svg.logo-4 path {
    fill: url(#logo-gradient4) #ffffff;
	}

  svg:hover{
      transform: scale(1.08);
  }

  svg.logo-1, svg.logo-2, svg.logo-3, svg.logo-4 {
    transition: 1s ease-in-out;

    &:hover stop:first-child {
    stop-color: #81aecb;
    }

    &:hover stop:last-child {
      stop-color: #81aecb;
    }
  }

  stop {
    transition: 1s;
  }

  @media ${device.mobileM} { 
    svg {
      width: 40px;
    }
  }
  
`
const Mentions = styled.span`
  margin-bottom: 2rem ;
  a{
    text-decoration: none;
    color: #ffffff;
  }
`

export default function Footer() {
  return (
    <FooterContainer>

      <Icons>
        <a href='https://instagram.com/karabafc?igshid=YmMyMTA2M2Y='><IgIcon /></a>
        <a href='https://www.facebook.com/KARABAFC'><FbIcon /></a>
        <a href='https://karabafc.bandcamp.com/'><BcIcon /></a>
        <a href='https://www.youtube.com/channel/UCII3nLe19ZzyuZ0ZxciJZuA?app=desktop&cbrd=1'><YtIcon /></a>
      </Icons>

      <Mentions>
          2023 • <NavLink to="/mentions">Mentions</NavLink>
      </Mentions>

    </FooterContainer>
  )
}
