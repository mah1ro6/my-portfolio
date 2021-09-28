import React from 'react';
import './index.css'

const About: React.FC = () => {
  return (
    <>
      <h1 className='font-thin tracking-widest text-5xl mb-12'>About</h1>
      <div className="mb-20 text-center">
        <p>hello佐賀大学理工学部の応用化学コースに在籍しております。</p>
        <p>2020年の12月からプログラミング勉強開始。</p>
        <p>2021年の5月より受託開発の企業にて、アルバイト。</p>
        <p>現在、就職活動中。。。</p>
        <p>
          目標は、フロントエンドエンジニア、Webディレクターを目指しております。
        </p>
      </div>
      <div className="flex justify-between">
        <div>
          <img
            src="../../img/about_img.jpg"
            alt="顔写真"
            className="w-48 h-48"
          />
        </div>
        <div>
          <dl>
            <dt className="font-bold float-left">名前 :</dt>
            <dd className="ml-28">宮崎 聖大</dd>
            <dd className="ml-28">ミヤザキ マヒロ</dd>
            <dt className="font-bold float-left">出身 :</dt>
            <dd className="ml-28">佐賀</dd>
            <dt className="font-bold float-left">強み :</dt>
            <dd className="ml-28">行動力と継続力</dd>
            <dt className="font-bold float-left">その他 :</dt>
            <dd className="ml-28">趣味は海外ドラマ鑑賞と、動画編集です！</dd>
          </dl>
        </div>
      </div>
    </>
  );
};

export default About;
