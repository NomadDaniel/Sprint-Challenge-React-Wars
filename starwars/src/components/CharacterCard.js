import React from "react"
import styled from "styled-components"


const Card = styled.div`
    width: 25%;
    margin: 1%;
    background: white;
    border-radius: 15%;
    // margin: 3%;
    // padding: 1%;
    // opacity: 90%;
`

const CardTitle = styled.h1`
    // margin-top: 0.1rem;
    // padding: 1.3rem 0;
    font-size: 1.7rem;
    color: darkblue;
`

const CardP = styled.p`
    color: darkgreen;
    font-size: 1rem;
    text-align: center;
`

const CharacterCard = props => {
  const {name, status, species, gender, origin, location, image} = props.item
  return (
    <Card>
      {/* <img src={props.image} alt={props.name}/>
      <CardTitle>{props.name}</CardTitle>
      <CardP>Status: {props.status}</CardP>
      <CardP>Species: {props.species}</CardP>
      <CardP>Gender: {props.gender}</CardP>
      <CardP>Origin: {props.origin}</CardP>
      <CardP>Location: {props.location}</CardP> */}
      <img src={image} alt={name}/>
      <CardTitle>{name}</CardTitle>
      <CardP>Status: {status}</CardP>
      <CardP>Species: {species}</CardP>
      <CardP>Gender: {gender}</CardP>
      <CardP>Origin: {origin.name}</CardP>
      <CardP>Location: {location.name}</CardP>
    </Card>
  )
}

export default CharacterCard
