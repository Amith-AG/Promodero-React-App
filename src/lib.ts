export const formatTime = (time: number) => {
  const minute = Math.floor(time / 60);
  const second = time % 60;
  return `${minute < 10 ? "0" + minute.toString() : minute}:${
    second < 10 ? "0" + second.toString() : second
  }`;
};
