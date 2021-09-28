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
    <div className="bg-gray-100 flex justify-around items-center h-24">
      <h1 className="text-gray-400 font-serif text-2xl">MY PORTFOLIO</h1>
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
