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

// Stacks implemented using linked list TC O(1)

class Stack {
  constructor(value) {
    const newNode = new Node(value);
    this.top = newNode;
    this.length = 1;
  }
  push(value) {
    const newNode = new Node(value);
    if (this.length === 0) {
      this.top = newNode;
    } else {
      newNode.next = this.top;
      this.top = newNode;
    }
    this.length++;
    return this;
  }
  pop() {
    if (this.length === 0) return undefined;
    let temp = this.top;
    this.top = this.top.next;
    temp.next = null;
    this.length--;
    return temp;
  }
}

// Queue

class Queue {
  constructor(value) {
    const newNode = new Node(value);
    this.first = newNode;
    this.last = newNode;
    this.length = 1;
  }
  enqueue(value) {
    const newNode = new Node(value);
    if (this.length === 0) {
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
    if (this.length === 0) return undefined;
    let temp = this.first;

    if (this.length === 1) {
      this.first = null;
      this.last = null;
    } else {
      this.first = this.first.next;
      temp.next = null;
    }
    this.length--;
    return temp;
  }
}

// Hash Table

class HashTable {
  constructor(size = 7) {
    this.dataMap = new Array(size);
  }
  _hash(key) {
    let hash = 0;
    for (let i = 0; i < key.length; i++) {
      hash = (hash + key.charCodeAt(i) * 23) % this.dataMap.length;
    }
    return hash;
  }

  set(key, value) {
    let index = this._hash(key);

    if (!this.dataMap[index]) {
      this.dataMap[index] = [];
    }
    this.dataMap[index].push([key, value]);

    return this;
  }
  get(key) {
    let index = this._hash(key);
    if (this.dataMap[index]) {
      for (let i = 0; i < this.dataMap[index].length; i++) {
        if (this.dataMap[index][i][0] === key) {
          return this.dataMap[index][i][1];
        }
      }
    }

    return undefined;
  }
  keys() {
    let allKeys = [];
    for (let i = 0; i < this.dataMap.length; i++) {
      if (this.dataMap[i]) {
        for (let j = 0; j < this.dataMap[i].length; j++) {
          allKeys.push(this.dataMap[i][j][0]);
        }
      }
    }
    return allKeys;
  }
}

let myHashTable = new HashTable();

myHashTable.set("Bolt", 150);
myHashTable.set("car", 1500);
myHashTable.set("nuts", 1500);

console.log(myHashTable);
console.log(myHashTable.get("Bolt"));
console.log(myHashTable.keys());

// Efficient Way to find common number in an array o(n)
const itemInCommon = (arr1, arr2) => {
  let obj = {};

  for (let i = 0; i < arr1.length; i++) {
    obj[arr1[i]] = true;
  }

  for (let j = 0; j < arr2.length; j++) {
    if (obj[arr2[j]]) return arr2[j];
  }
  return false;
};

const arr1 = [1, 2, 3, 4, 5];
const arr2 = [9, 0, 8, 7, 5];

console.log(itemInCommon(arr1, arr2));

// Factorial

const factorial = (n) => {
  if (n === 1) return 1;
  return n * factorial(n - 1);
};

const factorialT = (n) => {
  if (n === 0) return 1;

  let result = 1;

  for (let i = n; i > 0; i--) {
    result *= i;
  }

  console.log(result);
};

console.log("factorial====>", factorial(4));
console.log("factorial====>", factorial(10));

factorialT(4);

const countCharaters = (str) => {
  let obj = {};

  for (let i = 0; i < str.length; i++) {
    let char = str[i];

    if (obj[char] === undefined) {
      obj[char] = 1;
    } else {
      obj[char]++;
    }
  }
  for (let key in obj) {
    console.log(key, "===>", obj[key]);
  }
};

countCharaters("masai");

const armstrongNumber = (n) => {
  let temp = n;
  let sum = 0;

  while (n > 0) {
    sum += (n % 10) ** 3;

    n = Math.floor(n / 10);
  }

  return sum === temp;
};

const binarySearch = (arr, target) => {
  let left = 0;
  let right = arr.length - 1;

  while (left <= right) {
    let middle = Math.floor((left + right) / 2);

    if (arr[middle] === target) {
      return middle;
    } else if (arr[middle] < target) {
      left = middle + 1;
    } else if (arr[middle] > target) {
      right = middle - 1;
    }
  }

  return -1;
};

console.log("Binary search====>", binarySearch([1, 2, 3, 4, 5], 1));
console.log("Armstrong Number====>", armstrongNumber(153));

const seieveOfErasthenus = (n) => {
  let prime = new Array(n + 1).fill(true);

  prime[0] = false;
  prime[1] = false;

  for (let i = 2; i < Math.sqrt(n); i++) {
    if (prime[i]) {
      for (let j = i * i; j <= n; j = j + i) {
        prime[j] = false;
      }
    }
  }

  for (let i = 0; i < prime.length; i++) {
    if (prime[i]) {
      console.log(i);
    }
  }
};

seieveOfErasthenus(3);
