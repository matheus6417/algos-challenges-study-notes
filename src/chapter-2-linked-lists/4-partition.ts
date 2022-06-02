import LinkedList from '../data-structures/linked-list';

const partition = (node, value) => {
  const beforeList = LinkedList.create();
  const afterList = LinkedList.create();

  let current = node;

  while (current) {
    if (current.value < value) {
      beforeList.unshift(current.value);
    } else {
      afterList.unshift(current.value);
    }
    current = current.next;
  }
  // combine the two lists
  beforeList.tail.next = afterList.head;
  beforeList.tail = afterList.tail;
  return beforeList;
};

export default partition;
