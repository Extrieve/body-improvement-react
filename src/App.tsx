import './App.css';
import { Routes, Route } from 'react-router-dom';
import Nav from "./components/Nav";
import Home from "./pages/Home";
import UsersPage from './pages/UsersPage';
import CreatePage from './pages/CreatePage';

function App() {
  return (
    <>
      <Nav />
      <Routes>
        <Route path="/" element={<Home />} />
        <Route path="/users" element={<UsersPage />} />
        <Route path="users/create" element={<CreatePage />} />
        <Route path="*" element={<h1>Page Not Found :(</h1>} />
      </Routes>
    </>
  )
}

export default App
