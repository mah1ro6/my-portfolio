import React from 'react';
import '../style/index.css';

const Home: React.FC = () => {
  return (
    <div>
      <img
        src="../../img/home-bg.jpg"
        alt="ホーム画面の画像"
        className="min-h-screen w-full object-cover md:w-screen"
      />
    </div>
  );
};

export default Home;
