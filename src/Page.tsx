import React, { ReactNode } from 'react';
import Header from './components/Header';
import ComponentsLayout from './layout/ComponentsLayout';

type Props = {
  children: ReactNode;
};

const PageLayout: React.FC<Props> = (props) => {
  return (
    <div>
      <Header />
      <ComponentsLayout>{props.children}</ComponentsLayout>
    </div>
  );
};

export default PageLayout;
