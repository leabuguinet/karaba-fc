import React from 'react'
import styled from "styled-components"

const AlbumSquare = styled.div`
  width: 200px;
  height: 200px;
  background-image: url(${props => props.cover});
  background-size: contain;
  overflow: hidden;
`


const Album = (props) => {
  return (
    <AlbumSquare>Album</AlbumSquare>
  )
}

export default Album