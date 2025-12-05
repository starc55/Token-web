import React, { useState, useEffect } from 'react';

export default function Coomingsoon() {
  const [dots, setDots] = useState('');

  useEffect(() => {
    const interval = setInterval(() => {
      setDots(prev => (prev.length < 3 ? prev + '.' : ''));
    }, 300);

    return () => clearInterval(interval);
  }, []);

  return (
    <div
      style={{
        display: 'flex',
        justifyContent: 'center',
        alignItems: 'center',
        height: '100vh',
        width: '100%',
        fontSize: '3rem',
        fontWeight: 'bold',
        color: '#000000ff',
      }}
    >
      Coming Soon{dots}
    </div>
  );
}
