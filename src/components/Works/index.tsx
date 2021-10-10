import React from 'react';

interface SkillsData {
  src: string;
  name: string;
}

interface ProductionsData {
  url: string;
  src: string;
  production: string;
  text: string;
}

const Works: React.FC = () => {
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

  const productionsData: ProductionsData[] = [
    {
      url: 'https://search-app-32ab1.firebaseapp.com/',
      src: '../../img/photo-search-app.png',
      production: '画像検索アプリ',
      text:
        'React × TypeScript × firebase で作成したアプリです。\n非同期処理やTypeScriptの良いアウトプットになりました。',
    },
  ];

  return (
    <div>
      <h1 className="font-thin tracking-widest text-5xl mb-24 md:text-center sm:text-center">Works</h1>
      <div className="mb-40">
        <h2 className="font-normal tracking-widest text-4xl text-center underline text-gray-700">
          Skills
        </h2>
        <div className="flex justify-center flex-wrap md:justify-around">
          {skillsData.map((data) => (
            <div key={data.name} className="w-1/3 m-0 text-center mt-20 md:w-5/12 sm:w-full">
              <img className="w-32 h-32 inline-block" src={data.src} alt="スキルのロゴ" />
              <p className="font-light mt-6">{data.name}</p>
            </div>
          ))}
        </div>
      </div>
      <div>
        <h2 className="font-normal tracking-widest text-4xl text-center underline text-gray-700">
          Production
        </h2>
        {productionsData.map((data) => (
          <div key={data.url} className="flex flex-col content-center justify-center mt-24">
            <h2 className="font-thin text-2xl font-body text-gray-600 tracking-wider">
              {data.production}
            </h2>
            <img src={data.src} className="w-full block mx-auto h-auto mt-10" />
            <p className="font-thin font-body text-gray-600 tracking-wide mt-6">{data.text}</p>
            <a href={data.url} 
            target="_blank"
            rel="noreferrer"
            className="text-green-400 underline mt-6">
              こちらから飛べます
            </a>
          </div>
        ))}
      </div>
    </div>
  );
};

export default Works;
