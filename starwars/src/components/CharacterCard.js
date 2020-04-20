import React from "react"
import styled from "styled-components"


const Card = styled.div`
  // border: 1px solid black;
  width: 16%;
  margin: 2%;
  background: lightgrey;
  border-radius: 5%;
  opacity: 85%;
`
const Image = styled.img`
  max-width: 100%;
  border-radius: 5% 5% 0% 0%;
  // border: 1px solid black;
`
const CardTitle = styled.h1`
  max-width: 100%;
  max-height: 100%;
  background: white;
  font-size: 1.3rem;
  padding: 1%;
  // border: 1px solid black;
`

const CardP = styled.p`
  color: black;
  font-size: .8rem;
  text-align: center;
  font-weight: bold;
`

const CharacterCard = props => {
  const { name, status, species, gender, origin, location, image } = props.item
  return (
    <Card>
      <Image src = { image } alt = { name }/>
      <CardTitle>{ name }</CardTitle>
      <CardP>Status: { status }</CardP>
      <CardP>Species: { species }</CardP>
      <CardP>Gender: { gender }</CardP>
      <CardP>Origin: { origin.name }</CardP>
      <CardP>Location: { location.name }</CardP>
    </Card>
  )
}

export default CharacterCard
