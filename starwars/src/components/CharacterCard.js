import React from "react"
import styled from "styled-components"

const Card = styled.div`
    display: flex;
    width: 40%;
    background: white;
    border-radius: 5%;
    margin: 3%;
    padding: 1%;
`

const CardTitle = styled.h3`
    // margin-top: 0.2rem;
    // padding: 0.6rem 0;
    font-size: 1.8rem;
    color: #722120;
`

const CardP = styled.p`
    // horizontal-align: text-bottom;
    color: #121b26;
    font-size: 1.2rem;
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
