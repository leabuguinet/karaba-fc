import React from "react";
import PropTypes from "prop-types"
import styled from "styled-components"
import { device } from "../global/Breakpoints"

const VideoResponsive = styled.div`
  overflow: hidden;
  padding-bottom: 56.25%;
  position: relative;
  height: 0;
  margin: 5rem;

  @media ${device.mobileXL} {
    margin: 3rem;
  }
  @media ${device.mobileM} {
    margin: 1.5rem;
  }
  @media ${device.mobileM} {
    margin: 1rem;
  }

  & iframe{
    left: 0;
    top: 0;
    height: 100%;
    width: 100%;
    position: absolute;
  }
`   
const YoutubeEmbed = ({ embedId }) => (
  <VideoResponsive>
    <iframe
      width="auto"
      height="auto"
      src={`https://www.youtube.com/embed/${embedId}`}
      frameBorder="0"
      allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture"
      allowFullScreen
      title="Embedded youtube"
    />
  </VideoResponsive>
);

YoutubeEmbed.propTypes = {
  embedId: PropTypes.string.isRequired
};

export default YoutubeEmbed;