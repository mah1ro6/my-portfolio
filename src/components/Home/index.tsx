import React from 'react';
import '../style/index.css';

const Home: React.FC = () => {
  return (
    <div className="m-0">
      <img
        src="../../img/home_bg.jpg"
        alt="ホーム画面の画像"
        className="bg-cover bg-center max-w-full min-h-screen"
      />
    </div>
  );
};

export default Home;
