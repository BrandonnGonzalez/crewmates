import { useState } from 'react'
import { BrowserRouter, Routes, Route} from 'react-router-dom';
import './App.css'

// ALL CRUD and regular components
import CreateCrewMember from './components/CreateCrewMember'
import HomePage from './components/HomePage'

function App() {

  return (
    <div>
      <HomePage />
      
    </div>
  )
}

export default App
