// distance = [1,2,3,4]
//    index = [0,1,2,3]

export function distanceBetweenBusStops(
  distance: number[],
  start: number,
  destination: number
): number {
  let totalDistance = 0;
  let clockwiseDistance = 0;

  for (let i = 0; i < distance.length; i++) {
    if (start < destination && i >= start && i < destination) {
      clockwiseDistance += distance[i];
    }
    if (start > destination && (i >= start || i < destination)) {
      clockwiseDistance += distance[i];
    }
    totalDistance = totalDistance + distance[i];
  }

  return Math.min(clockwiseDistance, totalDistance - clockwiseDistance);
}

console.log(distanceBetweenBusStops([1, 2, 3, 4], 0, 1));
