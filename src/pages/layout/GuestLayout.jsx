import React, { useState, useEffect, useRef } from 'react';
import Navbar from '../../components/Navbar';
import Footer from '../../components/Footer/Footer';
import TopLoader from '../../components/TopLoader';
import KeyboardDoubleArrowUpTwoToneIcon from '@mui/icons-material/KeyboardDoubleArrowUpTwoTone';
import { motion, useScroll } from "framer-motion";
import { ChatBubble, SmartToy, Person } from '@mui/icons-material';

function GuestLayout({ children }) {
  const [progress, setProgress] = useState(0);
  const [showScrollToTop, setShowScrollToTop] = useState(false);
  const [loading, setLoading] = useState(true);
  const [showChatbot, setShowChatbot] = useState(false);
  const [chatMessages, setChatMessages] = useState([]);
  const [userInput, setUserInput] = useState('');
  const [chatStep, setChatStep] = useState('start');

  const { scrollYProgress } = useScroll();
  const chatbotRef = useRef(null);

  useEffect(() => {
    const handleReadyStateChange = () => {
      if (document.readyState === 'complete') {
        setProgress(100);
        setLoading(false);
      }
    };

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

  useEffect(() => {
    const handleClickOutside = (event) => {
      if (chatbotRef.current && !chatbotRef.current.contains(event.target)) {
        setShowChatbot(false);
      }
    };

    document.addEventListener('mousedown', handleClickOutside);

    return () => {
      document.removeEventListener('mousedown', handleClickOutside);
    };
  }, []);

  const scrollToTop = () => {
    window.scrollTo({
      top: 0,
      behavior: 'smooth'
    });
  };

  const toggleChatbot = () => {
    setShowChatbot(!showChatbot);
    if (!showChatbot) {
      setChatMessages([{ sender: 'bot', text: 'Halo, selamat datang di LSP Polstat STIS! sebelumnya dengan siapa disini?' }]);
      setChatStep('start');
    }
  };

  const handleUserInputChange = (event) => {
    setUserInput(event.target.value);
  };

  const handleChatSubmit = (event) => {
    event.preventDefault();
    if (userInput.trim()) {
      const userMessage = { sender: 'user', text: userInput };
      setChatMessages(prevMessages => [...prevMessages, userMessage]);

      if (chatStep === 'start') {
        const botMessage = { sender: 'bot', text: `Baik, kami akan segera memberikan jawaban kepada Bapak/Ibu ${userInput}! Anda bisa ke halaman sertifikasi untuk melihat berbagai panduan pengguna` };
        setChatMessages(prevMessages => [...prevMessages, botMessage]);
        setChatStep('end');
      }

      setUserInput('');
    }
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
          <div className="fixed right-7 bottom-24 bg-primaryOrange rounded-full p-3 z-50 hover:cursor-pointer"
               onClick={toggleChatbot}>
            <ChatBubble className='text-white'/>
          </div>
          {showChatbot && (
            <div ref={chatbotRef} className="fixed right-7 bottom-40 bg-white rounded-2xl shadow px-3 py-8 shadow-lg z-50 w-96 flex flex-col space-y-10">
              <div className="flex flex-col space-y-4">
                {chatMessages.map((message, index) => (
                  <div
                    key={index}
                    className={`flex items-end space-x-2 ${
                      message.sender === 'user' 
                        ? 'justify-end text-right' 
                        : 'justify-start text-left'
                    }`}
                  >
                    {message.sender === 'user' ? (
                      <>
                        <div className={`p-2 max-w-md bg-blue-500 text-white ml-auto rounded-br-none rounded-xl`}>
                          {message.text}
                        </div>
                        <Person className="text-blue-500 ml-2" />
                      </>
                    ) : (
                      <>
                        <SmartToy className="text-gray-400 mr-2" />
                        <div className={`p-2 rounded-xl max-w-md bg-gray-200 text-black mr-auto rounded-bl-none`}>
                          {message.text}
                        </div>
                      </>
                    )}
                  </div>
                ))}
              </div>
              <form onSubmit={handleChatSubmit} className="flex">
                <input
                  type="text"
                  value={userInput}
                  onChange={handleUserInputChange}
                  className="flex-grow p-2 border rounded-l-lg"
                  placeholder="Tulis pesanmu..."
                />
                <button type="submit" className="bg-primaryOrange text-white p-2 rounded-r-lg">Kirim</button>
              </form>
            </div>
          )}
          <Footer />
        </>
      )}
    </div>
  );
}

export default GuestLayout;
