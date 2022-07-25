import './App.css';
import {
  BrowserRouter,
  Routes,
  Route,
  Navigate
} from "react-router-dom";
import { createGlobalStyle } from 'styled-components'

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
`


function App() {
  return (
    <>
      
      <GlobalStyle />
      <BrowserRouter>

        <Header path="/" />

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
      
      </BrowserRouter>

      <Footer path="/" />


    </>
  );
}

export default App;
