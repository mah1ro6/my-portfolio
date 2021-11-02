import React, { useEffect, useState } from 'react';
import { useForm } from 'react-hook-form';
import toast, { Toaster } from 'react-hot-toast';

type FormData = {
  corporateName: string;
  name: string;
  mailAddress: string;
  inquiry: string;
};

const Contact: React.FC = () => {
  const {
    register,
    handleSubmit,
    reset,
    formState: { errors, isSubmitSuccessful },
  } = useForm<FormData>({
    mode: 'onSubmit',
  });

  const [inquiryLength, setInquiryLength] = useState<string>('');

  const sendMessage = (data: FormData) => {
    const payload = {
      text: `貴社名:${data.corporateName}\nお名前:${data.name}\nメールアドレス:${data.mailAddress}\nお問い合わせ内容:${data.inquiry}`,
    };

    const url = process.env.REACT_APP_SLACK_URL;

    fetch(url!, {
      method: 'POST',
      body: JSON.stringify(payload),
    });
  };

  const onSubmit = (data: FormData) => {
    return new Promise((resolve) => {
      setTimeout(() => {
        sendMessage(data);
        resolve(false);
      }, 2500);
      toast.loading('送信中です');
    }).then(() => {
      toast.remove();
      successNotify();
    });
  };

  useEffect(() => {
    if (isSubmitSuccessful) {
      reset();
      setInquiryLength('');
    }
  }, [isSubmitSuccessful]);

  const successNotify = () =>
    toast.success('データの送信に成功しました！', {
      style: {
        border: '1px solid #999999',
        padding: '16px',
        color: '#444444',
      },
      iconTheme: {
        primary: '#999999',
        secondary: '#FFFAEE',
      },
    });

  const handleChange = (e: React.ChangeEvent<HTMLTextAreaElement>) => {
    setInquiryLength(e.target.value);
  };

  return (
    <div>
      <h1 className="text-left font-thin tracking-widest text-5xl mb-12 md:mb-16 sm:text-center">
        Contact
      </h1>
      <form onSubmit={handleSubmit(onSubmit)} method='POST'>
        <div className="mt-8 md:mt-11">
          <label className="float-left mb-3">貴社名（任意）</label>
          <input
            className="block w-full rounded-md border-gray-300 shadow-sm focus:border-indigo-300 focus:ring focus:ring-indigo-200 focus:ring-opacity-50"
            type="text"
            placeholder="株式会社○○○○"
            {...register('corporateName', { required: false })}
          />
          {errors.corporateName && (
            <span className="text-red-500 float-left">
              ※貴社名を正確に入力してください
            </span>
          )}
        </div>
        <div className="mt-8 md:mt-11">
          <label className="float-left mb-3">お名前</label>
          <input
            className="block w-full rounded-md border-gray-300 shadow-sm focus:border-indigo-300 focus:ring focus:ring-indigo-200 focus:ring-opacity-50"
            type="text"
            placeholder="山田 一郎"
            {...register('name', { required: true, maxLength: 100 })}
          />
          {errors.name && (
            <span className="text-red-500 float-left">
              ※お名前を正確に入力してください
            </span>
          )}
        </div>
        <div className="mt-8 md:mt-11">
          <label className="float-left mb-3">メールアドレス</label>
          <input
            className="block w-full rounded-md border-gray-300 shadow-sm focus:border-indigo-300 focus:ring focus:ring-indigo-200 focus:ring-opacity-50"
            type="text"
            placeholder="sample@example.co.jp"
            {...register('mailAddress', {
              required: true,
              maxLength: 100,
              pattern: /^[A-Za-z0-9]{1}[A-Za-z0-9_.-]*@{1}[A-Za-z0-9_.-]{1,}.[A-Za-z0-9]{1,}$/,
            })}
          />
          {errors.mailAddress && (
            <span className="text-red-500 float-left">
              ※メールアドレスを正確に入力してください
            </span>
          )}
        </div>
        <div className="mt-8 md:mt-11">
          <label className="float-left mb-3">お問い合わせ内容</label>
          <textarea
            placeholder="こちらにお問い合わせ内容を入力してください"
            className="block w-full rounded-md border-gray-300 shadow-sm focus:border-indigo-300 focus:ring focus:ring-indigo-200 focus:ring-opacity-50"
            {...register('inquiry', { required: true, maxLength: 255 })}
            onChange={handleChange}
          />
          <p className="float-right">{inquiryLength.length}/255</p>
          {errors.inquiry && (
            <span className="text-red-500 float-left">
              ※お問い合わせ内容を正確に入力してください
            </span>
          )}
        </div>
        <button
          type="submit"
          className="w-64 h-16 leading-16 block mx-auto bg-gray-300 rounded-lg mt-16 shadow hover:bg-gray-400 hover:text-white md:mt-24 md:w-full"
        >
          送信
        </button>
      </form>
      <Toaster />
    </div>
  );
};

export default Contact;
