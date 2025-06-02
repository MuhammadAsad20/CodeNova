// src/components/LottiePlayer.jsx
import React, { useEffect, useState } from 'react';
import Lottie from 'lottie-react';

const LottiePlayer = ({ url }) => {
  const [animationData, setAnimationData] = useState(null);

  useEffect(() => {
    fetch(url)
      .then(res => res.json())
      .then(data => setAnimationData(data));
  }, [url]);

  return (
    <div className="w-full max-w-sm mx-auto">
      {animationData && <Lottie animationData={animationData} loop={true} />}
    </div>
  );
};

export default LottiePlayer;
