export const getFilterColor = (level: number): string => {
  if (level <= 5) {
    return "#6fc13e";
  } else if (level <= 10) {
    return "#ff8e00";
  }
  return "#dc001c";
};

export function getRange(start: number, end: number) {
  const result = [];
  const smaller = Math.min(start, end);
  const larger = Math.max(start, end);

  for (let i = smaller; i <= larger; i++) {
    result.push(i);
  }

  return result;
}

export function getLevelRangeQuery(selectedRange: number[]): string {
  if (!selectedRange.length) return "";
  const result = selectedRange.map((level) => `&level=${level}`).join("");

  return result;
}
