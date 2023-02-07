import { useState } from 'react'
import reactLogo from './assets/react.svg'
import './App.css';
import { Routes, Route } from 'react-router-dom';
import Nav from "./components/Nav";
import Home from "./pages/Home";

function App() {
  return (
    <>
      <Nav />
      <Routes>
        <Route path="/" element={<Home />} />
        <Route path="*" element={<h1>Page Not Found :(</h1>} />
      </Routes>
    </>
  )
}

export default App
