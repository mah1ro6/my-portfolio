import React from 'react';

type Props = {
  OnClickHome: () => void;
  OnClickAbout: () => void;
  OnClickWorks: () => void;
  OnClickContact: () => void;
};

const Links: React.FC<Props> = (props) => {
  return (
    <div className="">
      <nav>
        <ul className="flex justify-start">
          <li className="list-none pl-10 text-gray-400 hover:opacity-75">
            <button className="border-none bg-gray-100 text-gray-400" onClick={props.OnClickHome}>Home</button>
          </li>
          <li className="list-none pl-10 text-gray-400 hover:opacity-75">
            <button className="border-none bg-gray-100 text-gray-400" onClick={props.OnClickAbout}>About</button>
          </li>
          <li className="list-none pl-10 text-gray-400 hover:opacity-75">
            <button className="border-none bg-gray-100 text-gray-400" onClick={props.OnClickWorks}>Works</button>
          </li>
          <li className="list-none pl-10 text-gray-400 hover:opacity-75">
            <button className="border-none bg-gray-100 text-gray-400" onClick={props.OnClickContact}>Contact</button>
          </li>
        </ul>
      </nav>
    </div>
  );
};

export default Links;
