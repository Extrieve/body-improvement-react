import { useState } from 'react'
import reactLogo from './assets/react.svg'
import './App.css';
import { Routes, Route } from 'react-router-dom';
import Nav from "./components/Nav";

function App() {
  return (
    <>
      <Nav />
      <Routes>
        <Route path="/" element={<div>Home</div>} />
        <Route path="*" element={<h1>Page Not Found :(</h1>} />
      </Routes>
    </>
  )
}

export default App
