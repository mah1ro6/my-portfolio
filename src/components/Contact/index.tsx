import React from 'react';
import { useForm } from 'react-hook-form';

type FormData = {
  firstName: string;
  lastName: string;
};

const Contact: React.FC = () => {
  const {
    register,
    setValue,
    handleSubmit,
    formState: { errors },
  } = useForm<FormData>();
  const onSubmit = handleSubmit((data) => console.log(data));

  const contactItems: string[] = [
    '法人名 (任意)',
    'お名前',
    'メールアドレス',
    'お問い合わせ内容',
  ];

  return (
    <div className='text-center'>
      <h1 className="text-left font-thin tracking-widest text-5xl mb-12">Contact</h1>
      <form onSubmit={onSubmit}>
        {contactItems.map((item) => (
          <div key={item} className="mt-8">
            <label className='float-left mb-3'>{item}</label>
            {item === 'お問い合わせ内容' ? (
              <textarea
                className="block w-full rounded-md border-gray-300 shadow-sm focus:border-indigo-300 focus:ring focus:ring-indigo-200 focus:ring-opacity-50"
                {...register('firstName')}
              />
            ) : (
              <input
                className="block w-full rounded-md border-gray-300 shadow-sm focus:border-indigo-300 focus:ring focus:ring-indigo-200 focus:ring-opacity-50"
                type="text"
                {...register('firstName')}
              />
            )}
          </div>
        ))}
        <button
          type="button"
          onClick={() => {
            setValue('lastName', 'luo');
          }}
          className="w-64 h-16 text-center leading-16 bg-gray-300 rounded-lg mt-10"
        >
          送信
        </button>
      </form>
    </div>
  );
};

export default Contact;
