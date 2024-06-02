import { useState } from 'react'
import './App.css'
import {
  BrowserRouter,
  Link,
  Route,
  Routes,
} from "react-router-dom";
import Home from './pages/guest/Home';
import Login from './pages/guest/Login';
import Berita from './pages/guest/Berita';
import Sertifikasi from './pages/guest/Sertifikasi';
import Reguilasi from './pages/guest/Reguilasi';



function App() {
  return (
 
      <BrowserRouter>
        <Routes>
          <Route path="/" element={<Home />} />
          <Route path="/login" element={<Login />} />
          <Route path="/berita" element={<Berita />} />
          <Route path="/sertifikasi" element={<Sertifikasi />} />
          <Route path="/regulasi" element={<Reguilasi />} />
        </Routes>
      </BrowserRouter>
  )
}

export default App
