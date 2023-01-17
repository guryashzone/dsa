class Node {
  constructor(value) {
    this.value = value;
    this.next = null;
    this.prev = null;
  }
}

class DoublyLinkedList {
  constructor(value) {
    this.head = new Node(value);
    this.tail = this.head;
    this.length = 1;
  }

  prepend(value) {
    const newNode = new Node(value);
    newNode.next = this.head;
    this.head.prev = newNode;
    this.head = newNode;
    this.length++;
    return this;
  }

  append(value) {
    const newNode = new Node(value);
    newNode.prev = this.tail;
    this.tail.next = newNode;
    this.tail = newNode;
    this.length++;
    return this;
  }

  insert(index, value) {
    if (index >= this.length) {
      this.append(value);
      return this;
    }

    if (index === 0) {
      this.prepend(value);
      return this;
    }

    const newNode = new Node(value);
    let temp = this.traverseToIndex(index - 1);
    newNode.next = temp.next;
    newNode.prev = temp.prev;
    temp.next = newNode;
    this.length++;
    return this;
  }

  remove(index) {
    if (index < 0 || index >= this.length) {
      return this;
    }

    if (index === 0) {
      this.head = this.head.next;
      this.length--;
      return this;
    }

    let prevNode = this.traverseToIndex(index - 1);
    let nodeToDelete = prevNode.next;
    prevNode.next = nodeToDelete.next;

    if (index === this.length - 1) {
      this.tail = prevNode;
    }

    this.length--;
    return this;
  }

  traverseToIndex(index) {
    let counter = 0;
    let currentNode = this.head;
    while (counter !== index) {
      currentNode = currentNode.next;
      counter++;
    }
    return currentNode;
  }

  printList() {
    const array = [];
    let currentNode = this.head;
    while (currentNode !== null) {
      array.push(currentNode.value);
      currentNode = currentNode.next;
    }
    return array;
  }
}

const myLinkedList = new DoublyLinkedList(10);
myLinkedList.append(5);
myLinkedList.append(16);
// myLinkedList.prepend(1);
// myLinkedList.insert(2, 99);
// myLinkedList.insert(20, 88);
// myLinkedList.remove(5);
myLinkedList.remove(2);
// myLinkedList.append(101);
// myLinkedList.prepend(101);
console.log(myLinkedList.printList());
console.log(myLinkedList);