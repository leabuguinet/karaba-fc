import './App.css';
import {
  BrowserRouter,
  Routes,
  Route,
  Navigate
} from "react-router-dom";
import { createGlobalStyle } from 'styled-components'

import Header from './components/Header';
import Nav from './components/Nav';
import Footer from './components/Footer';
import Tour from './components/Tour';
import Bio from './components/Bio';
import Merchandise from './components/Merchandise';
import Contact from './components/Contact';
import Music from './components/Music';

const GlobalStyle = createGlobalStyle`

  body {
    background-color:  #00001a;
    font-family: 'League Spartan', sans-serif;
  }
  .container {
    margin: 0 auto;
    max-width: 1280px;
    width: 90%;
  }
`

function App() {
  return (
    <>
      
      <GlobalStyle />
      <BrowserRouter>

        <Header path="/" />

        <Nav />

        <Routes>

          <Route path="/" element={<Tour />}/>
          <Route path="/music" element={<Music />} />
          <Route path="/merchandise" element={<Merchandise />} />
          <Route path="/contact" element={<Contact />} />

          <Route path="*" element={<Navigate to="/"/>} />

        </Routes>
      
      </BrowserRouter>

      <Footer path="/" />


    </>
  );
}

export default App;
