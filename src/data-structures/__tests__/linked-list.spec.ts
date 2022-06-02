import LinkedList from '../linked-list';

describe('linkedList', () => {
  it('should create a new linked list on calling create()', () => {
    const linkedList = LinkedList.create();
    expect(linkedList).toHaveProperty('head');
    expect(linkedList).toHaveProperty('tail');
  });
  it('should create a new linked list with proper values on calling create()', () => {
    const linkedList = LinkedList.create([1, 2, 3]);
    expect(linkedList).toHaveProperty('head');
    expect(linkedList).toHaveProperty('tail');

    expect(linkedList.head.value).toBe(1);
    expect(linkedList.tail.value).toBe(3);
    expect(linkedList.head.next.value).toBe(2);
    expect(linkedList.head.next.next.value).toBe(3);
  });
  it('should append a value to the end of the linked list on calling append() when the list is empty', () => {
    const linkedList = LinkedList.create([]);
    linkedList.append(4);
    expect(linkedList.tail.value).toBe(4);
    expect(linkedList.tail.value).toBe(4);
  });
  it('should append a value to the end of the linked list on calling append() when the list has values', () => {
    const linkedList = LinkedList.create([1, 2, 3]);
    linkedList.append(4);
    expect(linkedList.tail.value).toBe(4);
  });

  it('should add a value to the beginning of the linked list on calling unshift() when the list has no values', () => {
    const linkedList = LinkedList.create([]);
    linkedList.unshift(4);
    expect(linkedList.head.value).toBe(4);
    expect(linkedList.tail.value).toBe(4);
  });

  it('should add a value to the beginning of the linked list on calling unshift() when the list has values', () => {
    const linkedList = LinkedList.create([1, 2, 3]);
    linkedList.unshift(4);
    expect(linkedList.head.value).toBe(4);
    expect(linkedList.head.next.value).toBe(1);
  });

  it('should get the proper value at index by calling _getNodeByIndex', () => {
    const emptyLinkedList = LinkedList.create([]);
    expect(emptyLinkedList._getNodeByIndex(1)).toBeUndefined();
    expect(emptyLinkedList._getNodeByIndex(0)).toBeUndefined();

    const shortLinkedList = LinkedList.create(['istanbul', 'izmir', 'Batman']);
    expect(shortLinkedList._getNodeByIndex(2).value).toBe('Batman');
    expect(shortLinkedList._getNodeByIndex(3)).toBeUndefined();

    const longLinkedList = LinkedList.create([
      'red',
      'orange',
      'yellow',
      'green',
      'blue',
      'violet',
    ]);
    expect(longLinkedList._getNodeByIndex(0).value).toBe('red');
    expect(longLinkedList._getNodeByIndex(1).value).toBe('orange');
    expect(longLinkedList._getNodeByIndex(2).value).toBe('yellow');
    expect(longLinkedList._getNodeByIndex(3).value).toBe('green');
    expect(longLinkedList._getNodeByIndex(4).value).toBe('blue');
    expect(longLinkedList._getNodeByIndex(5).value).toBe('violet');
  });
  it('should create an Array on toArray()', () => {
    const emptyLinkedList = LinkedList.create([]);
    expect(emptyLinkedList.toArray()).toMatchObject([]);

    const shortLinkedList = LinkedList.create(['istanbul', 'izmir', 'Batman']);
    expect(shortLinkedList.toArray()).toMatchObject([
      'istanbul',
      'izmir',
      'Batman',
    ]);

    const longLinkedList = LinkedList.create([
      'red',
      'orange',
      'yellow',
      'green',
      'blue',
      'violet',
    ]);
    expect(longLinkedList.toArray()).toMatchObject([
      'red',
      'orange',
      'yellow',
      'green',
      'blue',
      'violet',
    ]);
  });
  it('should return null on calling unshift() when the list has no values', () => {
    const linkedList = LinkedList.create();
    const poppedValue = linkedList.shift();
    expect(poppedValue).toBe(null);
  });
  it('should return the first element on calling unshift() when the list has values', () => {
    const linkedList = LinkedList.create(['a', 'b', 'c', 'd']);
    const poppedValue0 = linkedList.shift();
    const poppedValue1 = linkedList.shift();
    const poppedValue2 = linkedList.shift();
    const poppedValue3 = linkedList.shift();
    expect(poppedValue0).toBe('a');
    expect(poppedValue1).toBe('b');
    expect(poppedValue2).toBe('c');
    expect(poppedValue3).toBe('d');
  });
});
