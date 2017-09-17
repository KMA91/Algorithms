// Constructors

function node(val){
  this.val = val;
  this.next = null;
}

function SLL() {
  this.head = null;
  this.tail = null;
}

// Initializing SLL and nodes

var list = new SLL();
var n1 = new node(1);
var n2 = new node(2);
var n3 = new node(3);

// Populating list with nodes

list.head = n1;
list.head.next = n2;

// Given an SLL and a value, add a node to the SLL

function addNode(list, val){
  // Check to see if list is empty, if so, intialize new node make it list.head.
  // Then return the list
  var new_node = new node(val);
  if(!list.head){
    list.head = new_node;
    return list;
  }

  // Initialize pointer and point it at list.head
  // Initialize a new node to be added to the given SLL
  var current = list.head;

  // Traverse through sll until the node before the end
  while(current.next){
    current = current.next;
  }

  // Add the new node after the current list's last node
  current.next = new_node;
  return list;
}

console.log(addNode(list, 3));
