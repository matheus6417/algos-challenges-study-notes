const deleteMiddleNode = (node) => {
  if (!node || !node.next) {
    throw new Error('invalid node');
  }
  node.value = node.next.value;
  node.next = node.next.next;
};

export default deleteMiddleNode;
