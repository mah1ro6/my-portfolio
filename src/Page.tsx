import React, { ReactNode } from 'react';
import { useHistory } from 'react-router-dom';
import Header from './components/Header';
import PageLayout from './layout/PageLayout';

type Props = {
  children: ReactNode;
};

const HeaderLayout: React.FC<Props> = (props) => {
  const history = useHistory();
  return (
    <div>
      <Header />
      <PageLayout>{props.children}</PageLayout>
      {history.location.pathname === '/' ? null : (
        <footer className="text-center bg-gray-100 border font-top tracking-wide">
          my portfolio
        </footer>
      )}
    </div>
  );
};

export default HeaderLayout;
