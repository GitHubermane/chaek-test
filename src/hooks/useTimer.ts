import { useState } from "react";

export const useTimer = () => {
  const [seconds, setSeconds] = useState(120);

  const timeout = setTimeout(() => {
    setSeconds(s => s - 1);
  }, 1000);

  if (seconds === 0) clearTimeout(timeout);

  return seconds;
};
