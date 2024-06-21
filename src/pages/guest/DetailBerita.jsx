import React, { useState, useEffect } from 'react';
import GuestLayout from '../layout/GuestLayout';
import BreadCrumbs from '../../components/Breadcrumbs';
import MainBerita from '../../components/DetailBerita/MainBerita';
import BeritaLainnya from '../../components/DetailBerita/BeritaLainnya';
import { useParams } from 'react-router-dom';
import beritaList from '../../utils/data/berita';

function DetailBerita() {
  const { title } = useParams();
  const [loading, setLoading] = useState(true);

  const selectedBerita = beritaList.find(berita => berita.title === decodeURIComponent(title));
  const beritaTerkait = beritaList.filter(berita => berita.title !== decodeURIComponent(title));

  useEffect(() => {
    const timer = setTimeout(() => {
      setLoading(false);
    }, 1000);

    return () => clearTimeout(timer);
  }, []);

  const links = [
    { label: 'Beranda', href: '/' },
    { label: 'Berita', href: '/berita' },
    { label: title, href: null },
  ];

  return (
    <GuestLayout>
      <BreadCrumbs links={links} />
      {loading ? (
        <div className="animate-pulse grid grid-cols-1 gap-6 md:grid-cols-4 max-w-7xl mx-auto px-4 my-10">
          <div className="md:col-span-3 bg-white h-48 rounded-2xl p-5">
            <div className='p-5 bg-gray-200 h-full'>
             
            </div>
          </div>
          <div className="md:col-span-1 bg-white h-48 rounded-2xl p-5">
          <div className='p-5 bg-gray-200 h-full'>
             
             </div>
          </div>
        </div>
      ) : (
        <div className="max-w-7xl mx-auto px-4 my-10">
          <div className="grid grid-cols-1 gap-6 md:grid-cols-4">
            <div className="md:col-span-3">
              <MainBerita berita={selectedBerita} />
            </div>
            <div className="md:col-span-1">
              <BeritaLainnya beritaTerkait={beritaTerkait} />
            </div>
          </div>
        </div>
      )}
    </GuestLayout>
  );
}

export default DetailBerita;
