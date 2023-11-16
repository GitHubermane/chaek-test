import { lengthCheck } from "utils";

export const timeFormatter = (seconds: number) => {
  const mins = Math.floor(seconds / 60);
  const secs = seconds - mins * 60;

  return `${lengthCheck(mins)}:${lengthCheck(secs)}`;
};
