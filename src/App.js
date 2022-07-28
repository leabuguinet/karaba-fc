import './App.css';
import {
  BrowserRouter,
  Routes,
  Route,
  Navigate
} from "react-router-dom";
import { createGlobalStyle } from 'styled-components'
import { useEffect, useState, useRef, useLayoutEffect } from 'react';

import Main from './components/Main';
import Header from './components/Header';
import Nav from './components/Nav';
import Footer from './components/Footer';
import Tour from './components/Tour';
import Merchandise from './components/Merchandise';
import Contact from './components/Contact';
import Music from './components/Music';


const GlobalStyle = createGlobalStyle`

  body {
    background-color:  #00001a;
    font-family: 'League Spartan', sans-serif;
  }

  h1 {
    color: #ffffff;
    text-transform: uppercase;
    margin-bottom: 5rem;
    font-size: 2rem;
  }

  h2 {
    color: #ffffff;
    margin-bottom: 3rem;
    font-size: 1.2rem;
  }

  .p-mb{
    margin-bottom: 3rem;
  }

`

function App() {

  return (
    <>
      
      <GlobalStyle />
      <BrowserRouter>

        <Header />

        <Main className="container">
          <Nav />

          <Routes>

            <Route path="/" element={<Tour />}/>
            <Route path="/music" element={<Music />} />
            <Route path="/merchandise" element={<Merchandise />} />
            <Route path="/contact" element={<Contact />} />

            <Route path="*" element={<Navigate to="/"/>} />

          </Routes>
        </Main>

        <Footer/>
      
      </BrowserRouter>

    </>
  ); 
}

export default App;