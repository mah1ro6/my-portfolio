import React, { ReactNode } from 'react';
import Header from './components/Header';
import PageLayout from './layout/PageLayout';

type Props = {
  children: ReactNode;
};

const HeaderLayout: React.FC<Props> = (props) => {
  return (
    <div>
      <Header />
      <PageLayout>{props.children}</PageLayout>
    </div>
  );
};

export default HeaderLayout;
