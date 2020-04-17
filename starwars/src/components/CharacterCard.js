import React from "react"
import styled from "styled-components"

const Card = styled.div`
    width: 35%;
    margin: 5%;
    background: white;
    border-radius: 5%;
    // margin: 3%;
    padding: 1%;
    opacity: 80%;
`

const CardTitle = styled.h3`
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

const CharacterCard = props =>{
  return (
    <Card key={props.key}>
      <CardTitle>{props.name}</CardTitle>
      <CardP>Gender: {props.gender}</CardP>
      <CardP>Height: {props.height}</CardP>
      <CardP>Mass: {props.mass}</CardP>
      <CardP>Skin Color: {props.skinColor}</CardP>
    </Card>
    )
}

export default CharacterCard
