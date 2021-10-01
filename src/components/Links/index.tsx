import React from 'react';


type Props = {
  OnClickHome: () => void;
  OnClickAbout: () => void;
  OnClickWorks: () => void;
  OnClickContact: () => void;
};

type ButtonData = {
  item: string,
  props: () => void
}

const Links: React.FC<Props> = (props) => {
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
          <li key={data.item} className="list-none pl-10 text-gray-400 hover:opacity-75">
            <button
              className="border-none bg-gray-100 text-gray-400"
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
