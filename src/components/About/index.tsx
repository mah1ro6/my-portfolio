import React from 'react';
import '../style/index.css';

interface Profile {
  title: string;
  titleContent: string;
}

const About: React.FC = () => {
  const profile: Profile[] = [
    {
      title: '名前',
      titleContent: '宮崎 聖大',
    },
    {
      title: '出身',
      titleContent: '佐賀',
    },
    {
      title: '強み',
      titleContent: '行動力と継続力',
    },
    {
      title: 'その他',
      titleContent: '趣味が海外ドラマ鑑賞です！',
    },
  ];

  return (
    <>
      <h1 className="font-thin tracking-widest text-5xl mb-12 ">About</h1>
      <div className="mb-20 text-center text-left sm:text-left">
        <p>佐賀大学理工学部の応用化学コースに在籍しております。</p>
        <p>2020年の12月からプログラミング勉強開始。</p>
        <p>2021年の5月より受託開発の企業にて、アルバイト。</p>
        <p>現在、就職活動中。。。</p>
        <p>
          目標は、フロントエンドエンジニアまたは、Webディレクターへの就職を目指しております。
        </p>
      </div>
      <div className="flex justify-between ">
        <div>
          <img
            src="../../img/about_img.jpg"
            alt="顔写真"
            className="w-48 h-48"
          />
        </div>
        <div>
          <dl>
            {profile.map((data) => (
              <div key={data.title} className="flex content-center justify-between ml-8">
                <dt>{data.title} :</dt>
                <dd className="ml-28">{data.titleContent === "宮崎 聖大" ? data.titleContent + '(ミヤザキマヒロ)' : data.titleContent}</dd>
              </div>
            ))}
          </dl>
        </div>
      </div>
    </>
  );
};

export default About;
