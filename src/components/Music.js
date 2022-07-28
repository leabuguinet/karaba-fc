import React from 'react'
import styled from "styled-components"
import YoutubeEmbed from './YoutubeEmbed'

import { ReactComponent as YtIcon } from '../assets/icons/icon-youtube.svg';
import { ReactComponent as AmIcon } from '../assets/icons/icon-applemusic.svg';
import { ReactComponent as BcIcon } from '../assets/icons/icon-bandcamp.svg';
import { ReactComponent as SpoIcon } from '../assets/icons/icon-spotify.svg';

const KarabaClipUrl = "zPwLwzbASlk"

const MusicContainer = styled.div`
  height: 80vh;
  max-width: 70%;
  min-width: 50%;
  margin-top: 5rem;
`

const Music = () => {
  return (

    <MusicContainer>
 
      <h1>Music</h1>
      <YoutubeEmbed embedId={KarabaClipUrl}/>

    </MusicContainer>
  )
}

export default Music