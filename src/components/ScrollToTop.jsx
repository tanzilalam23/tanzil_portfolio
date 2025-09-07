import React, { useEffect, useState } from 'react';
import { FaArrowUp } from 'react-icons/fa';

const ScrollToTop = () => {
  const [showArrow, setShowArrow] = useState(false);

  useEffect(() => {
    const handleScroll = () => {
      setShowArrow(window.scrollY > 300);
    };

    window.addEventListener('scroll', handleScroll);
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  const scrollUp = () => {
    window.scrollTo({
      top: 0,
      behavior: 'smooth',
    });
  };

  return (
    showArrow && (
      <button
        onClick={scrollUp}
        className="fixed bottom-6 right-6 z-50 p-3 rounded-full shadow-lg transition-all duration-300"
        style={{
          backgroundColor: 'rgb(37,40,131)',
          boxShadow: '0 0 15px rgb(0,255,186)',
        }}
        onMouseEnter={e => {
          e.currentTarget.style.backgroundColor = 'rgb(0,255,186)';
          e.currentTarget.style.boxShadow = '0 0 20px rgb(0,255,186)';
        }}
        onMouseLeave={e => {
          e.currentTarget.style.backgroundColor = 'rgb(37,40,131)';
          e.currentTarget.style.boxShadow = '0 0 15px rgb(0,255,186)';
        }}
        aria-label="Scroll to top"
      >
        <FaArrowUp style={{ color: 'rgb(0,255,186)', filter: 'drop-shadow(0 0 6px rgb(0,255,186))' }} />
      </button>
    )
  );
};

export default ScrollToTop;
