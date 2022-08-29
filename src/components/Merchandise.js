import React from "react";
import styled from "styled-components";
import { motion } from "framer-motion";

import KarabaK7 from "../assets/images/Karaba-F.C-k7.jpeg";
import KarabaTshirt from "../assets/images/Karaba-F.C-tshirt.jpeg";
import { device } from "../global/Breakpoints";

const MerchandiseContainer = styled(motion.div)`
  flex: 1;
  display: flex;
  flex-direction: column;

  .merchandise-item {
    display: flex;
    flex-wrap: wrap;
    justify-content: center;
    margin-bottom: 2rem;
    gap: 20px;

    margin-bottom: 3rem;
    padding: 30px;
    border-radius: 20px;
    backdrop-filter: blur(20px);
    -webkit-backdrop-filter: blur(20px);
    background: rgba(255, 255, 255, 0.05);
    transition: background-color ease-in-out 0.5s;
    position: relative;

    &::before {
      z-index: -1;
      position: absolute;
      content: "";
      top: 0;
      right: 0;
      bottom: 0;
      left: 0;
      border-radius: 20px;
      background: rgb(0, 0, 26);
      background: -webkit-linear-gradient(
        130deg,
        rgba(0, 0, 26, 0) 0%,
        rgba(0, 27, 92, 0) 42%,
        rgba(0, 51, 153, 0.6012780112044818)
      );
      background: linear-gradient(
        130deg,
        rgba(0, 0, 26, 0) 0%,
        rgba(0, 27, 92, 0) 42%,
        rgba(0, 51, 153, 0.6012780112044818)
      );
      transition: opacity 0.4s linear;
      opacity: 0;
    }
    &:hover::before {
      opacity: 0.5;
    }

    @media ${device.mobileXL} {
      flex-direction: column;
      align-items: center;
    }

    .merchandise-img {
      width: calc(40% - 20px);
      min-width: 175px;

      img {
        width: 100%;
        max-width: none;

        @media ${device.mobileXL} {
          max-width: 300px;
        }
      }
      @media ${device.tabletL} {
        width: calc(40% - 20px);
      }
      @media ${device.mobileXL} {
        width: 100%;
      }
    }
    .merchandise-description {
      width: calc(60% - 20px);

      @media ${device.mobileXL} {
        width: 100%;
      }
      h2 {
        margin-top: 0;
        margin-bottom: 1rem;
        text-transform: uppercase;
        font-weight: 400;
      }

      h2,
      p,
      a {
        margin-right: 20px;
      }

      a {
        color: #ffffff;
        text-decoration: none;
        font-weight: 600;
      }

      a:hover {
        color: #81aecb;
      }

      .underline {
        position: relative;
      }

      .underline::before {
        content: "";
        position: absolute;
        bottom: -2px;
        right: 0;
        width: 0;
        height: 1px;
        background-color: #81aecb;
        transition: width 0.6s cubic-bezier(0.25, 1, 0.5, 1);
      }

      @media (hover: hover) and (pointer: fine) {
        .underline:hover::before {
          left: 0;
          right: auto;
          width: 100%;
        }
      }
    }
  }
`;
const pageVariants = {
  initial: {
    opacity: 0,
    y: 0,
    scale: 0.8,
  },
  in: {
    opacity: 1,
    x: 0,
    scale: 1,
  },
  out: {
    opacity: 0,
    x: "-0vw",
    scale: 1.2,
  },
};

const pageTransition = {
  type: "tween",
  ease: "easeInOut",
  duration: 0.8,
};

const Merchandise = () => {
  return (
    <MerchandiseContainer
      as={motion.div}
      key="2"
      initial="initial"
      animate="in"
      exit={{ opacity: 0 }}
      variants={pageVariants}
      transition={pageTransition}
    >
      <h1>Merchandise</h1>

      <div className="merchandise-list">
        <div className="merchandise-item">
          <div className="merchandise-img">
            <img src={KarabaK7} alt="K7 de Empty Rooms du goupe Karaba-F.C" />
          </div>
          <div className="merchandise-description">
            <h2>Empty Rooms K7</h2>
            <p>2ème édition, orange transparent, 30 copies</p>
            <p>Édition Limitée</p>
            <p>
              Comprend l’écoute en continu illimitée de Empty Rooms au moyen de
              l’appli gratuite de Bandcamp, ainsi que le téléchargement de haute
              qualité aux formats MP3, FLAC et plus.
            </p>
            <a
              className="underline"
              href="https://karabafc.bandcamp.com/album/empty-rooms"
            >
              Acheter via BandCamp
            </a>
          </div>
        </div>

        <div className="merchandise-item">
          <div className="merchandise-img">
            <img
              src={KarabaTshirt}
              alt="K7 de Empty Rooms du goupe Karaba-F.C"
            />
          </div>
          <div className="merchandise-description">
            <h2>Empty Rooms t-shirt</h2>
            <p>Stanley/Stella organic cotton</p>
            <a
              className="underline"
              href="https://karabafc.bandcamp.com/album/empty-rooms"
            >
              Acheter via BandCamp
            </a>
          </div>
        </div>
      </div>
    </MerchandiseContainer>
  );
};

export default Merchandise;
