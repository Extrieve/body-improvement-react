import { useState } from 'react'
import reactLogo from './assets/react.svg'
import './App.css'
import { Routes, Route } from 'react-router-dom';

function App() {
  const [count, setCount] = useState(0);

  return (
    <>
      <Routes>
        <Route path="/" element={<div>Home</div>} />
        <Route path="*" element={<h1>Page Not Found :(</h1>} />
      </Routes>
    </>
  )
}

export default App
