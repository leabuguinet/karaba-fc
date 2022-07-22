import React from 'react';
import styled from "styled-components";
import * as Scroll from 'react-scroll';

/* Images */

import karabalogo from '../assets/images/KarabaFC-logo-white.png';
import headerBg from '../assets/images/alex-lerum.jpg';
import headerBg2 from '../assets/images/pawel-czerwinski.jpg';
import headerBg3 from '../assets/images/clyde-he.jpg';
import arrowDown from '../assets/images/down-arrow.svg'

const HeaderDiv = styled.header`
    background-image: url(${headerBg});
    background-repeat: no-repeat;
    background-size: cover;
    background-position: bottom;
    width: 100%;
    height: 100vh;
    display: flex;
    flex-direction: column;
    justify-content: center;
    align-items: center;
`

const Logo = styled.img`
    width: 350px;
`

const ButtonScroll = styled.div`
    position: absolute;
    bottom: 100px;
    background-image: url(${arrowDown});
    width: 40px;
    height: 40px;

`

export default function Header() {


    const scroller = Scroll.scroller;

    //var element_to_scroll_to = document.getElementById('navbar');

    // Basically `element_to_scroll_to` just have to be a reference
    // to any DOM element present on the page
    // Then:
    //element_to_scroll_to.scrollIntoView();


    const scrollToAnchor = () => {
        scroller.scrollTo('anchor', {
          duration: 1500,
          delay: 100,
          smooth: true,
          offset: -50
        });
      };


    function scrollDown(){
        //window.scrollTo(0, document.querySelector("#header").scrollHeight);
        let bottom = document.querySelector("#header").scrollHeight;
        bottom.scrollIntoView();
        
    };

    return (

    <HeaderDiv id="header">
        <Logo src={karabalogo} alt='KARABA FC'></Logo>
        <ButtonScroll onClick={scrollToAnchor}></ButtonScroll>
    </HeaderDiv>

    )
}
