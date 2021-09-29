import React from 'react';

interface SkillsData {
  src: string;
  name: string;
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

  return (
    <div>
      <h1 className="font-thin tracking-widest text-5xl mb-24">Works</h1>
      <h2 className="font-normal tracking-widest text-4xl text-center underline">
        Skills
      </h2>
      <div className="flex justify-center flex-wrap">
        {skillsData.map((data) => (
          <div key={data.name} className="w-1/3 m-0 text-center mt-20">
            <img className="w-32 h-32 inline-block" src={data.src} alt="" />
            <p className="font-light mt-6">{data.name}</p>
          </div>
        ))}
      </div>
      {/* <a href="https://search-app-32ab1.firebaseapp.com/">テスト</a> */}
    </div>
  );
};

export default Works;
