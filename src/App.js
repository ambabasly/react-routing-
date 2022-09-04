import React from 'react'
import { Routes, Route, Navigate } from "react-router-dom";
import Datapage from './pages/datapage/datapage';
import Homepage from './pages/homepage/homepage';

const App = () => {
  return (
    <div className='app'>
      <Routes>
        <Route path="/data/:id" element={<Datapage />} />
        <Route path="/" element={<Homepage />} />
        <Route path="*" element={<Navigate to="/" />} />
      </Routes>
    </div>
  )
}

export default App