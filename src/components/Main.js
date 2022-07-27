import {
  Routes,
  Route,
  Navigate
} from "react-router-dom";

import styled from "styled-components";

import Nav from './Nav';
import Tour from './Tour';
import Merchandise from './Merchandise';
import Contact from './Contact';
import Music from './Music';

const MainContainer = styled.main`
    display: flex;
    justify-content: space-between;
    flex-wrap: wrap;
    margin: 0 auto;
    max-width: 1280px;
    width: 80%;
`


function Main() {



  return (
    <MainContainer>
        <Nav />

        <Routes>

            <Route path="/" element={<Tour />}/>
            <Route path="/music" element={<Music />} />
            <Route path="/merchandise" element={<Merchandise />} />
            <Route path="/contact" element={<Contact />} />

            <Route path="*" element={<Navigate to="/"/>} />

        </Routes>

    </MainContainer>
  );
}

export default Main;
