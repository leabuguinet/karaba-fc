import React from 'react'
import styled from "styled-components"
import YoutubeEmbed from './YoutubeEmbed'


const KarabaClipUrl = "zPwLwzbASlk"

const MusicContainer = styled.div`
  height: 80vh;
  max-width: 70%;
  min-width: 50%;
  margin-top: 5rem;
`

const Title = styled.h1`
  color: #ffffff;
  text-transform: uppercase;
  margin-bottom: 5rem;
`

const Music = () => {
  return (

    <MusicContainer>
 
      <Title>Music</Title>
      <YoutubeEmbed embedId={KarabaClipUrl}/>

    </MusicContainer>
  )
}

export default Music