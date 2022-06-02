// This is an implementation of Floyd's Tortoise and Hare Algorithm. For more info, check
// https://en.wikipedia.org/wiki/Cycle_detection#Floyd's_Tortoise_and_Hare

const detectLoop = (list) => {
  let walker = list.head;
  let runner = list.head;

  // loop until runner catches up with walker
  while (runner && runner.next) {
    walker = walker.next;
    runner = runner.next.next;

    if (walker === runner) {
      break;
    }
  }
  if (!runner || !runner.next) {
    return null;
  }
  // find the start of the loop. to do that, move walker pointer back to head
  // and iterate until runner and walker meet again
  walker = list.head;
  while (runner !== walker) {
    runner = runner.next;
    walker = walker.next;
  }
  return walker;
};

export default detectLoop;
