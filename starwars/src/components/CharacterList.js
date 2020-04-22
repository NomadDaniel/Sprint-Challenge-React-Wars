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
`
const SearchForm = styled.form`
  width: 100%;
  height: 100%;
  text-align: center;
`
const ButtonDiv = styled.div`
  width: 100%;
  height: 100%;
`
const Button = styled.button`
  background: cyan;
  border: 5px solid black;
  color: black;    
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
    const [ query, setQuery ] = useState("")

    useEffect ( () => {
      axios
        .get ( `https://rickandmortyapi.com/api/character/?page=${ page }` )
        .then( res => {
            console.log ( res )
            const characters = res.data.results.filter(character =>
              character.name.toLowerCase().includes(query.toLowerCase())
            );
            setPeople ( characters )
            // console.log(page)
          })
    }, [ page, query ] )

    const handlePrevious = e => {
      setPage (page - 1)
    }

    const handleNext = e => {
      setPage (page + 1)
    }

    const handleInputChange = event => {
      setQuery(event.target.value);
    };

    return (
      <ListContainer>
        
      <SearchForm className="search">
        <input
          type="text"
          onChange={handleInputChange}
          value={query}
          name="name"
          tabIndex="0"
          placeholder="search by name"
          autoComplete="off"
        />
      </SearchForm>
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