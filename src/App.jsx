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
import "@fontsource/poppins";
import DetailBerita from './pages/guest/DetailBerita';
import DashboardUser from './pages/admin/Dashboard';
import AdminLayout from './pages/layout/AdminLayout';
import SertifikasiUser from './pages/admin/Sertifikasi';
import DaftarSertifikasi from './pages/admin/DaftarSertifikasi';
import DetailSertifikasi from './pages/admin/DetailSertifikasi';
import Ujian from './pages/admin/Ujian';



function App() {
  return (
      <BrowserRouter>
        <Routes>
          <Route path="/" element={<Home />} />
          <Route path="/login" element={<Login />} />
          <Route path="/berita" element={<Berita />} />
          <Route path="/sertifikasi" element={<Sertifikasi />} />
          <Route path="/regulasi" element={<Reguilasi />} />
          <Route path="/berita/detail/:title" element={<DetailBerita />} />
          <Route path='/admin' element={<DashboardUser />} />
          <Route path='/admin/sertifikasi' element={<SertifikasiUser />} />
          <Route path='/admin/sertifikasi/register' element={<DaftarSertifikasi />} />
          <Route path='/admin/sertifikasi/detail' element={<DetailSertifikasi />} />
          <Route path='/admin/ujian' element={<Ujian />} />
        </Routes>
      </BrowserRouter>
  )
}

export default App
