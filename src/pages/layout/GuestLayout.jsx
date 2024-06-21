import React, { useState, useEffect } from 'react';
import Navbar from '../../components/Navbar';
import Footer from '../../components/Footer/Footer';
import TopLoader from '../../components/TopLoader';
import KeyboardDoubleArrowUpTwoToneIcon from '@mui/icons-material/KeyboardDoubleArrowUpTwoTone';
import { motion, useScroll } from "framer-motion";

function GuestLayout({ children }) {
  const [progress, setProgress] = useState(0);
  const [showScrollToTop, setShowScrollToTop] = useState(false);
  const [loading, setLoading] = useState(true); 
  const { scrollYProgress } = useScroll();

  useEffect(() => {
    const handleReadyStateChange = () => {
      if (document.readyState === 'complete') {
        setProgress(100);
        setLoading(false); 
      }
    };

    // Check if the document is already loaded
    if (document.readyState === 'complete') {
      handleReadyStateChange();
    } else {
      document.addEventListener('readystatechange', handleReadyStateChange);
    }

    const handleScroll = () => {
      if (window.scrollY > 200) {
        setShowScrollToTop(true);
      } else {
        setShowScrollToTop(false);
      }
    };

    window.addEventListener('scroll', handleScroll);

    return () => {
      document.removeEventListener('readystatechange', handleReadyStateChange);
      window.removeEventListener('scroll', handleScroll);
    };
  }, []);

  const scrollToTop = () => {
    window.scrollTo({
      top: 0,
      behavior: 'smooth'
    });
  };

  return (
    <div className='relative'>
      {loading ? (
        <div className="fixed inset-0 bg-black flex items-center justify-center">
          <TopLoader progress={progress} setProgress={setProgress} />
        </div>
      ) : (
        <>
          <TopLoader progress={progress} setProgress={setProgress} />
          <Navbar />
          <div className="content">
            {children}
          </div>
          {showScrollToTop && (
            <motion.div 
              className='fixed right-7 bottom-10 bg-primaryOrange rounded-full p-1 z-50 hover:cursor-pointer' 
              initial={{ opacity: 0, scale: 0 }}
              animate={{ opacity: 1, scale: 1 }}
              transition={{ duration: 0.3 }}
              whileHover={{ translateY: -8 }}
              onClick={scrollToTop}
            >
              <KeyboardDoubleArrowUpTwoToneIcon className='text-white' fontSize='large' />
            </motion.div>
          )}
          <Footer />
        </>
      )}
    </div>
  );
}

export default GuestLayout;
