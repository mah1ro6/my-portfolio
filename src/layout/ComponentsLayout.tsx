import React, { ReactNode } from 'react';
import { useHistory } from 'react-router-dom';


type Props = {
  children: ReactNode;
};

const PageLayout: React.FC<Props> = (props) => {
  const history = useHistory();
  return (
    <div
      className={
        history.location.pathname === '/'
          ? ''
          : 'h-auto w-3/5 mx-auto mt-20 mb-32 sm:w-2/3'
      }
    >
      {props.children}
    </div>
  );
};

export default PageLayout;
