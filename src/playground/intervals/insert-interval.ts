export function insert(
  intervals: number[][],
  newInterval: number[]
): number[][] {
  if (intervals.length === 0) {
    return [newInterval];
  }
  if (intervals.length === 1 && isOverlap(intervals[0], newInterval)) {
    return [mergeIntervals(intervals[0], newInterval)];
  }
  if (intervals.length === 1 && !isOverlap(intervals[0], newInterval)) {
    if (intervals[0][0] < newInterval[0]) {
      return [intervals[0], newInterval];
    }
    return [newInterval, intervals[0]];
  }

  let i = 0;
  let is;

  while (i < intervals.length - 1) {
    const current = intervals[i];
    let next = intervals[i + 1];

    if (newInterval[0] > current[0] && newInterval[0] < next[0]) {
      intervals.splice(i + 1, 0, newInterval);
      next = intervals[i + 1];
    }
    if (isOverlap(current, next)) {
      intervals[i] = mergeIntervals(current, next);
      intervals.splice(i + 1, 1);
    } else {
      i++;
    }
  }
  return intervals;
}

function isOverlap(interval1: number[], interval2: number[]): boolean {
  return interval1[1] >= interval2[0] && interval1[0] <= interval2[1];
}

function mergeIntervals(interval1: number[], interval2: number[]): number[] {
  const start = Math.min(interval1[0], interval2[0]);
  const end = Math.max(interval1[1], interval2[1]);
  return [start, end];
}

console.log(
  insert(
    [
      [1, 2],
      [3, 5],
      [6, 7],
      [8, 10],
      [12, 16],
    ],
    [4, 8]
  )
);
