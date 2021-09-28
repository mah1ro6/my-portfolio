import React, { ReactNode } from "react";

type Props = {
  children: ReactNode;
}

const PageLayout: React.FC<Props> = (props) => {
  return(
    <div className="h-auto w-3/5 mx-auto mt-20">
      {props.children}
    </div>
  )
}

export default PageLayout;