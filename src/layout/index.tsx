import React from "react";

const Layout: React.FC = (props) => {
  return(
    <div className="clear-both h-screen ">
      {props.children}
    </div>
  )
}