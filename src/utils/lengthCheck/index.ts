export const lengthCheck = (time: number) => {
  const timeStr = time.toString();
  if (timeStr.length === 1) {
    return `0${timeStr}`;
  }
  return timeStr;
};
