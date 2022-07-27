import React from 'react'
import styled from "styled-components";

import KarabaFooterImg from '../assets/images/jorge-vasconez.jpg'
import KarabaFooterImg2 from '../assets/images/sarah-lee.jpg'

const FooterContainer = styled.footer`
  color: white;
  width: 100%;
  height: 200px;
  background: linear-gradient(180deg, rgba(0,0,26,1) 11%, rgba(255,255,255,0) 100%), url(${KarabaFooterImg2});
  background-size: cover;
  background-repeat: no-repeat;
`

export default function Footer() {
  return (
    <FooterContainer>Footer




    </FooterContainer>
  )
}
