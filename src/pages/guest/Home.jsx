import React, { useState, useEffect, Suspense } from 'react';
import GuestLayout from '../layout/GuestLayout';
import TopLoader from '../../components/TopLoader';

const Hero = React.lazy(() => import('../../components/Hero'));
const StatisticCard = React.lazy(() => import('../../components/StatisticCard/Index'));
const VisiMisi = React.lazy(() => import('../../components/VisiMisi/Index'));
const Lisensi = React.lazy(() => import('../../components/Lisensi/Index'));
const BeritaResume = React.lazy(() => import('../../components/Berita'));
const Testimoni = React.lazy(() => import('../../components/Testimoni/Index'));
const Struktur = React.lazy(() => import('../../components/Struktur'));
const SupportBy = React.lazy(() => import('../../components/SupportBy'));

const Home = () => {
  const [loading, setLoading] = useState(true);

  useEffect(() => {
    setLoading(false); 
  }, []);

  return (
    <GuestLayout>
      {loading ? (
        <TopLoader />
      ) : (
        <Suspense fallback={<TopLoader />}>
          <Hero />
          <StatisticCard />
          <VisiMisi />
          <Lisensi />
          <BeritaResume />
          <Testimoni />
          <Struktur />
          <SupportBy />
        </Suspense>
      )}
    </GuestLayout>
  );
}

export default Home;
