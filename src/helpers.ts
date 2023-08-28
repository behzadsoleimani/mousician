export const getFilterColor = (level: number): string => {
  if (level <= 5) {
    return "#6fc13e";
  } else if (level <= 10) {
    return "#ff8e00";
  }
  return "#dc001c";
};
