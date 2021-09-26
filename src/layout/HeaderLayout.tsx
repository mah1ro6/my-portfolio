import React, { ReactNode } from 'react';
import Header from '../components/Header';

type Props = {
  children: ReactNode;
};

export const HeaderLayout: React.FC<Props> = (props) => {
  return (
    <div>
      <Header />
      {props.children}
    </div>
  );
};
