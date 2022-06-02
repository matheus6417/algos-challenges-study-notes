const managersArray = [2, 2, 4, 6, -1, 4, 4, 5];
const informTimeArray = [0, 0, 4, 0, 7, 3, 6, 0];

export function numOfMinutes(
  n: number,
  headID: number,
  manager: number[],
  informTime: number[]
): number {
  const adjList: number[][] = new Array(n).fill(0).map(() => new Array(0));

  for (let e = 0; e < n; e++) {
    const currentManager = manager[e];
    if (currentManager === -1) {
      continue;
    }
    adjList[currentManager].push(e);
  }

  return dfsMaxTime(headID, adjList, informTime);
}

function dfsMaxTime(
  currentID: number,
  adjList: number[][],
  informTime: number[]
): number {
  if (adjList[currentID].length === 0) {
    return 0;
  }
  let max = 0;
  const subordinates = adjList[currentID];
  for (let i = 0; i < subordinates.length; i++) {
    const employee = subordinates[i];
    const currentTime = dfsMaxTime(employee, adjList, informTime);
    max = Math.max(max, currentTime);
  }
  return max + informTime[currentID];
}

console.log(numOfMinutes(8, 4, managersArray, informTimeArray));
