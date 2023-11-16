import { FC } from "react";

type PropsType = {
  percentage: number;
};

export const StatusBar: FC<PropsType> = ({ percentage }) => {
  return (
    <div className="h-1 w-full bg-gray-100">
      <div
        className="h-full bg-violet-300 transition-all"
        style={{ width: `${percentage}%` }}
      />
    </div>
  );
};
