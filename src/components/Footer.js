import React from 'react'
import styled from "styled-components";
import { NavLink } from 'react-router-dom';
import { device } from "../global/Breakpoints";

import KarabaFooterImg from '../assets/images/jorge-vasconez.jpg'
import KarabaFooterImg2 from '../assets/images/sarah-lee.jpg'
import KarabaFooterImg3 from '../assets/images/marcos-paulo-prado.jpg'

//import IgIcon from '../assets/images/icon-instagram.svg'
import { ReactComponent as IgIcon } from '../assets/icons/icon-instagram.svg';
import { ReactComponent as FbIcon } from '../assets/icons/icon-facebook.svg';
import { ReactComponent as BcIcon } from '../assets/icons/icon-bandcamp.svg';


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
    fill: url(#logo-gradient1) #447799;
	}

  a svg.logo-2 path {
    fill: url(#logo-gradient2) #447799;
	}

  a svg.logo-3 path {
    fill: url(#logo-gradient3) #447799;
	}

  svg:hover{
      transform: scale(1.08);
  }

  svg.logo-1, svg.logo-2, svg.logo-3{
    transition: 1s ease-in-out;

    &:hover stop:first-child {
    stop-color: #466ec3;
    }

    &:hover stop:last-child {
      stop-color: #466ec3;
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
        <a href='#'><IgIcon /></a>
        <a href='https://www.facebook.com/KARABAFC'><FbIcon /></a>
        <a href='https://karabafc.bandcamp.com/'><BcIcon /></a>
      </Icons>

      <Mentions>
          2022 • <NavLink to="/mentions" >Mentions</NavLink>
      </Mentions>

    </FooterContainer>
  )
}
