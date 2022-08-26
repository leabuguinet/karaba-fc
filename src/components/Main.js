import {
  Routes,
  Route,
  Navigate,
  UseLocation
} from "react-router-dom";

import styled from "styled-components";

import { AnimatePresence } from "framer-motion";
import { motion } from "framer-motion"

import { device } from "../global/Breakpoints";

import Nav from './Nav';
import Tour from './Tour';
import Merchandise from './Merchandise';
import Contact from './Contact';
import Music from './Music';
import Mentions from "./Mentions";

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

  const pageStyle = {
    height: "auto",
    //minWidth: "75%",
    //maxWidth: "75%",
    //marginLeft: "3rem",
    //width: "75%"
  };

  return (
    <MainContainer>
        <Nav />
        <AnimatePresence exitBeforeEnter>
        <Routes>

            <Route path="/" element={<Tour/>}/>
            <Route path="/musique" element={<Music/>} />
            <Route path="/merchandise" element={<Merchandise/>} />
            <Route path="/contact" element={<Contact/>} />
            <Route path="/mentions" element={<Mentions/>} />

            <Route path="*" element={<Navigate to="/"/>} />

        </Routes>
        </AnimatePresence>

    </MainContainer>
  );
}

export default Main;
