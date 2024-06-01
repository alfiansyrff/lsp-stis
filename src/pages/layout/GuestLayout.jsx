import React, {useState,useEffect} from 'react';
import Navbar from '../../components/Navbar';
import Footer from '../../components/Footer/Footer';
import TopLoader from '../../components/TopLoader';

function GuestLayout({ children }) {

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
    <div className='relative'>
      <TopLoader progress={progress} setProgress={setProgress} />
      <Navbar />
      <div className="content">
        {children}
      </div>

      <Footer />
      
    </div>
  );
}

export default GuestLayout;
