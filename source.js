console.log(`Hi welcome to js revison`);

const bubbleSort_ASEC = (array) => {
  for (let i = array.length - 1; i > 0; i--) {
    for (let j = 0; j < i; j++) {
      if (array[j] > array[j + 1]) {
        [array[j + 1], array[j]] = [array[j], array[j + 1]];
      }
    }
  }

  return array;
};

const bubbleSort_DESC = (array) => {
  for (let i = array.length - 1; i > 0; i--) {
    for (let j = 0; j < i; j++) {
      if (array[j + 1] > array[j]) {
        [array[j + 1], array[j]] = [array[j], array[j + 1]];
      }
    }
  }
  return array;
};

console.log(`BubbleSort Asecending==>`, bubbleSort_ASEC([6, 2, 3, 5, 4, 1]));
console.log(`BubblesortDescending==>`, bubbleSort_DESC([6, 2, 3, 5, 4, 1]));

// Selection sort

const selectionSortASEC = (array) => {
  let min;
  for (let i = 0; i < array.length - 1; i++) {
    min = i;
    for (let j = i + 1; j < array.length; j++) {
      if (array[j] < array[min]) {
        min = j;
      }
    }

    if (i !== min) {
      [array[i], array[min]] = [array[min], array[i]];
    }
  }
  return array;
};

console.log(
  `Selection sort Asecending==>`,
  selectionSortASEC([6, 2, 3, 5, 4, 1])
);

const selectionSortDESC = (array) => {
  let max;
  for (let i = 0; i < array.length - 1; i++) {
    max = i;
    for (let j = i + 1; j < array.length; j++) {
      if (array[j] > array[max]) max = j;
    }
    if (max !== i) {
      [array[i], array[max]] = [array[max], array[i]];
    }
  }
  return array;
};

console.log(
  `Selection sort Desencding==>`,
  selectionSortDESC([6, 2, 3, 5, 4, 1])
);

// Insertion Sort always start with second item

const insertionSortASEC = (array) => {
  let temp;
  for (let i = 1; i < array.length; i++) {
    temp = array[i];
    for (var j = i - 1; j > -1 && array[j] > temp; j--) {
      array[j + 1] = array[j];
    }
    array[j + 1] = temp;
  }
  return array;
};

console.log(
  `Insertion sort Asecending==>`,
  insertionSortASEC([6, 2, 3, 5, 4, 1])
);

const insertionSortDSEC = (array) => {
  let temp;
  for (let i = 1; i < array.length; i++) {
    temp = array[i];

    for (var j = i - 1; j > -1 && temp > array[j]; j--) {
      array[j + 1] = array[j];
    }
    array[j + 1] = temp;
  }
  return array;
};

console.log(
  `Insertion sort Descendin==>`,
  insertionSortDSEC([6, 2, 3, 5, 4, 1])
);

// Linked List

class Node {
  constructor(value) {
    this.value = value;
    this.next = null;
  }
}

class LinkedList {
  constructor(value) {
    const node = new Node(value);
    this.head = node;
    this.tail = node;
    this.length = 1;
  }

  push(value) {
    const node = new Node(value);
    if (!this.head) {
      this.head = node;
      this.tail = node;
    } else {
      this.tail.next = node;
      this.tail = node;
    }
    this.length++;
    return this;
  }

  pop() {
    if (!this.head) return undefined;

    let temp = this.head;
    let pre = this.head;

    while (temp.next) {
      pre = temp;
      temp = temp.next;
    }

    this.tail = pre;
    this.tail.next = null;
    this.length--;

    // Edge case if we have only one node;

    if (this.length === 0) {
      this.head = null;
      this.tail = null;
    }

    return temp;
  }

  unshift(value) {
    const newNode = new Node(value);

    if (!this.head) {
      this.head = newNode;
      this.tail = newNode;
    } else {
      newNode.next = this.head;
      this.head = newNode;
    }
    this.length++;
    return this;
  }

  shift() {
    if (!this.head) return undefined;

    let temp = this.head;
    this.head = this.head.next;
    temp.next = null;
    this.length--;
    if (this.length === 0) {
      this.tail = null;
    }

    return temp;
  }

  get(index) {
    if (index < 0 || index >= this.length) {
      return undefined;
    }

    let temp = this.head;
    for (let i = 0; i < index; i++) {
      temp = temp.next;
    }
    return temp;
  }

