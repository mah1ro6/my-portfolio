import React, { ReactNode } from 'react';
import { useHistory } from 'react-router-dom';
import Header from './components/Header';
import ComponentsLayout from './layout/ComponentsLayout';

type Props = {
  children: ReactNode;
};

const PageLayout: React.FC<Props> = (props) => {
  const history = useHistory();
  return (
    <div>
      <Header />
      <ComponentsLayout>{props.children}</ComponentsLayout>
      {history.location.pathname === '/' ? null : (
        <footer className="text-center bg-gray-100 border font-top tracking-wide">
          my portfolio
        </footer>
      )}
    </div>
  );
};

export default PageLayout;
