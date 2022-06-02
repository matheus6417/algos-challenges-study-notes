const removeDupsWithHash = (node) => {
  const elements = new Set();
  let current = node;
  elements.add(current.value);

  while (current.next) {
    if (elements.has(current.next.value)) {
      // skip next node
      current.next = current.next.next;
    } else {
      elements.add(current.next.value);
      current = current.next;
    }
  }
};

const removeDupsNoHash = (node) => {
  let current = node;
  while (current) {
    let runner = current;
    while (runner.next) {
      if (runner.next.value === current.value) {
        runner.next = runner.next.next;
      } else {
        runner = runner.next;
      }
    }
    current = current.next;
  }
  return node.list;
};

export { removeDupsNoHash, removeDupsWithHash };
