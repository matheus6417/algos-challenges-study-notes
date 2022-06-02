const kThToLast = (head, k) => {
  let runner = head;
  let walker = head;
  let hopCount = 0;
  while (runner && hopCount < k) {
    runner = runner.next;
    hopCount += 1;
  }
  if (hopCount !== k) {
    throw new Error("Length of list can't be less than k");
  }
  while (runner.next) {
    runner = runner.next;
    walker = walker.next;
  }
  return walker.value;
};

export default kThToLast;
