import React, { ReactNode } from 'react';
import { useHistory } from 'react-router-dom';
import Home from '../components/Home';

type Props = {
  children: ReactNode;
};

const PageLayout: React.FC<Props> = (props) => {
  const history = useHistory();
  console.log(history)
  return (
    <div
      className={
        history.location.pathname === '/'
          ? 'h-auto'
          : 'h-auto w-3/5 mx-auto mt-20'
      }
    >
      {props.children}
    </div>
  );
};

export default PageLayout;
