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
}
