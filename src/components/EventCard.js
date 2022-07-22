import React from 'react'
import styled, { StyledComponent } from 'styled-components'

const Card = styled.div`
    color: white;
`

const EventCard = ({data}) => {
  return (
    <Card>{data.date}</Card>
  )
}

export default EventCard