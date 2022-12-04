class Node {
  constructor(value) {
    this.value = value;
    this.next = null;
  }
}

class Stack {
  constructor() {
    this.top = null;
    this.bottom = null;
    this.length = 0;
  }

  peek() {
    if (this.isEmpty()) {
      return null;
    }

    return this.top;
  }

  push(value) {
    const newNode = new Node(value);
    this.length++;

    if (this.isEmpty()) {
      this.top = newNode;
      this.bottom = newNode;
    } else {
      const holdingPointer = this.top;
      this.top = newNode;
      this.top.next = holdingPointer;
    }

    return this;
  }

  pop() {
    if (this.isEmpty()) {
      return null;
    }

    if (this.top === this.bottom) {
      this.bottom = null;
    }
    this.top = this.top.next;
    this.length--;
    return this;
  }

  isEmpty() {
    if (this.top === null) {
      return true;
    }

    return false;
  }
}

const myStack = new Stack();
myStack.push('Google');
myStack.push('Udemy');
myStack.push('Discord');
console.log('myStack', myStack);
myStack.pop();
myStack.pop();
console.log('myStack.peek()', myStack.peek());
myStack.pop();
console.log('myStack', myStack);