import { sendIcon } from "assets";
import { FC } from "react";

type PropsType = {
  placeholder?: string;
};

export const Input: FC<PropsType> = ({ placeholder }) => {
  return (
    <div className="flex items-center justify-between bg-gray-100 rounded-md">
      <input
        className="p-3 bg-transparent"
        placeholder={placeholder}
        type="text"
      />
      <button className="h-8 w-8 mr-2 bg-violet-500 rounded-md">
        <img
          className="m-auto"
          src={sendIcon}
          alt="icon"
        />
      </button>
    </div>
  );
};
