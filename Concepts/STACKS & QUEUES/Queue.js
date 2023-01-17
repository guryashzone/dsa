class Node {
  constructor(value) {
    this.value = value;
    this.next = null;
  }
}

class Queue {
  constructor() {
    this.first = null;
    this.last = null;
    this.length = 0;
  }

  peek() {
    if (this.isEmpty()) {
      return null;
    }

    return this.first;
  }

  enqueue(value) {
    const newNode = new Node(value);

    if (this.isEmpty()) {
      this.first = newNode;
      this.last = newNode;
    } else {
      this.last.next = newNode;
      this.last = newNode;
    }

    this.length++;
    return this;
  }

  dequeue() {
    if (this.isEmpty()) {
      return null;
    }

    if (this.first === this.last) {
      this.last = null;
    }

    this.first = this.first.next;
    this.length--;
    return this;
  }

  isEmpty() {
    if (this.last === null) {
      return true;
    }

    return false;
  }
}

const myQueue = new Queue();
myQueue.enqueue('Larry');
myQueue.enqueue('Sundar');
myQueue.enqueue('Harry');
myQueue.enqueue('Guryash');
console.log('myQueue', myQueue);
myQueue.dequeue();
myQueue.dequeue();
console.log('myQueue.peek()', myQueue.peek());
myQueue.dequeue();
myQueue.dequeue();
console.log('myQueue', myQueue);