import React, { useState, useEffect } from "react"
import axios from "axios"
import styled from "styled-components"
import CharacterCard from "./CharacterCard"


const ListContainer = styled.div`
  width: 100%;
  margin: 0 auto;
  display: flex;
  justify-content: space-between;
  flex-flow: row wrap;
  // flex-direction: coloumn;
`
const ButtonDiv = styled.div`
  disply:flex;
  justify-content: space-between;
  width: 100%;
  height: 100%;
  flex-flow: row wrap;
`
const Button = styled.button`
  background: cyan;
  color: black;    
  // height: 100%;
  width: 7%;
  margin: 1%;
  border-radius: 5%;
  padding: .4%;
  font-weight: bold;
  font-size: 1.2rem;
  `

function CharacterList() {
    const [ people, setPeople ] = useState ( [] )
    const [ page, setPage ] = useState ( 1 )

    useEffect ( () => {
      axios
        .get ( `https://rickandmortyapi.com/api/character/?page=${ page }` )
        .then( res => {
            console.log ( res )
            setPeople ( res.data.results )
            // console.log(page)
          })
    }, [ page ] )

    const handlePrevious = e => {
      setPage (page - 1)
    }

    const handleNext = e => {
      setPage (page + 1)
    }

    return (
      <ListContainer>
        
      <ButtonDiv> 
        { page === 1 ? null : <Button onClick = { handlePrevious }> Prev </Button> } 
        { page === 25 ? null : <Button onClick = { handleNext }> Next </Button> }
      </ButtonDiv>
      
      {people.map(item => {
        return (
          <CharacterCard 
          key = { item.id } 
          item = { item }
          />
        )
      })
    }
        <ButtonDiv> 
    { page === 1 ? null : <Button onClick = { handlePrevious }>Prev</Button> } 
    { page === 25 ? null : <Button onClick = { handleNext }>Next</Button> }
        </ButtonDiv>
      </ListContainer>
    )
}


export default CharacterList; 