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
var n1 = new node(0);
var n2 = new node(1);
var n3 = new node(2);
var n4 = new node(0);

// Populating list with nodes
list.head = n1;
list.head.next = n2;
list.head.next.next = n3;
list.head.next.next.next = n4;

// Ex.1 // Given an SLL with random amounts of values of 0, 1, 2, sort the SLL so that all values are sorted from smallest to largest

function sort012(sll){

  if(!sll.head){
    return false;
  }

  // Instatiate arrays to push nodes into
  var zero = [];
  var one = [];
  var two = [];
  var current = sll.head;

  // Pushing nodes with values respective to their array group
  while(current){
    if(current.val == 0){
      zero.push(current);
      var pointer = current;
      current = current.next;
      pointer.next = null;
    }
    else if(current.val == 1){
      one.push(current);
      var pointer = current;
      current = current.next;
      pointer.next = null;
    }else if(current.val == 2){
      two.push(current);
      var pointer = current;
      current = current.next;
      pointer.next = null;
    }
  }

  var newSLL = new SLL();

  // Start list head with lowest value
  if(zero.length){
    newSLL.head = zero.pop();
  }else if(one.length){
    newSLL.head = one.pop();
  }else if(two.length){
    newSLL.head = two.pop();
  }

  // Instatiate new list and add nodes in order of value
  var current = newSLL.head;

  while(zero.length){
    current.next = zero.pop();
    current = current.next;
  }
  while(one.length){
    current.next = one.pop();
    current = current.next;
  }
  while(two.length){
    current.next = two.pop();
    current = current.next;
  }

  current = newSLL.head;
  var count = 0;

  // Checks if nodes are in the right place
  while(current){
    console.log(current.val);
    current = current.next;
  }

  return newSLL;
}

console.log(sort012(list));
