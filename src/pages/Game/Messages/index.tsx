import { FC } from "react";

type PropsType = {
  text: string;
  isMine: boolean;
};

export const Messages: FC<PropsType> = ({ text, isMine }) => {
  const messageStyle = isMine
    ? "self-end bg-violet-500 text-white rounded-ee-none"
    : "self-start bg-violet-50 text-black rounded-es-none";

  return (
    <div
      className={`inline-flex items-center justify-center py-1 px-3 mb-2 rounded-xl ${messageStyle}`}
    >
      {text}
    </div>
  );
};
