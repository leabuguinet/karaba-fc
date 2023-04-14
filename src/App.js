import './App.css';
import {
  BrowserRouter,
  Routes,
  Route,
  Navigate
} from "react-router-dom";
import { createGlobalStyle } from 'styled-components'
import { useEffect, useState, useRef, useLayoutEffect } from 'react';

import { device } from './global/Breakpoints';
import Main from './components/Main';
import Header from './components/Header';
import Footer from './components/Footer';
import BurgerNav from './components/BurgerNav';

import ScrollToTop from './components/scrollToTop';

const GlobalStyle = createGlobalStyle`

  body {
    //background-color:  #00001a;
    background-color: #4b3b46;
    font-family: 'League Spartan', sans-serif;
  }

  .no-scroll {
    overflow-y: hidden;
  }

  h1, h2, h3, p{
    color: #ffffff;
  }

  h1 {
    text-transform: uppercase;
    text-align: center;
    margin-bottom: 5rem;
    //font-size: 2rem;
    font-size: 1.2rem;
    font-size: clamp(1.2rem, 0.9333333333333333rem + 1.3333333333333335vw, 2rem);

    @media ${device.tabletL} { 
      margin-bottom: 3rem;
      text-align: center;
    }
  }

  h2 {
    margin: 3rem 0;
    font-weight: 400;
    font-size: 1rem;
    font-size: clamp(1rem, 0.9333333333333333rem + 1.3333333333333335vw, 1.5rem);
  }

  p {
    line-height: 1.3;
    font-size: 0.8rem;
    font-size: clamp(0.8rem, 0.9333333333333333rem + 1.3333333333333335vw, 1rem);
  }

  .p-mb{
    margin-bottom: 3rem;
  }

  span {
    font-weight: 600;
  }

  .container {
    width: 75%;
  }

`
function App() {

  return (
    <>
      
      <GlobalStyle />
      
      <BrowserRouter>
        <BurgerNav />
       
        <Header />
       
        <Main />

        <Footer/>
      
      </BrowserRouter>

    </>
  ); 
}

export default App;