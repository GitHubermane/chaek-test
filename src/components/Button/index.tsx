import { FC } from "react";

type PropsType = {
  children: string;
};

export const Button: FC<PropsType> = ({ children }) => {
  return (
    <button className="px-4 py-2 text-white bg-violet-600 rounded-md">
      {children}
    </button>
  );
};
