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

  const resButtonData: ButtonData[] = buttonData.filter((data) => {
    if (history.location.pathname === '/') {
      return data.item !== 'Home';
    } else {
      return data;
    }
  });

  return (
    <nav>
      <ul className="flex justify-start flex-wrap w-full md:mb-3 sm:justify-center">
        {resButtonData.map((data) => (
          <li
            key={data.item}
            className={
              history.location.pathname === '/'
                ? 'pl-16 pr-16 text-gray-700 text-2xl hover:opacity-60 md:text-center md:mt-8 md:pl-6 md:pr-6 sm:pl-4 sm:pr-4 md:w-1/2 '
                : 'pl-5 pr-5 text-gray-700 sm:pl-3 sm:pr-3 hover:opacity-75'
            }
          >
            <button
              id="header-link"
              className={
                history.location.pathname === '/'
                  ? 'tracking-wider underline font-light'
                  : 'underline'
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
