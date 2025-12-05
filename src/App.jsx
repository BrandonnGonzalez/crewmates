import { useState } from 'react'
import './App.css'


// ALL CRUD components
import CreateCrewMember from './components/CreateCrewMember'

function App() {

  return (
    <div>
      <h1> Create a New Crewmate </h1>
      <CreateCrewMember />
    </div>
  )
}

export default App
