import React from 'react';
import './App.css';
import Home from './pages/Home';
import { BrowserRouter, Route, Routes } from 'react-router-dom'
import Dryboxtable from './pages/Dryboxtable';
import Logo from'./multi_logo.png'

function App() {
return (
  <div>
    <img src={Logo} width="400px" alt="multilogo"/>
    <BrowserRouter>
    <Routes>
      <Route path='/' element={<Home />} />
      <Route path='/Dryboxtable' element={<Dryboxtable />} />
    </Routes>
    </BrowserRouter>
    
  </div>
)
  ;
}

export default App;
