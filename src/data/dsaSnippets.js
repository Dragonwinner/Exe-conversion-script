export const dsaSnippets = [
  {
    id: 1,
    title: "Bubble Sort",
    category: "sorting",
    description: "A simple sorting algorithm that repeatedly steps through the list, compares adjacent elements and swaps them if they are in the wrong order.",
    content: `function bubbleSort(arr) {
  const n = arr.length;
  
  for (let i = 0; i < n; i++) {
    for (let j = 0; j < n - i - 1; j++) {
      if (arr[j] > arr[j + 1]) {
        // Swap the elements
        [arr[j], arr[j + 1]] = [arr[j + 1], arr[j]];
      }
    }
  }
  
  return arr;
}`
  },
  {
    id: 2,
    title: "Binary Search",
    category: "searching",
    description: "A search algorithm that finds the position of a target value within a sorted array.",
    content: `function binarySearch(arr, target) {
  let left = 0;
  let right = arr.length - 1;
  
  while (left <= right) {
    const mid = Math.floor((left + right) / 2);
    
    if (arr[mid] === target) {
      return mid; // Target found
    }
    
    if (arr[mid] < target) {
      left = mid + 1; // Search in the right half
    } else {
      right = mid - 1; // Search in the left half
    }
  }
  
  return -1; // Target not found
}`
  },
  {
    id: 3,
    title: "Linked List Node",
    category: "data-structures",
    description: "Implementation of a basic node for a singly linked list.",
    content: `class Node {
  constructor(data) {
    this.data = data;
    this.next = null;
  }
}

class LinkedList {
  constructor() {
    this.head = null;
    this.size = 0;
  }
  
  // Add a node to the end of the list
  append(data) {
    const newNode = new Node(data);
    
    if (!this.head) {
      this.head = newNode;
      this.size++;
      return;
    }
    
    let current = this.head;
    while (current.next) {
      current = current.next;
    }
    
    current.next = newNode;
    this.size++;
  }
}`
  },
  {
    id: 4,
    title: "Quick Sort",
    category: "sorting",
    description: "An efficient, divide-and-conquer sorting algorithm that works by selecting a 'pivot' element and partitioning the array around it.",
    content: `function quickSort(arr) {
  if (arr.length <= 1) {
    return arr;
  }
  
  const pivot = arr[Math.floor(arr.length / 2)];
  const left = [];
  const right = [];
  const equal = [];
  
  for (const element of arr) {
    if (element < pivot) {
      left.push(element);
    } else if (element > pivot) {
      right.push(element);
    } else {
      equal.push(element);
    }
  }
  
  return [...quickSort(left), ...equal, ...quickSort(right)];
}`
  },
  {
    id: 5,
    title: "Binary Tree Node",
    category: "data-structures",
    description: "Implementation of a basic node for a binary tree structure.",
    content: `class TreeNode {
  constructor(val) {
    this.val = val;
    this.left = null;
    this.right = null;
  }
}

// Example of creating a simple binary tree
function createBinaryTree() {
  const root = new TreeNode(1);
  root.left = new TreeNode(2);
  root.right = new TreeNode(3);
  root.left.left = new TreeNode(4);
  root.left.right = new TreeNode(5);
  
  return root;
}`
  }
];
