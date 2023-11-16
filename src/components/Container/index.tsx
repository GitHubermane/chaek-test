import { FC, ReactNode } from "react";

type PropsType = {
  children: ReactNode;
};

export const Container: FC<PropsType> = ({ children }) => {
  return <div className="bg-white rounded-2xl max-w-xl">{children}</div>;
};
