// routes = [[1,2,7],[3,6,7]]

// maps stop values to route index
// { '1': [ 0 ], '2': [ 0 ], '3': [ 1 ], '6': [ 1 ], '7': [ 0, 1 ] }

function numBusesToDestination(
  routes: number[][],
  source: number,
  target: number
): number {
  const mapStopToRoute: { [key: string]: number[] } = {};

  for (let i = 0; i < routes.length; i++) {
    const currentRoute = routes[i];
    for (let j = 0; j < currentRoute.length; j++) {
      const currentStop = currentRoute[j];

      if (currentStop in mapStopToRoute) {
        mapStopToRoute[currentStop].push(i);
      } else {
        mapStopToRoute[currentStop] = [i];
      }
    }
  }

  const visited = new Set();
  let count = 0;

  const queue = [source];

  while (queue.length > 0) {
    count++;

    for (let i = 0; i < queue.length; i++) {
      const currStop = queue.shift();

      const currRoutesForStop = mapStopToRoute[currStop];
      for (let j = 0; j < currRoutesForStop.length; j++) {
        const route = currRoutesForStop[i];

        if (visited.has(route)) {
          continue;
        } else {
          visited.add(route);
          for (let k = 0; k < routes[route].length; k++) {
            const stop = routes[route][k];
            if (stop === target) {
              return count;
            }
            queue.push(stop);
          }
        }
      }
    }
  }

  return 0;
}

console.log(
  numBusesToDestination(
    [
      [1, 2, 7],
      [3, 6, 7],
    ],
    1,
    6
  )
);
