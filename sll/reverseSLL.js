// Constructors

function node(val){
  this.val = val;
  this.next = null;
}

function SLL() {
  this.head = null;
  this.tail = null;
}

// Instatiating SLL and nodes

var list = new SLL();
var n1 = new node(1);
var n2 = new node(2);
var n3 = new node(3);
var n4 = new node(4);

// Populating list with nodes
list.head = n1;
list.head.next = n2;
list.head.next.next = n3;
list.head.next.next.next = n4;

// Ex.1 // Given an SLL, reverse the SLL

function reverse(sll){
  // var nodes // Used to push nodes into reusable list
  var nodes = [];
  var current = sll.head;
  // var pointer // Used to remove .next of node
  var pointer;

  while(current != null){
    nodes.push(current);
    pointer = current
    current = current.next;
    pointer.next = null;
  }

  var newSLL = new SLL();
  // Adds the last node in original list to head of new list
  newSLL.head = nodes.pop();
  var current = newSLL.head;

  // Add the rest of the nodes in
  while(nodes.length != 0){
    current.next = nodes.pop();
    nodes.pop();
    current = current.next;
  }

  return newSLL;
}

console.log(reverse(list));
