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

// Ex.1 // Replace head node with the next node
console.log(">>> Ex.1 Replace head node with the next node <<<");
list.head = list.head.next;
console.log(list);

list.head = n1;
list.head.next = n2;
list.head.next.next = n3;

// Ex.2 // Replace tail with node before tail
console.log(">>> Ex.2 Replace node at tail with the node before it");

function removeNode(sll){
  var current = sll.head;
  if(current == null){
    return false;
  }
  while(current.next.next != null){
    current = current.next;
  }
  current.next = null;
  console.log("return return");
  return sll;
}

console.log(removeNode(list));

list.head = n1;
list.head.next = n2;
list.head.next.next = n3;
list.head.next.next.next = n4;

// Ex.3 // Remove middle node and replace it with the node before
console.log(">>> Ex.3 Remove middle node and replace it with the node after <<<");

function removeMid(sll){
  var current = sll.head;
  if(current == null){
    return null;
  }
  var count = 1;
  while(current.next != null){
    count ++;
    current = current.next;
  }
  var count = Math.floor(count/2);
  current = sll.head;
  var pointer;
  while(count != 1){
    count--;
    pointer = current;
    current = current.next;
  }
  pointer.next = pointer.next.next;
  return sll;
}

console.log(removeMid(list));
