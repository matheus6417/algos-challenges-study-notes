class Node<T> {
  value: T;

  left?: Node<T>;

  right?: Node<T>;

  constructor(value) {
    this.value = value;
    this.left = null;
    this.right = null;
  }
}

export default Node;
