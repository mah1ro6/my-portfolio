import React from 'react';

interface ProductionsData {
  url: string;
  src: string;
  production: string;
  text: string;
}

const Works: React.FC = () => {
  
  const productionsData: ProductionsData[] = [
    {
      url: 'https://search-app-32ab1.firebaseapp.com/',
      src: '../../img/photo-search-app.png',
      production: '画像検索アプリ',
      text:
        'React × TypeScript × Firebase で作成したアプリです。\n非同期処理やTypeScriptの良いアウトプットになりました。',
    },
  ];

  return (
    <div>
      <h1 className="font-thin tracking-widest text-5xl mb-24 md:text-center sm:text-center">
        Works
      </h1>
      <div>
        <h2 className="font-normal tracking-widest text-4xl text-center underline text-gray-700">
          Production
        </h2>
        {productionsData.map((data) => (
          <div
            key={data.url}
            className="flex flex-col content-center justify-center mt-24"
          >
            <h2 className="font-thin text-2xl font-body text-gray-600 tracking-wider">
              {data.production}
            </h2>
            <img src={data.src} className="w-full block mx-auto h-auto mt-10 rounded-md" />
            <p className="font-thin font-body text-gray-600 tracking-wide mt-6">
              {data.text}
            </p>
            <a
              href={data.url}
              target="_blank"
              rel="noreferrer"
              className="text-green-400 underline mt-6"
            >
              こちらから飛べます
            </a>
          </div>
        ))}
      </div>
    </div>
  );
};

export default Works;
