import React from 'react';
import '../style/index.css';

const Home: React.FC = () => {
  return (
    <div className="m-0">
      <img
        src="../../img/home-bg.jpg"
        alt="ホーム画面の画像"
        className="bg-cover bg-center max-w-full min-h-screen m-0"
      />
    </div>
  );
};

export default Home;
