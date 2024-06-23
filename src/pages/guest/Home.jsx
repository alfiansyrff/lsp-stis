import React, { useState, useEffect, Suspense } from 'react';
import GuestLayout from '../layout/GuestLayout';
import TopLoader from '../../components/TopLoader';

// Lazy load components
const Hero = React.lazy(() => import('../../components/Hero'));
const StatisticCard = React.lazy(() => import('../../components/StatisticCard/Index'));
const VisiMisi = React.lazy(() => import('../../components/VisiMisi/Index'));
const Lisensi = React.lazy(() => import('../../components/Lisensi/Index'));
const BeritaResume = React.lazy(() => import('../../components/Berita'));
const Testimoni = React.lazy(() => import('../../components/Testimoni/Index'));
const Struktur = React.lazy(() => import('../../components/Struktur'));
const SupportBy = React.lazy(() => import('../../components/SupportBy'));

const SkeletonHero = () => {
  return (
    <div className="p-6 mt-10 bg-gray-100 min-h-screen rounded-lg flex items-center justify-center flex-col animate-pulse">
      <div className="h-10 bg-gray-300 mx-auto rounded w-1/2 mb-2"></div>
      <div className="h-48 bg-gray-300 mx-auto rounded w-1/2 mb-4"></div>
      <div className="h-8 bg-gray-300 mx-auto rounded w-1/5"></div>
    </div>
  );
};

const Home = () => {
  const [loading, setLoading] = useState(true);
  const [showSkeleton, setShowSkeleton] = useState(true);

  useEffect(() => {
    setTimeout(() => {
      setShowSkeleton(false);
    }, 1000);
    setLoading(false);
  }, []);

  return (
    <GuestLayout>
      {loading ? (
        <TopLoader />
      ) : (
        <>
          {showSkeleton ? (
            <SkeletonHero />
          ) : (
            <Suspense fallback={<SkeletonHero />}>
              <Hero />
            </Suspense>
          )}
          <Suspense fallback={<TopLoader />}>
            <StatisticCard />
            <VisiMisi />
            <Lisensi />
            <BeritaResume />
            <Testimoni />
            <Struktur />
            <SupportBy />
          </Suspense>
        </>
      )}
    </GuestLayout>
  );
};

export default Home;
