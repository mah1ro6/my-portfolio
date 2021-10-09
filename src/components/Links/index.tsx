import React from 'react';
import { useHistory } from 'react-router-dom';

type Props = {
  OnClickHome: () => void;
  OnClickAbout: () => void;
  OnClickWorks: () => void;
  OnClickContact: () => void;
};

type ButtonData = {
  item: string;
  props: () => void;
};

const Links: React.FC<Props> = (props) => {
  const history = useHistory();

  const buttonData: ButtonData[] = [
    {
      item: 'Home',
      props: props.OnClickHome,
    },
    {
      item: 'About',
      props: props.OnClickAbout,
    },
    {
      item: 'Works',
      props: props.OnClickWorks,
    },
    {
      item: 'Contact',
      props: props.OnClickContact,
    },
  ];

  return (
    <nav>
      <ul className="flex justify-start">
        {buttonData.map((data) => (
          <li
            key={data.item}
            className={
              history.location.pathname === '/'
                ? 'pl-16 pr-16 text-gray-700 hover:opacity-60 transition duration-500 ease-in-out'
                : 'pl-5 pr-5 text-gray-700  hover:opacity-75'
            }
          >
            <button
              id="header-link"
              className={
                history.location.pathname === '/'
                  ? 'transition duration-500 ease-in-out tracking-wider underline'
                  : 'transition duration-500 ease-in-out underline'
              }
              onClick={data.props}
            >
              {data.item}
            </button>
          </li>
        ))}
      </ul>
    </nav>
  );
};

export default Links;