  set(index, value) {
    // if (index < 0 || index >= this.length) {
    //   return undefined;
    // }
    // let temp = this.head;

    // for (let i = 0; i < index; i++) {
    //   temp = temp.next;
    // }

    // temp.value = value;

    // return this;

    // DRY Principal
    let temp = this.get(index);

    if (temp) {
      temp.value = value;
      return true;
    }
    return false;
  }

  insert(index, value) {
    if (index === 0) return this.unshift(value);
    if (index === this.length) return this.push(value);
    if (index < 0 || index > this.length) return false;
    const newNode = new Node(value);
    const temp = this.get(index - 1);

    newNode.next = temp.next;
    temp.next = newNode;
    this.length++;
    return true;
  }
  remove(index) {
    if (index === 0) return this.shift;
    if (index === this.length - 1) return this.pop();
    if (index < 0 || index >= this.length) return undefined;

    const before = this.get(index - 1);
    const temp = before.next;
    before.next = temp.next;
    temp.next = null;
    this.length--;
    return temp;
  }
  reverse() {
    let temp = this.head;
    this.head = this.tail;
    this.tail = temp;

    let next = temp.next;
    let prev = null;

    for (let i = 0; i < this.length; i++) {
      next = temp.next;
      temp.next = prev;
      prev = temp;
      temp = next;
    }
    return this;
  }
}

let myLinkedList = new LinkedList(1);

myLinkedList.push(2);
myLinkedList.push(3);
myLinkedList.push(4);

console.log(myLinkedList.reverse());

// Doubly Linked List

class DNode {
  constructor(value) {
    this.value = value;
    this.next = null;
    this.prev = null;
  }
}

class DoublyLinkedList {
  constructor(value) {
    const newNode = new DNode(value);
    this.head = newNode;
    this.tail = this.head;
    this.length = 1;
  }

  push(value) {
    const newNode = new DNode(value);

    if (!this.head) {
      this.head = newNode;
      this.tail = newNode;
    } else {
      this.tail.next = newNode;
      newNode.prev = this.tail;
      this.tail = newNode;
    }
    this.length++;
    return this;
  }
  pop() {
    if (this.length === 0) return undefined;

    let temp = this.tail;
    this.tail = this.tail.prev;
    this.tail.next = null;
    temp.prev = null;
    this.length--;
    if (this.length === 0) {
      this.head = null;
      this.tail = null;
    }

    return temp;
  }
  unshift(value) {
    const newNode = new DNode(value);

    if (!this.head) {
      this.head = newNode;
      this.tail = newNode;
    } else {
      newNode.next = this.head;
      this.head.prev = newNode;
      this.head = newNode;
    }
    this.length++;
    return this;
  }

  shift() {
    if (this.length === 0) return undefined;
    let temp = this.head;
    if (this.length === 1) {
      this.head = null;
      this.tail = null;
    } else {
      this.head = this.head.next;
      this.head.prev = null;
      temp.next = null;
    }
    this.length--;
    return temp;
  }
  get(index) {
    if (index < 0 || index >= this.length) return undefined;
    let temp = this.head;
    if (index < this.length / 2) {
      for (let i = 0; i < index; i++) {
        temp = temp.next;
      }
    } else {
      temp = this.tail;
      for (let i = this.length - 1; i > index; i--) {
        temp = temp.prev;
      }
    }
    return temp;
  }

  set(index, value) {
    let temp = this.get(index);
    if (temp) {
      temp.value = value;
      return true;
    }
    return false;
  }
  insert(index, value) {
    if (index === 0) return this.unshift(value);
    if (index === this.length) return this.push(value);
    if (index < 0 || index > this.length) return false;
    const newNode = new DNode(value);
    const before = this.get(index - 1);
    const after = before.next;
    before.next = newNode;
    newNode.prev = before;
    newNode.next = after;
    after.prev = newNode;
    this.length++;
    return true;
  }

  remove(index) {
    if (index === 0) return this.shift();
    if (index === this.length - 1) return this.pop();
    if (index < 0 || index >= this.length) return undefined;

    const temp = this.get(index);

    temp.prev.next = temp.next;
    temp.next.prev = temp.prev;
    temp.next = null;
    temp.prev = null;
    this.length--;
    return temp;
  }
}
