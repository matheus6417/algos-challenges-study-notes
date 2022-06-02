export function merge(intervals: number[][]): number[][] {
  if (intervals.length <= 1) {
    return intervals;
  }

  intervals.sort((a, b) => a[0] - b[0]);

  let i = 0;

  while (i < intervals.length) {
    const first = intervals[i];
    const second = intervals[i + 1];

    if (isOverlap(first, second)) {
      intervals[i] = mergeIntervals(first, second);
      intervals.splice(i + 1, 1);
    } else {
      i++;
    }
  }
  return intervals;
}

function mergeIntervals(interval1: number[], interval2: number[]): number[] {
  const result = [];
  if (interval1[0] < interval2[0]) {
    result[0] = interval1[0];
  } else {
    result[0] = interval2[0];
  }

  if (interval1[1] < interval2[1]) {
    result[1] = interval2[1];
  } else {
    result[1] = interval1[1];
  }

  return result;
}

function isOverlap(interval1: number[], interval2: number[]): boolean {
  return interval1[1] >= interval2[0];
}

console.log(
  merge([
    [1, 3],
    [2, 6],
    [8, 10],
    [15, 18],
  ])
);
