import React from 'react';
import '../style/index.css';

interface Profile {
  title: string;
  titleContent: string;
}
interface SkillsData {
  src: string;
  name: string;
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
      title: '趣味',
      titleContent: '海外ドラマ🎥',
    },
  ];

  const skillsData: SkillsData[] = [
    {
      src: '../../img/html-5.svg',
      name: 'HTML',
    },
    {
      src: '../../img/tailwindcss-icon.svg',
      name: 'Tailwind CSS',
    },
    {
      src: '../../img/react.svg',
      name: 'React',
    },
    {
      src: '../../img/nextjs.svg',
      name: 'Next.js',
    },
    {
      src: '../../img/typescript-icon.svg',
      name: 'TypeScript',
    },
    {
      src: '../../img/unity.svg',
      name: 'Unity',
    },
  ];

  return (
    <>
      <h1 className="font-thin tracking-widest text-5xl mb-12 sm:text-center">
        About
      </h1>
      <div className="mb-20 text-center md:text-left ">
        <h2 className="font-normal tracking-widest text-4xl mb-20 text-center underline text-gray-700">
          About Me
        </h2>
        <p className="md:mb-2 sm:mb-3">
          佐賀大学理工学部の応用化学コースに在籍しております。
        </p>
        <p className="md:mb-2 sm:mb-3">
          2020年の12月からプログラミング勉強開始。
        </p>
        <p className="md:mb-2 sm:mb-3">
          2021年の5月より受託開発の企業にて、アルバイト。
        </p>
        <p className="md:mb-2 sm:mb-3">現在、就職活動中。。。</p>
        <p className="md:mb-2 sm:mb-3">
          目標はフロントエンドエンジニア、またはWebディレクターへの就職を目指しております。
        </p>
      </div>
      <div className="flex justify-around mb-10 md:flex-col">
        <div className="mb-20">
          <img
            src="../../img/about_img.jpg"
            alt="顔写真"
            className="w-48 h-48 rounded-md sm:mx-auto"
          />
        </div>
        <div>
          <dl>
            {profile.map((data) => (
              <div
                key={data.title}
                className="flex content-center justify-start ml-8 md:ml-0"
              >
                <dt className="whitespace-nowrap mr-8 sm:mr-4">
                  {data.title} :
                </dt>
                <dd className="whitespace-nowrap">
                  {data.titleContent === '宮崎 聖大'
                    ? data.titleContent + '(ミヤザキ マヒロ)'
                    : data.titleContent}
                </dd>
              </div>
            ))}
          </dl>
        </div>
      </div>
      <div className="mb-40">
        <h2 className="font-normal tracking-widest text-4xl text-center underline text-gray-700">
          Skills
        </h2>
        <div className="flex justify-center flex-wrap md:justify-between">
          {skillsData.map((data) => (
            <div
              key={data.name}
              className="w-1/3 m-0 text-center mt-20 md:w-5/12 sm:w-full"
            >
              <img
                className="w-32 h-32 inline-block"
                src={data.src}
                alt="スキルのロゴ"
              />
              <p className="font-light mt-6">{data.name}</p>
            </div>
          ))}
        </div>
      </div>
    </>
  );
};

export default About;
