const trueP = [
  [2, 0],
  [1, 0],
  [3, 1],
  [3, 2],
  [1, 3],
];

const cycleP = [
  [1, 0],
  [2, 1],
  [0, 2],
];

function canFinish(numCourses: number, prerequisites: number[][]): boolean {
  if (numCourses <= 1) {
    return true;
  }

  const adjMatrix = new Array(numCourses).fill(0).map(() => []);
  const inDegree = new Array(numCourses).fill(0);

  for (let i = 0; i < prerequisites.length; i++) {
    const [afterCourse, beforeCourse] = prerequisites[i];
    adjMatrix[beforeCourse].push(afterCourse);
    inDegree[afterCourse]++;
  }

  const stack = [];

  for (let i = 0; i < inDegree.length; i++) {
    if (inDegree[i] === 0) {
      stack.push(i);
    }
  }

  let count = 0;

  while (stack.length) {
    const currentNode = stack.pop();
    count++;
    const adjacentNodes = adjMatrix[currentNode];

    for (let i = 0; i < adjacentNodes.length; i++) {
      const adjacentNode = adjacentNodes[i];
      inDegree[adjacentNode]--;
      if (inDegree[adjacentNode] === 0) {
        stack.push(adjacentNode);
      }
    }
  }
  if (count === numCourses) {
    return true;
  }
  return false;
}

console.log(canFinish(trueP.length, trueP));
