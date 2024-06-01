// import React, { useState, useEffect } from 'react';
// import CustomButton from '../../components/Button/PrimaryButton';
// import SkeletonCard from '../../components/Skeleton/Card';
// import TopLoader from '../../components/TopLoader';
// import Hero from '../../components/Hero';
// import Footer from '../../components/Footer/Footer';
// import FooterTitle from '../../components/Footer/FooterTittle';
// import StatisticCard from '../../components/StatisticCard/Index';
// import Heading from '../../components/Heading/Index';
// import VisiMisi from '../../components/VisiMisi/Index';
// import Lisensi from '../../components/Lisensi/Index';
// import Testimoni from '../../components/Testimoni/Index';
// import Struktur from '../../components/Struktur';
// import SupportBy from '../../components/SupportBy';
// // import Footer from '../../components/Footer'

// const Home = () => {
//   const [progress, setProgress] = useState(0);

//   useEffect(() => {
//     const fetchData = async () => {
//       setProgress(20);
//       try {
//         await new Promise(resolve => setTimeout(resolve, 2000));
//         setProgress(100);
//       } catch (error) {
//         setProgress(0);
//       }
//     };

//     fetchData();
//   }, []);

//   return (
//     <div className=''>
//       <Hero />
//       <StatisticCard />

//       <VisiMisi />

//       <Lisensi />
      
//       <Testimoni />

//       <Struktur />

//       <SupportBy />
//       {/* <div className='my-[10em]'>

//       <Heading />
//       </div> */}

//       <TopLoader progress={progress} setProgress={setProgress} />

//       {/* <SkeletonCard />
//       <SkeletonCard />
//       <SkeletonCard />
//       <SkeletonCard /> */}
//       <Footer/>
//         {/* <Footer /> */}

//     </div>

//   );
// }

// export default Home;


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
