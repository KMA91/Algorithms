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
var n5 = new node(5);
var n6 = new node(6);

// Populating list with nodes
list.head = n1;
list.head.next = n2;
list.head.next.next = n3;
list.head.next.next.next = n4;
list.head.next.next.next.next = n5;
list.head.next.next.next.next.next = n6;

// Ex.1 // Given a SLL, find Kth node from the end of the list.

function kthNode(list, num){
  var current = list.head;
  var pointer = false;
  var count = 0;

  // Iterates through nodes
  while(current){
    count++;

    // Adds pointer to NUM behind the CURRENT pointer
    if(count == num){
      pointer = list.head;
      // If the pointer was instatiated already, this will iterate through the list
    }else if(count > num){
      pointer = pointer.next;
    }
    current = current.next;
  }
  // This will either output the kth node from the end OR false if the num given is not existent in the list
  return pointer;
}

console.log(kthNode(list, 3));
