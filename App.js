import React from 'react'
import './App.css'
import Header from './components/Header'
import Main from './components/Main'
import { useState } from 'react'

function App() {
  const [searchTerm, setSearchTerm] = useState("")

  function getData(data) {
    setSearchTerm(data)
  }

  return (
    <>
      <Header onSubmit={getData} />
      <Main searchTerm={searchTerm} />
    </>
  );
}

export default App;
