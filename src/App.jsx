import { useState } from 'react'
import { BrowserRouter, Routes, Route} from 'react-router-dom';
import './App.css'

// ALL CRUD and regular components
import CreateCrewMember from './components/CreateCrewMember'
import HomePage from './components/HomePage'
import NavBar from './components/NavBar';
import NoPageFound from './components/NoPageFound';

function App() {

  return (
    <div>
      <BrowserRouter>
      <NavBar />
      <Routes>
          <Route path="/" element={<HomePage />}/>
          <Route path="/CreateCrewMember" element={<CreateCrewMember />}/>
          <Route path="*" element={<NoPageFound />} />
      </Routes>
      </BrowserRouter>
    </div>
  )
}

export default App
