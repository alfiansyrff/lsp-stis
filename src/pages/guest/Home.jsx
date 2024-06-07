import React, { useState, useEffect } from 'react';
import Hero from '../../components/Hero';
import StatisticCard from '../../components/StatisticCard/Index';
import VisiMisi from '../../components/VisiMisi/Index';
import Lisensi from '../../components/Lisensi/Index';
import Testimoni from '../../components/Testimoni/Index';
import Struktur from '../../components/Struktur';
import SupportBy from '../../components/SupportBy';
import TopLoader from '../../components/TopLoader';
import GuestLayout from '../layout/GuestLayout';
import BeritaResume from '../../components/Berita';

const Home = () => {
  return (
    <GuestLayout>
      <div className=''>
        <Hero />
        <StatisticCard />
        <VisiMisi />
        <Lisensi />
        <BeritaResume />
        <Testimoni />
        <Struktur />
        <SupportBy />
      </div>
    </GuestLayout>
  );
}

export default Home;
