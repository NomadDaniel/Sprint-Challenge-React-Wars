import React from 'react'
import './App.css'
import styled from "styled-components"
import CharacterList from "./components/CharacterList"

const MainH1 = styled.h1`
  color: purple;
  font-size: 4rem;
  disply: flex;
  justify-content: space-between;
  width: 100%;
  height: 100%;
  flex-flow: row wrap;
  `

const App = () => {
   return (
    <div className="App">
      <MainH1 className="Header">Rick and Morty API</MainH1>
      <CharacterList />
    </div>
  )
}

export default App

  // Try to think through what state you'll need for this app before starting. Then build out
  // the state properties here.

  // Fetch characters from the API in an effect hook. Remember, anytime you have a 
  // side effect in a component, you want to think about which state and/or props it should
  // sync up with, if any.