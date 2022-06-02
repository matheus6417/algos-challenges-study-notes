function findOrder(numCourses: number, prerequisites: number[][]): number[] {
  const adjMatrix = new Array(numCourses).fill(0).map(() => []);
  const visited = new Set();
  const cycle = new Set();
  const output = [];

  for (let i = 0; i < prerequisites.length; i++) {
    const [course, preReq] = prerequisites[i];
    adjMatrix[course].push(preReq);
  }

  function dfs(course) {
    if (cycle.has(course)) {
      return false;
    }
    if (visited.has(course)) {
      return true;
    }
    cycle.add(course);

    const preReqs = adjMatrix[course];

    for (let i = 0; i < preReqs.length; i++) {
      const preReq = preReqs[i];

      if (dfs(preReq) === false) {
        return false;
      }
    }

    cycle.delete(course);
    visited.add(course);

    output.push(course);
    return true;
  }

  for (let i = 0; i < numCourses; i++) {
    if (dfs(i) === false) {
      return [];
    }
  }

  return output;
}
