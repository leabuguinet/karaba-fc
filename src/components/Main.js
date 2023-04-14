import {
  Routes,
  Route,
  Navigate,
} from "react-router-dom";

import styled from "styled-components";

import { AnimatePresence } from "framer-motion";

import { device } from "../global/Breakpoints";

import Nav from './Nav';
import BurgerNav from "./BurgerNav";
import Tour from './Tour';
import Merchandise from './Merchandise';
import Contact from './Contact';
import Music from './Music';
import Mentions from "./Mentions";
import Bonus from "./Bonus";
import ScrollToTop from './scrollToTop';
import Anchor from './Anchor';

const MainContainer = styled.main`
  display: flex;
  justify-content: space-between;
  flex-wrap: wrap;
  margin: 0 auto;
  max-width: 1280px;
  justify-content: space-between;

  @media ${device.tabletL} { 
    justify-content: center;
  }

  /* @media ${device.mobileL} { 
    width: 90%;
  } */

  > div {

    margin-top: 5rem;

    @media ${device.desktop} { 
      max-width: 85%;
      margin-top: 2rem;
    }
  }
`

function Main() {

  return (
    <>
    
    <MainContainer>
      
        <Nav />
        <Anchor />
        
        <AnimatePresence exitBeforeEnter>
        <ScrollToTop />          
        <Routes>

            <Route path="/" element={<Tour/>}/>
            <Route path="/tour" element={<Tour/>}/>
            <Route path="/musique" element={<Music/>} />
            <Route path="/merch" element={<Merchandise/>} />
            <Route path="/contact" element={<Contact/>} />
            <Route path="/mentions" element={<Mentions/>} />

            <Route path="/winchestaaa" element={<Bonus/>} />

            <Route path="*" element={<Navigate to="/"/>} />

        </Routes>
        </AnimatePresence>

    </MainContainer>
    </>
  );
}

export default Main;
