import React, { useCallback } from 'react';
import Links from '../Links';
import { useHistory } from 'react-router';

const Header: React.FC = () => {
  const history = useHistory();

  const OnClickHome = useCallback(() => {
    history.push('/');
  }, []);

  const OnClickAbout = useCallback(() => {
    history.push('/about');
  }, []);

  const OnClickWorks = useCallback(() => {
    history.push('/works');
  }, []);

  const OnClickContact = useCallback(() => {
    history.push('/contact');
  }, []);

  return (
    <div
      className={
        history.location.pathname === '/'
          ? 'flex flex-col justify-around items-center absolute top-1/3 bg-opacity-0 w-full h-1/3 sm:justify-between'
          : 'bg-gray-50 flex justify-around items-center h-24 shadow md:flex-col'
      }
    >
      <h1
        id="header-top"
        className={
          history.location.pathname === '/'
            ? 'text-gray-600 font-mono font-extralight tracking-widest text-center sm:text-4xl'
            : 'text-gray-700 tracking-widest font-serif text-2xl'
        }
      >
        <span>{history.location.pathname === '/' ? 'Welcome To ' : null}</span>
        {history.location.pathname === '/' ? (
          <span>
            <br />
            <br />
          </span>
        ) : null}
        MY PORTFOLIO
      </h1>
      <Links
        OnClickHome={OnClickHome}
        OnClickAbout={OnClickAbout}
        OnClickWorks={OnClickWorks}
        OnClickContact={OnClickContact}
      />
    </div>
  );
};

export default Header;
