import React, { useState, useEffect } from 'react';
import CustomButton from '../../components/Button/PrimaryButton';
import SkeletonCard from '../../components/Skeleton/Card';
import TopLoader from '../../components/TopLoader';
import Hero from '../../components/Hero';
import Footer from '../../components/Footer/Footer';
import FooterTitle from '../../components/Footer/FooterTittle';
import StatisticCard from '../../components/StatisticCard/Index';
import Heading from '../../components/Heading/Index';
import VisiMisi from '../../components/VisiMisi/Index';
import Lisensi from '../../components/Lisensi/Index';
// import Footer from '../../components/Footer'

const Home = () => {
  const [progress, setProgress] = useState(0);

  useEffect(() => {
    const fetchData = async () => {
      setProgress(20);
      try {
        await new Promise(resolve => setTimeout(resolve, 2000));
        setProgress(100);
      } catch (error) {
        setProgress(0);
      }
    };

    fetchData();
  }, []);

  return (
    <div className=''>
      <Hero />
      <StatisticCard />

      <VisiMisi />

      <Lisensi />
      
      {/* <div className='my-[10em]'>

      <Heading />
      </div> */}

      <TopLoader progress={progress} setProgress={setProgress} />

      {/* <SkeletonCard />
      <SkeletonCard />
      <SkeletonCard />
      <SkeletonCard /> */}
      <Footer/>
        {/* <Footer /> */}

    </div>

  );
}

export default Home;
